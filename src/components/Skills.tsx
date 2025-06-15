
import SkillModel from './SkillModel';
import './skills.css';

const skills = [
    { name: 'React' },
    { name: 'Node.js' },
    { name: 'TypeScript' },
    // Add more skills as needed
];

const Skills = () => {
    return (
        <section className="skills-section">
            <h2>My Skills</h2>
            <div className="skills-grid">
                {skills.map((skill) => (
                    <div key={skill.name} className="skill-item">
                        <div className="skill-model-container">
                            <SkillModel />
                        </div>
                        <h3>{skill.name}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills; 