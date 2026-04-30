import React from 'react'

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
              <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum ipsam, sapiente suscipit quos non autem libero impedit distinctio! Eius unde rerum impedit sapiente qui porro beatae sint dignissimos quos quae?</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, obcaecati officiis expedita assumenda non nulla omnis eligendi temporibus vitae voluptatum magnam modi iusto, maiores consequuntur fugiat cupiditate? Ea, repellendus rem?</li>
              <li>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur vitae, iure nam dolor enim ipsam est deleniti nemo, ut at delectus repellendus inventore voluptates sunt ipsum dicta, corrupti exercitationem veritatis.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UploadBox