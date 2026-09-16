import { motion } from 'framer-motion';
import { FaAward, FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import profile from '../data/profile';
import SectionHeading from './SectionHeading';

const About = () => (
  <div className="max-w-6xl mx-auto px-4 sm:px-8">
    <SectionHeading
      eyebrow="Experience"
      title="Work that keeps"
      accent="data reliable"
      description={profile.about.summary}
    />

    <div className="mt-12 grid lg:grid-cols-2 gap-6">
      <motion.article
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="surface-card p-6 sm:p-8"
      >
        <div className="flex items-center gap-2 mb-5">
          <FaBriefcase className="text-accent w-4 h-4" />
          <h3 className="label-caps">Experience</h3>
        </div>
        {profile.about.experiences.map((item) => (
          <div key={item.company} className="relative pl-5 border-l-2 border-accent/50">
            <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-accent" />
            <p className="font-heading text-2xl font-bold text-ink">{item.role}</p>
            <p className="text-body text-muted mt-1">{item.company}</p>
            <p className="text-sm text-muted mt-1">{item.duration}</p>
            <ul className="mt-4 space-y-2">
              {item.points.map((point) => (
                <li key={point} className="text-sm text-muted leading-relaxed pl-3 border-l border-accent/25">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </motion.article>

      <motion.article
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="surface-card p-6 sm:p-8"
      >
        <div className="flex items-center gap-2 mb-5">
          <FaGraduationCap className="text-accent w-4 h-4" />
          <h3 className="label-caps">Education</h3>
        </div>
        {profile.about.education.map((item) => (
          <div key={item.institution}>
            <p className="font-heading text-2xl font-bold text-ink">{item.degree}</p>
            <p className="text-body text-muted mt-1">{item.specialization}</p>
            <p className="text-sm text-muted mt-1">{item.institution}</p>
            <p className="text-sm text-muted mt-1">
              {item.duration} · CGPA {item.cgpa}
            </p>
          </div>
        ))}

        <div className="flex items-center gap-2 mt-8 mb-3">
          <FaAward className="text-accent w-4 h-4" />
          <h3 className="label-caps">Certifications</h3>
        </div>
        {profile.about.certifications.map((item) => (
          <div key={item.name}>
            <p className="font-heading text-lg font-bold text-ink">{item.name}</p>
            <p className="text-sm text-muted mt-1">{item.issuer}</p>
          </div>
        ))}

        <h3 className="label-caps mt-8 mb-3">Focus</h3>
        <div className="flex flex-wrap gap-2">
          {profile.about.careerFocus.map((item) => (
            <span key={item} className="chip-accent">
              {item}
            </span>
          ))}
        </div>
      </motion.article>
    </div>
  </div>
);

export default About;
