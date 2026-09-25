import { FaDownload, FaExternalLinkAlt } from 'react-icons/fa';
import profile from '../data/profile';
import SectionHeading from './SectionHeading';

const Resume = () => (
  <div className="max-w-6xl mx-auto px-4 sm:px-8">
    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
      <SectionHeading
        eyebrow="Resume"
        title="Data Engineer"
        accent="resume"
        description="A one-page resume covering experience, projects, and certifications."
      />
      <div className="flex flex-wrap gap-3 shrink-0">
        <a
          href={profile.resume.file}
          download={profile.resume.downloadName}
          className="btn-primary"
        >
          <FaDownload className="w-3.5 h-3.5" />
          Download PDF
        </a>
        <a
          href={profile.resume.file}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary"
        >
          <FaExternalLinkAlt className="w-3 h-3" />
          Open PDF
        </a>
      </div>
    </div>

    <div className="surface-card mt-12 p-3 sm:p-4">
      <img
        src={profile.resume.preview}
        alt={`${profile.name} resume`}
        className="w-full max-w-3xl mx-auto rounded-xl bg-white"
      />
    </div>
  </div>
);

export default Resume;
