import Link from 'next/link';

const Card = ({ title, description, summary, eyebrow, link, tags = [], comingSoon = false, ctaLabel }) => {
  const preview = summary ?? description;
  const actionText = ctaLabel ?? (link?.startsWith('/') ? 'open project' : 'view project');

  const inner = (
    <div className={`card-shell${comingSoon ? ' card--soon' : ''}`}>
      <div className="card-face card-face--front">
        {eyebrow && <span className="card-eyebrow">{eyebrow}</span>}
        <h2>{title}</h2>
        <p className="card-front-summary">{preview}</p>
        {tags.length > 0 && (
          <div className="card-tags card-front-tags">
            {tags.slice(0, 4).map((tag) => (
              <span key={tag} className="card-tag">{tag}</span>
            ))}
          </div>
        )}
        <div className="card-action-row">
          <span className="card-flip-hint">{link ? actionText : 'explore'}</span>
          <span className="card-action-arrow" aria-hidden="true">↗</span>
        </div>
      </div>
    </div>
  );

  if (!link) return inner;

  const isInternal = link.startsWith('/');
  return isInternal ? (
    <Link href={link} aria-label={`Open ${title}`}>
      {inner}
    </Link>
  ) : (
    <a href={link} target="_blank" rel="noopener noreferrer" aria-label={`Open ${title} in a new tab`}>
      {inner}
    </a>
  );
};

export default Card;
