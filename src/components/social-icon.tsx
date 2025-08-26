'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SocialIconProps {
  href: string;
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function SocialIcon({
  href,
  children,
  className = '',
  delay = 0,
}: SocialIconProps) {
  return (
    <motion.a
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={`w-10 h-10 sm:w-12 sm:h-12 border-2 border-white rounded-full flex items-center justify-center text-white relative group ${className}`}
      initial={{ opacity: 0, scale: 0, rotate: -180 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay,
        type: 'spring',
        stiffness: 100,
      }}
      whileHover={{
        scale: 1.1,
        backgroundColor: 'white',
        color: '#1f2937',
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20"
        initial={false}
        animate={{ rotate: 360 }}
        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    </motion.a>
  );
}
