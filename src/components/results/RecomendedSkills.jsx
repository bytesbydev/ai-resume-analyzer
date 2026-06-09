import React from "react";

import StatsCards from "./StatsCards";
import ChartsSection from "./ChartsSection";
import Analysis from "./Analysis";

const RecommendedSkills = ({ result }) => {
  return (
    <div className="space-y-6 w-full">

      {/* Stats */}
      <div className="w-full">
        <StatsCards statsData={result?.statsData} />
      </div>

      {/* Charts */}
      <div className="w-full">
        <ChartsSection
          sectionScores={result?.sectionScores || []}
          industryComparison={result?.industryComparison || []}
        />
      </div>

      {/* Analysis */}
      <div className="w-full">
        <Analysis
          trendingKeywords={result?.trendingKeywords || []}
          atsAnalysis={result?.atsAnalysis || []}
          performanceStats={result?.performanceStats || []}
        />
      </div>

    </div>
  );
};

export default RecommendedSkills;