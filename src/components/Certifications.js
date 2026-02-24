import React from 'react';
import './Certifications.css';

const certs = [
  {
    icon: '📊',
    issuer: 'WORLDQUANT UNIVERSITY',
    title: 'Applied Data Science',
    tag: 'Data Science',
    tagColor: 'blue',
  },
  {
    icon: '🌐',
    issuer: 'CISCO CERTIFIED',
    title: 'CCNA Routing & Switching',
    tag: 'Networking',
    tagColor: 'blue',
  },
  {
    icon: '🔒',
    issuer: 'CISCO CERTIFIED',
    title: 'CCNA Security',
    tag: 'Cybersecurity',
    tagColor: 'purple',
  },
  {
    icon: '💻',
    issuer: 'CISCO',
    title: 'IT Essentials',
    tag: 'IT Infrastructure',
    tagColor: 'green',
  },
];

export default function Certifications() {
  return (
    <section id="certs" className="certifications section">
      <div className="container">
        <p className="section-label">CREDENTIALS</p>
        <h2 className="section-title">
          My <span className="highlight">Certifications</span>
        </h2>
        <div className="certs-grid">
          {certs.map((cert) => (
            <article key={cert.title} className="cert-card">
              <span className="cert-icon">{cert.icon}</span>
              <p className="cert-issuer">{cert.issuer}</p>
              <h3 className="cert-title">{cert.title}</h3>
              <span className={`cert-tag ${cert.tagColor}`}>{cert.tag}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
