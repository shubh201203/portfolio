import React, { useState } from 'react';
import { 
  FileSpreadsheet, 
  Terminal, 
  Database, 
  GitMerge, 
  BarChart3, 
  Lightbulb, 
  CheckCircle2, 
  ChevronRight, 
  Code2, 
  ShieldCheck, 
  Layers
} from 'lucide-react';

export default function DataPipelineSection() {
  const [activeStage, setActiveStage] = useState(2); // Default to PostgreSQL DW

  const stages = [
    {
      id: 0,
      step: 'STAGE 01',
      title: 'Raw Data Ingestion',
      short: 'Raw Data',
      icon: FileSpreadsheet,
      badge: '104,852 Records',
      summary: 'Raw India-focused e-commerce sales logs, clickstream events, and customer transaction tables.',
      tech: 'CSV Ingestion · Raw Storage · Schema Discovery',
      visual: {
        type: 'raw',
        details: [
          'Messy customer identifier keys and missing timestamps',
          'Unstructured order status events (Pending, Shipped, Returned)',
          'High risk of double-counting between items and order totals'
        ]
      },
      codeSnippet: `// Raw Input Sample (104,852 rows)\norder_id,cust_email,order_status,item_id,price,return_flag\nORD_9912,user99@in.com,Completed,ITM_401,15450,0\nORD_9913,NULL,Pending,ITM_208,2499,0\nORD_9914,user12@in.com,Returned,ITM_502,48999,1`,
      metricHighlight: '104,852 Total Raw Records Staged'
    },
    {
      id: 1,
      step: 'STAGE 02',
      title: 'Python / Pandas ETL',
      short: 'Python ETL',
      icon: Terminal,
      badge: '28/28 Pytests Passed',
      summary: 'Automated data hygiene routines, deterministic customer key recovery, quarantine logging, and schema enforcement.',
      tech: 'Python 3.11 · Pandas · Pytest · Data Profiling',
      visual: {
        type: 'cleaning',
        details: [
          'Deterministic customer ID recovery via cross-session resolution',
          'Quarantine logging of invalid records with automated audit trail',
          '28 out of 28 automated test assertions verified before DB loading'
        ]
      },
      codeSnippet: `def clean_sales_pipeline(df: pd.DataFrame) -> pd.DataFrame:\n    # Deterministic customer recovery\n    df['customer_id'] = df.groupby('email')['customer_id'].ffill()\n    # Strict grain deduplication\n    df = df.drop_duplicates(subset=['order_id', 'item_id'])\n    assert df['realized_revenue'].notnull().all()\n    return df`,
      metricHighlight: '0 Orphaned Records Loaded'
    },
    {
      id: 2,
      step: 'STAGE 03',
      title: 'PostgreSQL 18 DW',
      short: 'PostgreSQL DW',
      icon: Database,
      badge: '8-Table Warehouse',
      summary: 'Robust relational data warehouse structured in an 8-table star schema with surrogate keys and grain-isolated facts.',
      tech: 'PostgreSQL 18 · Star Schema · Surrogate Keys · B-Tree Indexes',
      visual: {
        type: 'schema',
        details: [
          'Central fact_sales table linked to 7 dimension tables',
          'Explicit integer surrogate date keys (dim_date) for fast slicing',
          'B-Tree composite indexes on customer_id, order_date, product_id'
        ]
      },
      codeSnippet: `CREATE TABLE fact_sales (\n    sales_key BIGSERIAL PRIMARY KEY,\n    order_id VARCHAR(32) NOT NULL,\n    customer_id INT REFERENCES dim_customers(customer_id),\n    date_key INT REFERENCES dim_date(date_key),\n    realized_amount NUMERIC(12,2) NOT NULL,\n    return_amount NUMERIC(12,2) DEFAULT 0.00\n);`,
      metricHighlight: '100% Star Schema Foreign Key Integrity'
    },
    {
      id: 3,
      step: 'STAGE 04',
      title: 'Data Modeling & Semantic Layer',
      short: 'Data Modeling',
      icon: GitMerge,
      badge: 'Fact-Grain Isolation',
      summary: 'Strict dimensional modeling preventing fan-out traps, double-counting, and many-to-many relationship ambiguity.',
      tech: '1:N Relationships · Grain Isolation · Date Dimensions',
      visual: {
        type: 'modeling',
        details: [
          'Single-direction 1:N filter flows enforcing Kimball best practices',
          'Line-item grain cleanly separated from order header metrics',
          'Pre-aggregated analytical views (e.g. public.vw_cohort_retention)'
        ]
      },
      codeSnippet: `-- Analytical view for 18-month retention matrix\nCREATE VIEW public.vw_cohort_retention AS\nSELECT cohort_month,\n       ROUND((order_date - cohort_start)/30) AS month_idx,\n       COUNT(DISTINCT customer_id) AS active_buyers\nFROM customer_orders GROUP BY 1, 2;`,
      metricHighlight: '0 Join Fan-Out / 0 Multi-Grain Leakage'
    },
    {
      id: 4,
      step: 'STAGE 05',
      title: 'Power BI & DAX Suite',
      short: 'Power BI & DAX',
      icon: BarChart3,
      badge: '30+ DAX Measures',
      summary: 'High-performance interactive reporting suite with 6 specialized dashboard views, time-intelligence, and cohort matrices.',
      tech: 'Power BI Desktop · Tabular Model · DAX · Dynamic Slicers',
      visual: {
        type: 'dax',
        details: [
          'Post-return cash measures deducting settled return claims',
          'Dynamic RFM customer tier segmentation without report lag',
          '6 comprehensive report views covering executive, finance, & logistics'
        ]
      },
      codeSnippet: `Post-Return Revenue =\nSUMX(\n    fact_sales,\n    fact_sales[realized_amount] - fact_sales[return_amount]\n)\n-- Reconciled to ₹796.75M net cash`,
      metricHighlight: '6 High-Res Interactive Dashboard Views'
    },
    {
      id: 5,
      step: 'STAGE 06',
      title: 'Decision Intelligence',
      short: 'Decision Insights',
      icon: Lightbulb,
      badge: 'Empirically Reconciled',
      summary: 'Actionable business insights driving profitability: revenue realization, margin leakage isolation, and retention curves.',
      tech: 'Executive Strategy · Unit Economics · Cohort Decay',
      visual: {
        type: 'insights',
        details: [
          '₹847.62M realized revenue and ₹796.75M post-return cash verified',
          '30.93% realized profit margin with category profit driver mapping',
          '82.12% active customer repeat rate across 3,970 transacting users'
        ]
      },
      codeSnippet: `-- Final Verified Business Deliverable\nTotal Realized Revenue  : INR 847,624,310\nPost-Return Net Cash    : INR 796,750,120\nBlended Profit Margin   : 30.93%\nRepeat Customer Ratio   : 82.12% (3,260 buyers)`,
      metricHighlight: '100% Deterministic Financial Alignment'
    }
  ];

  const current = stages[activeStage];

  return (
    <section id="pipeline" className="py-24 border-b border-white/10 bg-[#080D1A] text-white relative overflow-hidden">
      
      {/* Background Tech Textures */}
      <div className="absolute inset-0 lab-dots opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/60 mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Architectural Transformation Pipeline</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
              THE DATA PIPELINE EXPERIENCE
            </h2>
            <p className="text-slate-400 mt-2 text-sm sm:text-base max-w-2xl leading-relaxed">
              From messy operational clickstreams to board-level business decisions. Click any stage to inspect the underlying engineering, transformation rules, and validation logic.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/50 border border-emerald-800/60 px-3 py-1.5 rounded-lg shrink-0">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>28/28 ETL Pytests Verified</span>
          </div>
        </div>

        {/* Desktop Pipeline Horizontal Flow (Interactive Stepper) */}
        <div className="hidden lg:grid grid-cols-6 gap-3 mb-10 relative">
          {stages.map((stage, idx) => {
            const Icon = stage.icon;
            const isActive = activeStage === idx;

            return (
              <div key={stage.id} className="relative">
                <button
                  onClick={() => setActiveStage(idx)}
                  className={`w-full p-4 rounded-2xl text-left border transition-all duration-300 flex flex-col justify-between h-36 ${
                    isActive
                      ? 'bg-[#D8F243] text-gray-950 border-[#D8F243] shadow-glow-blue -translate-y-1'
                      : 'bg-[#10131B] text-slate-300 border-white/10 hover:border-white/30 hover:bg-[#151924]'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-gray-950/70' : 'text-slate-400'}`}>
                      {stage.step}
                    </span>
                    <Icon className={`w-5 h-5 ${isActive ? 'text-gray-950' : 'text-[#D8F243]'}`} />
                  </div>

                  <div>
                    <h4 className="text-xs font-bold font-mono tracking-tight leading-snug">
                      {stage.short}
                    </h4>
                    <p className={`text-[10px] font-mono mt-1 ${isActive ? 'text-gray-950/80 font-bold' : 'text-slate-400'}`}>
                      {stage.badge}
                    </p>
                  </div>
                </button>

                {/* Connecting Arrow */}
                {idx < stages.length - 1 && (
                  <div className="absolute -right-2 top-1/2 -translate-y-1/2 z-20 text-slate-400 pointer-events-none">
                    <ChevronRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Mobile Vertical Pipeline Pills */}
        <div className="lg:hidden flex overflow-x-auto gap-2 pb-4 mb-6 no-scrollbar">
          {stages.map((stage, idx) => {
            const isActive = activeStage === idx;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStage(idx)}
                className={`px-3 py-2 rounded-xl text-xs font-mono font-medium whitespace-nowrap border shrink-0 transition-all ${
                  isActive
                    ? 'bg-[#D8F243] text-gray-950 font-bold border-[#D8F243] shadow-sm'
                    : 'bg-[#10131B] text-slate-300 border-white/10'
                }`}
              >
                {stage.step}: {stage.short}
              </button>
            );
          })}
        </div>

        {/* Active Stage Deep-Dive Inspector Card */}
        <div className="rounded-2xl border border-white/15 bg-[#0D1424] p-6 sm:p-8 shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Stage Left: Architectural Scope & Features */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-md bg-blue-500/20 text-blue-300 text-xs font-mono font-bold border border-blue-400/30">
                  {current.step}
                </span>
                <span className="text-xs font-mono text-cyan-400">
                  {current.tech}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {current.title}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {current.summary}
              </p>

              {/* Bulleted Architecture Validation Rules */}
              <div className="space-y-2 pt-2">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Engineering Guardrails & Standards
                </div>
                {current.visual.details.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Metric Impact Pill */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Deterministic Result:</span>
                <span className="text-emerald-400 font-bold bg-emerald-950/60 px-3 py-1 rounded border border-emerald-800/60">
                  {current.metricHighlight}
                </span>
              </div>
            </div>

            {/* Stage Right: Code & Query Implementation Preview */}
            <div className="lg:col-span-6 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 pb-1">
                <div className="flex items-center gap-1.5 text-cyan-400">
                  <Code2 className="w-4 h-4" />
                  <span>Production Code & Schema Definition</span>
                </div>
                <span className="text-slate-400">Step {activeStage + 1} of 6</span>
              </div>

              <div className="rounded-xl bg-black/70 border border-white/15 p-4 sm:p-5 font-mono text-xs text-slate-300 overflow-x-auto shadow-inner">
                <pre className="text-cyan-300 text-[11px] sm:text-xs leading-relaxed whitespace-pre-wrap">
                  {current.codeSnippet}
                </pre>
              </div>

              <div className="flex items-center justify-between pt-2 text-xs font-mono text-slate-400">
                <button
                  onClick={() => setActiveStage((prev) => (prev > 0 ? prev - 1 : stages.length - 1))}
                  className="hover:text-white transition-colors"
                >
                  ← Previous Stage
                </button>
                <button
                  onClick={() => setActiveStage((prev) => (prev < stages.length - 1 ? prev + 1 : 0))}
                  className="text-cyan-400 hover:text-cyan-300 font-bold transition-colors"
                >
                  Next Stage →
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
