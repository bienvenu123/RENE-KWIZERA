import React from 'react';
import './Hero.css';

const skills = [
  'Data Analysis & BI',
  'Machine Learning',
  'Network Engineering',
  'System Administration',
  'Healthcare IT',
  'Solutions Architecture',
];

const focusItems = [
  { icon: '📊', title: 'Data science & analytics' },
  { icon: '🔧', title: 'IT infrastructure & networks' },
  { icon: '🛡️', title: 'Consulting & solutions design' },
];

const stats = [
  { value: '5+', label: 'YEARS EXPERIENCE' },
  { value: '4+', label: 'CERTIFICATIONS' },
  { value: '100+', label: 'STAFF SUPPORTED' },
  { value: '3+', label: 'SECTORS' },
];

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner container">
        <div className="hero-main">
          <span className="availability">
            <span className="availability-dot" aria-hidden /> Open to new opportunities
          </span>
          <div className="hero-heading-block">
            <h1 className="hero-name">
              <span className="name-first">KWIZERA</span>{' '}
              <span className="name-outline">RENE</span>
            </h1>
            <p className="hero-title">EHR & Systems Integration</p>
          </div>
          <p className="hero-bio prose">
            I turn complex data into clear decisions. Five+ years in IT and data science—from
            analytics to infrastructure—delivering impact in healthcare, finance, and consulting.
          </p>
          <div className="hero-ctas">
            <a href="#contact" className="btn btn-primary">Get in Touch</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn btn-outline">in LinkedIn</a>
            <a href="#work" className="btn btn-outline">View Experience</a>
          </div>
          <div className="hero-stats">
            {stats.map(({ value, label }) => (
              <div key={label} className="stat">
                <span className="stat-value">{value}</span>
                <span className="stat-label">{label}</span>
              </div>
            ))}
          </div>
          <div className="hero-skills">
            {skills.map((skill) => (
              <span key={skill} className="skill-chip">{skill}</span>
            ))}
          </div>
          <div className="scroll-hint">
            <span className="scroll-icon">↓</span>
            <span>SCROLL</span>
          </div>
        </div>
        <aside className="hero-sidebar">
          <h3 className="sidebar-title">Current focus</h3>
          <ul className="focus-list">
            {focusItems.map((item) => (
              <li key={item.title}>
                <span className="focus-icon">{item.icon}</span>
                {item.title}
              </li>
            ))}
          </ul>
          <p className="sidebar-availability">
            Available for full-time, contract, and project-based work
          </p>
        </aside>
      </div>
    </section>
  );
}
