import { TrendingUp } from "lucide-react";
import React from "react";

const SkillsCard = ({ title, icon }) => {
  const technicalSkills = [
    { label: "React", level: "Expert", proficiency: 95 },
    { label: "TypeScript", level: "Advanced", proficiency: 85 },
    { label: "Node.js", level: "Advanced", proficiency: 80 },
    { label: "Python", level: "Intermediate", proficiency: 70 },
    { label: "SQL", level: "Intermediate", proficiency: 65 },
    { label: "Git", level: "Advanced", proficiency: 88 },
  ];
  const softSkills = [
    { label: "Leadership", level: "Advanced", proficiency: 85 },
    { label: "Communication", level: "Expert", proficiency: 92 },
    { label: "Problem Solving", level: "Advanced", proficiency: 88 },
    { label: "Team Collaboration", level: "Advanced", proficiency: 80 },
  ];

  const recommendedSkills = [
    { label: "Docker", severity: "High" },
    { label: "AWS/Cloud", severity: "High" },
    { label: "GraphQL", severity: "Medium" },
    { label: "CI/CD", severity: "Medium" },
  ];

  let skills = [];

  if (title === "Technical Skills") { 
    skills = technicalSkills;
  } else if (title === "Soft Skills") {
    skills = softSkills;
  } else if (title === "Recommended Skills to add") {
    skills = recommendedSkills;
  }

  const getLevelColor = (level) => {
    switch (level) {
      case "Expert":
        return "bg-blue-100 text-blue-700 border-blue-200";

      case "Advanced":
        return "bg-green-100 text-green-700 border-green-200";

      case "Intermediate":
        return "bg-amber-100 text-amber-700 border-amber-200";

      default:
        return "bg-gray-100 text-gray-700 border-gray-200";
    }
  };
  const getSeverityColor = (severity) => {
    switch (severity) {
      case "High":
        return "bg-red-100 text-red-700 border-red-300";

      case "Medium":
        return "bg-yellow-100 text-yellow-700 border-yellow-300";

      default:
        return "bg-gray-100 text-gray-700 border-gray-300";
    }
  };
  const SkillItem = ({ skill }) => (
    <div className="border rounded-2xl p-4">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <h5 className="font-medium">{skill.label}</h5>

          <TrendingUp className="w-4 h-4 text-green-600" />
        </div>

        <span
          className={`px-2 py-1 text-xs border rounded-full ${getLevelColor(
            skill.level,
          )}`}
        >
          {skill.level}
        </span>
      </div>

      <div className="flex items-center gap-4 mt-4">
        <div className="w-full bg-gray-200 h-2 rounded-full">
          <div
            style={{ width: `${skill.proficiency}%` }}
            className="bg-black h-2 rounded-full"
          />
        </div>

        <span className="font-semibold">{skill.proficiency}%</span>
      </div>
    </div>
  );

  return (
    <div className="border rounded-2xl p-5">
      {/* Header */}

      <div className="flex items-center gap-3">
        {icon}

        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      {title !== "Recommended Skills to add" ? (
        <div className="grid md:grid-cols-2 gap-3 mt-5">
          {skills.map((skill, index) => (
            <SkillItem key={index} skill={skill} />
          ))}
        </div>
      ) : (
      <div className="mt-6 border border-yellow-300 bg-yellow-50 rounded-2xl p-4">
  <p className="text-gray-700 mb-4">
    These skills are frequently requested in job postings for similar
    roles.
  </p>

  <div className="grid md:grid-cols-2 gap-3">
    {skills.map((skill, index) => (
      <div
        key={index}
        className="flex items-center justify-between border border-yellow-300 rounded-xl p-3 bg-white"
      >
        <h4 className="font-medium">{skill.label}</h4>

        <span
          className={`px-3 py-1 text-sm border rounded-full ${getSeverityColor(
            skill.severity
          )}`}
        >
          {skill.severity} severity
        </span>
      </div>
    ))}
  </div>
</div>
      )}
    </div>
  );
};

export default SkillsCard;
