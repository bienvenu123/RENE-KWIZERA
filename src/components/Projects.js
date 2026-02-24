import React from 'react';
import './Projects.css';

const projects = [
  {
    id: '01',
    category: '2025 - DATA SCIENCE',
    title: 'Health Workforce & Life Expectancy Analysis',
    description: 'Python analysis of how health workforce density affects life expectancy, using WHO data and predictive modeling.',
    tags: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Predictive Modeling'],
  },
  {
    id: '02',
    category: '2025 - TIME SERIES',
    title: 'World Population & CO₂ Emissions Analysis',
    description: 'R-based time series (1990–2022) on population and CO₂ trends, with projections to 2030.',
    tags: ['R', 'Time Series', 'Regression', 'Data Viz', 'Forecasting'],
  },
  {
    id: '03',
    category: '2024 - FULL-STACK - ACADEMIC',
    title: 'Comprehensive Mental Health App – Ndera Hospital',
    description: 'Award-winning MIS for Ndera Neuropsychiatric Teaching Hospital; ranked among the best at IT project defense 2024.',
    tags: ['HTML', 'Python', 'JavaScript', 'SQL', 'XAMPP'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <p className="section-label">PORTFOLIO</p>
        <h2 className="section-title">
          Featured <span className="highlight">Projects</span>
        </h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <span className="project-number">{project.id}</span>
              <p className="project-category">{project.category}</p>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
