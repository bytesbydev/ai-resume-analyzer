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
              state: {
                result,
              },
            });
          }, 700)
        );
      } catch (error) {
        console.error("Analysis failed:", error);
      }
    };

    runAnalysis();

    return () => {
      timers.forEach((timer) => clearTimeout(timer));
    };
  }, [parsedData, navigate]);

  return (
    <div className="analyzing-page">
      <Navbar />

      <div className="flex justify-center items-center mt-25">
        <div className="h-120 w-120 p-8.5 rounded-[20px] border-2 border-solid border-[black]">
          <AnaylsisLoader progress={progress} />
        </div>
      </div>
    </div>
  );
};

export default Analyzing;