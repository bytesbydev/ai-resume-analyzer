import React from 'react'
import {CheckCircle2,AlertCircle } from "lucide-react";
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
    <div className='h-auto w-1/3 rounded-2xl border-2 border-black p-4'>

      {/* Title */}
      <h4 className='text-xl font-bold mb-4'>
        {title}
      </h4>
      {type === "strength" &&
        strengths.map((item, index) => (
           <div key={index} className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 shrink-0" />
                <span className="text-sm text-gray-700">
                  {item.label}
                </span>
              </div>
        ))}
      {type === "improvement" &&
        improvements.map((item, index) => (
           <div key={index} className="flex items-start gap-2">
                <div className="w-4 h-4 mt-0.5 shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-600 mx-auto mt-1.5" />
                </div>
                <span className="text-sm text-gray-700">
                  {item.label}
                </span>
              </div>
        ))}
      {type === "critical" &&
        criticalIssues.map((item, index) => (
                        <div key={index} className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-red-600 mt-0.5 shrink-0" />
                <span className="text-sm text-gray-700">
                  {item.label}
                </span>
              </div>
        ))}
    </div>
  )
}

export default InsightCard