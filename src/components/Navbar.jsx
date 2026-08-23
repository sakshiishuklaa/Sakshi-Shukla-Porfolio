import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import profile from '../data/profile';

const navLinks = [
  { name: 'Home', href: 'home' },
  { name: 'About', href: 'about' },
  { name: 'Projects', href: 'projects' },
  { name: 'Contact', href: 'contact' }
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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

  const onScroll = useCallback(() => {
    setScrolled(window.scrollY > 12);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleNavClick = (href) => {
    setIsOpen(false);
    const section = document.getElementById(href);
    if (!section) return;
    const top = section.getBoundingClientRect().top + window.scrollY - 72;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return (
    <motion.nav
      className={`fixed top-0 w-full z-[90] transition-all duration-300 ${
        scrolled
          ? 'bg-[#f7f5f0]/90 backdrop-blur-md border-b border-supply-lightgray shadow-sm'
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-[72px] flex items-center justify-between">
        <button
          onClick={() => handleNavClick('home')}
          className="font-heading text-lg sm:text-xl text-supply-dark focus-ring"
          aria-label="Go to home"
        >
          {profile.name}
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => handleNavClick(link.href)}
              className={`relative text-sm font-medium py-2 transition-colors focus-ring ${
                activeSection === link.href
                  ? 'text-supply-primary'
                  : 'text-supply-gray hover:text-supply-dark'
              }`}
              aria-current={activeSection === link.href ? 'page' : undefined}
            >
              {link.name}
              {activeSection === link.href && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute left-0 -bottom-0.5 h-[2px] w-full bg-supply-primary"
                />
              )}
            </button>
          ))}
          <a
            href={`mailto:${profile.socialLinks.email}`}
            className="text-sm font-semibold px-4 py-2 rounded-full bg-supply-dark text-white hover:bg-supply-primary transition-colors"
          >
            Email me
          </a>
        </div>

        <button
          onClick={() => setIsOpen((open) => !open)}
          className="md:hidden p-2 text-supply-dark focus-ring"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden border-t border-supply-lightgray bg-[#f7f5f0] px-4 py-4 space-y-1"
          >
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                className={`block w-full text-left px-3 py-3 rounded-xl text-base ${
                  activeSection === link.href
                    ? 'bg-white text-supply-primary font-semibold'
                    : 'text-supply-dark'
                }`}
              >
                {link.name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
