import React from "react";
import { useLocation } from "react-router-dom";

import ResultHeader from "../components/results/ResultHeader";
import ScoreSection from "../components/results/ScoreSection";
import SkillsAnalysis from "../components/results/SkillsAnalysis";
import SuggestionSection from "../components/results/SuggestionSection";
import ReccomendedSkills from "../components/results/RecomendedSkills";

const Results = () => {
  const location = useLocation();

  const result = location.state?.result;

  console.log(result);

  return (
    <div className="results-page">

      <div className="result-header">
        <ResultHeader />
      </div>

      <main className="flex flex-col items-center">
        <div className="w-[90%] mt-7">

          <div>
            <span className="font-semibold text-2xl">
              Resume Analysis Report
            </span>
            <br />
            <span className="text-md font-semibold text-gray-600">
              Comprehensive breakdown with actionable recommendations
            </span>
          </div>

          <div className="rounded-3xl p-5 border-2 border-gray-300 mt-5">
            <ScoreSection result={result} />
          </div>

          <div className="rounded-3xl p-5 border-2 border-gray-300 mt-5">
            <SkillsAnalysis result={result} />
          </div>

          <div className="rounded-3xl p-5 border-2 border-gray-300 mt-5">
            <SuggestionSection result={result} />
          </div>

          <div className="rounded-3xl p-5 border-2 border-gray-300 mt-5">
            <ReccomendedSkills result={result} />
          </div>

        </div>
      </main>
    </div>
  );
};

export default Results;