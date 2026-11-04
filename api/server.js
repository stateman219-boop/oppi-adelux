import express from "express";
import cors from "cors";

const app = express();
app.use(express.json({ limit: "20kb" }));
app.use(cors({
  origin: process.env.FRONTEND_ORIGIN || "https://stateman219-boop.github.io",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));

const secret = process.env.PAYSTACK_SECRET_KEY;
const currency = "NGN";

// The server is the source of truth for every product price (integer kobo).
// Shirts & Tops remain unavailable for online payment until SHIRTS_PRICE_KOBO is set.
const configuredKobo = (key, fallback) => {
  const raw = process.env[key];
  return raw === undefined || raw.trim() === "" ? fallback : Number(raw);
};
const addProducts = (ids, name, price) => Object.fromEntries(
  ids.map(id => [id, { name: `${name} ${String(id).padStart(2, "0")}`, price }])
);
const catalog = {
  ...addProducts([1, ...Array.from({ length: 14 }, (_, i) => 37 + i), 71, 72, 73, 74], "Shirt Design", configuredKobo("SHIRTS_PRICE_KOBO", 0)),
  ...addProducts([3, ...Array.from({ length: 10 }, (_, i) => 51 + i)], "Jersey Design", configuredKobo("JERSEYS_PRICE_KOBO", 2500000)),
  ...addProducts(Array.from({ length: 19 }, (_, i) => 7 + i).concat(Array.from({ length: 8 }, (_, i) => 61 + i)), "Agbada Design", configuredKobo("AGBADA_PRICE_KOBO", 2000000)),
  ...addProducts(Array.from({ length: 11 }, (_, i) => 26 + i).concat([69, 70]), "Dress Design", configuredKobo("DRESSES_PRICE_KOBO", 1800000)),
  2: { name: "Baggy Jeans", price: configuredKobo("BAGGY_JEANS_PRICE_KOBO", 1200000) },
  4: { name: "Joggers & Hoodies", price: configuredKobo("JOGGERS_PRICE_KOBO", 1500000) },
  6: { name: "Shoes, Bags & Jewelry", price: configuredKobo("ACCESSORIES_PRICE_KOBO", 1000000) }
};

app.get("/health", (_req, res) => res.json({ ok: true }));

app.post("/api/payments/initialize", async (req, res) => {
  if (!secret) return res.status(503).json({ error: "Payments are not configured yet." });
  const email = typeof req.body?.email === "string" ? req.body.email.trim().toLowerCase() : "";
  const items = Array.isArray(req.body?.items) ? req.body.items : [];
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "A valid email is required." });
  }
  if (!items.length || items.length > 20) {
    return res.status(400).json({ error: "Add between 1 and 20 items." });
  }

  let amount = 0;
  const orderLines = [];
  for (const line of items) {
    const id = Number(line?.productId);
    const quantity = Number(line?.quantity);
    const product = catalog[id];
    if (!product || !Number.isInteger(quantity) || quantity < 1 || quantity > 20) {
      return res.status(400).json({ error: "Invalid product or quantity." });
    }
    if (!Number.isSafeInteger(product.price) || product.price <= 0) {
      return res.status(409).json({ error: "Product prices must be configured before checkout." });
    }
    amount += product.price * quantity;
    orderLines.push({ productId: id, name: product.name, quantity, unitPriceKobo: product.price, lineTotalKobo: product.price * quantity });
  }
  if (!Number.isSafeInteger(amount) || amount <= 0 || amount > 1000000000) {
    return res.status(400).json({ error: "Order total is invalid." });
  }

  try {
    console.log(`[payment:init] request received; itemCount=${items.length}; amountKobo=${amount}`);
    const response = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      signal: AbortSignal.timeout(20000),
      headers: { Authorization: `Bearer ${secret}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        amount: String(amount),
        currency,
        callback_url: process.env.PAYSTACK_CALLBACK_URL || `${process.env.FRONTEND_ORIGIN || "https://stateman219-boop.github.io"}/oppi-adelux/payment-result.html`,
        metadata: {
          order_items: orderLines,
          custom_fields: [{ display_name: "Order items", variable_name: "order_items", value: JSON.stringify(orderLines) }]
        }
      })
    });
    const data = await response.json();
    console.log(`[payment:init] Paystack responded; http=${response.status}; status=${Boolean(data?.status)}; message=${String(data?.message || "none")}`);
    if (!response.ok || !data.status || !data.data?.authorization_url) {
      return res.status(502).json({ error: data?.message || "Paystack rejected the initialization request.", paystackStatus: response.status });
    }
    res.json({ authorizationUrl: data.data.authorization_url, reference: data.data.reference });
  } catch (error) {
    const timedOut = error?.name === "TimeoutError" || error?.name === "AbortError";
    console.error(`[payment:init] ${timedOut ? "Paystack request timed out" : "Paystack request failed"}; error=${String(error?.message || error)}`);
    if (!res.headersSent) res.status(502).json({ error: timedOut ? "Paystack did not respond within 20 seconds. Please retry." : "Payment service is temporarily unavailable. Check backend logs." });
  }
});

app.get("/api/payments/verify/:reference", async (req, res) => {
  if (!secret) return res.status(503).json({ error: "Payments are not configured yet." });
  const reference = String(req.params.reference || "");
  if (!/^[a-zA-Z0-9._=-]{8,100}$/.test(reference)) {
    return res.status(400).json({ error: "Invalid payment reference." });
  }
  try {
    const response = await fetch(`https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`, {
      headers: { Authorization: `Bearer ${secret}` }
    });
    const data = await response.json();
    if (!response.ok || !data.status || !data.data) return res.status(502).json({ error: "Could not verify payment." });
    const transaction = data.data;
    res.json({
      verified: transaction.status === "success" && transaction.currency === currency,
      status: transaction.status,
      amount: transaction.amount,
      currency: transaction.currency,
      reference: transaction.reference,
      orderItems: Array.isArray(transaction.metadata?.order_items) ? transaction.metadata.order_items : []
    });
  } catch {
    res.status(502).json({ error: "Payment verification is temporarily unavailable." });
  }
});

const port = Number(process.env.PORT || 3000);
app.listen(port, () => console.log(`ADELUX payment API listening on ${port}`));
