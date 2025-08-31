import "./GameDev.scss";
import BG_Transition from "../../Assets/BG_Transition.mp4";
import Projects from "./ProjectInfo.json";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



function GameDev() {
  const [images, setImages] = useState(Projects.images.home);
  const [page, setPage] = useState('home');
  const navigate = useNavigate();

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
        if (items[index].split('.')[1] === "mp4") {
          return <video src={items[index]} className="portfolio__img"></video>
        } else if ((items[index].split('.')[1] === "PNG") || (items[index].split('.')[1] === "jpg")) {
          return <img src={items[index]} alt="projectimage" className="portfolio__img" />
        } else {
          return <div className="portfolio__img">{items[index]}</div>
        }
    }
  }

  function renderPageButton(index) {
    if (page !== 'home'){
      console.log(Math.floor(images.length / 4))
      if(index === 0 && page !== 0) {
        return <img onClick={() => {setPage(page -1)}} src="/PrevPage.png" alt="back" className="page__back" />
      } else if (index === 1 && page !== (Math.floor(images.length / 4) - 1)) {
        return <img onClick={() => {setPage(page +1)}} src="/NextPage.png" alt="back" className="page__next" />
      }
    }
  }

  function handleBack() {
    if (page === 'home'){
      navigate(-1);
    } else{
      setImages(Projects.images.home);
      setPage('home');
    }
  }

  return (
    <div className="GameDev">
      <video autoPlay muted className="homepage-bg">
        <source src={BG_Transition} type="video/mp4" />
        Your browser does not support HTML5 video.
      </video>
      {renderPageButton(0)}
      <div className="portfolio">
        <img onClick={() => {handleBack()}} src="/back.png" alt="back" className="back" />
        <div className="portfolio__item">{getItem(0)}</div>
        <div className="portfolio__item">{getItem(1)}</div>
        <div className="portfolio__item">{getItem(2)}</div>
        <div className="portfolio__item">{getItem(3)}</div>
        <img src="/LogoTV.png" alt="logo" className="TVlogo" />
      </div>
      {renderPageButton(1)}
    </div>
  );
}

export default GameDev;
