import React from "react";
import LoaderStep from "./LoaderStep";
import ProgressBar from "../common/ProgressBar";

const AnaylsisLoader = ({ progress }) => {
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

  const currentStep =
    progress >= 89
      ? 3
      : progress >= 42
      ? 2
      : progress >= 10
      ? 1
      : 0;

  return (
    <div>
      <div className="text-center h-1/5">
        <span className="text-3xl font-bold">
          Analysing your resume
        </span>
        <br />
        <span className="text-base text-[rgb(145,140,140)]">
          Processing your resume...
        </span>
      </div>

      <div className="w-full mt-8">
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

      <div className="mt-6">
        <div className="flex justify-between mb-2">
          <span className="font-medium">Progress</span>
          <span className="font-semibold">
            {Math.round(progress)}%
          </span>
        </div>

        <ProgressBar progress={progress} />
      </div>
    </div>
  );
};

export default AnaylsisLoader;