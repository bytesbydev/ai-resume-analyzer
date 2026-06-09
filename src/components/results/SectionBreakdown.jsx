import React from "react";

const SectionBreakdown = ({ result }) => {
  const skillCategories = result?.skillCategories || [];

  return (
    <div className="w-full">

      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Section Breakdown
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {skillCategories.map((category) => (
          <div
            key={category.section}
            className="flex items-center justify-between gap-3 p-2 rounded-lg hover:bg-gray-50"
          >

            {/* Section name */}
            <span className="text-sm sm:text-base text-gray-700">
              {category.section}
            </span>

            {/* Score + bar */}
            <div className="flex items-center gap-2 w-1/2 sm:w-2/3">

              {/* Progress bar */}
              <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gray-900 rounded-full transition-all duration-300"
                  style={{ width: `${category.score}%` }}
                />
              </div>

              {/* Score text */}
              <span
                className={`text-xs sm:text-sm font-medium ${
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