import React from 'react'
import Navbar from '../components/common/Navbar'
import AnaylsisLoader from '../components/loader/AnaylsisLoader'
import LoaderStep from '../components/loader/LoaderStep'
import ProgressBar from "../components/common/ProgressBar"
const Analyzing = () => {
  return (
    <div>
      <Navbar/>
      <AnaylsisLoader/>
     <LoaderStep/>
     <ProgressBar/>
    </div>
  )
}

export default Analyzing