import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contact" className="contact section">
      <div className="container contact-inner">
        <p className="section-label">GET IN TOUCH</p>
        <h2 className="section-title contact-title">
          Let's <span className="highlight">Connect</span>
        </h2>
        <p className="contact-intro">
          Open to data science, IT consulting, and collaborative projects. Based in Rwanda — remote and global welcome.
        </p>
        <div className="contact-ctas">
          <a href="mailto:renek724@gmail.com" className="btn btn-primary">Send Email</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="btn btn-linkedin">
            in LinkedIn Profile
          </a>
        </div>
        <div className="contact-cards">
          <div className="contact-card">
            <span className="contact-card-icon">@</span>
            <p className="contact-card-label">EMAIL</p>
            <a href="mailto:renek724@gmail.com" className="contact-card-value">renek724@gmail.com</a>
          </div>
          <div className="contact-card">
            <span className="contact-card-icon">📱</span>
            <p className="contact-card-label">PHONE</p>
            <a href="tel:+250788421261" className="contact-card-value">+250 788 421 261</a>
          </div>
          <div className="contact-card">
            <span className="contact-card-icon">📍</span>
            <p className="contact-card-label">LOCATION</p>
            <p className="contact-card-value">Kigali, Rwanda</p>
          </div>
        </div>
      </div>
    </section>
  );
}
