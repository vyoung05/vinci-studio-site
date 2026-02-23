import { Link } from 'react-router-dom';
import FeatureGrid from '../components/FeatureGrid';
import PricingCard from '../components/PricingCard';
import FAQ from '../components/FAQ';

export default function Studio() {
  return (
    <>
      {/* ═══ HERO ═══ */}
      <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan/5 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-magenta/5 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto text-center">
          {/* Breadcrumb */}
          <div className="mb-6">
            <Link to="/" className="text-text-muted hover:text-accent-cyan text-sm transition-colors">
              Vinci Studios
            </Link>
            <span className="text-text-muted mx-2">/</span>
            <span className="text-text-secondary text-sm">Studio Suite</span>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/20 mb-8 animate-pulse-glow">
            <span className="w-2 h-2 bg-accent-cyan rounded-full mr-2" />
            Now Available — v1.0
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
            The AI-Powered Video Editor{' '}
            <br className="hidden sm:block" />
            <span className="gradient-text">You Actually Own</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl text-text-secondary max-w-3xl mx-auto mb-10 leading-relaxed">
            Professional desktop NLE with AI generation built in — FLUX, Kling, Veo, and more.{' '}
            <span className="text-accent-cyan font-medium">Bring your own API keys.</span>{' '}
            No subscription. No vendor lock-in. Pay once, create forever.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              to="/studio/buy"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-cyan-dim text-bg-primary font-bold text-lg hover:glow-cyan-strong transition-all duration-300 hover:scale-105 w-full sm:w-auto"
            >
              Buy Now — $99
            </Link>
            <a
              href="#features"
              className="px-8 py-4 rounded-xl border border-border text-text-primary font-semibold text-lg hover:border-accent-cyan/50 hover:bg-accent-cyan/5 transition-all duration-300 w-full sm:w-auto"
            >
              Learn More ↓
            </a>
          </div>

          {/* App Mockup */}
          <div className="relative max-w-5xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-transparent z-10 pointer-events-none" />
            <div className="rounded-2xl glass glow-cyan overflow-hidden animate-float">
              {/* Fake title bar */}
              <div className="flex items-center gap-2 px-4 py-3 bg-bg-card border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <span className="text-xs text-text-muted ml-2 font-mono">Vinci Studio Suite</span>
              </div>
              {/* Fake NLE layout */}
              <div className="p-4 bg-bg-secondary/90 min-h-[300px] sm:min-h-[400px]">
                {/* Top toolbar */}
                <div className="flex gap-2 mb-4">
                  {['File', 'Edit', 'View', 'AI Generate', 'Export'].map((item) => (
                    <div key={item} className="px-3 py-1.5 rounded text-xs text-text-muted bg-bg-card border border-border">
                      {item}
                    </div>
                  ))}
                </div>
                {/* Main area */}
                <div className="grid grid-cols-12 gap-3 mb-4">
                  {/* Media bin */}
                  <div className="col-span-3 rounded-lg bg-bg-card border border-border p-3 min-h-[150px] sm:min-h-[200px]">
                    <div className="text-xs text-text-muted mb-2 font-mono">Media Bin</div>
                    <div className="space-y-2">
                      {[1, 2, 3].map((n) => (
                        <div key={n} className="h-8 rounded bg-bg-primary/50 border border-border/50" />
                      ))}
                    </div>
                  </div>
                  {/* Preview */}
                  <div className="col-span-6 rounded-lg bg-bg-card border border-border flex items-center justify-center min-h-[150px] sm:min-h-[200px]">
                    <div className="text-center">
                      <div className="text-3xl mb-2">▶</div>
                      <div className="text-xs text-text-muted font-mono">Preview</div>
                    </div>
                  </div>
                  {/* AI Panel */}
                  <div className="col-span-3 rounded-lg bg-bg-card border border-border p-3 min-h-[150px] sm:min-h-[200px]">
                    <div className="text-xs text-accent-cyan mb-2 font-mono">AI Generate</div>
                    <div className="space-y-2">
                      <div className="h-6 rounded bg-accent-cyan/10 border border-accent-cyan/20" />
                      <div className="h-6 rounded bg-accent-magenta/10 border border-accent-magenta/20" />
                      <div className="h-16 rounded bg-bg-primary/50 border border-border/50" />
                    </div>
                  </div>
                </div>
                {/* Timeline */}
                <div className="rounded-lg bg-bg-card border border-border p-3">
                  <div className="text-xs text-text-muted mb-2 font-mono">Timeline</div>
                  <div className="space-y-1.5">
                    {[
                      { w: '80%', color: 'bg-accent-cyan/30 border-accent-cyan/40' },
                      { w: '65%', color: 'bg-accent-magenta/30 border-accent-magenta/40' },
                      { w: '90%', color: 'bg-green-500/30 border-green-500/40' },
                    ].map((track, i) => (
                      <div key={i} className="flex gap-1 items-center">
                        <div className="w-12 text-[10px] text-text-muted font-mono">V{i + 1}</div>
                        <div
                          className={`h-5 rounded ${track.color} border`}
                          style={{ width: track.w }}
                        />
                      </div>
                    ))}
                    {[1, 2].map((n) => (
                      <div key={`a${n}`} className="flex gap-1 items-center">
                        <div className="w-12 text-[10px] text-text-muted font-mono">A{n}</div>
                        <div
                          className="h-3 rounded bg-blue-500/20 border border-blue-500/30"
                          style={{ width: `${50 + n * 15}%` }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FEATURES ═══ */}
      <FeatureGrid />

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
              Up and running in <span className="gradient-text">4 steps</span>
            </h2>
            <p className="text-text-secondary text-lg">From purchase to your first AI-generated video in minutes.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: '01', icon: '💳', title: 'Buy', desc: 'One-time purchase of $99. No recurring charges, no hidden fees.' },
              { step: '02', icon: '⬇️', title: 'Download', desc: 'Get the desktop app for Windows. Install in under 2 minutes.' },
              { step: '03', icon: '🔑', title: 'Add Your Keys', desc: 'Plug in API keys from fal.ai, RunningHub, or other providers.' },
              { step: '04', icon: '🎬', title: 'Create', desc: 'Start editing, generating, and creating. No limits, no watermarks.' },
            ].map((item) => (
              <div key={item.step} className="relative p-6 rounded-2xl glass text-center group hover:bg-bg-card-hover transition-all duration-300">
                <div className="absolute top-4 right-4 text-xs font-mono text-text-muted">{item.step}</div>
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-accent-cyan transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ ANTI-SUBSCRIPTION BANNER ═══ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="rounded-2xl glass p-10 sm:p-14 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/5 to-accent-magenta/5" />
            <div className="relative">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary mb-4">
                Tired of subscriptions?
              </h2>
              <p className="text-lg text-text-secondary mb-2">
                Adobe charges <span className="line-through text-text-muted">$54.99/mo</span> for Premiere Pro alone.
              </p>
              <p className="text-lg text-text-secondary mb-8">
                That&apos;s <span className="text-accent-magenta font-bold">$660/year</span>. Vinci Studio is{' '}
                <span className="text-accent-cyan font-bold">$99 forever</span>.
              </p>
              <Link
                to="/studio/buy"
                className="inline-flex px-8 py-4 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-cyan-dim text-bg-primary font-bold text-lg hover:glow-cyan-strong transition-all duration-300 hover:scale-105"
              >
                Own Your Editor — $99
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PRICING ═══ */}
      <PricingCard />

      {/* ═══ FAQ ═══ */}
      <FAQ />

      {/* ═══ FINAL CTA ═══ */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-bg-secondary/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-text-primary mb-4">
            Ready to create?
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            Join creators who own their tools. No subscription required.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/studio/buy"
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-cyan-dim text-bg-primary font-bold text-lg hover:glow-cyan-strong transition-all duration-300 hover:scale-105"
            >
              Get Vinci Studio — $99
            </Link>
            <Link
              to="/studio/download"
              className="px-8 py-4 rounded-xl border border-border text-text-primary font-semibold text-lg hover:border-accent-cyan/50 hover:bg-accent-cyan/5 transition-all duration-300"
            >
              Download Free Trial
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
