import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    pullQuote: 'A motivated, talented, and trustworthy professional with a promising future.',
    highlights: [
      'Strong EHR implementation & billing systems',
      'Exceeds expectations — proactive and dedicated',
      'Collaborative; supports a productive team',
    ],
    name: 'NSENGIYUMVA Aimé Piati',
    role: 'IT Manager, Rwanda Charity Eye Hospital - Kamonyi',
    avatar: 'AP',
    color: 'purple',
  },
  {
    pullQuote: 'Wholeheartedly recommend in the highest possible terms.',
    highlights: [
      'Top performance in AI, Data Analytics, Networking, Security',
      'Final-year project ranked among the best (IT defense 2024)',
      'Ambitious, open-minded, high integrity',
    ],
    name: 'Dr. Nadia IRADUKUNDA',
    role: 'Lecturer, School of Computing & Informatics, Mount Kenya University - Kigali Campus',
    avatar: 'NI',
    color: 'teal',
  },
  {
    pullQuote: 'No hesitation in recommending for any professional opportunity.',
    highlights: [
      'Outstanding professionalism and technical proficiency',
      'Delivers high-quality work on tight deadlines',
      'Strong communicator; adapts quickly to team workflows',
    ],
    name: 'Pacifique',
    role: 'Chief Executive Officer, Commitlink Ltd',
    avatar: 'P',
    color: 'orange',
  },
];

export default function Testimonials() {
  return (
    <section id="references" className="testimonials section">
      <div className="container">
        <h2 className="section-title testimonials-title">
          What People <span className="highlight">Say</span>
        </h2>
        <p className="testimonials-intro">
          From supervisors, faculty, and clients in healthcare IT, academia, and consulting.
        </p>
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <article key={t.name} className="testimonial-card">
              <div className="testimonial-stars">★★★★★</div>
              <p className="testimonial-pull">{t.pullQuote}</p>
              <ul className="testimonial-highlights">
                {t.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <div className="testimonial-author">
                <span className={`testimonial-avatar ${t.color}`}>{t.avatar}</span>
                <div>
                  <p className="testimonial-name">{t.name}</p>
                  <p className="testimonial-role">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
