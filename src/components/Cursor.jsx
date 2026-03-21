'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
    // Respect user's motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const dotX = gsap.quickTo(dot.current, 'x', { duration: 0.15, ease: 'power3' });
    const dotY = gsap.quickTo(dot.current, 'y', { duration: 0.15, ease: 'power3' });
    const ringX = gsap.quickTo(ring.current, 'x', { duration: 0.45, ease: 'power3' });
    const ringY = gsap.quickTo(ring.current, 'y', { duration: 0.45, ease: 'power3' });

    const move = (e) => {
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
    };

    // Use event delegation instead of binding to every link/button.
    // This automatically handles dynamically added elements too.
    const expand = () => gsap.to(ring.current, { scale: 2.2, opacity: 0.4, duration: 0.2 });
    const shrink = () => gsap.to(ring.current, { scale: 1, opacity: 0.7, duration: 0.2 });

    const handleOver = (e) => {
      if (e.target.closest('a, button')) expand();
    };
    const handleOut = (e) => {
      if (e.target.closest('a, button')) shrink();
    };

    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', handleOver);
    document.addEventListener('mouseout', handleOut);

    return () => {
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseout', handleOut);
    };
  }, []);

  return (
    <>
      <div ref={dot} className="cursor-dot" />
      <div ref={ring} className="cursor-ring" />
    </>
  );
}
