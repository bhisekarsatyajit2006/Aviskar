import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';
import './News.css';

const news = [
  {
    date: 'July 2025',
    tag: 'Healthcare',
    tagColor: '#dc2626',
    title: 'Free Medical Camp Reaches 200+ Patients in Amravati',
    excerpt: 'AVISKAR FOUNDATION organized a comprehensive health camp providing free consultations, medicines, and health check-ups to underprivileged families in rural Amravati.',
    img: '/gallery-medical.png',
  },
  {
    date: 'June 2025',
    tag: 'Environment',
    tagColor: '#059669',
    title: 'Tree Plantation Drive: 500 Saplings Planted in One Day',
    excerpt: 'Over 100 volunteers joined forces to plant 500 native saplings across the city as part of our annual Green Earth initiative and environmental sustainability campaign.',
    img: '/gallery-trees.png',
  },
  {
    date: 'May 2025',
    tag: 'Education',
    tagColor: '#0E7A52',
    title: 'Book Distribution Drive Benefits 150 Slum Children',
    excerpt: 'Our education team distributed school bags, notebooks, and textbooks to 150 underprivileged children. The drive was accompanied by a career counseling session.',
    img: '/gallery-students.png',
  },
];

export default function News() {
  return (
    <section className="news section-padding" id="news">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Latest Updates</span>
          <h2 className="section-title">News & Events</h2>
          <div className="title-underline">
            <span className="line-long" />
            <span className="line-short" />
            <span className="line-long" />
          </div>
          <p className="section-subtitle">
            Stay connected with our latest activities and community stories.
          </p>
        </div>

        <div className="news-grid reveal-stagger">
          {news.map((n, i) => (
            <div className="news-card" key={i}>
              <div className="news-img-wrap">
                <img src={n.img} alt={n.title} loading="lazy" />
                <span className="news-tag" style={{ background: n.tagColor }}>{n.tag}</span>
              </div>
              <div className="news-body">
                <div className="news-date">
                  <FaCalendarAlt /> {n.date}
                </div>
                <h3 className="news-title">{n.title}</h3>
                <p className="news-excerpt">{n.excerpt}</p>
                <a href="#contact" className="news-readmore">
                  Read More <FaArrowRight />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
