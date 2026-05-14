import React, { useRef, useState } from "react";
import "./Home.css";
import Navbar from "../components/common/Navbar";
import HeroSection from "../components/Home/HeroSection";
import UploadBox from "../components/Home/UploadBox";
import FeatureSection from "../components/Home/FeatureSection";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="middle-section">
   <main>
        <HeroSection/>
        <UploadBox/>
     <FeatureSection/>
   </main>
   </div>
     </div>
  );
};

export default Home;
