import { Terminal, Lightbulb, Compass, Quote } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          number="01"
          title="About Me"
          subtitle="My development journey, core motivation, and thoughtful approach to creating digital solutions."
        />

        {/* Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Main Programming Journey Column (8 Cols) */}
          <div className="lg:col-span-8 flex flex-col justify-between p-8 sm:p-10 rounded-3xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)]/80 backdrop-blur-md shadow-sm relative overflow-hidden">
            
            {/* Background Decorative Monogram Watermark */}
            <div
              aria-hidden="true"
              className="absolute -right-8 -bottom-10 font-mono font-extrabold text-9xl text-[var(--color-text-primary)] opacity-[0.03] select-none pointer-events-none"
            >
              IH
            </div>

            <div>
              {/* Category Tag */}
              <div className="inline-flex items-center gap-2 mb-6 text-xs font-mono text-[var(--color-secondary-accent)]">
                <Terminal className="w-4 h-4 text-[var(--color-primary-accent)]" />
                <span>// MY PROGRAMMING JOURNEY</span>
              </div>

              {/* Exact Text Block with Editorial Typography */}
              <div className="space-y-6 text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed font-sans">
                <p className="first-letter:text-4xl first-letter:font-extrabold first-letter:text-[var(--color-primary-accent)] first-letter:mr-2 first-letter:float-left">
                  I started learning web development in 2026, driven by my curiosity about technology and my passion for building things with code. I began by exploring frontend development and gradually expanded my skills into backend development.
                </p>

                <p>
                  Today, I focus on building full-stack web applications and turning ideas into practical digital solutions. My journey is driven by continuous learning, problem-solving, and creating meaningful experiences through technology.
                </p>
              </div>
            </div>

            {/* Editorial Highlight Strip */}
            <div className="mt-8 pt-6 border-t border-[var(--color-border-subtle)] grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[var(--color-primary-accent)]/10 text-[var(--color-secondary-accent)]">
                  <Compass className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-mono text-[var(--color-text-muted)]">CORE DIRECTION</span>
                  <span className="text-sm font-semibold text-[var(--color-text-primary)]">Full-Stack Development</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[var(--color-secondary-accent)]/10 text-[var(--color-primary-accent)]">
                  <Lightbulb className="w-4 h-4" />
                </div>
                <div>
                  <span className="block text-xs font-mono text-[var(--color-text-muted)]">CORE MOTIVATION</span>
                  <span className="text-sm font-semibold text-[var(--color-text-primary)]">Continuous Learning</span>
                </div>
              </div>
            </div>

          </div>

          {/* Personal Interest & Reflection Column (4 Cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between p-8 rounded-3xl border border-[var(--color-border-subtle)] bg-gradient-to-b from-[var(--color-surface)]/90 via-[var(--color-surface)]/70 to-[var(--color-bg-secondary)]/50 backdrop-blur-md shadow-sm relative">
            
            <div>
              {/* Category Tag */}
              <div className="inline-flex items-center gap-2 mb-6 text-xs font-mono text-[var(--color-secondary-accent)]">
                <Quote className="w-4 h-4 text-[var(--color-primary-accent)]" />
                <span>// PERSONAL REFLECTION</span>
              </div>

              <h3 className="text-xl font-bold text-[var(--color-text-primary)] mb-4">
                Personal Mindset & Ideas
              </h3>

              {/* Exact Text Block */}
              <blockquote className="relative p-5 rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-bg)]/60 text-[var(--color-text-primary)] text-base italic leading-relaxed shadow-sm">
                "{`I enjoy sitting alone and thinking, exploring ideas, and reflecting on different possibilities.`}"
              </blockquote>

              <p className="mt-5 text-sm text-[var(--color-text-secondary)] leading-relaxed">
                This contemplative mindset gives me clarity when architecting application structures, evaluating technical trade-offs, and conceptualizing digital experiences before committing to code.
              </p>
            </div>

            {/* Bottom Sign-off Tag */}
            <div className="mt-8 pt-4 border-t border-[var(--color-border-subtle)] flex items-center justify-between font-mono text-[11px] text-[var(--color-text-muted)]">
              <span>PHILOSOPHY // INVENT & REFLECT</span>
              <span className="text-[var(--color-secondary-accent)]">IH-2026</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
