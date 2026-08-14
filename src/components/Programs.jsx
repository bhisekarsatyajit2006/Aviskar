import { FaGraduationCap, FaHeartbeat, FaFemale, FaTree, FaArrowRight } from 'react-icons/fa';
import './Programs.css';

const programs = [
  {
    icon: <FaGraduationCap />,
    emoji: '📚',
    title: 'Education',
    desc: 'Free tuition, book distribution, career counseling and scholarships for underprivileged children.',
    stat: '500+ Students Supported',
    color: '#0E7A52',
    bg: '#EDF7F2',
  },
  {
    icon: <FaHeartbeat />,
    emoji: '🏥',
    title: 'Healthcare',
    desc: 'Free medical camps, health check-ups, HIV/AIDS awareness, and eye & dental care services.',
    stat: '150+ Camps Conducted',
    color: '#dc2626',
    bg: '#fef2f2',
  },
  {
    icon: <FaFemale />,
    emoji: '👩',
    title: 'Women Empowerment',
    desc: 'Skill development, leadership workshops, and self-help groups for women\'s financial independence.',
    stat: '300+ Women Empowered',
    color: '#7c3aed',
    bg: '#f5f3ff',
  },
  {
    icon: <FaTree />,
    emoji: '🌱',
    title: 'Environment',
    desc: 'Native tree plantation, water conservation, and environmental sustainability awareness drives.',
    stat: '3,000+ Trees Planted',
    color: '#059669',
    bg: '#ecfdf5',
  },
];

export default function Programs() {
  const scrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="programs section-padding" id="programs">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Our Work</span>
          <h2 className="section-title">What We Do</h2>
          <div className="title-underline">
            <span className="line-long" />
            <span className="line-short" />
            <span className="line-long" />
          </div>
          <p className="section-subtitle">
            Four core areas where AVISKAR FOUNDATION is creating lasting impact across Maharashtra.
          </p>
        </div>

        <div className="prog-cards reveal-stagger">
          {programs.map((p, i) => (
            <div className="prog-card" key={i} style={{ '--pc': p.color, '--pb': p.bg }}>
              <div className="prog-card-icon">
                {p.icon}
              </div>
              <div className="prog-card-emoji">{p.emoji}</div>
              <h3 className="prog-card-title">{p.title}</h3>
              <p className="prog-card-desc">{p.desc}</p>
              <div className="prog-card-stat">{p.stat}</div>
              <div className="prog-card-arrow">
                <FaArrowRight />
              </div>
            </div>
          ))}
        </div>

        <div className="prog-cta reveal">
          <button className="btn btn-outline-green" onClick={() => scrollTo('#get-involved')}>
            View All Programs <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}
