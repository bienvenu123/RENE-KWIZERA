import React from 'react';
import './TechnicalStack.css';

const stack = [
  {
    icon: '🤖',
    title: 'Data Science & ML',
    description: 'Predictive models and ML pipelines from EDA to deployment.',
    tags: ['Python', 'R', 'Scikit-learn', 'TensorFlow', 'PyTorch', 'NumPy'],
    barColor: 'purple',
  },
  {
    icon: '📊',
    title: 'Business Intelligence',
    description: 'Dashboards and data storytelling that drive decisions.',
    tags: ['Power BI', 'Tableau', 'Excel VBA', 'ArcGIS'],
    barColor: 'blue',
  },
  {
    icon: '🗄️',
    title: 'Databases & ETL',
    description: 'Database design, ETL, and warehousing for scalable analytics.',
    tags: ['SQL', 'PostgreSQL', 'ETL', 'Data Warehousing'],
    barColor: 'purple',
  },
  {
    icon: '🌐',
    title: 'IT & Networking',
    description: 'CCNA-certified. Server admin, secure infra, and IT policy.',
    tags: ['CCNA R&S', 'CCNA Sec', 'Server Admin', 'Network Mgmt'],
    barColor: 'blue',
  },
  {
    icon: '⚙️',
    title: 'Dev & DevOps',
    description: 'APIs, mobile apps, containers, and version-controlled code.',
    tags: ['FastAPI', 'Flutter', 'Docker', 'Git', 'C/C++'],
    barColor: 'purple',
  },
  {
    icon: '🎯',
    title: 'Leadership & Strategy',
    description: 'Digital transformation, PM, mentorship, and stakeholder communication.',
    tags: ['Leadership', 'Mentorship', 'PM', 'Communication'],
    barColor: 'blue',
  },
];

export default function TechnicalStack() {
  return (
    <section id="skills" className="technical-stack section">
      <div className="container">
        <p className="section-label">TECHNICAL STACK</p>
        <h2 className="section-title">
          What I <span className="highlight">Build</span> With
        </h2>
        <div className="stack-grid">
          {stack.map((item) => (
            <div key={item.title} className="stack-card">
              <span className="stack-icon">{item.icon}</span>
              <h3 className="stack-title">{item.title}</h3>
              <p className="stack-desc">{item.description}</p>
              <div className={`stack-bar ${item.barColor}`} />
              <div className="stack-tags">
                {item.tags.map((tag) => (
                  <span key={tag} className="stack-tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
