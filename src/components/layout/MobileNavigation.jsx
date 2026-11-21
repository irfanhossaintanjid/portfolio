import { FileDown, X, ChevronRight } from 'lucide-react';
import ThemeToggle from '../common/ThemeToggle';
import { personalData } from '../../data/personal';

export default function MobileNavigation({
  isOpen,
  onClose,
  navItems,
  activeSection,
  onNavClick
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden flex flex-col justify-between">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      ></div>

      {/* Drawer Container */}
      <div className="relative z-10 w-full bg-[var(--color-surface)] border-b border-[var(--color-border-subtle)] p-6 shadow-2xl animate-fadeIn">
        {/* Top Header in drawer */}
        <div className="flex items-center justify-between pb-4 border-b border-[var(--color-border-subtle)]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[var(--color-bg-secondary)] border border-[var(--color-border-subtle)] flex items-center justify-center font-mono font-bold text-xs">
              <span className="text-[var(--color-secondary-accent)]">I</span>
              <span className="text-[var(--color-primary-accent)]">H</span>
            </div>
            <span className="font-mono text-sm font-bold text-[var(--color-text-primary)]">
              IRFAN HOSSAIN
            </span>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={onClose}
              aria-label="Close navigation"
              className="p-1.5 rounded-lg border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Links */}
        <div className="py-5 flex flex-col space-y-1.5">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;

            return (
              <a
                key={item.id}
                href={item.href}
                onClick={(e) => onNavClick(e, item)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl font-mono text-sm transition-all ${
                  isActive
                    ? 'bg-[var(--color-primary-accent)] text-white font-semibold shadow-md shadow-blue-500/20'
                    : 'text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-surface-hover)]'
                }`}
              >
                <span className="flex items-center gap-2">
                  <span className={isActive ? 'text-white' : 'text-[var(--color-secondary-accent)]'}>
                    //
                  </span>
                  {item.label}
                </span>
                <ChevronRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[var(--color-text-muted)]'}`} />
              </a>
            );
          })}
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <a
            href={personalData.resumeUrl}
            download={personalData.resumeFileName}
            aria-label="Download Irfan Hossain's resume"
            onClick={() => {
              onClose();
            }}
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-mono text-sm font-semibold bg-[var(--color-primary-accent)] text-white hover:opacity-95 shadow-lg shadow-blue-500/20 transition-all"
          >
            <FileDown className="w-4 h-4" />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </div>
  );
}
