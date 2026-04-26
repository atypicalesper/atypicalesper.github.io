'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function AnimatedGrid({ children, className }) {
  const ref = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.fromTo(
      Array.from(ref.current.children),
      { opacity: 0, y: 36 },
      { opacity: 1, y: 0, duration: 0.55, stagger: 0.13, ease: 'power2.out', delay: 0.15 }
    );
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
