import React from "react";
import Navbar from "../components/common/Navbar";
import AnaylsisLoader from "../components/loader/AnaylsisLoader";


const Analyzing = () => {
  return (
    <div className="analyzing-page">
      <Navbar />
      <div className='flex justify-center items-center mt-25'>
        <div className='h-120 w-120 p-8.5 rounded-[20px] border-2 border-solid border-[black]'>
          <AnaylsisLoader />
        </div>
      </div>
    </div>
  );
};

export default Analyzing;