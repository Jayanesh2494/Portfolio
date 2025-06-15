import { motion } from 'framer-motion';
import { 
  SiReact, 
  SiTypescript, 
  SiNodedotjs, 
  SiPython, 
  SiDocker,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiGit,
  SiTailwindcss
} from 'react-icons/si';
import { FaAws } from 'react-icons/fa';

const SkillIcons = () => {
  const skills = [
    { name: 'React', color: '#61DAFB', icon: SiReact },
    { name: 'TypeScript', color: '#3178C6', icon: SiTypescript },
    { name: 'JavaScript', color: '#F7DF1E', icon: SiJavascript },
    { name: 'Node.js', color: '#339933', icon: SiNodedotjs },
    { name: 'Python', color: '#3776AB', icon: SiPython },
    { name: 'HTML5', color: '#E34F26', icon: SiHtml5 },
    { name: 'CSS3', color: '#1572B6', icon: SiCss3 },
    { name: 'MongoDB', color: '#47A248', icon: SiMongodb },
    { name: 'AWS', color: '#FF9900', icon: FaAws },
    { name: 'Docker', color: '#2496ED', icon: SiDocker },
    { name: 'Git', color: '#F05032', icon: SiGit },
    { name: 'Tailwind', color: '#06B6D4', icon: SiTailwindcss }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      y: 20,
      opacity: 0,
      scale: 0.8
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    },
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
        gap: '2rem',
        padding: '2rem',
        maxWidth: '1200px',
        margin: '0 auto'
      }}
    >
      {skills.map((skill) => {
        const Icon = skill.icon;
        return (
          <motion.div
            key={skill.name}
            variants={itemVariants}
            whileHover="hover"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.5rem',
              cursor: 'pointer'
            }}
          >
            <motion.div
              style={{
                fontSize: '3rem',
                color: skill.color,
                filter: 'drop-shadow(0 0 8px rgba(255, 255, 255, 0.1))',
                padding: '1rem',
                borderRadius: '12px',
                background: 'rgba(255, 255, 255, 0.05)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '80px',
                height: '80px'
              }}
              whileHover={{
                boxShadow: `0 0 20px ${skill.color}40`,
                borderColor: `${skill.color}40`
              }}
            >
              <Icon />
            </motion.div>
            <motion.span
              style={{
                color: '#fff',
                fontSize: '0.9rem',
                textAlign: 'center',
                opacity: 0.8
              }}
              whileHover={{ opacity: 1 }}
            >
              {skill.name}
            </motion.span>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default SkillIcons; 