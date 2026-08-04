import { FaArrowRight } from 'react-icons/fa';
import './About.css';

export default function About() {
  return (
    <section className="about section-padding" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-img-col reveal-left">
            <div className="about-img-wrap">
              <img src="/about-volunteers.png" alt="AVISKAR Foundation volunteers with children" className="about-img" />
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
              <strong>AVISKAR FOUNDATION</strong> is a non-profit organization working towards
              education, healthcare, women empowerment, environmental sustainability, and community
              development to create a better future for underprivileged communities.
            </p>

            <div className="about-pillars">
              {['Education', 'Healthcare', 'Women Empowerment', 'Environment'].map((p) => (
                <span key={p} className="about-pillar-chip">{p}</span>
              ))}
            </div>

            <div className="about-creds">
              <div className="about-cred">
                <span className="about-cred-label">Reg. No.</span>
                <span className="about-cred-val">29/2020 (Companies Act)</span>
              </div>
              <div className="about-cred">
                <span className="about-cred-label">NGO Darpan</span>
                <span className="about-cred-val">MH/2020/0252543</span>
              </div>
              <div className="about-cred">
                <span className="about-cred-label">CSR Reg.</span>
                <span className="about-cred-val">CSR00108292</span>
              </div>
              <div className="about-cred">
                <span className="about-cred-label">80G / 12A</span>
                <span className="about-cred-val">AAKAA2135ME2025101</span>
              </div>
            </div>

            <a href="#programs" className="about-readmore">
              Read More About Our Work <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
