import { TrendingUp } from "lucide-react";
import React from "react";

const SkillsCard = ({ title, icon }) => {
  const technicalSkills = [
    { name: "React", level: "Expert", proficiency: 95 },
    { name: "TypeScript", level: "Advanced", proficiency: 85 },
    { name: "Node.js", level: "Advanced", proficiency: 80 },
    { name: "Python", level: "Intermediate", proficiency: 70 },
    { name: "SQL", level: "Intermediate", proficiency: 65 },
    { name: "Git", level: "Advanced", proficiency: 88 },
  ];

  const softSkills = [
    { name: "Leadership", level: "Advanced", proficiency: 85 },
    { name: "Communication", level: "Expert", proficiency: 92 },
    { name: "Problem Solving", level: "Advanced", proficiency: 88 },
    { name: "Team Collaboration", level: "Advanced", proficiency: 80 },
  ];

  const missingSkills = [
    { name: "Docker", demand: "High" },
    { name: "AWS/Cloud", demand: "High" },
    { name: "GraphQL", demand: "Medium" },
    { name: "CI/CD", demand: "Medium" },
  ];

  const skills =
    title === "Technical Skills" ? technicalSkills :softSkills;

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

  const getDemandColor = (demand) => {
    switch (demand) {
      case "High":
        return "bg-red-100 text-red-600 border-red-300";

      case "Medium":
        return "bg-yellow-100 text-yellow-700 border-yellow-300";

      default:
        return "bg-gray-100 text-gray-700 border-gray-300";
    }
  };

  const SkillItem = ({ skill }) => (
    <div className="border-2 border-solid border-black rounded-2xl p-3">
      <div className="flex justify-between">
        <div className="flex gap-2 items-center">
          <h5 className="font-medium text-gray-900">{skill.name}</h5>

          <TrendingUp className="w-4 h-4 text-green-600" />
        </div>

        <span
          className={`px-2 py-1 text-xs font-medium border rounded-full ${getLevelColor(
            skill.level
          )}`}
        >
          {skill.level}
        </span>
      </div>

      <div className="flex gap-6 items-center mt-4">
        <div className="w-full bg-gray-300 h-2.5 rounded-2xl">
          <div
            style={{ width: `${skill.proficiency}%` }}
            className="bg-black h-2.5 rounded-2xl"
          />
        </div>

        <div className="font-semibold">{skill.proficiency}%</div>
      </div>
    </div>
  );

  return (
    <div className="h-fit p-4 border-2 border-black rounded-2xl">
      {/* Header */}
      <div className="flex gap-3 items-center">
        {icon}

        <h2 className="text-lg font-semibold text-gray-900">
          {title}
        </h2>
      </div>

      {/* Skills Grid */}
      <div className="grid md:grid-cols-2 gap-3 mt-4">
        {skills.map((skill, index) => (
          <SkillItem key={index} skill={skill} />
        ))}
      </div>

      {/* Recommended Skills */}
      {title === "Recommended Skills to add" && (
        <div className="mt-6 border border-yellow-300 bg-yellow-50 rounded-2xl p-4">
          <p className="text-gray-700 mb-4">
            These skills are frequently requested in job postings for
            similar roles.
          </p>

          <div className="grid md:grid-cols-2 gap-3">
            {missingSkills.map((skill, index) => (
              <div
                key={index}
                className="flex items-center justify-between border border-yellow-300 rounded-xl p-3 bg-white"
              >
                <h4 className="font-medium">{skill.name}</h4>

                <span
                  className={`px-3 py-1 text-sm border rounded-full ${getDemandColor(
                    skill.demand
                  )}`}
                >
                  {skill.demand} demand
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