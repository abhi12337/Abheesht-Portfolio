import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaGraduationCap, FaUniversity } from 'react-icons/fa';
import './Education.css';

export default function Education() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const education = [
    {
      degree: 'Master of Technology',
      field: 'Computer Engineering',
      institution: 'National Institute of Technology (NIT) Kurukshetra',
      location: 'Kurukshetra, India',
      period: '2022 - 2024',
      icon: FaGraduationCap
    },
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science & Engineering',
      institution: 'NSUT West Campus (Netaji Subhas University of Technology)',
      location: 'Delhi, India',
      period: '2017 - 2021',
      icon: FaUniversity
    }
  ];

  return (
    <section id="education" className="education">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="gradient-text">Education</span>
          </h2>
          
          <div className="education-grid">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, rotateX: -15 }}
                animate={inView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6, type: "spring" }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: 5,
                  boxShadow: "0 25px 60px rgba(102, 126, 234, 0.4)",
                  transition: { duration: 0.3 }
                }}
                className="education-card card"
                style={{ perspective: "1000px" }}
              >
                <motion.div 
                  className="education-icon"
                  animate={{ 
                    y: [0, -15, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    repeat: Infinity, 
                    duration: 3,
                    delay: index * 0.5,
                    ease: "easeInOut" 
                  }}
                  whileHover={{ 
                    scale: 1.2, 
                    rotate: 360,
                    transition: { duration: 0.6 }
                  }}
                >
                  <edu.icon />
                </motion.div>
                <div className="education-content">
                  <motion.h3
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: index * 0.2 + 0.3 }}
                  >
                    {edu.degree}
                  </motion.h3>
                  <motion.h4 
                    className="gradient-text"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: index * 0.2 + 0.4 }}
                  >
                    {edu.field}
                  </motion.h4>
                  <motion.p 
                    className="institution"
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ delay: index * 0.2 + 0.5 }}
                  >
                    {edu.institution}
                  </motion.p>
                  <motion.div 
                    className="education-meta"
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.2 + 0.6 }}
                  >
                    <span className="location">{edu.location}</span>
                    <span className="period">{edu.period}</span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
