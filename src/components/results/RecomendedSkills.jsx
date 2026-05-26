import React from "react";
import { Award,Target,FileCheck,Eye } from "lucide-react";
const ReccomendedSkills = () => {
   const atsScore = 68;
  const readabilityScore = 85;
  const wordCount = 425;
  const keywordMatch = 62;

  const sectionScores = [
    { section: "Contact", score: 100 },
    { section: "Summary", score: 75 },
    { section: "Experience", score: 85 },
    { section: "Education", score: 90 },
    { section: "Skills", score: 65 },
    { section: "Projects", score: 55 },
  ];

  const industryComparison = [
    { aspect: "Experience", yourScore: 85, industry: 78 },
    { aspect: "Skills", yourScore: 65, industry: 82 },
    { aspect: "Education", yourScore: 90, industry: 75 },
    { aspect: "Keywords", yourScore: 62, industry: 85 },
    { aspect: "Format", yourScore: 88, industry: 80 },
  ];

  const trendingKeywords = [
    { keyword: "React", frequency: 95, inResume: true },
    { keyword: "TypeScript", frequency: 88, inResume: true },
    { keyword: "Cloud/AWS", frequency: 85, inResume: false },
    { keyword: "Microservices", frequency: 82, inResume: false },
    { keyword: "CI/CD", frequency: 78, inResume: true },
    { keyword: "Agile", frequency: 75, inResume: false },
  ];
  return (
    <div>
      {" "}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
          <Award className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Data & Insights
          </h3>
          <p className="text-sm text-gray-500">
            Industry benchmarks and keyword analysis
          </p>
        </div>
      </div>
       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="p-4 rounded-lg border border-gray-200 bg-white">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-4 h-4 text-blue-600" />
            <h4 className="text-sm font-medium text-gray-700">
              ATS Score
            </h4>
          </div>
          <p className="text-3xl font-semibold text-gray-900 mb-2">
            {atsScore}%
          </p>
          {/* <Progress value={atsScore} className="h-2 mb-2" /> */}
          <p className="text-xs text-gray-600">
            {atsScore >= 80 ? "Good" : atsScore >= 60 ? "Fair" : "Needs work"}
          </p>
        </div>
     <div className="p-4 rounded-lg border border-gray-200 bg-white">
          <div className="flex items-center gap-2 mb-2">
            <Eye className="w-4 h-4 text-green-600" />
            <h4 className="text-sm font-medium text-gray-700">
              Readability
            </h4>
          </div>
          <p className="text-3xl font-semibold text-gray-900 mb-2">
            {readabilityScore}%
          </p>
          <p className="text-xs text-gray-600">
            Easy to scan
          </p>
        </div>
     <div className="p-4 rounded-lg border border-gray-200 bg-white">
          <div className="flex items-center gap-2 mb-2">
            <FileCheck className="w-4 h-4 text-amber-600" />
            <h4 className="text-sm font-medium text-gray-700">
              Word Count
            </h4>
          </div>
          <p className="text-3xl font-semibold text-gray-900 mb-2">
            {wordCount}
          </p>
          <div className="h-2 mb-2" /> {/* Spacer */}
          <p className="text-xs text-gray-600">
            Optimal: 400-600
          </p>
        </div>
    </div>
    </div>
  );
};

export default ReccomendedSkills;
