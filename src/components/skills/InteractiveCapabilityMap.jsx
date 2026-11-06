import React, { useState } from 'react';
import { 
  Database, 
  BarChart3, 
  Terminal, 
  Layers, 
  Code2, 
  Cpu, 
  Sparkles,
  Activity, 
  ArrowRight 
} from 'lucide-react';

export default function InteractiveCapabilityMap() {
  const [selectedNode, setSelectedNode] = useState(0);

  const capabilities = [
    {
      id: 0,
      name: 'Data Analytics',
      short: 'Data Analytics',
      category: 'CATEGORY 01 // ANALYTICS',
      icon: Terminal,
      color: 'from-emerald-500 to-teal-500',
      activeColor: 'bg-[#D8F243] text-gray-950 border-[#D8F243]',
      description: 'Translating raw event logs into diagnostic, predictive, and prescriptive business outcomes using statistical rigor, cohort analysis, and exploratory profiling.',
      skills: ['Python 3.11', 'Pandas', 'NumPy', 'EDA', 'Statistics', 'Data Cleaning', 'Cohort Retention', 'Quarantine Logging'],
      appliedIn: 'NovaCart ETL: Built 19/19 passing test assertions and 28 overall Pytests ensuring deterministic customer resolution across messy order events.',
      codeSample: `def clean_sales_pipeline(df: pd.DataFrame) -> pd.DataFrame:\n    df['customer_id'] = df.groupby('email')['customer_id'].ffill()\n    df = df.drop_duplicates(subset=['order_id', 'item_id'])\n    assert df['realized_revenue'].notnull().all()\n    return df`
    },
    {
      id: 1,
      name: 'SQL & Databases',
      short: 'SQL & Databases',
      category: 'CATEGORY 02 // DATABASE RIGOR',
      icon: Database,
      color: 'from-blue-500 to-cyan-500',
      activeColor: 'bg-[#D8F243] text-gray-950 border-[#D8F243]',
      description: 'Relational data warehousing, complex analytical queries, recursive CTEs, window calculations, and star schema modeling.',
      skills: ['PostgreSQL 18', 'SQL', 'CTEs', 'Window Functions', 'Joins', 'Analytical Queries', 'Star Schema', 'Query Optimization'],
      appliedIn: 'NovaCart: 8-table relational data warehouse with surrogate keys, grain isolation, and zero foreign-key orphans across 104,852 sales records.',
      codeSample: `SELECT customer_id,\n       order_date,\n       SUM(realized_amount) OVER(PARTITION BY customer_id ORDER BY order_date)\nFROM fact_sales WHERE order_status IN ('Completed', 'Shipped');`
    },
    {
      id: 2,
      name: 'Business Intelligence',
      short: 'Business Intelligence',
      category: 'CATEGORY 03 // EXECUTIVE BI',
      icon: BarChart3,
      color: 'from-amber-500 to-yellow-500',
      activeColor: 'bg-[#D8F243] text-gray-950 border-[#D8F243]',
      description: 'Production BI report authoring, tabular semantic models, time-intelligence DAX calculations, and interactive executive reporting.',
      skills: ['Power BI', 'DAX', 'Power Query', 'Semantic Modeling', 'Dashboard Development', 'Dynamic Slicers', 'RFM Segmentation'],
      appliedIn: 'NovaCart & BitePulse: 6-page dashboard suites with 30+ to 66 DAX measures reconciled against database queries with zero reconciliation variance.',
      codeSample: `Post-Return Net Cash =\nSUMX(\n    fact_sales,\n    fact_sales[realized_amount] - fact_sales[return_amount]\n)\n-- Reconciled to ₹796.75M`
    },
    {
      id: 3,
      name: 'Analytics Engineering',
      short: 'Analytics Engineering',
      category: 'CATEGORY 04 // WAREHOUSE MODELING',
      icon: Layers,
      color: 'from-indigo-500 to-purple-500',
      activeColor: 'bg-[#D8F243] text-gray-950 border-[#D8F243]',
      description: 'Kimball dimensional modeling, fact-grain isolation, surrogate key management, slowly changing dimensions, and analytical views.',
      skills: ['ETL', 'Dimensional Modeling', 'Data Warehousing', 'Data Validation', 'Kimball Star Schema', 'Fact-Grain Isolation', 'Surrogate Keys'],
      appliedIn: 'Public analytical views (public.vw_cohort_retention) and grain-isolated fact tables preventing order/line-item duplicate inflation.',
      codeSample: `-- Enforcing 1:N single-direction relationship\nALTER TABLE fact_sales ADD CONSTRAINT fk_sales_date\nFOREIGN KEY (date_key) REFERENCES dim_date(date_key);`
    },
    {
      id: 4,
      name: 'Engineering',
      short: 'Engineering',
      category: 'CATEGORY 05 // SOFTWARE CRAFT',
      icon: Code2,
      color: 'from-violet-500 to-pink-500',
      activeColor: 'bg-[#D8F243] text-gray-950 border-[#D8F243]',
      description: 'High-throughput RESTful backend APIs in FastAPI, asynchronous request routing, and responsive analytical user interfaces in React 19.',
      skills: ['React', 'JavaScript', 'TypeScript', 'FastAPI', 'Node.js', 'Git', 'Vercel / Render', 'Neon PostgreSQL'],
      appliedIn: 'Deployed NovaCart cloud app on Vercel with FastAPI backend on Render, delivering sub-200ms analytics queries directly to browser UI.',
      codeSample: `@app.get("/api/v1/analytics/cohorts")\nasync def get_cohort_matrix(db: AsyncSession = Depends(get_db)):\n    result = await db.execute(select(CohortView))\n    return result.scalars().all()`
    },
    {
      id: 5,
      name: 'Applied AI',
      short: 'Applied AI',
      category: 'CATEGORY 06 // ALGORITHMIC HEURISTICS',
      icon: Cpu,
      color: 'from-rose-500 to-orange-500',
      activeColor: 'bg-[#D8F243] text-gray-950 border-[#D8F243]',
      description: 'Deterministic scoring algorithms, NLP feature parsing, computer vision classification, and spatial route optimization.',
      skills: ['Machine Learning Fundamentals', 'Applied AI', 'Recommendation Systems', 'MobileNet Vision', 'PuLP Linear Optimization', 'Fuzzy Scoring'],
      appliedIn: 'DIRS Capstone: Applied PuLP linear programming and OR-Tools route optimization across 11 crisis scenarios with sub-15ms spatial queries.',
      codeSample: `prob = pulp.LpProblem("Disaster_Resource_Routing", pulp.LpMinimize)\nprob += pulp.lpSum([cost[i][j] * x[i][j] for i in resources for j in zones])`
    }
  ];

  const current = capabilities[selectedNode];

  return (
    <section id="skills" className="py-24 border-b border-gray-200/80 bg-[#F7F7F3] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 mb-3">
              <Activity className="w-3.5 h-3.5" />
              <span>Interactive Competency Architecture</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight">
              THE CAPABILITY MAP
            </h2>
            <p className="text-gray-600 mt-2 text-sm sm:text-base max-w-2xl leading-relaxed">
              An interconnected technical ecosystem centered on Data Analytics &amp; Business Intelligence, branching into dimensional data engineering, cloud platforms, and full-stack delivery.
            </p>
          </div>

          <div className="text-xs font-mono text-gray-500 bg-white border border-gray-200 px-3 py-1.5 rounded-lg shadow-subtle shrink-0">
            Click nodes to explore practical applications
          </div>
        </div>

        {/* Interactive Capability Map Network Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10">
          
          {/* Left: 8 Interactive Satellite Nodes */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              const isSelected = selectedNode === idx;

              return (
                <button
                  key={cap.id}
                  onClick={() => setSelectedNode(idx)}
                  className={`w-full p-3.5 rounded-xl text-left border transition-all duration-200 flex items-center justify-between ${
                    isSelected
                      ? `${cap.activeColor} shadow-card -translate-x-1`
                      : 'bg-white border-gray-200 text-gray-800 hover:border-gray-400 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div className={`p-2 rounded-lg ${isSelected ? 'bg-black/15 text-gray-950 font-bold' : 'bg-gray-100 text-gray-700'}`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-mono uppercase tracking-wider text-opacity-80 opacity-80 truncate text-[10px]">
                        {cap.category}
                      </div>
                      <h4 className="text-sm font-bold truncate leading-tight mt-0.5">
                        {cap.name}
                      </h4>
                    </div>
                  </div>

                  <ArrowRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? 'translate-x-1' : 'opacity-40'}`} />
                </button>
              );
            })}
          </div>

          {/* Right: Active Capability Inspector & Codebase Proof */}
          <div className="lg:col-span-7 bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 shadow-card space-y-6">
            
            {/* Inspector Top */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-gray-100">
              <div className="flex items-center gap-2.5">
                <div className="p-2.5 rounded-xl bg-blue-50 text-blue-700 border border-blue-200">
                  <current.icon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-wider font-semibold">
                    {current.category}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-gray-950 tracking-tight">
                    {current.name}
                  </h3>
                </div>
              </div>

              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200">
                Verified in Codebase
              </span>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-700 leading-relaxed">
              {current.description}
            </p>

            {/* Skill Tags */}
            <div className="space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold">
                Core Competency Modules
              </div>
              <div className="flex flex-wrap gap-1.5">
                {current.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md text-xs font-mono font-medium bg-gray-50 text-gray-800 border border-gray-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Practical Application in Projects */}
            <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-200 text-xs text-blue-950 space-y-1.5">
              <div className="font-bold font-mono uppercase text-blue-800 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span>Production Implementation Proof</span>
              </div>
              <p className="leading-relaxed">
                {current.appliedIn}
              </p>
            </div>

            {/* Code / Query Architecture Preview */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs font-mono text-gray-500">
                <span>Production Query / Syntax Pattern</span>
                <span>Deterministic</span>
              </div>
              <div className="rounded-xl bg-[#0B0F19] p-4 font-mono text-xs text-cyan-300 overflow-x-auto border border-gray-800 shadow-inner">
                <pre className="text-[11px] sm:text-xs leading-relaxed whitespace-pre-wrap">
                  {current.codeSample}
                </pre>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
