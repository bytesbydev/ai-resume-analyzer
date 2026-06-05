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
  <div className="flex flex-col md:flex-row gap-5 mt-10 sm:mt-12 px-3 sm:px-0">
    {features.map((item, index) => (
      <FeaturesCard
        key={index}
        title={item.heading}
        description={item.description}
        icon={item.icon}
      />
    ))}
  </div>
</div>
  )
}

export default FeatureSection