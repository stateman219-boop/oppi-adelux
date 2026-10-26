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

// Prices are configured as integer kobo amounts on the server.
// Set PRODUCT_1_PRICE_KOBO ... PRODUCT_6_PRICE_KOBO in hosting env vars.
const catalog = {
  1: { name: "Shirts & Tops", price: Number(process.env.PRODUCT_1_PRICE_KOBO) || 500000 },
  2: { name: "Baggy Jeans", price: Number(process.env.PRODUCT_2_PRICE_KOBO) || 1200000 },
  3: { name: "Jerseys", price: Number(process.env.PRODUCT_3_PRICE_KOBO) || 800000 },
  4: { name: "Joggers & Hoodies", price: Number(process.env.PRODUCT_4_PRICE_KOBO) || 1500000 },
  5: { name: "Cotton Dresses", price: Number(process.env.PRODUCT_5_PRICE_KOBO) || 1800000 },
  6: { name: "Shoes, Bags & Jewelry", price: Number(process.env.PRODUCT_6_PRICE_KOBO) || 1000000 }
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
    orderLines.push({ productId: id, name: product.name, quantity });
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
        metadata: { custom_fields: [{ display_name: "Order items", variable_name: "order_items", value: JSON.stringify(orderLines) }] }
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
      reference: transaction.reference
    });
  } catch {
    res.status(502).json({ error: "Payment verification is temporarily unavailable." });
  }
});

const port = Number(process.env.PORT || 3000);
app.listen(port, () => console.log(`ADELUX payment API listening on ${port}`));
