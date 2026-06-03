import React from "react";
import { TrendingUp } from "lucide-react";


const EMPTY_ARRAY = [];
const getLevelColor = (level) => {
  switch (level) {
    case "Expert":
      return "bg-blue-100 text-blue-700 border-blue-200";

    case "Advanced":
      return "bg-green-100 text-green-700 border-green-200";

    case "Intermediate":
      return "bg-yellow-100 text-yellow-700 border-yellow-200";

    case "Beginner":
      return "bg-gray-100 text-gray-700 border-gray-200";

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

    case "Low":
      return "bg-green-100 text-green-700 border-green-300";

    default:
      return "bg-gray-100 text-gray-700 border-gray-300";
  }
};

const SkillItem = ({ skill }) => (
  <div className="border-2 border-gray-300 rounded-2xl p-4">
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <h5 className="font-medium">{skill.label}</h5>

        <TrendingUp className="size-4 text-green-600" />
      </div>

      <span
        className={`px-2 py-1 text-xs border rounded-full ${getLevelColor(
          skill.level
        )}`}
      >
        {skill.level}
      </span>
    </div>

    <div className="flex items-center gap-4 mt-4">
      <div className="w-full bg-gray-200 h-2 rounded-full">
        <div
          style={{ width: `${skill.proficiency}%` }}
          className="bg-gray-950 h-2 rounded-full"
        />
      </div>

      <span className="font-semibold">
        {skill.proficiency}%
      </span>
    </div>
  </div>
);

const SkillsCard = ({ title, icon, skills = EMPTY_ARRAY }) => {
  return (
    <div className="border-2 border-gray-300 rounded-2xl p-5">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>

      {title !== "Recommended Skills to add" ? (
        <div className="grid md:grid-cols-2 gap-3">
          {skills.map((skill) => (
            <SkillItem
              key={`${skill.label}-${skill.level}`}
              skill={skill}
            />
          ))}
        </div>
      ) : (
        <div className="mt-2 border-2 border-yellow-300 bg-yellow-50 rounded-2xl p-4">
          <p className="text-gray-700 mb-4">
            These skills are frequently requested in job postings for similar
            roles.
          </p>

          <div className="grid md:grid-cols-2 gap-3">
            {skills.map((skill) => (
              <div
                key={`${skill.label}-${skill.severity}`}
                className="flex items-center justify-between border border-yellow-300 rounded-xl p-3 bg-white"
              >
                <h4 className="font-medium">
                  {skill.label}
                </h4>

                <span
                  className={`px-3 py-1 text-sm border rounded-full ${getSeverityColor(
                    skill.severity
                  )}`}
                >
                  {skill.severity}
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