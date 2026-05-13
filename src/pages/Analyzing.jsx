import React from "react";
import "./analyzing.css";
import Navbar from "../components/common/Navbar";
import AnaylsisLoader from "../components/loader/AnaylsisLoader";


const Analyzing = () => {
  return (
    <div className="analyzing-page">
      <Navbar />
      <div className="analyzing-wrapper">
        <div className="analyzing-loader">
          <AnaylsisLoader />
        </div>
      </div>
    </div>
  );
};

export default Analyzing;