import React from "react";
import { Award } from "lucide-react";
import InsightSection from "./InsightSection";
import SectionBreakdown from "./SectionBreakdown";

const ScoreSection = ({ result }) => {
  if (!result) {
    return (
      <div className="text-center py-10 text-gray-500">
        Loading analysis...
      </div>
    );
  }

  const atsScore = result?.statsData?.atsScore || 0;

  const getScoreColor = (score) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-amber-600";
    return "text-red-600";
  };

  const getBadgeColor = (score) => {
    if (score >= 80) return "bg-green-500";
    if (score >= 60) return "bg-amber-500";
    return "bg-red-500";
  };

  return (
    <div className="w-full space-y-6">

      {/* Header */}
      <div className="flex items-start gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center shrink-0">
          <Award className="w-5 h-5 text-white" />
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
            Overall Quality Score
          </h3>

          <p className="text-sm text-gray-500">
            Based on content, formatting, and ATS compatibility
          </p>
        </div>
      </div>

      {/* Score Card */}
      <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-6">

        <span className="text-sm font-medium text-gray-700">
          Resume Score
        </span>

        {/* Score + Badge */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-3">

          {/* Score */}
          <div className="flex items-end gap-2">
            <span
              className={`text-3xl sm:text-5xl font-bold ${getScoreColor(
                atsScore
              )}`}
            >
              {atsScore}
            </span>

            <span className="text-lg sm:text-2xl text-gray-600">
              /100
            </span>
          </div>

          {/* Badge */}
          <div
            className={`w-fit px-4 py-2 rounded-xl text-white font-semibold text-sm sm:text-base ${getBadgeColor(
              atsScore
            )}`}
          >
            {atsScore >= 80
              ? "Excellent"
              : atsScore >= 60
              ? "Good"
              : "Needs Improvement"}
          </div>

        </div>

        {/* Progress bar */}
        <div className="w-full h-3 bg-gray-200 rounded-full mt-5 overflow-hidden">
          <div
            className="h-full bg-gray-900 rounded-full transition-all duration-300"
            style={{ width: `${atsScore}%` }}
          />
        </div>

        {/* Description */}
        <p className="text-sm text-gray-500 mt-3">
          Your resume is above average, but implementing the suggestions below
          will significantly improve your chances with recruiters and ATS systems.
        </p>

        {/* Insights */}
        <div className="mt-6">
          <InsightSection result={result} />
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200" />

      {/* Section Breakdown */}
      <div className="bg-white border border-gray-200 rounded-2xl p-4 sm:p-5">
        <SectionBreakdown result={result} />
      </div>

    </div>
  );
};

export default ScoreSection;