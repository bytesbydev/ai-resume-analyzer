import React from "react";
import { Award, TrendingUp, AlertCircle, CheckCircle2 } from "lucide-react";
import InsightSection from "./InsightSection";
const ScoreSection = () => {
  const score = 90;

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
        <div className="flex justify-between">
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
          <div
            className={`h-10 w-fit flex justify-center items-center  text-white font-semibold rounded border-2 solid p-5 ${score >= 90 ? "bg-green-500" : score >= 60 ? "bg-amber-500" : "bg-red-500"}`}
          >
            {score > 90
              ? "Excellent"
              : score > 60
                ? "Good"
                : "Needs Improvement"}
          </div>
        </div>{" "}
        <br />
        <div
          className="h-3 rounded bg-green-500"
          style={{ width: `${score}%` }}
        ></div>
        <InsightSection/>
      </div>
    </div>
  );
};

export default ScoreSection;
