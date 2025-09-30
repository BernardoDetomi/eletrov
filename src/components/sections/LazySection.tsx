"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  rootMargin?: string;
  threshold?: number;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
};

export default function LazySection({ children, rootMargin = "0px 0px -10% 0px", threshold = 0.2, className, style, id }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || visible) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { root: null, rootMargin, threshold }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [rootMargin, threshold, visible]);

  return (
    <div ref={ref} id={id} className={className} style={{ ...style, opacity: visible ? 1 : 0, transform: visible ? "none" : "translateY(20px)", transition: "opacity .6s ease, transform .6s ease" }}>
      {visible ? children : null}
    </div>
  );
}


