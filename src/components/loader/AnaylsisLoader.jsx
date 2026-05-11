import React from "react";
import "./AnaylsisLoader.css";
import LoaderStep from "./LoaderStep";
const AnaylsisLoader = () => {
  return (
    <div>
      <div className="main-box">
        <div className="anaylysis-heading">
          <span className="a-heading">Analysing your resume</span> <br />
          <span className="a-description">Processing typically takes 3 to 5 seconds</span>
        </div>
        <div className="loader">
        <LoaderStep />
        </div>
      </div>
    </div>
  );
};

export default AnaylsisLoader;
