import React from "react";
import LoaderStep from "./LoaderStep";
import ProgressBar from "../common/ProgressBar";
import {
  FileSearch,
  Brain,
  Lightbulb,
} from "lucide-react";

const steps = [
  {
    icon: FileSearch,
    title: "Parsing Resume",
    time: "1-2s",
  },
  {
    icon: Brain,
    title: "Analyzing Skills",
    time: "1-2s",
  },
  {
    icon: Lightbulb,
    title: "Generating Insights",
    time: "1-2s",
  },
];

const AnaylsisLoader = ({ progress }) => {
  const currentStep =
    progress >= 89 ? 3 :
    progress >= 42 ? 2 :
    progress >= 10 ? 1 : 0;

  return (
    <div>
      {/* Header */}
      <div className="text-center mb-6">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
          Analysing your resume
        </h2>

        <p className="text-sm sm:text-base text-gray-500 mt-1">
          Processing your resume...
        </p>
      </div>

      {/* Steps */}
      <div className="space-y-3">
        {steps.map((step, index) => {
          const isActive = currentStep >= index;
          const isComplete = currentStep > index;

          return (
            <LoaderStep
              key={step.title}
              icon={step.icon}
              title={step.title}
              time={step.time}
              status={
                isComplete ? "completed" :
                isActive ? "active" :
                "pending"
              }
            />
          );
        })}
      </div>

      {/* Progress */}
      <div className="mt-6">
        <div className="flex justify-between mb-2 text-sm sm:text-base">
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