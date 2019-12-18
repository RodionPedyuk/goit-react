import React from "react";
import "./App.css";
import Profile from "./profile/Profile";

function App({ user }) {
  return (
    <div>
      <Profile user={user} />
    </div>
  );
}

export default App;
