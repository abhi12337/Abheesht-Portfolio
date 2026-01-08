import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaBriefcase } from 'react-icons/fa';
import './Experience.css';

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const experiences = [
    {
      company: 'Mankind Pharma',
      position: 'Software Engineer',
      location: 'Delhi, Delhi',
      period: 'Jun 2025 – Present',
      achievements: [
        'Developed a comprehensive DCR Report system that enables admins to view detailed user reports, significantly improving decision-making and saving operational costs.',
        'Implemented server-side table pagination, enhancing DCR report performance and reducing load time for large datasets.',
        'Improved backend code quality by achieving 80% unit test coverage through SonarQube analysis. Implemented test suites using Xunit and integrated quality gates into the CI/CD pipeline.',
        'Designed and implemented the entire frontend for the mobile application, ensuring smooth UI/UX and responsive design across devices.',
        'Built and released the Android production build for the React Native app, and successfully migrated the application from React Native 0.68 to 0.76 and from Android 13 to Android 15.',
        'Handled the database architecture and queries related to inventory management, optimizing performance and enhancing user experience by reducing query latency.',
        'Built an AI-powered Agent using the LangChain framework to automate AMS workflows, including seminar creation, review management, and payment confirmation.'
      ]
    },
    {
      company: 'NXP Semiconductors',
      position: 'Software Engineer',
      location: 'Pune, Maharashtra',
      period: 'Jul 2023 – Jun 2024',
      achievements: [
        'Developed and maintained scalable Python-based automation frameworks, improving test execution efficiency by 30%.',
        'Containerized a Python-based application using Docker, and streamlined deployment with Docker Compose, reducing deployment issues by 40%.',
        'Configured a CI/CD pipeline (GitLab CI/GitHub Actions) for Python services, cutting deployment time by 40%.',
        'Improved test coverage by 30%, reducing production bugs by 25% through extensive testing and edge case analysis.',
        'Optimized WLAN firmware, reducing latency by 15% and increasing reliability by 20% via performance tuning.'
      ]
    },
    {
      company: 'KKDTECHSOFT Private Limited',
      position: 'Software Engineer',
      location: 'Remote',
      period: 'Jul 2019 – Aug 2019',
      achievements: [
        'Developed and tested a web application using HTML, CSS, and JavaScript, increasing user engagement by 35%.',
        'Debugged and resolved front-end and back-end issues, improving application stability and reducing errors by 25%.',
        'Implemented interactive features that improved page load speed by 20% and enhanced user experience, leading to a 30% increase in session duration.'
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Work <span className="gradient-text">Experience</span>
          </h2>
          
          <div className="timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50, scale: 0.8 }}
                animate={inView ? { opacity: 1, x: 0, scale: 1 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6, type: "spring" }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="timeline-item"
              >
                <motion.div 
                  className="timeline-content card"
                  whileHover={{ 
                    boxShadow: "0 20px 60px rgba(102, 126, 234, 0.4)",
                  }}
                >
                  <motion.div 
                    className="timeline-icon"
                    animate={{ 
                      rotate: [0, 360],
                      scale: [1, 1.2, 1]
                    }}
                    transition={{ 
                      rotate: { repeat: Infinity, duration: 20, ease: "linear" },
                      scale: { repeat: Infinity, duration: 2, ease: "easeInOut" }
                    }}
                    whileHover={{ scale: 1.3 }}
                  >
                    <FaBriefcase />
                  </motion.div>
                  <div className="timeline-header">
                    <motion.h3
                      initial={{ opacity: 0, y: 10 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: index * 0.2 + 0.3 }}
                    >
                      {exp.position}
                    </motion.h3>
                    <motion.h4 
                      className="gradient-text"
                      initial={{ opacity: 0, y: 10 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: index * 0.2 + 0.4 }}
                    >
                      {exp.company}
                    </motion.h4>
                    <motion.div 
                      className="timeline-meta"
                      initial={{ opacity: 0 }}
                      animate={inView ? { opacity: 1 } : {}}
                      transition={{ delay: index * 0.2 + 0.5 }}
                    >
                      <span className="timeline-period">{exp.period}</span>
                      <span className="timeline-location">{exp.location}</span>
                    </motion.div>
                  </div>
                  <ul className="timeline-achievements">
                    {exp.achievements.map((achievement, i) => (
                      <motion.li 
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.2 + 0.6 + i * 0.1 }}
                        whileHover={{ x: 5, color: "#667eea" }}
                      >
                        {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
