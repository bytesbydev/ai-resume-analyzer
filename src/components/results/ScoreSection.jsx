import React from "react";
import { Award, TrendingUp, AlertCircle, CheckCircle2 } from "lucide-react";
const ScoreSection = () => {
  const score = 88;
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
          <Award className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Overall Quality Score
          </h3>
          <p className="text-sm text-gray-500">
            Based on content, formatting, and ATS compatibility
          </p>
        </div>
      </div>
      <div className="ats-score">
        <span>Resume score </span>
        <div>
          <span
            className={`text-5xl font-semibold ${
              score >= 80
                ? "text-green-600"
                : score >= 60
                  ? "text-amber-600"
                  : "text-red-600"
            }`}
          >
            {score}
          </span>
          <span className="text-2xl font-medium text-gray-700">/100</span>
        </div>
        <div className="h-3 w-full rounded border-gray-300"></div> 
        <div className={w-${score}>

       5 </div>
      </div>
    </div>
  );
};

export default ScoreSection;
