import "./Home.scss";
import BG_Video from "../../Assets/BG_Video.mp4";
import siteLogo from "../../Assets/Icons/Logo_Clear.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="homepage">
      <header className="header">
        <div className="header__branding">
          <img src={siteLogo} alt="site logo" className="header__logo" />
          <h1 className="header__title">Ryan Giles</h1>
        </div>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/">
                <h3 className="nav__text">Play</h3>
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/webDev">
                <h3 className="nav__text">Controls</h3>
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/contact">
                <h3 className="nav__text">Settings</h3>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <video autoPlay muted loop className="homepage-bg">
        <source src={BG_Video} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
    </div>
  );
}

export default Home;
