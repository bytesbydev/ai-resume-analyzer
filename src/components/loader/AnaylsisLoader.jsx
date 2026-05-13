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
  // const progress = ((currentStep + 1) / steps.length) * 100;

  useEffect(() => {
    if (currentStep >= steps.length - 1) return;
    const timer = setTimeout(() => {
      setCurrentStep((prev) => prev + 1);
    }, 2000);
      const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 2;
      });
    }, 80);
    return () => clearTimeout(timer);
  }, [currentStep, steps.length]);
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
          {steps.map((step,index) =>{
            let status="pending"
            if(index<currentStep){
              status="completed"
            } else if(index===currentStep){
              status="current"
            }
            else{
              status="pending"
            }
          return (
            <LoaderStep
              key={index}
              icon={step.icon}
              title={step.title}
              time={step.time}
              status={status}
            />
          )})}
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
