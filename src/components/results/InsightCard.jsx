import React from 'react'

const InsightCard = ({ type, title }) => {

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
    <div className='h-full w-1/3 rounded-2xl border-2 border-black p-4'>

      {/* Title */}
      <h2 className='text-xl font-bold mb-4'>
        {title}
      </h2>
      {type === "strength" &&
        strengths.map((item, index) => (
          <div key={index} className='font-semibold text-green-600 mb-2'>
            {item.label}
          </div>
        ))}
      {type === "improvement" &&
        improvements.map((item, index) => (
          <div key={index} className='font-semibold text-yellow-600 mb-2'>
            {item.label}
          </div>
        ))}
      {type === "critical" &&
        criticalIssues.map((item, index) => (
          <div key={index} className='font-semibold text-red-600 mb-2'>
            {item.label}
          </div>
        ))}
    </div>
  )
}

export default InsightCard