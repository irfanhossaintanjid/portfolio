export default function SectionHeading({
  number = '01',
  title,
  subtitle,
  align = 'left',
  className = ''
}) {
  const isCentered = align === 'center';

  return (
    <div className={`mb-12 ${isCentered ? 'text-center' : 'text-left'} ${className}`}>
      {/* Architectural Index Tag */}
      <div className={`inline-flex items-center gap-2 mb-3 text-xs font-mono tracking-wider uppercase text-[var(--color-secondary-accent)] ${isCentered ? 'justify-center' : ''}`}>
        <span className="w-2 h-2 rounded-full bg-[var(--color-primary-accent)] inline-block animate-pulse"></span>
        <span>// {number}. ARCHITECTURE SPEC</span>
      </div>

      {/* Main Title */}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--color-text-primary)]">
        {title}
      </h2>

      {/* Optional Subtitle */}
      {subtitle && (
        <p className={`mt-3 text-base md:text-lg text-[var(--color-text-secondary)] max-w-2xl font-normal leading-relaxed ${isCentered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}

      {/* Fine architectural accent line */}
      <div className={`mt-5 flex items-center gap-2 ${isCentered ? 'justify-center' : 'justify-start'}`}>
        <div className="h-[2px] w-12 bg-[var(--color-primary-accent)]"></div>
        <div className="h-[2px] w-4 bg-[var(--color-secondary-accent)]"></div>
        <div className="h-[1px] w-20 bg-[var(--color-border-subtle)]"></div>
      </div>
    </div>
  );
}
