import React from 'react'
import FeaturesCard from './FeaturesCard'

const FeatureSection = () => {
  const features=[{
    heading:"What we analyze",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum ipsam, sapiente suscipit quos non autem libero impedit distinctio! Eius unde rerum impedit sapiente qui porro beatae sint dignissimos quos quae?"
  },{
     heading:"What we analyze",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum ipsam, sapiente suscipit quos non autem libero impedit distinctio! Eius unde rerum impedit sapiente qui porro beatae sint dignissimos quos quae?" 
  }]
  return (
    <div>
      <div className="features-card">
       {features.map((item,index)=>(
        <FeaturesCard key={index} title={item.heading} description={item.description}/>
       ))}
      </div>
    </div>
  )
}

export default FeatureSection