import "./Header.scss";
import siteLogo from "../../Assets/Icons/Logo_Clear.png";
import { Link } from "react-router-dom";

let homeClass = "";
let contactClass = "";

function Header({ page, setPage }) {
  page === "home"
    ? (homeClass = "nav__item-active")
    : (homeClass = "nav__item-inactive");
  page === "contact"
    ? (contactClass = "nav__item-active")
    : (contactClass = "nav__item-inactive");
  return (
    <header className="header">
      <div className="header__branding">
        <img src={siteLogo} alt="site logo" className="header__logo" />
        <h1 className="header__title">Ryan Giles</h1>
      </div>
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">
            <Link to="/" onClick={() => setPage("home")}>
              <h3 className={homeClass}>Portfolio</h3>
            </Link>
          </li>
          <li className="nav__item">
            <Link to="/contact" onClick={() => setPage("contact")}>
              <h3 className={contactClass}>Contact</h3>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
