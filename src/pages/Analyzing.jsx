import React from "react";
import Navbar from "../components/common/Navbar";
import AnaylsisLoader from "../components/loader/AnaylsisLoader";


const Analyzing = () => {
  return (
    <div className="analyzing-page">
      <Navbar />
      <div className='flex justify-center items-center mt-25'>
        <div className='h-100 w-100 p-7.5 rounded-[20px] border-2 border-solid border-[black]'>
          <AnaylsisLoader />
        </div>
      </div>
    </div>
  );
};

export default Analyzing;