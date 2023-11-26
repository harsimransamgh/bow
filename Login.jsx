
// src/Login.js
import React, { useState } from 'react';
import './styles.css';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = () => {
    // Mock login logic for demonstration purposes
    if (formData.username === 'demo' && formData.password === 'password') {
      console.log('Login successful');
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    
    <div className="container">
      <h2>Login</h2>
      <form>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
        {error && <p className="error-message">{error}</p>}
      </form>
      
    </div>
  );
};

export default Login;

