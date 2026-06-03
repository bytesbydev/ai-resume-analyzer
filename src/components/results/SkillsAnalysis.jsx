import React from "react";
import SkillsCard from "./SkillsCard";
import { AlertCircle, Code2, Users } from "lucide-react";

const SkillsAnalysis = ({ result }) => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-6">
        <div className="size-10 rounded-lg bg-blue-600 flex items-center justify-center">
          <Code2 className="size-5 text-white" />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Skill Detection & Analysis
          </h3>

          <p className="text-sm text-gray-500">
            Detected skills with estimated proficiency levels
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <SkillsCard
          title="Technical Skills"
          icon={<Code2 className="text-blue-600" />}
          skills={result?.technicalSkills || []}
        />

        <SkillsCard
          title="Soft Skills"
          icon={<Users className="text-green-600" />}
          skills={result?.softSkills || []}
        />

        <SkillsCard
          title="Recommended Skills to add"
          icon={<AlertCircle className="text-red-600" />}
          skills={result?.recommendedSkills || []}
        />
      </div>
    </div>
  );
};

export default SkillsAnalysis;