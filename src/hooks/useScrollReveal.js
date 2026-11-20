import { useEffect, useRef, useState } from 'react';

/**
 * useScrollReveal — Pure IntersectionObserver scroll reveal hook.
 * Respects prefers-reduced-motion: if user prefers reduced motion,
 * element is immediately visible without animation.
 *
 * @param {Object} options
 * @param {number}  options.threshold  — 0–1, fraction of element visible to trigger (default 0.12)
 * @param {string}  options.rootMargin — CSS margin around root (default '0px 0px -48px 0px')
 * @param {boolean} options.once       — Only trigger once, then disconnect (default true)
 * @returns {{ ref, visible }}
 */
export function useScrollReveal({
  threshold = 0.12,
  rootMargin = '0px 0px -48px 0px',
  once = true,
} = {}) {
  const ref = useRef(null);
  const prefersReduced =
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // If reduced motion, start visible immediately; otherwise hidden.
  const [visible, setVisible] = useState(prefersReduced);

  useEffect(() => {
    if (prefersReduced) {
      // No observation needed; element already visible.
      return;
    }
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold, rootMargin }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, rootMargin, once, prefersReduced]);

  return { ref, visible };
}
