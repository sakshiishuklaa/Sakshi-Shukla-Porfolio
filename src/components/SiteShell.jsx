import { useEffect, useMemo, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform } from 'framer-motion';
import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn
} from 'react-icons/fa';
import { FiArrowUp, FiDownload, FiMoon, FiSearch, FiSun } from 'react-icons/fi';
import { useSite } from '../context/SiteContext';
import profile from '../data/profile';
import { projects } from '../data/projects';
import Starfield from './Starfield';

const nav = [
  { name: 'Home', to: '/' },
  { name: 'About', to: '/about' },
  { name: 'Projects', to: '/projects' },
  { name: 'Contact', to: '/contact' }
];

const navItem = {
  hidden: { opacity: 0, y: -10 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.05 * index, duration: 0.5, ease: 'easeOut' }
  })
};

export function PageHeader({ title, subtitle }) {
  return (
    <header className="relative mb-10 overflow-hidden px-4 pb-10 pt-16 text-center sm:pt-20">
      <Starfield />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 z-0 h-40"
        style={{ background: 'linear-gradient(to top, var(--background) 0%, color-mix(in srgb, var(--background) 60%, transparent) 50%, transparent 100%)' }}
      />
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
        {subtitle && <p className="mt-3 text-muted-foreground">{subtitle}</p>}
      </motion.div>
    </header>
  );
}

