import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getStripe, PRODUCTS } from '../lib/stripe';

const desktopFeatures = [
  'Full desktop app — Windows (Mac coming soon)',
  'AI Image & Video Generation (BYOK)',
  'Professional NLE Timeline',
  'Cinematic camera & lens controls',
  'Bot API access',
  'Portable .vinci project files',
  'Free updates for life',
];

const webTiers = [
  {
    name: 'Free',
    price: '$0',
    period: '/mo',
    desc: 'Try the web editor with basic features',
    features: [
      '720p export',
      '1 project',
      'Basic timeline editing',
      'Community support',
      'Watermarked exports',
    ],
    cta: 'Get Started',
    accent: false,
    productKey: null,
  },
  {
    name: 'Pro',
    price: '$9.99',
    period: '/mo',
    desc: 'For creators who need more power',
    features: [
      '1080p export',
      'Unlimited projects',
      'AI generation (BYOK)',
      'Priority support',
      'No watermark',
      'Cloud project storage (5GB)',
    ],
    cta: 'Subscribe to Pro',
    accent: true,
    popular: true,
    productKey: 'pro',
  },
  {
    name: 'Studio',
    price: '$29.99',
    period: '/mo',
    desc: 'Full power for professional teams',
    features: [
      '4K export',
      'Unlimited projects',
      'AI generation (BYOK)',
      'Priority support',
      'No watermark',
      'Cloud storage (50GB)',
      'Team collaboration',
      'Custom branding on exports',
      'API access',
    ],
    cta: 'Subscribe to Studio',
    accent: false,
    productKey: 'studio',
  },
];

