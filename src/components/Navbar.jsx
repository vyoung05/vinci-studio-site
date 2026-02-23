import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const links = [
    { to: '/#products', label: 'Products', hash: true },
    { to: '/studio', label: 'Studio', hash: false },
    { to: '/films', label: 'Films', hash: false },
    { to: '/#about', label: 'About', hash: true },
  ];

  const isActive = (to) => {
    if (to === '/') return location.pathname === '/';
    const path = to.split('#')[0] || '/';
    return location.pathname === path;
  };

  const handleNavClick = (link) => {
    setMobileOpen(false);
    if (link.hash) {
      const hashId = link.to.split('#')[1];
      const basePath = link.to.split('#')[0] || '/';
      if (location.pathname === basePath) {
        const el = document.getElementById(hashId);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate(basePath);
        setTimeout(() => {
          const el = document.getElementById(hashId);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-magenta flex items-center justify-center font-extrabold text-bg-primary text-sm transition-shadow group-hover:glow-cyan">
              V
            </div>
            <span className="text-lg font-bold text-text-primary">
              Vinci <span className="text-accent-cyan">Studios</span>
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-1">
            {links.map((link) =>
              link.hash ? (
                <button
                  key={link.to}
                  onClick={() => handleNavClick(link)}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 text-text-secondary hover:text-text-primary hover:bg-white/5"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(link.to)
                      ? 'text-accent-cyan bg-accent-cyan/10'
                      : 'text-text-secondary hover:text-text-primary hover:bg-white/5'
                  }`}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/studio/buy"
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-accent-cyan to-accent-cyan-dim text-bg-primary font-semibold text-sm hover:glow-cyan transition-all duration-300 hover:scale-105"
            >
              Buy Studio — $99
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-white/5"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden glass-strong border-t border-border px-4 py-3 space-y-1">
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="block px-4 py-2 rounded-lg text-sm text-text-secondary hover:text-text-primary hover:bg-white/5"
          >
            Home
          </Link>
          {links.map((link) =>
            link.hash ? (
              <button
                key={link.to}
                onClick={() => handleNavClick(link)}
                className="block w-full text-left px-4 py-2 rounded-lg text-sm text-text-secondary hover:text-text-primary hover:bg-white/5"
              >
                {link.label}
              </button>
            ) : (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-2 rounded-lg text-sm text-text-secondary hover:text-text-primary hover:bg-white/5"
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            to="/studio/buy"
            onClick={() => setMobileOpen(false)}
            className="block px-4 py-2 rounded-lg text-sm font-semibold text-accent-cyan hover:bg-accent-cyan/10"
          >
            Buy Studio — $99
          </Link>
        </div>
      )}
    </nav>
  );
}
