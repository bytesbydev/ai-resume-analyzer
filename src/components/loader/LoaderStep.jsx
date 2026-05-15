import React from "react";

const LoaderStep = ({ icon, title, time, status }) => {
  return (
    <div
      className={`flex h-15 w-full border-2 border-black rounded-[10px] mt-5 gap-2.5 ${
        status === "active"
          ? "bg-[#07f09a]"
          : status === "completed"
          ? "bg-[#bdf007]"
          : ""
      }`}
    >
      
      <div className="w-[15%] flex justify-center items-center">
        <div className="h-10 w-10 rounded-full border border-black flex justify-center items-center bg-red-500">
          {icon}
        </div>
      </div>

      <div className="text-base p-2.5">
        <span className="font-bold">{title}</span>
        <br />
        <span>{time}</span>
      </div>

    </div>
  );
};

export default LoaderStep;