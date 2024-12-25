import React from "react";
import "./Work.css";
import Tag from "../../assets/svg/Tag";
import skateapp from "../../assets/images/skateapp.png";

const Work = () => {
  return (
    <div>
      <div className="workSection1">
        <h1 className="workHeading1">Check out my portfolio</h1>
      </div>
      <div className="workColumn1">
        <div className="workTextContainer">
          <h2 className="projectTitle">SKATEAPP.NET</h2>
          <p className="projectDescription">
            Website created for mobile app SkateApp. Made <br /> pages using
            React Native. Front-end website <br /> and mobile development.
          </p>
          <div className="tags">
            <Tag />
            <t className="tagTitle">Website Development</t>
            <Tag />
            <t className="tagTitle">React Native</t>
          </div>
        </div>
        <div className="workImageContainer">
          <img src={skateapp} alt="skateapp" width="605" height="290" />
        </div>
      </div>
      <div className="workColumn1">
        <div className="workImageContainer">
          <img src={skateapp} alt="skateapp" width="605" height="290" />
        </div>
      </div>
    </div>
  );
};

export default Work;
