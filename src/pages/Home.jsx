import React, { useRef, useState } from "react";
import "./Home.css";
import Header from "../componets/Header";

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
      <Header />
      <div className="outor_div">
        <div className="center_div">
          <div className="center-heading-section">
          <div className="center-heading">Analyze your Resume</div>
          <div className="center-subheading">
            Get actionable feedback to improve your resume and increase your
            chance with recruitors and ATS systems
          </div>
          </div>
          <div className="uploading-section" onDrop={(e)=>{e.preventDefault(); handleFile(e.dataTransfer.files[0])}}  onDragOver={(e)=>e.preventDefault()} onClick={()=>inputRef.current.click()}>
            <div className="middle-section">
              <div className="upload-icon"></div>
              <div className="upload-heading">Upload your resume</div>
              <div className="upload-subheading"> Drag and drop or click to browse</div>  <br />
              <input className="fileInput" type="file" name="resume" ref={inputRef} accept="application/pdf" onChange={(e)=>handleFile(e.target.files[0])}  />
              <div>
                <ul>
                  <li>Pdf format only</li>
                  <li>Max file size: 5MB</li>
                  <li>Analysis takes 2 to 5 seconds</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="last-section">
            <div className="flex-box-1">
              <div className="last-icon-1">icon</div>
              <div className="last-textbox">
 <div>What we analyze</div>
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta id tempore impedit sed architecto voluptate provident minus. Accusamus architecto, consequatur ea voluptate accusantium non, rerum hic ducimus in vitae temporibus?</div>
              </div>
             
            </div>
            <div className="flex-box-1">
              <div className="last-icon-1">
                
              </div>
              <div className="last-textbox">
 <div>your privacy</div>
              <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolore repudiandae numquam voluptas similique. Vitae, quos culpa! Fugiat nostrum placeat iste suscipit ratione molestias eum neque, asperiores architecto ad obcaecati.</div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
