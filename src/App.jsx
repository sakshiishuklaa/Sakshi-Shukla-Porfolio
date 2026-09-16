import { AnimatePresence, motion } from 'framer-motion';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './components/About';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/FooterComponent';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import ScrollAnimation from './components/ScrollAnimation';
import ScrollProgress from './components/ScrollProgress';
import Skills from './components/Skills';
import './styles/theme.css';

const App = () => (
  <Router>
    <AnimatePresence mode="wait">
      <motion.div
        className="min-h-screen text-ink bg-charcoal relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="network-bg" aria-hidden="true" />
        <ScrollProgress color="#FF5A36" />
        <Navbar />
        <main id="main-content" className="relative z-10 pt-[72px] lg:pt-0 lg:ml-64">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <section id="home">
                    <Hero />
                  </section>
                  <section id="skills" className="scroll-mt-24 py-16 sm:py-20">
                    <ScrollAnimation>
                      <Skills />
                    </ScrollAnimation>
                  </section>
                  <section id="about" className="scroll-mt-24 py-16 sm:py-20">
                    <ScrollAnimation>
                      <About />
                    </ScrollAnimation>
                  </section>
                  <section id="projects" className="scroll-mt-24 py-16 sm:py-20">
                    <ScrollAnimation>
                      <Projects />
                    </ScrollAnimation>
                  </section>
                  <section id="certifications" className="scroll-mt-24 py-16 sm:py-20">
                    <ScrollAnimation>
                      <Certifications />
                    </ScrollAnimation>
                  </section>
                  <section id="contact" className="scroll-mt-24 py-16 sm:py-20">
                    <ScrollAnimation>
                      <Contact />
                    </ScrollAnimation>
                  </section>
                </>
              }
            />
          </Routes>
        </main>
        <div className="relative z-10 lg:ml-64">
          <Footer />
        </div>
      </motion.div>
    </AnimatePresence>
  </Router>
);

export default App;
