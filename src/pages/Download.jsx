import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const systemRequirements = [
  { label: 'OS', value: 'Windows 10 or 11 (64-bit)' },
  { label: 'CPU', value: 'Intel i5 / AMD Ryzen 5 or higher' },
  { label: 'RAM', value: '8GB minimum, 16GB recommended' },
  { label: 'Disk', value: '2GB free space (SSD recommended)' },
  { label: 'GPU', value: 'DirectX 11 compatible (optional, for preview acceleration)' },
  { label: 'Network', value: 'Internet connection (for AI generation features)' },
];

const installSteps = [
  {
    step: '1',
    title: 'Download the Installer',
    desc: 'Click the download button above to get the latest .zip installer package.',
  },
  {
    step: '2',
    title: 'Extract & Run',
    desc: 'Unzip the download, then double-click VinciStudioSetup.exe and follow the setup wizard. Installation takes under 2 minutes.',
  },
  {
    step: '3',
    title: 'Enter Your License Key',
    desc: 'On first launch, enter the VNCI-XXXX-XXXX-XXXX-XXXX key from your purchase confirmation email.',
  },
  {
    step: '4',
    title: 'Add Your API Keys',
    desc: 'Go to Settings → API Keys and add your fal.ai, RunningHub, or other provider keys to enable AI generation.',
  },
  {
    step: '5',
    title: 'Start Creating',
    desc: "That's it! Open a new project and start editing. Check the built-in docs for tutorials and guides.",
  },
];

