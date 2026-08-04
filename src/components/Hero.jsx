import { useEffect, useRef, useState } from 'react';
import { FaHeart, FaHandsHelping, FaArrowDown } from 'react-icons/fa';
import './Hero.css';

export default function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <img src="/hero-bg.png" alt="AVISKAR Foundation - Together We Change Lives" className="hero-bg-img" />
        <div className="hero-overlay" />
      </div>

      <div className={`hero-content-wrap container ${loaded ? 'hero-loaded' : ''}`}>
        <div className="hero-left">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Non-Governmental Organization · Est. 2020
          </div>

          <h1 className="hero-title">
            Together We Can
            <br />
            <span className="hero-title-accent">Change Lives</span>
          </h1>

          <p className="hero-subtitle">
            Every child deserves education.
            <br />
            Every family deserves hope.
          </p>

          <div className="hero-actions">
            <button className="btn btn-secondary hero-btn" onClick={() => scrollTo('#get-involved')}>
              <FaHeart />
              Donate Now
            </button>
            <button className="btn btn-outline hero-btn" onClick={() => scrollTo('#get-involved')}>
              <FaHandsHelping />
              Become Volunteer
            </button>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-num">500+</span>
              <span className="hero-stat-lbl">Students Supported</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-num">150+</span>
              <span className="hero-stat-lbl">Medical Camps</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-num">3000+</span>
              <span className="hero-stat-lbl">Trees Planted</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-num">100+</span>
              <span className="hero-stat-lbl">Volunteers</span>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-img-frame">
            <div className="hero-img-inner">
              <img src="/hero-bg.png" alt="Smiling child with school bag" className="hero-img" />
            </div>
            <div className="hero-img-badge">
              <span className="hero-img-badge-icon">🏆</span>
              <div>
                <strong>5+ Years</strong>
                <span>of Service</span>
              </div>
            </div>
            <div className="hero-img-badge hero-img-badge-2">
              <span className="hero-img-badge-icon">❤️</span>
              <div>
                <strong>5000+</strong>
                <span>Lives Changed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className="hero-scroll-btn" onClick={() => scrollTo('#about')}>
        <FaArrowDown />
      </button>
    </section>
  );
}
