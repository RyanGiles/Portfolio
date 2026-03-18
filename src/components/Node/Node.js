import "./Node.scss";
import NodeBanner from "../../Assets/BPBanner.png";
import BeginPlay from "../../Assets/BeginPlay.png";
import FunctionStart from "../../Assets/FunctionStart.png";
import Function from "../../Assets/Function.png";
import { useNavigate } from "react-router-dom";

function getContent(nodeInfo) {
  if ("text" in nodeInfo) {
    return <p className="node__text">{nodeInfo.text}</p>;
  } else if ("image" in nodeInfo) {
    return (
      <img src={nodeInfo.image} alt={nodeInfo.name} className="node__image" />
    );
  } else {
    return (
      <video
        loop
        controls
        autoPlay
        src={nodeInfo.video}
        className="node__image"
      ></video>
    );
  }
}

function fullscreenImage(image) {
  // Create overlay
  const overlay = document.createElement("div");
  overlay.style.position = "fixed";
  overlay.style.top = "0";
  overlay.style.left = "0";
  overlay.style.width = "100vw";
  overlay.style.height = "100vh";
  overlay.style.backgroundColor = "rgba(0, 0, 0, 0.9)";
  overlay.style.display = "flex";
  overlay.style.alignItems = "center";
  overlay.style.justifyContent = "center";
  overlay.style.zIndex = "9999";
  overlay.style.cursor = "pointer";

  // Create image
  const img = document.createElement("img");
  img.src = image;
  img.style.maxWidth = "90%";
  img.style.maxHeight = "90%";
  img.style.objectFit = "contain";

  // Append image to overlay
  overlay.appendChild(img);

  // Remove overlay on click
  overlay.onclick = () => {
    document.body.removeChild(overlay);
  };

  // Add to page
  document.body.appendChild(overlay);
}

function Node({ nodeInfo }) {
  const navigate = useNavigate();

  if (nodeInfo.isLink) {
    return (
      <div
        className="node clickable"
        onClick={() => {
          navigate("/project/" + nodeInfo.name);
          window.scrollTo(0, 0);
        }}
      >
        <img src={Function} alt="NodeBanner" className="node__banner" />
        <h3 className="node__title node__title-offset">{nodeInfo.title}</h3>
        <div className="node__content">{getContent(nodeInfo)}</div>
      </div>
    );
  } else if (nodeInfo.title === "Begin Play") {
    return (
      <div className="node">
        <img src={BeginPlay} alt="NodeBanner" className="node__banner" />
        <h3 className="node__title node__title-offset">{nodeInfo.title}</h3>
        <div className="node__content">{getContent(nodeInfo)}</div>
      </div>
    );
  } else if (nodeInfo.name === "Start") {
    return (
      <div className="node">
        <img src={FunctionStart} alt="NodeBanner" className="node__banner" />
        <h3 className="node__title node__title-offset">{nodeInfo.title}</h3>
        <div className="node__content">{getContent(nodeInfo)}</div>
      </div>
    );
  } else if (!nodeInfo.isLink && "image" in nodeInfo) {
    return (
      <div
        className="node"
        onClick={() => {
          fullscreenImage(nodeInfo.image);
        }}
      >
        <img src={NodeBanner} alt="NodeBanner" className="node__banner" />
        <h3 className="node__title">{nodeInfo.title}</h3>
        <div className="node__content">{getContent(nodeInfo)}</div>
      </div>
    );
  } else {
    return (
      <div className="node">
        <img src={NodeBanner} alt="NodeBanner" className="node__banner" />
        <h3 className="node__title">{nodeInfo.title}</h3>
        <div className="node__content">{getContent(nodeInfo)}</div>
      </div>
    );
  }
}

export default Node;
