import React from "react";
import "./FeaturesCard.css"
const FeaturesCard = ({icon,title, description }) => {
  return (
    <div className="feature-card">
   <img src={icon} alt={title} className="card-icon"/>
    <div>
      <span className="t1">{title}</span> 
      <div className="t2">{description}</div>
    </div>
    </div>
  );
};

export default FeaturesCard;
