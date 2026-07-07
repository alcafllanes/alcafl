'use client';

import { useRef } from 'react';

export default function ProjectCard({ project, onOpen }) {
  const videoRef = useRef(null);

  const handleEnter = () => {
    if (project.type === 'video' && videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleLeave = () => {
    if (project.type === 'video' && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="project-card"
      style={{ background: project.bg }}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onClick={() => onOpen(project.id)}
    >
      {project.type === 'video' && project.media ? (
        <video ref={videoRef} src={project.media} muted loop playsInline preload="metadata" />
      ) : project.media ? (
        <img src={project.media} alt={project.title} />
      ) : null}

      <div className="project-overlay">
        <h4>{project.title}</h4>
        <span>
          {project.tag}, {project.year}
        </span>
      </div>
    </div>
  );
}
