'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

const QUIPS = [
  'This route shipped before the page did.',
  'The link is valid. The destination had other plans.',
  'Looks like this page missed the deployment window.',
  'This URL is between versions right now.',
  'You found the cleanest possible bug: a page that is simply not here.',
  'The page exists emotionally, just not in production.',
  'This route took a hard left into the void.',
  'Consider this an intentional detour with poor documentation.',
  'This page has been refactored out of existence.',
  'The page is missing, but at least the error handling showed up.',
];

function getRandom() {
  return QUIPS[Math.floor(Math.random() * QUIPS.length)];
}

export default function NotFound() {
  const [quip] = useState(getRandom);

  const d1 = useRef(null);
  const d0 = useRef(null);
  const d2 = useRef(null);
  const taglineRef = useRef(null);
  const subRef = useRef(null);
  const btnWrapRef = useRef(null);
  const pulseRef = useRef(null);
  const scanlineRef = useRef(null);

  useEffect(() => {
    const digits = [d1.current, d0.current, d2.current];

    gsap.set(digits, { opacity: 0, y: -120 });
    gsap.set([taglineRef.current, subRef.current, btnWrapRef.current], { opacity: 0, y: 24 });
    gsap.set(pulseRef.current, { opacity: 0, scale: 0 });
    gsap.set(scanlineRef.current, { opacity: 0 });

    const tl = gsap.timeline({ defaults: { ease: 'bounce.out' } });

    tl.to(d1.current, { opacity: 1, y: 0, rotation: -6, duration: 0.4 })
      .to(d0.current, { opacity: 1, y: 0, rotation: 10, duration: 0.4 }, '-=0.25')
      .to(d2.current, { opacity: 1, y: 0, rotation: -4, duration: 0.4 }, '-=0.25')
      .to(digits, {
        skewX: 'random(-18, 18)',
        x: 'random(-10, 10)',
        color: '#ff4dff',
        duration: 0.03,
        repeat: 5,
        yoyo: true,
        ease: 'none',
        stagger: 0.01,
      })
      .to(digits, { skewX: 0, x: 0, clearProps: 'color', duration: 0.1, ease: 'power2.out' })
      .to(scanlineRef.current, { opacity: 1, duration: 0.04 }, '<')
      .to(scanlineRef.current, { opacity: 0, duration: 0.15 }, '+=0.04')
      .to(pulseRef.current, { opacity: 1, scale: 1, duration: 0.25, ease: 'back.out(2)' }, '+=0.02')
      .to(taglineRef.current, { opacity: 1, y: 0, duration: 0.25, ease: 'power3.out' }, '-=0.05')
      .to(subRef.current,   { opacity: 1, y: 0, duration: 0.22, ease: 'power3.out' }, '-=0.1')
      .to(btnWrapRef.current, { opacity: 1, y: 0, duration: 0.28, ease: 'back.out(2)' }, '-=0.08')
      .from(btnWrapRef.current, { scale: 0.6, duration: 0.28, ease: 'back.out(2)' }, '<');

    // repeating radar ping — scale up + fade out
    gsap.to(pulseRef.current, {
      scale: 2.6,
      opacity: 0,
      duration: 2,
      repeat: -1,
      ease: 'power2.out',
      delay: 0.8,
      onRepeat() { gsap.set(pulseRef.current, { scale: 1, opacity: 0.5 }); },
    });

    gsap.to(d1.current, { y: -10, rotation: -9, duration: 2.2, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1.0 });
    gsap.to(d0.current, { y: -16, rotation: 14, duration: 2.8, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1.2 });
    gsap.to(d2.current, { y: -8,  rotation: -6, duration: 2.5, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1.1 });
  }, []);

  const onEnter = () => gsap.to(btnWrapRef.current, { scale: 1.06, duration: 0.2, ease: 'power2.out' });
  const onLeave = () => gsap.to(btnWrapRef.current, { scale: 1,    duration: 0.2, ease: 'power2.out' });

  return (
    <div className="nf-page">
      <div ref={scanlineRef} className="nf-scanline" />

      <div className="nf-digits">
        <span ref={d1} className="nf-digit">4</span>
        <span ref={d0} className="nf-digit nf-digit--accent">0</span>
        <span ref={d2} className="nf-digit">4</span>
      </div>

      <div ref={pulseRef} className="nf-pulse" />

      <p ref={taglineRef} className="nf-tagline">page not found</p>

      <p ref={subRef} className="nf-sub">{quip}</p>

      <div ref={btnWrapRef} onMouseEnter={onEnter} onMouseLeave={onLeave} className="nf-btn-wrap">
        <div className="nf-actions">
          <Link href="/" className="nf-btn">go home</Link>
          <Link href="/work/" className="nf-btn nf-btn--ghost">see work</Link>
          <Link href="/resume/" className="nf-btn nf-btn--ghost">view resume</Link>
        </div>
      </div>
    </div>
  );
}
