import React, { useEffect, useState } from "react";
import Navbar from "../components/common/Navbar";
import AnaylsisLoader from "../components/loader/AnaylsisLoader";
import { useLocation, useNavigate } from "react-router-dom";
import aiAnalysis from "../utils/aiAnalysis";

const Analyzing = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const parsedData = location.state?.parsedData;

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!parsedData) {
      navigate("/");
      return;
    }

    const timers = [];

    const runAnalysis = async () => {
      try {
        setProgress(10);

        timers.push(setTimeout(() => setProgress(25), 1000));
        timers.push(setTimeout(() => setProgress(42), 2000));
        timers.push(setTimeout(() => setProgress(67), 3000));
        timers.push(setTimeout(() => setProgress(89), 4000));

        const result = await aiAnalysis(parsedData);

        setProgress(100);

        timers.push(
          setTimeout(() => {
            navigate("/results", {
              state: { result },
            });
          }, 700)
        );
      } catch (error) {
        console.error("Analysis failed:", error);
      }
    };

    runAnalysis();

    return () => timers.forEach(clearTimeout);
  }, [parsedData, navigate]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="flex justify-center items-center px-4 py-10 sm:py-16">
        <div className="w-full max-w-md sm:max-w-lg md:max-w-xl p-5 sm:p-8 rounded-xl border border-gray-200 bg-white shadow-sm">
          <AnaylsisLoader progress={progress} />
        </div>
      </div>
    </div>
  );
};

export default Analyzing;