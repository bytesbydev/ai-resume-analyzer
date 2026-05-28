import React from "react";

import {
  TrendingUp,
  AlertTriangle,
  Target,
} from "lucide-react";

const Analysis = ({
  trendingKeywords,
  atsAnalysis,
  performanceStats,
}) => {

  const getStatusStyles = (type) => {

    switch (type) {

      case "success":
        return {
          bg: "bg-green-100",
          dot: "bg-green-600",
        };

      case "warning":
        return {
          bg: "bg-amber-100",
          dot: "bg-amber-600",
        };

      case "danger":
        return {
          bg: "bg-red-100",
          dot: "bg-red-600",
        };

      default:
        return {
          bg: "bg-gray-100",
          dot: "bg-gray-600",
        };

    }

  };

  return (

    <div className="space-y-6">

      {/* KEYWORDS */}

      <div className="p-5 rounded-2xl border border-gray-200 bg-slate-50">

        <div className="flex items-center gap-2 mb-4">

          <TrendingUp className="w-5 h-5 text-blue-600" />

          <h4 className="font-medium text-gray-900">
            Most Requested Keywords
          </h4>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">

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

                <h5 className="font-medium text-gray-900">
                  {item.keyword}
                </h5>

                {item.inResume ? (
                  <span className="px-2 py-1 text-xs rounded-full bg-green-100 text-green-700">
                    In Resume
                  </span>
                ) : (
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                )}

              </div>

              <div className="flex items-center gap-3">

                <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">

                  <div
                    style={{
                      width: `${item.frequency}%`,
                    }}
                    className={`h-full ${
                      item.inResume
                        ? "bg-green-500"
                        : "bg-amber-500"
                    }`}
                  />

                </div>

                <span className="text-xs font-medium">
                  {item.frequency}%
                </span>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* ATS ANALYSIS */}

      <div className="p-5 rounded-2xl bg-blue-50 border border-blue-200">

        <h4 className="font-medium text-gray-900 mb-4 flex items-center gap-2">

          <Target className="w-4 h-4 text-blue-600" />

          ATS Compatibility Analysis

        </h4>

        <div className="grid md:grid-cols-2 gap-4">

          {atsAnalysis.map((item, index) => {

            const styles = getStatusStyles(item.type);

            return (

              <div
                key={index}
                className="flex gap-3"
              >

                <div
                  className={`w-5 h-5 rounded-full flex items-center justify-center mt-1 ${styles.bg}`}
                >

                  <div
                    className={`w-2 h-2 rounded-full ${styles.dot}`}
                  />

                </div>

                <div>

                  <h5 className="font-medium text-gray-900">
                    {item.title}
                  </h5>

                  <p className="text-sm text-gray-600">
                    {item.description}
                  </p>

                </div>

              </div>

            );

          })}

        </div>

      </div>

      {/* PERFORMANCE */}

      <div className="pt-6 border-t border-gray-200">

        <h4 className="text-sm font-medium text-gray-700 mb-4">
          Estimated Performance
        </h4>

        <div className="grid md:grid-cols-2 gap-4">

          {performanceStats.map((item, index) => (

            <div
              key={index}
              className="text-sm text-gray-600"
            >

              <strong className="text-gray-900">
                {item.label}:
              </strong>{" "}

              {item.value}

            </div>

          ))}

        </div>

      </div>

    </div>

  );
};

export default Analysis;