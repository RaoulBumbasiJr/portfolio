import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Lightbulb from "../../assets/svg/Lightbulb";
import Mobile from "../../assets/svg/Mobile";
import Optimize from "../../assets/svg/Optimize";

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
          <h2 className="homeHeader">Build</h2>
          <Mobile className="homeSVG" />
          <p className="homeParagraph">
            I will build and develop the <br /> website you desire.
          </p>
        </div>
        <div className="homeBlock">
          <h2 className="homeHeader">Optimize</h2>
          <Optimize className="homeSVG" />
          <p className="homeParagraph">
            I will build a website fully optimized for web and <br /> mobile
            platforms.
          </p>
        </div>
      </div>
      <div className="homeSection2">
        <Link to="/contact" className="homeButton">
          GET IN TOUCH WITH ME
        </Link>
      </div>
    </div>
  );
};

export default Home;
