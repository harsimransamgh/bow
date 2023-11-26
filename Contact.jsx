// src/Contact.js
import React, { useState } from 'react';
import './styles.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    question: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSendQuestion = () => {
    // Add logic to send the question to the admin
    // For simplicity, let's log the form data for now
    console.log('Sending question:', formData);
  };

  return (
    <div className="container">
      <h2>Contact Admin</h2>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Question:
          <textarea
            name="question"
            value={formData.question}
            onChange={handleInputChange}
          />
        </label>
        <button type="button" onClick={handleSendQuestion}>
          Send Question
        </button>
      </form>
    </div>
  );
};

export default Contact;
