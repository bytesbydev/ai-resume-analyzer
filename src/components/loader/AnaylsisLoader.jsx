import React from "react";
import "./AnaylsisLoader.css";
import LoaderStep from "./LoaderStep";
import ProgressBar from "../common/ProgressBar";
const AnaylsisLoader = () => {

    const steps = [ {
      icon: "📄",
      title: "Parsing Resume",
      time: "1-2s"
    }, {
      icon: "🔍",
      title: "Analyzing Skills",
      time: "1-2s"
    }, {
      icon: "💡",
      title: "Generating Insights",
      time: "1-2s"
    } ];

  return (
    <div>
      <div className="main-box">
        <div className="anaylysis-heading">
          <span className="a-heading">Analysing your resume</span> <br />
          <span className="a-description">Processing typically takes 3 to 5 seconds</span>
        </div>
        <div className="loader">
        {steps.map((step, index) => (
          <LoaderStep key={index} icon={step.icon} title={step.title} time={step.time} />
        ))}
        </div>
          <div className="analyzing-progressbar">
          <span>Progress</span>
          <ProgressBar progress={50} />
        </div>
      </div>
    </div>
  );
};

export default AnaylsisLoader;
