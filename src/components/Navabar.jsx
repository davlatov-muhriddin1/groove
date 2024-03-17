import React from "react";
import avatar from "../assets/avatarImage.jpeg";

function Navabar() {
  return (
    <div className="navbar">
      <h1>overview</h1>
      <div className="info">
        <h4>kishan@groove.music</h4>
        <div className="avatar">
          <img src={avatar} alt="avatar" />
        </div>
      </div>
    </div>
  );
}

export default Navabar;
