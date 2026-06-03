import React from "react";
import { Home } from 'lucide-react';
import { Download } from 'lucide-react';
import { FileCheck } from "lucide-react";
const ResultHeader = () => {
  return (
    <div>
       <header className="border-b bg-white sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center">
                <FileCheck className="size-5 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">
                  Scanstack
                </h1>
                <p className="text-xs text-gray-500">Resume Analysis Results</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button type="button"  className="flex cursor-pointer items-center font-semibold border solid rounded-xl p-2">
                <Home className="size-4  mr-2" />
                New Analysis
              </button>
              <button 
                className="bg-blue-600 cursor-pointer border solid font-semibold rounded-xl items-center flex p-2 text-white hover:bg-blue-700"
              >
                <Download className="size-4  mr-2" />
                Export Report
              </button>
            </div>
          </div>
        </div>
      </header>
     
     
    </div>
  );
};

export default ResultHeader;
