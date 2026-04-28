import React, { useRef, useState } from "react";
import "./Home.css";
import Navbar from "../components/common/Navbar";
import HeroSection from "../components/Home/HeroSection";
import UploadBox from "../components/Home/UploadBox";

const Home = () => {
  const[file,setFile]=useState(null)

  const inputRef=useRef()
  const handleFile=(file)=>{
    if(!file) return
    if(file.type!=="application/pdf"){
      alert("Only pdf allowed")
      return
    }
    if(file.size>5*1024*1024){
      alert("Max size is 5mb")
      return
    }
    setFile()
  }

  return (
    <div>
      <div className="header">
      <Navbar />
      </div>
      <div className="main-page">
      <div className="hero-section">
        <HeroSection/>
      </div>
      <div className="upload-section">
        <UploadBox/>
      </div>
     </div>
    </div>
  );
};

export default Home;
