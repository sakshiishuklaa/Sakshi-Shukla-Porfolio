import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';

const SiteContext = createContext(null);

export function SiteProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') return 'light';
    return localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
  });
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.style.colorScheme = theme;
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((current) => (current === 'dark' ? 'light' : 'dark'));
  }, []);

  useEffect(() => {
    const onKey = (event) => {
      const key = event.key.toLowerCase();
      const meta = event.metaKey || event.ctrlKey;
      if (meta && key === 'k') {
        event.preventDefault();
        setSearchOpen((open) => !open);
        return;
      }
      if (key === 'escape') {
        setSearchOpen(false);
        return;
      }
      const tag = event.target?.tagName;
      const typing = tag === 'INPUT' || tag === 'TEXTAREA' || event.target?.isContentEditable;
      if (!typing && !meta && key === 't') {
        event.preventDefault();
        toggleTheme();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [toggleTheme]);

  useEffect(() => {
    document.body.style.overflow = searchOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [searchOpen]);

  const value = useMemo(
    () => ({
      theme,
      toggleTheme,
      searchOpen,
      setSearchOpen
    }),
    [theme, toggleTheme, searchOpen]
  );

  return <SiteContext.Provider value={value}>{children}</SiteContext.Provider>;
}

export function useSite() {
  const context = useContext(SiteContext);
  if (!context) throw new Error('useSite must be used within SiteProvider');
  return context;
}
