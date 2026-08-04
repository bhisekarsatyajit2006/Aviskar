import { useEffect } from 'react';
import './index.css';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Programs from './components/Programs';
import Impact from './components/Impact';
import Gallery from './components/Gallery';
import GetInvolved from './components/GetInvolved';
import Testimonials from './components/Testimonials';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observe = (selectors, options = {}) => {
      const els = document.querySelectorAll(selectors);
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -60px 0px', ...options }
      );
      els.forEach((el) => observer.observe(el));
      return observer;
    };

    const o1 = observe('.reveal, .reveal-left, .reveal-right');
    const o2 = observe('.reveal-stagger', { threshold: 0.08 });

    return () => {
      o1.disconnect();
      o2.disconnect();
    };
  }, []);

  const scrollToContact = () => {
    const el = document.querySelector('#get-involved');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Programs />
        <Impact />
        <Gallery />
        <GetInvolved />
        <Testimonials />
        <News />
        <Contact />
      </main>
      <Footer />

      {/* Floating Donate Button */}
      <button className="float-donate-btn" onClick={scrollToContact} aria-label="Donate Now">
        ❤️ Donate
      </button>
    </div>
  );
}

export default App;
