import { portfolioData } from "../utils/portfolioData";

import "../styles/portfolio.scss";

const Portfolio = () => {
  return (
    <>
      <div className="portfolio">
        <div className="portfolio__content">
          <h2 className="portfolio__title">Выполненные проекты</h2>
          <div className="portfolio__group">
            {portfolioData.map((item) => (
              <div className="card" key={item.id}>
                <img
                  src={`../assets${item.imgPath}`}
                  alt="portfolio image"
                  className="card__image"
                />
                <h4 className="card__title">{item.title}</h4>
                <button className="card__btn">Посмотреть</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
