import React from 'react'
import ResultHeader from '../components/results/ResultHeader'

const Results = () => {
  return (
    <div>
      <div>
        <div className='result-header'>
        <ResultHeader/>
        </div>
        <div  className='w-[90%] h-full border-2 border-black solid'>
          <span className='font-black text-2xl'>Resume Analysis report</span> <br />
          <span className='text-md text-gray-600'>Comprehensive breakdown with actionable recommendations</span>
        </div>
        <div className='ats score section'></div>
      </div>
    </div>
  )
}

export default Results