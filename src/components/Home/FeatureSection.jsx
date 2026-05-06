import React from 'react'
import FeaturesCard from './FeaturesCard'
import "./FeatureSection.css"
import { ReactComponent as AiIcon } from "../../assets/image1.png";
import { ReactComponent as AtsIcon } from "../../assets/image2.png";

const FeatureSection = () => {
  const features=[{
    heading:"What we analyze",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum ipsam, sapiente suscipit quos non autem libero impedit distinctio! Eius unde rerum impedit sapiente qui porro beatae sint dignissimos quos quae?",
    icon:AiIcon
  },{
     heading:"What we analyze",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum ipsam, sapiente suscipit quos non autem libero impedit distinctio! Eius unde rerum impedit sapiente qui porro beatae sint dignissimos quos quae?",
    icon:AtsIcon
  }]
  return (
    <div>
      <div className="features-section">
       {features.map((item,index)=>(
        <FeaturesCard key={index} title={item.heading} description={item.description}/>
       ))}
      </div>
    </div>
  )
}

export default FeatureSection