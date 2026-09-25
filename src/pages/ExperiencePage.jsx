import { motion } from 'framer-motion';
import { FiMapPin } from 'react-icons/fi';
import profile from '../data/profile';

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-band scroll-mt-24 px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl">
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Experience</h2>
          <p className="mt-3 text-muted-foreground">My professional journey in data engineering</p>
        </motion.div>
        <div className="relative space-y-6 border-l border-border pl-6">
          {profile.experience.map((item, index) => (
            <motion.article
              key={item.id}
              className="panel relative p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
            >
              <span className="absolute -left-[31px] top-7 h-3.5 w-3.5 rounded-full border-2 border-background bg-primary" />
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 className="text-xl font-bold">{item.role}</h2>
                  <p className="text-primary">{item.company}</p>
                </div>
                <p className="text-sm text-muted-foreground">
                  {item.start} – {item.end}
                </p>
              </div>
              <p className="mt-2 inline-flex items-center gap-1 text-sm text-muted-foreground">
                <FiMapPin /> {item.location}
              </p>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{item.summary}</p>
              <h3 className="mt-5 text-sm font-semibold">Key Achievements</h3>
              <ul className="mt-2 space-y-2 text-sm leading-6 text-muted-foreground">
                {item.achievements.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="text-primary">→</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
