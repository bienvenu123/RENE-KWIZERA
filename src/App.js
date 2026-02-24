import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import TechnicalStack from './components/TechnicalStack';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div id="top" className="App">
      <Header />
      <main>
        <Hero />
        <TechnicalStack />
        <WorkExperience />
        <Projects />
        <Education />
        <Certifications />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
