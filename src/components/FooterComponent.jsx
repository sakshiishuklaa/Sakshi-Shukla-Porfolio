import { FaArrowUp, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import profile from '../data/profile';

const FooterComponent = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="border-t border-supply-lightgray bg-white mt-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="font-heading text-2xl text-supply-dark">{profile.name}</p>
            <p className="text-sm text-supply-gray mt-2 max-w-sm">
              {profile.title} at {profile.company}. {profile.contact.availability}.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={profile.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-supply-lightgray text-supply-gray hover:text-supply-primary"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href={profile.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-supply-lightgray text-supply-gray hover:text-supply-primary"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href={`mailto:${profile.socialLinks.email}`}
              className="p-2.5 rounded-full border border-supply-lightgray text-supply-gray hover:text-supply-primary"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-supply-dark text-white hover:bg-supply-primary"
              aria-label="Back to top"
            >
              <FaArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
        <p className="text-xs text-supply-gray mt-10">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
};

export default FooterComponent;
