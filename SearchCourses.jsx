
import React, { useState } from 'react';
import { courses } from './Data';
import './styles.css';

const SearchCourses = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchCourse = () => {
    // Add logic to search for a specific course
    const filteredCourses = courses.filter(
      (course) =>
        course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.code.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setSearchResults(filteredCourses);
  };

  return (
    <div className="container">
      <h2>Search Courses</h2>
      <input
        type="text"
        placeholder="Enter course name or code"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button type="button" onClick={handleSearchCourse}>
        Search
      </button>
      <div>
        <h3>Search Results</h3>
        <ul>
          {searchResults.map((course) => (
            <li key={course.code}>
              {course.code} - {course.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchCourses;

