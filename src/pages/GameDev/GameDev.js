import "./GameDev.scss";
import BG_Transition from "../../Assets/BG_Transition.mp4";

function GameDev() {
  return (
    <div className="GameDev">
      <video autoPlay muted className="homepage-bg">
              <source src={BG_Transition} type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
      <h1 className="GameDev-title">GameDev</h1>
      <div className="portfolio">
        <div className="portfolio__item"></div>
        <div className="portfolio__item"></div>
        <div className="portfolio__item"></div>
        <div className="portfolio__item"></div>
      </div>
    </div>
  );
}

export default GameDev;
