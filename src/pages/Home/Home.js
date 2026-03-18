import "./Home.scss";
import siteLogo from "../../Assets/Icons/Logo_Clear.png";
import SoloProjects from "../../Assets/SoloProjects.png";
import GroupProjects from "../../Assets/GroupProjects.png";
import aboutme from "../../Assets/AboutMe.png";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <div className="homepage">
      <header className="header">
        <div className="header__branding">
          <h1 className="header__title">Ryan</h1>
          <img src={siteLogo} alt="site logo" className="header__logo" />
          <h1 className="header__title">Giles</h1>
        </div>
      </header>
      <div className="body">
        <nav className="nav">
          <ul className="nav__list">
            <li
              className="nav__item"
              onClick={() => {
                navigate("/soloProjects");
              }}
            >
              <img
                src={SoloProjects}
                alt="Environment Art"
                className="nav_img"
              />
            </li>
            <li
              className="nav__item"
              onClick={() => {
                navigate("/groupProjects");
              }}
            >
              <img
                src={GroupProjects}
                alt="GroupProjects"
                className="nav_img"
              />
            </li>
            <li
              className="nav__item"
              onClick={() => {
                navigate("/contact");
              }}
            >
              <img src={aboutme} alt="About Me" className="nav_img" />
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Home;
