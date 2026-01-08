import React from 'react';
import { motion } from 'framer-motion';
import './FloatingShapes.css';

export default function FloatingShapes() {
  const shapes = [
    { size: 60, left: '10%', top: '20%', delay: 0, duration: 8 },
    { size: 40, left: '80%', top: '10%', delay: 1, duration: 10 },
    { size: 80, left: '15%', top: '70%', delay: 2, duration: 12 },
    { size: 50, left: '85%', top: '60%', delay: 1.5, duration: 9 },
    { size: 70, left: '50%', top: '40%', delay: 0.5, duration: 11 },
    { size: 45, left: '70%', top: '80%', delay: 2.5, duration: 10 },
  ];

  return (
    <div className="floating-shapes-container">
      {shapes.map((shape, index) => (
        <motion.div
          key={index}
          className="floating-shape"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.left,
            top: shape.top,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
