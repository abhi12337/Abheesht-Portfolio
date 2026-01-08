import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaEnvelope, FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import './Contact.css';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const socialLinks = [
    { icon: FaEnvelope, label: 'Email', href: 'mailto:your.email@example.com', color: '#EA4335' },
    { icon: FaLinkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/yourprofile', color: '#0A66C2' },
    { icon: FaGithub, label: 'GitHub', href: 'https://github.com/yourusername', color: '#181717' },
    { icon: FaTwitter, label: 'Twitter', href: 'https://twitter.com/yourusername', color: '#1DA1F2' }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          
          <div className="contact-content">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="contact-info"
            >
              <h3>Let's Connect!</h3>
              <p>
                I'm always open to discussing new projects, creative ideas, or opportunities 
                to be part of your vision. Feel free to reach out through any of the following channels.
              </p>
              
              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link card"
                    initial={{ opacity: 0, x: -30, rotate: -10 }}
                    animate={inView ? { opacity: 1, x: 0, rotate: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5, type: "spring" }}
                    whileHover={{ 
                      scale: 1.1,
                      x: 10,
                      boxShadow: `0 10px 40px ${social.color}40`,
                      transition: { duration: 0.2 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      animate={{ rotate: [0, 5, -5, 0] }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 2,
                        delay: index * 0.3,
                        ease: "easeInOut" 
                      }}
                    >
                      <social.icon style={{ color: social.color }} />
                    </motion.div>
                    <span>{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="contact-form card"
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Your message..."
                />
              </div>
              
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </motion.form>
          </div>
        </motion.div>
      </div>
      
      <footer className="footer">
        <p>&copy; 2026 Abheesht. All rights reserved.</p>
      </footer>
    </section>
  );
}
