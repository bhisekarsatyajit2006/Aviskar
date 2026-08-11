import { FaInstagram, FaLinkedin, FaFacebook, FaMapMarkerAlt, FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import './Footer.css';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Volunteer', href: '#get-involved' },
  { label: 'Contact', href: '#contact' },
];

const programs = ['Education', 'Healthcare', 'Women Empowerment', 'Environment', 'Skill Development', 'Community Awareness'];

const socials = [
  {
    icon: <FaInstagram />,
    href: 'https://www.instagram.com/aviskar_foundation?igsh=OHRzNWkzam10ajE1',
    label: 'Instagram',
  },
  {
    icon: <FaLinkedin />,
    href: 'https://www.linkedin.com/in/aviskar-foundation-96b2ab410?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    label: 'LinkedIn',
  },
  {
    icon: <FaFacebook />,
    href: 'https://www.facebook.com/share/1CeayCDALq/',
    label: 'Facebook',
  },
];

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/logo.png" alt="AVISKAR FOUNDATION Logo" className="footer-logo-img" />
              <div className="footer-logo-text">
                <span className="footer-logo-main">AVISKAR</span>
                <span className="footer-logo-sub">FOUNDATION</span>
              </div>
            </div>
            <p className="footer-desc">
              A non-profit organization working towards education, healthcare, women empowerment, and environmental sustainability for a better future.
            </p>
            <div className="footer-contact-mini">
              <div><FaMapMarkerAlt /> Amravati, Maharashtra – 444606</div>
              <div>
                <FaWhatsapp style={{ color: '#25D366' }} />
                <a
                  href="https://wa.me/917020143007?text=Hello%20AVISKAR%20FOUNDATION%2C%20I%20would%20like%20to%20know%20more%20about%20your%20programs."
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'inherit', fontWeight: 600 }}
                >
                  +91 70201 43007
                </a>
                {' / '}
                <FaPhone />
                <a href="tel:+917020143007" style={{ color: 'inherit' }}>
                  +91 70201 43007
                </a>
              </div>
              <div><FaEnvelope /> aviskarfoundation1120@gmail.com</div>
            </div>
            <div className="footer-socials">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="footer-social-link"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((l) => (
                <li key={l.label}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="footer-col">
            <h4 className="footer-col-title">Our Programs</h4>
            <ul className="footer-links">
              {programs.map((p) => (
                <li key={p}><a href="#programs">{p}</a></li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer-col footer-newsletter">
            <h4 className="footer-col-title">Stay Updated</h4>
            <p>Subscribe for our latest news and community stories.</p>
            <form className="footer-newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email address" required />
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
            <div className="footer-ngo-ids">
              <span>80G / 12A Certified</span>
              <span>CSR Registered</span>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p>© {new Date().getFullYear()} AVISKAR FOUNDATION. All rights reserved.</p>
          <p>Made with ❤️ for a better world</p>
        </div>
      </div>
    </footer>
  );
}
