import { FaGraduationCap, FaHeartbeat, FaFemale, FaHome, FaSeedling, FaBriefcase } from 'react-icons/fa';
import './WhatWeDo.css';

const areas = [
  {
    icon: <FaGraduationCap />,
    title: 'Education & Skill Development',
    color: 'green',
    items: [
      'Establishing schools, IOT & Drone labs',
      'Vocational training centres & workshops',
      'Scholarship programs & free study material',
      'Non-formal education for out-of-school children',
      'Computer training programs',
      'Career counseling & guidance sessions',
    ],
  },
  {
    icon: <FaHeartbeat />,
    title: 'Healthcare Initiatives',
    color: 'red',
    items: [
      'Organizing free medical camps & check-ups',
      'HIV/AIDS awareness programs',
      'Health check-ups for needy populations',
      'Pulse Polio awareness campaigns',
      'Hygiene, nutrition & sanitation workshops',
      'Eye care and dental care services',
    ],
  },
  {
    icon: <FaFemale />,
    title: 'Women Empowerment',
    color: 'purple',
    items: [
      'Skill development (tailoring, beauty culture)',
      'Gender equality & leadership workshops',
      'Beti Bachao Beti Padhao Abhiyan',
      'Self-help group formation (SHG)',
      'Mentorship for women entrepreneurs',
      'Access to market linkages for women',
    ],
  },
  {
    icon: <FaHome />,
    title: 'Old Age Home & Orphanage',
    color: 'blue',
    items: [
      'Anath Ashram for senior citizens & orphans',
      'Safe and comfortable living spaces',
      'Medical care and nursing support',
      'Recreational activities (Yoga, Badminton)',
      'Companionship and social events',
      'Bhikhari Mukt Bharat initiative',
    ],
  },
  {
    icon: <FaBriefcase />,
    title: 'Livelihood & Economic Empowerment',
    color: 'orange',
    items: [
      'Income-generating activities (tailoring, handicrafts)',
      'Micro-finance and credit access',
      'Self-help groups & cooperative societies',
      'Mobile, AC & Fridge repair training',
      'Food distribution to needy peoples',
      'Agriculture & horticulture programs',
    ],
  },
  {
    icon: <FaSeedling />,
    title: 'Environmental Conservation',
    color: 'teal',
    items: [
      'Tree plantation drives (native species)',
      'Waste management initiatives',
      'Sustainable farming practices',
      'Water conservation awareness',
      'Renewable energy projects',
      'Cleaning & restoring natural habitats',
    ],
  },
];

const colorMap = {
  green: { bg: 'rgba(44,110,73,0.1)', icon: 'var(--primary)', border: 'var(--primary)' },
  red: { bg: 'rgba(220,53,69,0.08)', icon: '#dc3545', border: '#dc3545' },
  purple: { bg: 'rgba(111,66,193,0.08)', icon: '#6f42c1', border: '#6f42c1' },
  blue: { bg: 'rgba(74,144,217,0.1)', icon: 'var(--secondary)', border: 'var(--secondary)' },
  orange: { bg: 'rgba(244,162,97,0.12)', icon: 'var(--accent)', border: 'var(--accent)' },
  teal: { bg: 'rgba(32,178,170,0.08)', icon: '#20b2aa', border: '#20b2aa' },
};

export default function WhatWeDo() {
  return (
    <section className="what-we-do section-padding" id="what-we-do">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Core Focus Areas</span>
          <h2 className="section-title">What We Do</h2>
          <div className="title-underline">
            <span className="line-long" />
            <span className="line-short" />
            <span className="line-long" />
          </div>
          <p className="section-subtitle">
            Six pillars of impact — from education to environment — creating sustainable change in communities across Maharashtra.
          </p>
        </div>

        <div className="wwd-grid">
          {areas.map((area, i) => {
            const c = colorMap[area.color];
            return (
              <div className="wwd-card reveal" key={i} style={{ '--card-color': c.icon, '--card-bg': c.bg, '--card-border': c.border, animationDelay: `${i * 0.1}s` }}>
                <div className="wwd-icon-wrap">
                  {area.icon}
                </div>
                <h3 className="wwd-title">{area.title}</h3>
                <ul className="wwd-items">
                  {area.items.map((item, j) => (
                    <li key={j} className="wwd-item">
                      <span className="wwd-dot" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="wwd-extra reveal">
          <h3>Our Many Other Focus Areas Include:</h3>
          <div className="wwd-tags">
            {[
              'Literacy & Education', 'Women & Child Development', 'Sustainable Agriculture',
              'Unorganized Sector Welfare', 'Safe Drinking Water & Sanitation', 'Human Rights',
              'Youth Skill Development', 'Self Help Group Awareness', 'Food Distribution',
              'IQ Test Camps for Special Children', 'Free Study Material Distribution', 'Disaster Preparedness',
            ].map((tag, i) => (
              <span className="wwd-tag" key={i}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
