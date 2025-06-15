import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import ParticleBackground from './ParticleBackground';

interface SectionBackgroundProps {
  children: React.ReactNode;
  id: string;
}

const SectionBackground = ({ children, id }: SectionBackgroundProps) => {
  return (
    <section
      id={id}
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        overflow: 'visible',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 0',
        zIndex: 1
      }}
    >
      {/* Particle Background */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0,
          opacity: 0.5
        }}
      >
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={null}>
            <ParticleBackground />
          </Suspense>
        </Canvas>
      </div>

      {/* Content Container */}
      <div
        style={{
          position: 'relative',
          zIndex: 2,
          width: '100%',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '40px'
        }}
      >
        {/* Section Title */}
        <h2
          style={{
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '20px',
            textAlign: 'center',
            background: 'linear-gradient(to right, #3B82F6, #10B981)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            textTransform: 'capitalize'
          }}
        >
          {id}
        </h2>

        {/* Section Content */}
        <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '40px'
          }}
        >
          {children}
        </div>
      </div>
    </section>
  );
};

export default SectionBackground; 