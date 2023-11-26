// src/AdminDashboard.js
import React, { useState, useEffect } from 'react';
import './styles.css';

const AdminDashboard = ({ fetchData }) => {
  const [courseData, setCourseData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [newCourse, setNewCourse] = useState({
    name: '',
    code: '',
    startDate: '',
    endDate: '',
    additionalInfo: '',
  });
  const [courseToDelete, setCourseToDelete] = useState('');
  const [programToView, setProgramToView] = useState('');
  // Added state for fetched data
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the backend when the component mounts
    const fetchDataFromBackend = async () => {
      try {
        const result = await fetchData();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchDataFromBackend();
  }, [fetchData]);


  const handleAddCourse = () => {
    if (
      newCourse.name.trim() === '' ||
      newCourse.code.trim() === '' ||
      newCourse.startDate.trim() === '' ||
      newCourse.endDate.trim() === ''
    ) {
      console.log('Please fill in all required fields.');
      return;
    }// Example logic to add a new course
    setCourseData([...courseData, newCourse]);
    // Reset the newCourse state for the next entry
    setNewCourse({
      name: '',
      code: '',
      startDate: '',
      endDate: '',
      additionalInfo: '',
    });
  };

  const handleSearchCourse = () => {
    // Example logic to search for a specific course
    const filteredCourses = courseData.filter(
      (course) =>
        course.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.code.toLowerCase().includes(searchQuery.toLowerCase())
    );
    console.log('Search Results:', filteredCourses);
  };

  const handleDeleteCourse = () => {
    // Example logic to delete a course by code
    const updatedCourses = courseData.filter((course) => course.code !== courseToDelete);
    setCourseData(updatedCourses);
    // Reset the courseToDelete state after deletion
    setCourseToDelete('');
  };

  const handleViewRegisteredStudents = () => {
    // Example logic to view registered students for a specific program
    // For simplicity, let's just log the program for now
    console.log('Viewing registered students for program:', programToView);
  };

  const handleViewFormSubmissions = () => {
    // Example logic to view form submissions
    // For simplicity, let's just log a message for now
    console.log('Viewing form submissions');
  };

  return (
    <div className="container">
      <h2>Admin Dashboard</h2>
      <div>
        <h3>Add New Course</h3>
        <form>
          {/* Add form fields for new course */}
          <button type="button" onClick={handleAddCourse}>
            Add Course
          </button>
        </form>
      </div>
      <div>
        <h3>Search Courses</h3>
        <input
          type="text"
          placeholder="Enter course name or code"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="button" onClick={handleSearchCourse}>
          Search
        </button>
      </div>
      <div>
        <h3>Delete Course</h3>
        <form>
          {/* Add form field for course code to delete */}
          <input
            type="text"
            placeholder="Enter course code"
            value={courseToDelete}
            onChange={(e) => setCourseToDelete(e.target.value)}
          />
          <button type="button" onClick={handleDeleteCourse}>
            Delete Course
          </button>
        </form>
      </div>
      <div>
        <h3>View Registered Students</h3>
        <form>
          {/* Add form field for program to view registered students */}
          <input
            type="text"
            placeholder="Enter program name"
            value={programToView}
            onChange={(e) => setProgramToView(e.target.value)}
          />
          <button type="button" onClick={handleViewRegisteredStudents}>
            View Students
          </button>
        </form>
      </div>
      <div>
        <h3>View Form Submissions</h3>
        <button type="button" onClick={handleViewFormSubmissions}>
          View Submissions
        </button>
      </div>
    </div>
    
  );
};

export default AdminDashboard;

