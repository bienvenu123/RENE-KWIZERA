import React from 'react';
import './Education.css';

const education = [
  {
    icon: '🧠',
    degree: 'MSc in Information Technology - Big Data Analytics',
    institution: 'AUCA University',
    location: 'In progress - Rwanda',
    status: 'In progress',
  },
  {
    icon: '🏛️',
    degree: 'Bachelor of Business, ICT (BBICT)',
    institution: 'Mount Kenya University - Kigali Campus',
    location: '2024 - Rwanda',
    status: 'Completed',
  },
  {
    icon: '📡',
    degree: 'Advanced Diploma in Electronics & Telecommunications',
    institution: 'IPRC Tumba',
    location: '2019 - Rwanda',
    status: 'Completed',
  },
];

export default function Education() {
  return (
    <section id="education" className="education section">
      <div className="container">
        <p className="section-label">ACADEMIC BACKGROUND</p>
        <h2 className="section-title">
          My <span className="highlight">Education</span>
        </h2>
        <div className="education-grid">
          {education.map((item) => (
            <article key={item.degree} className="edu-card">
              <span className="edu-icon">{item.icon}</span>
              <h3 className="edu-degree">{item.degree}</h3>
              <p className="edu-institution">{item.institution}</p>
              <p className="edu-location">{item.location}</p>
              <span className={`edu-status ${item.status === 'In progress' ? 'progress' : 'completed'}`}>
                {item.status}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
