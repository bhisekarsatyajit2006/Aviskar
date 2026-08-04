import { useState } from 'react';
import { FaArrowRight, FaExpand } from 'react-icons/fa';
import './Gallery.css';

const photos = [
  { src: '/gallery-students.png', alt: 'Children in education program', label: 'Education Drive' },
  { src: '/gallery-medical.png', alt: 'Free medical camp', label: 'Medical Camp' },
  { src: '/gallery-trees.png', alt: 'Tree plantation activity', label: 'Tree Plantation' },
  { src: '/gallery-women.png', alt: 'Women skill training', label: 'Women Training' },
  { src: '/about-volunteers.png', alt: 'Volunteers with children', label: 'Volunteer Event' },
  { src: '/hero-bg.png', alt: 'Community development', label: 'Community Service' },
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
            Every photo tells a story of hope, community, and transformation.
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
