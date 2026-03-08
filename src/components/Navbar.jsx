'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const pathname = usePathname();

  const navClass = (path) => {
    const isActive = path === '/' ? pathname === '/' : pathname.startsWith(path);
    return `nav-item${isActive ? ' active' : ''}`;
  };

  return (
    <div className="nav">
      <div>
        <Link href="/" className="emblem">/ˈtɑːruːn/</Link>
      </div>
      <div className="title">
        <span>Tarun Singh</span>
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
