import React from 'react'
import "./Loaderstep.css"
const LoaderStep = () => {
  return (
    <div className='loader-section'>
      <div className='loader-cards'>
        <div className="icon-description"> <div className='icon'>icon</div></div>
        <div className='description-section'> <span>Parsing resume content</span> <br />
        <span> 1-2s</span></div>
      </div>
      <div className='loader-cards'>
        <div  className='loader-icon'>icon</div>
        <div className='description-section'> <span>Analyzing skills and experience</span> <br />
        <span> 1-2s</span></div>
      </div>
      <div className='loader-cards'>
        <div  className='loader-icon'>icon</div>
        <div className='description-section'> <span>Generating insights</span>
        <span> 1-2s</span></div>
      </div>
    </div>
  )
}

export default LoaderStep