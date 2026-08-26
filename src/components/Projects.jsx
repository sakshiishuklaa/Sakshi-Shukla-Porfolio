import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import profile from '../data/profile';
import ProjectCard from './ProjectCard';
import SectionHeading from './SectionHeading';

const Projects = () => (
  <div className="max-w-6xl mx-auto px-4 sm:px-8">
    <SectionHeading
      eyebrow="Work"
      title="Selected"
      accent="projects"
      description="Pipeline validation and data quality work from recent projects."
    />

    <div className="mt-12 grid md:grid-cols-2 gap-6">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.08 }}
        >
          <ProjectCard project={project} />
        </motion.div>
      ))}
    </div>

    <div className="mt-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <p className="text-muted">{profile.projects.callToAction}</p>
      <a
        href={profile.socialLinks.github}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-primary px-5 py-2.5"
      >
        {profile.projects.githubText}
      </a>
    </div>
  </div>
);

export default Projects;
