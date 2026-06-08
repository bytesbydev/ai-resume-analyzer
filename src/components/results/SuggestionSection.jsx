import React, { useState } from "react";
import { Lightbulb } from "lucide-react";
import SuggestionCard from "./SuggestionCard";

const SuggestionSection = ({ result }) => {
  const suggestions = result?.suggestions || [];

  const [selected, setSelected] = useState("high");

  const filteredSuggestion = suggestions.filter(
    (item) =>
      item.priority?.toLowerCase() === selected.toLowerCase()
  );

  const totalTime = filteredSuggestion.reduce(
    (sum, item) => sum + (parseInt(item.timeToFix) || 0),
    0
  );

  return (
    <div className="w-full">

      {/* Header */}
      <div className="flex items-start sm:items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
          <Lightbulb className="w-5 h-5 text-white" />
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
            Improvement Suggestions
          </h3>

          <p className="text-sm text-gray-500">
            Prioritized recommendations with before/after examples
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-col sm:flex-row gap-2 bg-gray-200 rounded-2xl p-2">

        <button
          type="button"
          onClick={() => setSelected("high")}
          className={`w-full sm:w-1/3 flex justify-center px-3 py-2 rounded-xl text-sm font-medium transition ${
            selected === "high"
              ? "bg-white shadow"
              : "bg-transparent"
          }`}
        >
          High priority
        </button>

        <button
          type="button"
          onClick={() => setSelected("medium")}
          className={`w-full sm:w-1/3 flex justify-center px-3 py-2 rounded-xl text-sm font-medium transition ${
            selected === "medium"
              ? "bg-white shadow"
              : "bg-transparent"
          }`}
        >
          Medium priority
        </button>

        <button
          type="button"
          onClick={() => setSelected("low")}
          className={`w-full sm:w-1/3 flex justify-center px-3 py-2 rounded-xl text-sm font-medium transition ${
            selected === "low"
              ? "bg-white shadow"
              : "bg-transparent"
          }`}
        >
          Low priority
        </button>

      </div>

      {/* Info box */}
      <div
        className={`mt-6 p-4 rounded-2xl border text-sm sm:text-base ${
          selected === "high"
            ? "border-red-400 bg-red-50"
            : selected === "medium"
            ? "border-amber-400 bg-amber-50"
            : "border-blue-400 bg-blue-50"
        }`}
      >
        {selected === "high" ? (
          <span>
            High priority items have the most significant impact on recruiter
            perception and ATS compatibility. Address these first.
          </span>
        ) : selected === "medium" ? (
          <span>
            Medium priority items improve resume quality and help you stand
            out from other candidates.
          </span>
        ) : (
          <span>
            Low priority items provide small refinements for a more polished
            professional impression.
          </span>
        )}
      </div>

      {/* Cards */}
      <div className="flex flex-col space-y-4 mt-6">
        {filteredSuggestion.map((item) => (
          <SuggestionCard
            key={`${item.title}-${item.priority}`}
            suggestions={item}
            priority={item.priority}
          />
        ))}
      </div>

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-gray-200 text-sm text-gray-600 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">

        <div>
          <span className="font-medium text-gray-900">
            {filteredSuggestion.length}
          </span>{" "}
          {selected} priority items
        </div>

        <div>
          Estimated time to fix:{" "}
          <span className="font-medium text-gray-900">
            {totalTime} minutes
          </span>
        </div>

      </div>

    </div>
  );
};

export default SuggestionSection;