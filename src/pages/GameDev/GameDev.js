import "./GameDev.scss";
import BG_Transition from "../../Assets/BG_Transition.mp4";
import Projects from "./ProjectInfo.json";
import { useState } from "react";



function GameDev() {
  const [images, setImages] = useState(Projects.images.home);
  const [page, setPage] = useState('home');

  function getItem(index) {
    if (page === 'home') {
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
      return <img src={images[index]} onClick={() => {setImages(project); setPage(0)}} alt="test" className="portfolio__img" />
    } else {
      let items = [];
      for (let i = 0; i < 4; i++) {
        items.push(images[i+(page*4)]);
      }
      console.log(items.length); //showing 4, but making 10
      return items.map((item) => {
        if (item.split('.')[1] === "mp4") {
          return <video src={item} className="portfolio__img"></video>
        } else if (item.split('.')[1] === "PNG" || item.split('.')[1] === "jpg") {
          return <img src={item} alt="projectimage" className="portfolio__img" />
        } else {
          return <div className="portfolio__img">{item}</div>
        }
      })
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
