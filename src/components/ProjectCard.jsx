import { Link } from 'react-router-dom';
import TechBadge from './TechBadge';
import { FiArrowRight, FiExternalLink } from 'react-icons/fi';

export function Preview({ image, title, zoom = false }) {
  if (zoom) {
    return (
      <div className="project-preview aspect-[1024/518] overflow-hidden rounded-xl border border-border bg-secondary">
        <img
          src={image}
          alt={`${title} dashboard`}
          className="h-full w-full object-cover object-top transition-transform duration-300 hover:scale-105"
        />
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-secondary">
      <img
        src={image}
        alt={`${title} dashboard`}
        className="h-48 w-full object-cover object-top transition-transform duration-300 hover:scale-105 sm:h-52"
      />
    </div>
  );
}

export default function ProjectCard({ project }) {
  const extra = Math.max(project.techStack.length - 4, 0);

  return (
    <article className="panel flex h-full flex-col p-4 transition-all duration-300 hover:border-primary sm:p-5">
      <Preview image={project.image} title={project.title} zoom={/swiggy|uber/.test(project.image)} />
      <h3 className="mt-5 text-xl font-bold tracking-tight">{project.title}</h3>
      <p className="mt-2 text-sm leading-6 text-muted-foreground">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.techStack.slice(0, 4).map((tech) => (
          <TechBadge key={tech} name={tech} />
        ))}
        {extra > 0 && <span className="pill">+{extra}</span>}
      </div>
      <ul className="mt-4 space-y-2 text-sm leading-6 text-muted-foreground">
        {project.highlights.slice(0, 2).map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-1 text-primary">→</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-auto flex items-center justify-between pt-6">
        <Link to={`/projects/${project.slug}`} className="btn-outline group">
          View Details <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
        <a
          href={project.githubLink}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.title} on GitHub`}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground hover:bg-secondary"
        >
          <FiExternalLink className="h-4 w-4" />
        </a>
      </div>
    </article>
  );
}
