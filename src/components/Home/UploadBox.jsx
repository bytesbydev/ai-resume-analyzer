import React from "react";
import { useNavigate } from "react-router-dom";

import { extractText } from "../../utils/extractText";
import { analyzeResume } from "../../utils/analyzeResume";

const UploadBox = () => {
  const navigate = useNavigate();

  const handleFileChange = async (e) => {
    const file = e.target.files[0];

    if (!file) return;

    try {
      if (
        file.type !== "application/pdf" &&
        !file.name.toLowerCase().endsWith(".pdf")
      ) {
        alert("Please upload a PDF file");
        return;
      }

      if (file.size > 5 * 1024 * 1024) {
        alert("File size must be under 5 MB");
        return;
      }

      const text = await extractText(file);

      if (!text || text.trim() === "") {
        alert("Could not extract text from PDF");
        return;
      }

      const parsedData = analyzeResume(text);

      navigate("/analyzing", {
        state: {
          parsedData,
        },
      });
    } catch (error) {
      console.error("Upload Error:", error);
      alert("Failed to process resume");
    }
  };

  return (
<div className="w-full flex justify-center px-3 sm:px-4 mt-8 sm:mt-12">
  <div className="w-full max-w-4xl border-2 border-dashed border-gray-300 rounded-xl bg-white py-10 sm:py-16 px-4 sm:px-6 flex flex-col items-center text-center">

    <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gray-100 flex items-center justify-center mb-5 sm:mb-6">
          <svg
            width="42"
            height="42"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M8 7H16M8 11H16M8 15H13"
              stroke="#94A3B8"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <rect
              x="4"
              y="3"
              width="16"
              height="18"
              rx="2"
              stroke="#94A3B8"
              strokeWidth="1.8"
            />
          </svg>
        </div>

        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-2">
      Upload your resume
    </h2>

    <p className="text-sm sm:text-base text-gray-500 mb-6">
      Drag and drop or click to browse
    </p>

        {/* Hidden Input */}
        <input
          id="resume-upload"
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="hidden"
        />

        {/* Button */}
         <label
      htmlFor="resume-upload"
      className="cursor-pointer bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg transition text-sm sm:text-base"
    >
      Choose File
    </label>

        {/* Info */}
        <div className="mt-5 sm:mt-6 text-xs sm:text-sm text-gray-500 space-y-1">
      <p>• PDF format only</p>
      <p>• Maximum file size: 5 MB</p>
      <p>• Analysis takes 3-5 seconds</p>
    </div>
      </div>
    </div>
  );
};

export default UploadBox;