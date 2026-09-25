import { useEffect } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';
import { PageHeader } from '../components/SiteShell';
import { projects } from '../data/projects';

export default function ProjectsPage() {
  useEffect(() => {
    document.title = 'Projects | Sakshi Shukla';
  }, []);

  return (
    <div className="mx-auto max-w-6xl px-4 pb-20 md:px-6">
      <PageHeader title="Projects" subtitle="Check out some of my recent work" />
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
