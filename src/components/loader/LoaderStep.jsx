import React from 'react'
import "./Loaderstep.css"
const LoaderStep = ({icon,title,time}) => {
  return (
    <div className='loader-section'>
      <div className='loader-cards'>
        <div className="icon-description"> <div className='icon'>{icon}</div></div>
        <div className='description-section'> <span className='l-subdescription'>{title}</span> <br />
        <span> {time}</span></div>
      </div>
      {/* <div className='loader-cards'>
          <div className="icon-description"> <div className='icon'>icon</div></div>
        <div className='description-section'> <span className='l-subdescription'>Analyzing skills and experience</span> <br />
        <span> 1-2s</span></div>
      </div>
      <div className='loader-cards'>
         <div className="icon-description"> <div className='icon'>icon</div></div>
        <div className='description-section'> <span className='l-subdescription'>Generating insights</span>
        <span> 1-2s</span></div>
      </div> */}
    </div>
  )
}

export default LoaderStep