import { SERVER_URL } from "../config/api.config";
import "../styles/features.scss";
import { FeaturesDataType } from "../types";

const Features = ({ feature }: { feature: FeaturesDataType }) => {
  return (
    <>
      <div className="features">
        <div className="features__wrapper">
          <h2 className="features__title">С нами удобно работать</h2>
          <div className="features__content">
            {feature.length > 0 &&
              feature.map((item) => (
                <div className="features__list" key={item.id}>
                  <img
                    src={`${SERVER_URL}${item.image}`}
                    alt="icon"
                    className="image"
                  />
                  <h3 className="title">{item.title}</h3>
                  <p className="description">{item.description}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
