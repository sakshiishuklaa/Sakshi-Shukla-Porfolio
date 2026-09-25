import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { HiOutlineAcademicCap, HiOutlineBadgeCheck, HiOutlineCloud, HiOutlineSparkles, HiOutlineStar } from 'react-icons/hi';
import ProjectCard from '../components/ProjectCard';
import TechBadge from '../components/TechBadge';
import ExperienceSection from './ExperiencePage';
import { ResumeLink } from '../components/SiteShell';
import Starfield from '../components/Starfield';
import profile from '../data/profile';
import { projects } from '../data/projects';

const icons = {
  cloud: HiOutlineCloud,
  award: HiOutlineStar,
  badge: HiOutlineBadgeCheck,
  spark: HiOutlineSparkles,
  book: HiOutlineAcademicCap
};

function TypeLine() {
  const roles = profile.roles;
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index];
    const done = !deleting && text === current;
    const cleared = deleting && text === '';
    const delay = done ? 1200 : cleared ? 280 : deleting ? 45 : 85;

    const timer = setTimeout(() => {
      if (done) {
        setDeleting(true);
        return;
      }
      if (cleared) {
        setDeleting(false);
        setIndex((value) => (value + 1) % roles.length);
        return;
      }
      setText(current.slice(0, text.length + (deleting ? -1 : 1)));
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, index, roles]);

  return (
    <p className="mt-3 min-h-10 text-2xl font-semibold text-primary sm:text-3xl">
      {text}
      <span className="ml-0.5 inline-block w-[2px] translate-y-1 animate-pulse bg-primary" style={{ height: '1.1em' }} />
    </p>
  );
}

function SkillTabs() {
  const groups = Object.keys(profile.skills);
  const [active, setActive] = useState(groups[0]);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2" role="tablist">
        {groups.map((group) => (
          <button
            key={group}
            type="button"
            role="tab"
            aria-selected={active === group}
            onClick={() => setActive(group)}
            className={`rounded-full px-4 py-2 text-sm transition focus-ring ${
              active === group ? 'bg-primary text-primary-foreground' : 'bg-card text-foreground hover:bg-secondary'
            }`}
          >
            {group}
          </button>
        ))}
      </div>
      <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2" role="tabpanel">
        {profile.skills[active].map((skill, index) => (
          <motion.div
            key={`${active}-${skill}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.05 * index }}
          >
            <TechBadge name={skill} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default function HomePage() {
  useEffect(() => {
    document.title = 'Sakshi Shukla | Data Engineer';
  }, []);

  const socials = [
    { href: profile.socialLinks.github, label: 'GitHub', icon: FaGithub },
    { href: profile.socialLinks.linkedin, label: 'LinkedIn', icon: FaLinkedinIn },
    { href: `mailto:${profile.socialLinks.email}`, label: 'Email', icon: FaEnvelope }
  ];

  const { scrollY } = useScroll();
  const copyY = useTransform(scrollY, [0, 800], [0, 40]);
  const photoY = useTransform(scrollY, [0, 800], [0, 60]);

  return (
    <>
      <section className="relative overflow-hidden">
        <Starfield />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-56"
          style={{ background: 'linear-gradient(to top, var(--background) 0%, color-mix(in srgb, var(--background) 60%, transparent) 50%, transparent 100%)' }}
        />
        <div className="relative z-10 mx-auto grid min-h-[calc(100vh-76px)] max-w-6xl items-center gap-10 px-4 py-16 md:px-6 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_520px]">
          <motion.div style={{ y: copyY }}>
            <motion.h1
              className="text-4xl font-bold tracking-tight sm:text-6xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Hi, I&apos;m {profile.name}
            </motion.h1>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}>
              <TypeLine />
            </motion.div>
            <motion.p
              className="mt-5 max-w-xl text-[15px] leading-7 text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {profile.heroDescription}
            </motion.p>
            <motion.div
              className="mt-6 flex flex-wrap gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Link to="/#projects" className="btn-primary group">
                View My Work <FiArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <ResumeLink />
            </motion.div>
            <motion.div
              className="mt-6 flex gap-3 text-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {socials.map((item) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  {...(item.href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
                  aria-label={item.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-secondary/70 hover:bg-primary/10"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <item.icon className="h-4 w-4" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          <motion.div
            className="flex justify-center"
            style={{ y: photoY }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <img
              src={profile.photo}
              alt={profile.name}
              className="aspect-square w-full max-w-[440px] rounded-full border-8 border-card object-cover object-[center_62%] shadow-card"
            />
          </motion.div>
        </div>
      </section>

      <ExperienceSection />

      <section id="projects" className="scroll-mt-24 bg-background px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Featured Projects</h2>
            <p className="mt-3 text-muted-foreground">Check out some of my recent work</p>
          </motion.div>
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.filter((project) => project.featured).map((project, index) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/projects" className="btn-outline">
              View All Projects <FiArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="section-band px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Technical Skills</h2>
            <p className="mt-3 text-muted-foreground">My expertise across various technologies and tools</p>
          </motion.div>
          <motion.div
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <SkillTabs />
          </motion.div>
        </div>
      </section>

      <section className="bg-background px-4 py-16 md:px-6 md:py-24">
        <div className="mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">Achievements</h2>
            <p className="mt-3 text-muted-foreground">Recognition and milestones from my technical journey</p>
          </motion.div>
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {profile.achievements.map((item, index) => {
              const Icon = icons[item.icon] || HiOutlineStar;
              return (
                <motion.article
                  key={item.text}
                  className="panel flex items-start gap-3 p-5 text-left text-sm leading-6 transition-all duration-300 hover:border-primary"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index, type: 'spring', stiffness: 100, damping: 15 }}
                >
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p>{item.text}</p>
                </motion.article>
              );
            })}
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {profile.achievementTags.map((tag) => (
              <span key={tag} className="pill">{tag}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
