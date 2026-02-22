import { useState } from 'react';

const faqs = [
  {
    q: 'What does "Bring Your Own Keys" (BYOK) mean?',
    a: 'BYOK means you use your own API keys from providers like fal.ai, RunningHub, and others. You pay those providers directly for AI generation usage — we don\'t charge a subscription or take a cut. This keeps costs transparent and puts you in full control.',
  },
  {
    q: 'Which AI models are supported?',
    a: 'Vinci Studio supports FLUX (Schnell, Dev, Pro), Kling, Veo, Minimax, Wan, Seedance, and more through fal.ai and RunningHub integrations. New models are added regularly through updates.',
  },
  {
    q: 'Do I get free updates?',
    a: 'Yes! Your $99 purchase includes lifetime updates. New features, model integrations, and improvements are all included — no upgrade fees, no annual renewals.',
  },
  {
    q: 'What are the system requirements?',
    a: 'Windows 10 or 11 (64-bit), 8GB RAM minimum (16GB recommended), 2GB disk space, and an internet connection for AI generation features. Mac support is coming soon.',
  },
  {
    q: 'Can I use it offline?',
    a: 'Yes! The video editing features (timeline, effects, export) work fully offline. You only need an internet connection when using AI generation features, since those require API calls to external services.',
  },
  {
    q: 'What if I need help or have issues?',
    a: 'Email us at support@vincistudios.org — we typically respond within 24 hours. We also have documentation and guides available in the app.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section id="faq" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Frequently asked <span className="gradient-text">questions</span>
          </h2>
          <p className="text-text-secondary text-lg">
            Got questions? We&apos;ve got answers.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl glass overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition-colors"
              >
                <span className="text-sm sm:text-base font-medium text-text-primary pr-4">
                  {faq.q}
                </span>
                <svg
                  className={`w-5 h-5 text-accent-cyan flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-5 pb-5 text-sm text-text-secondary leading-relaxed">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
