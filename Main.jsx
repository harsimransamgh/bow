// src/Main.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import statement
import Login from './Login';
import Signup from './Signup';
import SearchCourses from './SearchCourses';
import Contact from './Contact';
import AdminDashboard from './AdminDashboard';

const Main = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/searchcourses' element={<SearchCourses />} />
        <Route path='/Contact' element={<Contact/>} />
        <Route path='/AdminDashboard' element={<AdminDashboard/>} />
      </Routes>
    </Router>
  );
};

export default Main;
