'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';

export default function PageWrapper({ children }) {
  const ref = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    gsap.fromTo(
      ref.current,
      { opacity: 0, y: 18 },
      { opacity: 1, y: 0, duration: 0.55, ease: 'power2.out' }
    );
  }, [pathname]);

  return <div ref={ref}>{children}</div>;
}
