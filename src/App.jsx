import { useState, useEffect } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './index.css';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PhotoMarquee from './components/PhotoMarquee';
import About from './components/About';
import Programs from './components/Programs';
import Impact from './components/Impact';
import Gallery from './components/Gallery';
import GetInvolved from './components/GetInvolved';
import Testimonials from './components/Testimonials';
import News from './components/News';
import Contact from './components/Contact';
import Footer from './components/Footer';
import DonateModal from './components/DonateModal';

function App() {
  const [isDonateOpen, setIsDonateOpen] = useState(false);
  const [donateAmount, setDonateAmount] = useState(1000);

  const handleOpenDonate = (amount = 1000) => {
    setDonateAmount(amount);
    setIsDonateOpen(true);
  };

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
        { threshold: 0.05, rootMargin: '0px 0px 150px 0px', ...options }
      );
      els.forEach((el) => observer.observe(el));
      return observer;
    };

    const o1 = observe('.reveal, .reveal-left, .reveal-right');
    const o2 = observe('.reveal-stagger', { threshold: 0.05 });

    // Fallback: Ensure all sections are visible even if observer is delayed or skipped
    const fallbackTimer = setTimeout(() => {
      document
        .querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-stagger')
        .forEach((el) => el.classList.add('visible'));
    }, 600);

    return () => {
      o1.disconnect();
      o2.disconnect();
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <div className="app">
      <Navbar onOpenDonate={handleOpenDonate} />
      <main>
        <Hero onOpenDonate={handleOpenDonate} />
        <PhotoMarquee />
        <About />
        <Programs />
        <Impact />
        <Gallery />
        <GetInvolved onOpenDonate={handleOpenDonate} />
        <Testimonials />
        <News />
        <Contact />
      </main>
      <Footer onOpenDonate={handleOpenDonate} />

      {/* Floating Action Buttons */}
      <div className="floating-actions">
        <a
          href="https://wa.me/917020143007?text=Hello%20AVISKAR%20FOUNDATION%2C%20I%20would%20like%20to%20know%20more%20about%20your%20programs."
          target="_blank"
          rel="noopener noreferrer"
          className="float-whatsapp-btn"
          aria-label="Chat on WhatsApp (+91 70201 43007)"
          title="Chat with us on WhatsApp (+91 70201 43007)"
        >
          <FaWhatsapp />
        </a>

        <button
          className="float-donate-btn"
          onClick={() => handleOpenDonate(1000)}
          aria-label="Donate Now"
        >
          ❤️ Donate
        </button>
      </div>

      {/* Razorpay Donation Modal */}
      <DonateModal
        isOpen={isDonateOpen}
        onClose={() => setIsDonateOpen(false)}
        initialAmount={donateAmount}
      />
    </div>
  );
}

export default App;
