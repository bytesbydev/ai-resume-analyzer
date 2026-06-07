import React from "react";
import InsightCard from "./InsightCard";

const InsightSection = ({ result }) => {
  return (
<div className="flex flex-col md:flex-row gap-4 mt-6">
      <InsightCard
        title="Strengths"
        type="strength"
        data={result.strengths}
      />

      <InsightCard
        title="Improvements"
        type="improvement"
        data={result.improvements}
      />

      <InsightCard
        title="Critical Issues"
        type="critical"
        data={result.criticalIssues}
      />
    </div>
  );
};

export default InsightSection;