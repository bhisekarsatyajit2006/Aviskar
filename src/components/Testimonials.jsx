import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Student Beneficiary',
    location: 'Pune',
    avatar: '👩‍🎓',
    quote: 'AVISKAR FOUNDATION changed my life. Through their education program, I received books, tuition support, and career counseling. Today I am preparing for my engineering entrance exam with full confidence.',
    rating: 5,
  },
  {
    name: 'Dr. Ramesh Patil',
    role: 'Medical Camp Volunteer',
    location: 'Satara',
    avatar: '👨‍⚕️',
    quote: 'I\'ve been volunteering with AVISKAR\'s medical camps for 3 years. The dedication of this team is extraordinary. We\'ve reached hundreds of patients in remote areas who had no access to basic healthcare.',
    rating: 5,
  },
  {
    name: 'Sunita Deshmukh',
    role: 'Women Empowerment Trainee',
    location: 'Kolhapur',
    avatar: '👩',
    quote: 'The tailoring and skill development training gave me the confidence to start my own small business. I now earn independently and support my family. AVISKAR Foundation truly empowers women.',
    rating: 5,
  },
  {
    name: 'Rajesh Shinde',
    role: 'Community Partner',
    location: 'Sangli',
    avatar: '👨‍💼',
    quote: 'Partnering with AVISKAR Foundation on tree plantation and clean drinking water initiatives has made a visible difference in our village ecosystem. Their ground-level execution is remarkable.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="testimonials section-padding" id="testimonials">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Voices of Change</span>
          <h2 className="section-title">What People Say About Us</h2>
          <div className="title-underline">
            <span className="line-long" />
            <span className="line-short" />
            <span className="line-long" />
          </div>
          <p className="section-subtitle">
            Real feedback from students, medical volunteers, women entrepreneurs, and community leaders.
          </p>
        </div>

        {/* Featured Carousel Slide */}
        <div className="testi-featured reveal">
          <button className="testi-nav-btn testi-prev" onClick={handlePrev} aria-label="Previous Testimonial">
            <FaChevronLeft />
          </button>
          
          <div className="testi-featured-card">
            <FaQuoteLeft className="testi-big-quote" />
            <p className="testi-featured-text">{testimonials[activeIndex].quote}</p>
            <div className="testi-stars">{'★'.repeat(testimonials[activeIndex].rating)}</div>
            <div className="testi-featured-author">
              <span className="testi-avatar-circle">{testimonials[activeIndex].avatar}</span>
              <div>
                <strong className="testi-name">{testimonials[activeIndex].name}</strong>
                <span className="testi-role">{testimonials[activeIndex].role} · {testimonials[activeIndex].location}</span>
              </div>
            </div>
          </div>

          <button className="testi-nav-btn testi-next" onClick={handleNext} aria-label="Next Testimonial">
            <FaChevronRight />
          </button>
        </div>

        {/* Carousel Dots */}
        <div className="testi-dots">
          {testimonials.map((_, i) => (
            <button
              key={i}
              className={`testi-dot ${i === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
