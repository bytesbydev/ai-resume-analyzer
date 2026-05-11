import React from "react";
import "./analyzing.css";
import Navbar from "../components/common/Navbar";
import AnaylsisLoader from "../components/loader/AnaylsisLoader";
import ProgressBar from "../components/common/ProgressBar";
const Analyzing = () => {
  return (
    <div>
      <Navbar />
      <div className="analysis">
        <AnaylsisLoader />
        <div className="progress">
          <ProgressBar progress={50} />
        </div>
      </div>
    </div>
  );
};

export default Analyzing;
