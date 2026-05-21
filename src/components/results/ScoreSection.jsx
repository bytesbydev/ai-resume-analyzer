import React from "react";
import { Award, TrendingUp, AlertCircle, CheckCircle2 } from "lucide-react";
import InsightSection from "./InsightSection";
import SectionBreakdown from "./SectionBreakdown";
const ScoreSection = () => {
  const score = 72;

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
        <span className="font-semibold text-black">Resume score </span>
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
            className={`h-10 w-fit flex justify-center items-center   text-white font-semibold rounded-xl border-2 solid p-5 ${score >= 80 ? "bg-green-500" : score >= 60 ? "bg-amber-500" : "bg-red-500"}`}
          >
            {score > 80
              ? "Excellent"
              : score > 60
                ? "Good"
                : "Needs Improvement"}
          </div>
        </div>{" "}
        <br />
        <div className="bg-gray-200 rounded">
          <div  className="h-3 rounded bg-black"
          style={{ width: `${score}%` }}>
          </div>
        </div>
        <div className="font-sm mt-2 text-gray-500">Your resume is above average, but implementing the suggestions below will significantly improve your chances with recruiters and ATS systems.</div>
        <InsightSection/>
      </div>
      <div className="w-full border mt-10 border-gray-300 solid"></div>
    <div className="section breakdown mt-4 p-5">
 <SectionBreakdown/>
    </div>
    </div>
  );
};

export default ScoreSection;
