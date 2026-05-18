import React from 'react'
import { Award, TrendingUp, AlertCircle, CheckCircle2 } from "lucide-react";
const ScoreSection = () => {
  return (
    <div>
      <div className='border-2 border-black solid mt-11 '>
        <div  className="w-5 h-5"><Award className='bg-blue-700 text-white' /></div>
        <span>Overall Quality Score</span>
        <span>Based on the content, formatting and ATS compatibility</span>
      </div>
    </div>
  )
}

export default ScoreSection