import telegram from "/assets/telegram.svg";
import vk from "/assets/vk.svg";

import "../styles/footer.scss";
import { Link, NavLink } from "react-router-dom";

const URL = import.meta.env.VITE_API_URL;

const Footer = () => {
  const date = new Date();
  return (
    <>
      <footer className="footer">
        <h3 className="footer__title">Контакты</h3>
        <div className="contacts">
          <div className="contacts__block">
            <div className="phone">
              <h4 className="title">Телефон</h4>
              <a href="tel:+79649552284" className="contact-link">
                +7 964 955 22 84
              </a>
            </div>
            <div className="phone">
              <h4 className="title">Почта</h4>
              <a href="mailto:ashimka@internet.ru" className="contact-link">
                ashimka@internet.ru
              </a>
            </div>
          </div>
          <div className="contacts__social">
            <div className="social">
              <Link
                to="https://vk.com/ashimka"
                target="_blank"
                rel="noopener noreferrer"
                className="social__link"
              >
                <img src={vk} alt="logo vkontakte" className="icon" />
              </Link>
              <Link
                to="https://t.me/ashimka_M"
                target="_blank"
                rel="noopener noreferrer"
                className="social__link"
              >
                <img src={telegram} alt="logo telegram" className="icon" />
              </Link>
            </div>
          </div>
        </div>
        <div className="footer__policy">
          <Link
            className="link-policy"
            to={`${URL}/assets/privacy-policy`}
            type="application/pdf"
          >
            Политика конфиденциальности
          </Link>

          <span className="copyright">
            <NavLink to={"/login"}>&copy;</NavLink>
            Web Crafters Stidio 2021 - {date.getFullYear()}
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
