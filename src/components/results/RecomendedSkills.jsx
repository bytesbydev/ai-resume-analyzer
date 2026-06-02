import React from "react";

import StatsCards from "./StatsCards";
import ChartsSection from "./ChartsSection";
import Analysis from "./Analysis";

const RecommendedSkills = ({ result }) => {
  return (
    <div className="space-y-6">
      <StatsCards
        statsData={result?.statsData}
      />

      <ChartsSection
        sectionScores={result?.sectionScores || []}
        industryComparison={result?.industryComparison || []}
      />

      <Analysis
        trendingKeywords={result?.trendingKeywords || []}
        atsAnalysis={result?.atsAnalysis || []}
        performanceStats={result?.performanceStats || []}
      />
    </div>
  );
};

export default RecommendedSkills;