import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { FaTrophy, FaMedal, FaAward, FaStar } from 'react-icons/fa';

// Import achievement images
import dataSprintImage from '../assets/achievements/datasprint.jpg';
import hackSummitImage from '../assets/achievements/hacksummit.jpg';
import sihImage from '../assets/achievements/sih.jpg';
import hackmageddonImage from '../assets/achievements/hackmageddon.jpg';
import makeathonImage from '../assets/achievements/makeathon.jpg';
import designThinkingImage from '../assets/achievements/designthinking.jpg';

const Achievements = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.achievement-card', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.achievement-card',
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse'
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const achievements = [
    {
      icon: <FaTrophy />,
      title: 'Data Sprint 2.0',
      description: 'Winner in the Data Sprint 2.0 Hackathon, showcasing excellence in data science and analytics.',
      year: '2024',
      image: dataSprintImage
    },
    {
      icon: <FaMedal />,
      title: 'Hack Summit 5.0',
      description: 'Received Special Prize for innovative solution in the Hack Summit 5.0 Hackathon.',
      year: '2024',
      image: hackSummitImage
    },
    {
      icon: <FaAward />,
      title: 'Smart India Hackathon',
      description: 'Achieved Top 25 position in the Internal Round of Smart India Hackathon.',
      year: '2024',
      image: sihImage
    },
    {
      icon: <FaStar />,
      title: 'Hackmageddon',
      description: 'Awarded Special Prize for outstanding performance in the Hackmageddon Hackathon.',
      year: '2024',
      image: hackmageddonImage
    },
    {
      icon: <FaTrophy />,
      title: 'Make-a-Thon 6.0',
      description: 'Secured Runner-up position in the Make-a-Thon 6.0 competition.',
      year: '2024',
      image: makeathonImage
    },
    {
      icon: <FaMedal />,
      title: 'Design Thinking Competition',
      description: 'Won 2nd Prize in the Design Thinking Competition, demonstrating innovative problem-solving skills.',
      year: '2024',
      image: designThinkingImage
    }
  ];

  return (
    <div ref={containerRef} style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      <h2 style={{ 
        color: '#915EFF', 
        fontSize: '2rem', 
        marginBottom: '1.5rem',
        fontWeight: 'bold'
      }}>
       
      </h2>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
        gap: '2rem',
        padding: '1rem'
      }}>
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            className="achievement-card"
            whileHover={{ y: -10 }}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '16px',
              padding: '2rem',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Achievement Image */}
            <div style={{
              width: '100%',
              height: '200px',
              marginBottom: '1.5rem',
              borderRadius: '12px',
              overflow: 'hidden',
              position: 'relative',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <img
                src={achievement.image}
                alt={achievement.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease'
                }}
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/400x200?text=Achievement+Image';
                }}
              />
            </div>

            {/* Icon */}
            <div style={{
              fontSize: '2.5rem',
              color: '#915EFF',
              marginBottom: '1rem',
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: 'rgba(0, 0, 0, 0.5)',
              borderRadius: '50%',
              padding: '0.5rem',
              backdropFilter: 'blur(5px)'
            }}>
              {achievement.icon}
            </div>

            {/* Content */}
            <h3 style={{ 
              color: '#fff', 
              fontSize: '1.5rem',
              marginBottom: '0.5rem',
              fontWeight: 'bold'
            }}>
              {achievement.title}
            </h3>
            <p style={{ 
              color: '#ccc', 
              fontSize: '1rem',
              marginBottom: '1rem',
              lineHeight: '1.5'
            }}>
              {achievement.description}
            </p>
            <span style={{ 
              color: '#915EFF', 
              fontSize: '0.9rem',
              fontWeight: 'bold',
              background: 'rgba(145, 94, 255, 0.1)',
              padding: '0.5rem 1rem',
              borderRadius: '20px'
            }}>
              {achievement.year}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Achievements; 