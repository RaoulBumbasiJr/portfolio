import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    budget: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Add your submission logic here, such as an API call
  };

  return (
    <div className="contact-container">
      <div className="contactSection1">
        <h1 className="contactHeading1">Let's have a conversation</h1>
      </div>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name" className="form-label">
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-input name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
        />

        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-input email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />

        <label htmlFor="budget" className="form-label">
          Budget:
        </label>
        <input
          type="text"
          id="budget"
          name="budget"
          className="form-input budget"
          placeholder="Enter your budget"
          value={formData.budget}
          onChange={handleChange}
        />

        <label htmlFor="description" className="form-label">
          Project Description:
        </label>
        <textarea
          id="description"
          name="description"
          className="form-input description"
          placeholder="Describe your project"
          value={formData.description}
          onChange={handleChange}
        />

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
