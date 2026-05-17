import React from "react";
import { House } from 'lucide-react';
import { Download } from 'lucide-react';
const ResultHeader = () => {
  return (
    <div>
      <div className="w-full h-15 border-b-2 border-gray-300 flex justify-between items-center ">
        <div className="flex h-10  text-red-500 w-[30%] gap-2.5 ml-9.75 p-1.25">
          <div className="">Icon</div>
          <span className="text-black text-lg font-medium">
            ScanStack 
            Resume analysis
          </span>
        </div>
        <div className="h-10 w-100  solid flex items-center gap-4 justify-center">
            <div className="border-gray border-2 rounded-xl solid w-1/2 items-center justify-around font-bold flex h-full">
              <div class=""><House/></div>
              <div> 
                New Analysis
              </div>
            </div>
            <div  className="border-gray rounded-xl flex items-center justify-around bg-blue-500 font-bold text-white border-2 solid w-1/2 h-full mr-5">
            <div><Download/>  </div>
            <div>Export report</div></div>
          </div>
      </div>
    </div>
  );
};

export default ResultHeader;
