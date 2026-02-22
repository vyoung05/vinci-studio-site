import { useState } from 'react';
import { Link } from 'react-router-dom';

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
    cta: 'Start Free',
    accent: false,
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
  },
];

export default function Buy() {
  const [tab, setTab] = useState('desktop');
  const [success, setSuccess] = useState(false);
  const [processing, setProcessing] = useState(false);

  const handleCheckout = (product) => {
    setProcessing(true);
    // Simulate Stripe checkout
    setTimeout(() => {
      setProcessing(false);
      setSuccess(true);
    }, 2000);
  };

  if (success) {
    return (
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="max-w-2xl mx-auto text-center">
          <div className="rounded-2xl glass glow-cyan p-10 sm:p-14">
            <div className="text-6xl mb-6">🎉</div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-text-primary mb-4">
              Purchase Complete!
            </h1>
            <p className="text-text-secondary text-lg mb-8">
              Welcome to Vinci Studio Suite. Here's your license key:
            </p>

            <div className="glass rounded-xl p-6 mb-8">
              <p className="text-xs text-text-muted uppercase tracking-wider mb-2">Your License Key</p>
              <code className="text-xl sm:text-2xl font-mono text-accent-cyan font-bold tracking-wider">
                VNCI-A7K9-M3X2-R8P4-W5J1
              </code>
              <button
                onClick={() => navigator.clipboard.writeText('VNCI-A7K9-M3X2-R8P4-W5J1')}
                className="block mx-auto mt-4 px-4 py-2 rounded-lg text-sm text-text-secondary hover:text-accent-cyan hover:bg-accent-cyan/10 border border-border transition-all"
              >
                📋 Copy to Clipboard
              </button>
            </div>

            <p className="text-text-secondary text-sm mb-6">
              A confirmation email with your license key and download link has been sent to your email.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/download"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-cyan-dim text-bg-primary font-bold text-lg hover:glow-cyan-strong transition-all duration-300 hover:scale-105"
              >
                ⬇️ Download Now
              </Link>
              <Link
                to="/"
                className="px-8 py-4 rounded-xl border border-border text-text-primary font-semibold text-lg hover:border-accent-cyan/50 hover:bg-accent-cyan/5 transition-all duration-300"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-accent-cyan/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-accent-magenta/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto">
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
                  disabled={processing}
                  className="block w-full text-center py-4 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-cyan-dim text-bg-primary font-bold text-lg hover:glow-cyan-strong transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {processing ? (
                    <span className="inline-flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Processing…
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

                  <button
                    onClick={() => handleCheckout(tier.name)}
                    disabled={processing}
                    className={`block w-full text-center py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 ${
                      tier.accent
                        ? 'bg-gradient-to-r from-accent-cyan to-accent-cyan-dim text-bg-primary hover:glow-cyan-strong'
                        : 'border border-border text-text-primary hover:border-accent-cyan/50 hover:bg-accent-cyan/5'
                    }`}
                  >
                    {tier.cta}
                  </button>
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
