import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import SectionBackground from './components/SectionBackground';
import ParticleBackground from './components/ParticleBackground';
import Achievements from './components/Achievements';

import './App.css';
import './index.css';

function App() {
  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        background: '#1a1a1a',
        overflowX: 'hidden'
      }}
    >
      {/* Background Canvas */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0
        }}
      >
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={null}>
            <ParticleBackground />
          </Suspense>
        </Canvas>
      </div>
      
      <Navbar />
      <main
        style={{
          position: 'relative',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'stretch'
        }}
      >
        {/* Hero Section */}
        <section
          id="home"
          style={{
            position: 'relative',
            minHeight: '100vh',
            width: '100%',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Hero />
        </section>

        {/* Other Sections */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0'
          }}
        >
          <SectionBackground id="about">
            <About />
          </SectionBackground>

          <SectionBackground id="experience">
            <Experience />
          </SectionBackground>

          <SectionBackground id="projects">
            <Projects />
          </SectionBackground>

          <SectionBackground id="certifications">
            <Certifications />
          </SectionBackground>
          <SectionBackground id="achievements">
            <Achievements />
          </SectionBackground>

          <SectionBackground id="contact">
            <Contact />
          </SectionBackground>
        </div>
      </main>
    </div>
  );
}

export default App;
