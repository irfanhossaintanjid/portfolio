import { useEffect, useState } from 'react';

/**
 * CustomCursor — Only active on fine-pointer (mouse) desktops.
 * Uses CSS transitions only. pointer-events: none so it never
 * interferes with the page. Scales up on hover of interactive elements.
 */
export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [dotPos, setDotPos] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);
  const isFinePointer = typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches;

  useEffect(() => {
    if (!isFinePointer) return; // Bail on coarse-pointer devices

    const onMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY });
      setDotPos({ x: e.clientX, y: e.clientY });
    };

    const onEnter = (e) => {
      const target = e.target;
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button') ||
        target.getAttribute('role') === 'button'
      ) {
        setHovering(true);
      }
    };

    const onLeave = () => setHovering(false);

    window.addEventListener('mousemove', onMove, { passive: true });
    document.addEventListener('mouseover', onEnter, { passive: true });
    document.addEventListener('mouseout', onLeave, { passive: true });

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onEnter);
      document.removeEventListener('mouseout', onLeave);
    };
  }, [isFinePointer]);

  if (!isFinePointer) return null;

  return (
    <>
      {/* Outer ring — slow lag via CSS transition */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: hovering ? 40 : 28,
          height: hovering ? 40 : 28,
          borderRadius: '50%',
          border: `1.5px solid ${hovering ? '#38BDF8' : '#2563EB'}`,
          pointerEvents: 'none',
          zIndex: 9999,
          transform: `translate(${pos.x - (hovering ? 20 : 14)}px, ${pos.y - (hovering ? 20 : 14)}px)`,
          transition: 'width 0.25s ease, height 0.25s ease, border-color 0.2s ease, transform 0.12s ease',
          opacity: 0.65,
          mixBlendMode: 'difference',
        }}
      />
      {/* Inner dot — snaps instantly */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: hovering ? 6 : 5,
          height: hovering ? 6 : 5,
          borderRadius: '50%',
          backgroundColor: hovering ? '#38BDF8' : '#2563EB',
          pointerEvents: 'none',
          zIndex: 9999,
          transform: `translate(${dotPos.x - (hovering ? 3 : 2.5)}px, ${dotPos.y - (hovering ? 3 : 2.5)}px)`,
          transition: 'background-color 0.2s ease, width 0.2s ease, height 0.2s ease',
        }}
      />
    </>
  );
}
