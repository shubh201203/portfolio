import React from 'react';

export default function HeroAnalyticsVisual() {
  return (
    <div className="w-full max-w-md mx-auto lg:max-w-none">
      {/* Light, elegant supporting visual */}
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-subtle space-y-6">
        
        {/* Subtle status header */}
        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
            <span className="text-xs font-semibold text-gray-800">Analytics Modeling Preview</span>
          </div>
          <span className="text-[11px] font-mono text-gray-400">Star Schema</span>
        </div>

        {/* Minimal KPI Metric Pair — Natural Analytical Terminology */}
        <div className="grid grid-cols-2 gap-6">
          <div>
            <div className="text-[11px] text-gray-500 font-mono uppercase tracking-wider">Revenue Measure</div>
            <div className="text-base sm:text-lg font-bold text-gray-900 mt-1">Net Revenue Logic</div>
            <div className="text-[11px] text-gray-500 mt-0.5">Post-return calculation</div>
          </div>

          <div>
            <div className="text-[11px] text-gray-500 font-mono uppercase tracking-wider">Customer Metrics</div>
            <div className="text-base sm:text-lg font-bold text-gray-900 mt-1">Customer Analysis</div>
            <div className="text-[11px] text-gray-500 mt-0.5">Distinct customer count</div>
          </div>
        </div>

        {/* Normalized Trend Line Geometry */}
        <div className="pt-2">
          <div className="flex justify-between text-[10px] font-mono text-gray-400 mb-1.5">
            <span>Time-Series Trajectory</span>
            <span>YoY Comparison</span>
          </div>
          <div className="h-16 w-full border-b border-gray-100">
            <svg className="w-full h-full" viewBox="0 0 100 30" preserveAspectRatio="none">
              <path
                d="M0,24 Q25,22 45,15 T80,10 T100,4"
                fill="none"
                stroke="#2563EB"
                strokeWidth="1.75"
                strokeLinecap="round"
              />
              <path
                d="M0,27 Q25,25 45,20 T80,16 T100,12"
                fill="none"
                stroke="#CBD5E1"
                strokeWidth="1.25"
                strokeDasharray="2 2"
              />
            </svg>
          </div>
        </div>

        {/* Simplified, subtle pipeline flow */}
        <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-[11px] font-mono text-gray-600">
          <span className="text-gray-400 text-[10px] uppercase">Flow</span>
          <span>Raw Data</span>
          <span className="text-gray-300">→</span>
          <span>Python</span>
          <span className="text-gray-300">→</span>
          <span className="text-blue-600 font-semibold">PostgreSQL</span>
          <span className="text-gray-300">→</span>
          <span>Power BI</span>
        </div>

      </div>
    </div>
  );
}
