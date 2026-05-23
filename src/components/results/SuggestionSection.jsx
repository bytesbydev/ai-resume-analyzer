import React from "react";
import { Lightbulb } from "lucide-react";
import SuggestionCard from "./SuggestionCard";
const SuggestionSection = () => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
          <Lightbulb className="w-5 h-5 text-white" />
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
        <div className="flex justify-between border solid  gap-3 mt-7">
          <div className="w-1/3 flex justify-center border solid rounded-3xl p-3 font-seri font-medium  ">High priority</div>
          <div className="w-1/3 flex justify-center border solid rounded-3xl p-3 font-seri font-medium  ">Medium priority</div>
          <div className="w-1/3 flex justify-center border solid rounded-3xl p-3 font-seri font-medium  ">All</div>
        </div>
        <SuggestionCard/>
    </div>
  );
};

export default SuggestionSection;