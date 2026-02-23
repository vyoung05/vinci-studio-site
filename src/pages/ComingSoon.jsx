import { Link } from 'react-router-dom';

const productInfo = {
  films: {
    icon: '🎥',
    name: 'Vinci Films Network',
    desc: 'A streaming platform for independent creators. Watch, upload, and share original films, series, and content from creators around the world.',
    color: 'accent-cyan',
    betaUrl: 'https://vinci-films-net.vercel.app',
  },
  academy: {
    icon: '🎓',
    name: 'Pop Vinci Academy',
    desc: 'Learn the business of entertainment. Courses on content creation, music production, film, branding, and building a creative career — taught by real industry creators.',
    color: 'accent-magenta',
    betaUrl: null,
  },
  popvinci: {
    icon: '🎵',
    name: 'Pop Vinci',
    desc: 'Music, content, culture. The artist brand and content vertical pushing the next wave of entertainment. Original music, visual content, and creative projects.',
    color: 'accent-cyan',
    betaUrl: null,
  },
  ddns: {
    icon: '📡',
    name: 'DDNS',
    desc: 'Live streaming entertainment. Real-time shows, interactive experiences, and live content from creators and personalities. The future of appointment viewing.',
    color: 'accent-magenta',
    betaUrl: null,
  },
  gaming: {
    icon: '🎮',
    name: 'Pop Vinci Gaming',
    desc: 'Gaming content & community. Clips, streams, tournaments, and culture. Building the bridge between gaming and entertainment. Follow @popvinci_gaming.',
    color: 'accent-cyan',
    betaUrl: null,
  },
};

export default function ComingSoon({ product }) {
  const info = productInfo[product] || {
    icon: '🚀',
    name: 'Coming Soon',
    desc: 'Something new is on the way.',
    color: 'accent-cyan',
    betaUrl: null,
  };

  return (
    <section className="relative pt-36 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[80vh] flex items-center">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-accent-cyan/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-accent-magenta/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-2xl mx-auto text-center w-full">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link to="/" className="text-text-muted hover:text-accent-cyan text-sm transition-colors">
            Vinci Studios
          </Link>
          <span className="text-text-muted mx-2">/</span>
          <span className="text-text-secondary text-sm">{info.name}</span>
        </div>

        {/* Icon */}
        <div className="text-7xl mb-8">{info.icon}</div>

        {/* Name */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-text-primary mb-4">
          {info.name}
        </h1>

        {/* Coming Soon Badge */}
        <div className="inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold bg-accent-magenta/10 text-accent-magenta border border-accent-magenta/20 mb-8 animate-pulse-glow">
          <span className="w-2 h-2 bg-accent-magenta rounded-full mr-2" />
          Coming Soon
        </div>

        {/* Description */}
        <p className="text-lg text-text-secondary leading-relaxed mb-10 max-w-lg mx-auto">
          {info.desc}
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="px-8 py-4 rounded-xl border border-border text-text-primary font-semibold text-lg hover:border-accent-cyan/50 hover:bg-accent-cyan/5 transition-all duration-300 w-full sm:w-auto"
          >
            ← Back to Home
          </Link>
          {info.betaUrl && (
            <a
              href={info.betaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-cyan-dim text-bg-primary font-bold text-lg hover:glow-cyan-strong transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              Visit Beta →
            </a>
          )}
        </div>

        {/* Notify hint */}
        <p className="text-sm text-text-muted mt-12">
          Want updates? Email{' '}
          <a href="mailto:vincent@vincistudios.org" className="text-accent-cyan hover:underline">
            vincent@vincistudios.org
          </a>
        </p>
      </div>
    </section>
  );
}
