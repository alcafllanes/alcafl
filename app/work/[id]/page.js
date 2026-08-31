import Link from 'next/link';
import { notFound } from 'next/navigation';
import { workItems } from '@/lib/data';
import ProjectGallery from '@/components/ProjectGallery';

export function generateStaticParams() {
  return workItems.map((w) => ({ id: w.id }));
}

export function generateMetadata({ params }) {
  const w = workItems.find((x) => x.id === params.id);
  return { title: w ? `${w.title}, alcafl` : 'Project not found' };
}

export default function WorkDetailPage({ params }) {
  const w = workItems.find((x) => x.id === params.id);
  if (!w) return notFound();

  const hasPlaceholders = w.gallery?.some((item) => item.status === 'placeholder');

  return (
    <div className="page">
      <section className="fx-now">
        <Link href="/work" className="back-link">← Back to all work</Link>
        <span className="eyebrow">{w.tag}</span>
        <h1 className="giant-title" style={{ fontSize: 'clamp(2rem, 5vw, 3.6rem)', textTransform: 'none' }}>
          {w.title}
        </h1>
        <p style={{ color: 'var(--ink-soft)', marginTop: 16, maxWidth: 560 }}>{w.summary}</p>
      </section>

      <div className="detail-hero-thumb">
        <img src={w.heroImage} alt={w.heroAlt} />
      </div>

      <div className="detail-meta-strip">
        <div className="dm-cell">
          <div className="dm-label">Client</div>
          <div className="dm-value">{w.client}</div>
        </div>
        <div className="dm-cell">
          <div className="dm-label">Timeline</div>
          <div className="dm-value">{w.year}</div>
        </div>
        <div className="dm-cell">
          <div className="dm-label">Role</div>
          <div className="dm-value">{w.role}</div>
        </div>
        <div className="dm-cell">
          <div className="dm-label">Tools</div>
          <div className="dm-value">{w.tools}</div>
        </div>
      </div>

      <div className="detail-body">
        <div className="fx in">
          <h4>The challenge</h4>
          <p>{w.challenge}</p>
        </div>
        <div className="fx in">
          <h4>What I did</h4>
          <ul>
            {w.approach.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </div>

        {w.gallery && w.gallery.length > 0 && (
          <div className="fx in">
            <h4>Visual evidence</h4>
            {hasPlaceholders && (
              <p style={{ marginBottom: 24 }}>
                Real screenshots for this project are still being collected. The slots below show what will go in each spot,
                labeled with the screenshot ID from the collection plan.
              </p>
            )}
            <ProjectGallery gallery={w.gallery} />
          </div>
        )}

        <div className="fx in">
          <h4>Outcome</h4>
          <p>{w.outcome}</p>
        </div>
      </div>

      <div style={{ marginTop: 60 }}>
        <Link href="/contact" className="cta-btn">Discuss a similar project</Link>
      </div>
    </div>
  );
}
