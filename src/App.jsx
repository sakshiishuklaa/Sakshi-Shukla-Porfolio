import { AnimatePresence, motion } from 'framer-motion';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/FooterComponent';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import ScrollAnimation from './components/ScrollAnimation';
import ScrollProgress from './components/ScrollProgress';
import './styles/theme.css';

const App = () => (
  <Router>
    <AnimatePresence mode="wait">
      <motion.div
        className="min-h-screen text-supply-dark bg-supply-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <ScrollProgress color="#0F766E" />
        <Navbar />
        <main id="main-content" className="pt-[72px] relative z-10">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <section id="home">
                    <Hero />
                  </section>
                  <section id="about" className="scroll-mt-24 py-16 sm:py-20 bg-supply-background-alt/60">
                    <ScrollAnimation>
                      <About />
                    </ScrollAnimation>
                  </section>
                  <section id="projects" className="scroll-mt-24 py-16 sm:py-20">
                    <ScrollAnimation>
                      <Projects />
                    </ScrollAnimation>
                  </section>
                  <section id="contact" className="scroll-mt-24 py-16 sm:py-20 bg-supply-background-alt/60">
                    <ScrollAnimation>
                      <Contact />
                    </ScrollAnimation>
                  </section>
                </>
              }
            />
          </Routes>
        </main>
        <Footer />
      </motion.div>
    </AnimatePresence>
  </Router>
);

export default App;
