import React from "react";

const SectionBreakdown = () => {
  const skillCategories = [
    { section: "Contact Info", score: 100 },
    { section: "Work Experience", score: 85, },
    { section: "Skills", score: 65, },
    { section: "Education", score: 90, },
  ];

  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Section Breakdown
      </h3>
      <div className="grid md:grid-cols-2 gap-3">
        {skillCategories.map((category, index) => (
          <div key={index} className=" flex justify-between items-center">
            <span className="text-gray-700">{category.section}</span>
            <div className="p-1 ">
              <div className="flex items-center gap-2">
                <div className="h-1.5 w-20">
                  <div className="bg-black h-1.5 rounded-xl" style={{ width: `${category.score}%` }}>
                    </div> </div>
                <span
                  className={text-right}
                >
                  {category.score}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionBreakdown;
