import { FaHeart, FaHandsHelping, FaBuilding, FaArrowRight } from 'react-icons/fa';
import './GetInvolved.css';

const ways = [
  {
    icon: <FaHeart />,
    emoji: '❤️',
    title: 'Donate',
    desc: 'Your contribution fuels our education, healthcare, and tree plantation programs. Every donation, big or small, directly impacts a family in need.',
    cta: 'Donate Now',
    color: '#dc2626',
    bg: '#fef2f2',
    featured: true,
  },
  {
    icon: <FaHandsHelping />,
    emoji: '🤝',
    title: 'Volunteer',
    desc: 'Share your skills, time, and energy with us. Volunteers are the heartbeat of AVISKAR FOUNDATION and lead ground-level implementation.',
    cta: 'Become a Volunteer',
    color: '#0E7A52',
    bg: '#EDF7F2',
  },
  {
    icon: <FaBuilding />,
    emoji: '🏢',
    title: 'CSR Partner',
    desc: 'Join hands with us as a corporate or institutional partner under Section 135 CSR guidelines. Scale sustainable impact across Maharashtra.',
    cta: 'Partner With Us',
    color: '#4338ca',
    bg: '#eef2ff',
  },
];

export default function GetInvolved({ onOpenDonate }) {
  const handleCardClick = (e, way) => {
    if (way.title === 'Donate') {
      e.preventDefault();
      if (onOpenDonate) onOpenDonate(1000);
    }
  };

  return (
    <section className="get-involved section-padding" id="get-involved">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Get Involved</span>
          <h2 className="section-title">Make a Difference Today</h2>
          <div className="title-underline">
            <span className="line-long" />
            <span className="line-short" />
            <span className="line-long" />
          </div>
          <p className="section-subtitle">
            There are many ways to be part of the change. Choose what resonates with you.
          </p>
        </div>

        <div className="gi-cards reveal-stagger">
          {ways.map((w, i) => (
            <div
              className={`gi-card ${w.featured ? 'gi-card-featured' : ''}`}
              key={i}
              style={{ '--gc': w.color, '--gb': w.bg }}
            >
              {w.featured && <div className="gi-featured-badge">Most Popular</div>}
              <div className="gi-icon">{w.emoji}</div>
              <h3 className="gi-title">{w.title}</h3>
              <p className="gi-desc">{w.desc}</p>
              <a
                href="#contact"
                className="gi-btn"
                onClick={(e) => handleCardClick(e, w)}
              >
                {w.cta} <FaArrowRight />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
