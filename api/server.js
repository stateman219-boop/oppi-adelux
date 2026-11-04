import express from "express";
import cors from "cors";
import pg from "pg";
import { randomBytes } from "node:crypto";
const { Pool } = pg;
const pool = process.env.DATABASE_URL ? new Pool({ connectionString: process.env.DATABASE_URL, ssl: process.env.DATABASE_SSL === "false" ? false : { rejectUnauthorized: false } }) : null;
let schemaReady;
async function ensureSchema() {
  if (!pool) throw new Error("Order tracking database is not configured. Set DATABASE_URL in Render.");
  if (!schemaReady) schemaReady = pool.query("CREATE TABLE IF NOT EXISTS adelux_orders (id BIGSERIAL PRIMARY KEY, order_number VARCHAR(20) UNIQUE NOT NULL, payment_reference VARCHAR(100) UNIQUE, customer_name VARCHAR(120) NOT NULL, email VARCHAR(254) NOT NULL, phone VARCHAR(30) NOT NULL, collection_location VARCHAR(160) NOT NULL DEFAULT 'ADELUX Area 10 store, Abuja', customer_note TEXT NOT NULL DEFAULT '', items JSONB NOT NULL, total_kobo BIGINT NOT NULL, payment_status VARCHAR(24) NOT NULL DEFAULT 'pending', fulfilment_status VARCHAR(32) NOT NULL DEFAULT 'awaiting_payment', status_history JSONB NOT NULL DEFAULT '[]'::jsonb, created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(), updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW())");
  await schemaReady;
}

const app = express();
app.use(express.json({ limit: "20kb" }));
const allowedOrigins = new Set(
  (process.env.FRONTEND_ORIGINS || process.env.FRONTEND_ORIGIN || "https://oppigraphix.com,https://stateman219-boop.github.io")
    .split(",").map(origin => origin.trim()).filter(Boolean)
);
app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.has(origin)) return callback(null, true);
    return callback(new Error("Origin not allowed."));
  },
  methods: ["GET", "POST", "PATCH"],
  allowedHeaders: ["Content-Type", "x-order-admin-token"]
}));

const secret = process.env.PAYSTACK_SECRET_KEY;
const currency = "NGN";

// The server is the source of truth for every product price (integer kobo).
// Provisional Shirts & Tops price: ₦15,000 (1,500,000 kobo); update via Render when final prices are confirmed.
const configuredKobo = (key, fallback) => {
  const raw = process.env[key];
  return raw === undefined || raw.trim() === "" ? fallback : Number(raw);
};
const addProducts = (ids, name, price) => Object.fromEntries(
  ids.map((id, index) => [id, { name: `${name} ${String(index + 1).padStart(2, "0")}`, price }])
);
const catalog = {
  ...addProducts([1, ...Array.from({ length: 14 }, (_, i) => 37 + i), 71, 72, 73, 74], "Shirt Design", configuredKobo("SHIRTS_PRICE_KOBO", 1500000)),
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
  const customerName = typeof req.body?.customer?.name === "string" ? req.body.customer.name.trim().slice(0,120) : "";
  const phone = typeof req.body?.customer?.phone === "string" ? req.body.customer.phone.trim().slice(0,30) : "";
  const customerNote = typeof req.body?.customer?.note === "string" ? req.body.customer.note.trim().slice(0,500) : "";
  const collectionLocation = "ADELUX Area 10 store, Abuja";
  const items = Array.isArray(req.body?.items) ? req.body.items : [];
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "A valid email is required." });
  }
  if (customerName.length < 2 || !/^\+?[0-9\s()-]{10,18}$/.test(phone)) return res.status(400).json({ error: "Enter your full name and a valid mobile number." });
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
    const size = typeof line?.size === 'string' ? line.size.trim().slice(0, 40) : '';
    const color = typeof line?.color === 'string' ? line.color.trim().slice(0, 40) : '';
    orderLines.push({ productId: id, name: product.name, quantity, size, color, unitPriceKobo: product.price, lineTotalKobo: product.price * quantity });
  }
  if (!Number.isSafeInteger(amount) || amount <= 0 || amount > 1000000000) {
    return res.status(400).json({ error: "Order total is invalid." });
  }

  try {
    await ensureSchema();
    const orderNumber = "AD" + randomBytes(5).toString("hex").toUpperCase();
    await pool.query("INSERT INTO adelux_orders (order_number, customer_name, email, phone, collection_location, customer_note, items, total_kobo) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)", [orderNumber, customerName, email, phone, collectionLocation, customerNote, JSON.stringify(orderLines), amount]);
    console.log(`[payment:init] request received; order=${orderNumber}; itemCount=${items.length}; amountKobo=${amount}`);
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
          order_number: orderNumber,
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
    await pool.query("UPDATE adelux_orders SET payment_reference=$1, updated_at=NOW() WHERE order_number=$2", [data.data.reference, orderNumber]);
    res.json({ authorizationUrl: data.data.authorization_url, reference: data.data.reference, orderNumber });
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
    const orderItems = Array.isArray(transaction.metadata?.order_items) ? transaction.metadata.order_items : [];
    const orderNumber = typeof transaction.metadata?.order_number === "string" ? transaction.metadata.order_number : "";
    const expectedAmount = orderItems.reduce((sum, item) => sum + Number(item?.lineTotalKobo || 0), 0);
    const amountMatchesOrder = Number.isSafeInteger(expectedAmount) && expectedAmount === Number(transaction.amount);
    const verified = transaction.status === "success" && transaction.currency === currency && amountMatchesOrder;
    if (verified && orderNumber) {
      await ensureSchema();
      await pool.query("UPDATE adelux_orders SET payment_status='paid', fulfilment_status=CASE WHEN fulfilment_status='awaiting_payment' THEN 'order_received' ELSE fulfilment_status END, status_history=CASE WHEN fulfilment_status='awaiting_payment' THEN status_history || $1::jsonb ELSE status_history END, updated_at=NOW() WHERE order_number=$2 AND payment_reference=$3", [JSON.stringify([{ status: "order_received", label: "Order received", day: 1, at: new Date().toISOString() }]), orderNumber, reference]);
    }
    res.json({
      verified,
      orderNumber,
      status: transaction.status,
      amount: transaction.amount,
      currency: transaction.currency,
      reference: transaction.reference,
      amountMatchesOrder,
      orderItems
    });
  } catch {
    res.status(502).json({ error: "Payment verification is temporarily unavailable." });
  }
});

