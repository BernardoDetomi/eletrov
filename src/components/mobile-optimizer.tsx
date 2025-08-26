'use client';

import { useEffect } from 'react';

export default function MobileOptimizer() {
  useEffect(() => {
    // Definir viewport para dispositivos móveis
    const viewport = document.querySelector('meta[name=viewport]');
    if (viewport) {
      viewport.setAttribute('content', 'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no');
    }

    // Desabilitar scroll horizontal em dispositivos móveis
    document.body.style.overflowX = 'hidden';

    // Adicionar classe CSS para detectar touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      document.documentElement.classList.add('touch-device');
    }

    return () => {
      document.body.style.overflowX = '';
    };
  }, []);

  return null;
}
