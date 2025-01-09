import { Link, NavLink } from "react-router-dom";

import logo from "/assets/logo.png";
import telegram from "/assets/telegram.svg";
import vk from "/assets/vk.svg";

import "../styles/header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <NavLink to={"/"}>
          <img src={logo} alt="logo icon" className="logo_icon" />
        </NavLink>
        <span className="logo_title">web crafters</span>
      </div>
      <div className="header__socials">
        <Link
          to="https://t.me/ashimka_M"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={telegram} alt="telegram icon" className="icon" />
        </Link>
        <Link
          to="https://vk.com/ashimka"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={vk} alt="vkontakte icon" className="icon" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
