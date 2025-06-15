import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const Experience = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.timeline-item', {
        x: -100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.timeline-item',
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse'
        }
      });
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  const experiences = [
    {
      title: 'Senior Full Stack Developer',
      company: 'Tech Innovations Inc.',
      period: '2022 - Present',
      description: [
        'Led the development of a cloud-native microservices architecture',
        'Implemented CI/CD pipelines reducing deployment time by 60%',
        'Mentored junior developers and conducted code reviews',
        'Optimized application performance resulting in 40% faster load times'
      ],
      technologies: ['React', 'Node.js', 'AWS', 'Docker', 'MongoDB']
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Solutions Ltd.',
      period: '2020 - 2022',
      description: [
        'Developed and maintained multiple client-facing web applications',
        'Collaborated with UX designers to implement responsive designs',
        'Integrated third-party APIs and payment gateways',
        'Reduced bug reports by 30% through improved testing practices'
      ],
      technologies: ['JavaScript', 'Python', 'PostgreSQL', 'Git']
    },
    {
      title: 'Frontend Developer',
      company: 'WebCraft Studios',
      period: '2018 - 2020',
      description: [
        'Built responsive and interactive user interfaces',
        'Implemented state management using Redux',
        'Worked closely with backend team for API integration',
        'Improved website accessibility and SEO'
      ],
      technologies: ['React', 'TypeScript', 'CSS3', 'HTML5']
    }
  ];

  return (
    <div ref={timelineRef} style={{ width: '100%', maxWidth: '1000px', margin: '0 auto', padding: '2rem' }}>
      <div style={{ position: 'relative' }}>
        {/* Timeline line */}
        <div
          style={{
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '2px',
            height: '100%',
            background: 'linear-gradient(to bottom, #915EFF, #915EFF)',
            opacity: 0.3
          }}
        />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="timeline-item"
            style={{
              position: 'relative',
              marginBottom: '4rem',
              display: 'flex',
              justifyContent: index % 2 === 0 ? 'flex-start' : 'flex-end',
              padding: '0 2rem'
            }}
          >
            {/* Timeline dot */}
            <div
              style={{
                position: 'absolute',
                left: '50%',
                transform: 'translateX(-50%)',
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                background: 'linear-gradient(45deg, #915EFF, #915EFF)',
                boxShadow: '0 0 10px rgba(59, 130, 246, 0.5)',
                zIndex: 1
              }}
            />

            {/* Content card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              style={{
                width: '45%',
                background: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                padding: '1.5rem',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
              }}
            >
              <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                {exp.title}
              </h3>
              <h4 style={{ color: '#915EFF', fontSize: '1.1rem', marginBottom: '1rem' }}>
                {exp.company}
              </h4>
              <p style={{ color: '#915EFF', fontSize: '0.9rem', marginBottom: '1rem' }}>
                {exp.period}
              </p>
              <ul style={{ 
                listStyle: 'none', 
                padding: 0,
                marginBottom: '1rem'
              }}>
                {exp.description.map((item, i) => (
                  <li 
                    key={i}
                    style={{
                      color: '#ccc',
                      marginBottom: '0.5rem',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.5rem'
                    }}
                  >
                    <span style={{ color: '#915EFF' }}>•</span>
                    {item}
                  </li>
                ))}
              </ul>
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '0.5rem',
                marginTop: '1rem'
              }}>
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    style={{
                      background: 'rgba(145, 94, 255, 0.1)',
                      color: '#915EFF',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '20px',
                      fontSize: '0.8rem'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
      {/* <h2 style={{ 
        color: '#915EFF', 
        fontSize: '2rem', 
        marginBottom: '1.5rem',
        fontWeight: 'bold'
      }}>
        Work Experience
      </h2> */}
    </div>
  );
};

export default Experience; 