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

  const styles =
    getPriorityColors(priority?.toLowerCase()) ||
    getPriorityColors("high");

  return (
    <div className="w-full border border-gray-200 rounded-2xl p-4 sm:p-5 bg-white space-y-4">

      {/* Title Row */}
      <div className="flex items-start gap-3">

        <AlertCircle className={`${styles.icon} w-5 h-5 mt-1 shrink-0`} />

        <h3 className="text-sm sm:text-base font-semibold text-gray-900 leading-snug">
          {suggestions.title}
        </h3>

      </div>

      {/* Meta Row */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-xs sm:text-sm">

        <span
          className={`border px-2 py-1 rounded-md font-medium ${styles.badge}`}
        >
          {suggestions.priority} priority
        </span>

        <span className="bg-slate-50 text-slate-700 px-2 py-1 rounded-md border border-slate-200">
          {suggestions.category}
        </span>

        <span className="text-gray-500">
          {suggestions.timeToFix}
        </span>

      </div>

      {/* Impact */}
      <p className="text-sm text-gray-600">
        {suggestions.impact}
      </p>

      {/* Before / After */}
      <div className="space-y-3">

        {/* Before */}
        <div className="p-3 rounded-lg bg-red-50 border border-red-200">
          <p className="text-xs font-medium text-red-700 mb-1">
            Before:
          </p>
          <p className="text-sm text-gray-700">
            {suggestions.before}
          </p>
        </div>

        {/* After */}
        <div className="p-3 rounded-lg bg-green-50 border border-green-200">
          <p className="text-xs font-medium text-green-700 mb-1">
            After:
          </p>
          <p className="text-sm text-gray-700">
            {suggestions.after}
          </p>
        </div>

      </div>

    </div>
  );
};

export default SuggestionCard;