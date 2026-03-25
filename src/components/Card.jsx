import Link from 'next/link';

const Card = ({ title, description, link, tags = [], comingSoon = false }) => {
  const inner = (
    <div className={`card-flip${comingSoon ? ' card--soon' : ''}`}>
      <div className="card-face card-face--front">
        <h2>{title}</h2>
        <span className="card-flip-hint">hover to explore</span>
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
    <Link href={link}>{inner}</Link>
  ) : (
    <a href={link} target="_blank" rel="noopener noreferrer">{inner}</a>
  );
};

export default Card;
