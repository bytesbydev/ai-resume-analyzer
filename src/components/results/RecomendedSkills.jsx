import React from "react";
import { Award,Target,FileCheck,Eye,TrendingUp,Info} from "lucide-react";
import ProgressBar from "../common/ProgressBar";
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
import { Bar, Radar } from "react-chartjs-2";

const ReccomendedSkills = () => {
   const atsScore = 68;
  const readabilityScore = 85;
  const wordCount = 425;
  const keywordMatch = 62;

  const sectionScores = [
    { section: "Contact", score: 100 },
    { section: "Summary", score: 75 },
    { section: "Experience", score: 85 },
    { section: "Education", score: 90 },
    { section: "Skills", score: 65 },
    { section: "Projects", score: 55 },
  ];

  const industryComparison = [
    { aspect: "Experience", yourScore: 85, industry: 78 },
    { aspect: "Skills", yourScore: 65, industry: 82 },
    { aspect: "Education", yourScore: 90, industry: 75 },
    { aspect: "Keywords", yourScore: 62, industry: 85 },
    { aspect: "Format", yourScore: 88, industry: 80 },
  ];

  // const trendingKeywords = [
  //   { keyword: "React", frequency: 95, inResume: true },
  //   { keyword: "TypeScript", frequency: 88, inResume: true },
  //   { keyword: "Cloud/AWS", frequency: 85, inResume: false },
  //   { keyword: "Microservices", frequency: 82, inResume: false },
  //   { keyword: "CI/CD", frequency: 78, inResume: true },
  //   { keyword: "Agile", frequency: 75, inResume: false },
  // ];
  // ================= BAR CHART DATA =================

  const sectionChartData = {
    labels: sectionScores.map((item) => item.section),

    datasets: [
      {
        label: "Score",
        data: sectionScores.map((item) => item.score),

        backgroundColor: "#2563EB",

        borderRadius: 6,
      },
    ],
  };

  // ================= RADAR CHART DATA =================

  const radarChartData = {
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
  };

  // ================= OPTIONS =================

  const barOptions = {
    responsive: true,

    plugins: {
      legend: {
        display: false,
      },
    },

    scales: {
      y: {
        beginAtZero: true,
        max: 100,
      },
    },
  };

  const radarOptions = {
    responsive: true,
maintainAspectRatio:false,
    plugins: {
      legend: {
        position: "bottom",
      },
    },

    scales: {
      r: {
        min: 0,
        max: 100,
      },
    },
  };

  return (
    <div>
      {" "}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center">
          <Award className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            Data & Insights
          </h3>
          <p className="text-sm text-gray-500">
            Industry benchmarks and keyword analysis
          </p>
        </div>
      </div>
       <div className="grid md:grid-cols-2 mt-6 lg:grid-cols-4 gap-4 mb-8">
        <div className="p-4 rounded-lg border border-gray-200 bg-white">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-4 h-4 text-blue-600" />
            <h4 className="text-sm font-medium text-gray-700">
              ATS Score
            </h4>
          </div>
          <p className="text-3xl font-semibold text-gray-900 mb-2">
            {atsScore}%
          </p>
          <ProgressBar progress={atsScore} className="h-2 mb-2" />
          <p className="text-xs text-gray-600">
            {atsScore >= 80 ? "Good" : atsScore >= 60 ? "Fair" : "Needs work"}
          </p>
        </div>
     <div className="p-4 rounded-lg border border-gray-200 bg-white">
          <div className="flex items-center gap-2 mb-2">
            <Eye className="w-4 h-4 text-green-600" />
            <h4 className="text-sm font-medium text-gray-700">
              Readability
            </h4>
          </div>
          <p className="text-3xl font-semibold text-gray-900 mb-2">
            {readabilityScore}%
          </p>
            <ProgressBar progress={readabilityScore} className="h-2 mb-2" />
          <p className="text-xs text-gray-600">
            Easy to scan
          </p>
        </div>
     <div className="p-4 rounded-lg border border-gray-200 bg-white">
          <div className="flex items-center gap-2 mb-2">
            <FileCheck className="w-4 h-4 text-amber-600" />
            <h4 className="text-sm font-medium text-gray-700">
              Word Count
            </h4>
          </div>
          <p className="text-3xl font-semibold text-gray-900 mb-2">
            {wordCount}
          </p>
          <div className="h-2 mb-2" /> {/* Spacer */}
          <p className="text-xs text-gray-600">
            Optimal: 400-600
          </p>
        </div>
        <div className="p-4 rounded-lg border border-gray-200 bg-white">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-purple-600" />
            <h4 className="text-sm font-medium text-gray-700">
              Keyword Match
            </h4>
          </div>
          <p className="text-3xl font-semibold text-gray-900 mb-2">
            {keywordMatch}%
          </p>
          <ProgressBar progress={keywordMatch}className="h-2 mb-2" />
          <p className="text-xs text-gray-600">
            vs. job postings
          </p>
        </div>
    </div>
    {/* insights section */}
<div>
    <div className="grid lg:grid-cols-2 gap-6">

      {/* BAR CHART */}

      <div className="p-5 rounded-2xl border border-gray-200 bg-white">

        <h2 className="font-semibold mb-4">
          Section Completeness
        </h2>

        <div className="h-75">

          <Bar
            data={sectionChartData}
            options={barOptions}
          />

        </div>

      </div>

      {/* RADAR CHART */}

      <div className="p-5 rounded-2xl border border-gray-200 bg-white">

        <h2 className="font-semibold mb-4">
          Industry Benchmark
        </h2>

        <div className="h-75 justify-center flex items-center">

          <Radar
            data={radarChartData}
            options={radarOptions}
          />

        </div>

      </div>

    </div>

</div>
    </div>
  );
};

export default ReccomendedSkills;
