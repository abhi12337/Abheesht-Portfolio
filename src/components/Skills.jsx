import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  SiReact, 
  SiJavascript, 
  SiDotnet, 
  SiGo, 
  SiNodedotjs, 
  SiMysql,
  SiPython,
  SiDocker,
  SiGit,
  SiHtml5,
  SiCss3,
  SiTypescript
} from 'react-icons/si';
import './Skills.css';

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const skills = [
    { name: 'React', icon: SiReact, color: '#61DAFB', level: 90 },
    { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', level: 95 },
    { name: '.NET', icon: SiDotnet, color: '#512BD4', level: 85 },
    { name: 'Golang', icon: SiGo, color: '#00ADD8', level: 80 },
    { name: 'Node.js', icon: SiNodedotjs, color: '#339933', level: 88 },
    { name: 'MySQL', icon: SiMysql, color: '#4479A1', level: 85 },
    { name: 'Python', icon: SiPython, color: '#3776AB', level: 82 },
    { name: 'Docker', icon: SiDocker, color: '#2496ED', level: 78 },
    { name: 'Git', icon: SiGit, color: '#F05032', level: 90 },
    { name: 'HTML5', icon: SiHtml5, color: '#E34F26', level: 95 },
    { name: 'CSS3', icon: SiCss3, color: '#1572B6', level: 92 },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', level: 87 }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            My <span className="gradient-text">Skills</span>
          </h2>
          
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20, rotateY: 90 }}
                animate={inView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ 
                  scale: 1.08, 
                  rotateY: 10,
                  rotateX: 5,
                  boxShadow: `0 20px 50px ${skill.color}40`,
                  transition: { duration: 0.3 }
                }}
                className="skill-card card"
                style={{ perspective: "1000px" }}
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 3,
                    delay: index * 0.2,
                    ease: "easeInOut" 
                  }}
                >
                  <skill.icon className="skill-icon" style={{ color: skill.color }} />
                </motion.div>
                <h3>{skill.name}</h3>
                <div className="skill-bar">
                  <motion.div
                    className="skill-progress"
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${skill.level}%` } : {}}
                    transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
                    whileHover={{ 
                      boxShadow: `0 0 20px ${skill.color}`,
                    }}
                    style={{ 
                      background: `linear-gradient(135deg, ${skill.color} 0%, #764ba2 100%)` 
                    }}
                  />
                </div>
                <motion.span 
                  className="skill-level"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: index * 0.1 + 1.3 }}
                >
                  {skill.level}%
                </motion.span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
