import React from "react";
import "./Home.css";
import Header from "../componets/Header";

const Home = () => {
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
          <div className="uploading-section">
            <div>
              <div className="upload-icon"></div>
              <div className="upload-heading">Upload your resume</div>
              <div className="upload-subheading"> Drag and drop or click to browse</div>  <br />
              <input type="file" name="resume" />
              <div>
                <ul>
                  <li>Pdf format only</li>
                  <li>Max file size: 5MB</li>
                  <li>Analysis takes 2 to 5 seconds</li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>icon</div>
              <span>What we analyze</span>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta id tempore impedit sed architecto voluptate provident minus. Accusamus architecto, consequatur ea voluptate accusantium non, rerum hic ducimus in vitae temporibus?</span>
            </div>
            <div>
              <div>icon</div>
              <span>your privacy</span>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolore repudiandae numquam voluptas similique. Vitae, quos culpa! Fugiat nostrum placeat iste suscipit ratione molestias eum neque, asperiores architecto ad obcaecati.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
