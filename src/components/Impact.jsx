import { useEffect, useRef, useState } from 'react';
import './Impact.css';

const stats = [
  { target: 500, suffix: '+', label: 'Students Supported', icon: '📚' },
  { target: 150, suffix: '+', label: 'Medical Camps', icon: '🏥' },
  { target: 3000, suffix: '+', label: 'Trees Planted', icon: '🌱' },
  { target: 100, suffix: '+', label: 'Volunteers', icon: '🤝' },
];

function CountUp({ target, suffix, started }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, target]);

  return <span>{count.toLocaleString()}{suffix}</span>;
}

export default function Impact() {
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="impact section-padding" id="impact" ref={ref}>
      <div className="impact-bg" />
      <div className="impact-overlay" />
      <div className="container impact-content">
        <div className="impact-header reveal">
          <span className="section-label" style={{ background: 'rgba(255,255,255,0.15)', color: 'white' }}>
            Our Impact
          </span>
          <h2 className="section-title" style={{ color: 'white' }}>Numbers That Inspire</h2>
          <div className="title-underline">
            <span className="line-long" style={{ background: 'rgba(255,255,255,0.4)' }} />
            <span className="line-short" style={{ background: 'var(--secondary)' }} />
            <span className="line-long" style={{ background: 'rgba(255,255,255,0.4)' }} />
          </div>
        </div>

        <div className="impact-stats reveal-stagger">
          {stats.map((s, i) => (
            <div className="impact-stat-card" key={i}>
              <div className="impact-stat-icon">{s.icon}</div>
              <div className="impact-stat-num">
                <CountUp target={s.target} suffix={s.suffix} started={started} />
              </div>
              <div className="impact-stat-lbl">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
