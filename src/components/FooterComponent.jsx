import { FaArrowUp, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import profile from '../data/profile';

const FooterComponent = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="border-t border-accent/20 bg-charcoal text-ink">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 py-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <p className="font-heading text-2xl font-bold text-accent">{profile.name}</p>
            <p className="text-sm text-muted mt-2 max-w-sm">
              {profile.title} at {profile.company}. {profile.contact.availability}.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={profile.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-accent/40 text-ink hover:bg-accent hover:text-charcoal hover:border-accent transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href={profile.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-accent/40 text-ink hover:bg-accent hover:text-charcoal hover:border-accent transition-colors"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href={`mailto:${profile.socialLinks.email}`}
              className="p-2.5 rounded-full border border-accent/40 text-ink hover:bg-accent hover:text-charcoal hover:border-accent transition-colors"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full bg-accent text-charcoal hover:bg-accent/85 transition-colors"
              aria-label="Back to top"
            >
              <FaArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
        <p className="text-xs text-muted mt-10">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
};

export default FooterComponent;
