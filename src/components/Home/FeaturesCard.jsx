import React from "react";
const FeaturesCard = ({icon,title, description }) => {
  return (
     <div className="flex gap-4 bg-white p-4 sm:p-5 rounded-lg shadow-sm w-full">

      <img
        src={icon}
        alt={title}
        className="h-8 w-8 sm:h-10 sm:w-10 shrink-0"
      />

      <div>
        <span className="text-base sm:text-lg font-medium">
          {title}
        </span>

        <div className="text-sm sm:text-[15px] mt-2 text-gray-600">
          {description}
        </div>
      </div>
    </div>
  );
};

export default FeaturesCard;
