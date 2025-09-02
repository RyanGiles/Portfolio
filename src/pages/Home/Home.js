import "./Home.scss";
import BG_Video from "../../Assets/BG_Video.mp4";
import siteLogo from "../../Assets/Icons/Logo_Clear.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="homepage">
      <video autoPlay muted loop className="homepage-bg">
        <source src={BG_Video} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      <header className="header">
        <div className="header__branding">
          <img src={siteLogo} alt="site logo" className="header__logo" />
          <h1 className="header__title">Ryan<br/>Giles</h1>
        </div>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/gameDev" className="nav__link">
                <h3 className="nav__text">
                  <span className="nav__main">Play</span>
                  <span className="nav__reveal">
                    <span className="nav__subtext">—Game Development</span>
                  </span>
                </h3>
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/gameDev" className="nav__link">
                <h3 className="nav__text">
                  <span className="nav__main">Controls</span>
                  <span className="nav__reveal">
                    <span className="nav__subtext">—Web Development</span>
                  </span>
                </h3>
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/gameDev" className="nav__link">
                <h3 className="nav__text">
                  <span className="nav__main">Settings</span>
                  <span className="nav__reveal">
                    <span className="nav__subtext">—Contact/About Me</span>
                  </span>
                </h3>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Home;
