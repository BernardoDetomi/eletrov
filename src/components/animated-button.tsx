'use client';

import { motion } from 'framer-motion';

interface AnimatedButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  delay?: number;
  variant?: 'primary' | 'secondary';
}

export default function AnimatedButton({
  children,
  onClick,
  className = '',
  delay = 0,
  variant = 'primary',
}: AnimatedButtonProps) {
  const baseClasses = variant === 'primary' 
    ? 'bg-gradient-to-r from-blue-400 to-purple-500 text-white'
    : 'bg-transparent border-2 border-white text-white';

  return (
    <motion.button
      className={`font-semibold py-3 px-8 rounded-lg relative overflow-hidden group ${baseClasses} ${className}`}
      onClick={onClick}
      initial={{ opacity: 0, y: 50, scale: 0.8 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay,
        type: 'spring',
        stiffness: 100,
      }}
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 10px 25px rgba(139, 92, 246, 0.3)',
      }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100"
        initial={false}
        transition={{ duration: 0.3 }}
      />
      
      <motion.div
        className="absolute inset-0 bg-white opacity-0"
        animate={{
          x: ['-100%', '100%'],
          opacity: [0, 0.1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 3,
          ease: 'easeInOut',
        }}
      />
      
      <motion.span
        className="relative z-10"
        initial={{ y: 0 }}
        whileHover={{ y: -2 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.span>
    </motion.button>
  );
}
