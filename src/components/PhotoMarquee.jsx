import { useState } from 'react';
import { FaExpand } from 'react-icons/fa';
import './PhotoMarquee.css';

import img21 from '../assets/img21.jpeg';
import img22 from '../assets/img22.jpeg';
import img23 from '../assets/img23.jpeg';
import img24 from '../assets/img24.jpeg';
import img25 from '../assets/img25.jpeg';
import img26 from '../assets/img26.jpeg';
import img27 from '../assets/img27.jpeg';
import img28 from '../assets/img28.jpeg';
import img29 from '../assets/img29.jpeg';
import img30 from '../assets/img30.jpeg';
import img31 from '../assets/img31.jpeg';
import img32 from '../assets/img32.jpeg';
import img33 from '../assets/img33.jpeg';
import img34 from '../assets/img34.jpeg';
import img35 from '../assets/img35.jpeg';
import img36 from '../assets/img36.jpeg';

const marqueePhotos = [
  { src: img21, alt: 'Aviskar Foundation Activity 21', label: 'Community Initiative 21' },
  { src: img22, alt: 'Aviskar Foundation Activity 22', label: 'Youth Support 22' },
  { src: img23, alt: 'Aviskar Foundation Activity 23', label: 'Field Work 23' },
  { src: img24, alt: 'Aviskar Foundation Activity 24', label: 'Social Welfare 24' },
  { src: img25, alt: 'Aviskar Foundation Activity 25', label: 'Medical Service 25' },
  { src: img26, alt: 'Aviskar Foundation Activity 26', label: 'Educational Drive 26' },
  { src: img27, alt: 'Aviskar Foundation Activity 27', label: 'Tree Plantation 27' },
  { src: img28, alt: 'Aviskar Foundation Activity 28', label: 'Empowerment Event 28' },
  { src: img29, alt: 'Aviskar Foundation Activity 29', label: 'Community Support 29' },
  { src: img30, alt: 'Aviskar Foundation Activity 30', label: 'Health Campaign 30' },
  { src: img31, alt: 'Aviskar Foundation Activity 31', label: 'Volunteer Drive 31' },
  { src: img32, alt: 'Aviskar Foundation Activity 32', label: 'Development Work 32' },
  { src: img33, alt: 'Aviskar Foundation Activity 33', label: 'Outreach Activity 33' },
  { src: img34, alt: 'Aviskar Foundation Activity 34', label: 'Social Service 34' },
  { src: img35, alt: 'Aviskar Foundation Activity 35', label: 'Skill Building 35' },
  { src: img36, alt: 'Aviskar Foundation Activity 36', label: 'Foundation Celebration 36' },
];

export default function PhotoMarquee() {
  const [lightbox, setLightbox] = useState(null);

  // Duplicated list for seamless 100% continuous infinite marquee scroll
  const marqueeList = [...marqueePhotos, ...marqueePhotos];

  return (
    <section className="photo-marquee-section">
      <div className="photo-marquee-header container">
        <div className="photo-marquee-badge">
          <span className="badge-dot" />
          Live Action Gallery
        </div>
        <h2 className="photo-marquee-title">
          Our Impact in Motion
        </h2>
        <p className="photo-marquee-subtitle">
          Explore real moments of change across our community programs and events
        </p>
      </div>

      <div className="photo-marquee-wrapper">
        <div className="photo-marquee-track">
          {marqueeList.map((p, i) => (
            <div
              className="photo-marquee-card"
              key={i}
              onClick={() => setLightbox(p)}
              title="Click to zoom image"
            >
              <img src={p.src} alt={p.alt} loading="lazy" />
              <div className="photo-marquee-overlay">
                <span>{p.label}</span>
                <FaExpand className="marquee-expand-icon" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div className="photo-marquee-lightbox" onClick={() => setLightbox(null)}>
          <div className="photo-marquee-lightbox-inner" onClick={e => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.alt} />
            <p>{lightbox.label}</p>
            <button className="photo-marquee-lightbox-close" onClick={() => setLightbox(null)}>✕</button>
          </div>
        </div>
      )}
    </section>
  );
}
