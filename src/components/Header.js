import React, { useState, useEffect } from 'react';
import './Header.css';

const THEME_KEY = 'portfolio-theme';

const navLinks = [
  { label: 'Skills', href: '#skills' },
  { label: 'Work', href: '#work' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Certs', href: '#certs' },
  { label: 'References', href: '#references' },
];

function getInitialTheme() {
  try {
    const saved = localStorage.getItem(THEME_KEY);
    if (saved === 'light' || saved === 'dark') return saved;
  } catch (_) {}
  if (typeof window !== 'undefined' && window.matchMedia?.('(prefers-color-scheme: light)').matches) {
    return 'light';
  }
  return 'dark';
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch (_) {}
}

export default function Header() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const initial = getInitialTheme();
    setTheme(initial);
    applyTheme(initial);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    applyTheme(next);
  };

  return (
    <header className="header">
      <div className="header-inner container">
        <a href="#top" className="logo">.DEV</a>
        <nav className="nav">
          {navLinks.map((link) => (
            <a key={link.label} href={link.href} className="nav-link">{link.label}</a>
          ))}
        </nav>
        <div className="header-actions">
          <a href="#contact" className="btn btn-primary">Hire Me</a>
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            <span className="theme-icon moon">☽</span>
            <span className="theme-icon sun">☀</span>
            <span className={`theme-slider ${theme === 'dark' ? 'dark' : 'light'}`} />
          </button>
        </div>
      </div>
    </header>
  );
}
