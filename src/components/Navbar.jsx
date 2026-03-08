'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';

const Navbar = () => {
  const pathname = usePathname();
  const navRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current.querySelectorAll('.emblem, .nav-item'),
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.07, ease: 'power2.out' }
    );
  }, []);

  const navClass = (path) => {
    const isActive = path === '/' ? pathname === '/' : pathname.startsWith(path);
    return `nav-item${isActive ? ' active' : ''}`;
  };

  return (
    <div className="nav" ref={navRef}>
      <div>
        <Link href="/" className="emblem">/ˈtɑːruːn/</Link>
      </div>
      <div className="nav-items">
        <Link href="/drumkit" className={navClass('/drumkit') + ' bonus'}>bonus</Link>
        <Link href="/about" className={navClass('/about')}>about</Link>
        <Link href="/work" className={navClass('/work')}>work</Link>
        <Link href="/" className={navClass('/')}>intro</Link>
      </div>
    </div>
  );
};

export default Navbar;
