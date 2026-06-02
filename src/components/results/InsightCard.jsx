import React from "react";
import { CheckCircle2, AlertCircle } from "lucide-react";

const InsightCard = ({ type, title, data = [] }) => {
  return (
    <div
      className={`h-auto w-1/3 rounded-2xl p-4 ${
        type === "strength"
          ? "bg-green-50 border border-green-200"
          : type === "improvement"
          ? "bg-amber-50 border border-amber-200"
          : "bg-red-50 border border-red-200"
      }`}
    >
      <h4 className="text-xl font-bold mb-4">{title}</h4>

      {data.map((item, index) => (
        <div key={index} className="flex items-start gap-2 mb-2">
          {type === "strength" && (
            <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
          )}

          {type === "improvement" && (
            <div className="w-4 h-4 mt-0.5">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-600 mx-auto mt-1.5" />
            </div>
          )}

          {type === "critical" && (
            <AlertCircle className="w-4 h-4 text-red-600 mt-0.5" />
          )}

          <span className="text-sm text-gray-700">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default InsightCard;