import { useState, useEffect } from 'react';
import { ExternalLink, FileDown, Terminal, Mail, Cpu } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';
import { personalData } from '../../data/personal';

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 50, y: 30 });

  // Subtle mouse-following lighting effect on desktop
  useEffect(() => {
    const handleMouseMove = (e) => {
      // Smooth percentage calculation
      const x = Math.round((e.clientX / window.innerWidth) * 100);
      const y = Math.round((e.clientY / window.innerHeight) * 100);
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      <section
        id="home"
        className="relative min-h-[92vh] flex items-center pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden"
      >
        {/* Subtle Interactive Mouse-Following Lighting Spotlight (Desktop) */}
        <div
          aria-hidden="true"
          className="hidden lg:block absolute pointer-events-none transition-all duration-700 ease-out"
          style={{
            left: `${mousePos.x}%`,
            top: `${mousePos.y}%`,
            width: '650px',
            height: '650px',
            transform: 'translate(-50%, -50%)',
            background: 'radial-gradient(circle, rgba(37, 99, 235, 0.08) 0%, rgba(56, 189, 248, 0.03) 45%, transparent 70%)',
            zIndex: 0
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* LEFT SIDE: Identity, Tagline, Introduction, and CTAs (7 Cols) */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              
              {/* Designation Sub-label */}
              <div className="flex items-center gap-2 mb-3 font-mono text-xs md:text-sm tracking-widest text-[var(--color-secondary-accent)] uppercase">
                <Terminal className="w-4 h-4 text-[var(--color-primary-accent)]" />
                <span>{personalData.designation}</span>
              </div>

              {/* Name */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[var(--color-text-primary)] leading-[1.08]">
                IRFAN <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-sky-400 to-cyan-300">
                  HOSSAIN
                </span>
              </h1>

              {/* Tagline */}
              <p className="mt-4 text-xl sm:text-2xl md:text-3xl font-bold text-[var(--color-text-primary)] tracking-tight">
                {personalData.tagline}
              </p>

              {/* Professional Introduction */}
              <p className="mt-5 text-base md:text-lg text-[var(--color-text-secondary)] max-w-xl leading-relaxed">
                I am a dedicated developer focused on building modern, performant web applications and solving real-world problems through clean code, structured APIs, and intuitive user experiences.
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
                <a
                  href={personalData.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View Irfan Hossain's resume in a new tab"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-mono text-xs sm:text-sm font-semibold border border-[var(--color-border-subtle)] bg-[var(--color-surface)] text-[var(--color-text-primary)] hover:border-[var(--color-primary-accent)] hover:text-[var(--color-primary-accent)] hover:-translate-y-0.5 transition-all shadow-sm"
                >
                  <ExternalLink className="w-4 h-4 text-[var(--color-secondary-accent)]" />
                  <span>View Resume</span>
                </a>

                <a
                  href={personalData.resumeUrl}
                  download={personalData.resumeFileName}
                  aria-label="Download Irfan Hossain's resume"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-mono text-xs sm:text-sm font-semibold bg-[var(--color-primary-accent)] text-white hover:bg-blue-500 hover:-translate-y-0.5 shadow-lg shadow-blue-500/25 transition-all"
                >
                  <FileDown className="w-4 h-4" />
                  <span>Download Resume</span>
                </a>
              </div>

              {/* Direct Channels & Social Icons */}
              <div className="mt-10 pt-6 border-t border-[var(--color-border-subtle)] w-full flex flex-wrap items-center gap-4">
                <span className="font-mono text-xs text-[var(--color-text-muted)] tracking-wider">
                  DIRECT LINKS:
                </span>
                
                <div className="flex items-center gap-2.5">
                  {/* GitHub */}
                  <a
                    href={personalData.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="p-2.5 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:text-[var(--color-primary-accent)] hover:border-[var(--color-primary-accent)]/50 transition-all shadow-sm"
                    title="GitHub"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href={personalData.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn Profile"
                    className="p-2.5 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:text-[var(--color-primary-accent)] hover:border-[var(--color-primary-accent)]/50 transition-all shadow-sm"
                    title="LinkedIn"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                  </a>

                  {/* Direct Email */}
                  <a
                    href={`mailto:${personalData.socials.email}`}
                    aria-label="Send direct email"
                    className="p-2.5 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)] text-[var(--color-text-secondary)] hover:text-[var(--color-primary-accent)] hover:border-[var(--color-primary-accent)]/50 transition-all shadow-sm"
                    title="Email"
                  >
                    <Mail className="w-4 h-4" />
                  </a>
                </div>

                <span className="hidden sm:inline-block font-mono text-xs text-[var(--color-text-muted)] ml-auto">
                  LOC // BANGLADESH
                </span>
              </div>

            </div>

            {/* RIGHT SIDE: Personal Photograph Prominently Displayed (5 Cols) */}
            <div className="lg:col-span-5 relative flex justify-center mt-6 lg:mt-0">
              
              {/* Outer Asymmetrical Architectural Image Frame */}
              <div className="relative w-full max-w-sm sm:max-w-md">
                
                {/* Subtle Cyan/Blue Ambient Lighting Behind Frame */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[var(--color-primary-accent)]/20 via-[var(--color-secondary-accent)]/15 to-transparent blur-xl opacity-75"
                ></div>

                {/* Main Card Container */}
                <div className="relative rounded-3xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)]/90 backdrop-blur-md p-4 sm:p-5 shadow-2xl">
                  
                  {/* Decorative Architectural Header Marks */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-[var(--color-border-subtle)] font-mono text-[10px] text-[var(--color-text-muted)]">
                    <span className="flex items-center gap-1.5 text-[var(--color-secondary-accent)]">
                      <Cpu className="w-3.5 h-3.5" />
                      ID // IRFAN_HOSSAIN
                    </span>
                  </div>

                  {/* Photograph Display with Asymmetrical Frame & Proper Aspect Ratio */}
                  <div className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-[var(--color-primary-accent)]/30 bg-gradient-to-b from-[var(--color-bg-secondary)] to-[var(--color-bg)] shadow-inner">
                    <img
                      src="/images/profile.jpg"
                      onError={(e) => {
                        // Fallback to /profile.jpg if /images/profile.jpg encounters an issue
                        if (e.target.src !== `${window.location.origin}/profile.jpg`) {
                          e.target.src = '/profile.jpg';
                        }
                      }}
                      alt="Irfan Hossain - Full-Stack Developer"
                      className="w-full h-full object-cover object-top filter contrast-[1.03] transition-transform duration-700 hover:scale-[1.02]"
                      loading="eager"
                    />

                    {/* Subtle Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-surface)]/60 via-transparent to-transparent pointer-events-none"></div>

                    {/* Monogram Corner Overlay */}
                    <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-[var(--color-surface)]/90 backdrop-blur-md border border-[var(--color-border-subtle)] font-mono text-[11px] font-bold text-[var(--color-secondary-accent)] shadow-md">
                      IH // DEV
                    </div>
                  </div>

                  {/* Tagline Footer */}
                  <div className="mt-4 pt-3 border-t border-[var(--color-border-subtle)]">
                    <span className="text-xs font-mono font-medium text-[var(--color-text-primary)]">
                      Turning Ideas into Digital Solutions
                    </span>
                  </div>

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>

    </>
  );
}
