import { useEffect, useState } from 'react';
import { FaHeart, FaHandsHelping, FaArrowDown, FaChartLine, FaGraduationCap, FaHeartbeat, FaTree, FaAward } from 'react-icons/fa';
import './Hero.css';

const tickerItems = [
  '🎓 500+ Students Supported with Free Education & Books',
  '🏥 150+ Free Medical & Health Camps Conducted',
  '🌱 3,000+ Native Trees Planted Across Maharashtra',
  '🤝 100+ Dedicated Volunteers & Change-makers',
  '🏆 5+ Years of Dedicated Community Service',
];

export default function Hero({ onOpenDonate }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDonateClick = () => {
    if (onOpenDonate) {
      onOpenDonate(1000);
    } else {
      scrollTo('#get-involved');
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-bg">
        <img src="/hero-bg.png" alt="AVISKAR Foundation - Together We Change Lives" className="hero-bg-img" />
        <div className="hero-overlay" />
      </div>

      {/* Top News Ticker Strip (Inspired by Smile Foundation & Akshaya Patra) */}
      <div className="hero-ticker">
        <div className="hero-ticker-track">
          {[...tickerItems, ...tickerItems].map((item, idx) => (
            <span key={idx} className="hero-ticker-item">
              {item}
              <span className="ticker-dot">•</span>
            </span>
          ))}
        </div>
      </div>

      <div className={`hero-content-wrap container ${loaded ? 'hero-loaded' : ''}`}>
        <div className="hero-left">
          <div className="hero-badge">
            <span className="hero-badge-dot" />
            Registered NGO · Est. 2020 · Maharashtra, India
          </div>

          <h1 className="hero-title">
            Empowering Lives,
            <br />
            Building <span className="hero-title-serif">Brighter Futures</span>
          </h1>

          <p className="hero-subtitle">
            Every child deserves quality education. Every family deserves access to healthcare.
            <br />
            Join <strong>AVISKAR FOUNDATION</strong> in creating sustainable grassroots change.
          </p>

          <div className="hero-actions">
            <button className="btn btn-secondary hero-btn" onClick={handleDonateClick}>
              <FaHeart />
              Donate Now
            </button>
            <button className="btn btn-outline hero-btn" onClick={() => scrollTo('#get-involved')}>
              <FaHandsHelping />
              Become Volunteer
            </button>
            <button className="btn btn-ghost hero-btn-ghost" onClick={() => scrollTo('#impact')}>
              <FaChartLine />
              Our Impact
            </button>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-icon"><FaGraduationCap /></span>
              <div>
                <span className="hero-stat-num">500+</span>
                <span className="hero-stat-lbl">Students</span>
              </div>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-icon"><FaHeartbeat /></span>
              <div>
                <span className="hero-stat-num">150+</span>
                <span className="hero-stat-lbl">Health Camps</span>
              </div>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-icon"><FaTree /></span>
              <div>
                <span className="hero-stat-num">3k+</span>
                <span className="hero-stat-lbl">Trees Planted</span>
              </div>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-icon"><FaHandsHelping /></span>
              <div>
                <span className="hero-stat-num">100+</span>
                <span className="hero-stat-lbl">Volunteers</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-img-frame">
            <div className="hero-img-inner">
              <img src="/img1.jpg" alt="Aviskar Foundation Community Impact" className="hero-img" />
            </div>
            <div className="hero-img-badge">
              <span className="hero-img-badge-icon"><FaAward /></span>
              <div>
                <strong>5+ Years</strong>
                <span>Dedicated Service</span>
              </div>
            </div>
            <div className="hero-img-badge hero-img-badge-2">
              <span className="hero-img-badge-icon"><FaHeart /></span>
              <div>
                <strong>5,000+</strong>
                <span>Lives Empowered</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <button className="hero-scroll-btn" onClick={() => scrollTo('#about')} aria-label="Scroll to About">
        <FaArrowDown />
      </button>
    </section>
  );
}

