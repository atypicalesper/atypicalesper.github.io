'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function AnimatedText({ children, className, tag: Tag = 'p' }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    const words = el.querySelectorAll('.word');
    gsap.fromTo(
      words,
      { opacity: 0, y: 12 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.04, ease: 'power2.out', delay: 0.3 }
    );
  }, []);

  const wrapWords = (text) =>
    String(text)
      .split(' ')
      .map((w, i) => (
        <span key={i} className="word" style={{ display: 'inline-block', marginRight: '0.28em' }}>
          {w}
        </span>
      ));

  const processChildren = (children) =>
    Array.isArray(children)
      ? children.map((child, i) =>
          typeof child === 'string' ? (
            <span key={i}>{wrapWords(child)}</span>
          ) : (
            <span key={i}>{child}</span>
          )
        )
      : typeof children === 'string'
      ? wrapWords(children)
      : children;

  return (
    <Tag ref={ref} className={className}>
      {processChildren(children)}
    </Tag>
  );
}
