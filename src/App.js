import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import SoloProjects from "./pages/SoloProjects/SoloProjects";
import GroupProjects from "./pages/GroupProjects/GroupProjects";
import Project from "./pages/Project/Project";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="soloProjects" element={<SoloProjects />} />
          <Route path="groupProjects" element={<GroupProjects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="project/:projectName" element={<Project />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
