import "./SoloProjects.scss";
import Projects from "./ProjectInfo.json";
import { useNavigate } from "react-router-dom";
import Node from "../../components/Node/Node";

function SoloProjects() {
  const navigate = useNavigate();

  return (
    <div className="SoloProjects">
      <img
        onClick={() => {
          navigate(-1);
        }}
        src="/back.png"
        alt="back"
        className="back"
      />
      <div className="projects">
        {Projects.projects.map((project) => (
          <Node nodeInfo={project} />
        ))}
      </div>
    </div>
  );
}

export default SoloProjects;
