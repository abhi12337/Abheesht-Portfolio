import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import ParticlesBackground from './components/ParticlesBackground';
import ScrollProgress from './components/ScrollProgress';
import AnimatedCursor from './components/AnimatedCursor';
import FloatingShapes from './components/FloatingShapes';

function App() {
  return (
    <div className="App">
      <AnimatedCursor />
      <ScrollProgress />
      <FloatingShapes />
      <ParticlesBackground />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
}

export default App;
