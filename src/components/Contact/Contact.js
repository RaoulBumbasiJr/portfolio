import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div>
      <div className="contactSection1">
        <h1 className="contactHeading1">Let's have a conversation</h1>
      </div>
      <div>
        <input className="name"></input>
        <input className="email"></input>
        <input className="budget"></input>
        <input className="project description"></input>
      </div>
    </div>
  );
};

export default Contact;
