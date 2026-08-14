import { FaQuoteLeft, FaHeart } from 'react-icons/fa';
import './StoriesOfChange.css';

const stories = [
  {
    name: 'Aarti Kadam',
    role: 'Student & Scholarship Recipient',
    tag: 'Education',
    location: 'Pune, Maharashtra',
    img: '/img1.jpg',
    quote:
      'I was on the verge of dropping out after 10th grade due to financial constraints. AVISKAR Foundation provided me with study materials, mentorship, and full fee support. Now I am pursuing my Diploma in Computer Engineering.',
    highlight: 'From potential dropout to Engineering Student',
  },
  {
    name: 'Sharda Mane',
    role: 'SHG Women Entrepreneur',
    tag: 'Women Empowerment',
    location: 'Satara, Maharashtra',
    img: '/img2.jpg',
    quote:
      'The 3-month tailoring and micro-enterprise training changed everything for me. Today I run my own small stitching boutique, employ two other women from my village, and support my children’s education.',
    highlight: 'Earns independent income & employs 2 women',
  },
  {
    name: 'Dr. Vikrant Joshi',
    role: 'Volunteer Medical Officer',
    tag: 'Healthcare',
    location: 'Nashik Tribal Region',
    img: '/gallery-students.png',
    quote:
      'Participating in AVISKAR’s rural medical camps showed me the acute gap in primary healthcare. We have treated over 800 villagers in remote tribal hamlets for preventable conditions with complete follow-up care.',
    highlight: '800+ tribal patients received free treatment',
  },
];

export default function StoriesOfChange() {
  return (
    <section className="stories section-padding" id="stories">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Real Lives, Real Impact</span>
          <h2 className="section-title">Stories of Change</h2>
          <div className="title-underline">
            <span className="line-long" />
            <span className="line-short" />
            <span className="line-long" />
          </div>
          <p className="section-subtitle">
            Behind every stat is a story of hope, resilience, and transformation driven by community support.
          </p>
        </div>

        <div className="stories-grid reveal-stagger">
          {stories.map((s, i) => (
            <div className="story-card" key={i}>
              <div className="story-img-wrap">
                <img src={s.img} alt={s.name} className="story-img" />
                <span className="story-tag">{s.tag}</span>
              </div>
              <div className="story-body">
                <FaQuoteLeft className="story-quote-icon" />
                <p className="story-quote">{s.quote}</p>
                <div className="story-highlight">
                  <FaHeart className="story-heart" /> {s.highlight}
                </div>
                <div className="story-author">
                  <strong className="story-name">{s.name}</strong>
                  <span className="story-role">{s.role} · {s.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
