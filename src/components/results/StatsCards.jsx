import React from "react";

import {
  Target,
  Eye,
  FileCheck,
  TrendingUp,
} from "lucide-react";

import ProgressBar from "../common/ProgressBar";

const StatsCards = ({ statsData }) => {

  const cards = [
    {
      title: "ATS Score",
      value: `${statsData.atsScore}%`,
      icon: <Target className="w-4 h-4 text-blue-600" />,
      progress: statsData.atsScore,
      description:
        statsData.atsScore >= 80
          ? "Good"
          : statsData.atsScore >= 60
          ? "Fair"
          : "Needs work",
    },

    {
      title: "Readability",
      value: `${statsData.readabilityScore}%`,
      icon: <Eye className="w-4 h-4 text-green-600" />,
      progress: statsData.readabilityScore,
      description: "Easy to scan",
    },

    {
      title: "Word Count",
      value: statsData.wordCount,
      icon: <FileCheck className="w-4 h-4 text-amber-600" />,
      description: "Optimal: 400-600",
    },

    {
      title: "Keyword Match",
      value: `${statsData.keywordMatch}%`,
      icon: <TrendingUp className="w-4 h-4 text-purple-600" />,
      progress: statsData.keywordMatch,
      description: "vs. job postings",
    },
  ];

  return (

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">

      {cards.map((card, index) => (

        <div
          key={index}
          className="p-4 rounded-2xl border border-gray-200 bg-white"
        >

          <div className="flex items-center gap-2 mb-2">

            {card.icon}

            <h4 className="text-sm font-medium text-gray-700">
              {card.title}
            </h4>

          </div>

          <p className="text-3xl font-semibold text-gray-900 mb-2">
            {card.value}
          </p>

          {card.progress && (
            <ProgressBar progress={card.progress} />
          )}

          <p className="text-xs text-gray-600 mt-2">
            {card.description}
          </p>

        </div>

      ))}

    </div>

  );
};

export default StatsCards;