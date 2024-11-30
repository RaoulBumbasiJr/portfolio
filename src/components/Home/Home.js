import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Lightbulb from "../../assets/svg/lightbulb";

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
        <div className="homeBlock">
          <h2 className="homeHeader">Research</h2>
          <Lightbulb className="homeSVG" />
          <p className="homeParagraph">
            I will research your product and create a website <br /> that
            matches your market flawlessly.
          </p>
        </div>
        <div className="homeBlock">
          <h2 className="homeHeader">Research</h2>
          <Lightbulb className="homeSVG" />
          <p className="homeParagraph">
            I will research your product and create a website <br /> that
            matches your market flawlessly.
          </p>
        </div>
        <div className="homeBlock">
          <h2 className="homeHeader">Research</h2>
          <Lightbulb className="homeSVG" />
          <p className="homeParagraph">
            I will research your product and create a website
            <br /> that matches your market flawlessly.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
