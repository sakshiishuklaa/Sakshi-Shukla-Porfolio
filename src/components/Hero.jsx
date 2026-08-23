import { motion } from 'framer-motion';
import { FaArrowRight, FaGithub, FaLinkedin } from 'react-icons/fa';
import profile from '../data/profile';

const featuredSkills = [
  ...profile.skills.languages,
  ...profile.skills.frameworks,
  ...profile.skills.cloud,
  'Databricks',
  'Airflow'
];

const Hero = () => (
  <section className="relative min-h-[calc(100vh-72px)] flex items-center py-16 sm:py-24">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">
      <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <p className="text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase text-supply-primary mb-5">
            {profile.title} · {profile.company}
          </p>
          <h1 className="font-heading text-4xl sm:text-5xl lg:text-[3.5rem] leading-[1.12] text-supply-dark">
            {profile.name}
          </h1>
          <p className="mt-6 text-lg text-supply-gray leading-relaxed max-w-xl">
            {profile.heroDescription}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-supply-dark text-white text-sm font-semibold hover:bg-supply-primary transition-colors"
            >
              {profile.ctaText} <FaArrowRight className="w-3.5 h-3.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-full border border-supply-dark/15 text-supply-dark text-sm font-semibold hover:border-supply-primary hover:text-supply-primary transition-colors"
            >
              Contact
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            <a
              href={profile.socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-supply-lightgray bg-white text-supply-gray hover:text-supply-primary hover:border-supply-primary/40 transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
            </a>
            <a
              href={profile.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-full border border-supply-lightgray bg-white text-supply-gray hover:text-supply-primary hover:border-supply-primary/40 transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.12 }}
          className="surface-card p-6 sm:p-8"
        >
          <p className="text-xs font-semibold tracking-[0.16em] uppercase text-supply-gray mb-6">
            Currently
          </p>
          <p className="font-heading text-2xl text-supply-dark">{profile.about.experiences[0].role}</p>
          <p className="mt-1 text-supply-primary font-medium">{profile.company}</p>
          <p className="mt-1 text-sm text-supply-gray">{profile.about.experiences[0].duration}</p>

          <div className="grid grid-cols-3 gap-3 mt-8 pt-6 border-t border-supply-lightgray">
            {profile.highlights.map((item) => (
              <div key={item.label}>
                <p className="font-heading text-xl text-supply-dark">{item.value}</p>
                <p className="text-[11px] leading-snug text-supply-gray mt-1">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <p className="text-xs font-semibold tracking-[0.16em] uppercase text-supply-gray mb-3">
              Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {featuredSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded-full text-xs font-medium bg-supply-light text-supply-dark"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
