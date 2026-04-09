import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSection = (basePath, hashId) => {
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
  };

  return (
    <footer className="border-t border-border bg-bg-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-cyan to-accent-magenta flex items-center justify-center font-extrabold text-bg-primary text-sm">
                V
              </div>
              <span className="text-lg font-bold text-text-primary">
                Vinci <span className="text-accent-cyan">Studios</span>
              </span>
            </Link>
            <p className="text-text-secondary text-sm max-w-md leading-relaxed">
              Creative media company building tools, content, and experiences for the next generation of creators. Based in Miami, FL.
            </p>
            <div className="flex gap-4 mt-4">
              {['Twitter', 'YouTube', 'Discord', 'GitHub'].map((platform) => (
                <a
                  key={platform}
                  href="#"
                  className="text-text-muted hover:text-accent-cyan text-xs transition-colors"
                  aria-label={platform}
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-wider">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/studio" className="text-sm text-text-secondary hover:text-accent-cyan transition-colors">
                  Vinci Studio Suite
                </Link>
              </li>
              <li>
                <Link to="/films" className="text-sm text-text-secondary hover:text-accent-cyan transition-colors">
                  Vinci Films Network
                </Link>
              </li>
              <li>
                <a href="https://popvinciacademy.com" target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary hover:text-accent-cyan transition-colors">
                  Pop Vinci Academy
                </a>
              </li>
              <li>
                <a href="https://popvinci.com" target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary hover:text-accent-cyan transition-colors">
                  Pop Vinci
                </a>
              </li>
              <li>
                <a href="https://daydeamersnightstreamers.com" target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary hover:text-accent-cyan transition-colors">
                  DDNS
                </a>
              </li>
            </ul>
            <h4 className="text-sm font-semibold text-text-primary mb-4 mt-6 uppercase tracking-wider">The Young Empire</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://saucecaviar.com" target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary hover:text-accent-cyan transition-colors">
                  Sauce Caviar
                </a>
              </li>
              <li>
                <a href="https://trapglow.com" target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary hover:text-accent-cyan transition-colors">
                  Trap Glow
                </a>
              </li>
              <li>
                <a href="https://saucewire.com" target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary hover:text-accent-cyan transition-colors">
                  Sauce Wire
                </a>
              </li>
              <li>
                <a href="https://trapfrequency.com" target="_blank" rel="noopener noreferrer" className="text-sm text-text-secondary hover:text-accent-cyan transition-colors">
                  Trap Frequency
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('/', 'about')}
                  className="text-sm text-text-secondary hover:text-accent-cyan transition-colors"
                >
                  About
                </button>
              </li>
              <li><a href="mailto:vincent@vincistudios.org" className="text-sm text-text-secondary hover:text-accent-cyan transition-colors">Contact</a></li>
              <li><a href="mailto:support@vincistudios.org" className="text-sm text-text-secondary hover:text-accent-cyan transition-colors">Support</a></li>
              <li><a href="#" className="text-sm text-text-secondary hover:text-accent-cyan transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-sm text-text-secondary hover:text-accent-cyan transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-text-muted">
            © 2026 Vinci Studios LLC. All rights reserved. Built in Florida 🌴
          </p>
          <p className="text-xs text-text-muted">
            <a href="https://vincistudios.org" className="hover:text-accent-cyan transition-colors">vincistudios.org</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
