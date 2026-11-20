import { useState } from 'react';
import {
  Mail,
  Send,
  Check,
  Copy,
  ExternalLink,
  ArrowRight,
  Loader2,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../common/SocialIcons';
import SectionHeading from '../common/SectionHeading';
import { personalData } from '../../data/personal';
import { useScrollReveal } from '../../hooks/useScrollReveal';


/* ─── Scroll-reveal wrapper ─────────────────────────────────────── */
function Reveal({ children, delay = 0, className = '' }) {
  const { ref, visible } = useScrollReveal({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.65s ease ${delay}ms, transform 0.65s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

/* ─── Email validation ───────────────────────────────────────────── */
function isValidEmail(v) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
}

/* ─── Contact card: Email ────────────────────────────────────────── */
function EmailCard() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(personalData.socials.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback: select text
    }
  };

  return (
    <div className="p-5 rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)]/80 backdrop-blur-sm shadow-sm hover:border-[var(--color-primary-accent)]/40 transition-all duration-300 group">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3 min-w-0">
          <div className="flex-shrink-0 p-2.5 rounded-xl bg-[var(--color-primary-accent)]/10 text-[var(--color-primary-accent)] border border-[var(--color-primary-accent)]/20 group-hover:bg-[var(--color-primary-accent)]/20 transition-colors">
            <Mail className="w-5 h-5" />
          </div>
          <div className="min-w-0">
            <span className="block text-[10px] font-mono uppercase tracking-wider text-[var(--color-text-muted)] mb-0.5">
              Primary Email
            </span>
            <a
              href={`mailto:${personalData.socials.email}`}
              className="block text-sm font-semibold text-[var(--color-text-primary)] hover:text-[var(--color-primary-accent)] transition-colors truncate"
            >
              {personalData.socials.email}
            </a>
          </div>
        </div>
        <button
          type="button"
          onClick={handleCopy}
          aria-label={copied ? 'Email copied' : 'Copy email address'}
          title={copied ? 'Copied!' : 'Copy email'}
          className="flex-shrink-0 p-2 rounded-lg border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] hover:text-[var(--color-primary-accent)] hover:border-[var(--color-primary-accent)]/50 transition-all"
        >
          {copied ? (
            <Check className="w-4 h-4 text-emerald-400" aria-hidden="true" />
          ) : (
            <Copy className="w-4 h-4" aria-hidden="true" />
          )}
        </button>
      </div>
      {copied && (
        <p
          role="status"
          aria-live="polite"
          className="mt-2 text-[10px] font-mono text-emerald-400 text-right"
        >
          ✓ Copied to clipboard
        </p>
      )}
    </div>
  );
}

/* ─── Contact card: GitHub ───────────────────────────────────────── */
function GithubCard() {
  return (
    <a
      href={personalData.socials.github}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit GitHub profile"
      className="group flex items-center justify-between p-5 rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)]/80 backdrop-blur-sm shadow-sm hover:border-[var(--color-primary-accent)]/40 transition-all duration-300"
    >
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0 p-2.5 rounded-xl bg-[var(--color-text-primary)]/8 text-[var(--color-text-primary)] border border-[var(--color-border-subtle)] group-hover:bg-[var(--color-primary-accent)]/10 group-hover:border-[var(--color-primary-accent)]/30 group-hover:text-[var(--color-primary-accent)] transition-all">
          <GithubIcon className="w-5 h-5" />
        </div>
        <div>
          <span className="block text-[10px] font-mono uppercase tracking-wider text-[var(--color-text-muted)] mb-0.5">
            GitHub
          </span>
          <span className="block text-sm font-semibold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary-accent)] transition-colors">
            @irfanhossaintanjid
          </span>
        </div>
      </div>
      <ExternalLink className="w-4 h-4 text-[var(--color-text-muted)] group-hover:text-[var(--color-primary-accent)] transition-colors flex-shrink-0" />
    </a>
  );
}

/* ─── Contact card: LinkedIn ─────────────────────────────────────── */
function LinkedInCard() {
  return (
    <a
      href={personalData.socials.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit LinkedIn profile"
      className="group flex items-center justify-between p-5 rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)]/80 backdrop-blur-sm shadow-sm hover:border-[var(--color-primary-accent)]/40 transition-all duration-300"
    >
      <div className="flex items-center gap-3">
        <div className="flex-shrink-0 p-2.5 rounded-xl bg-[#0A66C2]/10 text-[#0A66C2] border border-[#0A66C2]/20 group-hover:bg-[#0A66C2]/20 transition-colors">
          <LinkedinIcon className="w-5 h-5" />
        </div>
        <div>
          <span className="block text-[10px] font-mono uppercase tracking-wider text-[var(--color-text-muted)] mb-0.5">
            LinkedIn
          </span>
          <span className="block text-sm font-semibold text-[var(--color-text-primary)] group-hover:text-[#0A66C2] transition-colors">
            irfan-hossain-tanjid
          </span>
        </div>
      </div>
      <ExternalLink className="w-4 h-4 text-[var(--color-text-muted)] group-hover:text-[#0A66C2] transition-colors flex-shrink-0" />
    </a>
  );
}

/* ─── Contact Form ───────────────────────────────────────────────── */
function ContactForm() {
  const [fields, setFields] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | loading | success | error

  const set = (key) => (e) => setFields((f) => ({ ...f, [key]: e.target.value }));

  /* Validate all fields; returns errors object */
  function validate() {
    const e = {};
    if (!fields.name.trim()) e.name = 'Your name is required.';
    if (!fields.email.trim()) {
      e.email = 'Email address is required.';
    } else if (!isValidEmail(fields.email)) {
      e.email = 'Please enter a valid email address.';
    }
    if (!fields.message.trim()) e.message = 'Message cannot be empty.';
    return e;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});

    const { provider, endpoint } = personalData.contactService;

    /* ── Formspree / custom API path ── */
    if ((provider === 'formspree' || provider === 'custom') && endpoint) {
      setStatus('loading');
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(fields),
        });
        if (res.ok) {
          setStatus('success');
        } else {
          setStatus('error');
        }
      } catch {
        setStatus('error');
      }
      return;
    }

    /* ── mailto fallback (default) ── */
    const subject = encodeURIComponent(fields.subject || 'Portfolio Inquiry');
    const body = encodeURIComponent(
      `Hi Irfan,\n\nMy name is ${fields.name}.\n\n${fields.message}\n\nBest regards,\n${fields.name}\n${fields.email}`
    );
    window.location.href = `mailto:${personalData.socials.email}?subject=${subject}&body=${body}`;
    setStatus('mailto-opened');
  };

  const inputClass = (key) =>
    `w-full px-4 py-2.5 rounded-xl border ${
      errors[key]
        ? 'border-red-400/60 focus:border-red-400'
        : 'border-[var(--color-border-subtle)] focus:border-[var(--color-primary-accent)]'
    } bg-[var(--color-bg)] text-[var(--color-text-primary)] text-sm focus:outline-none transition-colors placeholder:text-[var(--color-text-muted)]`;

  if (status === 'success') {
    return (
      <div className="py-14 flex flex-col items-center text-center space-y-5" role="status" aria-live="polite">
        <div className="p-4 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
          <Check className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-bold text-[var(--color-text-primary)]">Message Sent!</h3>
        <p className="text-sm text-[var(--color-text-secondary)] max-w-sm">
          Thank you, <strong>{fields.name}</strong>! I will get back to you at{' '}
          <span className="font-mono text-[var(--color-secondary-accent)]">{fields.email}</span> shortly.
        </p>
        <button
          type="button"
          onClick={() => { setStatus('idle'); setFields({ name: '', email: '', subject: '', message: '' }); }}
          className="mt-2 px-5 py-2 rounded-xl text-xs font-mono border border-[var(--color-border-subtle)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-primary-accent)] transition-all"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate aria-label="Contact form">

      {/* mailto-opened notice */}
      {status === 'mailto-opened' && (
        <div
          role="status"
          aria-live="polite"
          className="p-3 rounded-xl border border-amber-400/30 bg-amber-400/8 text-amber-400 text-xs font-mono"
        >
          📬 An email draft was requested with this message pre-filled. No backend is currently
          configured — please send the message from your email app.
        </div>
      )}

      {/* error notice */}
      {status === 'error' && (
        <div
          role="alert"
          className="p-3 rounded-xl border border-red-400/30 bg-red-400/8 text-red-400 text-xs font-mono"
        >
          ⚠ Submission failed. Please try again or contact me directly by email.
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div>
          <label htmlFor="contact-name" className="block text-xs font-mono uppercase text-[var(--color-text-secondary)] mb-1.5">
            Your Name <span aria-hidden="true" className="text-red-400">*</span>
          </label>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            placeholder="John Doe"
            value={fields.name}
            onChange={set('name')}
            aria-required="true"
            aria-describedby={errors.name ? 'err-name' : undefined}
            aria-invalid={!!errors.name}
            className={inputClass('name')}
          />
          {errors.name && (
            <p id="err-name" role="alert" className="mt-1 text-xs text-red-400 font-mono">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="contact-email" className="block text-xs font-mono uppercase text-[var(--color-text-secondary)] mb-1.5">
            Your Email <span aria-hidden="true" className="text-red-400">*</span>
          </label>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            placeholder="john@example.com"
            value={fields.email}
            onChange={set('email')}
            aria-required="true"
            aria-describedby={errors.email ? 'err-email' : undefined}
            aria-invalid={!!errors.email}
            className={inputClass('email')}
          />
          {errors.email && (
            <p id="err-email" role="alert" className="mt-1 text-xs text-red-400 font-mono">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      {/* Subject */}
      <div>
        <label htmlFor="contact-subject" className="block text-xs font-mono uppercase text-[var(--color-text-secondary)] mb-1.5">
          Subject / Topic
        </label>
        <input
          id="contact-subject"
          type="text"
          placeholder="Project Inquiry / Full-Stack Collaboration"
          value={fields.subject}
          onChange={set('subject')}
          className={inputClass('subject')}
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="contact-message" className="block text-xs font-mono uppercase text-[var(--color-text-secondary)] mb-1.5">
          Message <span aria-hidden="true" className="text-red-400">*</span>
        </label>
        <textarea
          id="contact-message"
          rows={5}
          placeholder="Describe your project idea, requirements, or just say hello..."
          value={fields.message}
          onChange={set('message')}
          aria-required="true"
          aria-describedby={errors.message ? 'err-message' : undefined}
          aria-invalid={!!errors.message}
          className={`${inputClass('message')} resize-none`}
        />
        {errors.message && (
          <p id="err-message" role="alert" className="mt-1 text-xs text-red-400 font-mono">
            {errors.message}
          </p>
        )}
      </div>

      <div className="flex items-center justify-between gap-4 flex-wrap">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-mono text-sm font-semibold bg-[var(--color-primary-accent)] text-white hover:opacity-90 shadow-lg shadow-blue-500/20 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" aria-hidden="true" />
              <span>Sending…</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" aria-hidden="true" />
              <span>Send Message</span>
            </>
          )}
        </button>

        {personalData.contactService.provider === 'mailto' && (
          <p className="text-[10px] font-mono text-[var(--color-text-muted)] max-w-xs">
            * Uses your email app to draft a message. No backend is currently configured.
          </p>
        )}
      </div>
    </form>
  );
}

/* ─── Main Contact Section ───────────────────────────────────────── */
export default function Contact() {
  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <Reveal>
          <SectionHeading
            number="04"
            title="Let's Build Something Together"
            subtitle="Have a project in mind or want to discuss an opportunity? I'm always open to new challenges and collaborations. Reach out through any channel below."
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* ── Left column: Contact info cards ── */}
          <div className="lg:col-span-5 flex flex-col space-y-4">

            <Reveal delay={80}>
              {/* Invitation blurb */}
              <div className="mb-2">
                <h3 className="text-lg font-bold text-[var(--color-text-primary)] mb-1">
                  Get in Touch
                </h3>
                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  Whether you have a question, a project idea, or just want to say hello — my inbox is always open.
                </p>
              </div>
            </Reveal>

            <Reveal delay={140}>
              <EmailCard />
            </Reveal>

            <Reveal delay={200}>
              <GithubCard />
            </Reveal>

            <Reveal delay={260}>
              <LinkedInCard />
            </Reveal>

            <Reveal delay={320}>
              {/* Availability badge */}
              <div className="p-4 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg)]/60 text-xs font-mono text-[var(--color-text-muted)] flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" aria-hidden="true" />
                  <span>GMT+6 · Response within 24 hours</span>
                </div>
                <a
                  href={`mailto:${personalData.socials.email}`}
                  className="inline-flex items-center gap-1 text-[var(--color-primary-accent)] hover:underline font-semibold"
                  aria-label="Send email directly"
                >
                  Email me <ArrowRight className="w-3 h-3" aria-hidden="true" />
                </a>
              </div>
            </Reveal>
          </div>

          {/* ── Right column: Contact form ── */}
          <div className="lg:col-span-7">
            <Reveal delay={120}>
              <div className="p-8 rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)]/80 backdrop-blur-sm shadow-sm">
                <div className="mb-6">
                  <h3 className="text-base font-bold font-mono text-[var(--color-text-primary)] mb-1">
                    // Send a Message
                  </h3>
                  <p className="text-xs text-[var(--color-text-muted)] font-mono">
                    Fill in the form and I will get back to you shortly.
                  </p>
                </div>
                <ContactForm />
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
