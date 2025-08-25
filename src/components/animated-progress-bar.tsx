'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface AnimatedProgressBarProps {
  targetProgress: number;
  className?: string;
  duration?: number;
  delay?: number;
}

export default function AnimatedProgressBar({
  targetProgress,
  className = '',
  duration = 2,
  delay = 0.5,
}: AnimatedProgressBarProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(targetProgress);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [targetProgress, delay]);

  return (
    <div className={`w-full max-w-md mx-auto mb-8 ${className}`}>
      <motion.div
        className="flex justify-between text-white text-sm mb-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: delay }}
      >
        <span>0%</span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 0.5 }}
        >
          100%
        </motion.span>
      </motion.div>
      
      <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
        <motion.div
          className="bg-gradient-to-r from-blue-400 to-purple-500 h-full rounded-full relative"
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          transition={{
            duration,
            delay: delay + 0.3,
            ease: 'easeOut'
          }}
        >
          <motion.div
            className="absolute inset-0 bg-white opacity-30 rounded-full"
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 1.5,
              delay: delay + duration,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      </div>
      
      <motion.div
        className="text-center text-white text-sm mt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay + duration + 0.5 }}
      >
        {progress}% concluído
      </motion.div>
    </div>
  );
}
