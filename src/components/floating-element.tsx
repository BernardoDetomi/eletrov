'use client';

import { motion } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';

interface FloatingElementProps {
  children: ReactNode;
  className?: string;
  amplitude?: number;
  duration?: number;
  delay?: number;
}

export default function FloatingElement({
  children,
  className = '',
  amplitude = 10,
  duration = 3,
  delay = 0,
}: FloatingElementProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const adjustedAmplitude = isMobile ? amplitude * 0.6 : amplitude;

  return (
    <motion.div
      className={className}
      animate={{
        y: [-adjustedAmplitude, adjustedAmplitude, -adjustedAmplitude],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {children}
    </motion.div>
  );
}
