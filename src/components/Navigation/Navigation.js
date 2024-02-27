import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <nav className="nav">
      <ul className="navList">
        <li className="navItem">
          <Link to="/" className="name">
            Raoul Bumbasi Jr
          </Link>
        </li>
        <li className="navItem">
          <Link to="/" className="link">
            Home
          </Link>
        </li>
        <li className="navItem">
          <Link to="/work" className="link">
            Work
          </Link>
        </li>
        <li className="navItem">
          <Link to="/contact" className="link">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navigation;
