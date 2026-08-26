import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import profile from '../data/profile';

const navLinks = [
  { name: 'Home', href: 'home' },
  { name: 'Skills', href: 'skills' },
  { name: 'About', href: 'about' },
  { name: 'Projects', href: 'projects' },
  { name: 'Contact', href: 'contact' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0.1 }
    );

    navLinks.forEach(({ href }) => {
      const element = document.getElementById(href);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const lockScroll = useCallback(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }, [isOpen]);

  useEffect(() => {
    lockScroll();
    return () => {
      document.body.style.overflow = '';
    };
  }, [lockScroll]);

  const handleNavClick = (href) => {
    setIsOpen(false);
    const section = document.getElementById(href);
    if (!section) return;
    const offset = window.matchMedia('(min-width: 1024px)').matches ? 16 : 72;
    const top = section.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  const navItems = (
    <div className="flex flex-col gap-1">
      {navLinks.map((link) => {
        const isActive = activeSection === link.href;
        return (
          <button
            key={link.name}
            onClick={() => handleNavClick(link.href)}
            className={`relative text-left px-3 py-2.5 rounded-xl text-sm font-medium tracking-[0.04em] transition-colors focus-ring ${
              isActive
                ? 'text-accent bg-accent/10 border border-accent/40'
                : 'text-muted hover:text-ink hover:bg-white/5 border border-transparent'
            }`}
            aria-current={isActive ? 'page' : undefined}
          >
            {link.name}
          </button>
        );
      })}
    </div>
  );

  return (
    <>
      <header className="lg:hidden fixed top-0 inset-x-0 z-[90] h-[72px] bg-charcoal/90 backdrop-blur-md border-b border-accent/20">
        <div className="h-full px-4 flex items-center justify-between">
          <button
            onClick={() => handleNavClick('home')}
            className="font-heading text-lg font-bold text-ink focus-ring"
            aria-label="Go to home"
          >
            {profile.name}
          </button>
          <button
            onClick={() => setIsOpen((open) => !open)}
            className="p-2 text-ink focus-ring"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
          </button>
        </div>
      </header>

      <aside
        className="hidden lg:flex fixed top-0 left-0 z-[90] h-screen w-64 flex-col border-r border-accent/25 bg-charcoal/85 backdrop-blur-md"
        role="navigation"
        aria-label="Main navigation"
      >
        <button
          onClick={() => handleNavClick('home')}
          className="px-6 pt-8 pb-6 text-left focus-ring"
          aria-label="Go to home"
        >
          <img
            src={profile.photo}
            alt={profile.name}
            className="h-16 w-16 rounded-2xl border border-accent object-cover object-top"
          />
          <p className="mt-4 font-heading text-lg font-bold leading-tight text-ink">{profile.name}</p>
          <p className="mt-1 text-xs text-muted">{profile.title}</p>
        </button>

        <nav className="flex-1 px-4 py-2">{navItems}</nav>

        <div className="px-4 pb-8">
          <a
            href={`mailto:${profile.socialLinks.email}`}
            className="btn-primary w-full text-center"
          >
            Email me
          </a>
        </div>
      </aside>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 z-[80] bg-charcoal/70"
            onClick={() => setIsOpen(false)}
          >
            <motion.aside
              initial={{ x: -24, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -24, opacity: 0 }}
              className="absolute top-[72px] left-0 bottom-0 w-72 bg-charcoal border-r border-accent/25 p-4"
              onClick={(event) => event.stopPropagation()}
            >
              {navItems}
              <a
                href={`mailto:${profile.socialLinks.email}`}
                className="btn-primary w-full text-center mt-6"
              >
                Email me
              </a>
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
