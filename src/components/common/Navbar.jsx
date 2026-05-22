import React from "react";

const Navbar = () => {
  return (
    <div>
         <header className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-600 flex items-center justify-center">
              <FileCheck className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-gray-900">
                Scanstack
              </h1>
              <p className="text-xs text-gray-500">Resume Analysis</p>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;