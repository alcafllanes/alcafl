import Reveal from '@/components/Reveal';
import ProjectsSection from '@/components/ProjectsSection';
import { experience } from '@/lib/data';

export const metadata = {
  title: 'About, alcafl',
};

export default function AboutPage() {
  return (
    <div className="page">
      <section className="fx-now">
        <span className="eyebrow">About</span>
        <div className="about-hero-grid">
          <div>
            <h1 className="giant-title" style={{ fontSize: 'clamp(2.4rem, 6vw, 4.4rem)' }}>
              HI, I&apos;M
              <br />
              <span className="grad-text">ALPHA CATHLEEN.</span>
            </h1>
          </div>
          <div className="about-photo-frame">
            <img src="/alcafl-photo.jpg" alt="Alpha Cathleen" />
          </div>
        </div>

        <div className="about-top" style={{ marginTop: 30 }}>
          <p>
            I started out in admin and data work, encoding, reporting, marketplace listings, before moving fully into Shopify. Since then I have built stores from Figma mockups, audited email flows in Klaviyo, run QA across desktop and mobile, and kept clients&apos; day to day store operations running without gaps.
          </p>
          <p>
            I like the parts of eCommerce most people skip. The QA pass before launch, the content audit that catches a broken policy page, the flow rebuild that quietly improves a whole customer journey.
          </p>
        </div>
      </section>

      <Reveal className="section-block">
        <div className="sb-head">
          <h2>Experience</h2>
        </div>
        <div className="timeline">
          {experience.map((e) => (
            <div className="tl-item" key={e.role + e.date}>
              <div className="tl-date">{e.date}</div>
              <div>
                <div className="tl-role">{e.role}</div>
                <div className="tl-co">{e.co}</div>
                <div className="tl-desc">{e.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <Reveal className="section-block">
        <div className="sb-head">
          <h2>Skills and tools</h2>
        </div>
        <div className="skill-cats">
          <div className="glass skill-cat">
            <h4>Build and Platforms</h4>
            <ul>
              <li>Shopify, Liquid and themes</li>
              <li>GemPages</li>
              <li>Wix</li>
              <li>Figma to live builds</li>
            </ul>
          </div>
          <div className="glass skill-cat">
            <h4>Marketing and Content</h4>
            <ul>
              <li>Klaviyo flow audits</li>
              <li>Canva design assets</li>
              <li>Seasonal campaigns</li>
              <li>Content and copy audits</li>
            </ul>
          </div>
          <div className="glass skill-cat">
            <h4>QA and Ops</h4>
            <ul>
              <li>Cross device QA testing</li>
              <li>ClickUp bug tracking</li>
              <li>Loom tutorials</li>
              <li>Client and task reporting</li>
            </ul>
          </div>
        </div>
      </Reveal>

      <Reveal className="section-block">
        <div className="status-row">
          <div className="glass status-cell">
            <span className="stat-tag">Currently building</span>
            <p>A cleaner Klaviyo flow library for repeat clients</p>
          </div>
          <div className="glass status-cell">
            <span className="stat-tag">Currently learning</span>
            <p>Deeper Shopify theme and API customization</p>
          </div>
        </div>
      </Reveal>

      <Reveal className="section-block">
        <div className="sb-head">
          <h2>A bit more about me</h2>
        </div>
        <div className="about-blurb">
          <p>
            Outside of client work I am usually the one tidying up a messy spreadsheet or reorganizing something that did not need reorganizing. That habit turned out to be useful for QA work, I notice the small stuff.
          </p>
          <p>
            I also designed Alca, the little bear you will see around this site. Somewhere between a mascot and a comfort object at this point.
          </p>
        </div>
      </Reveal>

      <Reveal className="section-block">
        <div className="sb-head">
          <h2>Personal projects</h2>
          <p>Hover to preview, click for the full story.</p>
        </div>
        <ProjectsSection />
      </Reveal>
    </div>
  );
}
