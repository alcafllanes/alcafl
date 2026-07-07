'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/work', label: 'Work' },
  { href: '/partners', label: 'Partners' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className={scrolled ? 'scrolled' : ''}>
        <Link href="/" className="logo">
          <span className="logo-dot" />
          alcafl.
        </Link>

        <nav className="main-nav">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={isActive(l.href) ? 'active' : ''}>
              {l.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="cta-btn">
          Let&apos;s talk
        </Link>

        <button className="burger" aria-label="Menu" onClick={() => setOpen((v) => !v)}>
          <span />
        </button>
      </header>

      <nav className={`mobile-nav ${open ? 'open' : ''}`}>
        {links.map((l) => (
          <Link key={l.href} href={l.href} className={isActive(l.href) ? 'active' : ''}>
            {l.label}
          </Link>
        ))}
      </nav>
    </>
  );
}
