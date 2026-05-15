import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ progress }) => {
  return (
    <div className=' w-full h-2.5 bg-gray-200 overflow-hidden mx-0 my-5 rounded-[999px]'>
      <div
        className='h-full bg-linear-to-r from-indigo-600 to-indigo-500 rounded-full transition-all duration-300 ease-in-out'
        style={{ width: `${progress}%` }}
      >
      </div>
    </div>
  );
};

export default ProgressBar;