import React, { useEffect, useState } from "react";
import "./AnaylsisLoader.css";
import LoaderStep from "./LoaderStep";
import ProgressBar from "../common/ProgressBar";
const AnaylsisLoader = () => {
  const steps = [
    {
      icon: "📄",
      title: "Parsing Resume",
      time: "1-2s",
    },
    {
      icon: "🔍",
      title: "Analyzing Skills",
      time: "1-2s",
    },
    {
      icon: "💡",
      title: "Generating Insights",
      time: "1-2s",
    },
  ];

  const [currentStep, setCurrentStep] = useState(0);

  const [progress, setProgress] = useState(0);

 useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {

        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });

    }, 30);

    // Step Changes
    const stepTimers = [

      setTimeout(() => {
        setCurrentStep(1);
      }, 1000),

      setTimeout(() => {
        setCurrentStep(2);
      }, 2000),

      // Final completion
      setTimeout(() => {
        setCurrentStep(3);
      }, 3000),

    ];

    return () => {
      clearInterval(progressInterval);

      stepTimers.forEach((timer) => {
        clearTimeout(timer);
      });
    };

  }, []);
  return (
    <div>
      <div className="main-box">
        <div className="anaylysis-heading">
          <span className="a-heading">Analysing your resume</span> <br />
          <span className="a-description">
            Processing typically takes 3 to 5 seconds
          </span>
        </div>
    <div className="loader">
  {steps.map((step, index) => {
    const isActive = currentStep >= index;
    const isComplete = currentStep > index;

    const status = isComplete
      ? "completed"
      : isActive
      ? "active"
      : "pending";

    return (
      <LoaderStep
        key={index}
        icon={step.icon}
        title={step.title}
        time={step.time}
        status={status}
      />
    );
  })}
</div>
        <div className="analyzing-progressbar">
          <span>Progress</span>
       <span>{Math.round(progress)}%</span>
          <ProgressBar progress={progress} />
        </div>
      </div>
    </div>
  );
};

export default AnaylsisLoader;
