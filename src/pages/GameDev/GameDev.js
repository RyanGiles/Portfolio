import "./GameDev.scss";

function GameDev() {
  return (
    <div className="GameDev">
      <h1 className="GameDev-title">GameDev</h1>

      <div className="portfolio">
        <h3 className="portfolio-title">Project A.R.M.O.R.</h3>
        <iframe
          className="portfolio-item"
          src="https://www.youtube.com/embed/JluofMrK23o?si=xWtaPOvgqu2T0dqn"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
      <div className="portfolio">
        <h3 className="portfolio-title">Rhythm City</h3>
        <iframe
          className="portfolio-item"
          src="https://www.youtube.com/embed/A34QIyLzQ78?si=qgZ6klUySiaFmXBi"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default GameDev;
