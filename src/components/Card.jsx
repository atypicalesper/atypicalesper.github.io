'use client';
import { useState } from 'react';
import Link from 'next/link';

const Card = ({ title, description, link, tags = [], comingSoon = false }) => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = (e) => {
    if (e.pointerType === 'touch' && !flipped) {
      e.preventDefault();
      setFlipped(true);
    }
  };

  const inner = (
    <div className={`card-flip${comingSoon ? ' card--soon' : ''}${flipped ? ' card-flip--flipped' : ''}`}>
      <div className="card-face card-face--front">
        <h2>{title}</h2>
        <span className="card-flip-hint">explore</span>
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
    <Link href={link} onClick={handleClick}>{inner}</Link>
  ) : (
    <a href={link} target="_blank" rel="noopener noreferrer" onClick={handleClick}>{inner}</a>
  );
};

export default Card;
