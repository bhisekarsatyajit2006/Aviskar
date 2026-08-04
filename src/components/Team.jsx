import { FaLinkedin, FaTwitter } from 'react-icons/fa';
import './Team.css';

const members = [
  {
    name: 'Akshay Kawale',
    position: 'President',
    description: 'Visionary leader dedicated to research and development for social welfare, guiding the foundation with passion and purpose.',
    initials: 'AK',
    color: '#2C6E49',
  },
  {
    name: 'Abhijit Lonare',
    position: 'Secretary',
    description: 'Committed to administrative excellence and community outreach, ensuring all programs run smoothly and effectively.',
    initials: 'AL',
    color: '#4A90D9',
  },
  {
    name: 'Vipin Kakade',
    position: 'Treasurer',
    description: 'Overseeing financial management with transparency and accountability, ensuring resources are used for maximum impact.',
    initials: 'VK',
    color: '#F4A261',
  },
];

const governance = [
  { label: 'Governing Principle', value: 'Democratic Values' },
  { label: 'Highest Authority', value: 'General Body' },
  { label: 'Planning Cycle', value: 'Annual Meetings' },
  { label: 'Management System', value: 'Executive Committee' },
  { label: 'Accounting Software', value: 'Tally (Computerized)' },
  { label: 'Audit Type', value: 'External Auditor' },
];

export default function Team() {
  return (
    <section className="team section-padding" id="team">
      <div className="team-bg" />
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Our People</span>
          <h2 className="section-title">Leadership & Governance</h2>
          <div className="title-underline">
            <span className="line-long" />
            <span className="line-short" />
            <span className="line-long" />
          </div>
          <p className="section-subtitle">
            Guided by democratic values and dedicated leadership committed to creating lasting social change.
          </p>
        </div>

        <div className="team-members reveal">
          {members.map((m, i) => (
            <div className="team-card" key={i}>
              <div className="team-avatar" style={{ background: m.color }}>
                {m.initials}
              </div>
              <div className="team-info">
                <h3 className="team-name">{m.name}</h3>
                <span className="team-position" style={{ color: m.color }}>{m.position}</span>
                <p className="team-desc">{m.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="team-governance reveal">
          <h3>Governance Structure</h3>
          <p>The organization is guided by transparency and democratic values. A computerized accounting system with Tally software ensures financial integrity, with accounts audited by an external auditor.</p>
          <div className="governance-grid">
            {governance.map((g, i) => (
              <div className="governance-item" key={i}>
                <span className="governance-label">{g.label}</span>
                <span className="governance-value">{g.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
