import React from "react";
import "./analyzing.css";
import Navbar from "../components/common/Navbar";
import AnaylsisLoader from "../components/loader/AnaylsisLoader";
import ProgressBar from "../components/common/ProgressBar";

const Analyzing = () => {
  return (
    <div className="analyzing-page">
      <Navbar />
      <div className="analyzing-wrapper">
        <div className="analyzing-loader">
          <AnaylsisLoader />
        <div className="analyzing-progressbar">
          <span>Progress</span>
          <ProgressBar progress={50} />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Analyzing;