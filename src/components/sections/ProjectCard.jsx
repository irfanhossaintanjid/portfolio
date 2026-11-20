import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { GithubIcon } from '../common/SocialIcons';
import { Link } from '../../context/RouterContext';
import ProjectPreview from '../common/ProjectPreview';

export default function ProjectCard({ project, isFeatured = false }) {
  const {
    slug,
    title,
    category,
    tagline,
    shortDescription,
    mainTechList,
    badge,
    liveUrl,
    clientGithubUrl,
    hasVerifiedLive,
    hasVerifiedGithub
  } = project;

  // Featured Layout Treatment (Framio Flagship Presentation)
  if (isFeatured) {
    return (
      <div className="relative rounded-3xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)]/90 backdrop-blur-md overflow-hidden shadow-sm hover:border-[var(--color-primary-accent)]/50 transition-all duration-300 group mb-10">
        
        {/* Subtle Ambient Glow */}
        <div
          aria-hidden="true"
          className="absolute -top-32 -right-32 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl pointer-events-none"
        ></div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-6 sm:p-8 lg:p-10">
          
          {/* Visual Showcase (7 Cols) */}
          <div className="lg:col-span-7 aspect-[16/10] sm:aspect-video rounded-2xl overflow-hidden border border-[var(--color-border-subtle)] shadow-md">
            <ProjectPreview project={project} className="h-full" />
          </div>

          {/* Details & Action Content (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
            <div>
              {/* Badge & Category */}
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full font-mono text-[10px] font-bold bg-blue-500/10 text-[var(--color-secondary-accent)] border border-blue-500/20">
                  {badge || 'FEATURED ARCHITECTURE'}
                </span>
                <span className="font-mono text-xs text-[var(--color-text-muted)]">
                  // {category}
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--color-text-primary)] group-hover:text-[var(--color-secondary-accent)] transition-colors">
                {title}
              </h3>
              <p className="mt-1 font-mono text-xs text-[var(--color-secondary-accent)]">
                {tagline}
              </p>

              {/* Description */}
              <p className="mt-3.5 text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed">
                {shortDescription}
              </p>

              {/* Technology Badges */}
              <div className="mt-5 flex flex-wrap gap-1.5">
                {mainTechList.map((tech) => (
                  <span
                    key={tech}
                    className="px-2.5 py-1 rounded-lg text-xs font-mono font-medium border border-[var(--color-border-subtle)] bg-[var(--color-bg)] text-[var(--color-text-primary)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-[var(--color-border-subtle)] flex flex-wrap items-center justify-between gap-3">
              <Link
                to={`/projects/${slug}`}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-semibold bg-[var(--color-primary-accent)] text-white hover:opacity-95 shadow-md shadow-blue-500/20 transition-all"
              >
                <span>View Case Study</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>

              <div className="flex items-center gap-2">
                {hasVerifiedGithub && clientGithubUrl && (
                  <a
                    href={clientGithubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Verified Client Repository"
                    className="p-2.5 rounded-xl border border-[var(--color-border-subtle)] bg-[var(--color-bg)] text-[var(--color-text-secondary)] hover:text-[var(--color-primary-accent)] hover:border-[var(--color-primary-accent)]/50 transition-all"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                )}

                {hasVerifiedLive && liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Live Production Deployment"
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-mono text-xs font-semibold hover:bg-emerald-500 hover:text-white transition-all"
                  >
                    <span>Live App</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
              </div>
            </div>

          </div>

        </div>

      </div>
    );
  }

  // Standard Asymmetrical Card Treatment
  return (
    <div className="rounded-3xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)]/80 backdrop-blur-md overflow-hidden flex flex-col justify-between hover:border-[var(--color-primary-accent)]/40 transition-all duration-300 group shadow-sm hover:shadow-xl hover:shadow-blue-500/5">
      
      {/* Top Media Showcase */}
      <div className="aspect-[16/10] w-full border-b border-[var(--color-border-subtle)] overflow-hidden">
        <ProjectPreview project={project} className="h-full" />
      </div>

      {/* Body Content */}
      <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Header Row */}
          <div className="flex items-start justify-between gap-2">
            <div>
              <span className="font-mono text-[10px] tracking-wider text-[var(--color-secondary-accent)] block uppercase">
                // {category}
              </span>
              <h3 className="text-xl font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-secondary-accent)] transition-colors">
                {title}
              </h3>
            </div>
            
            <Link
              to={`/projects/${slug}`}
              aria-label={`View ${title} case study`}
              className="p-1.5 rounded-lg border border-[var(--color-border-subtle)] bg-[var(--color-bg)] text-[var(--color-text-secondary)] hover:text-[var(--color-primary-accent)] hover:border-[var(--color-primary-accent)] transition-all shrink-0"
            >
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>

          <p className="font-mono text-xs text-[var(--color-text-muted)] mt-0.5">
            {tagline}
          </p>

          <p className="mt-3 text-sm text-[var(--color-text-secondary)] leading-relaxed line-clamp-3">
            {shortDescription}
          </p>

          {/* Tech Badges */}
          <div className="mt-4 flex flex-wrap gap-1.5">
            {mainTechList.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded-md text-[11px] font-mono border border-[var(--color-border-subtle)] bg-[var(--color-bg)] text-[var(--color-text-secondary)]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Card Footer Actions */}
        <div className="pt-4 border-t border-[var(--color-border-subtle)] flex items-center justify-between">
          <Link
            to={`/projects/${slug}`}
            className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-[var(--color-primary-accent)] hover:text-[var(--color-secondary-accent)] transition-colors"
          >
            <span>View Case Study</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          <div className="flex items-center gap-2">
            {hasVerifiedGithub && clientGithubUrl && (
              <a
                href={clientGithubUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Client Repository"
                className="p-1.5 rounded-lg text-[var(--color-text-muted)] hover:text-[var(--color-text-primary)] hover:bg-[var(--color-bg)] transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}

            {hasVerifiedLive && liveUrl ? (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="Live Deployment"
                className="p-1.5 rounded-lg text-emerald-400 hover:text-emerald-300 hover:bg-emerald-500/10 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : (
              <span className="font-mono text-[10px] text-[var(--color-text-muted)] bg-[var(--color-bg)] px-2 py-0.5 rounded border border-[var(--color-border-subtle)]">
                Local App
              </span>
            )}
          </div>
        </div>

      </div>

    </div>
  );
}
