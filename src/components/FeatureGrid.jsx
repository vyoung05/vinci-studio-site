const features = [
  {
    icon: '🎬',
    title: 'AI Image & Video Generation',
    description: 'Generate stunning visuals with FLUX, Kling, Veo, Minimax, and more. All from one unified interface.',
  },
  {
    icon: '🎞',
    title: 'Professional NLE Timeline',
    description: 'Multi-track timeline with drag & drop, keyframes, transitions, and precision editing tools.',
  },
  {
    icon: '🎨',
    title: 'Cinematic Controls',
    description: 'Camera bodies, lenses, film stocks, lighting presets — craft the exact look you envision.',
  },
  {
    icon: '🤖',
    title: 'Bot API Integration',
    description: 'Control your editor programmatically. Automate workflows, build custom tools, extend everything.',
  },
  {
    icon: '📦',
    title: 'Portable Projects',
    description: '.vinci files — zip and share entire projects. Assets, timeline, settings — all in one file.',
  },
  {
    icon: '🔒',
    title: 'Your Keys, Your Data',
    description: 'BYOK architecture — no subscription, no vendor lock-in. Your API keys, your data, your freedom.',
  },
];

export default function FeatureGrid() {
  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Everything you need. <span className="gradient-text">Nothing you don&apos;t.</span>
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            A professional video editor with AI generation baked in — not bolted on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative p-6 rounded-2xl glass hover:bg-bg-card-hover transition-all duration-300 hover:glow-cyan hover:-translate-y-1"
            >
              {/* Gradient border effect on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-cyan/20 to-accent-magenta/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl" />
              
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent-cyan transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
