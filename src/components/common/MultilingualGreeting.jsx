import { useState, useEffect, useRef } from 'react';

// Brand colors
const BRAND = {
  midnight: '#0B1120',
  navy: '#172554',
  electric: '#2563EB',
  cyan: '#38BDF8',
  white: '#F8FAFC',
};

// 9 greetings in specified sequence with proper script direction
const GREETINGS = [
  { text: 'Hello', lang: 'en', dir: 'ltr' },
  { text: 'Hola', lang: 'es', dir: 'ltr' },
  { text: 'Bonjour', lang: 'fr', dir: 'ltr' },
  { text: 'Ciao', lang: 'it', dir: 'ltr' },
  { text: 'こんにちは', lang: 'ja', dir: 'ltr' },
  { text: '안녕하세요', lang: 'ko', dir: 'ltr' },
  { text: 'مرحباً', lang: 'ar', dir: 'rtl' },
  { text: 'नमस्ते', lang: 'hi', dir: 'ltr' },
  { text: 'হ্যালো', lang: 'bn', dir: 'ltr' },
];

// In-memory session flag: plays once on initial application load, does not replay on client-side routing
let hasPlayedIntroThisSession = false;

export default function MultilingualGreeting() {
  const [isDismissed, setIsDismissed] = useState(() => hasPlayedIntroThisSession);
  const [isExiting, setIsExiting] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const timersRef = useRef([]);

  useEffect(() => {
    // If already played during this session, do not schedule animations
    if (hasPlayedIntroThisSession) {
      return;
    }

    // Check for user's reduced-motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      const exitTimer = setTimeout(() => {
        setIsExiting(true);
      }, 700);
      const dismissTimer = setTimeout(() => {
        setIsDismissed(true);
        hasPlayedIntroThisSession = true;
      }, 1000);
      timersRef.current = [exitTimer, dismissTimer];
      return () => {
        timersRef.current.forEach(clearTimeout);
      };
    }

    // Standard timing: ~360ms per greeting, total sequence ~3.3s, fade-out to website by ~3.8s
    const stepDuration = 360;
    const timers = [];

    GREETINGS.forEach((_, idx) => {
      const t = setTimeout(() => {
        setCurrentIndex(idx);
      }, idx * stepDuration);
      timers.push(t);
    });

    // Start graceful exit transition after the last greeting
    const totalGreetingTime = GREETINGS.length * stepDuration;
    const exitTimer = setTimeout(() => {
      setIsExiting(true);
    }, totalGreetingTime + 100);
    timers.push(exitTimer);

    // Completely unmount overlay after transition finishes
    const dismissTimer = setTimeout(() => {
      setIsDismissed(true);
      hasPlayedIntroThisSession = true;
    }, totalGreetingTime + 700);
    timers.push(dismissTimer);

    timersRef.current = timers;

    return () => {
      timers.forEach(clearTimeout);
    };
  }, []);

  const handleSkip = () => {
    timersRef.current.forEach(clearTimeout);
    setIsExiting(true);
    setTimeout(() => {
      setIsDismissed(true);
      hasPlayedIntroThisSession = true;
    }, 150);
  };

  // If already dismissed, render nothing so zero overhead remains
  if (isDismissed) {
    return null;
  }

  const currentGreeting = GREETINGS[currentIndex] || GREETINGS[0];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Welcome greeting introduction"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-midnight select-none transition-all duration-600 ease-out ${
        isExiting ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
      style={{ backgroundColor: BRAND.midnight }}
    >
      {/* Background Architectural Blueprint Grid */}
      <div className="absolute inset-0 architect-grid opacity-15 pointer-events-none" />

      {/* Subtle Animated Radial Glow */}
      <div
        className="absolute w-[360px] h-[360px] sm:w-[500px] sm:h-[500px] md:w-[650px] md:h-[650px] rounded-full pointer-events-none animate-intro-glow"
        style={{
          background: `radial-gradient(circle, rgba(37, 99, 235, 0.22) 0%, rgba(56, 189, 248, 0.08) 40%, rgba(11, 17, 32, 0) 70%)`,
          filter: 'blur(40px)',
        }}
      />

      {/* Skip Intro Control Button (Top Right) */}
      <div className="absolute top-5 right-5 sm:top-8 sm:right-8 z-10">
        <button
          type="button"
          onClick={handleSkip}
          className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-mono tracking-wider uppercase text-[#94A3B8] hover:text-[#38BDF8] border border-[#1E2E4F] hover:border-[#38BDF8]/40 bg-[#101A30]/80 backdrop-blur-md transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#38BDF8]"
          aria-label="Skip introduction"
        >
          <span>Skip Intro</span>
          <span className="text-[#38BDF8] opacity-60 group-hover:opacity-100 transition-opacity">→</span>
        </button>
      </div>

      {/* Central Composition: ✦ ◇ Greeting ◇ ✦ */}
      <div className="relative z-10 flex items-center justify-center px-4 w-full max-w-4xl">
        <div className="flex items-center justify-center gap-3 sm:gap-5 md:gap-8">
          
          {/* Left Decorative Elements: ✦ ◇ */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 animate-symbol-left flex-shrink-0">
            <span
              className="text-xl sm:text-2xl md:text-3xl select-none"
              style={{
                color: BRAND.cyan,
                textShadow: `0 0 14px rgba(56, 189, 248, 0.65)`,
              }}
              aria-hidden="true"
            >
              ✦
            </span>
            <span
              className="text-lg sm:text-xl md:text-2xl select-none"
              style={{
                color: BRAND.electric,
                textShadow: `0 0 12px rgba(37, 99, 235, 0.65)`,
              }}
              aria-hidden="true"
            >
              ◇
            </span>
          </div>

          {/* Centered Sequential Greeting Text */}
          <div className="min-w-[160px] sm:min-w-[260px] md:min-w-[360px] text-center flex items-center justify-center">
            <h1
              key={currentGreeting.text}
              dir={currentGreeting.dir}
              className="animate-greeting-enter text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight select-none text-center"
              style={{
                color: BRAND.white,
                textShadow: '0 0 40px rgba(56, 189, 248, 0.4), 0 0 15px rgba(37, 99, 235, 0.3)',
                fontFamily:
                  "'Inter', 'Noto Sans Bengali', 'Noto Sans Arabic', 'Noto Sans Devanagari', 'Noto Sans JP', 'Noto Sans KR', system-ui, -apple-system, sans-serif",
              }}
            >
              {currentGreeting.text}
            </h1>
          </div>

          {/* Right Decorative Elements: ◇ ✦ */}
          <div className="flex items-center gap-1.5 sm:gap-2.5 animate-symbol-right flex-shrink-0">
            <span
              className="text-lg sm:text-xl md:text-2xl select-none"
              style={{
                color: BRAND.electric,
                textShadow: `0 0 12px rgba(37, 99, 235, 0.65)`,
              }}
              aria-hidden="true"
            >
              ◇
            </span>
            <span
              className="text-xl sm:text-2xl md:text-3xl select-none"
              style={{
                color: BRAND.cyan,
                textShadow: `0 0 14px rgba(56, 189, 248, 0.65)`,
              }}
              aria-hidden="true"
            >
              ✦
            </span>
          </div>

        </div>
      </div>

      {/* Subtle Brand Tagline Anchor at Bottom */}
      <div className="absolute bottom-8 sm:bottom-12 z-10 text-center">
        <p className="font-mono text-[11px] sm:text-xs text-[#64748B] tracking-widest uppercase">
          Irfan Hossain <span className="text-[#38BDF8] mx-1.5">•</span> Full-Stack Developer
        </p>
      </div>
    </div>
  );
}
