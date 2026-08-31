import Link from 'next/link';
import Reveal from '@/components/Reveal';
import WorkList from '@/components/WorkList';
import { toolkit } from '@/lib/data';

export const metadata = {
  title: 'Work, alcafl',
};

export default function WorkPage() {
  return (
    <div className="page">
      <section className="fx-now">
        <span className="eyebrow">Selected Work</span>
        <h1 className="giant-title" style={{ fontSize: 'clamp(2.4rem, 6vw, 4.4rem)' }}>
          REAL STORES,
          <br />
          <span className="grad-text">REAL FIXES.</span>
        </h1>
        <p style={{ color: 'var(--ink-soft)', maxWidth: 520, marginTop: 20 }}>
          Click any project for the full breakdown, problem, approach, and outcome.
        </p>
        <WorkList />
      </section>

      <Reveal className="section-block">
        <div className="stat-row">
          <div className="stat-cell">
            <div className="num">5</div>
            <div className="label">Store builds and ops engagements featured</div>
          </div>
          <div className="stat-cell">
            <div className="num">3</div>
            <div className="label">Platforms, Shopify, GemPages and Wix</div>
          </div>
          <div className="stat-cell">
            <div className="num">Every</div>
            <div className="label">Build includes a QA pass across devices</div>
          </div>
        </div>
      </Reveal>

      <Reveal className="section-block">
        <div className="sb-head">
          <h2>Tools used across these projects</h2>
        </div>
        <div className="toolkit-list">
          {toolkit.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </Reveal>

      <Reveal className="section-block">
        <div className="cta-block">
          <h2>Something similar on your end?</h2>
          <p>Happy to look at your store and tell you exactly where I would start.</p>
          <Link href="/contact" className="cta-btn">Let&apos;s talk about it</Link>
        </div>
      </Reveal>
    </div>
  );
}
