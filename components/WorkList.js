'use client';

import { useState } from 'react';
import Link from 'next/link';
import { workItems } from '@/lib/data';

export default function WorkList() {
  const [filter, setFilter] = useState('All');
  const tags = ['All', ...new Set(workItems.map((w) => w.tag))];
  const filtered = filter === 'All' ? workItems : workItems.filter((w) => w.tag === filter);

  return (
    <>
      <div className="tab-row">
        {tags.map((t) => (
          <span key={t} className={`tab-item ${t === filter ? 'active' : ''}`} onClick={() => setFilter(t)}>
            {t}
          </span>
        ))}
      </div>

      <div className="work-list">
        {filtered.map((w) => (
          <Link key={w.id} href={`/work/${w.id}`} className="work-row">
            <div className="work-thumb-sm">
              <img src={w.heroImage} alt={w.heroAlt} loading="lazy" />
            </div>
            <div>
              <h3>{w.title}</h3>
              <p>{w.summary}</p>
            </div>
            <div className="wr-meta">
              {w.client}
              <br />
              {w.year}
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
