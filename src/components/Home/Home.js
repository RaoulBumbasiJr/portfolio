import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="homeBackground0">
        <h1 className="homeName">RAOUL BUMBASI JR</h1>
        <h2 className="homeTitle0">WEBSITE DEVELOPER</h2>
        <p className="homeTitle1">html/css, javascript, react, and adobe</p>
        <Link to="/work" className="homeButton">
          SEE MY WORK
        </Link>
      </div>
      <div className="homeSection1">
        <div>
          <h2></h2>
        </div>
      </div>
    </div>
  );
};

export default Home;
