'use client';
import { useState } from 'react';
import Link from 'next/link';

const Card = ({ title, description, summary, eyebrow, link, tags = [], comingSoon = false, ctaLabel }) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = (e) => {
    if (e.pointerType === 'touch' && !flipped) {
      e.preventDefault();
      setFlipped(true);
    }
  };

  const handleBlur = (e) => {
    if (!e.currentTarget.contains(e.relatedTarget)) {
      setFlipped(false);
    }
  };

  const preview = summary ?? description;
  const actionText = ctaLabel ?? (link?.startsWith('/') ? 'open project' : 'view project');

  const inner = (
    <div className={`card-flip${comingSoon ? ' card--soon' : ''}${flipped ? ' card-flip--flipped' : ''}`}>
      <div className="card-face card-face--front">
        {eyebrow && <span className="card-eyebrow">{eyebrow}</span>}
        <h2>{title}</h2>
        <p className="card-front-summary">{preview}</p>
        {tags.length > 0 && (
          <div className="card-tags card-front-tags">
            {tags.slice(0, 3).map((tag) => (
              <span key={tag} className="card-tag">{tag}</span>
            ))}
          </div>
        )}
        <span className="card-flip-hint">{link ? actionText : 'explore'}</span>
      </div>
      <div className="card-face card-face--back">
        <h2 className="card-back-title">{title}</h2>
        <div className="card-back-body">
          <p>{description}</p>
        </div>
        {tags.length > 0 && (
          <div className="card-tags card-back-footer">
            {tags.map((tag) => (
              <span key={tag} className="card-tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  if (!link) return inner;

  const isInternal = link.startsWith('/');
  return isInternal ? (
    <Link href={link} onClick={handleClick} onFocus={() => setFlipped(true)} onBlur={handleBlur} aria-label={`Open ${title}`}>
      {inner}
    </Link>
  ) : (
    <a href={link} target="_blank" rel="noopener noreferrer" onClick={handleClick} onFocus={() => setFlipped(true)} onBlur={handleBlur} aria-label={`Open ${title} in a new tab`}>
      {inner}
    </a>
  );
};

export default Card;
