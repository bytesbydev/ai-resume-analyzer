import React from 'react'
import ResultHeader from '../components/results/ResultHeader'
import ScoreSection from '../components/results/ScoreSection'
import SkillsAnalysis from '../components/results/SkillsAnalysis'
import SuggestionSection from '../components/results/SuggestionSection'
import ReccomendedSkills from '../components/results/RecomendedSkills'
const Results = () => {
  return (
    <div>
      <div>
        <div className='result-header'>
        <ResultHeader/>
        </div>
        <main  className='flex flex-col items-center'>
          <div className='w-[90%] h-fit z solid mt-7'>
        <div>
          <span className=' font-semibold text-2xl'>Resume Analysis report</span> <br />
          <span className='text-md font-semibold text-gray-600'>Comprehensive breakdown with actionable recommendations</span>
        </div>
        <div className='ats score rounded-3xl section p-5 border-2 border-gray-300 solid mt-5'>
          <ScoreSection/>
        </div>
        <div className='skills-anaylsis-section rounded-3xl section p-5 border-2 border-gray-300 solid mt-5'>
<SkillsAnalysis/>
        </div>
        <div className='suggestions-section rounded-3xl section p-5 border-2 border-gray-300 solid mt-5'>
<SuggestionSection/>
        </div>
        <div className='insight-section rounded-3xl section p-5 border-2 border-gray-300 solid mt-5'>
          <ReccomendedSkills/>
        </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Results