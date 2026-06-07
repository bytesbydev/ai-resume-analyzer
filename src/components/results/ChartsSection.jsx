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
    legend: { position: "bottom" },
  },
  scales: {
    r: {
      beginAtZero: true,
      max: 100,
      pointLabels: {
        font: { size: 12 },
      },
    },
  },
};

const ChartsSection = ({
  sectionScores = [],
  industryComparison = [],
}) => {
  const sectionChartData = useMemo(
    () => ({
      labels: sectionScores.map((i) => i.section),
      datasets: [
        {
          label: "Score",
          data: sectionScores.map((i) => i.score),
          backgroundColor: "#2563EB",
          borderRadius: 6,
        },
      ],
    }),
    [sectionScores]
  );

  const radarChartData = useMemo(
    () => ({
      labels: industryComparison.map((i) => i.aspect),
      datasets: [
        {
          label: "Your Resume",
          data: industryComparison.map((i) => i.yourScore),
          backgroundColor: "rgba(37,99,235,0.3)",
          borderColor: "#2563EB",
          borderWidth: 2,
        },
        {
          label: "Industry Avg",
          data: industryComparison.map((i) => i.industry),
          backgroundColor: "rgba(16,185,129,0.2)",
          borderColor: "#10B981",
          borderWidth: 2,
        },
      ],
    }),
    [industryComparison]
  );

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

      {/* Bar Chart */}
      <div className="p-4 sm:p-5 rounded-2xl border border-gray-200 bg-white">
        <h2 className="font-semibold mb-4 text-sm sm:text-base">
          Section Completeness
        </h2>

        <div className="h-64 sm:h-80">
          <Bar data={sectionChartData} />
        </div>
      </div>

      {/* Radar Chart */}
      <div className="p-4 sm:p-5 rounded-2xl border border-gray-200 bg-white">
        <h2 className="font-semibold mb-4 text-sm sm:text-base">
          Industry Benchmark
        </h2>

        <div className="h-64 sm:h-80 flex justify-center items-center">
          <Radar data={radarChartData} options={radarOptions} />
        </div>
      </div>

    </div>
  );
};

export default ChartsSection;