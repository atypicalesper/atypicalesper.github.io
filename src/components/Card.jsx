import Link from 'next/link';

const Card = ({ title, description, imageSrc, link, tags = [], comingSoon = false }) => {
  const cardContent = (
    <div className={`card${comingSoon ? ' card--soon' : ''}`}>
      {imageSrc && <img src={imageSrc} alt={title} />}
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
        {tags.length > 0 && (
          <div className="card-tags">
            {tags.map((tag) => (
              <span key={tag} className="card-tag">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  if (!link) return cardContent;

  const isInternal = link.startsWith('/');
  return isInternal ? (
    <Link href={link}>{cardContent}</Link>
  ) : (
    <a href={link} target="_blank" rel="noopener noreferrer">{cardContent}</a>
  );
};

export default Card;
