import { AlertCircle } from "lucide-react";
import React from "react";

const SuggestionCard = ({suggestions,priority}) => { 
  const getPriorityColors=(priority)=>({
    high:{
      icon:"text-red-600",
      badge:"bg-red-100 text-red-700 border-red-700",
    },
    medium:{
      icon:"text-amber-500",
          badge:"bg-amber-100 text-amber-700 border-amber-700"
    },
    low:{
      icon:"text-blue-500",
          badge:"bg-blue-100 text-blue-700 border-blue-700"
    },
  }[priority]
  )
  const styles=getPriorityColors(priority)
  return (
    <div>
      <div className="flex flex-col gap-3 border-2 p-5 border-gray-300 rounded-3xl">
      <div className="flex gap-5" >
        {" "}
        <div><AlertCircle className={`${styles.icon}`}/></div>
        <div className="font-semibold text-black">
          {suggestions.title}
        </div>
      </div>
      <div className="flex justify-between gap-3 p-2 w-1/3">
        {" "}
        <div className={` border-2 p-2 ${styles.badge} rounded-2xl font-semibold`}>
        
        {suggestions.priority} priority</div>
        <div className="font-medium text-gray-500 p-2 rounded-2xl border solid border-gray-600">{suggestions.category}</div>
        <div className="font-medium  text-center flex suggestionss-center">{suggestions.timeToFix} per achievement</div>
      </div>
      <span className="">{suggestions.impact}</span>
      <div className="p-3 font-medium border-3 rounded-2xl solid border-red-500">
        <span className="font-semibold text-red-500">Before</span> <p>{suggestions.before}</p>
      </div>
      <div  className="p-3 font-medium border-3 rounded-2xl solid border-green-500">
        <span className="text-green-500 font-semibold">After</span>{" "}
        <p className="font-medium text-gray-500">{suggestions.after}</p>
      </div>
    </div>    </div>
  );
};

export default SuggestionCard;
