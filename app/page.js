import Link from 'next/link';
import Reveal from '@/components/Reveal';
import { toolkit, workItems } from '@/lib/data';

export default function HomePage() {
  const featured = workItems.slice(0, 2);

  return (
    <div className="page">
      <section className="hero fx-now">
        <div className="hero-tags">
          <span className="glass float-tag">2+ years building Shopify stores</span>
          <span className="glass float-tag t2">Open for freelance work</span>
        </div>

        <div className="giant-wrap">
          <h1 className="giant-title">
            STOREFRONTS
            <br />
            THAT <span className="grad-text">JUST WORK.</span>
          </h1>
          <div className="glass preview-card">
            <div className="pc-top">
              <span className="pc-dot">PL</span>
              <span className="pc-label">Latest build</span>
            </div>
            <span className="pc-title">Peco Lab, Figma to live</span>
          </div>
        </div>

        <div className="hero-sub">
          <p>eCommerce store builder and ops specialist. Shopify builds, Klaviyo flow audits, and QA passes, done from brief to launch.</p>
          <div className="hero-actions">
            <Link href="/work" className="cta-btn">View my work</Link>
            <Link href="/contact" className="link-inline">
              Book a call <span className="arrow">→</span>
            </Link>
          </div>
        </div>

        <div className="trust-line">
          <span className="label">Trusted by</span>
          <div className="trust-names">
            <span>Peco Lab Kft.</span>
            <span>Cloverash Family Trust</span>
            <span>Ecom Capital</span>
            <span>HelloSeller</span>
          </div>
        </div>
      </section>

      <Reveal className="section-block">
        <div className="sb-head">
          <h2>The tools behind every build</h2>
          <p>No fluff, this is what actually runs day to day.</p>
        </div>
        <div className="toolkit-list">
          {toolkit.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </Reveal>

      <Reveal className="section-block">
        <div className="stat-row">
          <div className="stat-cell">
            <div className="num">6+</div>
            <div className="label">eCommerce and Shopify roles</div>
          </div>
          <div className="stat-cell">
            <div className="num">2+ yrs</div>
            <div className="label">Hands on store building and QA</div>
          </div>
          <div className="stat-cell">
            <div className="num">4</div>
            <div className="label">Active client partnerships</div>
          </div>
        </div>
      </Reveal>

      <Reveal className="section-block">
        <div className="sb-head">
          <h2>Why teams keep coming back</h2>
          <p>The stuff that matters more than a nice looking build.</p>
        </div>
        <div className="value-row">
          <div className="glass value-card">
            <h4>I actually test before launch</h4>
            <p>Every build gets a real QA pass across devices before it ever reaches a customer.</p>
          </div>
          <div className="glass value-card">
            <h4>I write things down</h4>
            <p>Task trackers, Loom walkthroughs, and daily updates, so nothing gets lost between us.</p>
          </div>
          <div className="glass value-card">
            <h4>I stick around</h4>
            <p>Most of my client relationships turn into ongoing work, not a one time handoff.</p>
          </div>
        </div>
      </Reveal>

      <Reveal className="section-block">
        <div className="sb-head">
          <h2>How a project usually runs</h2>
          <p>Same rhythm whether it is a full build or a quick fix.</p>
        </div>
        <div className="mini-process-row">
          <div className="mini-process-cell">
            <div className="mp-num">01</div>
            <h4>Brief and audit</h4>
            <p>I look at what is there and flag what needs attention first.</p>
          </div>
          <div className="mini-process-cell">
            <div className="mp-num">02</div>
            <h4>Build or fix</h4>
            <p>I work on it directly, with regular updates along the way.</p>
          </div>
          <div className="mini-process-cell">
            <div className="mp-num">03</div>
            <h4>QA and handover</h4>
            <p>Tested across devices, then handed off with a quick Loom.</p>
          </div>
        </div>
      </Reveal>

      <Reveal className="section-block">
        <div className="sb-head">
          <h2>A few recent builds</h2>
          <p>Full breakdowns live on the Work page.</p>
        </div>
        <div className="feature-work-list">
          {featured.map((w) => (
            <Link key={w.id} href={`/work/${w.id}`} className="feature-work-row">
              <div className="fw-thumb" style={{ background: w.color }} />
              <div>
                <h4>{w.title}</h4>
                <p>{w.client}, {w.year}</p>
              </div>
              <div className="fw-arrow">→</div>
            </Link>
          ))}
        </div>
      </Reveal>

      <Reveal className="section-block">
        <div className="mascot-wrap">
          <span className="eyebrow">The face behind alcafl</span>
          <h2 style={{ fontSize: 'clamp(1.8rem, 3.4vw, 2.4rem)' }}>Meet Alca</h2>
          <p style={{ color: 'var(--ink-soft)', maxWidth: 480, margin: '14px auto 0' }}>
            A little mascot I designed myself. She shows up across my socials and this portfolio so people recognize the brand at a glance.
          </p>
          <div className="mascot-strip">
            <img src="/bear-sit.png" alt="Alca the bear sitting" />
            <img src="/bear-hand.png" alt="Alca the bear peeking over her hands" />
            <img src="/bear-stand.png" alt="Alca the bear standing" />
            <img src="/bear-happy.png" alt="Alca the bear looking happy" />
          </div>
          <span className="mascot-bubble">hi, I&apos;m Alca</span>
        </div>
      </Reveal>

      <Reveal className="section-block">
        <div className="cta-block">
          <h2>Have a store that needs building, fixing, or growing?</h2>
          <p>Currently taking on new freelance projects, Shopify builds, QA passes, and email flow audits.</p>
          <Link href="/contact" className="cta-btn">Start a project</Link>
        </div>
      </Reveal>
    </div>
  );
}
