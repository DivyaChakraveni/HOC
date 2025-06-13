// src/components/UserProfile.js
import React from "react";

const UserProfile = ({ name, age }) => {
  return (
    <div style={{ padding: "20px", border: "1px solid #ccc" }}>
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
    </div>
  );
};

export default UserProfile;
