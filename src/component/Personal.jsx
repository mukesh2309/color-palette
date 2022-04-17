import React from "react";
import "./Personal.css";

function Personal() {
  return (
    <div className="personal">
      <h2>Mukesh Shelke</h2>
      <div className="personal-links">
        <a href="https://github.com/mukesh2309">
          <i className="fa-brands fa-github"></i>
        </a>
        <a href="https://www.youtube.com/channel/UCmj2QwYzSFwuhPgdHxP_CQw">
          <i className="fa-brands fa-youtube"></i>
        </a>
        <a href="https://www.linkedin.com/in/mukesh-shelke/">
          <i className="fa-brands fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
}

export default Personal;
