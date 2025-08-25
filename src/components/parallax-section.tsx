'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxSectionProps {
  children: React.ReactNode;
  className?: string;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
}

export default function ParallaxSection({
  children,
  className = '',
  speed = 0.5,
  direction = 'up',
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // Definir as transformações diretamente no componente
  const transformUp = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);
  const transformDown = useTransform(scrollYProgress, [0, 1], [-100 * speed, 100 * speed]);
  const transformLeft = useTransform(scrollYProgress, [0, 1], [100 * speed, -100 * speed]);
  const transformRight = useTransform(scrollYProgress, [0, 1], [-100 * speed, 100 * speed]);

  // Selecionar a transformação baseada na direção
  const getTransform = () => {
    switch (direction) {
      case 'up':
        return transformUp;
      case 'down':
        return transformDown;
      case 'left':
        return transformLeft;
      case 'right':
        return transformRight;
      default:
        return transformUp;
    }
  };

  const transform = getTransform();

  const getStyle = () => {
    if (direction === 'left' || direction === 'right') {
      return { x: transform };
    }
    return { y: transform };
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={getStyle()}
    >
      {children}
    </motion.div>
  );
}
