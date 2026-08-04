import './MissionVision.css';

const missions = [
  'Reach out to marginalized sections, focusing on Education, Medical Health Awareness, and Empowerment of women, children, and tribal/rural areas.',
  'Evolve innovative approaches to utilize traditional skills for eco-friendly development.',
  'Provide humanitarian aid to vulnerable populations during emergencies, natural disasters, or humanitarian crises.',
  'Promote environmental conservation and sustainability through awareness campaigns and tree plantation drives.',
  'Facilitate community development through infrastructure, livelihood support, and capacity-building programs.',
];

const visions = [
  'Empower underprivileged communities about Gender Rights through Community Participation for Sustainable Development.',
  'Evolve innovative approaches and processes to utilize traditional skills and knowledge for efficient, eco-friendly development.',
  'Create a society where every individual has access to quality education, healthcare, and livelihood opportunities.',
  'Foster a culture of social justice, inclusivity, and environmental stewardship across all communities.',
  'Build a strong network of like-minded organizations and advocate for policies that create lasting positive change.',
];

export default function MissionVision() {
  return (
    <section className="mission-vision section-padding" id="mission">
      <div className="mv-bg-pattern" />
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Our Purpose</span>
          <h2 className="section-title">Mission &amp; Vision</h2>
          <div className="title-underline">
            <span className="line-long" />
            <span className="line-short" />
            <span className="line-long" />
          </div>
          <p className="section-subtitle">The guiding principles that drive everything we do at AVISKAR FOUNDATION</p>
        </div>

        <div className="mv-grid">
          <div className="mv-card mv-mission reveal-left">
            <div className="mv-card-header">
              <div className="mv-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <circle cx="12" cy="12" r="4" />
                  <line x1="12" y1="2" x2="12" y2="6" />
                  <line x1="12" y1="18" x2="12" y2="22" />
                  <line x1="2" y1="12" x2="6" y2="12" />
                  <line x1="18" y1="12" x2="22" y2="12" />
                </svg>
              </div>
              <h3>Our Mission</h3>
            </div>
            <ul className="mv-list">
              {missions.map((item, i) => (
                <li key={i} className="mv-list-item">
                  <span className="mv-bullet" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="mv-card mv-vision reveal-right">
            <div className="mv-card-header">
              <div className="mv-icon-wrap mv-icon-blue">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              <h3>Our Vision</h3>
            </div>
            <ul className="mv-list">
              {visions.map((item, i) => (
                <li key={i} className="mv-list-item">
                  <span className="mv-bullet mv-bullet-blue" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