export default function Download() {
  const [searchParams] = useSearchParams();
  const isSuccess = searchParams.get('success') === 'true';
  const sessionId = searchParams.get('session_id');
  const licenseKey = searchParams.get('license');

  const [platform, setPlatform] = useState('windows');
  const [email, setEmail] = useState('');
  const [notifySubmitted, setNotifySubmitted] = useState(false);

  const handleNotify = (e) => {
    e.preventDefault();
    if (email) {
      // TODO: Store email in Supabase or send to mailing list
      setNotifySubmitted(true);
    }
  };

  return (
    <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-cyan/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-accent-magenta/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto">
        {/* ═══ SUCCESS BANNER ═══ */}
        {isSuccess && (
          <div className="mb-10 rounded-2xl glass glow-cyan overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-green-400 to-accent-cyan" />
            <div className="p-8 sm:p-10 text-center">
              <div className="text-5xl mb-4">🎉</div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-text-primary mb-3">
                Payment Successful!
              </h2>
              <p className="text-text-secondary text-lg mb-6">
                Welcome to Vinci Studio Suite! Download the app below and start creating.
              </p>

              {licenseKey && (
                <div className="glass rounded-xl p-6 max-w-md mx-auto mb-6">
                  <p className="text-xs text-text-muted uppercase tracking-wider mb-2">Your License Key</p>
                  <code className="text-xl sm:text-2xl font-mono text-accent-cyan font-bold tracking-wider block">
                    {licenseKey}
                  </code>
                  <button
                    onClick={() => navigator.clipboard.writeText(licenseKey)}
                    className="block mx-auto mt-4 px-4 py-2 rounded-lg text-sm text-text-secondary hover:text-accent-cyan hover:bg-accent-cyan/10 border border-border transition-all"
                  >
                    📋 Copy to Clipboard
                  </button>
                </div>
              )}

              <p className="text-text-muted text-sm">
                {licenseKey
                  ? 'Save this key — you\'ll need it when you launch the app for the first time.'
                  : 'A confirmation email with your license key and receipt has been sent to your email address.'}
              </p>

              {sessionId && (
                <p className="text-text-muted text-xs mt-3">
                  Order reference: <code className="text-text-secondary font-mono">{sessionId.slice(0, 20)}…</code>
                </p>
              )}
            </div>
          </div>
        )}

        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-text-primary mb-4">
            Download <span className="gradient-text">Vinci Studio</span>
          </h1>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Get the desktop app installed and creating in under 5 minutes.
          </p>
        </div>

        {/* Platform Selector */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-xl glass p-1.5">
            <button
              onClick={() => setPlatform('windows')}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                platform === 'windows'
                  ? 'bg-accent-cyan/20 text-accent-cyan border border-accent-cyan/30'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              🪟 Windows
            </button>
            <button
              onClick={() => setPlatform('mac')}
              className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
                platform === 'mac'
                  ? 'bg-accent-cyan/20 text-accent-cyan border border-accent-cyan/30'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              🍎 macOS
            </button>
          </div>
        </div>

        {/* Download Card */}
        {platform === 'windows' ? (
          <div className="rounded-2xl glass glow-cyan overflow-hidden mb-12">
            <div className="h-1 bg-gradient-to-r from-accent-cyan to-accent-magenta" />
            <div className="p-8 sm:p-10 text-center">
              <div className="text-5xl mb-4">🪟</div>
              <h2 className="text-2xl font-bold text-text-primary mb-2">Vinci Studio Suite for Windows</h2>
              <p className="text-text-secondary mb-1">Version 1.0.0-beta · Windows 10/11 (64-bit)</p>
              <p className="text-text-muted text-xs mb-8">Last updated: June 2025</p>

              <a
                href="/downloads/VinciStudioSetup-v1.0.0-beta.zip"
                download
                className="inline-flex items-center gap-3 px-10 py-4 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-cyan-dim text-bg-primary font-bold text-lg hover:glow-cyan-strong transition-all duration-300 hover:scale-105"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download for Windows
              </a>

              <p className="text-xs text-text-muted mt-4">
                Requires a license key.{' '}
                <Link to="/buy" className="text-accent-cyan hover:underline">
                  Buy one here →
                </Link>
              </p>
            </div>
          </div>
        ) : (
          <div className="rounded-2xl glass overflow-hidden mb-12">
            <div className="p-8 sm:p-10 text-center">
              <div className="text-5xl mb-4 opacity-50">🍎</div>
              <h2 className="text-2xl font-bold text-text-primary mb-2">macOS Support Coming Soon</h2>
              <p className="text-text-secondary mb-6 max-w-md mx-auto">
                We're working on a native macOS build. Enter your email to be notified when it's available.
              </p>

              {notifySubmitted ? (
                <div className="flex items-center justify-center gap-2 text-green-400 text-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  You'll be notified when macOS is available!
                </div>
              ) : (
                <form onSubmit={handleNotify} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@email.com"
                    required
                    className="flex-1 px-4 py-3 rounded-lg bg-bg-primary border border-border text-text-primary text-sm placeholder-text-muted focus:border-accent-cyan focus:outline-none transition-colors"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-lg border border-accent-cyan/30 text-accent-cyan font-semibold text-sm hover:bg-accent-cyan/10 transition-all"
                  >
                    Notify Me
                  </button>
                </form>
              )}
              <p className="text-xs text-text-muted mt-4">Expected: Q4 2025</p>
            </div>
          </div>
        )}

        {/* System Requirements */}
        <div className="rounded-2xl glass overflow-hidden mb-12">
          <div className="p-8 sm:p-10">
            <h3 className="text-xl font-bold text-text-primary mb-6 flex items-center gap-2">
              <span>⚙️</span> System Requirements
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {systemRequirements.map((req) => (
                <div key={req.label} className="flex gap-3 items-start">
                  <span className="text-xs font-mono text-accent-cyan bg-accent-cyan/10 px-2 py-1 rounded min-w-[52px] text-center">
                    {req.label}
                  </span>
                  <span className="text-sm text-text-secondary">{req.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Installation Steps */}
        <div className="rounded-2xl glass overflow-hidden mb-12">
          <div className="p-8 sm:p-10">
            <h3 className="text-xl font-bold text-text-primary mb-8 flex items-center gap-2">
              <span>📋</span> Installation Guide
            </h3>
            <div className="space-y-6">
              {installSteps.map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent-cyan/20 border border-accent-cyan/30 flex items-center justify-center">
                    <span className="text-sm font-bold text-accent-cyan">{item.step}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-text-primary mb-1">{item.title}</h4>
                    <p className="text-sm text-text-secondary">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* No license? CTA */}
        {!isSuccess && (
          <div className="rounded-2xl glass overflow-hidden mb-12">
            <div className="p-8 text-center">
              <h3 className="text-lg font-semibold text-text-primary mb-2">Don't have a license key yet?</h3>
              <p className="text-sm text-text-secondary mb-4">
                Purchase Vinci Studio Suite for $99 — one-time payment, lifetime access.
              </p>
              <Link
                to="/buy"
                className="inline-flex px-6 py-3 rounded-xl bg-gradient-to-r from-accent-cyan to-accent-cyan-dim text-bg-primary font-bold text-sm hover:glow-cyan-strong transition-all duration-300 hover:scale-105"
              >
                Buy Now — $99
              </Link>
            </div>
          </div>
        )}

        {/* Help Section */}
        <div className="text-center">
          <p className="text-text-secondary text-sm">
            Having trouble? Email{' '}
            <a href="mailto:support@vincistudios.org" className="text-accent-cyan hover:underline">
              support@vincistudios.org
            </a>{' '}
            and we'll help you get set up.
          </p>
        </div>
      </div>
    </section>
  );
}
