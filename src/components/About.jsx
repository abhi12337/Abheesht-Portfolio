import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './About.css';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });
  
  const [counters, setCounters] = useState({ years: 0, projects: 0, tech: 0 });
  
  useEffect(() => {
    if (inView) {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;
      
      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        setCounters({
          years: Math.floor(3 * progress),
          projects: Math.floor(10 * progress),
          tech: Math.floor(5 * progress)
        });
        
        if (step >= steps) clearInterval(timer);
      }, interval);
      
      return () => clearInterval(timer);
    }
  }, [inView]);

  return (
    <section id="about" className="about">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          
          <div className="about-content">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="about-text"
            >
              <p>
                I'm a passionate Full Stack Developer with a Master's degree in Computer Engineering 
                from NIT Kurukshetra. With experience at leading companies like Mankind Pharma and 
                NXP Semiconductors, I specialize in building scalable web applications and robust backend systems.
              </p>
              <p>
                My expertise spans across modern frontend frameworks like React and React Native, 
                backend technologies including .NET, Node.js, and Golang, along with database management 
                using MySQL. I'm committed to writing clean, efficient code and delivering exceptional user experiences.
              </p>
              <p>
                Currently working at Mankind Pharma, I've successfully developed comprehensive DCR 
                Report systems, implemented AI-powered automation using LangChain, and migrated 
                critical applications to the latest technologies, ensuring optimal performance and maintainability.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="about-stats"
            >
              <motion.div 
                className="stat-card card"
                whileHover={{ 
                  scale: 1.05, 
                  rotate: [0, 2, -2, 0],
                  boxShadow: "0 15px 40px rgba(102, 126, 234, 0.3)"
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3 
                  className="gradient-text"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                >
                  {counters.years}+
                </motion.h3>
                <p>Years Experience</p>
              </motion.div>
              <motion.div 
                className="stat-card card"
                whileHover={{ 
                  scale: 1.05, 
                  rotate: [0, 2, -2, 0],
                  boxShadow: "0 15px 40px rgba(102, 126, 234, 0.3)"
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3 
                  className="gradient-text"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 2, delay: 0.2, ease: "easeInOut" }}
                >
                  {counters.projects}+
                </motion.h3>
                <p>Projects Completed</p>
              </motion.div>
              <motion.div 
                className="stat-card card"
                whileHover={{ 
                  scale: 1.05, 
                  rotate: [0, 2, -2, 0],
                  boxShadow: "0 15px 40px rgba(102, 126, 234, 0.3)"
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.h3 
                  className="gradient-text"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ repeat: Infinity, duration: 2, delay: 0.4, ease: "easeInOut" }}
                >
                  {counters.tech}+
                </motion.h3>
                <p>Technologies Mastered</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
