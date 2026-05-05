import React from 'react'
import "./UploadBox.css"
const UploadBox = () => {
  return (
    <div>
      <div className="upload-box">
        <div className='upload-section'>
          <div className="icon"></div>
          <div>Upload your resume</div>
          <div>Drag or drop or click to browse</div>
          <input type="file" />
          <div>
            <ul>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum ipsam, sapiente </li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum ipsam, sapiente </li>
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum ipsam, sapiente </li>
             
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UploadBox