export default function Buy() {
  const [searchParams] = useSearchParams();
  const initialTab = searchParams.get('tab') || 'desktop';
  const canceled = searchParams.get('canceled');

  const [tab, setTab] = useState(initialTab);
  const [processing, setProcessing] = useState(null); // Track which product is processing
  const [error, setError] = useState(null);
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);

  // Known promo codes (for UI display — actual validation happens in Stripe)
  const promoCodes = {
    FRIEND100: { discount: '100%', label: 'Friend & Family — Free!' },
    LAUNCH50: { discount: '50%', label: 'Launch Discount — 50% off' },
    VINCI25: { discount: '25%', label: 'Vinci Discount — 25% off' },
  };

  const handlePromoCheck = () => {
    const code = promoCode.toUpperCase().trim();
    if (promoCodes[code]) {
      setPromoApplied(true);
      setError(null);
    } else if (code) {
      setPromoApplied(false);
      setError('Invalid promo code. Try again or continue without one.');
    }
  };

  const handleCheckout = async (productKey) => {
    setProcessing(productKey);
    setError(null);

    const product = PRODUCTS[productKey];
    if (!product) {
      setError('Unknown product');
      setProcessing(null);
      return;
    }

    try {
      const response = await fetch('/api/create-checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          priceId: product.priceId,
          mode: product.mode,
          successUrl: `${window.location.origin}/studio/download?success=true&session_id={CHECKOUT_SESSION_ID}`,
          cancelUrl: `${window.location.origin}/studio/buy?canceled=true`,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create checkout session');
      }

      // Redirect to Stripe Checkout
      if (data.url) {
        window.location.href = data.url;
      } else {
        // Fallback: use Stripe.js redirect
        const stripe = await getStripe();
        const { error: stripeError } = await stripe.redirectToCheckout({
          sessionId: data.sessionId,
        });
        if (stripeError) {
          throw new Error(stripeError.message);
        }
      }
    } catch (err) {
      console.error('Checkout error:', err);
      setError(err.message || 'Something went wrong. Please try again.');
      setProcessing(null);
    }
  };

  return (
    <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-accent-cyan/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-accent-magenta/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Canceled Banner */}
        {canceled && (
          <div className="max-w-2xl mx-auto mb-8 p-4 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-center">
            <p className="text-yellow-400 text-sm font-medium">
              Checkout was canceled. No worries — you can try again whenever you're ready.
            </p>
          </div>
        )}

        {/* Error Banner */}
        {error && (
          <div className="max-w-2xl mx-auto mb-8 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-center">
            <p className="text-red-400 text-sm font-medium">{error}</p>
          </div>
        )}

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-primary mb-4">
            Choose your <span className="gradient-text">plan</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Own the desktop app outright, or try the web version with flexible subscription tiers.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-xl glass p-1.5">
            <button
              onClick={() => setTab('desktop')}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                tab === 'desktop'
                  ? 'bg-accent-cyan/20 text-accent-cyan border border-accent-cyan/30'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              🖥️ Desktop — Own It
            </button>
            <button
              onClick={() => setTab('web')}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                tab === 'web'
                  ? 'bg-accent-cyan/20 text-accent-cyan border border-accent-cyan/30'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              🌐 Web — Subscribe
            </button>
          </div>
        </div>

        {/* Promo Code Section */}
        <div className="max-w-md mx-auto mb-10">
          <div className="glass rounded-xl p-4">
            <label className="block text-xs text-text-muted uppercase tracking-wider mb-2">
              🏷️ Have a promo code?
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={promoCode}
                onChange={(e) => { setPromoCode(e.target.value); setPromoApplied(false); }}
                placeholder="Enter code (e.g. LAUNCH50)"
                className="flex-1 px-4 py-2.5 rounded-lg bg-bg-primary border border-border text-text-primary text-sm placeholder-text-muted focus:border-accent-cyan focus:outline-none transition-colors font-mono uppercase"
              />
              <button
                onClick={handlePromoCheck}
                className="px-5 py-2.5 rounded-lg border border-accent-cyan/30 text-accent-cyan font-semibold text-sm hover:bg-accent-cyan/10 transition-all"
              >
                Apply
              </button>
            </div>
            {promoApplied && promoCodes[promoCode.toUpperCase().trim()] && (
              <div className="mt-2 flex items-center gap-2 text-green-400 text-xs">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {promoCodes[promoCode.toUpperCase().trim()].label} — Discount will be applied at checkout
              </div>
            )}
            <p className="text-xs text-text-muted mt-2">
              Promo codes are applied during Stripe checkout. Enter your code and it will carry over.
            </p>
          </div>
        </div>

        {/* Desktop Purchase */}
        {tab === 'desktop' && (
          <div className="max-w-lg mx-auto">
            <div className="relative rounded-2xl glass glow-cyan overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-accent-cyan to-accent-magenta" />
              <div className="p-8 sm:p-10">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20 mb-6">
                  ONE-TIME PURCHASE
                </div>

                <h2 className="text-2xl font-bold text-text-primary mb-2">Vinci Studio Suite</h2>
                <p className="text-text-secondary text-sm mb-6">Full desktop app — yours forever</p>

                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl sm:text-6xl font-extrabold text-text-primary">$99</span>
                  <span className="text-text-secondary text-lg">one-time</span>
                </div>
                <p className="text-accent-cyan text-sm font-medium mb-8">No subscription. No renewal fees.</p>

                <ul className="space-y-3 mb-8">
                  {desktopFeatures.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm">
                      <svg className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-text-secondary">{item}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleCheckout('desktop')}
                  disabled={processing === 'desktop'}
                  className="block w-full text-center py-4 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-cyan-dim text-bg-primary font-bold text-lg hover:glow-cyan-strong transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {processing === 'desktop' ? (
                    <span className="inline-flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Redirecting to Checkout…
                    </span>
                  ) : (
                    'Buy Now — $99'
                  )}
                </button>

                <div className="flex items-center justify-center gap-4 mt-6 text-xs text-text-muted">
                  <span>🔒 Secure checkout</span>
                  <span>•</span>
                  <span>Powered by Stripe</span>
                  <span>•</span>
                  <span>Instant delivery</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Web Subscription */}
        {tab === 'web' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {webTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl glass overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                  tier.accent ? 'glow-cyan' : 'hover:glow-cyan'
                }`}
              >
                {tier.accent && <div className="h-1 bg-gradient-to-r from-accent-cyan to-accent-magenta" />}
                {tier.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20">
                      POPULAR
                    </span>
                  </div>
                )}

                <div className="p-8">
                  <h3 className="text-xl font-bold text-text-primary mb-1">{tier.name}</h3>
                  <p className="text-text-secondary text-sm mb-6">{tier.desc}</p>

                  <div className="flex items-baseline gap-1 mb-6">
                    <span className="text-4xl font-extrabold text-text-primary">{tier.price}</span>
                    <span className="text-text-secondary">{tier.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm">
                        <svg className="w-5 h-5 text-accent-cyan flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-text-secondary">{f}</span>
                      </li>
                    ))}
                  </ul>

                  {tier.productKey ? (
                    <button
                      onClick={() => handleCheckout(tier.productKey)}
                      disabled={processing === tier.productKey}
                      className={`block w-full text-center py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed ${
                        tier.accent
                          ? 'bg-gradient-to-r from-accent-cyan to-accent-cyan-dim text-bg-primary hover:glow-cyan-strong'
                          : 'border border-border text-text-primary hover:border-accent-cyan/50 hover:bg-accent-cyan/5'
                      }`}
                    >
                      {processing === tier.productKey ? (
                        <span className="inline-flex items-center justify-center gap-2">
                          <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                          </svg>
                          Redirecting…
                        </span>
                      ) : (
                        tier.cta
                      )}
                    </button>
                  ) : (
                    <a
                      href="https://app.vincistudios.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center py-3 rounded-xl font-semibold text-sm border border-border text-text-primary hover:border-accent-cyan/50 hover:bg-accent-cyan/5 transition-all duration-300 hover:scale-[1.02]"
                    >
                      {tier.cta}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Guarantee */}
        <div className="max-w-2xl mx-auto mt-16 text-center">
          <div className="glass rounded-2xl p-8">
            <div className="text-3xl mb-3">🛡️</div>
            <h3 className="text-lg font-semibold text-text-primary mb-2">30-Day Money-Back Guarantee</h3>
            <p className="text-sm text-text-secondary">
              Not satisfied? Email{' '}
              <a href="mailto:support@vincistudios.org" className="text-accent-cyan hover:underline">
                support@vincistudios.org
              </a>{' '}
              within 30 days for a full refund. No questions asked.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
