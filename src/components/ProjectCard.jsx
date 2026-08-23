import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const ProjectCard = ({ project }) => (
  <article className="surface-card h-full p-6 sm:p-8 flex flex-col group">
    {project.category && (
      <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-supply-primary mb-3">
        {project.category}
      </p>
    )}
    <h3 className="font-heading text-2xl text-supply-dark group-hover:text-supply-primary transition-colors">
      {project.title}
    </h3>
    <p className="text-supply-gray text-sm leading-relaxed mt-3 flex-1">{project.description}</p>
    <div className="flex flex-wrap gap-2 mt-5">
      {project.techStack?.map((tech) => (
        <span
          key={tech}
          className="px-2.5 py-1 rounded-full text-xs font-medium bg-supply-light text-supply-dark"
        >
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
          className="inline-flex items-center gap-2 text-sm font-semibold text-supply-dark hover:text-supply-primary"
        >
          <FaGithub className="w-4 h-4" /> GitHub
        </a>
      )}
      {project.demoLink && (
        <a
          href={project.demoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold text-supply-dark hover:text-supply-primary"
        >
          <FaExternalLinkAlt className="w-3.5 h-3.5" /> Demo
        </a>
      )}
    </div>
  </article>
);

export default ProjectCard;
