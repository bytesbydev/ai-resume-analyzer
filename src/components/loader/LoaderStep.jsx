import React from "react";
import { CheckCircle2 } from "lucide-react";

const LoaderStep = ({ icon: Icon, title, time, status }) => {
  const isActive = status === "active";
  const isComplete = status === "completed";

  return (
    <div
      className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
        isActive || isComplete ? "bg-blue-50" : "bg-gray-50"
      }`}
    >
      <div
        className={`w-8 h-8 sm:w-9 sm:h-9 rounded-full flex items-center justify-center shrink-0 transition-colors ${
          isComplete
            ? "bg-green-600"
            : isActive
            ? "bg-blue-600"
            : "bg-gray-300"
        }`}
      >
        {isComplete ? (
          <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        ) : (
          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
        )}
      </div>

      <div className="flex-1">
        <p
          className={`text-sm sm:text-base font-medium ${
            isActive || isComplete
              ? "text-gray-900"
              : "text-gray-500"
          }`}
        >
          {title}
        </p>

        <p className="text-xs text-gray-400">
          {time}
        </p>
      </div>

      {isActive && !isComplete && (
        <div className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
      )}
    </div>
  );
};

export default LoaderStep;