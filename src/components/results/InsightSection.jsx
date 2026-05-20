import React from 'react'
import { CheckCircle2 } from "lucide-react";
import InsightCard from './InsightCard';
const InsightSection = () => {

  return (
    <div className='border-2  border-black flex gap-6 solid h-fit p-3 w-full mt-10'>
      <InsightCard type="strength" title="Strengths"/>
      <InsightCard type="improvement" title="Improvements"/>
      <InsightCard type="critical" title="Critical Issues"/>
    </div>
  )
}

export default InsightSection
