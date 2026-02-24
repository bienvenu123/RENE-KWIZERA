import React from 'react';
import './WorkExperience.css';

const jobs = [
  {
    period: 'JULY 2019 – PRESENT',
    title: 'IT Operations Associate',
    company: 'Rwanda Charity Eye Hospital',
    location: 'Southern Province, Kamonyi, Rwanda',
    bullets: [
      'Power BI dashboards for patient flow, clinical KPIs, and service delivery',
      'Financial and operational analytics to support planning and resource allocation',
      'LAN/WAN, servers, and user accounts — 99%+ uptime, strong data security',
      'Active Directory, email, and backup for hospital IT infrastructure',
      'Technical support and training for 100+ staff across departments',
      'Data protection and compliance with healthcare IT standards',
    ],
    tags: ['Healthcare IT', 'EHR Systems', 'Power BI', 'Network Admin', 'Active Directory', 'Data Analysis'],
  },
  {
    period: 'OCTOBER 2024 – MARCH 2025',
    title: 'Software Solutions Architect',
    company: 'Commitlink Ltd (Consultant)',
    location: 'Kigali, Rwanda',
    bullets: [
      'Architectural blueprints and technology roadmaps from client requirements',
      'Scalable software solutions and data pipelines for client objectives',
      'End-to-end design and implementation for complex technical problems',
      'Fast adaptation, clear communication, on-time delivery under tight deadlines',
      'Hands-on backend API and data integration development',
      'Progress reports and technical presentations to stakeholders',
    ],
    tags: ['Solutions Architecture', 'FastAPI', 'Data Pipelines', 'Technical Planning', 'Consulting'],
  },
];

const snapshot = [
  { icon: '📅', text: '5+ years in IT & data' },
  { icon: '🏥', text: 'Healthcare – EHR, BI, support' },
  { icon: '🏛️', text: 'Consulting – architecture & APIs' },
  { icon: '📊', text: 'Power BI networks, infra' },
];

export default function WorkExperience() {
  return (
    <section id="work" className="work-experience section">
      <div className="container work-layout">
        <div className="work-main">
          <p className="section-label">CAREER JOURNEY</p>
          <h2 className="section-title">
            Work <span className="highlight">Experience</span>
          </h2>
          <div className="timeline">
            {jobs.map((job) => (
              <article key={job.title} className="timeline-item">
                <div className="timeline-marker" />
                <span className="job-period">{job.period}</span>
                <h3 className="job-title">{job.title}</h3>
                <p className="job-company">@ {job.company}</p>
                <p className="job-location">
                  <span className="pin">📍</span> {job.location}
                </p>
                <ul className="job-bullets">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
                <div className="job-tags">
                  {job.tags.map((tag) => (
                    <span key={tag} className="job-tag">{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
        <aside className="career-snapshot">
          <h3 className="snapshot-title">Career snapshot</h3>
          <ul className="snapshot-list">
            {snapshot.map((item) => (
              <li key={item.text}>
                <span className="snapshot-icon">{item.icon}</span>
                {item.text}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}
