'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';

const Navbar = () => {
  const pathname = usePathname();
  const navRef = useRef(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      navRef.current.querySelectorAll('.emblem, .nav-item'),
      { opacity: 0, y: -10 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.07, ease: 'power2.out' }
    );
  }, []);

  // Close on route change
  useEffect(() => { setMobileOpen(false); }, [pathname]);

  const navClass = (path) => {
    const isActive = path === '/' ? pathname === '/' : pathname.startsWith(path);
    return `nav-item${isActive ? ' active' : ''}`;
  };

  return (
    <div className="nav-wrapper" ref={navRef}>
      <div className="nav">
        <div>
          <Link href="/" className="emblem">/ˈtɑːruːn/</Link>
        </div>

        {/* Desktop links */}
        <div className="nav-items nav-items--desktop">
          <Link href="/drumkit" className={navClass('/drumkit') + ' bonus'}>bonus</Link>
          <Link href="/work" className={navClass('/work')}>work</Link>
          <Link href="/resume" className={navClass('/resume')}>experience</Link>
          <Link href="/" className={navClass('/')}>about</Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="nav-hamburger"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="nav-mobile-menu">
          <Link href="/" className={navClass('/')} onClick={() => setMobileOpen(false)}>about</Link>
          <Link href="/work" className={navClass('/work')} onClick={() => setMobileOpen(false)}>work</Link>
          <Link href="/resume" className={navClass('/resume')} onClick={() => setMobileOpen(false)}>experience</Link>
          <Link href="/drumkit" className={navClass('/drumkit') + ' bonus'} onClick={() => setMobileOpen(false)}>bonus</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
