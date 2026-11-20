import { ArrowLeft, ArrowRight, ExternalLink, CheckCircle2, AlertTriangle, Lightbulb, Terminal, Layers, ShieldCheck, HelpCircle } from 'lucide-react';
import { GithubIcon } from '../components/common/SocialIcons';
import { useRouter, Link } from '../context/RouterContext';
import ProjectPreview from '../components/common/ProjectPreview';
import { projectsData } from '../data/projects';

export default function ProjectDetailPage({ slug }) {
  const { navigate } = useRouter();

  const currentIndex = projectsData.findIndex((p) => p.slug === slug);
  const project = projectsData[currentIndex];

  if (!project) {
    return (
      <div className="min-h-[75vh] flex flex-col items-center justify-center text-center px-4 pt-32">
        <div className="font-mono text-xs text-[var(--color-secondary-accent)] mb-2">// 404 SPEC ERROR</div>
        <h1 className="text-3xl font-extrabold text-[var(--color-text-primary)]">Project Architecture Not Found</h1>
        <p className="mt-2 text-sm text-[var(--color-text-secondary)]">The requested case study specification does not exist in registry.</p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-mono font-semibold bg-[var(--color-primary-accent)] text-white shadow-md shadow-blue-500/20"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Portfolio</span>
        </Link>
      </div>
    );
  }

  // Previous and Next project circular navigation
  const prevProject = projectsData[(currentIndex - 1 + projectsData.length) % projectsData.length];
  const nextProject = projectsData[(currentIndex + 1) % projectsData.length];

  const {
    title,
    tagline,
    category,
    shortDescription,
    overview,
    technologies,
    features,
    challenges,
    futureImprovements,
    liveUrl,
    clientGithubUrl,
    hasVerifiedLive,
    hasVerifiedGithub
  } = project;

  return (
    <article className="pt-32 pb-24 relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* Top Breadcrumb & Return Bar */}
      <div className="mb-8 flex items-center justify-between">
        <button
          type="button"
          onClick={() => {
            navigate('/');
            setTimeout(() => {
              const el = document.getElementById('projects');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }, 100);
          }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)] text-xs font-mono text-[var(--color-text-secondary)] hover:text-[var(--color-primary-accent)] hover:border-[var(--color-primary-accent)] transition-all shadow-sm"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Projects</span>
        </button>

        <span className="font-mono text-xs text-[var(--color-secondary-accent)]">
          // CASE STUDY: {slug.toUpperCase()}
        </span>
      </div>

      {/* A. PROJECT HERO */}
      <header className="space-y-6">

        {/* Category & Badge */}
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="px-3 py-1 rounded-full font-mono text-xs font-bold bg-blue-500/10 text-[var(--color-secondary-accent)] border border-blue-500/20">
            {category}
          </span>
          <span className="font-mono text-xs text-[var(--color-text-muted)]">
            SPECIFICATION REVIEWED
          </span>
        </div>

        {/* Title & Tagline */}
        <div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--color-text-primary)] tracking-tight">
            {title}
          </h1>
          <p className="mt-2 text-lg sm:text-xl font-mono text-[var(--color-secondary-accent)]">
            {tagline}
          </p>
        </div>

        {/* Short Summary Lead */}
        <p className="text-base sm:text-lg text-[var(--color-text-secondary)] leading-relaxed max-w-3xl">
          {shortDescription}
        </p>

        {/* Hero Interactive Links */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {hasVerifiedLive && liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-semibold bg-[var(--color-primary-accent)] text-white hover:opacity-95 shadow-md shadow-blue-500/20 transition-all"
            >
              <span>Explore Live Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-xs border border-[var(--color-border-subtle)] bg-[var(--color-surface)] text-[var(--color-text-muted)]">
              <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
              <span>Live Deployment: Local / Domain Pending</span>
            </div>
          )}

          {hasVerifiedGithub && clientGithubUrl && (
            <a
              href={clientGithubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-semibold border border-[var(--color-border-subtle)] bg-[var(--color-surface)] text-[var(--color-text-primary)] hover:border-[var(--color-primary-accent)] hover:text-[var(--color-primary-accent)] transition-all shadow-sm"
            >
              <GithubIcon className="w-4 h-4" />
              <span>Client Repository</span>
            </a>
          )}
        </div>

        {/* Media Preview Box */}
        <div className="mt-8 aspect-[16/10] sm:aspect-video w-full rounded-3xl overflow-hidden border border-[var(--color-border-subtle)] shadow-xl bg-[var(--color-bg-secondary)]">
          <ProjectPreview project={project} className="h-full" />
        </div>

      </header>

      {/* B. PROJECT OVERVIEW */}
      <section className="mt-16 p-8 sm:p-10 rounded-3xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)]/80 backdrop-blur-md shadow-sm">
        <div className="flex items-center gap-2 text-xs font-mono text-[var(--color-secondary-accent)] mb-3 uppercase">
          <Terminal className="w-4 h-4 text-[var(--color-primary-accent)]" />
          <span>// PROJECT OVERVIEW & PROBLEM SPACE</span>
        </div>

        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-4">
          Problem Context & Architectural Mission
        </h2>

        <p className="text-base text-[var(--color-text-secondary)] leading-relaxed">
          {overview}
        </p>
      </section>

      {/* C. TECHNOLOGY STACK */}
      <section className="mt-12 p-8 sm:p-10 rounded-3xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)]/80 backdrop-blur-md shadow-sm">
        <div className="flex items-center gap-2 text-xs font-mono text-[var(--color-secondary-accent)] mb-3 uppercase">
          <Layers className="w-4 h-4 text-[var(--color-primary-accent)]" />
          <span>// VERIFIED TECHNOLOGIES</span>
        </div>

        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">
          Architectural Stack & Dependencies
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="p-3.5 rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-bg)] flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-bold text-sm text-[var(--color-text-primary)]">
                  {tech.name}
                </span>
                <span className="font-mono text-[10px] text-[var(--color-secondary-accent)] bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20">
                  {tech.category}
                </span>
              </div>
              <span className="text-xs text-[var(--color-text-muted)] font-mono">
                {tech.role}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* D. KEY FEATURES */}
      <section className="mt-12 p-8 sm:p-10 rounded-3xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)]/80 backdrop-blur-md shadow-sm">
        <div className="flex items-center gap-2 text-xs font-mono text-[var(--color-secondary-accent)] mb-3 uppercase">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <span>// VERIFIED FUNCTIONALITIES</span>
        </div>

        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">
          Key Features & Implementation Details
        </h2>

        <div className="space-y-3.5">
          {features.map((feat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-bg)] flex items-start gap-3.5"
            >
              <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
              <span className="text-sm text-[var(--color-text-secondary)] leading-relaxed font-sans">
                {feat}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* E. DEVELOPMENT CHALLENGES */}
      <section className="mt-12 p-8 sm:p-10 rounded-3xl border border-amber-500/25 bg-amber-500/5 backdrop-blur-md shadow-sm">
        <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-3 uppercase">
          <AlertTriangle className="w-4 h-4 text-amber-400" />
          <span>// TECHNICAL DECISIONS & OBSTACLES</span>
        </div>

        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">
          Development Challenges Encountered
        </h2>

        <div className="space-y-4 text-sm text-[var(--color-text-secondary)]">
          {challenges.map((ch, idx) => (
            <div key={idx} className="p-4 rounded-2xl border border-amber-500/20 bg-[var(--color-surface)] flex items-start gap-3">
              <span className="font-mono font-bold text-amber-400 text-sm">
                [{idx + 1}]
              </span>
              <p className="leading-relaxed">{ch}</p>
            </div>
          ))}
        </div>
      </section>

      {/* F. FUTURE IMPROVEMENTS */}
      <section className="mt-12 p-8 sm:p-10 rounded-3xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)]/80 backdrop-blur-md shadow-sm">
        <div className="flex items-center gap-2 text-xs font-mono text-[var(--color-secondary-accent)] mb-3 uppercase">
          <Lightbulb className="w-4 h-4 text-[var(--color-secondary-accent)]" />
          <span>// PRODUCT ROADMAP</span>
        </div>

        <h2 className="text-2xl font-bold text-[var(--color-text-primary)] mb-6">
          Future Roadmap & Planned Enhancements
        </h2>

        <div className="space-y-3.5 text-sm text-[var(--color-text-secondary)]">
          {futureImprovements.map((imp, idx) => (
            <div key={idx} className="p-4 rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-bg)] flex items-start gap-3">
              <span className="text-[var(--color-secondary-accent)] font-mono font-bold">
                →
              </span>
              <p className="leading-relaxed">{imp}</p>
            </div>
          ))}
        </div>
      </section>

      {/* G. PROJECT REPOSITORY & DEPLOYMENT LINKS */}
      <section className="mt-12 p-8 rounded-3xl border border-[var(--color-border-subtle)] bg-gradient-to-r from-[var(--color-surface)] to-[var(--color-bg-secondary)] flex flex-col sm:flex-row items-center justify-between gap-5">
        <div>
          <span className="font-mono text-xs text-[var(--color-secondary-accent)] block uppercase">
            // CODE ACCESSIBILITY
          </span>
          <h3 className="text-lg font-bold text-[var(--color-text-primary)]">
            Explore {title} Repositories & Verification
          </h3>
          <p className="text-xs text-[var(--color-text-secondary)] mt-0.5">
            Only client-side repositories and active deployments are surfaced.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
          {hasVerifiedGithub && clientGithubUrl && (
            <a
              href={clientGithubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-semibold border border-[var(--color-border-subtle)] bg-[var(--color-surface)] text-[var(--color-text-primary)] hover:border-[var(--color-primary-accent)] hover:text-[var(--color-primary-accent)] transition-all"
            >
              <GithubIcon className="w-4 h-4" />
              <span>GitHub Client</span>
            </a>
          )}

          {hasVerifiedLive && liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-mono text-xs font-semibold bg-[var(--color-primary-accent)] text-white hover:opacity-95 shadow-md shadow-blue-500/20 transition-all"
            >
              <span>Live Site</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </section>

      {/* H. NAVIGATION: Previous Project & Next Project */}
      <nav aria-label="Project Case Study Navigation" className="mt-16 pt-8 border-t border-[var(--color-border-subtle)] grid grid-cols-1 sm:grid-cols-2 gap-4">

        {/* Previous Project Link */}
        <Link
          to={`/projects/${prevProject.slug}`}
          className="p-5 rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)] hover:border-[var(--color-primary-accent)] transition-all flex items-center justify-between group"
        >
          <div className="flex items-center gap-3">
            <ArrowLeft className="w-4 h-4 text-[var(--color-text-muted)] group-hover:text-[var(--color-primary-accent)] group-hover:-translate-x-1 transition-all" />
            <div className="text-left">
              <span className="font-mono text-[10px] text-[var(--color-text-muted)] block uppercase">
                PREVIOUS CASE STUDY
              </span>
              <span className="text-sm font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary-accent)] transition-colors">
                {prevProject.title}
              </span>
            </div>
          </div>
        </Link>

        {/* Next Project Link */}
        <Link
          to={`/projects/${nextProject.slug}`}
          className="p-5 rounded-2xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)] hover:border-[var(--color-primary-accent)] transition-all flex items-center justify-between group"
        >
          <div className="text-left">
            <span className="font-mono text-[10px] text-[var(--color-text-muted)] block uppercase">
              NEXT CASE STUDY
            </span>
            <span className="text-sm font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary-accent)] transition-colors">
              {nextProject.title}
            </span>
          </div>
          <ArrowRight className="w-4 h-4 text-[var(--color-text-muted)] group-hover:text-[var(--color-primary-accent)] group-hover:translate-x-1 transition-all" />
        </Link>

      </nav>

    </article>
  );
}
