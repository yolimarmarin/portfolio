import style from "../../styles/Cards.module.css";

const PrimaryCards = ({ title, text, icon }) => {
  return (
    <div className={style.primaryCardContainer}>
      <div className={style.primaryCardTitle}>{title}</div>
      <div className={style.primaryCardIconContainer}>
        <img src={icon} alt={icon} />
      </div>
      <div className={style.primaryCardText}>{text}</div>
    </div>
  );
};

const PortfolioCards = ({ img, title, text, callback, url, tags = [] }) => {
  return (
    <div
      className={style.portfolioCardContainer}
      onClick={() => {
        callback(url);
      }}
    >
      <img src={img} alt={img} className={style.portfolioCardImg} />
      <div>
      <div className={style.portfolioCardTitle}>{title}</div>
      <div className={style.portfolioCardText}>{text}</div>
      </div>
      <div className={style.portfolioCardTagsContainer}>
        {tags.map((tag, key) => (
          <div key={key} className={style.portfolioCardTag}>
            {tag}
          </div>
        ))}
      </div>
    </div>
  );
};

export { PrimaryCards, PortfolioCards };
