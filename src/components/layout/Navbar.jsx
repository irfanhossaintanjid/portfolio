import { useState, useEffect } from 'react';
import { Menu, X, FileDown } from 'lucide-react';
import { useRouter } from '../../context/RouterContext';
import ThemeToggle from '../common/ThemeToggle';
import MobileNavigation from './MobileNavigation';
import { personalData } from '../../data/personal';

const NAV_ITEMS = [
  { id: 'home', label: 'Home', href: '#home' },
  { id: 'about', label: 'About', href: '#about' },
  { id: 'skills', label: 'Skills', href: '#skills' },
  { id: 'projects', label: 'Projects', href: '#projects' },
  { id: 'contact', label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { currentPath, navigate } = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll detection & active section spy
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Only track section positions when on home route
      if (currentPath === '/') {
        const scrollPosition = window.scrollY + 180;
        for (let i = NAV_ITEMS.length - 1; i >= 0; i--) {
          const item = NAV_ITEMS[i];
          const sectionEl = document.getElementById(item.id);
          if (sectionEl) {
            const top = sectionEl.offsetTop;
            if (scrollPosition >= top) {
              setActiveSection(item.id);
              break;
            }
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPath]);

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setActiveSection(item.id);
    if (currentPath !== '/') {
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById(item.id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById(item.id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    setActiveSection('home');
    if (currentPath !== '/') {
      navigate('/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[var(--color-bg)]/85 backdrop-blur-md border-b border-[var(--color-border-subtle)] py-3 shadow-lg shadow-black/5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo / Personal Monogram: IH */}
            <a
              href="/"
              onClick={handleLogoClick}
              className="group flex items-center gap-3 focus:outline-none"
              aria-label="Irfan Hossain Home"
            >
              {/* Monogram Badge */}
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-surface)] to-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] flex items-center justify-center font-mono font-extrabold text-sm text-[var(--color-text-primary)] group-hover:border-[var(--color-primary-accent)] transition-all duration-200 shadow-sm group-hover:shadow-md group-hover:shadow-blue-500/10">
                <span className="text-[var(--color-secondary-accent)]">I</span>
                <span className="text-[var(--color-primary-accent)]">H</span>
                <div className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[var(--color-secondary-accent)]/80"></div>
              </div>

              <div className="flex flex-col">
                <span className="font-mono text-sm font-bold tracking-tight text-[var(--color-text-primary)] group-hover:text-[var(--color-primary-accent)] transition-colors">
                  IRFAN HOSSAIN
                </span>
                <span className="font-mono text-[10px] tracking-widest text-[var(--color-text-muted)] uppercase">
                  FULL-STACK DEVELOPER
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links with Active Indicator */}
            <nav
              aria-label="Main Navigation"
              className="hidden md:flex items-center gap-1 bg-[var(--color-surface)]/80 backdrop-blur-md border border-[var(--color-border-subtle)] px-2 py-1.5 rounded-full shadow-sm"
            >
              {NAV_ITEMS.map((item) => {
                const isActive = currentPath === '/' && activeSection === item.id;

                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item)}
                    className={`relative px-4 py-1.5 text-xs font-mono tracking-wide rounded-full transition-all duration-200 ${
                      isActive
                        ? 'text-white bg-[var(--color-primary-accent)] font-semibold shadow-sm shadow-blue-500/30'
                        : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-hover)]'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Actions: Resume Button, Theme Toggle, Mobile Menu Trigger */}
            <div className="flex items-center gap-2.5">
              
              {/* Resume Download / View Button */}
              <a
                href={personalData.resumeUrl}
                download={personalData.resumeFileName}
                aria-label="Download Irfan Hossain's resume"
                className="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-mono font-medium border border-[var(--color-primary-accent)]/40 bg-[var(--color-primary-accent)]/10 text-[var(--color-secondary-accent)] hover:bg-[var(--color-primary-accent)] hover:text-white transition-all duration-200 shadow-sm"
              >
                <FileDown className="w-3.5 h-3.5" />
                <span>Resume</span>
              </a>

              {/* Theme Toggle Button */}
              <ThemeToggle />

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                className="md:hidden p-2 rounded-lg border border-[var(--color-border-subtle)] bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileNavigation
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navItems={NAV_ITEMS}
        activeSection={activeSection}
        onNavClick={handleNavClick}
      />
    </>
  );
}
