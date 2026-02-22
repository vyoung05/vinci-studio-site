// Vercel Serverless Function — creates a Stripe Checkout session
// STRIPE_SECRET_KEY must be set in Vercel environment variables (Dashboard → Settings → Environment Variables)

import Stripe from 'stripe';

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const secretKey = process.env.STRIPE_SECRET_KEY;
  if (!secretKey) {
    console.error('STRIPE_SECRET_KEY is not configured');
    return res.status(500).json({ error: 'Stripe is not configured. Set STRIPE_SECRET_KEY in Vercel env vars.' });
  }

  const stripe = new Stripe(secretKey);

  try {
    const { priceId, mode, successUrl, cancelUrl } = req.body;

    if (!priceId || !mode) {
      return res.status(400).json({ error: 'Missing required fields: priceId, mode' });
    }

    if (!['payment', 'subscription'].includes(mode)) {
      return res.status(400).json({ error: 'Invalid mode. Must be "payment" or "subscription"' });
    }

    const sessionConfig = {
      mode,
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: successUrl || `${req.headers.origin}/download?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: cancelUrl || `${req.headers.origin}/buy?canceled=true`,
      // Enable promo codes — coupons must be created in Stripe Dashboard
      allow_promotion_codes: true,
    };

    // For one-time payments, enable invoice creation for receipts
    if (mode === 'payment') {
      sessionConfig.payment_intent_data = {
        metadata: {
          product: 'vinci-studio',
        },
      };
    }

    const session = await stripe.checkout.sessions.create(sessionConfig);

    return res.status(200).json({ 
      sessionId: session.id,
      url: session.url,
    });
  } catch (error) {
    console.error('Stripe checkout error:', error);
    return res.status(500).json({ 
      error: error.message || 'Failed to create checkout session',
    });
  }
}
