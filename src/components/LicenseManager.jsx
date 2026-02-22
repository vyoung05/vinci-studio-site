import { useState, useEffect } from 'react';

const STORAGE_KEY = 'vinci-admin-licenses';

function generateLicenseKey() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  const segment = () => Array.from({ length: 4 }, () => chars[Math.floor(Math.random() * chars.length)]).join('');
  return `VNCI-${segment()}-${segment()}-${segment()}-${segment()}`;
}

function getLicenses() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
}

function saveLicenses(licenses) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(licenses));
}

export default function LicenseManager() {
  const [licenses, setLicenses] = useState([]);
  const [copied, setCopied] = useState(null);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    setLicenses(getLicenses());
  }, []);

  const handleGenerate = () => {
    const newLicense = {
      key: generateLicenseKey(),
      status: 'unused',
      createdAt: new Date().toISOString(),
      email: '',
      activatedAt: null,
      machineId: null,
    };
    const updated = [newLicense, ...licenses];
    setLicenses(updated);
    saveLicenses(updated);
  };

  const handleToggleStatus = (index) => {
    const updated = [...licenses];
    const license = updated[index];
    if (license.status === 'suspended') {
      license.status = 'active';
    } else if (license.status === 'active') {
      license.status = 'suspended';
    } else if (license.status === 'unused') {
      license.status = 'active';
      license.activatedAt = new Date().toISOString();
    }
    setLicenses(updated);
    saveLicenses(updated);
  };

  const handleCopy = (key, index) => {
    navigator.clipboard.writeText(key);
    setCopied(index);
    setTimeout(() => setCopied(null), 2000);
  };

  const filteredLicenses = filter === 'all' ? licenses : licenses.filter((l) => l.status === filter);

  const stats = {
    total: licenses.length,
    active: licenses.filter((l) => l.status === 'active').length,
    unused: licenses.filter((l) => l.status === 'unused').length,
    suspended: licenses.filter((l) => l.status === 'suspended').length,
  };

  return (
    <div className="space-y-6">
      {/* Stats Row */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[
          { label: 'Total Keys', value: stats.total, color: 'text-text-primary' },
          { label: 'Active', value: stats.active, color: 'text-green-400' },
          { label: 'Unused', value: stats.unused, color: 'text-yellow-400' },
          { label: 'Suspended', value: stats.suspended, color: 'text-red-400' },
        ].map((stat) => (
          <div key={stat.label} className="glass rounded-xl p-4 text-center">
            <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
            <div className="text-xs text-text-muted mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Controls */}
      <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center justify-between">
        <button
          onClick={handleGenerate}
          className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-accent-cyan to-accent-cyan-dim text-bg-primary font-semibold text-sm hover:glow-cyan transition-all duration-300 hover:scale-105"
        >
          + Generate License Key
        </button>

        <div className="flex gap-2">
          {['all', 'active', 'unused', 'suspended'].map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                filter === f
                  ? 'bg-accent-cyan/20 text-accent-cyan border border-accent-cyan/30'
                  : 'text-text-muted hover:text-text-secondary hover:bg-white/5'
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* License List */}
      <div className="space-y-2">
        {filteredLicenses.length === 0 ? (
          <div className="text-center py-12 glass rounded-xl">
            <div className="text-4xl mb-3">🔑</div>
            <p className="text-text-muted text-sm">
              {filter === 'all' ? 'No license keys yet. Generate one to get started.' : `No ${filter} licenses found.`}
            </p>
          </div>
        ) : (
          filteredLicenses.map((license, i) => {
            const realIndex = licenses.findIndex((l) => l.key === license.key);
            return (
              <div
                key={license.key}
                className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 glass rounded-xl hover:bg-bg-card-hover transition-colors"
              >
                <div className="flex-1 min-w-0">
                  <code className="font-mono text-sm text-accent-cyan block truncate">
                    {license.key}
                  </code>
                  <div className="flex items-center gap-3 mt-1.5">
                    <span
                      className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${
                        license.status === 'active'
                          ? 'bg-green-500/20 text-green-400'
                          : license.status === 'suspended'
                          ? 'bg-red-500/20 text-red-400'
                          : 'bg-yellow-500/20 text-yellow-400'
                      }`}
                    >
                      {license.status}
                    </span>
                    <span className="text-xs text-text-muted">
                      {new Date(license.createdAt).toLocaleDateString()}
                    </span>
                    {license.email && (
                      <span className="text-xs text-text-muted truncate">{license.email}</span>
                    )}
                  </div>
                </div>

                <div className="flex gap-2 flex-shrink-0">
                  <button
                    onClick={() => handleCopy(license.key, realIndex)}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium text-text-secondary hover:text-text-primary hover:bg-white/5 border border-border transition-all"
                  >
                    {copied === realIndex ? '✓ Copied' : 'Copy'}
                  </button>
                  <button
                    onClick={() => handleToggleStatus(realIndex)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${
                      license.status === 'suspended'
                        ? 'text-green-400 border-green-500/30 hover:bg-green-500/10'
                        : 'text-red-400 border-red-500/30 hover:bg-red-500/10'
                    }`}
                  >
                    {license.status === 'suspended' ? 'Reinstate' : license.status === 'unused' ? 'Activate' : 'Suspend'}
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
