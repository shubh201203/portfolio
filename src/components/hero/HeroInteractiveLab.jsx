import React, { useState } from 'react';
import { 
  TrendingUp, 
  Users, 
  PieChart, 
  Code2, 
  ShieldCheck, 
  Sparkles,
  Database,
  BarChart2
} from 'lucide-react';

export default function HeroInteractiveLab() {
  const [activeMode, setActiveMode] = useState('revenue');
  const [hoveredPoint, setHoveredPoint] = useState(null);

  // Verified analytical datasets for the interactive modes
  const modes = {
    revenue: {
      id: 'revenue',
      title: 'Revenue Realization',
      badge: 'DAX & SQL Reconciled',
      metricPrimary: '₹796.75M',
      metricLabel: 'Net Post-Return Cash',
      metricDelta: '+16.8% YoY',
      deltaPositive: true,
      subMetric: 'Realized: ₹847.62M | Returns: -₹50.87M',
      sqlSnippet: `WITH settled AS (
  SELECT SUM(net_revenue) AS realized_rev
  FROM fact_sales WHERE is_completed = TRUE
)
SELECT realized_rev - 50871926.16 AS net_settled_cash
FROM settled;`,
      daxNote: 'Post-Return Revenue = [Realized Net Revenue] - [Returned Revenue]',
      points: [
        { label: 'Q1', val: 165.2, display: '₹165.2M', detail: 'Baseline commercial demand' },
        { label: 'Q2', val: 182.4, display: '₹182.4M', detail: 'Summer promotion surge' },
        { label: 'Q3', val: 214.8, display: '₹214.8M', detail: 'Navratri festive ramp' },
        { label: 'Q4', val: 285.2, display: '₹285.2M', detail: 'Diwali peak fulfillment' },
      ],
      path: 'M 20 120 C 80 115, 120 100, 180 85 C 240 70, 300 48, 380 20',
      pathArea: 'M 20 120 C 80 115, 120 100, 180 85 C 240 70, 300 48, 380 20 L 380 150 L 20 150 Z',
      baseline: 'M 20 135 C 80 132, 120 124, 180 112 C 240 100, 300 88, 380 68',
      insight: 'Gross placed demand (₹971.5M) erodes by ₹123.9M in pre-delivery cancellations, netting ₹796.75M post-returns.'
    },
    retention: {
      id: 'retention',
      title: 'Cohort Retention Decay',
      badge: 'vw_cohort_retention',
      metricPrimary: '82.12%',
      metricLabel: 'Repeat Customer Share',
      metricDelta: '3,260 Multi-Buyers',
      deltaPositive: true,
      subMetric: 'Active Base: 3,970 | Total: 5,000',
      sqlSnippet: `SELECT cohort_month, months_since_first_purchase,
       retention_rate, cohort_revenue
FROM public.vw_cohort_retention
WHERE months_since_first_purchase <= 12;`,
      daxNote: '383 cohort-retention matrix records validated across M0 to M18',
      points: [
        { label: 'M0', val: 100.0, display: '100%', detail: 'Acquisition baseline' },
        { label: 'M1', val: 42.6, display: '42.6%', detail: 'First repeat interval' },
        { label: 'M3', val: 28.4, display: '28.4%', detail: 'Stabilized cohort core' },
        { label: 'M6', val: 21.8, display: '21.8%', detail: 'Long-term loyal tier' },
        { label: 'M12', val: 17.2, display: '17.2%', detail: 'Annual customer retention' },
      ],
      path: 'M 20 20 C 60 78, 120 102, 180 112 C 260 122, 320 128, 380 132',
      pathArea: 'M 20 20 C 60 78, 120 102, 180 112 C 260 122, 320 128, 380 132 L 380 150 L 20 150 Z',
      baseline: 'M 20 20 C 60 95, 120 120, 180 130 C 260 138, 320 142, 380 145',
      insight: '3,260 repeat customers account for over 82% of active users, generating high customer lifetime value.'
    },
    margins: {
      id: 'margins',
      title: 'Category Margin Engine',
      badge: 'Pareto Profit Matrix',
      metricPrimary: '30.93%',
      metricLabel: 'Blended Realized Margin',
      metricDelta: '₹262.16M Operating Profit',
      deltaPositive: true,
      subMetric: 'Beauty (59.5%) vs Electronics (18.6%)',
      sqlSnippet: `SELECT p.category,
       ROUND(SUM(s.profit) / SUM(s.net_revenue) * 100, 2) AS margin_pct
FROM fact_sales s JOIN dim_product p ON s.product_key = p.product_key
GROUP BY p.category ORDER BY margin_pct DESC;`,
      daxNote: 'Realized Margin = DIVIDE([Realized Profit], [Realized Net Revenue], 0)',
      points: [
        { label: 'Beauty', val: 59.5, display: '59.54%', detail: 'Highest margin unit economics' },
        { label: 'Apparel', val: 57.7, display: '57.67%', detail: 'High repeat festive apparel' },
        { label: 'Home', val: 38.2, display: '38.20%', detail: 'Stable mid-tier margin' },
        { label: 'Grocery', val: 24.1, display: '24.10%', detail: 'High frequency replenishment' },
        { label: 'Electronics', val: 18.6, display: '18.57%', detail: '58.3% of volume, compressed margin' },
      ],
      path: 'M 20 35 C 70 38, 120 42, 180 75 C 240 105, 300 118, 380 125',
      pathArea: 'M 20 35 C 70 38, 120 42, 180 75 C 240 105, 300 118, 380 125 L 380 150 L 20 150 Z',
      baseline: 'M 20 85 L 380 85',
      insight: 'Electronics drives 58.3% of revenue but suppresses margins; Beauty & Apparel are company profit drivers.'
    },
    rfm: {
      id: 'rfm',
      title: 'RFM Behavioral Tiers',
      badge: 'NTILE(5) Scoring',
      metricPrimary: '3,970',
      metricLabel: 'Active Customer Accounts',
      metricDelta: '4 Executive Tiers',
      deltaPositive: true,
      subMetric: 'Champions · Loyal · At-Risk · Lost',
      sqlSnippet: `SELECT customer_key,
       NTILE(5) OVER(ORDER BY recency_days ASC) AS r_score,
       NTILE(5) OVER(ORDER BY order_count DESC) AS f_score,
       NTILE(5) OVER(ORDER BY total_spend DESC) AS m_score
FROM customer_aggregates;`,
      daxNote: 'Segmented via Recency, Frequency, and Monetary quintiles',
      points: [
        { label: 'Champions', val: 32.4, display: '32.4%', detail: 'High spend, recency < 60 days' },
        { label: 'Loyal', val: 38.1, display: '38.1%', detail: 'Consistent repeat order volume' },
        { label: 'At-Risk', val: 18.2, display: '18.2%', detail: 'High past spend, >90 days inactive' },
        { label: 'Lost', val: 11.3, display: '11.3%', detail: 'Dormant single-purchase buyers' },
      ],
      path: 'M 20 80 C 80 50, 140 38, 200 45 C 270 85, 330 115, 380 130',
      pathArea: 'M 20 80 C 80 50, 140 38, 200 45 C 270 85, 330 115, 380 130 L 380 150 L 20 150 Z',
      baseline: 'M 20 95 C 100 95, 200 95, 300 95, 380 95',
      insight: 'At-risk customers represent a primary retention focus, accounting for substantial dormant lifetime spend.'
    }
  };

  const current = modes[activeMode];

  return (
    <div className="w-full rounded-2xl bg-[#0E1526] border border-white/10 shadow-2xl p-5 sm:p-6 text-white relative overflow-hidden backdrop-blur-xl">
      
      {/* Decorative ambient glow */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Lab Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10 relative z-10">
        <div className="flex items-center gap-2.5">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
          <div>
            <div className="text-[11px] font-mono tracking-wider uppercase text-blue-400 font-semibold flex items-center gap-1.5">
              <span>Interactive Analytics Lab</span>
              <span className="text-white/30">•</span>
              <span className="text-emerald-400">Live Simulation</span>
            </div>
            <div className="text-xs text-slate-400">
              Interactive Model Preview // Dimensional Warehouse Telemetry
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300">
          <Database className="w-3 h-3 text-blue-400" />
          <span>PostgreSQL 18 DW</span>
        </div>
      </div>

      {/* Mode Switcher Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 py-4 relative z-10">
        {[
          { id: 'revenue', label: 'Revenue Flow', icon: TrendingUp },
          { id: 'retention', label: 'Retention Cohorts', icon: Users },
          { id: 'margins', label: 'Category Margins', icon: BarChart2 },
          { id: 'rfm', label: 'RFM Tiers', icon: PieChart },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeMode === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => {
                setActiveMode(tab.id);
                setHoveredPoint(null);
              }}
              className={`flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg text-xs font-mono transition-all duration-200 ${
                isActive
                  ? 'bg-blue-600 text-white font-semibold shadow-glow-blue border border-blue-400/50'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white border border-white/5'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Live Metric Dials */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 py-3 items-center relative z-10">
        <div className="sm:col-span-5 bg-white/5 rounded-xl p-4 border border-white/10 space-y-1">
          <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span>{current.metricLabel}</span>
            <span className="px-1.5 py-0.5 rounded text-[10px] bg-blue-500/20 text-blue-300 border border-blue-400/30">
              {current.badge}
            </span>
          </div>
          <div className="text-2xl sm:text-3xl font-extrabold font-mono tracking-tight text-white flex items-baseline gap-2">
            <span>{current.metricPrimary}</span>
            <span className="text-xs font-mono text-emerald-400 font-semibold">
              {current.metricDelta}
            </span>
          </div>
          <div className="text-[11px] text-slate-400 font-mono truncate">
            {current.subMetric}
          </div>
        </div>

        {/* Dynamic SVG Interactive Trajectory Curve */}
        <div className="sm:col-span-7 bg-white/5 rounded-xl p-4 border border-white/10 relative">
          <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 mb-1">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-0.5 bg-blue-400 rounded-full" />
              <span>Trajectory Model (Hover Data Points)</span>
            </span>
            <span className="text-slate-500">Baseline comparison</span>
          </div>

          <div className="h-28 w-full relative">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 400 150" preserveAspectRatio="none">
              <defs>
                <linearGradient id={`grad-${current.id}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3563FF" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="#3563FF" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              {/* Grid lines */}
              <line x1="20" y1="40" x2="380" y2="40" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
              <line x1="20" y1="80" x2="380" y2="80" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />
              <line x1="20" y1="120" x2="380" y2="120" stroke="rgba(255,255,255,0.06)" strokeDasharray="3 3" />

              {/* Baseline curve */}
              <path
                d={current.baseline}
                fill="none"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="1.5"
                strokeDasharray="4 4"
              />

              {/* Gradient Area Fill */}
              <path
                d={current.pathArea}
                fill={`url(#grad-${current.id})`}
              />

              {/* Active Model Curve */}
              <path
                d={current.path}
                fill="none"
                stroke="#3563FF"
                strokeWidth="2.75"
                strokeLinecap="round"
                className="transition-all duration-500 ease-out"
              />

              {/* Interactive Anchor Points */}
              {current.points.map((pt, i) => {
                const step = 360 / (current.points.length - 1);
                const cx = 20 + i * step;
                // Approximate cy from normalized value
                const cy = 135 - (pt.val / 100) * 110;
                const isHovered = hoveredPoint?.label === pt.label;
                return (
                  <g 
                    key={pt.label}
                    onMouseEnter={() => setHoveredPoint(pt)}
                    className="cursor-pointer"
                  >
                    <circle
                      cx={cx}
                      cy={cy}
                      r={isHovered ? "6" : "4"}
                      fill={isHovered ? "#06B6D4" : "#FFFFFF"}
                      stroke="#3563FF"
                      strokeWidth="2.5"
                      className="transition-all duration-150"
                    />
                    <text
                      x={cx}
                      y="148"
                      fontSize="9"
                      fill="#94A3B8"
                      fontFamily="monospace"
                      textAnchor="middle"
                    >
                      {pt.label}
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Hover Tooltip Box */}
            {hoveredPoint && (
              <div className="absolute top-1 right-2 bg-slate-900/95 border border-cyan-400/40 rounded-lg p-2 text-[10px] font-mono shadow-xl backdrop-blur-md z-20 pointer-events-none animate-fade-in">
                <div className="font-bold text-cyan-300 flex items-center gap-1.5">
                  <span>{hoveredPoint.label}: {hoveredPoint.display}</span>
                </div>
                <div className="text-slate-300 mt-0.5">{hoveredPoint.detail}</div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* SQL Snippet & Architecture Insight */}
      <div className="mt-3 pt-3 border-t border-white/10 space-y-2.5 relative z-10">
        <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span className="flex items-center gap-1.5 text-blue-400">
            <Code2 className="w-3.5 h-3.5" />
            <span>Underlying Engine Logic</span>
          </span>
          <span className="text-[10px] text-slate-500">{current.daxNote}</span>
        </div>

        <div className="rounded-lg bg-black/50 border border-white/10 p-3 font-mono text-[11px] text-slate-300 overflow-x-auto leading-relaxed">
          <pre className="text-emerald-400/90 whitespace-pre">{current.sqlSnippet}</pre>
        </div>

        <div className="flex items-start gap-2 text-xs text-slate-300 pt-1">
          <Sparkles className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
          <p className="leading-snug">
            <strong className="text-white">Empirical Takeaway: </strong>
            {current.insight}
          </p>
        </div>
      </div>

      {/* Bottom Pipeline Flow Footer */}
      <div className="mt-4 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-[10px] font-mono text-slate-400 relative z-10">
        <div className="flex items-center gap-2">
          <span className="text-slate-500 uppercase">Architecture:</span>
          <span className="text-slate-300">Raw CSV</span>
          <span className="text-blue-400">→</span>
          <span className="text-slate-300">Python ETL</span>
          <span className="text-blue-400">→</span>
          <span className="text-cyan-400 font-semibold">PostgreSQL DW</span>
          <span className="text-blue-400">→</span>
          <span className="text-emerald-400 font-semibold">Power BI</span>
        </div>

        <div className="text-slate-500 flex items-center gap-1">
          <ShieldCheck className="w-3 h-3 text-blue-400" />
          <span>Synthetic e-commerce dataset for demonstration</span>
        </div>
      </div>

    </div>
  );
}
