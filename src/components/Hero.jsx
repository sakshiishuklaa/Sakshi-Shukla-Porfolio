import { motion } from 'framer-motion';
import { FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa';
import profile from '../data/profile';

const Hero = () => (
  <section className="relative min-h-[calc(100vh-72px)] lg:min-h-screen flex items-center py-16 sm:py-24">
    <div className="max-w-6xl mx-auto px-4 sm:px-8 w-full">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55 }}
        className="surface-card p-8 sm:p-12 lg:p-16"
      >
        <h1 className="font-heading text-4xl sm:text-5xl font-bold tracking-tight text-ink">
          Hi, I&apos;m {profile.name.split(' ')[0]}.
        </h1>
        <p className="mt-5 text-base sm:text-lg text-muted max-w-2xl">
          {profile.heroDescription}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="#projects" className="btn-primary">
            {profile.ctaText} <FaArrowRight className="w-3.5 h-3.5" />
          </a>
          <a href="#contact" className="btn-secondary">
            Contact
          </a>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-3">
            <a
              href={profile.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-accent/40 text-ink hover:border-accent hover:bg-accent hover:text-charcoal transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href={profile.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-accent/40 text-ink hover:border-accent hover:bg-accent hover:text-charcoal transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {profile.highlights.map((item) => (
              <div key={item.label}>
                <p className="font-heading text-xl sm:text-2xl font-bold text-accent">{item.value}</p>
                <p className="text-xs leading-snug text-muted mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
