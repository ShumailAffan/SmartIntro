import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Search, Download } from 'lucide-react';
import { portfolioData } from '../../data';
import ThemeToggle from '../common/ThemeToggle';
import SearchModal from '../common/SearchModal';

const { siteConfig, personal, portfolioAssets } = portfolioData;

/** Sticky navigation with mobile menu, search, and theme toggle */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${isActive ? 'text-indigo-500' : 'text-slate-600 dark:text-slate-300 hover:text-indigo-500'}`;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'glass shadow-md py-3' : 'bg-transparent py-5'
        }`}
      >
        <nav className="section-container flex items-center justify-between" aria-label="Main navigation">
          <Link to="/" className="text-lg font-bold gradient-text">
            {personal.full_name.split(' ').slice(-2).join(' ')}
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {siteConfig.navigation.map((item) => (
              <NavLink key={item.path} to={item.path} className={navLinkClass}>
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              className="hidden sm:flex h-10 items-center gap-2 rounded-xl glass px-3 text-sm text-slate-500 hover:text-slate-700 dark:hover:text-slate-200"
              aria-label="Open search"
            >
              <Search size={16} />
              <span className="hidden md:inline">Search</span>
              <kbd className="hidden md:inline rounded bg-slate-200/50 dark:bg-slate-700/50 px-1.5 py-0.5 text-xs">⌘K</kbd>
            </button>

            {portfolioAssets.resume_download_enabled && portfolioAssets.resume_file && (
              <a
                href={portfolioAssets.resume_file}
                download
                className="hidden sm:flex h-10 items-center gap-1.5 rounded-xl glass px-3 text-sm font-medium hover:bg-white/90 dark:hover:bg-slate-800/90"
              >
                <Download size={16} />
                Resume
              </a>
            )}

            <ThemeToggle />

            <button
              className="lg:hidden flex h-10 w-10 items-center justify-center rounded-xl glass"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {mobileOpen && (
          <div className="lg:hidden glass border-t border-slate-200/50 dark:border-slate-700/50 mt-3">
            <div className="section-container flex flex-col gap-1 py-4">
              {siteConfig.navigation.map((item) => (
                <NavLink key={item.path} to={item.path} className={navLinkClass + ' py-2.5 px-2'}>
                  {item.label}
                </NavLink>
              ))}
              <button
                onClick={() => { setSearchOpen(true); setMobileOpen(false); }}
                className="flex items-center gap-2 py-2.5 px-2 text-sm font-medium text-slate-600 dark:text-slate-300"
              >
                <Search size={16} /> Search
              </button>
            </div>
          </div>
        )}
      </header>

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
