import React from "react";
import {
  Award,
  Target,
  FileCheck,
  Eye,
  TrendingUp,
  Info,
  AlertTriangle,
} from "lucide-react";
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
  Filler,
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

  const trendingKeywords = [
    { keyword: "React", frequency: 95, inResume: true },
    { keyword: "TypeScript", frequency: 88, inResume: true },
    { keyword: "Cloud/AWS", frequency: 85, inResume: false },
    { keyword: "Microservices", frequency: 82, inResume: false },
    { keyword: "CI/CD", frequency: 78, inResume: true },
    { keyword: "Agile", frequency: 75, inResume: false },
  ];
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

        data: industryComparison.map((item) => item.yourScore),

        backgroundColor: "rgba(37,99,235,0.3)",

        borderColor: "#2563EB",

        borderWidth: 2,
      },

      {
        label: "Industry Avg",

        data: industryComparison.map((item) => item.industry),

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
    maintainAspectRatio: false,
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
            <h4 className="text-sm font-medium text-gray-700">ATS Score</h4>
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
            <h4 className="text-sm font-medium text-gray-700">Readability</h4>
          </div>
          <p className="text-3xl font-semibold text-gray-900 mb-2">
            {readabilityScore}%
          </p>
          <ProgressBar progress={readabilityScore} className="h-2 mb-2" />
          <p className="text-xs text-gray-600">Easy to scan</p>
        </div>
        <div className="p-4 rounded-lg border border-gray-200 bg-white">
          <div className="flex items-center gap-2 mb-2">
            <FileCheck className="w-4 h-4 text-amber-600" />
            <h4 className="text-sm font-medium text-gray-700">Word Count</h4>
          </div>
          <p className="text-3xl font-semibold text-gray-900 mb-2">
            {wordCount}
          </p>
          <div className="h-2 mb-2" /> {/* Spacer */}
          <p className="text-xs text-gray-600">Optimal: 400-600</p>
        </div>
        <div className="p-4 rounded-lg border border-gray-200 bg-white">
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp className="w-4 h-4 text-purple-600" />
            <h4 className="text-sm font-medium text-gray-700">Keyword Match</h4>
          </div>
          <p className="text-3xl font-semibold text-gray-900 mb-2">
            {keywordMatch}%
          </p>
          <ProgressBar progress={keywordMatch} className="h-2 mb-2" />
          <p className="text-xs text-gray-600">vs. job postings</p>
        </div>
      </div>
      {/* insights section */}
      <div>
        <div className="grid lg:grid-cols-2 gap-6">
          {/* BAR CHART */}

          <div className="p-5 rounded-2xl border border-gray-200 bg-white">
            <h2 className="font-semibold mb-4">Section Completeness</h2>

            <div className="h-75">
              <Bar data={sectionChartData} options={barOptions} />
            </div>
          </div>

          {/* RADAR CHART */}

          <div className="p-5 rounded-2xl border border-gray-200 bg-white">
            <h2 className="font-semibold mb-4">Industry Benchmark</h2>

            <div className="h-75 justify-center flex items-center">
              <Radar data={radarChartData} options={radarOptions} />
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* INDUSTRY KEYWORDS */}

        <div className="p-5 rounded-2xl border border-gray-200 bg-slate-50">
          <div className="flex items-center gap-2 mb-4">
            <TrendingUp className="w-5 h-5 text-blue-600" />

            <h4 className="font-medium text-gray-900">
              Most Requested Keywords in Your Industry
            </h4>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3 mb-4">
            {trendingKeywords.map((item, index) => (
              <div
                key={index}
                className={`p-3 rounded-xl border ${
                  item.inResume
                    ? "bg-green-50 border-green-200"
                    : "bg-white border-amber-200"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <h5 className="font-medium text-gray-900">{item.keyword}</h5>

                  {item.inResume ? (
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
                      In Resume
                    </span>
                  ) : (
                    <AlertTriangle className="w-4 h-4 text-amber-600" />
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      style={{ width: `${item.frequency}%` }}
                      className={`h-full rounded-full ${
                        item.inResume ? "bg-green-500" : "bg-amber-500"
                      }`}
                    />
                  </div>

                  <span className="text-xs font-medium text-gray-700 w-8 text-right">
                    {item.frequency}%
                  </span>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-gray-600">
            Keywords marked with ⚠️ appear in{" "}
            <strong>
              {trendingKeywords.filter((item) => !item.inResume).length}
            </strong>{" "}
            high-frequency job postings but are missing from your resume.
          </p>
        </div>

        {/* ATS ANALYSIS */}

        <div className="mt-6 p-5 rounded-2xl bg-blue-50 border border-blue-200">
          <h4 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
            <Target className="w-4 h-4 text-blue-600" />
            ATS Compatibility Analysis
          </h4>

          <div className="grid md:grid-cols-2 gap-4 text-sm">
            {/* ITEM */}

            <div className="flex gap-3">
              <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-1">
                <div className="w-2 h-2 rounded-full bg-green-600" />
              </div>

              <div>
                <h5 className="font-medium text-gray-900">
                  Standard formatting detected
                </h5>

                <p className="text-gray-600">
                  Uses compatible fonts and structure
                </p>
              </div>
            </div>

            {/* ITEM */}

            <div className="flex gap-3">
              <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-1">
                <div className="w-2 h-2 rounded-full bg-green-600" />
              </div>

              <div>
                <h5 className="font-medium text-gray-900">
                  No complex graphics
                </h5>

                <p className="text-gray-600">ATS can parse all content</p>
              </div>
            </div>

            {/* ITEM */}

            <div className="flex gap-3">
              <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center mt-1">
                <div className="w-2 h-2 rounded-full bg-amber-600" />
              </div>

              <div>
                <h5 className="font-medium text-gray-900">
                  Keyword density: Moderate
                </h5>

                <p className="text-gray-600">
                  Consider adding 3-5 more relevant terms
                </p>
              </div>
            </div>

            {/* ITEM */}

            <div className="flex gap-3">
              <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center mt-1">
                <div className="w-2 h-2 rounded-full bg-red-600" />
              </div>

              <div>
                <h5 className="font-medium text-gray-900">
                  Missing key industry terms
                </h5>

                <p className="text-gray-600">
                  Add "Cloud", "Microservices", "Agile"
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SUMMARY */}

        <div className="mt-6 pt-6 border-t border-gray-200">
          <h4 className="text-sm font-medium text-gray-700 mb-4">
            Estimated Performance
          </h4>

          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="text-gray-600">
              <strong className="text-gray-900">ATS Pass Rate:</strong>{" "}
              Approximately 7 out of 10 systems
            </div>

            <div className="text-gray-600">
              <strong className="text-gray-900">Recruiter Scan Time:</strong>{" "}
              6-8 seconds average
            </div>

            <div className="text-gray-600">
              <strong className="text-gray-900">Industry Ranking:</strong> Top
              45% for similar roles
            </div>

            <div className="text-gray-600">
              <strong className="text-gray-900">Improvement Potential:</strong>{" "}
              +15-20 points with recommended changes
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReccomendedSkills;