app.get("/api/orders/track", async (req, res) => {
  try {
    await ensureSchema();
    const orderNumber = String(req.query.orderNumber || "").trim().toUpperCase();
    const phone = String(req.query.phone || "").replace(/[^0-9]/g, "");
    if (!/^AD[A-F0-9]{10}$/.test(orderNumber) || phone.length < 10) return res.status(400).json({ error: "Enter the order number and mobile number used at checkout." });
    const result = await pool.query("SELECT order_number, customer_name, phone, collection_location, items, total_kobo, payment_status, fulfilment_status, status_history, created_at, updated_at FROM adelux_orders WHERE order_number=$1", [orderNumber]);
    const order = result.rows[0];
    if (!order || String(order.phone).replace(/[^0-9]/g, "") !== phone) return res.status(404).json({ error: "We could not find an order matching those details." });
    res.json({ orderNumber: order.order_number, customerName: order.customer_name, collectionLocation: order.collection_location, items: order.items, totalKobo: Number(order.total_kobo), paymentStatus: order.payment_status, status: order.fulfilment_status, history: order.status_history, createdAt: order.created_at, updatedAt: order.updated_at, timeline: [{ status: "order_received", day: 1, label: "Order received" }, { status: "packaged", day: 2, label: "Order packaged" }, { status: "sent_to_store", day: 3, label: "Sent to Area 10 store" }, { status: "ready_for_pickup", day: 4, label: "Ready for pickup" }, { status: "customer_called", day: 5, label: "Customer called to arrange pickup" }] });
  } catch (error) { res.status(503).json({ error: error.message || "Order tracking is temporarily unavailable." }); }
});
app.patch("/api/orders/:orderNumber/status", async (req, res) => {
  if (!process.env.ORDER_ADMIN_TOKEN || req.get("x-order-admin-token") !== process.env.ORDER_ADMIN_TOKEN) return res.status(401).json({ error: "Not authorised." });
  const allowed = { order_received: { day: 1, label: "Order received" }, packaged: { day: 2, label: "Order packaged" }, sent_to_store: { day: 3, label: "Sent to Area 10 store" }, ready_for_pickup: { day: 4, label: "Ready for pickup" }, customer_called: { day: 5, label: "Customer called to arrange pickup" }, collected: { day: 5, label: "Collected by customer" } };
  const next = allowed[String(req.body?.status || "")];
  if (!next) return res.status(400).json({ error: "Choose a valid order progress status." });
  try {
    await ensureSchema();
    const orderNumber = String(req.params.orderNumber).toUpperCase();
    const current = await pool.query("SELECT status_history, payment_status FROM adelux_orders WHERE order_number=$1", [orderNumber]);
    if (!current.rowCount) return res.status(404).json({ error: "Order not found." });
    if (current.rows[0].payment_status !== "paid") return res.status(409).json({ error: "Only paid orders can move through fulfilment." });
    const sequence = ["order_received", "packaged", "sent_to_store", "ready_for_pickup", "customer_called", "collected"];
    const currentStatus = (Array.isArray(current.rows[0].status_history) ? current.rows[0].status_history : []).slice(-1)[0]?.status || "order_received";
    if (sequence.indexOf(req.body.status) !== sequence.indexOf(currentStatus) + 1) return res.status(409).json({ error: "Move orders through the five-day process in sequence." });
    const entry = { status: req.body.status, day: next.day, label: next.label, at: new Date().toISOString() };
    const history = [...(Array.isArray(current.rows[0].status_history) ? current.rows[0].status_history : []), entry];
    await pool.query("UPDATE adelux_orders SET fulfilment_status=$1, status_history=$2, updated_at=NOW() WHERE order_number=$3", [req.body.status, JSON.stringify(history), orderNumber]);
    res.json({ ok: true, orderNumber, status: req.body.status, history });
  } catch (error) { res.status(503).json({ error: error.message || "Could not update order progress." }); }
});
const port = Number(process.env.PORT || 3000);
app.listen(port, () => console.log(`ADELUX payment API listening on ${port}`));
