import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineAcademicCap } from 'react-icons/hi';
import { FiCalendar } from 'react-icons/fi';
import { PageHeader } from '../components/SiteShell';
import TechBadge from '../components/TechBadge';
import profile from '../data/profile';

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About | Sakshi Shukla';
  }, []);

  return (
    <div className="mx-auto max-w-6xl px-4 pb-20 md:px-6">
      <PageHeader title="About Me" subtitle="Get to know more about my background and skills" />
      <div className="grid items-start gap-6 lg:grid-cols-2">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <section className="panel p-6 sm:p-8">
            <h2 className="text-xl font-bold">Who I Am</h2>
            <div className="mt-4 space-y-4 text-sm leading-7 text-muted-foreground">
              {profile.about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
          <section>
            <h2 className="mb-4 text-xl font-bold">Education</h2>
            <div className="space-y-4">
              {profile.about.education.map((item) => (
                <article key={item.degree} className="panel p-6">
                  <div className="flex gap-3">
                    <HiOutlineAcademicCap className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-bold">{item.degree}</h3>
                      <p className="text-sm text-muted-foreground">{item.school}</p>
                      <p className="text-sm text-muted-foreground">{item.specialization}</p>
                      <p className="mt-3 inline-flex items-center gap-1 text-sm text-muted-foreground">
                        <FiCalendar /> {item.dates}
                      </p>
                      <p className="mt-3 text-sm font-semibold">CGPA: {item.detail}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="mb-4 text-xl font-bold">Skills</h2>
          <div className="space-y-4">
            {Object.entries(profile.skills).map(([group, skills]) => (
              <article key={group} className="panel p-5">
                <h3 className="text-xs font-semibold tracking-[0.14em] text-primary">{group.toUpperCase()}</h3>
                <div className="mt-3 flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <TechBadge key={skill} name={skill} />
                  ))}
                </div>
              </article>
            ))}
          </div>
        </motion.section>
      </div>

      <motion.section
        className="mt-14"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="mb-6 text-center text-3xl font-bold">Achievements</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {profile.aboutStats.map((stat, index) => (
            <motion.article
              key={stat.label}
              className="panel p-5 text-center"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.05 * index }}
            >
              <p className="text-2xl font-bold text-primary">{stat.value}</p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </motion.article>
          ))}
        </div>
      </motion.section>
    </div>
  );
}
