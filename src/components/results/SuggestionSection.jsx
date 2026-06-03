import React, { useState } from "react";
import { Lightbulb } from "lucide-react";
import SuggestionCard from "./SuggestionCard";
const SuggestionSection = ({result}) => {
  const suggestions = result.suggestions || [];

  const [selected, setSelected] = useState("high");
const filterdSuggestion = suggestions.filter(
  (item) =>
    item.priority?.toLowerCase() === selected.toLowerCase()
);
const totalTime = filterdSuggestion.reduce(
  (sum, item) =>
    sum + (parseInt(item.timeToFix) || 0),
  0
);
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="size-10 rounded-lg bg-blue-600 flex items-center justify-center">
          <Lightbulb className="size-5 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Improvement Suggestions
          </h3>
          <p className="text-sm text-gray-500">
            Prioritized recommendations with before/after examples
          </p>
        </div>
      </div>
<div className="flex justify-between bg-gray-300 rounded-4xl p-2 gap-3 mt-7">
  <button
    type="button"
    onClick={() => setSelected("high")}
    className={`w-1/3 flex justify-center ${
      selected === "high" ? "bg-white" : "bg-gray-300"
    } rounded-3xl cursor-pointer p-2 font-seri font-medium`}
  >
    High priority
  </button>

  <button
    type="button"
    onClick={() => setSelected("medium")}
    className={`w-1/3 flex justify-center ${
      selected === "medium" ? "bg-white" : "bg-gray-300"
    } rounded-3xl cursor-pointer p-2 font-seri font-medium`}
  >
    Medium priority
  </button>

  <button
    type="button"
    onClick={() => setSelected("low")}
    className={`w-1/3 flex justify-center ${
      selected === "low" ? "bg-white" : "bg-gray-300"
    } rounded-3xl cursor-pointer p-2 font-seri font-medium`}
  >
    Low priority
  </button>
</div>
      <div className="flex space-y-6 flex-col mt-8">
        <div className={`p-3 font-medium border-3 rounded-2xl ${selected==="high"?"border-red-500" : selected==="medium" ? "border-amber-700":"border-blue-700"}`}>
 
  {selected === "high" ? (
    <span>
      High priority items have the most significant impact on recruiter
      perception and ATS compatibility. Address these first.
    </span>
  ) : selected === "medium" ? (
    <span>
      Medium priority items will improve your resume quality and help you
      stand out from other candidates.
    </span>
  ) : (
    <span>
      Low priority items provide small refinements that enhance overall
      presentation and create a more polished professional impression.
    </span>
  )}
</div>
      {filterdSuggestion.map((item) => (
  <SuggestionCard
   key={`${item.title}-${item.priority}`}
    suggestions={item}
    priority={item.priority}
  />
))}
      </div>
        <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm">
          <div className="text-gray-600">
            <span className="font-medium text-gray-900">{filterdSuggestion.length}</span> {selected} priority items
            <span className="mx-2">•</span>
            Estimated time to address all: <span className="font-medium text-gray-900">{totalTime} minutes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestionSection;
