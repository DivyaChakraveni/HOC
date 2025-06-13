// src/App.js
import React from "react";
import UserProfile from "./components/UserProfile";
import withLoader from "./components/withLoader";

// Enhance the UserProfile with loading behavior
const UserProfileWithLoader = withLoader(UserProfile, 3000); // 3 sec delay

function App() {
  return (
    <div className="App">
      <h1>HOC Example: withLoader</h1>
      <UserProfileWithLoader name="XYZ" age={21} />
    </div>
  );
}

export default App;
