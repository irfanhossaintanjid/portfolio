import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function ThemeToggle({ className = '' }) {
  const { toggleTheme, isDark } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={`relative inline-flex items-center justify-center p-2 rounded-lg border border-[var(--color-border-subtle)] bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:text-[var(--color-primary-accent)] hover:border-[var(--color-primary-accent)]/50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-accent)]/30 ${className}`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? (
        <Sun className="w-4 h-4 text-amber-400 transition-transform duration-300 rotate-0 hover:rotate-90" />
      ) : (
        <Moon className="w-4 h-4 text-sky-600 transition-transform duration-300 -rotate-12 hover:rotate-0" />
      )}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
