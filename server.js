const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');  // Import the cors middleware

const app = express();

// Middleware to parse JSON requests
app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors());

// Set maximum header size (adjust the value as needed)
app.maxHttpHeaderSize = 8192; // 8 KB

// Middleware to parse JSON requests
app.use(bodyParser.json());


let students = [
  { studentId: 'S1', name: 'John Doe', email: 'john@example.com' },
  { studentId: 'S2', name: 'Jane Smith', email: 'jane@example.com' },
  { studentId: 'S3', name: 'Bob Johnson', email: 'bob@example.com' },
  { studentId: 'S4', name: 'Alice Williams', email: 'alice@example.com' },
  { studentId: 'S5', name: 'Charlie Brown', email: 'charlie@example.com' },
  { studentId: 'S6', name: 'Diana Miller', email: 'diana@example.com' },
  { studentId: 'S7', name: 'Ethan Davis', email: 'ethan@example.com' },
  { studentId: 'S8', name: 'Grace Taylor', email: 'grace@example.com' },
  { studentId: 'S9', name: 'Henry Clark', email: 'henry@example.com' },
  { studentId: 'S10', name: 'Fiona Turner', email: 'fiona@example.com' },
  { studentId: 'S11', name: 'George Turner', email: 'george@example.com' },
  { studentId: 'S12', name: 'Helen Adams', email: 'helen@example.com' },

];

let courses = [
  // Term 1
  {
    id: 1,
    code: 'Pr111',
    name: 'Project Management1',
    term: 'Term1',
    registeredStudents: [
      students[0], // John Doe
      students[1], // Jane Smith
    ],
  },
  {
    id: 2,
    code: 'C++111',
    name: 'C++ Programming Fundamentals',
    term: 'Term1',
    registeredStudents: [
      students[2], // Bob Johnson
      students[3], // Alice Williams
    ],
  },
  {
    id: 3,
    code: 'CompM1111',
    name: 'Computer Maintenance',
    term: 'Term1',
    registeredStudents: [
      students[4], // Charlie Brown
      students[5], // Diana Miller
    ],
  },
  {
    id: 4,
    code: 'IS1111',
    name: 'Information Security1',
    term: 'Term1',
    registeredStudents: [
      students[6], // Ethan Davis
      students[7], // Grace Taylor
    ],
  },

  // Term 2
  {
    id: 5,
    code: 'Net222',
    name: 'Networking',
    term: 'Term2',
    registeredStudents: [
      students[8], // Henry Clark
      students[9], // Fiona Turner
    ],
  },
  {
    id: 6,
    code: 'Web222',
    name: 'Web Technology',
    term: 'Term2',
    registeredStudents: [
      students[10], // George Turner
      students[11], // Helen Adams
    ],
  },
 // Term 3
 {
  id: 9,
  code: 'Net222',
  name: 'Networking',
  term: 'Term2',
  registeredStudents: [
    students[8], // Henry Clark
    students[9], // Fiona Turner
  ],
},
{
  id: 12,
  code: 'Web222',
  name: 'Web Technology',
  term: 'Term2',
  registeredStudents: [
    students[10], // George Turner
    students[11], // Helen Adams
  ],
},
// Term 4
{
  id: 16,
  code: 'Pr111',
  name: 'Project Management1',
  term: 'Term1',
  registeredStudents: [
    students[0], // John Doe
    students[1], // Jane Smith
  ],
},
{
  id: 20,
  code: 'C++111',
  name: 'C++ Programming Fundamentals',
  term: 'Term1',
  registeredStudents: [
    students[2], // Bob Johnson
    students[3], // Alice Williams
  ],
},
{
  id: 13,
  code: 'CompM1111',
  name: 'Computer Maintenance',
  term: 'Term1',
  registeredStudents: [
    students[4], // Charlie Brown
    students[5], // Diana Miller
  ],
},

];



app.get('/api/courses', (req, res) => {
  // Include registered students for each course
  const coursesWithStudents = courses.map((course) => ({
    ...course,
    registeredStudents: course.registeredStudents.map((student) => ({
      name: student.name,
      email: student.email,
    })),
  }));

  res.json(coursesWithStudents);
});

// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
