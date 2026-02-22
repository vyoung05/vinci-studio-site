import { useState } from 'react';
import LicenseManager from '../components/LicenseManager';

const salesData = [
  { month: 'Jan', desktop: 12, web: 34 },
  { month: 'Feb', desktop: 18, web: 42 },
  { month: 'Mar', desktop: 24, web: 58 },
  { month: 'Apr', desktop: 31, web: 67 },
  { month: 'May', desktop: 28, web: 73 },
  { month: 'Jun', desktop: 35, web: 89 },
];

export default function Admin() {
  const [activeTab, setActiveTab] = useState('licenses');
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  // Simple client-side auth (placeholder — real auth would use Supabase)
  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'vinci-admin-2026') {
      setAuthenticated(true);
    }
  };

  if (!authenticated) {
    return (
      <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center justify-center">
        <div className="max-w-md w-full">
          <div className="rounded-2xl glass glow-cyan overflow-hidden">
            <div className="h-1 bg-gradient-to-r from-accent-cyan to-accent-magenta" />
            <div className="p-8">
              <div className="text-center mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-cyan to-accent-magenta flex items-center justify-center text-2xl font-extrabold text-bg-primary mx-auto mb-4">
                  V
                </div>
                <h1 className="text-2xl font-bold text-text-primary">Admin Dashboard</h1>
                <p className="text-text-secondary text-sm mt-1">Vinci Studios Management</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block text-xs text-text-muted uppercase tracking-wider mb-2">
                    Admin Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter admin password"
                    className="w-full px-4 py-3 rounded-lg bg-bg-primary border border-border text-text-primary text-sm placeholder-text-muted focus:border-accent-cyan focus:outline-none transition-colors"
                    autoFocus
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 rounded-lg bg-gradient-to-r from-accent-cyan to-accent-cyan-dim text-bg-primary font-semibold text-sm hover:glow-cyan transition-all duration-300"
                >
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const totalRevenue = salesData.reduce((sum, m) => sum + m.desktop * 99 + m.web * 15, 0);
  const totalSales = salesData.reduce((sum, m) => sum + m.desktop + m.web, 0);
  const maxBar = Math.max(...salesData.map((m) => m.desktop + m.web));

  return (
    <section className="pt-24 pb-24 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-text-primary">
              Admin Dashboard
            </h1>
            <p className="text-text-secondary text-sm mt-1">Vinci Studios LLC — License & Sales Management</p>
          </div>
          <button
            onClick={() => setAuthenticated(false)}
            className="px-4 py-2 rounded-lg border border-border text-text-secondary text-sm hover:text-text-primary hover:bg-white/5 transition-all"
          >
            Sign Out
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex gap-1 mb-8 glass rounded-xl p-1.5 inline-flex">
          {[
            { id: 'licenses', label: '🔑 Licenses', },
            { id: 'sales', label: '📊 Sales' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-accent-cyan/20 text-accent-cyan border border-accent-cyan/30'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* License Management Tab */}
        {activeTab === 'licenses' && <LicenseManager />}

        {/* Sales Tab */}
        {activeTab === 'sales' && (
          <div className="space-y-6">
            {/* Revenue Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="glass rounded-xl p-6">
                <div className="text-sm text-text-muted mb-1">Total Revenue (Placeholder)</div>
                <div className="text-3xl font-bold text-accent-cyan">${totalRevenue.toLocaleString()}</div>
              </div>
              <div className="glass rounded-xl p-6">
                <div className="text-sm text-text-muted mb-1">Total Sales</div>
                <div className="text-3xl font-bold text-text-primary">{totalSales}</div>
              </div>
              <div className="glass rounded-xl p-6">
                <div className="text-sm text-text-muted mb-1">Avg. Revenue / Month</div>
                <div className="text-3xl font-bold text-accent-magenta">
                  ${Math.round(totalRevenue / salesData.length).toLocaleString()}
                </div>
              </div>
            </div>

            {/* Sales Chart (CSS-only bar chart) */}
            <div className="glass rounded-2xl p-8">
              <h3 className="text-lg font-semibold text-text-primary mb-6">Monthly Sales</h3>
              <div className="flex items-end gap-3 h-48">
                {salesData.map((m) => {
                  const total = m.desktop + m.web;
                  const heightPercent = (total / maxBar) * 100;
                  const desktopPercent = (m.desktop / total) * heightPercent;
                  const webPercent = (m.web / total) * heightPercent;
                  return (
                    <div key={m.month} className="flex-1 flex flex-col items-center gap-1">
                      <span className="text-xs text-text-muted">{total}</span>
                      <div className="w-full flex flex-col justify-end" style={{ height: '160px' }}>
                        <div
                          className="w-full bg-accent-magenta/40 rounded-t"
                          style={{ height: `${webPercent}%` }}
                          title={`Web: ${m.web}`}
                        />
                        <div
                          className="w-full bg-accent-cyan/60 rounded-b"
                          style={{ height: `${desktopPercent}%` }}
                          title={`Desktop: ${m.desktop}`}
                        />
                      </div>
                      <span className="text-xs text-text-muted font-mono">{m.month}</span>
                    </div>
                  );
                })}
              </div>
              <div className="flex gap-6 mt-6 justify-center">
                <div className="flex items-center gap-2 text-xs text-text-secondary">
                  <div className="w-3 h-3 rounded bg-accent-cyan/60" />
                  Desktop ($99)
                </div>
                <div className="flex items-center gap-2 text-xs text-text-secondary">
                  <div className="w-3 h-3 rounded bg-accent-magenta/40" />
                  Web Subscriptions
                </div>
              </div>
            </div>

            {/* Placeholder note */}
            <div className="glass rounded-xl p-6 text-center">
              <p className="text-text-muted text-sm">
                📊 Sales data shown is placeholder. Connect Stripe webhooks + Supabase for live data.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
