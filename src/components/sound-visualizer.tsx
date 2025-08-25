'use client';

import { motion } from 'framer-motion';

interface SoundVisualizerProps {
  className?: string;
  barCount?: number;
}

export default function SoundVisualizer({ className = '', barCount = 5 }: SoundVisualizerProps) {
  const bars = Array.from({ length: barCount }, (_, i) => i);

  return (
    <div className={`flex items-end space-x-1 ${className}`}>
      {bars.map((bar) => (
        <motion.div
          key={bar}
          className="w-1 bg-gradient-to-t from-blue-400 to-purple-500 rounded-full"
          animate={{
            height: [8, 24, 12, 32, 16, 8],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            delay: bar * 0.1,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
