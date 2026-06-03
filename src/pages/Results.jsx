import React from "react";
import { useLocation } from "react-router-dom";

import ResultHeader from "../components/results/ResultHeader";
import ScoreSection from "../components/results/ScoreSection";
import SkillsAnalysis from "../components/results/SkillsAnalysis";
import SuggestionSection from "../components/results/SuggestionSection";
import RecomendedSkills from "../components/results/RecomendedSkills"
const Results = () => {
  const location = useLocation();
  const result = location.state?.result;

  return (
    <div className="min-h-screen bg-gray-50">
      <ResultHeader />

      <main className="flex justify-center px-3 sm:px-6 py-6 sm:py-10">
        <div className="w-full max-w-6xl space-y-6">
          {/* Title */}
          <div>
            <h1 className="font-semibold text-xl sm:text-2xl">
              Resume Analysis Report
            </h1>
            <p className="text-sm sm:text-base text-gray-600">
              Comprehensive breakdown with actionable recommendations
            </p>
          </div>

          {/* Sections */}
          <div className="rounded-2xl p-4 sm:p-5 border border-gray-300 bg-white">
            <ScoreSection result={result} />
          </div>

          <div className="rounded-2xl p-4 sm:p-5 border border-gray-300 bg-white">
            <SkillsAnalysis result={result} />
          </div>

          <div className="rounded-2xl p-4 sm:p-5 border border-gray-300 bg-white">
            <SuggestionSection result={result} />
          </div>

          <div className="rounded-2xl p-4 sm:p-5 border border-gray-300 bg-white">
            <RecomendedSkills result={result} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Results;