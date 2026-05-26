import { AlertCircle } from "lucide-react";
import React from "react";

const SuggestionCard = ({ suggestions, priority }) => {
  const getPriorityColors = (priority) =>
    ({
      high: {
        icon: "text-red-600",
        badge: "bg-red-50 text-red-700 border-red-200",
      },
      medium: {
        icon: "text-amber-500",
        badge: "bg-amber-50 text-amber-700 border-amber-200",
      },
      low: {
        icon: "text-blue-500",
        badge: "bg-blue-50 text-blue-700 border-blue-200",
      },
    })[priority];
  const styles = getPriorityColors(priority);
  return (
    <div>
      <div className="flex flex-col gap-3 border-2 p-5 border-gray-300 rounded-3xl">
        <div className="flex gap-5">
          {" "}
          <div>
            <AlertCircle className={`${styles.icon}`} />
          </div>
          <div className="font-semibold text-black">{suggestions.title}</div>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          {" "}
          <div
            className={` border-2 p-2 ${styles.badge} rounded-md text-xs font-medium`}
          >
            {suggestions.priority} priority
          </div>
          <div className="bg-slate-50 text-slate-700 p-2  text-xs font-medium rounded-md border-slate-200 ">
            {suggestions.category}
          </div>
          <div className="text-xs text-gray-500">
            {suggestions.timeToFix} 
          </div>
        </div>
       <p className="text-sm text-gray-600  mb-3">
                {suggestions.impact}
              </p>
        <div className="gap-3 flex flex-col ">
          <div className="p-3 rounded-lg bg-red-50 border border-red-200">
            <p className="text-xs font-medium text-red-700 mb-1">Before:</p>
            <p className="text-sm text-gray-700">{suggestions.before}</p>
          </div>
          <div className="p-3 rounded-lg bg-red-50 border border-red-200">
            <p className="text-xs font-medium text-green-700 mb-1">After:</p>
            <p className="text-sm text-gray-700">{suggestions.after}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestionCard;
