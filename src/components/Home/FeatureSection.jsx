import React from 'react'
import FeaturesCard from './FeaturesCard'
import  AiIcon from "../../assets/image1.png";
import  AtsIcon  from "../../assets/image2.png";

const FeatureSection = () => {
  const features=[{
    heading:"What we analyze",
    description:"Content quality,ATS compatibility,skill detection,formatting and keyword optimization based on the industry standards.",
    icon:AiIcon
  },{
     heading:"Your Privacy",
    description:"Your resume is processed in - browser.We don't store or share your personal information.",
    icon:AtsIcon
  }]
  return (
    <div>
      <div className=' flex gap-5 mt-12.5 p-3.75'>
       {features.map((item,index)=>(
        <FeaturesCard key={index} title={item.heading} description={item.description} icon={item.icon}/>
       ))}
      </div>
    </div>
  )
}

export default FeatureSection