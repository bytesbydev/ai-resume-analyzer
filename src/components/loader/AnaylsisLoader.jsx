import React from "react";
import "./AnaylsisLoader.css"
import LoaderStep from "./LoaderStep";
const AnaylsisLoader = () => {
  return (
    <div>
      <div className="main-box">
        <div>
          <span>
Analysing your resume
          </span> <br />
          <span>Processing typically takes 3 to 5 seconds</span>
        </div>
  
          <LoaderStep/>
        
      </div>
    </div>
  );
};

export default AnaylsisLoader;
