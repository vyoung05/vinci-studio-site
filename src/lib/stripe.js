import { loadStripe } from '@stripe/stripe-js';

// Publishable key is safe to include in frontend code
const STRIPE_PUBLISHABLE_KEY = 'pk_live_51Ssi8VL7PxGTC5wRrPzihYVoUcstxBpDY4JZiGonnNQTxdIgqKB2E0ZSp6IUUJlTYCc8MRcfSZrUAHdcww3B9ZOi00mtP8kuB5';

let stripePromise;

export function getStripe() {
  if (!stripePromise) {
    stripePromise = loadStripe(STRIPE_PUBLISHABLE_KEY);
  }
  return stripePromise;
}

// Stripe product/price mapping
// Price IDs need to be set after creating prices in Stripe Dashboard
// For now using product IDs as reference - update with actual price_xxx IDs
export const PRODUCTS = {
  desktop: {
    name: 'Vinci Studio Desktop',
    productId: 'prod_U1l9w5IYg38imY',
    priceId: 'price_desktop', // TODO: Replace with actual price_xxx from Stripe
    mode: 'payment',
    amount: 9900,
  },
  pro: {
    name: 'Vinci Studio Web Pro',
    productId: 'prod_U1lAMZb7s5r4Lj',
    priceId: 'price_pro', // TODO: Replace with actual price_xxx from Stripe
    mode: 'subscription',
    amount: 999,
  },
  studio: {
    name: 'Vinci Studio Web Studio',
    productId: 'prod_studio', // TODO: Get from Stripe
    priceId: 'price_studio', // TODO: Replace with actual price_xxx from Stripe
    mode: 'subscription',
    amount: 2999,
  },
};
