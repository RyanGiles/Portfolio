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
      return <div className="portfolio__item"><img src={images[index]} onClick={() => {setImages(project); setPage(0)}} alt="test" className="portfolio__img" /></div>
    } else {
      let items = [];
      for (let i = 0; i < 4; i++) {
        items.push(images[i+(page*4)]);
      }
      if (items[index] === undefined) {
        return;
      }
        if (items[index].split('.')[1] === "mp4") {
          return (
          <div className="portfolio__item">
          <video autoPlay controls loop src={items[index]} className="portfolio__img"></video>
          </div>);
        } else if ((items[index].split('.')[1] === "PNG") || (items[index].split('.')[1] === "jpg")) {
          return (
            <div className="portfolio__item">
          <img src={items[index]} alt="projectimage" className="portfolio__img" />
          </div>);
        } else {
          return <div className="portfolio__item"><div className="portfolio__img">{items[index]}</div></div>
        }
    }
  }

  function renderPageButton(index) {
    if (page !== 'home'){
      if(index === 0 && page !== 0) {
        return <img onClick={() => {setPage(page -1)}} src="/PrevPage.png" alt="back" className="page__back" />
      } else if ((index === 1 && page < (Math.floor(images.length / 4) - 1)) || (index === 1 && page === (Math.floor(images.length/4) - 2) && images.length%4 === 0)) {
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
        {getItem(0)}
        {getItem(1)}
        {getItem(2)}
        {getItem(3)}
      </div>
      {renderPageButton(1)}
    </div>
  );
}

export default GameDev;
