// import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import SearchCourses from './SearchCourses';
import Contact from './Contact';
import AdminDashboard from './AdminDashboard';
import './styles.css';

const fetchAdminData = async () => {
  try {
    const response = await fetch('http://localhost:3001/api/courses');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};


const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/search">Search Courses</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/admin">Admin Dashboard</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/search" element={<SearchCourses />} />
          <Route path="/contact" element={<Contact />} />
          {/* Pass the data fetching code as a prop to AdminDashboard */}
          <Route path="/admin" element={<AdminDashboard fetchData={fetchAdminData} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;



