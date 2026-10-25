import type { VercelRequest, VercelResponse } from '@vercel/node';

type CheckoutItem = { name: string; quantity: number; unitPrice: number };

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const secretKey = process.env.FLW_SECRET_KEY;
  if (!secretKey) return res.status(503).json({ error: 'Payment setup is not configured yet.' });

  const body = req.body as { email?: string; items?: CheckoutItem[] };
  const email = typeof body?.email === 'string' ? body.email.trim() : '';
  const items = Array.isArray(body?.items) ? body.items : [];

  if (!email || !/^\S+@\S+\.\S+$/.test(email) || !items.length) {
    return res.status(400).json({ error: 'A valid email and at least one item are required.' });
  }

  const validItems = items.every(item =>
    typeof item.name === 'string' && item.name.trim() &&
    Number.isInteger(item.quantity) && item.quantity > 0 &&
    Number.isFinite(item.unitPrice) && item.unitPrice > 0
  );
  if (!validItems) return res.status(400).json({ error: 'Invalid item or price.' });

  const amount = items.reduce((sum, item) => sum + item.quantity * item.unitPrice, 0);
  if (!Number.isFinite(amount) || amount <= 0) {
    return res.status(400).json({ error: 'Invalid checkout total.' });
  }

  const txRef = `adelux-${crypto.randomUUID()}`;
  const origin = req.headers.origin;
  const allowedOrigin = process.env.PUBLIC_SITE_URL;
  if (allowedOrigin && origin && origin !== allowedOrigin) {
    return res.status(403).json({ error: 'Origin not allowed.' });
  }

  try {
    const response = await fetch('https://api.flutterwave.com/v3/payments', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${secretKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        tx_ref: txRef,
        amount: amount.toFixed(2),
        currency: 'NGN',
        redirect_url: `${allowedOrigin || 'https://stateman219-boop.github.io/oppi-adelux'}/payment-return.html`,
        customer: { email },
        customizations: {
          title: 'ADELUX Collections',
          description: 'Clothing order',
          logo: 'https://stateman219-boop.github.io/oppi-adelux/adelux-logo.png.png'
        },
        meta: { items }
      })
    });
    const data = await response.json();
    if (!response.ok || data?.status !== 'success' || !data?.data?.link) {
      return res.status(502).json({ error: 'Flutterwave could not start checkout.' });
    }
    return res.status(200).json({ checkoutUrl: data.data.link, txRef });
  } catch {
    return res.status(502).json({ error: 'Unable to start checkout. Please try again.' });
  }
}
