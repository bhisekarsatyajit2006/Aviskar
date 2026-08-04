import { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section className="contact section-padding" id="contact">
      <div className="container">
        <div className="section-header reveal">
          <span className="section-label">Contact Us</span>
          <h2 className="section-title">Get In Touch</h2>
          <div className="title-underline">
            <span className="line-long" />
            <span className="line-short" />
            <span className="line-long" />
          </div>
          <p className="section-subtitle">
            Whether you'd like to volunteer, donate, or learn more — we'd love to hear from you.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-info reveal-left">
            <div className="contact-info-cards">
              <div className="contact-info-item">
                <div className="contact-info-icon"><FaMapMarkerAlt /></div>
                <div>
                  <h4>Our Office</h4>
                  <p>Uttam Nagar, Lane No. 5, Near Yashoda Nagar,<br />Amravati (Maharashtra) – 444606, India</p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon contact-info-icon--whatsapp" style={{ background: '#e8f5e9', color: '#25D366' }}>
                  <FaWhatsapp />
                </div>
                <div>
                  <h4>Call / WhatsApp Us</h4>
                  <p>
                    <a
                      href="https://wa.me/918983690581?text=Hello%20AVISKAR%20FOUNDATION"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: 'inherit', fontWeight: 600 }}
                    >
                      +91 89836 90581
                    </a>
                    {' · '}
                    <span>+91 7020143007</span>
                  </p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon"><FaEnvelope /></div>
                <div>
                  <h4>Email Us</h4>
                  <p>aviskarfoundation1120@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Google Map */}
            <div className="contact-map">
              <iframe
                title="AVISKAR Foundation Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.095!2d77.7523!3d20.9417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAmravati%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form className="contact-form reveal-right" onSubmit={submit}>
            {sent && (
              <div className="form-success">
                ✅ Thank you! We'll be in touch soon.
              </div>
            )}
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input id="name" type="text" name="name" placeholder="Your name" value={form.name} onChange={handle} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input id="email" type="email" name="email" placeholder="your@email.com" value={form.email} onChange={handle} required />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input id="subject" type="text" name="subject" placeholder="How can we help?" value={form.subject} onChange={handle} required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="Tell us more..." value={form.message} onChange={handle} required />
            </div>
            <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
