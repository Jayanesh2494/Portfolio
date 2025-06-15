import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { FaAward, FaExternalLinkAlt } from 'react-icons/fa';

// Import certification images
import awsImage from '../assets/certifications/aws.png';
import azureImage from '../assets/certifications/azure.png';
import oracleImage from '../assets/certifications/oracle.png';
import gcpImage from '../assets/certifications/google.png';

const Certifications = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cert-card', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.cert-card',
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse'
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const certifications = [
    {
      title: 'AWS Cloud Practitioner',
      issuer: 'Amazon Web Services',
      date: '2024',
      credentialId: 'AWS-CP',
      link: 'https://www.credly.com/earner/earned/badge/a084e622-0e30-4906-8dd3-bb6fb3ce75ac',
      description: 'Foundational level certification that validates cloud fluency and foundational AWS knowledge',
      skills: ['Cloud Concepts', 'AWS Services', 'Security', 'Architecture', 'Billing & Pricing'],
      image: awsImage
    },
    {
      title: 'Microsoft Azure AI Fundamentals (AI-900)',
      issuer: 'Microsoft',
      date: '2024',
      credentialId: 'AI-900',
      link: 'https://learn.microsoft.com/en-us/users/jayaneshd-2494/credentials/e77f452f033d76b7',
      description: 'Fundamental knowledge of machine learning and artificial intelligence concepts and related Microsoft Azure services',
      skills: ['AI Concepts', 'Machine Learning', 'Computer Vision', 'Natural Language Processing', 'Azure AI Services'],
      image: azureImage
    },
    {
      title: 'Oracle Cloud Infrastructure AI Certified Foundations',
      issuer: 'Oracle',
      date: '2024',
      credentialId: 'OCI-AI',
      link: 'https://catalog-education.oracle.com/ords/certview/sharebadge?id=A8ECB5013F6ED0BF5D6CE96A5F97938AFF53C557E6F5A75D34A8861D91FE439A',
      description: 'Foundational knowledge of Oracle Cloud Infrastructure AI services and machine learning concepts',
      skills: ['OCI AI Services', 'Machine Learning', 'Data Science', 'AI Infrastructure', 'Cloud AI Solutions'],
      image: oracleImage
    },
    {
      title: 'Google Cloud Computing Foundations',
      issuer: 'Google Cloud',
      date: '2024',
      credentialId: 'GCP-Foundations',
      link: 'https://www.credly.com/earner/earned/badge/255a4f2c-b596-49f2-bd9e-cd7fb04370c2',
      description: 'Foundational certification that validates understanding of Google Cloud core concepts and services',
      skills: ['Cloud Computing', 'Google Cloud Platform', 'Cloud Architecture', 'Security', 'Data & Analytics'],
      image: gcpImage
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
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            className="cert-card"
            whileHover={{ y: -10 }}
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '16px',
              padding: '2rem',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Gradient Border Effect */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: 'linear-gradient(to right, #915EFF, #915EFF)',
                opacity: 0.8
              }}
            />

            {/* Certification Image */}
            <div style={{
              width: '100%',
              height: '250px',
              marginBottom: '1.5rem',
              borderRadius: '12px',
              overflow: 'hidden',
              position: 'relative',
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '1rem'
            }}>
              <img
                src={cert.image}
                alt={cert.title}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  transition: 'transform 0.3s ease',
                  filter: 'drop-shadow(0 0 10px rgba(145, 94, 255, 0.2))'
                }}
                onError={(e) => {
                  e.currentTarget.src = 'https://via.placeholder.com/400x200?text=Certification+Image';
                }}
              />
            </div>

            {/* Award Icon */}
            <div style={{ 
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              color: '#3B82F6',
              fontSize: '1.5rem'
            }}>
              <FaAward />
            </div>

            {/* Content */}
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ 
                color: '#fff', 
                fontSize: '1.3rem', 
                marginBottom: '0.5rem',
                fontWeight: 'bold'
              }}>
                {cert.title}
              </h3>
              <p style={{ 
                color: '#915EFF', 
                fontSize: '1rem',
                marginBottom: '0.5rem'
              }}>
                {cert.issuer}
              </p>
              <p style={{ 
                color: '#915EFF', 
                fontSize: '0.9rem',
                marginBottom: '1rem'
              }}>
                {cert.date}
              </p>
              <p style={{ 
                color: '#ccc', 
                fontSize: '0.9rem',
                marginBottom: '1rem',
                lineHeight: '1.5'
              }}>
                {cert.description}
              </p>
            </div>

            {/* Skills */}
            <div style={{ 
              display: 'flex', 
              flexWrap: 'wrap', 
              gap: '0.5rem',
              marginBottom: '1.5rem'
            }}>
              {cert.skills.map((skill, i) => (
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
                  {skill}
                </span>
              ))}
            </div>

            {/* Footer */}
            <div style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              alignItems: 'center',
              borderTop: '1px solid rgba(255, 255, 255, 0.1)',
              paddingTop: '1rem'
            }}>
              <span style={{ 
                color: '#ccc', 
                fontSize: '0.8rem'
              }}>
                ID: {cert.credentialId}
              </span>
              <motion.a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                style={{
                  color: '#915EFF',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  textDecoration: 'none',
                  fontSize: '0.9rem'
                }}
              >
                Verify
                <FaExternalLinkAlt />
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Certifications; 