'use client';

import { motion } from 'framer-motion';

export default function FloatingParticles() {
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    delay: Math.random() * 8,
    duration: Math.random() * 15 + 10,
    x: Math.random() * 100,
    y: Math.random() * 100,
    color: Math.random() > 0.5 ? 'blue' : 'purple',
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute rounded-full ${
            particle.color === 'blue' 
              ? 'bg-blue-400/30' 
              : 'bg-purple-400/30'
          }`}
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -100, 0, 100, 0],
            x: [0, 50, -30, 20, 0],
            scale: [1, 1.5, 0.8, 1.2, 1],
            opacity: [0.3, 0.8, 0.4, 0.9, 0.3],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
