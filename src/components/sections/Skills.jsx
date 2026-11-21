import { useState } from 'react';
import { Layout, Server, Wrench } from 'lucide-react';
import SectionHeading from '../common/SectionHeading';
import {
  HtmlIcon,
  CssIcon,
  TailwindIcon,
  JavaScriptIcon,
  TypeScriptIcon,
  ReactIcon,
  NextjsIcon,
  NodejsIcon,
  ExpressIcon,
  MongodbIcon,
  BetterAuthIcon,
  GitIcon,
  VSCodeIcon,
  VercelIcon,
  NetlifyIcon
} from '../common/TechIcons';
import { GithubIcon } from '../common/SocialIcons';

// Strict Skills Data from Phase 02 Specification (No fake percentages, No expert claims)
const SKILL_GROUPS = [
  {
    category: 'FRONTEND',
    title: 'Client-Side Engineering',
    description: 'Core web standards and modern component systems for responsive, accessible user interfaces.',
    icon: Layout,
    accentColor: '#38BDF8',
    skills: [
      { name: 'HTML', icon: HtmlIcon, type: 'Semantic Markup' },
      { name: 'CSS', icon: CssIcon, type: 'Styling & Layouts' },
      { name: 'Tailwind CSS', icon: TailwindIcon, type: 'Utility-First Styling' },
      { name: 'JavaScript', icon: JavaScriptIcon, type: 'Dynamic Client Logic' },
      { name: 'TypeScript', icon: TypeScriptIcon, type: 'Type Safety & Robustness' },
      { name: 'React', icon: ReactIcon, type: 'Component Architecture' },
      { name: 'Next.js', icon: NextjsIcon, type: 'Full-Stack React Framework' }
    ]
  },
  {
    category: 'BACKEND',
    title: 'Server-Side Development',
    description: 'Server runtimes, RESTful APIs, database persistence, and secure authentication.',
    icon: Server,
    accentColor: '#2563EB',
    skills: [
      { name: 'Node.js', icon: NodejsIcon, type: 'JavaScript Server Runtime' },
      { name: 'Express.js', icon: ExpressIcon, type: 'REST API Framework' },
      { name: 'MongoDB', icon: MongodbIcon, type: 'NoSQL Document Database' },
      { name: 'Better Auth', icon: BetterAuthIcon, type: 'Authentication & Session Security' }
    ]
  },
  {
    category: 'TOOLS',
    title: 'Workflow & Developer Utilities',
    description: 'Essential developer tooling for version control, collaborative workflows, and code authoring.',
    icon: Wrench,
    accentColor: '#38BDF8',
    skills: [
      { name: 'Git', icon: GitIcon, type: 'Version Control System' },
      { name: 'GitHub', icon: GithubIcon, type: 'Code Repository & Collaboration' },
      { name: 'VS Code', icon: VSCodeIcon, type: 'Primary Code Editor' },
      { name: 'Vercel', icon: VercelIcon, type: 'Frontend Cloud & Edge Deployment' },
      { name: 'Netlify', icon: NetlifyIcon, type: 'Cloud Hosting & CI/CD Platform' }
    ]
  }
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('ALL');
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const filterTabs = ['ALL', 'FRONTEND', 'BACKEND', 'TOOLS'];

  const displayedGroups = activeCategory === 'ALL'
    ? SKILL_GROUPS
    : SKILL_GROUPS.filter((g) => g.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          number="02"
          title="Skills & Technologies"
          subtitle="A categorized overview of the core technologies, frameworks, and developer tools I utilize to craft full-stack digital solutions."
        />

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => setActiveCategory(tab)}
              className={`px-4 py-2 rounded-xl text-xs font-mono tracking-wider transition-all duration-200 border ${
                activeCategory === tab
                  ? 'bg-[var(--color-primary-accent)] text-white border-[var(--color-primary-accent)] shadow-md shadow-blue-500/25 font-semibold'
                  : 'bg-[var(--color-surface)] text-[var(--color-text-secondary)] border-[var(--color-border-subtle)] hover:border-[var(--color-primary-accent)]/50 hover:text-[var(--color-text-primary)]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skill Groups Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {displayedGroups.map((group) => {
            const GroupIcon = group.icon;

            return (
              <div
                key={group.category}
                className="p-7 rounded-3xl border border-[var(--color-border-subtle)] bg-[var(--color-surface)]/80 backdrop-blur-md shadow-sm hover:border-[var(--color-primary-accent)]/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Category Card Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-[var(--color-border-subtle)] mb-5">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-xl bg-[var(--color-primary-accent)]/10 text-[var(--color-secondary-accent)] border border-[var(--color-primary-accent)]/20">
                        <GroupIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="font-mono text-[10px] tracking-wider text-[var(--color-secondary-accent)] block uppercase">
                          // {group.category}
                        </span>
                        <h3 className="text-base font-bold text-[var(--color-text-primary)]">
                          {group.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-[var(--color-text-secondary)] mb-6 leading-relaxed">
                    {group.description}
                  </p>

                  {/* Skills Grid for this Category */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3">
                    {group.skills.map((skill) => {
                      const SkillIcon = skill.icon;
                      const isHovered = hoveredSkill === skill.name;

                      return (
                        <div
                          key={skill.name}
                          onMouseEnter={() => setHoveredSkill(skill.name)}
                          onMouseLeave={() => setHoveredSkill(null)}
                          className={`p-3.5 rounded-2xl border transition-all duration-200 flex items-center justify-between group ${
                            isHovered
                              ? 'border-[var(--color-primary-accent)] bg-[var(--color-surface-hover)] shadow-sm'
                              : 'border-[var(--color-border-subtle)] bg-[var(--color-bg)]/60'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border-subtle)] group-hover:border-[var(--color-primary-accent)]/40 transition-colors flex items-center justify-center shrink-0 shadow-sm">
                              <SkillIcon className="w-5 h-5 shrink-0" />
                            </div>
                            <div>
                              <span className="text-sm font-bold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary-accent)] transition-colors block">
                                {skill.name}
                              </span>
                              <span className="text-[11px] font-mono text-[var(--color-text-muted)] block">
                                {skill.type}
                              </span>
                            </div>
                          </div>

                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Card Footer Status */}
                <div className="mt-8 pt-4 border-t border-[var(--color-border-subtle)] flex items-center justify-between text-[11px] font-mono text-[var(--color-text-muted)]">
                  <span>{group.skills.length} TECHNOLOGIES</span>
                  <span className="text-[var(--color-secondary-accent)]">PRACTICE PROVEN</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
