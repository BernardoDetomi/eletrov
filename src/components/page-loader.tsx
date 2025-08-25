'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';
import Image from 'next/image';

interface PageLoaderProps {
  children: React.ReactNode;
  duration?: number;
}

export default function PageLoader({ children, duration = 3 }: PageLoaderProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        setShowContent(true);
      }, 500);
    }, duration * 1000);

    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <div className="relative">
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-50 bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeInOut' }}
          >
            {/* Logo animado */}
            <div className="text-center">
              <motion.div
                className="mb-8"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, type: 'spring', stiffness: 100 }}
              >
                <Image
                  src="/eletrov.png"
                  alt="Eletrov Logo"
                  width={150}
                  height={150}
                  className="mx-auto"
                />
              </motion.div>

              {/* Texto de carregamento */}
              <motion.h1
                className="text-4xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                ELETROV
              </motion.h1>

              {/* Barra de progresso */}
              <motion.div
                className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden mx-auto"
                initial={{ width: 0 }}
                animate={{ width: 256 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-blue-400 to-purple-500"
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1.2, duration: duration - 1.5, ease: 'easeInOut' }}
                />
              </motion.div>

              {/* Pontos de carregamento */}
              <motion.div
                className="flex justify-center space-x-2 mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={i}
                    className="w-3 h-3 bg-blue-400 rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      delay: i * 0.2,
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Conteúdo da página */}
      <AnimatePresence>
        {showContent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
