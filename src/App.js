import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";

import { useState } from "react";

let active = "";

switch (window.location.pathname) {
  case "/contact":
    active = "contact";
    break;
  default:
    active = "home";
    break;
}

function App() {
  const [currPage, setCurrPage] = useState(active);
  return (
    <div className="App">
      <BrowserRouter>
        <Header page={currPage} setPage={setCurrPage} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
