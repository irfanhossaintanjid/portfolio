import { useEffect } from 'react';
import { X, FileText, Mail, ArrowUpRight } from 'lucide-react';
import { personalData } from '../../data/personal';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      ></div>

      {/* Modal Dialog Card */}
      <div className="relative z-10 w-full max-w-lg rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)] p-6 sm:p-8 shadow-2xl animate-fadeIn">
        
        {/* Top Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[var(--color-border-subtle)]">
          <div className="flex items-center gap-2 text-xs font-mono text-[var(--color-secondary-accent)]">
            <span className="w-2 h-2 rounded-full bg-[var(--color-primary-accent)] animate-pulse"></span>
            <span>SPEC // RESUME_STATUS</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1.5 rounded-lg border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-primary-accent)] transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <div className="pt-6 pb-2 text-center sm:text-left flex flex-col sm:flex-row gap-5 items-center sm:items-start">
          <div className="p-3.5 rounded-2xl bg-[var(--color-primary-accent)]/10 text-[var(--color-primary-accent)] border border-[var(--color-primary-accent)]/20 shrink-0">
            <FileText className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h3 id="resume-modal-title" className="text-xl font-bold text-[var(--color-text-primary)]">
              Curriculum Vitae / Resume
            </h3>
            <p className="text-xs font-mono text-[var(--color-secondary-accent)]">
              IRFAN HOSSAIN — FULL-STACK DEVELOPER
            </p>
            <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed pt-1">
              My comprehensive developer resume is currently being finalized with my latest architectural case studies, component libraries, and technical documentation. It will be available for direct download from this button shortly.
            </p>
            <p className="text-xs text-[var(--color-text-muted)] pt-1 font-mono">
              Status: Ready for technical review upon request.
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 pt-4 border-t border-[var(--color-border-subtle)] flex flex-col sm:flex-row items-center justify-end gap-3">
          <a
            href={`mailto:${personalData.socials.email}?subject=Resume%20Inquiry%20-%20Irfan%20Hossain`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-semibold bg-[var(--color-primary-accent)] text-white hover:opacity-95 shadow-md shadow-blue-500/20 transition-all"
          >
            <Mail className="w-4 h-4" />
            <span>Request via Email</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-80" />
          </a>

          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl font-mono text-xs font-medium border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-primary-accent)] transition-all"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
}
