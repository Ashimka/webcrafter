import "../styles/hero.scss";
import { FetchData } from "../types";
import { SERVER_URL } from "../config/api.config";

const Hero: React.FC<FetchData> = (data) => {
  return (
    <>
      <div className="hero">
        <div className="hero__content">
          <div className="hero__group">
            <h2 className="title">{data.title}</h2>
            <p className="description">{data.description}</p>
          </div>
          <div className="hero__image">
            <img
              src={`${SERVER_URL}${data.image}`}
              alt="hero image"
              className="image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
