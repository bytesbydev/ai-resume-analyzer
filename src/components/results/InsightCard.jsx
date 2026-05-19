import React from 'react'

const InsightCard = ({ type }) => {
 const strengths = [
  {
    label: "Clear contact information",
    severity: "low",
  },
  {
    label: "Consistent formatting",
    severity: "low",
  },
  {
    label: "Relevant work experience",
    severity: "low",
  },
  {
    label: "Education section complete",
    severity: "low",
  },
];

const improvements = [
  {
    label: "Add specific metrics to achievements",
    severity: "medium",
  },
  {
    label: "Include relevant certifications",
    severity: "medium",
  },
  {
    label: "Expand technical skills section",
    severity: "low",
  },
];

const criticalIssues = [
  {
    label: "Missing industry keywords for ATS optimization",
    severity: "high",
  },
];
  return (
   <div className='h-fit w-1/3 border-2 border-black solid p-3'>
   {type==="strength" && strengths.map((item,index)=>(
    <span>
      <span>Strengths</span> <br />
      <span key={index}>{item.label}</span>
    </span>
   ))}
   {type==="improvement" && improvements.map((item,index)=>(
    <span>
      <span>Improvements</span> <br />
      <span key={index}>{item.label}</span>
    </span>
   ))}
   {type==="critical" && criticalIssues.map((item,index)=>(
    <span key={index}>{item.label}</span>
   ))}
   </div>
  )
}

export default InsightCard