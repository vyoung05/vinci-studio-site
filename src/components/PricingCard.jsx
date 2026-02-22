import { useState } from 'react';
import { Link } from 'react-router-dom';

const desktopFeatures = [
  'Full desktop app — Windows (Mac coming soon)',
  'AI Image & Video Generation',
  'Professional NLE Timeline',
  'Cinematic camera & lens controls',
  'Bot API access',
  'Portable .vinci project files',
  'Free updates for life',
  'No subscription — ever',
];

const webTiers = [
  {
    name: 'Free',
    price: '$0',
    period: '/mo',
    desc: 'Basic web editor',
    features: ['720p export', '1 project', 'Basic timeline', 'Watermarked'],
    highlight: false,
  },
  {
    name: 'Pro',
    price: '$9.99',
    period: '/mo',
    desc: 'For serious creators',
    features: ['1080p export', 'Unlimited projects', 'AI generation (BYOK)', 'No watermark', '5GB cloud storage'],
    highlight: true,
  },
  {
    name: 'Studio',
    price: '$29.99',
    period: '/mo',
    desc: 'Professional teams',
    features: ['4K export', 'Unlimited projects', 'AI generation (BYOK)', 'No watermark', '50GB cloud storage', 'Team collab', 'API access'],
    highlight: false,
  },
];

export default function PricingCard() {
  const [tab, setTab] = useState('desktop');

  return (
    <section id="pricing" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Simple pricing. <span className="gradient-text">No tricks.</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Own the desktop app outright, or subscribe to the web version.
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
              🖥️ Desktop — $99 Once
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

        {/* Desktop Pricing */}
        {tab === 'desktop' && (
          <div className="max-w-lg mx-auto">
            <div className="relative rounded-2xl glass glow-cyan overflow-hidden">
              <div className="h-1 bg-gradient-to-r from-accent-cyan to-accent-magenta" />
              <div className="p-8 sm:p-10">
                <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20 mb-6">
                  BEST VALUE
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-2">Vinci Studio Suite</h3>
                <p className="text-text-secondary text-sm mb-6">Everything you need to create with AI</p>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-5xl sm:text-6xl font-extrabold text-text-primary">$99</span>
                  <span className="text-text-secondary text-lg">one-time</span>
                </div>
                <p className="text-accent-cyan text-sm font-medium mb-8">Buy once, own forever</p>
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
                <Link
                  to="/buy"
                  className="block w-full text-center py-4 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-cyan-dim text-bg-primary font-bold text-lg hover:glow-cyan-strong transition-all duration-300 hover:scale-[1.02]"
                >
                  Get Vinci Studio — $99
                </Link>
                <p className="text-center text-xs text-text-muted mt-4">
                  BYOK — Bring your own API keys for AI features
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Web Subscription Pricing */}
        {tab === 'web' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {webTiers.map((tier) => (
              <div
                key={tier.name}
                className={`relative rounded-2xl glass overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                  tier.highlight ? 'glow-cyan' : 'hover:glow-cyan'
                }`}
              >
                {tier.highlight && <div className="h-1 bg-gradient-to-r from-accent-cyan to-accent-magenta" />}
                {tier.highlight && (
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
                  <Link
                    to="/buy"
                    className={`block w-full text-center py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-[1.02] ${
                      tier.highlight
                        ? 'bg-gradient-to-r from-accent-cyan to-accent-cyan-dim text-bg-primary hover:glow-cyan-strong'
                        : 'border border-border text-text-primary hover:border-accent-cyan/50 hover:bg-accent-cyan/5'
                    }`}
                  >
                    {tier.name === 'Free' ? 'Start Free' : `Subscribe — ${tier.price}/mo`}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
