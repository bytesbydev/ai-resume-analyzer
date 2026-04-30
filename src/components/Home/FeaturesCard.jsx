import React from "react";

const FeaturesCard = ({ title, description }) => {
  return (
    <div>
    <div className="card-icon">icon</div>
    <div>
      <span>{title}</span>
      <div>{description}</div>
    </div>
    </div>
  );
};

export default FeaturesCard;
