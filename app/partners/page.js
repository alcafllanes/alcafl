import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { partners } from '@/lib/data';

export const metadata = {
  title: 'Partners, alcafl',
};

export default function PartnersPage() {
  return (
    <div className="page">
      <section className="fx-now">
        <span className="eyebrow">Partnerships</span>
        <h1 className="giant-title" style={{ fontSize: 'clamp(2.4rem, 6vw, 4.4rem)' }}>
          BUILT
          <br />
          <span className="grad-text">ALONGSIDE.</span>
        </h1>
        <p style={{ color: 'var(--ink-soft)', maxWidth: 520, marginTop: 20 }}>
          Ongoing collaborations across store builds, design, and day to day eCommerce operations.
        </p>
      </section>

      <div className="partner-list">
        {partners.map((p) => (
          <div className="partner-row" key={p.name}>
            <div className="partner-mark" style={{ background: p.color }}>{p.initials}</div>
            <div>
              <h4>{p.name}</h4>
              <p>{p.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <Reveal className="section-block">
        <div className="sb-head">
          <h2>How partnerships usually work</h2>
        </div>
        <div className="mini-process-row">
          <div className="mini-process-cell">
            <div className="mp-num">01</div>
            <h4>Fit call</h4>
            <p>A quick chat about your workflow, tools, and where I would plug in.</p>
          </div>
          <div className="mini-process-cell">
            <div className="mp-num">02</div>
            <h4>Trial project</h4>
            <p>Start with something smaller so we can see how we work together.</p>
          </div>
          <div className="mini-process-cell">
            <div className="mp-num">03</div>
            <h4>Ongoing rhythm</h4>
            <p>Move to a regular cadence, weekly tasks, retainer, or per project.</p>
          </div>
        </div>
      </Reveal>

      <Reveal className="section-block">
        <div className="sb-head">
          <h2>What I bring to a partnership</h2>
        </div>
        <div className="partner-offer">
          <ul>
            <li>Direct communication, I flag problems early instead of waiting for a check in</li>
            <li>Documentation as I go, so nothing lives only in my head</li>
            <li>Comfortable jumping into an existing workflow or tool stack</li>
            <li>Consistent QA on everything before it reaches a client or customer</li>
          </ul>
        </div>
      </Reveal>

      <Reveal className="section-block">
        <div className="cta-block">
          <h2>Interested in partnering long term?</h2>
          <p>Open to ongoing partnerships for agencies and teams that need reliable Shopify build and QA support.</p>
          <Link href="/contact" className="cta-btn">Let&apos;s talk partnership</Link>
        </div>
      </Reveal>
    </div>
  );
}
