import React from "react";
import "./Work.css";
import Tag from "../../assets/svg/Tag";
import skateapp from "../../assets/images/skateapp.png";
import superapps from "../../assets/images/superapps.png";
import skateappmobile from "../../assets/images/skateappMobile.png";
import pokedexapp from "../../assets/images/pokedexapp.png";
import { Link } from "react-router-dom";

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
          <div className="projectLinkWrapper">
            <a
              href="https://www.skateapp.net/"
              target="_blank"
              rel="noopener noreferrer"
              className="projectLink"
            >
              VIEW PROJECT
            </a>
          </div>
        </div>
        <div className="workImageContainer">
          <img src={skateapp} alt="skateapp" width="605" height="290" />
        </div>
      </div>
      <div className="workColumn1">
        <div className="workImageContainer">
          <img src={superapps} alt="superapps" width="605" height="290" />
        </div>
        <div className="workTextContainer">
          <h2 className="projectTitle">SUPERAPPS.COM</h2>
          <p className="projectDescription">
            Website created for SuperApps LLC. Made <br /> pages using React
            Native. Front-end website <br /> and mobile development.
          </p>
          <div className="tags">
            <Tag />
            <t className="tagTitle">Website Development</t>
            <Tag />
            <t className="tagTitle">React Native</t>
          </div>
          <a
            href="https://www.superapps.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="projectLink"
          >
            VIEW PROJECT
          </a>
        </div>
      </div>
      <div className="workColumn1">
        <div className="workTextContainer">
          <h2 className="projectTitle">SKATEAPP MOBILE</h2>
          <p className="projectDescription">
            Mobile app created for skaters to find skate <br /> spots using a
            GPS system. Coded with React <br /> Native and Expo for IOS and
            Android.
          </p>
          <div className="tags">
            <Tag />
            <t className="tagTitle">Mobile Development</t>
            <Tag />
            <t className="tagTitle">React Native</t>
          </div>
          <Link
            to="/skateappmobile"
            target="_blank"
            rel="noopener noreferrer"
            className="projectLink"
          >
            VIEW PROJECT
          </Link>
        </div>
        <div className="workImageContainer">
          <img src={skateappmobile} alt="skateapp" width="605" height="290" />
        </div>
      </div>
      <div className="workColumn1">
        <div className="workImageContainer">
          <img src={pokedexapp} alt="skateapp" width="605" height="290" />
        </div>
        <div className="workTextContainer">
          <h2 className="projectTitle">POKEDEX APP</h2>
          <p className="projectDescription">
            Mobile app that features a fully functional <br /> Pokedex to search
            Pokemon using the PokeAPI. <br /> Coded with React Native and Expo
            for IOS and <br /> Android.
          </p>
          <div className="tags">
            <Tag />
            <t className="tagTitle">Mobile Development</t>
            <Tag />
            <t className="tagTitle">React Native</t>
          </div>
          <Link
            to="/pokedex"
            target="_blank"
            rel="noopener noreferrer"
            className="projectLink"
          >
            VIEW PROJECT
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Work;
