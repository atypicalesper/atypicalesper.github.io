'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Background() {
  const orb1 = useRef(null);
  const orb2 = useRef(null);
  const orb3 = useRef(null);

  useEffect(() => {
    gsap.to(orb1.current, {
      x: 140, y: 90,
      duration: 14, repeat: -1, yoyo: true, ease: 'sine.inOut',
    });
    gsap.to(orb2.current, {
      x: -110, y: -70,
      duration: 18, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 4,
    });
    gsap.to(orb3.current, {
      x: 70, y: -100,
      duration: 22, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 8,
    });
  }, []);

  return (
    <div className="bg-orbs" aria-hidden="true">
      <div ref={orb1} className="orb orb-1" />
      <div ref={orb2} className="orb orb-2" />
      <div ref={orb3} className="orb orb-3" />
    </div>
  );
}
