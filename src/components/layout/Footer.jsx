import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';
import { personalData } from '../../data/personal';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const id = href.replace('#', '');
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative z-10 border-t border-[var(--color-border-subtle)] bg-[var(--color-surface)]/60 backdrop-blur-sm mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* ── Main footer grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-[var(--color-border-subtle)]">

          {/* Brand block */}
          <div className="flex flex-col space-y-3">
            <div className="flex items-center gap-2.5">
              {/* IH monogram */}
              <span
                className="inline-flex items-center justify-center w-9 h-9 rounded-xl font-mono text-sm font-black bg-[var(--color-primary-accent)] text-white tracking-tighter select-none"
                aria-hidden="true"
              >
                IH
              </span>
              <div>
                <p className="font-mono text-sm font-bold text-[var(--color-text-primary)] leading-none">
                  Irfan Hossain
                </p>
                <p className="font-mono text-[10px] text-[var(--color-text-muted)] leading-none mt-0.5 uppercase tracking-widest">
                  Full-Stack Developer
                </p>
              </div>
            </div>
            <p className="text-xs text-[var(--color-text-secondary)] font-mono leading-relaxed max-w-[220px]">
              Turning Ideas into Digital Solutions
            </p>
            {/* Status dot */}
            <div className="flex items-center gap-2 text-[10px] font-mono text-[var(--color-text-muted)]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
              <span>Available for opportunities</span>
            </div>
          </div>

          {/* Nav links */}
          <div className="flex flex-col space-y-1 md:items-center">
            <p className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-text-muted)] mb-2">
              Navigation
            </p>
            <nav aria-label="Footer navigation">
              <ul className="space-y-1.5">
                {NAV_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-primary-accent)] font-mono transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Social + scroll-top */}
          <div className="flex flex-col space-y-4 md:items-end">
            <p className="text-[10px] font-mono uppercase tracking-widest text-[var(--color-text-muted)]">
              Connect
            </p>
            <div className="flex items-center gap-3">
              <a
                href={personalData.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-lg border border-[var(--color-border-subtle)] bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:text-[var(--color-primary-accent)] hover:border-[var(--color-primary-accent)]/50 transition-all"
              >
                <GithubIcon className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href={personalData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-lg border border-[var(--color-border-subtle)] bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:text-[var(--color-primary-accent)] hover:border-[var(--color-primary-accent)]/50 transition-all"
              >
                <LinkedinIcon className="w-4 h-4" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${personalData.socials.email}`}
                aria-label="Send Email"
                className="p-2 rounded-lg border border-[var(--color-border-subtle)] bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:text-[var(--color-primary-accent)] hover:border-[var(--color-primary-accent)]/50 transition-all"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
              </a>
            </div>

            {/* Scroll to top */}
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-[var(--color-border-subtle)] bg-[var(--color-surface)] text-xs font-mono text-[var(--color-text-secondary)] hover:text-[var(--color-primary-accent)] hover:border-[var(--color-primary-accent)] transition-all"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[var(--color-text-muted)] font-mono gap-3">
          <p>© {year} Irfan Hossain. All rights reserved.</p>
          <p className="flex items-center gap-2">
            <span>Built with React + Tailwind CSS</span>
            <span aria-hidden="true">·</span>
            <span className="text-[var(--color-secondary-accent)]">Midnight Blue Architecture</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
