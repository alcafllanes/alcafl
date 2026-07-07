'use client';

import { useState } from 'react';

export default function Faq({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="faq-list">
      {items.map((item, i) => (
        <div
          key={item.q}
          className={`faq-item ${openIndex === i ? 'open' : ''}`}
          onClick={() => setOpenIndex(openIndex === i ? null : i)}
        >
          <div className="faq-q">
            <span>{item.q}</span>
            <span className="faq-icon">+</span>
          </div>
          <div className="faq-a">{item.a}</div>
        </div>
      ))}
    </div>
  );
}
