'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Cursor() {
  const dot = useRef(null);
  const ring = useRef(null);

  useEffect(() => {
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

    const expand = () => gsap.to(ring.current, { scale: 2.2, opacity: 0.4, duration: 0.2 });
    const shrink = () => gsap.to(ring.current, { scale: 1, opacity: 0.7, duration: 0.2 });

    const links = document.querySelectorAll('a, button');
    links.forEach((el) => {
      el.addEventListener('mouseenter', expand);
      el.addEventListener('mouseleave', shrink);
    });

    window.addEventListener('mousemove', move);
    return () => {
      window.removeEventListener('mousemove', move);
      links.forEach((el) => {
        el.removeEventListener('mouseenter', expand);
        el.removeEventListener('mouseleave', shrink);
      });
    };
  }, []);

  return (
    <>
      <div ref={dot} className="cursor-dot" />
      <div ref={ring} className="cursor-ring" />
    </>
  );
}
