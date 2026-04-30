import React from "react";
import "./FeaturesCard.css"
const FeaturesCard = ({ title, description }) => {
  return (
    <div className="feature-card">
    <div className="card-icon">icon</div>
    <div>
      <span>{title}</span> 
      <div>{description}</div>
    </div>
    </div>
  );
};

export default FeaturesCard;
