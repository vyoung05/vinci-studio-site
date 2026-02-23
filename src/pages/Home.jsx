import { Link } from 'react-router-dom';

const products = [
  {
    icon: '🎬',
    name: 'Vinci Studio Suite',
    desc: 'AI-powered video editor. Professional desktop NLE with built-in AI generation.',
    tag: 'Available Now',
    tagColor: 'bg-green-500/10 text-green-400 border-green-500/20',
    link: '/studio',
    linkLabel: 'Learn More →',
    external: false,
    glow: true,
  },
  {
    icon: '🎥',
    name: 'Vinci Films Network',
    desc: 'Streaming platform for independent creators. Watch, upload, and share original content.',
    tag: 'Beta',
    tagColor: 'bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20',
    link: '/films',
    linkLabel: 'Visit Beta →',
    external: false,
    glow: false,
  },
  {
    icon: '🎓',
    name: 'Pop Vinci Academy',
    desc: 'Learn the business of entertainment. Courses, mentorship, and resources for creators.',
    tag: 'Coming Soon',
    tagColor: 'bg-accent-magenta/10 text-accent-magenta border-accent-magenta/20',
    link: '/academy',
    linkLabel: 'Learn More →',
    external: false,
    glow: false,
  },
  {
    icon: '🎵',
    name: 'Pop Vinci',
    desc: 'Music, content, culture. Artist brand & content vertical for the next wave of entertainment.',
    tag: 'Coming Soon',
    tagColor: 'bg-accent-magenta/10 text-accent-magenta border-accent-magenta/20',
    link: '/popvinci',
    linkLabel: 'Learn More →',
    external: false,
    glow: false,
  },
  {
    icon: '📡',
    name: 'DDNS',
    desc: 'Live streaming entertainment. Real-time content, shows, and interactive experiences.',
    tag: 'Coming Soon',
    tagColor: 'bg-accent-magenta/10 text-accent-magenta border-accent-magenta/20',
    link: '/ddns',
    linkLabel: 'Learn More →',
    external: false,
    glow: false,
  },
  {
    icon: '🎮',
    name: 'Pop Vinci Gaming',
    desc: 'Gaming content & community. Clips, streams, and culture. @popvinci_gaming',
    tag: 'Coming Soon',
    tagColor: 'bg-accent-magenta/10 text-accent-magenta border-accent-magenta/20',
    link: '/gaming',
    linkLabel: 'Learn More →',
    external: false,
    glow: false,
  },
];

export default function Home() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative pt-36 pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-cyan/5 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-magenta/5 rounded-full blur-[150px]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#4ecdc4]/5 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-5xl mx-auto text-center">
          {/* Logo Mark */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-accent-cyan to-accent-magenta mb-8 animate-float">
            <span className="text-3xl font-extrabold text-bg-primary">V</span>
          </div>

          {/* Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.05] mb-6">
            <span className="gradient-text">Vinci Studios</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl sm:text-2xl md:text-3xl text-text-secondary font-light mb-6">
            Where creativity meets technology
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-text-muted max-w-2xl mx-auto mb-8 leading-relaxed">
            Creative media company building tools, content, and experiences for the next generation of creators.
          </p>

          {/* Location */}
          <div className="inline-flex items-center gap-3 text-sm text-text-muted">
            <span>📍 Miami, FL</span>
            <span className="w-1 h-1 rounded-full bg-text-muted" />
            <span>Founded 2026</span>
          </div>
        </div>
      </section>

      {/* ═══ PRODUCTS / BRANDS GRID ═══ */}
      <section id="products" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Our <span className="gradient-text">Products & Brands</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              From creative tools to content platforms — everything independent creators need to build, share, and grow.
            </p>
          </div>

          {/* Product Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <Link
                key={product.name}
                to={product.link}
                className={`group relative rounded-2xl glass overflow-hidden transition-all duration-300 hover:-translate-y-1 ${
                  product.glow ? 'glow-cyan' : 'hover:glow-cyan'
                }`}
              >
                {product.glow && (
                  <div className="h-1 bg-gradient-to-r from-accent-cyan to-accent-magenta" />
                )}
                <div className="p-8">
                  {/* Icon & Tag */}
                  <div className="flex items-start justify-between mb-5">
                    <span className="text-4xl">{product.icon}</span>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${product.tagColor}`}>
                      {product.tag}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent-cyan transition-colors">
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-text-secondary leading-relaxed mb-6">
                    {product.desc}
                  </p>

                  {/* Link */}
                  <span className="inline-flex items-center text-sm font-semibold text-accent-cyan group-hover:translate-x-1 transition-transform duration-200">
                    {product.linkLabel}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ABOUT ═══ */}
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 bg-bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              About <span className="gradient-text">Vinci Studios</span>
            </h2>
          </div>

          <div className="rounded-2xl glass p-8 sm:p-12">
            <p className="text-lg text-text-secondary leading-relaxed mb-6">
              Vinci Studios LLC is a Miami-based creative media company founded by Vincent Young. We build creative tools, produce content, and develop platforms that empower independent creators.
            </p>
            <p className="text-lg text-text-secondary leading-relaxed mb-8">
              From AI-powered video editing software to streaming networks, we're building the infrastructure for the next wave of digital entertainment.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-border">
              {[
                { label: 'Products', value: '6' },
                { label: 'Founded', value: '2026' },
                { label: 'Location', value: 'Miami' },
                { label: 'Focus', value: 'Creators' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl sm:text-3xl font-extrabold text-accent-cyan mb-1">{stat.value}</div>
                  <div className="text-xs text-text-muted uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="rounded-2xl glass p-10 sm:p-14 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 to-accent-magenta/5" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary mb-4">
                Start creating with Vinci Studio Suite
              </h2>
              <p className="text-lg text-text-secondary mb-8">
                Our flagship AI-powered video editor. Pay once, own forever.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  to="/studio"
                  className="px-8 py-4 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-cyan-dim text-bg-primary font-bold text-lg hover:glow-cyan-strong transition-all duration-300 hover:scale-105"
                >
                  Explore Studio Suite →
                </Link>
                <a
                  href="mailto:vincent@vincistudios.org"
                  className="px-8 py-4 rounded-xl border border-border text-text-primary font-semibold text-lg hover:border-accent-cyan/50 hover:bg-accent-cyan/5 transition-all duration-300"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
