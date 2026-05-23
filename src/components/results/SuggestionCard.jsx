import { AlertCircle } from "lucide-react";
import React from "react";

const SuggestionCard = () => {
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
  return (
    <div>
      {/* {suggestions.map((item,index)=>(
<div key={index}>
  <h3>{item.id}</h3>
  <h3>{item.title}</h3>
  <h3>{item.timeToFix}</h3>
  <h3>{item.category}</h3>
  <h3>{item.impact}</h3>
  <h3>{item.before}</h3>
  <h3>{item.after}</h3>
  </div>
  ))} */}
      <div className="p-3 font-medium border-3 rounded-2xl solid border-red-500">  High priority items have the most significant impact on recruitor perception and ats compatibility.</div>
      <div className="flex gap-5">
        {" "}
        <div><AlertCircle className="text-red-600"/></div>
        <div className="font-semibold text-black">Quantify your achievements with specific metrics</div>
      </div>
      <div>
        {" "}
        <div className="text-red-600 border-2 solid rounded-2xl ">high priority</div>
        <div>content</div>
        <div>2.5 min per achievement</div>
      </div>
      <span>Keeps resume focused on current technologies</span>
      <div>
        <span>Before</span> <p>Skills: jQuery, Flash, Internet Explorer 6</p>
      </div>
      <div>
        <span>after</span>{" "}
        <p>Skills: React, Vue.js, Modern JavaScript (ES6+)</p>
      </div>
    </div>
  );
};

export default SuggestionCard;
