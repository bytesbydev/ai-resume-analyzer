import React from "react";
import { TrendingUp, AlertTriangle, Target } from "lucide-react";

const EMPTY_ARRAY = [];

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

const Analysis = ({
  trendingKeywords = EMPTY_ARRAY,
  atsAnalysis = EMPTY_ARRAY,
  performanceStats = EMPTY_ARRAY,
}) => {
  return (
    <div className="space-y-6">
      <div className="p-5 rounded-2xl border border-gray-200 bg-slate-50">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="size-5 text-blue-600" />

          <h4 className="font-medium text-gray-900">
            Most Requested Keywords
          </h4>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {trendingKeywords.map((item) => (
            <div
              key={item.keyword}
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
                  <AlertTriangle className="size-4 text-amber-600" />
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

      <div className="p-5 rounded-2xl bg-blue-50 border border-blue-200">
        <h4 className="font-medium text-gray-900 mb-4 flex items-center gap-2">
          <Target className="size-4 text-blue-600" />
          ATS Compatibility Analysis
        </h4>

        <div className="grid md:grid-cols-2 gap-4">
          {atsAnalysis.map((item) => {
            const styles = getStatusStyles(item.type);

            return (
              <div
                key={`${item.title}-${item.type}`}
                className="flex gap-3"
              >
                <div
                  className={`size-5 rounded-full flex items-center justify-center mt-1 ${styles.bg}`}
                >
                  <div
                    className={`size-2 rounded-full ${styles.dot}`}
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

      <div className="pt-6 border-t border-gray-200">
        <h4 className="text-sm font-medium text-gray-700 mb-4">
          Estimated Performance
        </h4>

        <div className="grid md:grid-cols-2 gap-4">
          {performanceStats.map((item) => (
            <div
              key={item.label}
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