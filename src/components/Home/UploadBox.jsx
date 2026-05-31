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
      // Validate PDF
      if (
        file.type !== "application/pdf" &&
        !file.name.toLowerCase().endsWith(".pdf")
      ) {
        alert("Please upload a PDF file");
        return;
      }

      // Validate size (5 MB)
      if (file.size > 5 * 1024 * 1024) {
        alert("File size must be under 5 MB");
        return;
      }

      // Extract text
      const text = await extractText(file);

      if (!text || text.trim() === "") {
        alert("Could not extract text from PDF");
        return;
      }

      // Parse resume
      const parsedData = analyzeResume(text);

      // Navigate to analyzing page
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
    <div>
      <div className="h-100 w-full flex justify-center items-center text-center bg-white mt-10 border-2 border-solid border-[black]">
        <div className="flex items-center gap-2.5 flex-col">
          <div className="flex justify-center items-center h-15 w-15">
            <svg
              width="137px"
              height="137px"
              viewBox="-5.52 -5.52 35.04 35.04"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g
                id="SVGRepo_bgCarrier"
                strokeWidth="0"
                transform="translate(0,0), scale(1)"
              >
                <rect
                  x="-5.52"
                  y="-5.52"
                  width="35.04"
                  height="35.04"
                  rx="17.52"
                  fill="#c7c7c7"
                />
              </g>

              <g id="SVGRepo_iconCarrier">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.17157 3.17157C3 4.34315 3 6.22876 3 10V14C3 17.7712 3 19.6569 4.17157 20.8284C5.34315 22 7.22876 22 11 22H13C16.7712 22 18.6569 22 19.8284 20.8284C21 19.6569 21 17.7712 21 14V10C21 6.22876 21 4.34315 19.8284 3.17157C18.6569 2 16.7712 2 13 2H11C7.22876 2 5.34315 2 4.17157 3.17157ZM7.25 8C7.25 7.58579 7.58579 7.25 8 7.25H16C16.4142 7.25 16.75 7.58579 16.75 8C16.75 8.41421 16.4142 8.75 16 8.75H8C7.58579 8.75 7.25 8.41421 7.25 8ZM7.25 12C7.25 11.5858 7.58579 11.25 8 11.25H16C16.4142 11.25 16.75 11.5858 16.75 12C16.75 12.4142 16.4142 12.75 16 12.75H8C7.58579 12.75 7.25 12.4142 7.25 12ZM8 15.25C7.58579 15.25 7.25 15.5858 7.25 16C7.25 16.4142 7.58579 16.75 8 16.75H13C13.4142 16.75 13.75 16.4142 13.75 16C13.75 15.5858 13.4142 15.25 13 15.25H8Z"
                  fill="#1C274C"
                />
              </g>
            </svg>
          </div>

          <div className="text-xl font-medium">
            Upload your resume
          </div>

          <div className="text-base text-[#666]">
            Drag or drop or click to browse
          </div>

          <input
            className="file:mr-2 file:px-4 file:py-2 file:rounded-md file:border-0 file:bg-indigo-600 file:text-white hover:file:bg-blue-600"
            onChange={handleFileChange}
            type="file"
            accept=".pdf"
          />

          <div className="text-base text-[#666]">
            <ul>
              <li className="list-none">PDF format only.</li>
              <li className="list-none">Maximum file size: 5MB.</li>
              <li className="list-none">
                Analysis takes up to 2 minutes.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadBox;