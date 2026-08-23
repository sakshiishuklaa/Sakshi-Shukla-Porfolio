import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';
import profile from '../data/profile';
import SectionHeading from './SectionHeading';

const skillGroups = [
  { label: 'Languages', items: profile.skills.languages },
  { label: 'Processing', items: [...profile.skills.frameworks, ...profile.skills.bigData] },
  { label: 'Data stores', items: profile.skills.databases },
  { label: 'Cloud & tools', items: [...profile.skills.cloud, ...profile.skills.tools] }
];

const About = () => (
  <section className="py-6 sm:py-8">
    <div className="max-w-6xl mx-auto px-4 sm:px-6">
      <SectionHeading
        eyebrow="About"
        title="Building trust in"
        accent="enterprise data"
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
            <FaBriefcase className="text-supply-primary w-4 h-4" />
            <h3 className="text-sm font-semibold tracking-wide uppercase text-supply-dark">Experience</h3>
          </div>
          {profile.about.experiences.map((item) => (
            <div key={item.company} className="relative pl-5 border-l-2 border-supply-primary/30">
              <span className="absolute -left-[7px] top-1.5 w-3 h-3 rounded-full bg-supply-primary" />
              <p className="font-heading text-xl text-supply-dark">{item.role}</p>
              <p className="text-supply-primary font-medium mt-1">{item.company}</p>
              <p className="text-xs text-supply-gray mt-1">{item.duration}</p>
              <p className="text-sm text-supply-gray leading-relaxed mt-3">{item.description}</p>
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
            <FaGraduationCap className="text-supply-primary w-4 h-4" />
            <h3 className="text-sm font-semibold tracking-wide uppercase text-supply-dark">Education</h3>
          </div>
          {profile.about.education.map((item) => (
            <div key={item.institution}>
              <p className="font-heading text-xl text-supply-dark">{item.degree}</p>
              <p className="text-supply-primary font-medium mt-1">{item.specialization}</p>
              <p className="text-sm text-supply-gray mt-1">{item.institution}</p>
              <p className="text-xs text-supply-gray mt-1">
                {item.duration} · CGPA {item.cgpa}
              </p>
            </div>
          ))}

          <h3 className="text-sm font-semibold tracking-wide uppercase text-supply-dark mt-8 mb-3">
            Focus
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {profile.about.careerFocus.map((item) => (
              <li key={item} className="text-sm text-supply-gray before:content-['–'] before:mr-2 before:text-supply-primary">
                {item}
              </li>
            ))}
          </ul>
        </motion.article>
      </div>

      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {skillGroups.map((group) => (
          <div key={group.label} className="surface-card p-5">
            <h3 className="text-xs font-semibold tracking-[0.14em] uppercase text-supply-gray mb-3">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="px-2.5 py-1 rounded-full text-xs font-medium bg-supply-light text-supply-dark"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
