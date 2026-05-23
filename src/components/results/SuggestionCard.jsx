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
      <div className="flex flex-col gap-3" >
      <div className="p-3 font-medium border-3 rounded-2xl solid border-red-500">  High priority items have the most significant impact on recruitor perception and ats compatibility.</div>
      </div>
      {suggestions.map((item,index)=>(
      <div className="flex flex-col gap-3">
      <div className="flex gap-5" key={index}>
        {" "}
        <div><AlertCircle className="text-red-600"/></div>
        <div className="font-semibold text-black">
          {item.title}
        </div>
      </div>
      <div className="flex justify-between gap-3 p-2 w-1/3">
        {" "}
        <div className="text-red-600 border-2 p-2 solid border-red-500 bg-red-400 rounded-2xl font-semibold  ">
        
        {item.priority} priority</div>
        <div className="font-medium text-gray-500 p-2 rounded-2xl border solid border-gray-600">{item.category}</div>
        <div className="font-medium  text-center flex items-center">{item.timeToFix} per achievement</div>
      </div>
      <span className="">{item.impact}</span>
      <div className="p-3 font-medium border-3 rounded-2xl solid border-red-500">
        <span className="font-semibold text-red-500">Before</span> <p>{item.before}</p>
      </div>
      <div  className="p-3 font-medium border-3 rounded-2xl solid border-green-500">
        <span className="text-green-500 font-semibold">After</span>{" "}
        <p className="font-medium text-gray-500">{item.after}</p>
      </div>
    </div>
  ))}
    </div>
  );
};

export default SuggestionCard;
