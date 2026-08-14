import { FaArrowRight } from 'react-icons/fa';
import './About.css';

export default function About() {
  return (
    <section className="about section-padding" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-img-col reveal-left">
            <div className="about-img-wrap">
              <img src="/img2.jpg" alt="AVISKAR Foundation team and volunteers" className="about-img" />
              <div className="about-img-overlay">
                <div className="about-img-stat">
                  <strong>5+</strong>
                  <span>Years Serving Communities</span>
                </div>
              </div>
            </div>
          </div>

          <div className="about-text-col reveal-right">
            <span className="section-label">Who We Are</span>
            <h2 className="section-title about-heading">
              AVISKAR<br />
              <span className="about-heading-accent">FOUNDATION</span>
            </h2>
            <div className="title-underline" style={{ justifyContent: 'flex-start' }}>
              <span className="line-long" />
              <span className="line-short" />
            </div>

            <p className="about-para">
              <strong>AVISKAR FOUNDATION</strong> is a registered non-profit organization dedicated to
              eradicating educational inequality, providing accessible healthcare, empowering women through
              skill development, and promoting environmental sustainability across rural and urban communities in Maharashtra.
            </p>

            <blockquote className="about-quote">
              "True development begins when every child gets a book, every village gets healthcare, and every woman stands on her own feet."
            </blockquote>

            <div className="about-pillars">
              {['Education', 'Healthcare', 'Women Empowerment', 'Environment', 'Child Protection'].map((p) => (
                <span key={p} className="about-pillar-chip">{p}</span>
              ))}
            </div>

            <div className="about-creds-grid">
              <div className="about-cred-card">
                <span className="about-cred-icon">📜</span>
                <div>
                  <span className="about-cred-label">Reg. No.</span>
                  <strong className="about-cred-val">29/2020 (Companies Act)</strong>
                </div>
              </div>
              <div className="about-cred-card">
                <span className="about-cred-icon">🏛️</span>
                <div>
                  <span className="about-cred-label">NGO Darpan</span>
                  <strong className="about-cred-val">MH/2020/0252543</strong>
                </div>
              </div>
              <div className="about-cred-card">
                <span className="about-cred-icon">💼</span>
                <div>
                  <span className="about-cred-label">CSR Registration</span>
                  <strong className="about-cred-val">CSR00108292</strong>
                </div>
              </div>
              <div className="about-cred-card">
                <span className="about-cred-icon">🔰</span>
                <div>
                  <span className="about-cred-label">80G / 12A Tax Exempt</span>
                  <strong className="about-cred-val">AAKAA2135ME2025101</strong>
                </div>
              </div>
            </div>

            <a href="#programs" className="about-readmore">
              Explore Our Programs <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
