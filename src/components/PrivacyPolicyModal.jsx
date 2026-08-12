import { useEffect } from 'react';
import { FaTimes, FaShieldAlt, FaLock, FaUserCheck } from 'react-icons/fa';
import './PrivacyPolicyModal.css';

export default function PrivacyPolicyModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="privacy-modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="privacy-modal-card" onClick={(e) => e.stopPropagation()}>
        <header className="privacy-modal-header">
          <div className="privacy-modal-header-title">
            <FaShieldAlt className="privacy-shield-icon" />
            <div>
              <h2>Privacy Policy</h2>
              <p>AVISKAR FOUNDATION • Data Protection & Donor Privacy</p>
            </div>
          </div>
          <button className="privacy-modal-close" onClick={onClose} aria-label="Close Privacy Policy">
            <FaTimes />
          </button>
        </header>

        <div className="privacy-modal-body">
          <div className="privacy-badge-bar">
            <span><FaLock /> 100% Secure & Confidential</span>
            <span><FaUserCheck /> Certified Non-Profit NGO</span>
          </div>

          <p className="privacy-effective">
            <strong>Effective Date:</strong> January 1, 2026 | <strong>Last Updated:</strong> August 2026
          </p>

          <p className="privacy-intro">
            Welcome to <strong>AVISKAR FOUNDATION</strong>. We are committed to protecting the privacy, confidentiality, and data security of our donors, volunteers, beneficiaries, and website visitors. This Privacy Policy outlines how we collect, use, and safeguard your personal information.
          </p>

          <section className="privacy-section">
            <h3>1. Information We Collect</h3>
            <p>
              We collect information that you voluntarily provide when using our website, subscribing to newsletters, registering for workshops, donating, or contacting us:
            </p>
            <ul>
              <li><strong>Personal Details:</strong> Full Name, Email Address, Mobile/WhatsApp Number, and Address.</li>
              <li><strong>Donation & Financial Data:</strong> Payment details are processed securely through certified payment gateways. We never store credit/debit card numbers or bank PINs on our servers.</li>
              <li><strong>Volunteer & Program Registrations:</strong> Details submitted through online registration or volunteer forms.</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h3>2. How We Use Your Information</h3>
            <p>Your information is used strictly to support our non-profit programs and initiatives:</p>
            <ul>
              <li>Processing donations and issuing 80G tax-exemption receipts.</li>
              <li>Sending updates on our educational, healthcare, women empowerment, and environmental projects.</li>
              <li>Coordinating with volunteers, mentors, and event participants.</li>
              <li>Enhancing website security, responsiveness, and user experience.</li>
            </ul>
          </section>

          <section className="privacy-section">
            <h3>3. Donor Confidentiality & Privacy</h3>
            <p>
              <strong>AVISKAR FOUNDATION strictly respects donor confidentiality.</strong> We DO NOT sell, rent, trade, or share your personal contact details or mailing lists with third-party commercial organizations for marketing purposes.
            </p>
          </section>

          <section className="privacy-section">
            <h3>4. Data Security</h3>
            <p>
              We implement industry-standard administrative, technical, and physical security measures to safeguard your personal data against unauthorized access, loss, or alteration.
            </p>
          </section>

          <section className="privacy-section">
            <h3>5. Cookies & Analytics</h3>
            <p>
              Our platform uses standard session cookies to analyze website performance, track general page metrics, and offer smooth navigation. You may adjust browser settings to reject cookies if preferred.
            </p>
          </section>

          <section className="privacy-section">
            <h3>6. Third-Party Links</h3>
            <p>
              Our website includes links to social platforms (e.g., WhatsApp, Instagram, LinkedIn, Facebook). AVISKAR FOUNDATION is not responsible for the privacy practices of external third-party services.
            </p>
          </section>

          <section className="privacy-section">
            <h3>7. Contact Information</h3>
            <p>
              If you have any questions, feedback, or requests regarding your personal data under this policy, please reach out to us:
            </p>
            <div className="privacy-contact-box">
              <p><strong>AVISKAR FOUNDATION</strong></p>
              <p>Amravati, Maharashtra – 444606, India</p>
              <p>Email: <a href="mailto:aviskarfoundation1120@gmail.com">aviskarfoundation1120@gmail.com</a></p>
              <p>Phone / WhatsApp: <a href="tel:+917020143007">+91 70201 43007</a></p>
            </div>
          </section>
        </div>

        <footer className="privacy-modal-footer">
          <button className="btn btn-primary" onClick={onClose}>
            I Understand
          </button>
        </footer>
      </div>
    </div>
  );
}
