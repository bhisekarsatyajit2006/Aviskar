import './Testimonials.css';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Student Beneficiary',
    avatar: '👩‍🎓',
    quote: 'AVISKAR FOUNDATION changed my life. Through their education program, I received books, tuition support, and career counseling. Today I am preparing for my engineering entrance exam with full confidence.',
    rating: 5,
  },
  {
    name: 'Dr. Ramesh Patil',
    role: 'Medical Volunteer',
    avatar: '👨‍⚕️',
    quote: 'I\'ve been volunteering with AVISKAR\'s medical camps for 3 years. The dedication of this team is extraordinary. We\'ve reached hundreds of patients in remote areas who had no access to healthcare.',
    rating: 5,
  },
  {
    name: 'Sunita Deshmukh',
    role: 'Women Empowerment Program',
    avatar: '👩',
    quote: 'The tailoring and skill development training gave me the confidence to start my own small business. I now earn independently and support my family. AVISKAR Foundation truly empowers women.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials section-padding" id="testimonials">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Testimonials</span>
          <h2 className="section-title">Voices of Change</h2>
          <div className="title-underline">
            <span className="line-long" />
            <span className="line-short" />
            <span className="line-long" />
          </div>
          <p className="section-subtitle">
            Real stories from real lives transformed by the AVISKAR FOUNDATION community.
          </p>
        </div>

        <div className="testi-grid reveal-stagger">
          {testimonials.map((t, i) => (
            <div className="testi-card" key={i}>
              <div className="testi-quote-icon">"</div>
              <div className="testi-stars">
                {'★'.repeat(t.rating)}
              </div>
              <p className="testi-text">{t.quote}</p>
              <div className="testi-author">
                <div className="testi-avatar">{t.avatar}</div>
                <div>
                  <strong className="testi-name">{t.name}</strong>
                  <span className="testi-role">{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
