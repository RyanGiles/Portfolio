import "./Project.scss";
import nodes from "./ProjectInfo.json";
import { useNavigate, useParams } from "react-router-dom";
import Node from "../../components/Node/Node";

function Project() {
  const navigate = useNavigate();
  const { projectName } = useParams();
  const projectDetails = nodes.projects[projectName];

  console.log(projectDetails);

  return (
    <div className="Project">
      <img
        onClick={() => {
          navigate(-1);
        }}
        src="/back.png"
        alt="back"
        className="back"
      />
      <div className="nodes">
        {projectDetails.map((node) => (
          <Node nodeInfo={node} />
        ))}
      </div>
    </div>
  );
}

export default Project;
