import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { FaGithub, FaExternalLinkAlt, FaCode, FaServer, FaDatabase, FaTools } from 'react-icons/fa';

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.project-card', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.project-card',
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse'
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce platform with real-time inventory management, payment processing, and admin dashboard.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'AWS'],
      features: [
        'Real-time inventory tracking',
        'Secure payment processing',
        'Admin dashboard with analytics',
        'Responsive design'
      ],
      github: 'https://github.com/yourusername/ecommerce',
      live: 'https://ecommerce-demo.com',
      category: 'Full Stack'
    },
    {
      title: 'AI-Powered Task Manager',
      description: 'An intelligent task management application that uses AI to prioritize and organize tasks based on user behavior.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      technologies: ['Python', 'TensorFlow', 'React', 'FastAPI', 'PostgreSQL'],
      features: [
        'AI task prioritization',
        'Natural language processing',
        'Smart notifications',
        'Data visualization'
      ],
      github: 'https://github.com/yourusername/ai-task-manager',
      live: 'https://ai-task-manager.com',
      category: 'AI/ML'
    },
    {
      title: 'Real-time Chat Application',
      description: 'A modern chat application with real-time messaging, file sharing, and video conferencing capabilities.',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      technologies: ['Socket.io', 'React', 'Node.js', 'WebRTC', 'Redis'],
      features: [
        'Real-time messaging',
        'File sharing',
        'Video conferencing',
        'End-to-end encryption'
      ],
      github: 'https://github.com/yourusername/chat-app',
      live: 'https://chat-app-demo.com',
      category: 'Real-time'
    }
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Full Stack':
        return <FaCode />;
      case 'AI/ML':
        return <FaTools />;
      case 'Real-time':
        return <FaServer />;
      default:
        return <FaDatabase />;
    }
  };

  return (
    <div ref={containerRef} style={{ width: '100%', maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
      {/* <h2 style={{ 
        color: '#915EFF', 
        fontSize: '2rem', 
        marginBottom: '1.5rem',
        fontWeight: 'bold'
      }}>
        My Projects
      </h2> */}
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
        gap: '2rem',
        padding: '1rem'
      }}>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ y: -10 }}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '16px',
              overflow: 'hidden',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              position: 'relative',
              cursor: 'pointer'
            }}
            onClick={() => setSelectedProject(selectedProject === index ? null : index)}
          >
            {/* Project Image */}
            <div style={{ 
              height: '200px',
              overflow: 'hidden',
              position: 'relative'
            }}>
              <img 
                src={project.image} 
                alt={project.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease'
                }}
              />
              <div style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'rgba(145, 94, 255, 0.9)',
                color: '#fff',
                padding: '0.5rem 1rem',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.9rem'
              }}>
                {getCategoryIcon(project.category)}
                {project.category}
              </div>
            </div>

            {/* Project Content */}
            <div style={{ padding: '1.5rem' }}>
              <h3 style={{ 
                color: '#fff', 
                fontSize: '1.3rem', 
                marginBottom: '0.5rem',
                fontWeight: 'bold'
              }}>
                {project.title}
              </h3>
              <p style={{ 
                color: '#ccc', 
                fontSize: '0.9rem',
                marginBottom: '1rem',
                lineHeight: '1.5'
              }}>
                {project.description}
              </p>

              {/* Technologies */}
              <div style={{ 
                display: 'flex', 
                flexWrap: 'wrap', 
                gap: '0.5rem',
                marginBottom: '1rem'
              }}>
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    style={{
                      background: 'rgba(59, 130, 246, 0.1)',
                      color: '#3B82F6',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '20px',
                      fontSize: '0.8rem'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div style={{ 
                display: 'flex', 
                gap: '1rem',
                marginTop: '1rem'
              }}>
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  style={{
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    background: 'rgba(255, 255, 255, 0.1)',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px'
                  }}
                >
                  <FaGithub />
                  Code
                </motion.a>
                <motion.a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  style={{
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    background: 'rgba(255, 255, 255, 0.1)',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px'
                  }}
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </motion.a>
              </div>

              {/* Expanded Content */}
              {selectedProject === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  style={{
                    marginTop: '1rem',
                    paddingTop: '1rem',
                    borderTop: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <h4 style={{ 
                    color: '#fff', 
                    fontSize: '1rem',
                    marginBottom: '0.5rem'
                  }}>
                    Key Features:
                  </h4>
                  <ul style={{ 
                    listStyle: 'none',
                    padding: 0,
                    margin: 0
                  }}>
                    {project.features.map((feature, i) => (
                      <li
                        key={i}
                        style={{
                          color: '#ccc',
                          fontSize: '0.9rem',
                          marginBottom: '0.5rem',
                          display: 'flex',
                          alignItems: 'flex-start',
                          gap: '0.5rem'
                        }}
                      >
                        <span style={{ color: '#915EFF' }}>•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects; 