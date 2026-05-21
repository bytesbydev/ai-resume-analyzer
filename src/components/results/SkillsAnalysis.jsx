import React from 'react'

const SkillsAnalysis = () => {
   const technicalSkills = [
    { name: "React", level: "Expert", proficiency: 95, inDemand: true },
    { name: "TypeScript", level: "Advanced", proficiency: 85, inDemand: true },
    { name: "Node.js", level: "Advanced", proficiency: 80, inDemand: true },
    { name: "Python", level: "Intermediate", proficiency: 70, inDemand: true },
    { name: "SQL", level: "Intermediate", proficiency: 65, inDemand: false },
    { name: "Git", level: "Advanced", proficiency: 88, inDemand: false },
  ];

  const softSkills= [
    { name: "Leadership", level: "Advanced", proficiency: 85, inDemand: true },
    { name: "Communication", level: "Expert", proficiency: 92, inDemand: true },
    { name: "Problem Solving", level: "Advanced", proficiency: 88, inDemand: true },
    { name: "Team Collaboration", level: "Advanced", proficiency: 80, inDemand: false },
  ];

  const missingSkills=[
    { name: "Docker", demand: "High" },
    { name: "AWS/Cloud", demand: "High" },
    { name: "GraphQL", demand: "Medium" },
    { name: "CI/CD", demand: "Medium" },
  ];
  return (
    <div></div>
  )
}

export default SkillsAnalysis