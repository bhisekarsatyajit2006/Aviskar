import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaHeart } from 'react-icons/fa';
import './Navbar.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Programs', href: '#programs' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Volunteer', href: '#get-involved' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ onOpenDonate }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setActiveLink(href);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleDonateClick = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    if (onOpenDonate) {
      onOpenDonate(1000);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#home" className="navbar-logo" onClick={() => handleNavClick('#home')}>
          <img src="/logo.png" alt="AVISKAR FOUNDATION Logo" className="navbar-logo-img" />
          <div className="logo-text">
            <span className="logo-main"></span>
            <span className="logo-sub"></span>
          </div>
        </a>

        <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`nav-link ${activeLink === link.href ? 'active' : ''}`}
                onClick={() => handleNavClick(link.href)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <button
              className="navbar-donate-btn"
              onClick={handleDonateClick}
              style={{ cursor: 'pointer', border: 'none', font: 'inherit' }}
            >
              <FaHeart />
              Donate Now
            </button>
          </li>
        </ul>

        <button
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
}
