import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Work from "./components/Work/Work";
import Contact from "./components/Contact/Contact";
import Navigation from "./components/Navigation/Navigation";
import SkateAppMobile from "./components/SkateApp/SkateAppMobile";
import Pokedex from "./components/Pokedex/Pokedex";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/skateappmobile" element={<SkateAppMobile />} />
        <Route path="/pokedex" element={<Pokedex />} />
      </Routes>
    </Router>
  );
}

export default App;
