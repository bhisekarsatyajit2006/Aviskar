import './Approach.css';

const strategies = [
  {
    number: '01',
    title: 'Participatory Planning',
    desc: 'Engaging communities in every step of planning and implementation to ensure inclusive, ground-up development.',
  },
  {
    number: '02',
    title: 'Target Intervention',
    desc: 'Identifying and focusing on the most marginalized sections to maximize the impact of our programs.',
  },
  {
    number: '03',
    title: 'Capacity Building',
    desc: 'Strengthening Community-Based Organizations (CBOs) and Self-Help Groups (SHGs) for long-term self-reliance.',
  },
  {
    number: '04',
    title: 'Intervention Research',
    desc: 'Using data-driven approaches and research to constantly improve and adapt our intervention strategies.',
  },
  {
    number: '05',
    title: 'Networking',
    desc: 'Collaborating with like-minded organizations, government agencies, and stakeholders to maximize collective impact.',
  },
  {
    number: '06',
    title: 'Policy Advocacy',
    desc: 'Influencing policies and advocating for systemic changes that create a more inclusive and just society.',
  },
];

const experiences = [
  { title: 'Community Development', desc: 'SHG formation and grassroots empowerment' },
  { title: 'Health Promotion', desc: 'Preventive healthcare and awareness campaigns' },
  { title: 'Child Development', desc: 'Education and safe environment programs' },
  { title: 'Livelihood Development', desc: 'Economic empowerment and skill training' },
];

export default function Approach() {
  return (
    <section className="approach section-padding" id="approach">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">How We Work</span>
          <h2 className="section-title">Our Approach</h2>
          <div className="title-underline">
            <span className="line-long" />
            <span className="line-short" />
            <span className="line-long" />
          </div>
          <p className="section-subtitle">
            A systematic, community-driven approach to creating sustainable development and lasting positive change.
          </p>
        </div>

        <div className="approach-strategies reveal">
          {strategies.map((s, i) => (
            <div className="approach-card" key={i}>
              <span className="approach-number">{s.number}</span>
              <h3 className="approach-title">{s.title}</h3>
              <p className="approach-desc">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="approach-experience reveal">
          <div className="approach-exp-header">
            <span className="section-label" style={{ textAlign: 'left' }}>Program Experience</span>
            <h3>Areas Where We Have Deep Expertise</h3>
          </div>
          <div className="approach-exp-grid">
            {experiences.map((exp, i) => (
              <div className="approach-exp-card" key={i}>
                <div className="approach-exp-dot" />
                <div>
                  <h4>{exp.title}</h4>
                  <p>{exp.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
