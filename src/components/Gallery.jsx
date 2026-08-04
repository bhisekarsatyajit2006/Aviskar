import { useState } from 'react';
import { FaArrowRight, FaExpand } from 'react-icons/fa';
import './Gallery.css';

const photos = [
  { src: '/img3.jpg', alt: 'Education Drive & Books Distribution', label: 'Education Drive' },
  { src: '/img4.jpg', alt: 'Free Medical Health Camp', label: 'Medical Camp' },
  { src: '/img5.jpg', alt: 'Tree Plantation Activity', label: 'Tree Plantation' },
  { src: '/img6.jpg', alt: 'Women Skill Training & Empowerment', label: 'Women Empowerment' },
  { src: '/img1.jpg', alt: 'Volunteer Group & Community Service', label: 'Volunteer Event' },
  { src: '/img2.jpg', alt: 'Community Awareness & Development', label: 'Community Service' },
];

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);

  return (
    <section className="gallery section-padding" id="gallery">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Our Gallery</span>
          <h2 className="section-title">Moments of Change</h2>
          <div className="title-underline">
            <span className="line-long" />
            <span className="line-short" />
            <span className="line-long" />
          </div>
          <p className="section-subtitle">
            Every photo tells a story of hope, community, and real transformation.
          </p>
        </div>

        <div className="gallery-grid reveal-stagger">
          {photos.map((p, i) => (
            <div
              className="gallery-item"
              key={i}
              onClick={() => setLightbox(p)}
            >
              <img src={p.src} alt={p.alt} loading="lazy" />
              <div className="gallery-overlay">
                <span className="gallery-label">{p.label}</span>
                <FaExpand className="gallery-icon" />
              </div>
            </div>
          ))}
        </div>

        <div className="gallery-cta reveal">
          <button className="btn btn-outline-green">
            View Full Gallery <FaArrowRight />
          </button>
        </div>
      </div>

      {lightbox && (
        <div className="gallery-lightbox" onClick={() => setLightbox(null)}>
          <div className="gallery-lightbox-inner" onClick={e => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.alt} />
            <p>{lightbox.label}</p>
            <button className="gallery-lightbox-close" onClick={() => setLightbox(null)}>✕</button>
          </div>
        </div>
      )}
    </section>
  );
}
