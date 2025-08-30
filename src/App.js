import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import GameDev from "./pages/GameDev/GameDev";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="gameDev" element={<GameDev />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
