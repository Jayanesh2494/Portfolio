import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SkillIcons from './SkillIcons';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-content', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.about-content',
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse'
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      <motion.div
        className="about-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          textAlign: 'center',
          marginBottom: '3rem'
        }}
      >
        <h2 style={{ 
          color: '#915EFF', 
          fontSize: '2rem', 
          marginBottom: '1.5rem',
          fontWeight: 'bold'
        }}>
          About Me
        </h2>
        <p style={{ fontSize: '1.1rem', color: '#ccc', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
          I am a passionate full-stack developer with expertise in building modern web applications.
          With a strong foundation in both frontend and backend technologies, I create seamless
          user experiences and robust server-side solutions.
        </p>
      </motion.div>

      <SkillIcons />
    </div>
  );
};

export default About; 