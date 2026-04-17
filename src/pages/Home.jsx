import React from 'react'
import './Home.css'
import Header from '../componets/Header'

const Home = () => {
  return (
    <div>
        <Header/> 
        <div className="outor_div">
        <div className="center_div">
          <h3>Analyze your Resume</h3> <br />
          Get actionable feedback to improve your resume and increase your chance with recruitors and ATS systems
        </div>
         </div>
    </div>
  )
}

export default Home