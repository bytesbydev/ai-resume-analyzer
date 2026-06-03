import React, { useMemo } from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  RadialLinearScale,
  BarElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import { Bar, Radar } from "react-chartjs-2";

const EMPTY_ARRAY = [];

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  RadialLinearScale,
  BarElement,
  Tooltip,
  Legend,
  Filler
);

const radarOptions = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom",
    },
  },
  scales: {
    r: {
      beginAtZero: true,
      max: 100,
      pointLabels: {
        font: {
          size: 14,
        },
      },
    },
  },
};

const ChartsSection = ({
  sectionScores = EMPTY_ARRAY,
  industryComparison = EMPTY_ARRAY,
}) => {
  const sectionChartData = useMemo(
    () => ({
      labels: sectionScores.map((item) => item.section),
      datasets: [
        {
          label: "Score",
          data: sectionScores.map((item) => item.score),
          backgroundColor: "#2563EB",
          borderRadius: 6,
        },
      ],
    }),
    [sectionScores]
  );

  const radarChartData = useMemo(
    () => ({
      labels: industryComparison.map((item) => item.aspect),
      datasets: [
        {
          label: "Your Resume",
          data: industryComparison.map(
            (item) => item.yourScore
          ),
          backgroundColor: "rgba(37,99,235,0.3)",
          borderColor: "#2563EB",
          borderWidth: 2,
        },
        {
          label: "Industry Avg",
          data: industryComparison.map(
            (item) => item.industry
          ),
          backgroundColor: "rgba(16,185,129,0.2)",
          borderColor: "#10B981",
          borderWidth: 2,
        },
      ],
    }),
    [industryComparison]
  );

  return (
    <div className="grid lg:grid-cols-2 gap-6">
      <div className="p-5 rounded-2xl border border-gray-200 bg-white">
        <h2 className="font-semibold mb-4">
          Section Completeness
        </h2>

        <div className="h-75">
          <Bar data={sectionChartData} />
        </div>
      </div>

      <div className="p-5 rounded-2xl border border-gray-200 bg-white">
        <h2 className="font-semibold mb-4">
          Industry Benchmark
        </h2>

        <div className="h-75 flex justify-center items-center">
          <Radar
            data={radarChartData}
            options={radarOptions}
          />
        </div>
      </div>
    </div>
  );
};

export default ChartsSection;