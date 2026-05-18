import React from 'react'
import ResultHeader from '../components/results/ResultHeader'
import ScoreSection from '../components/results/ScoreSection'

const Results = () => {
  return (
    <div>
      <div>
        <div className='result-header'>
        <ResultHeader/>
        </div>
        <main  className='flex flex-col items-center'>
          <div className='w-[90%] h-fit border-2 border-black solid mt-7'>
        <div>
          <span className='font-black text-2xl'>Resume Analysis report</span> <br />
          <span className='text-md text-gray-600'>Comprehensive breakdown with actionable recommendations</span>
        </div>
        <div className='ats score section p-5'>
          <ScoreSection/>
        </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Results