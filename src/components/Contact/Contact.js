import React, { useState } from "react";
import emailjs from "@emailjs/browser";
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

    console.log("Form Data to send:", formData);

    const serviceId = "service_9tp0tcm"; // Replace with your EmailJS Service ID
    const templateId = "template_t48s3il"; // Replace with your EmailJS Template ID
    const publicKey = "oS2eEjMogFb8RCanX"; // Replace with your Public API Key

    const templateParams = {
      name: formData.name,
      email: formData.email,
      budget: formData.budget,
      description: formData.description,
    };

    console.log("Template Params to send:", templateParams);

    emailjs
      .send(serviceId, templateId, formData, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response.status, response.text);
        alert("Email sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send email. Please try again.");
      });
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
