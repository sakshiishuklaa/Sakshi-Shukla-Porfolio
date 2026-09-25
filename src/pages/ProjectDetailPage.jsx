import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiExternalLink } from 'react-icons/fi';
import { Preview } from '../components/ProjectCard';
import TechBadge from '../components/TechBadge';
import { getProject } from '../data/projects';

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = getProject(slug);

  useEffect(() => {
    document.title = project ? `${project.title} | Sakshi Shukla` : 'Project | Sakshi Shukla';
  }, [project]);

  if (!project) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <h1 className="text-3xl font-bold">Project not found</h1>
        <Link to="/projects" className="btn-primary mt-6">Back to Projects</Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-4 pb-20 pt-10 md:px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <Link to="/projects" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground">
          <FiArrowLeft /> Back to Projects
        </Link>
      </motion.div>
      <div className="mt-6 grid items-start gap-8 lg:grid-cols-[1.4fr_0.7fr]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
          <h1 className="text-4xl font-bold tracking-tight">{project.title}</h1>
          <p className="mt-4 text-muted-foreground">{project.description}</p>
          <div className="mt-6">
            <Preview image={project.image} title={project.title} />
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
          <h2 className="mt-10 text-2xl font-bold">Overview</h2>
          <p className="mt-3 leading-7 text-muted-foreground">{project.overview}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}>
          <h2 className="mt-10 text-2xl font-bold">Key Achievements</h2>
          <ul className="mt-4 space-y-3 text-sm leading-6 text-muted-foreground">
            {project.highlights.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="text-primary">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          </motion.div>
        </motion.div>
        <motion.aside
          className="space-y-4 lg:sticky lg:top-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <section className="panel p-5">
            <h2 className="font-bold">Tech Stack</h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <TechBadge key={tech} name={tech} />
              ))}
            </div>
          </section>
          <section className="panel p-5">
            <h2 className="font-bold">Links</h2>
            <a href={project.githubLink} target="_blank" rel="noreferrer" className="btn-primary mt-4 w-full">
              GitHub Repository <FiExternalLink className="h-4 w-4" />
            </a>
          </section>
        </motion.aside>
      </div>
    </div>
  );
}

