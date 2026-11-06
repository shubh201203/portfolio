import React, { useState } from 'react';
import { 
  Terminal, 
  AlertTriangle, 
  CheckCircle2
} from 'lucide-react';

export default function InsideTheDataPlayground() {
  const [activeTab, setActiveTab] = useState('schema'); // 'schema' | 'viz' | 'explainer'

  // 1. Schema Explorer State
  const [selectedTable, setSelectedTable] = useState('fact_sales');

  const schemaTables = {
    fact_sales: {
      name: 'fact_sales',
      type: 'Fact Table (Transaction Grain)',
      grain: 'One record per line-item transaction per fulfilled order',
      pk: 'sales_key (BIGSERIAL)',
      fks: [
        'customer_id → dim_customers.customer_id',
        'product_id → dim_products.product_id',
        'date_key → dim_date.date_key',
        'region_id → dim_regions.region_id'
      ],
      measures: ['order_quantity', 'realized_amount', 'discount_amount', 'return_amount', 'realized_profit'],
      notes: 'Grain-isolated to prevent join fan-out. Measures strictly aggregated using SUMX and grain-safe CTEs.'
    },
    dim_customers: {
      name: 'dim_customers',
      type: 'Dimension Table (Customer Grain)',
      grain: 'One record per unique transacting customer',
      pk: 'customer_id (INT)',
      fks: ['None (Parent Entity)'],
      measures: ['cohort_month', 'rfm_segment', 'lifetime_orders', 'lifetime_value'],
      notes: 'Deterministic customer resolution via Python ETL cross-session recovery. 0 orphaned customer foreign keys.'
    },
    dim_products: {
      name: 'dim_products',
      type: 'Dimension Table (Product Catalog Grain)',
      grain: 'One record per SKU / item in catalog',
      pk: 'product_id (INT)',
      fks: ['category_id → dim_categories.category_id'],
      measures: ['unit_cost', 'base_price', 'target_margin_pct'],
      notes: 'Contains unit economics and manufacturer cost basis used to calculate realized operating profits.'
    },
    dim_date: {
      name: 'dim_date',
      type: 'Dimension Table (Calendar Date Grain)',
      grain: 'One record per calendar day (2022–2026)',
      pk: 'date_key (INT, YYYYMMDD format)',
      fks: ['None'],
      measures: ['fiscal_quarter', 'fiscal_year', 'is_weekend', 'holiday_flag'],
      notes: 'Standardized integer surrogate key enabling rapid index scans and DAX time-intelligence functions.'
    },
    dim_regions: {
      name: 'dim_regions',
      type: 'Dimension Table (Logistics Geographic Grain)',
      grain: 'One record per logistics operational zone / state',
      pk: 'region_id (INT)',
      fks: ['None'],
      measures: ['state_name', 'hub_tier (Tier-1, Tier-2, Tier-3)', 'avg_transit_days'],
      notes: 'Powers regional fulfillment breakdown and shipping SLA variance tracking.'
    }
  };

  // 2. Data Visualization Playground State
  const [vizMetric, setVizMetric] = useState('revenue');

  // 3. Analytics Explainer State
  const [explainerTopic, setExplainerTopic] = useState('waterfall');

  return (
    <section id="playground" className="py-24 border-b border-white/10 bg-[#070B14] text-white relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 lab-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-[600px] h-[400px] bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-white/10">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/60 mb-3">
              <Terminal className="w-3.5 h-3.5" />
              <span>Interactive Analytics Engineering Sandbox</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
              INSIDE THE DATA
            </h2>
            <p className="text-slate-400 mt-2 text-sm sm:text-base max-w-2xl leading-relaxed">
              Explore the mathematical and structural logic behind enterprise analytics: star schema schemas, live data curves, and revenue reconciliation models.
            </p>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-white/5 border border-white/10 text-xs font-mono">
            <button
              onClick={() => setActiveTab('schema')}
              className={`px-3 py-2 rounded-lg transition-all font-semibold ${
                activeTab === 'schema'
                  ? 'bg-blue-600 text-white shadow-glow-blue'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              SQL Schema Explorer
            </button>
            <button
              onClick={() => setActiveTab('viz')}
              className={`px-3 py-2 rounded-lg transition-all font-semibold ${
                activeTab === 'viz'
                  ? 'bg-blue-600 text-white shadow-glow-blue'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Interactive Data Curves
            </button>
            <button
              onClick={() => setActiveTab('explainer')}
              className={`px-3 py-2 rounded-lg transition-all font-semibold ${
                activeTab === 'explainer'
                  ? 'bg-blue-600 text-white shadow-glow-blue'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Analytics Explainer
            </button>
          </div>
        </div>

        {/* DEMO A: SQL SCHEMA EXPLORER */}
        {activeTab === 'schema' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Table Selector Pills */}
            <div className="lg:col-span-4 space-y-2.5">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold mb-2">
                Star Schema Data Mart (8 Tables)
              </div>

              {Object.keys(schemaTables).map((key) => {
                const isSelected = selectedTable === key;
                const tbl = schemaTables[key];
                return (
                  <button
                    key={key}
                    onClick={() => setSelectedTable(key)}
                    className={`w-full p-3.5 rounded-xl text-left border transition-all ${
                      isSelected
                        ? 'bg-blue-600 text-white border-blue-400 shadow-glow-blue -translate-x-1'
                        : 'bg-white/5 border-white/10 text-slate-300 hover:bg-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-mono font-bold text-sm">{tbl.name}</span>
                      <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${isSelected ? 'bg-white/20 text-white' : 'bg-black/40 text-cyan-400'}`}>
                        {key.startsWith('fact') ? 'FACT' : 'DIM'}
                      </span>
                    </div>
                    <div className={`text-xs mt-1 truncate ${isSelected ? 'text-blue-100' : 'text-slate-400'}`}>
                      {tbl.grain}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Active Table Details Inspector */}
            <div className="lg:col-span-8 bg-[#0D1424] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
              
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
                <div>
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                    {schemaTables[selectedTable].type}
                  </span>
                  <h3 className="text-2xl font-black font-mono text-white mt-0.5">
                    {schemaTables[selectedTable].name}
                  </h3>
                </div>

                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono bg-emerald-950/60 border border-emerald-800 text-emerald-400 font-semibold">
                    Kimball Star Schema Enforced
                  </span>
                </div>
              </div>

              {/* Grain & Architecture Rules */}
              <div className="p-4 rounded-xl bg-black/40 border border-white/10 space-y-2">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
                  Defined Table Grain
                </div>
                <p className="text-sm text-cyan-300 font-mono">
                  {schemaTables[selectedTable].grain}
                </p>
                <p className="text-xs text-slate-400 pt-1 border-t border-white/5">
                  {schemaTables[selectedTable].notes}
                </p>
              </div>

              {/* Keys & Relationships Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                  <div className="text-xs font-mono text-slate-400 uppercase">Primary Key (PK)</div>
                  <div className="font-mono text-sm text-amber-400 font-bold">
                    {schemaTables[selectedTable].pk}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white/5 border border-white/10 space-y-1.5">
                  <div className="text-xs font-mono text-slate-400 uppercase">Foreign Key Joins (FK)</div>
                  <div className="space-y-1">
                    {schemaTables[selectedTable].fks.map((fk, idx) => (
                      <div key={idx} className="font-mono text-xs text-slate-300 truncate">
                        • {fk}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Aggregated Measures or Dimension Attributes */}
              <div className="space-y-2">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
                  Attributes &amp; Metric Columns
                </div>
                <div className="flex flex-wrap gap-2">
                  {schemaTables[selectedTable].measures.map((col) => (
                    <span
                      key={col}
                      className="px-2.5 py-1 rounded bg-black/50 border border-white/10 text-xs font-mono text-slate-300"
                    >
                      {col}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        )}

        {/* DEMO B: DATA VISUALIZATION PLAYGROUND */}
        {activeTab === 'viz' && (
          <div className="bg-[#0D1424] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
            
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Deterministic Analytical Metric Curves
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Reconciled against 104,852 sales records and 3,970 transacting customers.
                </p>
              </div>

              {/* Curve Selector */}
              <div className="flex items-center gap-1.5 p-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono">
                <button
                  onClick={() => setVizMetric('revenue')}
                  className={`px-3 py-1.5 rounded-md transition-colors ${
                    vizMetric === 'revenue' ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Revenue Realization (₹847.62M)
                </button>
                <button
                  onClick={() => setVizMetric('retention')}
                  className={`px-3 py-1.5 rounded-md transition-colors ${
                    vizMetric === 'retention' ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  18-Month Retention (82.12%)
                </button>
                <button
                  onClick={() => setVizMetric('margins')}
                  className={`px-3 py-1.5 rounded-md transition-colors ${
                    vizMetric === 'margins' ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Category Margins (30.93%)
                </button>
              </div>
            </div>

            {/* Visualizer Display */}
            {vizMetric === 'revenue' && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-[11px] font-mono text-slate-400">Total Realized Revenue</div>
                    <div className="text-xl font-bold font-mono text-white mt-0.5">₹847.62M</div>
                    <div className="text-[10px] text-cyan-400 mt-0.5">54,854 Orders Completed</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-[11px] font-mono text-slate-400">Post-Return Net Cash</div>
                    <div className="text-xl font-bold font-mono text-blue-400 mt-0.5">₹796.75M</div>
                    <div className="text-[10px] text-slate-400 mt-0.5">−₹50.87M Settled Returns</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-white/5 border border-white/10">
                    <div className="text-[11px] font-mono text-slate-400">Operating Margin</div>
                    <div className="text-xl font-bold font-mono text-emerald-400 mt-0.5">30.93%</div>
                    <div className="text-[10px] text-emerald-400 mt-0.5">₹262.16M Operating Profit</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-black/60 border border-white/10">
                  <div className="text-xs font-mono text-slate-400 mb-2">Annualized Realized Revenue Curve (2022–2026)</div>
                  <div className="h-44 w-full">
                    <svg className="w-full h-full" viewBox="0 0 500 120" preserveAspectRatio="none">
                      <line x1="0" y1="30" x2="500" y2="30" stroke="rgba(255,255,255,0.06)" />
                      <line x1="0" y1="70" x2="500" y2="70" stroke="rgba(255,255,255,0.06)" />
                      <line x1="0" y1="110" x2="500" y2="110" stroke="rgba(255,255,255,0.06)" />
                      <polyline
                        fill="none"
                        stroke="#38BDF8"
                        strokeWidth="3"
                        strokeLinecap="round"
                        points="0,105 100,90 200,68 300,52 400,32 500,12"
                      />
                      <circle cx="0" cy="105" r="4" fill="#38BDF8" />
                      <circle cx="100" cy="90" r="4" fill="#38BDF8" />
                      <circle cx="200" cy="68" r="4" fill="#38BDF8" />
                      <circle cx="300" cy="52" r="4" fill="#38BDF8" />
                      <circle cx="400" cy="32" r="4" fill="#38BDF8" />
                      <circle cx="500" cy="12" r="4" fill="#38BDF8" />
                    </svg>
                  </div>
                  <div className="flex justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-white/10">
                    <span>2022 (₹112M)</span>
                    <span>2023 (₹148M)</span>
                    <span>2024 (₹186M)</span>
                    <span>2025 (₹234M)</span>
                    <span>2026 (₹167M YTD)</span>
                  </div>
                </div>
              </div>
            )}

            {vizMetric === 'retention' && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-black/60 border border-white/10">
                  <div className="flex items-center justify-between text-xs font-mono text-slate-400 mb-2">
                    <span>18-Month Customer Retention Curve (Cohort Decay)</span>
                    <span className="text-emerald-400">82.12% Repeat Buyers Overall</span>
                  </div>
                  <div className="h-44 w-full">
                    <svg className="w-full h-full" viewBox="0 0 500 120" preserveAspectRatio="none">
                      <polyline
                        fill="none"
                        stroke="#10B981"
                        strokeWidth="3"
                        strokeLinecap="round"
                        points="0,10 80,32 160,54 240,70 320,82 400,89 500,92"
                      />
                      <circle cx="0" cy="10" r="4" fill="#10B981" />
                      <circle cx="80" cy="32" r="4" fill="#10B981" />
                      <circle cx="160" cy="54" r="4" fill="#10B981" />
                      <circle cx="240" cy="70" r="4" fill="#10B981" />
                      <circle cx="320" cy="82" r="4" fill="#10B981" />
                      <circle cx="400" cy="89" r="4" fill="#10B981" />
                      <circle cx="500" cy="92" r="4" fill="#10B981" />
                    </svg>
                  </div>
                  <div className="flex justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-white/10">
                    <span>M0 (100%)</span>
                    <span>M3 (78%)</span>
                    <span>M6 (64%)</span>
                    <span>M9 (52%)</span>
                    <span>M12 (44%)</span>
                    <span>M15 (38%)</span>
                    <span>M18 (34%)</span>
                  </div>
                </div>
              </div>
            )}

            {vizMetric === 'margins' && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-black/60 border border-white/10 space-y-3">
                  <div className="text-xs font-mono text-slate-400">Category Operating Margin Breakdown</div>
                  {[
                    { cat: 'Electronics', margin: '34.20%', width: '85%', profit: '₹94.2M' },
                    { cat: 'Apparel & Fashion', margin: '31.45%', width: '78%', profit: '₹82.6M' },
                    { cat: 'Home & Kitchen', margin: '29.80%', width: '72%', profit: '₹51.4M' },
                    { cat: 'Books & Stationery', margin: '26.50%', width: '64%', profit: '₹33.9M' }
                  ].map((c) => (
                    <div key={c.cat} className="space-y-1">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-white font-medium">{c.cat}</span>
                        <span className="text-emerald-400">{c.margin} ({c.profit})</span>
                      </div>
                      <div className="h-2 w-full bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" style={{ width: c.width }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        )}

        {/* DEMO C: ANALYTICS EXPLAINER */}
        {activeTab === 'explainer' && (
          <div className="bg-[#0D1424] border border-white/15 rounded-2xl p-6 sm:p-8 shadow-2xl space-y-6">
            
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/10">
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Core Analytics Rigor Principles
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Why distinct counts, return quarantining, and fact-grain isolation matter to stakeholders.
                </p>
              </div>

              {/* Topic Selector */}
              <div className="flex items-center gap-1.5 p-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono">
                <button
                  onClick={() => setExplainerTopic('waterfall')}
                  className={`px-3 py-1.5 rounded-md transition-colors ${
                    explainerTopic === 'waterfall' ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Placed vs Realized vs Post-Return
                </button>
                <button
                  onClick={() => setExplainerTopic('fanout')}
                  className={`px-3 py-1.5 rounded-md transition-colors ${
                    explainerTopic === 'fanout' ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  Join Fan-Out & Double Counting
                </button>
              </div>
            </div>

            {explainerTopic === 'waterfall' && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-5 rounded-xl bg-white/5 border border-white/10 space-y-2">
                    <span className="text-xs font-mono uppercase text-slate-400">1. Placed Gross Order Value</span>
                    <div className="text-2xl font-black font-mono text-white">₹971.49M</div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      All orders initially placed by customers before cancellations, payment drop-offs, or delivery fulfillment.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-blue-950/60 border border-blue-500/40 space-y-2">
                    <span className="text-xs font-mono uppercase text-blue-300 font-bold">2. Realized Revenue</span>
                    <div className="text-2xl font-black font-mono text-cyan-400">₹847.62M</div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Fulfilled orders (Completed + Shipped). Excludes ₹123.87M in cancelled or aborted transactions.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 space-y-2">
                    <span className="text-xs font-mono uppercase text-emerald-300 font-bold">3. Post-Return Net Cash</span>
                    <div className="text-2xl font-black font-mono text-emerald-400">₹796.75M</div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Actual cash retained by business after settling ₹50.87M in customer returns.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-black/60 border border-white/10 text-xs text-slate-300 space-y-2 font-mono">
                  <div className="text-cyan-400 font-bold">Why This Distinction Matters in Business Intelligence:</div>
                  <p className="leading-relaxed">
                    Treating placed gross volume (₹971.49M) as revenue would overstate actual settled income by <strong>₹174.74M (+21.9%)</strong>, resulting in misallocated inventory budgets and faulty unit economics.
                  </p>
                </div>
              </div>
            )}

            {explainerTopic === 'fanout' && (
              <div className="space-y-4">
                <div className="p-5 rounded-xl bg-black/60 border border-white/10 space-y-3 font-mono text-xs text-slate-300">
                  <div className="text-rose-400 font-bold flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-rose-400" />
                    <span>The Multi-Grain Fan-Out Trap (Common SQL Mistake):</span>
                  </div>
                  <pre className="text-slate-400 text-[11px] leading-relaxed overflow-x-auto">
                    {`-- INCORRECT: Joining order header to line items multiplies order totals!\nSELECT SUM(o.order_total) \nFROM orders o JOIN order_items i ON o.order_id = i.order_id;\n-- Result: Multiplies order_total by count of items (overstates by 2.4x!)`}
                  </pre>
                  
                  <div className="text-emerald-400 font-bold flex items-center gap-2 pt-2 border-t border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>The Grain-Safe Solution (NovaCart Standard):</span>
                  </div>
                  <pre className="text-emerald-300 text-[11px] leading-relaxed overflow-x-auto">
                    {`-- CORRECT: Pre-aggregating at line-item grain or maintaining strict fact grain\nSELECT SUM(item_amount) FROM fact_sales;\n-- Result: Exactly ₹847.62M realized revenue with zero duplication.`}
                  </pre>
                </div>
              </div>
            )}

          </div>
        )}

      </div>
    </section>
  );
}
