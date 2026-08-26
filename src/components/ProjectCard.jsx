import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const ProjectCard = ({ project }) => (
  <article className="surface-card h-full p-6 sm:p-8 flex flex-col group hover:border-accent transition-colors">
    {project.category && (
      <p className="label-caps mb-3">
        {project.category}
      </p>
    )}
    <h3 className="font-heading text-2xl font-bold text-ink group-hover:text-accent transition-colors">
      {project.title}
    </h3>
    <p className="text-muted text-sm leading-relaxed mt-3 flex-1">{project.description}</p>
    <div className="flex flex-wrap gap-2 mt-5">
      {project.techStack?.map((tech) => (
        <span key={tech} className="chip-accent">
          {tech}
        </span>
      ))}
    </div>
    <div className="flex gap-3 mt-6">
      {project.githubLink && (
        <a
          href={project.githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.04em] text-ink hover:text-accent"
        >
          <FaGithub className="w-4 h-4" /> GitHub
        </a>
      )}
      {project.demoLink && (
        <a
          href={project.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.04em] text-ink hover:text-accent"
        >
          <FaExternalLinkAlt className="w-3.5 h-3.5" /> Demo
        </a>
      )}
    </div>
  </article>
);

export default ProjectCard;
