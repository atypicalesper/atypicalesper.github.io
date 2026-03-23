'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import gsap from 'gsap';

export default function NotFound() {
  const d1 = useRef(null);
  const d0 = useRef(null);
  const d2 = useRef(null);
  const taglineRef = useRef(null);
  const subRef = useRef(null);
  const btnWrapRef = useRef(null);
  const emojiRef = useRef(null);
  const scanlineRef = useRef(null);

  useEffect(() => {
    const digits = [d1.current, d0.current, d2.current];

    gsap.set(digits, { opacity: 0, y: -120 });
    gsap.set([taglineRef.current, subRef.current, btnWrapRef.current], { opacity: 0, y: 24 });
    gsap.set(emojiRef.current, { opacity: 0, scale: 0, rotation: -180 });
    gsap.set(scanlineRef.current, { opacity: 0 });

    const tl = gsap.timeline({ defaults: { ease: 'bounce.out' } });

    // digits crash in, each slightly offset in timing and rotation
    tl.to(d1.current, { opacity: 1, y: 0, rotation: -6, duration: 0.7 })
      .to(d0.current, { opacity: 1, y: 0, rotation: 10, duration: 0.7 }, '-=0.4')
      .to(d2.current, { opacity: 1, y: 0, rotation: -4, duration: 0.7 }, '-=0.4')

      // glitch burst: rapid skew + color flash
      .to(digits, {
        skewX: 'random(-18, 18)',
        x: 'random(-10, 10)',
        color: '#ff4dff',
        duration: 0.04,
        repeat: 7,
        yoyo: true,
        ease: 'none',
        stagger: 0.01,
      })
      .to(digits, { skewX: 0, x: 0, color: '#ffffff', duration: 0.15, ease: 'power2.out' })

      // scanline flash
      .to(scanlineRef.current, { opacity: 1, duration: 0.05 }, '<')
      .to(scanlineRef.current, { opacity: 0, duration: 0.3 }, '+=0.05')

      // emoji pops in
      .to(emojiRef.current, {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 0.5,
        ease: 'back.out(2)',
      }, '-=0.1')

      // text slides up
      .to(taglineRef.current, { opacity: 1, y: 0, duration: 0.45, ease: 'power3.out' }, '+=0.05')
      .to(subRef.current, { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' }, '-=0.2')
      .to(btnWrapRef.current, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        ease: 'back.out(2)',
      }, '-=0.1')
      .from(btnWrapRef.current, { scale: 0.6, duration: 0.5, ease: 'back.out(2)' }, '<');

    // idle float — each digit bobs independently
    gsap.to(d1.current, { y: -10, rotation: -9, duration: 2.2, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1.6 });
    gsap.to(d0.current, { y: -16, rotation: 14, duration: 2.8, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1.9 });
    gsap.to(d2.current, { y: -8,  rotation: -6, duration: 2.5, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 2.1 });

    // emoji slow spin
    gsap.to(emojiRef.current, { rotation: 360, duration: 6, repeat: -1, ease: 'none', delay: 1.5 });
  }, []);

  const onEnter = () => gsap.to(btnWrapRef.current, { scale: 1.06, duration: 0.2, ease: 'power2.out' });
  const onLeave = () => gsap.to(btnWrapRef.current, { scale: 1,    duration: 0.2, ease: 'power2.out' });

  return (
    <div style={s.page}>

      {/* scanline overlay flash */}
      <div ref={scanlineRef} style={s.scanline} />

      {/* digits */}
      <div style={s.digits}>
        <span ref={d1} style={s.digit}>4</span>
        <span ref={d0} style={{ ...s.digit, color: '#b999ff', WebkitTextStroke: '2px #b999ff' }}>0</span>
        <span ref={d2} style={s.digit}>4</span>
      </div>

      {/* spinning skull */}
      <span ref={emojiRef} style={s.emoji}>💀</span>

      {/* comedy text */}
      <p ref={taglineRef} style={s.tagline}>
        this page got isekai&apos;d
      </p>
      <p ref={subRef} style={s.sub}>
        you wandered off the map like naruto in a filler arc.<br />
        nothing to see here — not even google knows this place exists.
      </p>

      {/* back home button */}
      <div ref={btnWrapRef} onMouseEnter={onEnter} onMouseLeave={onLeave} style={s.btnWrap}>
        <Link href="/" style={s.btn}>
          ← beam me home
        </Link>
      </div>
    </div>
  );
}

const s = {
  page: {
    minHeight: '72vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '2rem 1rem',
    gap: '1.2rem',
    position: 'relative',
    overflow: 'hidden',
  },
  scanline: {
    position: 'absolute',
    inset: 0,
    background: 'repeating-linear-gradient(0deg, rgba(185,153,255,0.06) 0px, rgba(185,153,255,0.06) 1px, transparent 1px, transparent 4px)',
    pointerEvents: 'none',
    zIndex: 1,
  },
  digits: {
    display: 'flex',
    gap: '0.25rem',
    alignItems: 'baseline',
    position: 'relative',
    zIndex: 2,
  },
  digit: {
    display: 'inline-block',
    fontFamily: 'Jost, sans-serif',
    fontWeight: 900,
    fontSize: 'clamp(6rem, 18vw, 11rem)',
    lineHeight: 1,
    color: '#ffffff',
    WebkitTextStroke: '2px rgba(255,255,255,0.2)',
    textShadow: '0 0 40px rgba(185,153,255,0.35)',
    userSelect: 'none',
  },
  emoji: {
    display: 'inline-block',
    fontSize: '2.8rem',
    position: 'relative',
    zIndex: 2,
  },
  tagline: {
    fontFamily: 'Jost, sans-serif',
    fontWeight: 600,
    fontSize: 'clamp(1.3rem, 3.5vw, 1.8rem)',
    color: '#fff',
    margin: 0,
    position: 'relative',
    zIndex: 2,
  },
  sub: {
    fontFamily: 'Work Sans, sans-serif',
    fontWeight: 300,
    fontSize: '0.95rem',
    color: 'rgba(255,255,255,0.45)',
    margin: 0,
    lineHeight: 1.75,
    maxWidth: '480px',
    position: 'relative',
    zIndex: 2,
  },
  btnWrap: {
    position: 'relative',
    zIndex: 2,
    marginTop: '0.4rem',
  },
  btn: {
    display: 'inline-block',
    padding: '0.65rem 1.8rem',
    border: '1.5px solid #b999ff',
    borderRadius: '6px',
    color: '#b999ff',
    fontFamily: 'Work Sans, sans-serif',
    fontWeight: 300,
    fontSize: '0.95rem',
    letterSpacing: '0.04em',
    textDecoration: 'none',
    background: 'transparent',
    transition: 'background 0.2s',
  },
};
