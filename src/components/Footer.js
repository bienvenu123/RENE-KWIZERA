import React, { useState } from 'react';
import './Footer.css';

const navLinks = [
  { label: 'Skills', href: '#skills' },
  { label: 'Work Experience', href: '#work' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certifications', href: '#certs' },
  { label: 'References', href: '#references' },
];

export default function Footer() {
  const [visible, setVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <h3 className="footer-name">
            KWIZERA <span className="highlight">RENE</span>
          </h3>
          <p className="footer-desc">
            Data Scientist & IT Specialist. Clear insights from complex data. Based in Kigali, Rwanda — clients worldwide.
          </p>
          <div className="footer-social">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="LinkedIn">in</a>
            <a href="mailto:renek724@gmail.com" className="footer-social-link" aria-label="Email">✉</a>
            <a href="tel:+250788421261" className="footer-social-link" aria-label="Phone">📞</a>
          </div>
          <p className="footer-availability">
            <span className="availability-dot" /> Available for new opportunities
          </p>
        </div>
        <div className="footer-nav">
          <h4 className="footer-heading">NAVIGATION</h4>
          <ul>
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href}>– {link.label}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="footer-contact">
          <h4 className="footer-heading">GET IN TOUCH</h4>
          <ul>
            <li>– renek724@gmail.com</li>
            <li>– +250 788 421 261</li>
            <li>– <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a></li>
            <li>– Kigali, Rwanda</li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <p className="footer-copy">© 2025 Kwizera Rene. All rights reserved.</p>
          <p className="footer-made">Made with ❤️ in Rwanda</p>
          <button
            type="button"
            className={`scroll-top ${visible ? 'visible' : ''}`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
