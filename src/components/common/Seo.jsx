import { useEffect } from 'react';
import { useRouter } from '../../context/RouterContext';
import { projectsData } from '../../data/projects';

/**
 * Dynamic SEO & Page Title Manager
 * Synchronizes document title and canonical meta tags with SPA client-side route changes.
 */
export default function Seo() {
  const { currentPath } = useRouter();

  useEffect(() => {
    if (currentPath.startsWith('/projects/')) {
      const slug = currentPath.replace('/projects/', '').replace(/\/$/, '');
      const project = projectsData.find((p) => p.slug === slug);
      if (project) {
        document.title = `${project.title} — Case Study | Irfan Hossain`;
        return;
      }
    }

    document.title = 'Irfan Hossain | Full-Stack Developer';
  }, [currentPath]);

  return null;
}
