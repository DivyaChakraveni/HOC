// src/components/StudentMarks.js
import React from "react";

const StudentMarks = ({ students, total, average }) => {
  return (
    <div>
      <h2>Student Marks</h2>
      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>Name</th>
            <th>Subject 1</th>
            <th>Subject 2</th>
            <th>Subject 3</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s, idx) => (
            <tr key={idx}>
              <td>{s.name}</td>
              <td>{s.marks[0]}</td>
              <td>{s.marks[1]}</td>
              <td>{s.marks[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Total Marks: {total}</h3>
      <h3>Average Marks: {average.toFixed(2)}</h3>
    </div>
  );
};

export default StudentMarks;
