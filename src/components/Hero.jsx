import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import Scene3D from './Scene3D';
import './Hero.css';

export default function Hero() {
  const controls = useAnimation();
  
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };
  
  const name = "Abheesht Tripathi";
  const title = "Full Stack Developer";

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="hero-title"
          >
            Hi, I'm{' '}
            <motion.span 
              className="gradient-text glow"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
            >
              {name.split('').map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.span>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="hero-subtitle"
          >
            {title.split('').map((char, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 2 + index * 0.03 }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="hero-description"
          >
            Passionate software engineer specializing in React, JavaScript, .NET, 
            Golang, Node.js, and MySQL. Building scalable solutions with modern technologies.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5 }}
            className="hero-buttons"
          >
            <motion.button 
              className="btn btn-primary" 
              onClick={scrollToContact}
              whileHover={{ 
                scale: 1.05, 
                boxShadow: "0 15px 35px rgba(102, 126, 234, 0.5)",
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
              animate={{ 
                y: [0, -10, 0]
              }}
              transition={{ 
                y: { 
                  repeat: Infinity, 
                  duration: 2, 
                  ease: "easeInOut" 
                },
                scale: { duration: 0.2 }
              }}
            >
              Get In Touch
            </motion.button>
            <motion.a 
              href="#experience" 
              className="btn btn-outline"
              whileHover={{ 
                scale: 1.05,
                borderColor: "#667eea",
                boxShadow: "0 0 20px rgba(102, 126, 234, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="hero-3d"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Scene3D />
        </motion.div>
      </div>
    </section>
  );
}
