import React from "react";
const FeaturesCard = ({icon,title, description }) => {
  return (
    <div className='gap-5 h-full w-full flex bg-white p-3.75'>
   <img src={icon} alt={title} className=' h-10 w-10'/>
    <div>
      <span className=' text-xl'>{title}</span> 
      <div className='text-[15px] mt-2.5'>{description}</div>
    </div>
    </div>
  );
};

export default FeaturesCard;
