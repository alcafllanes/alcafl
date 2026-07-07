import Link from 'next/link';
import { socialLinks } from '@/lib/data';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="foot-links">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/work">Work</Link>
        <Link href="/partners">Partners</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <div className="foot-social">
        {socialLinks.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noreferrer">
            {s.label}
          </a>
        ))}
      </div>

      <div className="foot-copy">© {year} alcafl. eCommerce store builder and ops specialist.</div>
    </footer>
  );
}
