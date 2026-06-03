import React from "react";
import Navbar from "../components/common/Navbar";
import HeroSection from "../components/Home/HeroSection";
import UploadBox from "../components/Home/UploadBox";
import FeatureSection from "../components/Home/FeatureSection";
const Home = () => {
  return (
    <div className="home-container">
      <Navbar />

      <div className="h-fit w-full flex justify-center pb-12.5">
        <main className="h-fit w-6/12">
          <HeroSection />

          <UploadBox />

          <FeatureSection />
        </main>
      </div>
    </div>
  );
};

export default Home;