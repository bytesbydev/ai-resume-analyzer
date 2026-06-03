import React from "react";

const SectionBreakdown = ({ result }) => {
  const skillCategories = result.skillCategories || [];

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Section Breakdown
      </h3>

     <div className="grid md:grid-cols-2 gap-3">
  {skillCategories.map((category) => (
    <div
      key={category.section}
      className="flex justify-between items-center"
    >
      <span className="text-gray-700">
        {category.section}
      </span>

      <div className="flex items-center gap-2">
        <div className="h-1.5 w-20 bg-gray-200 rounded-xl">
          <div
         className="bg-gray-950 h-1.5 rounded-xl"
            style={{
              width: `${category.score}%`,
            }}
          />
        </div>

        <span
          className={`text-sm font-medium ${
            category.score >= 80
              ? "text-green-600"
              : category.score >= 60
              ? "text-amber-600"
              : "text-red-600"
          }`}
        >
          {category.score}
        </span>
      </div>
    </div>
  ))}
</div>
    </div>
  );
};

export default SectionBreakdown;