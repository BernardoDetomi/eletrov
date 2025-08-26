'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  originalX: number;
  originalY: number;
}

interface InteractiveBackgroundProps {
  particleCount?: number;
  connectionDistance?: number;
  particleSize?: number;
  particleColor?: string;
  lineColor?: string;
  animationSpeed?: number;
}

export default function InteractiveBackground({
  particleCount = 80,
  connectionDistance = 120,
  particleSize = 2,
  particleColor = 'rgba(139, 92, 246, 0.6)', // Primary color with opacity
  lineColor = 'rgba(139, 92, 246, 0.2)',
  animationSpeed = 0.5,
}: InteractiveBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000, isActive: false });
  const animationRef = useRef<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Ajustar configurações para mobile
  const mobileParticleCount = Math.floor(particleCount * 0.5);
  const mobileConnectionDistance = connectionDistance * 0.8;
  const actualParticleCount = isMobile ? mobileParticleCount : particleCount;
  const actualConnectionDistance = isMobile ? mobileConnectionDistance : connectionDistance;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < actualParticleCount; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        particlesRef.current.push({
          x,
          y,
          vx: (Math.random() - 0.5) * animationSpeed,
          vy: (Math.random() - 0.5) * animationSpeed,
          originalX: x,
          originalY: y,
        });
      }
    };

    initParticles(); // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
      mouseRef.current.isActive = true;
    };

    // Mouse leave handler
    const handleMouseLeave = () => {
      mouseRef.current.isActive = false;
    };

    // Add mouse move listener to window to capture all mouse movement
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      // Update particles
      particles.forEach(particle => {
        // Gentle floating animation
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        // Keep particles in bounds
        particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        particle.y = Math.max(0, Math.min(canvas.height, particle.y));
      }); // Draw connections
      ctx.strokeStyle = lineColor;
      ctx.lineWidth = 1;

      for (let i = 0; i < particles.length; i++) {
        const particleA = particles[i];

        // Connect to mouse if close enough and mouse is active
        if (mouse.isActive && !isMobile) { // Desabilitar interação mouse em mobile
          const distanceToMouse = Math.sqrt(
            (particleA.x - mouse.x) ** 2 + (particleA.y - mouse.y) ** 2
          );

          if (distanceToMouse < actualConnectionDistance) {
            ctx.beginPath();
            ctx.moveTo(particleA.x, particleA.y);
            ctx.lineTo(mouse.x, mouse.y);
            const opacity = (1 - distanceToMouse / actualConnectionDistance) * 0.8;
            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
            ctx.stroke();
          }
        }

        // Connect particles to each other
        for (let j = i + 1; j < particles.length; j++) {
          const particleB = particles[j];
          const distance = Math.sqrt(
            (particleA.x - particleB.x) ** 2 + (particleA.y - particleB.y) ** 2
          );
          if (distance < actualConnectionDistance) {
            ctx.beginPath();
            ctx.moveTo(particleA.x, particleA.y);
            ctx.lineTo(particleB.x, particleB.y);
            const opacity = (1 - distance / actualConnectionDistance) * 0.3;
            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity})`;
            ctx.stroke();
          }
        }
      } // Draw particles
      particles.forEach(particle => {
        // Draw base particle
        ctx.fillStyle = particleColor;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particleSize, 0, Math.PI * 2);
        ctx.fill();

        // Add glow effect near mouse (only if mouse is active and close)
        if (mouse.isActive && !isMobile) {
          const distanceToMouse = Math.sqrt(
            (particle.x - mouse.x) ** 2 + (particle.y - mouse.y) ** 2
          );

          if (distanceToMouse < actualConnectionDistance) {
            const glowIntensity = 1 - distanceToMouse / actualConnectionDistance;
            ctx.fillStyle = `rgba(139, 92, 246, ${glowIntensity * 0.3})`;
            ctx.beginPath();
            ctx.arc(
              particle.x,
              particle.y,
              particleSize + glowIntensity * 4,
              0,
              Math.PI * 2
            );
            ctx.fill();
          }
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [
    particleCount,
    connectionDistance,
    particleSize,
    particleColor,
    lineColor,
    animationSpeed,
  ]);
  return (
    <motion.canvas
      ref={canvasRef}
      className="absolute inset-0"
      style={{ zIndex: 1, pointerEvents: 'none' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, ease: 'easeInOut' }}
    />
  );
}