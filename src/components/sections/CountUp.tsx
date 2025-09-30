"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  to: number;
  duration?: number; // seconds
  format?: (value: number) => string;
  className?: string;
  style?: React.CSSProperties;
  startWhenVisible?: boolean;
};

export default function CountUp({ to, duration = 2, format, className, style, startWhenVisible = true }: Props) {
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(!startWhenVisible);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!startWhenVisible) return;
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [startWhenVisible]);

  useEffect(() => {
    if (!started) return;
    const start = performance.now();
    const end = start + duration * 1000;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / (end - start));
      const eased = 1 - Math.pow(1 - t, 3); // easeOutCubic
      setDisplay(Math.round(eased * to));
      if (now < end) requestAnimationFrame(tick);
      else setDisplay(to);
    };
    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [started, to, duration]);

  const text = format ? format(display) : String(display);
  return (
    <span ref={ref} className={className} style={style}>{text}</span>
  );
}


