import React, { useState } from "react";
import { Lightbulb } from "lucide-react";
import SuggestionCard from "./SuggestionCard";
const SuggestionSection = () => {
  const suggestions = [
    {
      id: "1",
      title: "Quantify your achievements with specific metrics",
      priority: "high",
      category: "Content",
      impact:
        "Makes accomplishments more concrete and impressive to recruiters",
      before: "Improved team productivity",
      after:
        "Increased team productivity by 35% through implementing automated workflows, reducing processing time from 4 hours to 2.6 hours per task",
      timeToFix: "2-5 min per achievement",
    },
    {
      id: "2",
      title: "Add industry-specific keywords for ATS optimization",
      priority: "high",
      category: "ATS",
      impact: "Increases likelihood of passing automated screening by 40%",
      before: "Skills: Programming, databases",
      after:
        "Technical Skills: React, TypeScript, Node.js, MongoDB, PostgreSQL, RESTful APIs, Git, CI/CD",
      timeToFix: "5 min",
    },
    {
      id: "3",
      title: "Fix grammatical errors",
      priority: "high",
      category: "Quality",
      impact:
        "Professional appearance matters - errors can lead to immediate rejection",
      before: "Responsable for managing team",
      after: "Responsible for managing team",
      timeToFix: "1 min",
    },
    {
      id: "4",
      title: "Use action verbs to start bullet points",
      priority: "medium",
      category: "Content",
      impact: "Creates stronger, more dynamic descriptions",
      before: "Was responsible for project delivery",
      after:
        "Led cross-functional team of 8 to deliver project 2 weeks ahead of schedule, under budget by 15%",
      timeToFix: "2-3 min per bullet",
    },
    {
      id: "5",
      title: "Add certifications section",
      priority: "medium",
      category: "Structure",
      impact: "Demonstrates ongoing professional development",
      before: "",
      after:
        "Certifications:\n• AWS Certified Solutions Architect (2024)\n• Google Cloud Professional (2023)",
      timeToFix: "3 min",
    },
    {
      id: "6",
      title: "Remove outdated skills",
      priority: "low",
      category: "Relevance",
      impact: "Keeps resume focused on current technologies",
      before: "Skills: jQuery, Flash, Internet Explorer 6",
      after: "Skills: React, Vue.js, Modern JavaScript (ES6+)",
      timeToFix: "2 min",
    },
  ];

  const [selected, setSelected] = useState("high");
  const filterdSuggestion = suggestions.filter(
    (item) => item.priority === selected,
  );
  const totalTime=filterdSuggestion.reduce((sum,item)=>sum+parseInt(item.timeToFix),0)
  console.log(totalTime)
  console.log(selected);
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
          <Lightbulb className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Improvement Suggestions
          </h3>
          <p className="text-sm text-gray-500">
            Prioritized recommendations with before/after examples
          </p>
        </div>
      </div>
      <div className="flex justify-between bg-gray-300  rounded-4xl p-2 gap-3 mt-7">
        <div
          className={`w-1/3 flex justify-center ${selected === "high" ? "bg-white" : "bg-gray-300"} rounded-3xl cursor-pointer p-2 font-seri font-medium`}
          onClick={() => setSelected("high")}
        >
          High priority
        </div>

        <div
          className={`w-1/3 flex justify-center rounded-3xl cursor-pointer p-2 font-seri font-medium ${selected === "medium" ? "bg-white" : "bg-gray-300"}`}
          onClick={() => setSelected("medium")}
        >
          Medium priority
        </div>

        <div
          className={`w-1/3 flex justify-center rounded-3xl cursor-pointer p-2 font-seri font-medium ${selected === "low" ? "bg-white" : "bg-gray-300"}`}
          onClick={() => setSelected("low")}
        >
          Low priority
        </div>
      </div>
      <div className="flex space-y-6 flex-col mt-8">
        <div className={`p-3 font-medium border-3 rounded-2xl ${selected==="high"?"border-red-500" : selected==="medium" ? "border-amber-700":"border-blue-700"}`}>
 
  {selected === "high" ? (
    <span>
      High priority items have the most significant impact on recruiter
      perception and ATS compatibility. Address these first.
    </span>
  ) : selected === "medium" ? (
    <span>
      Medium priority items will improve your resume quality and help you
      stand out from other candidates.
    </span>
  ) : (
    <span>
      Low priority items provide small refinements that enhance overall
      presentation and create a more polished professional impression.
    </span>
  )}
</div>
        {filterdSuggestion.map((item, index) => (
          <SuggestionCard key={index} priority={selected} suggestions={item} />
        ))}
      </div>
        <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm">
          <div className="text-gray-600">
            <span className="font-medium text-gray-900">{filterdSuggestion.length}</span> {selected} priority items
            <span className="mx-2">•</span>
            Estimated time to address all: <span className="font-medium text-gray-900">{totalTime} minutes</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuggestionSection;
