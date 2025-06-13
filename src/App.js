// src/App.js
import React from "react";
import StudentMarks from "./components/StudentMarks";
import withCalculations from "./components/withCalculations";

// Sample Data: 5 students, 3 subjects each
const studentsData = [
  { name: "Alice", marks: [85, 90, 78] },
  { name: "Bob", marks: [76, 88, 95] },
  { name: "Charlie", marks: [92, 81, 85] },
  { name: "David", marks: [70, 75, 80] },
  { name: "Eva", marks: [88, 90, 92] },
];

// Enhance with HOC
const StudentMarksWithCalculations = withCalculations(StudentMarks);

function App() {
  return (
    <div className="App">
      <h1>HOC Example - Student Marks</h1>
      <StudentMarksWithCalculations students={studentsData} />
    </div>
  );
}

export default App;
