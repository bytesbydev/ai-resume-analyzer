import React from "react";

import StatsCards from "./StatsCards";
import ChartsSection from "./ChartsSection";
import Analysis from "./Analysis";

const RecommendedSkills = () => {

  // ================= STATS =================

  const statsData = {
    atsScore: 68,
    readabilityScore: 85,
    wordCount: 425,
    keywordMatch: 62,
  };

  // ================= BAR CHART =================

  const sectionScores = [
    { section: "Contact", score: 100 },
    { section: "Summary", score: 75 },
    { section: "Experience", score: 85 },
    { section: "Education", score: 90 },
    { section: "Skills", score: 65 },
    { section: "Projects", score: 55 },
  ];

  // ================= RADAR CHART =================

  const industryComparison = [
    { aspect: "Experience", yourScore: 85, industry: 78 },
    { aspect: "Skills", yourScore: 65, industry: 82 },
    { aspect: "Education", yourScore: 90, industry: 75 },
    { aspect: "Keywords", yourScore: 62, industry: 85 },
    { aspect: "Format", yourScore: 88, industry: 80 },
  ];

  // ================= KEYWORDS =================

  const trendingKeywords = [
    { keyword: "React", frequency: 95, inResume: true },
    { keyword: "TypeScript", frequency: 88, inResume: true },
    { keyword: "Cloud/AWS", frequency: 85, inResume: false },
    { keyword: "Microservices", frequency: 82, inResume: false },
    { keyword: "CI/CD", frequency: 78, inResume: true },
    { keyword: "Agile", frequency: 75, inResume: false },
  ];

  // ================= ATS ANALYSIS =================

  const atsAnalysis = [
    {
      title: "Standard formatting detected",
      description: "Uses compatible fonts and structure",
      type: "success",
    },

    {
      title: "No complex graphics",
      description: "ATS can parse all content",
      type: "success",
    },

    {
      title: "Keyword density: Moderate",
      description: "Consider adding 3-5 more relevant terms",
      type: "warning",
    },

    {
      title: "Missing key industry terms",
      description: 'Add "Cloud", "Microservices", "Agile"',
      type: "danger",
    },
  ];

  // ================= PERFORMANCE =================

  const performanceStats = [
    {
      label: "ATS Pass Rate",
      value: "Approximately 7 out of 10 systems",
    },

    {
      label: "Recruiter Scan Time",
      value: "6-8 seconds average",
    },

    {
      label: "Industry Ranking",
      value: "Top 45% for similar roles",
    },

    {
      label: "Improvement Potential",
      value: "+15-20 points with recommended changes",
    },
  ];

  return (

    <div className="space-y-6">

      <StatsCards statsData={statsData} />

      <ChartsSection
        sectionScores={sectionScores}
        industryComparison={industryComparison}
      />

      <Analysis
        trendingKeywords={trendingKeywords}
        atsAnalysis={atsAnalysis}
        performanceStats={performanceStats}
      />

    </div>

  );
};

export default RecommendedSkills;