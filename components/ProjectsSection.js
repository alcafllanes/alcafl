'use client';

import { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import { personalProjects } from '@/lib/data';

export default function ProjectsSection() {
  const [activeId, setActiveId] = useState(null);
  const active = personalProjects.find((p) => p.id === activeId);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setActiveId(null);
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = active ? 'hidden' : '';
    return () => document.removeEventListener('keydown', onKey);
  }, [active]);

  return (
    <>
      <div className="projects-grid">
        {personalProjects.map((p) => (
          <ProjectCard key={p.id} project={p} onOpen={setActiveId} />
        ))}
      </div>

      <div
        className={`modal-backdrop ${active ? 'open' : ''}`}
        onClick={(e) => {
          if (e.target === e.currentTarget) setActiveId(null);
        }}
      >
        {active && (
          <div className="modal-card">
            <button className="modal-close" onClick={() => setActiveId(null)} aria-label="Close">
              x
            </button>

            {active.type === 'video' && active.media ? (
              <video className="modal-media" src={active.media} controls />
            ) : active.media ? (
              <img className="modal-media" src={active.media} alt={active.title} />
            ) : (
              <div className="modal-media" style={{ background: active.bg }} />
            )}

            <div className="modal-body">
              <h3>{active.title}</h3>
              <div className="modal-meta">
                <span>{active.tag}</span>
                <span>{active.year}</span>
                <span>{active.tools}</span>
              </div>
              <p>{active.desc}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
