const Card = ({ title, description, imageSrc, link }) => {
  const cardContent = (
    <div className="card">
      <img src={imageSrc} alt={title} />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {cardContent}
    </a>
  ) : (
    cardContent
  );
};

export default Card;