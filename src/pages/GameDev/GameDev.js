import "./GameDev.scss";
import BG_Transition from "../../Assets/BG_Transition.mp4";
import Projects from "./ProjectInfo.json";
import { useState } from "react";



function GameDev() {
  const [images, setImages] = useState(Projects.images.home);
  let home = true;

  function getItem(index) {
    if (home) {
      let project;
      switch (index){
        case 0:
          project = Projects.images.p1;
          break;
        case 1:
          project = Projects.images.p2;
          break;
        case 2:
          project = Projects.images.p3;
          break;
        case 3:
          project = Projects.images.p4;
          break;
        default:
          console.error("Switch case in getItems hit default");
          break;
      }
      return <img src={images[index]} onClick={() => {setImages(project)}} alt="test" className="portfolio__img" />
    } else {
      //code here to find page index and then create html tags based on file type
    }
  }

  return (
    <div className="GameDev">
      <video autoPlay muted className="homepage-bg">
              <source src={BG_Transition} type="video/mp4" />
              Your browser does not support HTML5 video.
            </video>
      <div className="portfolio">
        <div className="portfolio__item">{getItem(0)}</div>
        <div className="portfolio__item">{getItem(1)}</div>
        <div className="portfolio__item">{getItem(2)}</div>
        <div className="portfolio__item">{getItem(3)}</div>
      </div>
    </div>
  );
}

export default GameDev;
