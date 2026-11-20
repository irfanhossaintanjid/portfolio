import SectionHeading from '../common/SectionHeading';
import ProjectCard from './ProjectCard';
import { projectsData } from '../../data/projects';

export default function Projects() {
  const featuredProject = projectsData.find((p) => p.featured) || projectsData[0];
  const standardProjects = projectsData.filter((p) => p.slug !== featuredProject.slug);

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <SectionHeading
          number="03"
          title="Selected Projects"
          subtitle="Explore in-depth full-stack case studies demonstrating real architectural decisions, responsive user interfaces, and domain implementations."
        />

        {/* 1. Large Featured Showcase (Framio Flagship) */}
        {featuredProject && (
          <ProjectCard project={featuredProject} isFeatured={true} />
        )}

        {/* 2. Asymmetrical Grid for the Remaining Case Studies */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {standardProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} isFeatured={false} />
          ))}
        </div>

      </div>
    </section>
  );
}
