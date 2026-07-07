import Link from 'next/link';
import Reveal from '@/components/Reveal';
import Faq from '@/components/Faq';
import { services, engagementModels, serviceFaqs } from '@/lib/data';

export const metadata = {
  title: 'Services, alcafl',
};

export default function ServicesPage() {
  return (
    <div className="page">
      <section className="fx-now">
        <span className="eyebrow">Services</span>
        <h1 className="giant-title" style={{ fontSize: 'clamp(2.4rem, 6vw, 4.4rem)' }}>
          WHERE I
          <br />
          <span className="grad-text">CAN HELP.</span>
        </h1>
        <p style={{ color: 'var(--ink-soft)', maxWidth: 520, marginTop: 20 }}>
          Pick a lane below, or bring a messier problem, most of my work starts as "the store just needs to work better."
        </p>
      </section>

      <Reveal className="section-block">
        <div className="service-list">
          {services.map((s, i) => (
            <div className="service-row" key={s.title}>
              <div className="service-num">0{i + 1}</div>
              <div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
              <div className="service-arrow">→</div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className="section-block">
        <div className="sb-head">
          <h2>How a project runs</h2>
        </div>
        <div className="process-row">
          <div className="process-cell">
            <div className="pn">01</div>
            <h4>Brief and audit</h4>
            <p>Review the store, mockups, or flows and flag what needs attention first.</p>
          </div>
          <div className="process-cell">
            <div className="pn">02</div>
            <h4>Build or fix</h4>
            <p>Implement sections, flows, or fixes directly, with regular updates.</p>
          </div>
          <div className="process-cell">
            <div className="pn">03</div>
            <h4>QA pass</h4>
            <p>Test across desktop and mobile before anything goes live.</p>
          </div>
          <div className="process-cell">
            <div className="pn">04</div>
            <h4>Handover</h4>
            <p>A Loom walkthrough so your team knows exactly what changed.</p>
          </div>
        </div>
      </Reveal>

      <Reveal className="section-block">
        <div className="sb-head">
          <h2>Ways to work together</h2>
        </div>
        <div className="engagement-row">
          {engagementModels.map((m) => (
            <div className="glass engagement-card" key={m.title}>
              <h4>{m.title}</h4>
              <p>{m.desc}</p>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className="section-block">
        <div className="sb-head">
          <h2>Is this a fit?</h2>
        </div>
        <div className="fit-grid">
          <div className="fit-card good">
            <h4>Good fit if you</h4>
            <ul>
              <li>Have a Figma or Wix mockup ready to build</li>
              <li>Need QA before a launch or big campaign</li>
              <li>Want ongoing store management, not just one off work</li>
              <li>Value clear communication and daily updates</li>
            </ul>
          </div>
          <div className="fit-card notfit">
            <h4>Probably not a fit if you</h4>
            <ul>
              <li>Need custom app development beyond Liquid or theme work</li>
              <li>Want a brand new visual identity designed from zero</li>
              <li>Need a full store build turned around the same day</li>
            </ul>
          </div>
        </div>
      </Reveal>

      <Reveal className="section-block">
        <div className="sb-head">
          <h2>Questions I get a lot</h2>
        </div>
        <Faq items={serviceFaqs} />
      </Reveal>

      <Reveal className="section-block">
        <div className="cta-block">
          <h2>Not sure which service fits?</h2>
          <p>Send over what you are working with, I will tell you plainly what I would tackle first.</p>
          <Link href="/contact" className="cta-btn">Get in touch</Link>
        </div>
      </Reveal>
    </div>
  );
}
