import React from "react";
import "./Loaderstep.css";
const LoaderStep = ({ icon, title, time, status }) => {
  return (
    <div className={`loader-cards ${status}`}>
      {/* <span>
        {status === "completed" ? "✔" : status === "current" ? "⏳" : "○"}
      </span> */}
      <div className="icon-description">
        {" "}
        <div className="icon">{icon}</div>
      </div>
      <div className="description-section">
        {" "}
        <span className="l-subdescription">{title}</span> <br />
        <span> {time}</span>
      </div>
    </div>
  );
};

export default LoaderStep;