function Header() {
  const { theme, toggleTheme, setSearchOpen } = useSite();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
    <motion.header
      className="site-header sticky top-0 z-[80] border-b border-transparent backdrop-blur-md"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20, mass: 0.5, duration: 0.1 }}
    >
      <div className="mx-auto flex h-[76px] max-w-6xl items-center justify-between px-4 md:px-6">
        <Link to="/" className="leading-tight focus-ring rounded-md" aria-label="Sakshi Shukla, home">
          <motion.span
            className="block"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="block text-[15px] font-bold tracking-tight">{profile.firstName}</span>
            <span className="block text-[15px] font-bold tracking-tight">{profile.lastName}</span>
          </motion.span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main navigation">
          {nav.map((item, index) => (
            <motion.div
              key={item.to}
              custom={index}
              variants={navItem}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `block rounded-full px-3 py-1.5 text-sm transition focus-ring ${
                    isActive ? 'bg-secondary text-foreground' : 'text-muted-foreground hover:text-foreground'
                  }`
                }
              >
                {item.name}
              </NavLink>
            </motion.div>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <motion.button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground hover:bg-secondary focus-ring"
            aria-label="Search"
            onClick={() => setSearchOpen(true)}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
          >
            <FiSearch className="h-4 w-4" />
          </motion.button>
          <motion.button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground hover:bg-secondary focus-ring"
            aria-label="Toggle theme"
            onClick={toggleTheme}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, type: 'spring', stiffness: 200 }}
          >
            {theme === 'dark' ? <FiMoon className="h-4 w-4" /> : <FiSun className="h-4 w-4" />}
          </motion.button>
          <motion.button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground hover:bg-secondary focus-ring md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, type: 'spring' }}
          >
            <span className="sr-only">Menu</span>
            <span className="flex w-4 flex-col gap-1">
              <span className="h-0.5 w-4 bg-current" />
              <span className="h-0.5 w-4 bg-current" />
              <span className="h-0.5 w-3 bg-current" />
            </span>
          </motion.button>
        </div>
      </div>
    </motion.header>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-x-0 bottom-0 top-[76px] z-[60] bg-black/50 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
            />
            <motion.nav
              className="fixed left-4 right-4 top-[84px] z-[70] overflow-hidden rounded-2xl border border-border bg-card p-3 shadow-card md:hidden"
              aria-label="Mobile navigation"
              initial={{ opacity: 0, scale: 0.96, y: -8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -8 }}
              transition={{ duration: 0.15, ease: 'easeOut' }}
            >
              {nav.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-control px-3 py-2 text-sm ${isActive ? 'bg-secondary' : ''}`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function Footer() {
  const shortcut = typeof navigator !== 'undefined' && /Mac/i.test(navigator.platform) ? '⌘' : 'Ctrl';

  return (
    <footer className="section-band relative z-10 border-t border-border/70">
      <motion.div
        className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4 md:px-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <h3 className="text-lg font-bold">{profile.name}</h3>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">{profile.footerBlurb}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li><Link className="hover:text-foreground" to="/about">About Me</Link></li>
            <li><Link className="hover:text-foreground" to="/projects">Projects</Link></li>
            <li>
              <a className="hover:text-foreground" href={profile.resume.file} download={profile.resume.downloadName}>
                Resume
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Connect</h3>
          <div className="mt-3 flex gap-3 text-muted-foreground">
            <a href={profile.socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-foreground">
              <FaGithub className="h-4 w-4" />
            </a>
            <a href={profile.socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-foreground">
              <FaLinkedinIn className="h-4 w-4" />
            </a>
            <a href={`mailto:${profile.socialLinks.email}`} aria-label="Email" className="hover:text-foreground">
              <FaEnvelope className="h-4 w-4" />
            </a>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold">Keyboard Shortcuts</h3>
          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
            <li className="flex items-center gap-2">
              <kbd className="rounded-md border border-border bg-card px-1.5 py-0.5 text-xs">{shortcut}</kbd>
              <kbd className="rounded-md border border-border bg-card px-1.5 py-0.5 text-xs">K</kbd>
              Search
            </li>
            <li className="flex items-center gap-2">
              <kbd className="rounded-md border border-border bg-card px-1.5 py-0.5 text-xs">T</kbd>
              Toggle theme
            </li>
          </ul>
        </div>
      </motion.div>
      <motion.div
        className="border-t border-border/70 bg-background px-4 py-5 text-center text-sm text-muted-foreground"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        © {new Date().getFullYear()} {profile.name}. All rights reserved.
      </motion.div>
    </footer>
  );
}

function SideRail() {
  const links = [
    { href: profile.socialLinks.github, label: 'GitHub', icon: FaGithub, external: true },
    { href: profile.socialLinks.linkedin, label: 'LinkedIn', icon: FaLinkedinIn, external: true },
    { href: `mailto:${profile.socialLinks.email}`, label: 'Email', icon: FaEnvelope }
  ];

  return (
    <motion.div
      className="fixed right-4 top-1/2 z-30 hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      {links.map((link, index) => (
        <motion.a
          key={link.label}
          href={link.href}
          {...(link.external ? { target: '_blank', rel: 'noreferrer' } : {})}
          aria-label={link.label}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-float hover:text-primary"
          whileHover={{ scale: 1.1, x: -5 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.2 + 0.1 * index }}
        >
          <link.icon className="h-4 w-4" />
        </motion.a>
      ))}
      <motion.span
        className="mt-1 h-20 w-px origin-top bg-border"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      />
    </motion.div>
  );
}

function SearchModal() {
  const { searchOpen, setSearchOpen } = useSite();
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const navigate = useNavigate();

  const items = useMemo(() => {
    const pages = [
      { label: 'Home', hint: 'Page', to: '/' },
      { label: 'About', hint: 'Page', to: '/about' },
      { label: 'Experience', hint: 'Home', to: '/#experience' },
      { label: 'Projects', hint: 'Page', to: '/projects' },
      { label: 'Contact', hint: 'Page', to: '/contact' },
      { label: 'Resume', hint: 'Download', href: profile.resume.file, download: profile.resume.downloadName }
    ];
    const projectItems = projects.map((project) => ({
      label: project.title,
      hint: 'Project',
      to: `/projects/${project.slug}`
    }));
    const experienceItems = profile.experience.map((item) => ({
      label: `${item.role} · ${item.company}`,
      hint: 'Experience',
      to: '/#experience'
    }));
    return [...pages, ...projectItems, ...experienceItems];
  }, []);

  const results = items.filter((item) => item.label.toLowerCase().includes(query.trim().toLowerCase()));

  useEffect(() => {
    setQuery('');
    setActive(0);
  }, [searchOpen]);

  useEffect(() => {
    setActive(0);
  }, [query]);

  const go = (item) => {
    setSearchOpen(false);
    if (item.to) navigate(item.to);
    else if (item.href) {
      const anchor = document.createElement('a');
      anchor.href = item.href;
      anchor.download = item.download || '';
      anchor.click();
    }
  };

  return (
    <AnimatePresence>
      {searchOpen && (
    <motion.div
      className="fixed inset-0 z-[80] bg-foreground/30 p-4 backdrop-blur-sm"
      onClick={() => setSearchOpen(false)}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label="Search"
        className="mx-auto mt-[12vh] w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-card shadow-card"
        onClick={(event) => event.stopPropagation()}
        initial={{ opacity: 0, scale: 0.96, y: -8 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: -8 }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
      >
        <div className="flex items-center gap-2 border-b border-border px-4">
          <FiSearch className="h-4 w-4 text-muted-foreground" />
          <input
            autoFocus
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === 'ArrowDown') {
                event.preventDefault();
                setActive((index) => Math.min(index + 1, Math.max(results.length - 1, 0)));
              }
              if (event.key === 'ArrowUp') {
                event.preventDefault();
                setActive((index) => Math.max(index - 1, 0));
              }
              if (event.key === 'Enter' && results[active]) go(results[active]);
            }}
            placeholder="Search pages, projects, experience..."
            className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </div>
        <ul className="max-h-80 overflow-auto p-2">
          {results.length === 0 && <li className="px-3 py-6 text-center text-sm text-muted-foreground">No matches</li>}
          {results.map((item, index) => (
            <li key={`${item.hint}-${item.label}`}>
              <button
                type="button"
                onMouseEnter={() => setActive(index)}
                onClick={() => go(item)}
                className={`flex w-full items-center justify-between rounded-control px-3 py-2 text-left text-sm ${
                  index === active ? 'bg-secondary' : ''
                }`}
              >
                <span>{item.label}</span>
                <span className="text-xs text-muted-foreground">{item.hint}</span>
              </button>
            </li>
          ))}
        </ul>
      </motion.div>
    </motion.div>
      )}
    </AnimatePresence>
  );
}

export default function SiteShell({ children }) {
  const { scrollY, scrollYProgress } = useScroll();
  const barOpacity = useTransform(scrollYProgress, [0, 0.02, 0.03], [0, 0, 1]);
  const [showTop, setShowTop] = useState(false);
  const location = useLocation();

  useMotionValueEvent(scrollY, 'change', (value) => {
    setShowTop(value > 500);
  });

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      return;
    }
    window.scrollTo(0, 0);
  }, [location.pathname, location.hash]);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <motion.div
        className="fixed left-0 top-0 z-[70] h-1 w-full origin-left bg-primary"
        style={{ scaleX: scrollYProgress, opacity: barOpacity }}
      />
      <Header />
      <main id="main-content" className="relative z-10">{children}</main>
      <Footer />
      <SideRail />
      <SearchModal />
      <AnimatePresence>
        {showTop && (
          <motion.button
            type="button"
            aria-label="Back to top"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-4 z-30 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-float lg:right-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
          >
            <FiArrowUp className="h-5 w-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ResumeLink({ className = 'btn-outline' }) {
  return (
    <a className={className} href={profile.resume.file} download={profile.resume.downloadName}>
      <FiDownload className="h-4 w-4" /> Resume
    </a>
  );
}
