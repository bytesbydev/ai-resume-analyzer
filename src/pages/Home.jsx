import React from "react";
import Navbar from "../components/common/Navbar";
import HeroSection from "../components/Home/HeroSection";
import UploadBox from "../components/Home/UploadBox";
import FeatureSection from "../components/Home/FeatureSection";

const Home = () => {
  return (
    <div className="home-container w-full">
      <Navbar />

      <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8 pb-12">
        <main className="w-full max-w-3xl lg:max-w-4xl">
          <HeroSection />
          <UploadBox />
          <FeatureSection />
        </main>
      </div>
    </div>
  );
};

export default Home;