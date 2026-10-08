import React, { useEffect } from 'react';
import { X, ArrowLeft, GitBranch, ArrowDown, ExternalLink, BarChart3, Clock, AlertCircle } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import Badge from '../common/Badge';

export default function NovaCartCaseStudy({ onClose }) {
  const project = portfolioData.projects.find((p) => p.id === 'novacart');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#F7F7F3] text-gray-900 transition-all">
      {/* Sticky Top Bar */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-gray-200 py-3.5 px-4 sm:px-8 shadow-subtle">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 text-xs font-semibold text-gray-700 hover:text-gray-950 transition-colors bg-gray-50 hover:bg-gray-100 px-3 py-1.5 rounded-md border border-gray-200"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Portfolio</span>
          </button>

          <div className="text-center hidden sm:block">
            <span className="text-xs font-mono text-blue-600 font-bold">CASE STUDY 01</span>
            <span className="text-xs font-bold text-gray-900 ml-2">NovaCart Analytics</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 border border-gray-200"
            aria-label="Close case study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Case Study Content Body */}
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12 space-y-12">
        
        {/* Title Header */}
        <div className="space-y-4 border-b border-gray-200 pb-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-blue-600 text-white uppercase tracking-wider">
              Flagship Analytics Case Study
            </span>
            <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-white text-gray-700 border border-gray-200">
              E-Commerce Intelligence
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
            {project.tagline}
          </p>

          {/* Technology Badges */}
          <div className="pt-2">
            <div className="text-xs font-mono text-gray-500 mb-2">Technologies Used:</div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded text-xs font-mono bg-white text-gray-800 border border-gray-200 shadow-subtle"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 11 Case Study Sections in Canonical Sequence */}
        <div className="space-y-10">
          
          {/* 01 - Business Problem */}
          <section className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-card space-y-4">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono text-blue-600 font-bold">01</span>
                <h2 className="text-xl font-bold text-gray-900">Business Problem</h2>
              </div>
              <Badge status="Defined" />
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              In a growing multi-category e-commerce business, operational transactional records reside in disparate staging logs. Executive leadership requires structured analytical visibility into:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-gray-700 pt-2">
              <li className="p-3.5 rounded-lg bg-gray-50 border border-gray-200 flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Revenue & Margin Health:</strong> Which categories, products, and channels drive real bottom-line profitability?</span>
              </li>
              <li className="p-3.5 rounded-lg bg-gray-50 border border-gray-200 flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Customer Retention:</strong> How quickly do acquired cohorts decay, and what characterizes repeat purchasers?</span>
              </li>
              <li className="p-3.5 rounded-lg bg-gray-50 border border-gray-200 flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Regional Dynamics:</strong> How does purchasing behavior and average order value vary across geographic regions?</span>
              </li>
              <li className="p-3.5 rounded-lg bg-gray-50 border border-gray-200 flex items-start gap-2">
                <span className="text-blue-600 font-bold">•</span>
                <span><strong>Returns & Leakage:</strong> Which product lines experience high return rates that erode net settled revenue?</span>
              </li>
            </ul>
          </section>

          {/* 02 - Data */}
          <section className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-card space-y-4">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono text-blue-600 font-bold">02</span>
                <h2 className="text-xl font-bold text-gray-900">Data Foundation & Source</h2>
              </div>
              <Badge status="Defined" />
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              The project ingests raw operational e-commerce transactional records reflecting authentic multi-category consumer commerce:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
              <div className="p-3.5 rounded-lg bg-gray-50 border border-gray-200">
                <div className="font-bold text-gray-900 mb-1">Transactional Records</div>
                <div className="text-gray-600 leading-relaxed">Order IDs, timestamps, payment methods, shipping status, and return indicators.</div>
              </div>
              <div className="p-3.5 rounded-lg bg-gray-50 border border-gray-200">
                <div className="font-bold text-gray-900 mb-1">Customer Profiles</div>
                <div className="text-gray-600 leading-relaxed">Customer IDs, geographic location, registration timestamps, and demographic tiers.</div>
              </div>
              <div className="p-3.5 rounded-lg bg-gray-50 border border-gray-200">
                <div className="font-bold text-gray-900 mb-1">Product Catalog</div>
                <div className="text-gray-600 leading-relaxed">SKUs, product categories, unit prices, cost of goods sold (COGS), and inventory metrics.</div>
              </div>
            </div>
          </section>

          {/* 03 - Data Cleaning */}
          <section className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-card space-y-4">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono text-blue-600 font-bold">03</span>
                <h2 className="text-xl font-bold text-gray-900">Data Cleaning & Transformation</h2>
              </div>
              <Badge status="Implemented" />
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Before loading into the data warehouse, raw data is cleaned and standardized using Python (Pandas) and Power Query transformations:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm">
              <div className="p-3.5 rounded-lg bg-gray-50 border border-gray-200 space-y-1">
                <div className="font-bold text-gray-900">1. Deduplication & Line Item Verification</div>
                <div className="text-gray-600 text-xs">Identifying duplicate transaction entries across order lines while preserving unique order line item keys.</div>
              </div>
              <div className="p-3.5 rounded-lg bg-gray-50 border border-gray-200 space-y-1">
                <div className="font-bold text-gray-900">2. Missing Value Imputation</div>
                <div className="text-gray-600 text-xs">Standardizing null handling, missing customer identifiers, and validating mandatory order keys.</div>
              </div>
              <div className="p-3.5 rounded-lg bg-gray-50 border border-gray-200 space-y-1">
                <div className="font-bold text-gray-900">3. Schema & Data Type Casting</div>
                <div className="text-gray-600 text-xs">Formatting ISO dates, numeric currency conversions, boolean flag validation, and string trimming.</div>
              </div>
              <div className="p-3.5 rounded-lg bg-gray-50 border border-gray-200 space-y-1">
                <div className="font-bold text-gray-900">4. Regional Standardization</div>
                <div className="text-gray-600 text-xs">Normalizing regional naming conventions and state codes for reliable geographic aggregation.</div>
              </div>
            </div>
          </section>

          {/* 04 - Data Architecture */}
          <section className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-card space-y-4">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono text-blue-600 font-bold">04</span>
                <h2 className="text-xl font-bold text-gray-900">Data Architecture & Pipeline</h2>
              </div>
              <Badge status="Implemented" />
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              The data flows through a multi-stage analytics pipeline designed to separate raw ingestion from dimensional analytical reporting:
            </p>
            
            {/* Visual Pipeline Block */}
            <div className="p-5 rounded-xl bg-[#F7F7F3] border border-gray-200">
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center text-xs font-mono">
                <div className="p-3.5 rounded-lg bg-white border border-gray-200 shadow-subtle">
                  <div className="text-gray-400 text-[10px] uppercase mb-1">Stage 01</div>
                  <div className="font-bold text-gray-900">Raw Operational Data</div>
                  <div className="text-[10px] text-gray-500 mt-0.5">CSV / Transaction Logs</div>
                </div>
                <div className="p-3.5 rounded-lg bg-white border border-gray-200 shadow-subtle">
                  <div className="text-gray-400 text-[10px] uppercase mb-1">Stage 02</div>
                  <div className="font-bold text-gray-900">Python Cleaning / ETL</div>
                  <div className="text-[10px] text-gray-500 mt-0.5">Pandas & Power Query</div>
                </div>
                <div className="p-3.5 rounded-lg bg-blue-50 border border-blue-200 shadow-subtle">
                  <div className="text-blue-600 text-[10px] uppercase mb-1 font-bold">Stage 03</div>
                  <div className="font-bold text-blue-950">PostgreSQL DW</div>
                  <div className="text-[10px] text-blue-700 mt-0.5">Relational Staging</div>
                </div>
                <div className="p-3.5 rounded-lg bg-blue-50 border border-blue-200 shadow-subtle">
                  <div className="text-blue-600 text-[10px] uppercase mb-1 font-bold">Stage 04</div>
                  <div className="font-bold text-blue-950">Star Schema</div>
                  <div className="text-[10px] text-blue-700 mt-0.5">Fact & Dimension Model</div>
                </div>
              </div>
            </div>
          </section>

          {/* 05 - SQL Analytics */}
          <section className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-card space-y-4">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono text-blue-600 font-bold">05</span>
                <h2 className="text-xl font-bold text-gray-900">SQL Analytics Suite</h2>
              </div>
              <Badge status="Implemented" />
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Analytical queries investigate key retail business questions using Common Table Expressions (CTEs), window functions, and time-intelligence filters:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
              <div className="p-3.5 rounded-lg bg-gray-50 border border-gray-200">
                <div className="font-bold text-gray-900 mb-1">Revenue Trajectory & Growth</div>
                <div className="text-gray-600 leading-relaxed">MoM and YoY growth rates, Average Order Value (AOV), and rolling moving averages.</div>
              </div>
              <div className="p-3.5 rounded-lg bg-gray-50 border border-gray-200">
                <div className="font-bold text-gray-900 mb-1">Customer RFM & Purchase Frequency</div>
                <div className="text-gray-600 leading-relaxed">Recency, Frequency, and Monetary scoring to classify high-value vs churn-risk shoppers.</div>
              </div>
              <div className="p-3.5 rounded-lg bg-gray-50 border border-gray-200">
                <div className="font-bold text-gray-900 mb-1">Category & SKU Pareto Distribution</div>
                <div className="text-gray-600 leading-relaxed">80/20 distribution isolating top grossing items from slow-moving catalog SKUs.</div>
              </div>
              <div className="p-3.5 rounded-lg bg-gray-50 border border-gray-200">
                <div className="font-bold text-gray-900 mb-1">Cohort Retention & Repeat Intervals</div>
                <div className="text-gray-600 leading-relaxed">Tracking repeat transaction decay from acquisition month to assess customer durability.</div>
              </div>
            </div>
          </section>

          {/* 06 - Data Modeling */}
          <section className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-card space-y-4">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono text-blue-600 font-bold">06</span>
                <h2 className="text-xl font-bold text-gray-900">Dimensional Data Modeling (Star Schema)</h2>
              </div>
              <Badge status="Implemented" />
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              To optimize BI querying and eliminate redundancy, the relational schema is organized into a Star Schema with 1:N single-direction relationships:
            </p>

            {/* Star Schema Architecture Card */}
            <div className="p-5 rounded-xl bg-[#F7F7F3] border border-gray-200 space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-blue-700 font-bold text-center">
                Star Schema Architecture (1:N Single Direction Relationships)
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-center text-xs">
                <div className="p-3 rounded-lg bg-white border border-gray-200 shadow-subtle">
                  <div className="text-gray-400 font-mono text-[10px]">Dimension</div>
                  <div className="font-bold text-gray-900">dim_customer</div>
                  <div className="text-[11px] text-gray-600 mt-1">customer_id (PK), segment, city, registration_date</div>
                </div>

                <div className="p-3.5 rounded-lg bg-blue-50 border border-blue-200 shadow-subtle sm:row-span-2 flex flex-col justify-center">
                  <div className="text-blue-600 font-mono text-[10px] uppercase font-bold">Central Fact</div>
                  <div className="font-bold text-blue-950 text-sm">fact_sales</div>
                  <div className="text-[11px] text-blue-900 mt-1 font-mono">
                    Grain: 1 row per order line item
                  </div>
                  <div className="text-[10px] text-gray-600 mt-2">
                    Foreign Keys: customer_id, product_id, date_id, location_id, payment_id
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-white border border-gray-200 shadow-subtle">
                  <div className="text-gray-400 font-mono text-[10px]">Dimension</div>
                  <div className="font-bold text-gray-900">dim_product</div>
                  <div className="text-[11px] text-gray-600 mt-1">product_id (PK), category, unit_price, cogs</div>
                </div>

                <div className="p-3 rounded-lg bg-white border border-gray-200 shadow-subtle">
                  <div className="text-gray-400 font-mono text-[10px]">Dimension</div>
                  <div className="font-bold text-gray-900">dim_location</div>
                  <div className="text-[11px] text-gray-600 mt-1">location_id (PK), state, region, tier</div>
                </div>

                <div className="p-3 rounded-lg bg-white border border-gray-200 shadow-subtle">
                  <div className="text-gray-400 font-mono text-[10px]">Dimension</div>
                  <div className="font-bold text-gray-900">dim_date</div>
                  <div className="text-[11px] text-gray-600 mt-1">date_id (PK), date, month, quarter, year</div>
                </div>
              </div>
            </div>
          </section>

          {/* 07 - DAX */}
          <section className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-card space-y-4">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono text-blue-600 font-bold">07</span>
                <h2 className="text-xl font-bold text-gray-900">DAX Measures & Analytical Formulas</h2>
              </div>
              <Badge status="Implemented" />
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Business calculations are formulated as explicit DAX measures using standard calculation patterns:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-mono">
              <div className="p-3.5 rounded-lg bg-gray-50 border border-gray-200 space-y-1">
                <div className="text-blue-700 font-bold">Net Settled Revenue</div>
                <div className="text-gray-500 text-[11px]">// Revenue after deductions for returned orders</div>
                <div className="text-gray-800 font-semibold">CALCULATE(SUM(fact_sales[net_amount]), fact_sales[status] = "Completed")</div>
              </div>
              <div className="p-3.5 rounded-lg bg-gray-50 border border-gray-200 space-y-1">
                <div className="text-blue-700 font-bold">Average Order Value (AOV)</div>
                <div className="text-gray-500 text-[11px]">// Total realized revenue divided by unique completed orders</div>
                <div className="text-gray-800 font-semibold">DIVIDE([Net Settled Revenue], DISTINCTCOUNT(fact_sales[order_id]), 0)</div>
              </div>
              <div className="p-3.5 rounded-lg bg-gray-50 border border-gray-200 space-y-1">
                <div className="text-blue-700 font-bold">YoY Revenue Growth %</div>
                <div className="text-gray-500 text-[11px]">// Time intelligence comparison with prior year period</div>
                <div className="text-gray-800 font-semibold">DIVIDE([Net Settled Revenue] - [PY Revenue], [PY Revenue], 0)</div>
              </div>
              <div className="p-3.5 rounded-lg bg-gray-50 border border-gray-200 space-y-1">
                <div className="text-blue-700 font-bold">Return Rate %</div>
                <div className="text-gray-500 text-[11px]">// Units returned compared to total units sold</div>
                <div className="text-gray-800 font-semibold">DIVIDE([Returned Quantity], [Total Sold Quantity], 0)</div>
              </div>
            </div>
          </section>

          {/* 08 - Power BI Dashboards */}
          <section className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-card space-y-6">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono text-blue-600 font-bold">08</span>
                <h2 className="text-xl font-bold text-gray-900">Power BI Dashboard Structure & Preview</h2>
              </div>
              <Badge status="In Progress" />
            </div>
            
            <p className="text-gray-700 text-sm leading-relaxed">
              The reporting layer is structured across 6 core executive dashboard views:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
              {project.powerBiStructure.plannedPages.map((page, idx) => (
                <div key={page} className="p-3 rounded-lg bg-gray-50 border border-gray-200 shadow-subtle">
                  <span className="text-[10px] font-mono text-blue-600 font-bold block mb-1">View 0{idx + 1}</span>
                  <span className="font-semibold text-gray-900">{page}</span>
                </div>
              ))}
            </div>

            {/* Dashboard Preview - Wireframe Placeholder (Strictly No Fake Numbers) */}
            <div className="p-8 rounded-xl border border-dashed border-gray-300 bg-gray-50 text-center space-y-3">
              <div className="w-12 h-12 rounded-xl bg-white border border-gray-200 shadow-subtle mx-auto flex items-center justify-center text-blue-600">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-gray-900">Dashboard Preview</h3>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono text-amber-800 bg-amber-50 border border-amber-200">
                <Clock className="w-3.5 h-3.5" />
                <span>Coming Soon</span>
              </div>
              <p className="text-xs text-gray-600 max-w-md mx-auto leading-relaxed">
                Visual report canvas is currently being constructed in Power BI Desktop according to the Star Schema data model. Verified screenshots will be published here upon completion.
              </p>
            </div>
          </section>

          {/* 09 - Insights */}
          <section className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-card space-y-4">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono text-blue-600 font-bold">09</span>
                <h2 className="text-xl font-bold text-gray-900">Insights</h2>
              </div>
              <Badge status="In Progress" />
            </div>
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-xs sm:text-sm text-gray-700 space-y-2">
              <div className="flex items-center gap-2 text-amber-800 font-semibold text-xs">
                <Clock className="w-4 h-4 text-amber-600" />
                <span>Analysis In Progress</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Real business observations and empirical findings will be displayed here as each analytical query suite is finalized. No speculative or artificial results are reported.
              </p>
            </div>
          </section>

          {/* 10 - Recommendations */}
          <section className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-card space-y-4">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono text-blue-600 font-bold">10</span>
                <h2 className="text-xl font-bold text-gray-900">Recommendations</h2>
              </div>
              <Badge status="Planned" />
            </div>
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-xs sm:text-sm text-gray-700 space-y-2">
              <div className="flex items-center gap-2 text-gray-600 font-semibold text-xs">
                <AlertCircle className="w-4 h-4 text-gray-500" />
                <span>Planned Milestone</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Actionable strategic recommendations will be derived directly from verified analytical findings and empirical cohort metrics.
              </p>
            </div>
          </section>

          {/* 11 - Project Outcome */}
          <section className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-card space-y-4">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono text-blue-600 font-bold">11</span>
                <h2 className="text-xl font-bold text-gray-900">Project Outcome</h2>
              </div>
              <Badge status="In Progress" />
            </div>
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-xs sm:text-sm text-gray-700">
              <p className="leading-relaxed text-gray-700">
                End-to-end analytics pipeline and reporting workflow currently being developed.
              </p>
            </div>
          </section>

        </div>

        {/* Footer Back Button */}
        <div className="pt-8 border-t border-gray-200 flex items-center justify-between">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Portfolio</span>
          </button>

          <a
            href={portfolioData.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-600 hover:text-gray-900 transition-colors"
          >
            <span>GitHub Profile</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
}
