import React, { useState, useEffect } from 'react';
import {
  X,
  ArrowLeft,
  ExternalLink,
  BarChart3,
  CheckCircle2,
  Database,
  ShieldCheck,
  TrendingUp,
  PieChart,
  ZoomIn,
  AlertTriangle,
  Server
} from 'lucide-react';
import { GitHubIcon } from '../common/Icons';
import { portfolioData } from '../../data/portfolioData';

export default function NovaCartCaseStudy({ onClose }) {
  const project = portfolioData.projects.find((p) => p.id === 'novacart');
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (selectedImage) {
          setSelectedImage(null);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, selectedImage]);

  if (!project) return null;

  const screenshots = project.dashboardScreenshots || [];
  const metrics = project.verifiedMetrics;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#F7F7F3] text-gray-900 transition-all">
      
      {/* Sticky Top Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-gray-200 py-3.5 px-4 sm:px-8 shadow-subtle">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 text-xs font-semibold text-gray-700 hover:text-gray-950 transition-colors bg-gray-50 hover:bg-gray-100 px-3 py-1.5 rounded-md border border-gray-200"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Portfolio</span>
          </button>

          <div className="text-center hidden sm:block">
            <span className="text-xs font-mono text-blue-600 font-bold uppercase tracking-wider">
              Flagship Analytics Case Study
            </span>
            <span className="text-xs font-bold text-gray-900 ml-2">NovaCart Analytics</span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 border border-blue-200 px-3 py-1.5 rounded-md transition-colors"
            >
              <span>Live Demo</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 border border-gray-200"
              aria-label="Close case study"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-8 py-10 space-y-12">
        
        {/* =================================================================== */}
        {/* SECTION A: Project Introduction & Identity                          */}
        {/* =================================================================== */}
        <section className="space-y-6 border-b border-gray-200 pb-10">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-blue-600 text-white uppercase tracking-wider">
              Flagship Project
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Completed & Deployed</span>
            </span>
            <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-white text-gray-700 border border-gray-200">
              Enterprise Analytics & BI
            </span>
            <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-gray-50 text-gray-600 border border-gray-200">
              28/28 Pytest Verified
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
            {project.tagline}
          </p>

          {/* Action Links Bar */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-subtle"
            >
              <span>Explore Live Analytics App</span>
              <ExternalLink className="w-4 h-4" />
            </a>

            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold bg-gray-900 text-white hover:bg-gray-800 transition-colors shadow-subtle"
            >
              <GitHubIcon className="w-4 h-4 text-white" />
              <span>Verified GitHub Repository</span>
            </a>
          </div>

          {/* Synthetic Data Disclaimer Banner */}
          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 flex items-start gap-3 text-xs text-amber-900">
            <ShieldCheck className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
            <div className="space-y-1">
              <span className="font-bold uppercase tracking-wider text-[11px] text-amber-900">
                Dataset Origin & Analytical Fidelity Notice
              </span>
              <p className="leading-relaxed text-amber-800">
                All analytical results are derived from an empirically modeled, synthetic India-focused e-commerce dataset generated to demonstrate end-to-end Data Engineering, Star-Schema Warehouse Modeling, Advanced SQL Analytics, Power BI DAX Modeling, and Cloud API/Frontend Deployment. Figures reflect deterministic calculations on this dataset and do not represent a real commercial entity.
              </p>
            </div>
          </div>

          {/* Three Core Deliverables Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
            {project.deliverables?.map((d) => (
              <div
                key={d.num}
                className="p-5 rounded-xl bg-white border border-gray-200 shadow-card flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-gray-400 mb-1">
                    <span className="font-bold text-blue-600">DELIVERABLE {d.num}</span>
                    <span className="text-[10px] text-gray-500">{d.tech}</span>
                  </div>
                  <h3 className="text-sm font-bold text-gray-900">{d.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed mt-2">{d.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>


        {/* =================================================================== */}
        {/* SECTION B: Problem & Analytical Objectives                          */}
        {/* =================================================================== */}
        <section className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-card space-y-6">
          <div className="border-b border-gray-100 pb-4">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-bold">
              01 · Analytical Objectives
            </span>
            <h2 className="text-2xl font-bold text-gray-950 mt-1">
              Business Inquiries Investigated by NovaCart
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Modern e-commerce enterprises face severe margin compression when relying naively on top-line placed demand. NovaCart investigates five core retail commercial challenges:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-lg bg-gray-50 border border-gray-200 space-y-1.5">
              <div className="font-bold text-gray-900 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                <span>Revenue Realization & Commercial Leakage</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Quantifying the exact leakage from gross placed orders (₹971.49M) down to fulfilled orders (₹847.62M) and net settled post-return cash flow (₹796.75M) across order cancellations and customer returns.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-gray-50 border border-gray-200 space-y-1.5">
              <div className="font-bold text-gray-900 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                <span>Category Margin Dilution & Volume Anchors</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Diagnosing why <strong>Electronics</strong> drives 58.3% of realized volume but compresses margins to 18.57%, while <strong>Beauty & Personal Care</strong> (59.54% margin) and <strong>Apparel</strong> (57.67% margin) deliver superior unit economics.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-gray-50 border border-gray-200 space-y-1.5">
              <div className="font-bold text-gray-900 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                <span>Customer Retention & Cohort Longevity</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Measuring customer decay across 18 monthly cohorts and segmenting 3,970 active customers into actionable RFM tiers (Champions, Loyal Customers, At-Risk, Lost).
              </p>
            </div>

            <div className="p-4 rounded-lg bg-gray-50 border border-gray-200 space-y-1.5">
              <div className="font-bold text-gray-900 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                <span>Payment Gateway Performance & Cancellation Risk</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Isolating transaction success and pre-delivery cancellation rates across Indian payment rails (UPI, COD, NetBanking, Debit/Credit cards).
              </p>
            </div>

            <div className="p-4 rounded-lg bg-gray-50 border border-gray-200 space-y-1.5 md:col-span-2">
              <div className="font-bold text-gray-900 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                <span>Geographic Demand & Regional Urban Contribution</span>
              </div>
              <p className="text-gray-600 leading-relaxed">
                Evaluating demand concentration across 18 Indian states and 6 macro-regions, cross-tabulating category demand matrices with regional returns.
              </p>
            </div>
          </div>
        </section>


        {/* =================================================================== */}
        {/* SECTION C: Architecture & Dimensional Star Schema                   */}
        {/* =================================================================== */}
        <section className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-card space-y-6">
          <div className="border-b border-gray-100 pb-4">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-bold">
              02 · System Architecture
            </span>
            <h2 className="text-2xl font-bold text-gray-950 mt-1">
              End-to-End Pipeline & 8-Table Dimensional Warehouse
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              The project enforces clear separation between raw transactional ingestion, dimensional warehousing, analytical querying, business intelligence, and cloud application serving.
            </p>
          </div>

          {/* End-to-End Architecture Flow */}
          <div className="p-5 rounded-xl bg-gray-50 border border-gray-200 space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-gray-500 font-bold text-center">
              End-to-End Analytics Engineering Pipeline Flow
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 text-center text-xs font-mono">
              <div className="p-3 rounded-lg bg-white border border-gray-200 shadow-subtle">
                <div className="text-gray-400 text-[10px] uppercase font-bold">1. Ingestion</div>
                <div className="font-bold text-gray-900 mt-0.5">Raw Order Logs</div>
                <div className="text-[10px] text-gray-500 mt-1">105,420 events (CSV)</div>
              </div>

              <div className="p-3 rounded-lg bg-white border border-gray-200 shadow-subtle">
                <div className="text-gray-400 text-[10px] uppercase font-bold">2. Data Quality</div>
                <div className="font-bold text-gray-900 mt-0.5">Python & Pandas</div>
                <div className="text-[10px] text-gray-500 mt-1">Recovery & Quarantine</div>
              </div>

              <div className="p-3 rounded-lg bg-blue-50 border border-blue-200 shadow-subtle">
                <div className="text-blue-600 text-[10px] uppercase font-bold">3. Warehouse</div>
                <div className="font-bold text-blue-950 mt-0.5">PostgreSQL 18 DW</div>
                <div className="text-[10px] text-blue-700 mt-1">8-Table Star Schema</div>
              </div>

              <div className="p-3 rounded-lg bg-blue-50 border border-blue-200 shadow-subtle">
                <div className="text-blue-600 text-[10px] uppercase font-bold">4. Analytics & BI</div>
                <div className="font-bold text-blue-950 mt-0.5">SQL & Power BI</div>
                <div className="text-[10px] text-blue-700 mt-1">12 Modules · 30+ DAX</div>
              </div>

              <div className="p-3 rounded-lg bg-white border border-gray-200 shadow-subtle">
                <div className="text-gray-400 text-[10px] uppercase font-bold">5. Web App</div>
                <div className="font-bold text-gray-900 mt-0.5">React + FastAPI</div>
                <div className="text-[10px] text-gray-500 mt-1">Vercel · Render · Neon</div>
              </div>
            </div>
          </div>

          {/* Verified Warehouse Tables & Exact Row Counts Table */}
          <div className="space-y-3 pt-2">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-bold text-gray-900 font-mono uppercase tracking-wider flex items-center gap-1.5">
                <Database className="w-4 h-4 text-blue-600" />
                <span>Verified Warehouse Table Grains & Row Counts (0 FK Orphans)</span>
              </h3>
              <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                100% Audit Verified
              </span>
            </div>

            <div className="overflow-x-auto border border-gray-200 rounded-lg">
              <table className="w-full text-left text-xs">
                <thead className="bg-gray-50 font-mono text-gray-600 uppercase border-b border-gray-200 text-[11px]">
                  <tr>
                    <th className="py-2.5 px-3">Table Name</th>
                    <th className="py-2.5 px-3">Type</th>
                    <th className="py-2.5 px-3">Exact Grain Definition</th>
                    <th className="py-2.5 px-3">Key Structure</th>
                    <th className="py-2.5 px-3 text-right">Row Count</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 font-mono text-[11px]">
                  <tr className="bg-white hover:bg-gray-50/50">
                    <td className="py-2 px-3 font-bold text-gray-900">dim_customer</td>
                    <td className="py-2 px-3 text-gray-500">Dimension</td>
                    <td className="py-2 px-3 text-gray-700 font-sans">One row per registered customer account</td>
                    <td className="py-2 px-3 text-gray-500">PK: customer_key</td>
                    <td className="py-2 px-3 text-right font-bold text-gray-900">5,000</td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50/50">
                    <td className="py-2 px-3 font-bold text-gray-900">dim_product</td>
                    <td className="py-2 px-3 text-gray-500">Dimension</td>
                    <td className="py-2 px-3 text-gray-700 font-sans">One row per catalog SKU (5 categories)</td>
                    <td className="py-2 px-3 text-gray-500">PK: product_key</td>
                    <td className="py-2 px-3 text-right font-bold text-gray-900">180</td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50/50">
                    <td className="py-2 px-3 font-bold text-gray-900">dim_location</td>
                    <td className="py-2 px-3 text-gray-500">Dimension</td>
                    <td className="py-2 px-3 text-gray-700 font-sans">One row per unique city, state code, and region</td>
                    <td className="py-2 px-3 text-gray-500">PK: location_key</td>
                    <td className="py-2 px-3 text-right font-bold text-gray-900">54</td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50/50">
                    <td className="py-2 px-3 font-bold text-gray-900">dim_payment</td>
                    <td className="py-2 px-3 text-gray-500">Dimension</td>
                    <td className="py-2 px-3 text-gray-700 font-sans">One row per payment method & status pair</td>
                    <td className="py-2 px-3 text-gray-500">PK: payment_key</td>
                    <td className="py-2 px-3 text-right font-bold text-gray-900">18</td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50/50">
                    <td className="py-2 px-3 font-bold text-gray-900">dim_date</td>
                    <td className="py-2 px-3 text-gray-500">Dimension</td>
                    <td className="py-2 px-3 text-gray-700 font-sans">One row per calendar day (2022–2026)</td>
                    <td className="py-2 px-3 text-gray-500">PK: date_key (Int)</td>
                    <td className="py-2 px-3 text-right font-bold text-gray-900">1,826</td>
                  </tr>
                  <tr className="bg-blue-50/50 hover:bg-blue-50">
                    <td className="py-2.5 px-3 font-bold text-blue-950">fact_sales</td>
                    <td className="py-2.5 px-3 text-blue-700 font-semibold">Primary Fact</td>
                    <td className="py-2.5 px-3 text-blue-900 font-sans font-medium">One row per product line item within an order</td>
                    <td className="py-2.5 px-3 text-blue-700">5 FKs (Dates, Cust, Prod, Loc, Pay)</td>
                    <td className="py-2.5 px-3 text-right font-bold text-blue-950 text-xs">104,852</td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50/50">
                    <td className="py-2 px-3 font-bold text-gray-900">fact_returns</td>
                    <td className="py-2 px-3 text-gray-500">Fact (Secondary)</td>
                    <td className="py-2 px-3 text-gray-700 font-sans">One row per returned item line event</td>
                    <td className="py-2 px-3 text-gray-500">3 FKs (Date, Cust, Prod)</td>
                    <td className="py-2 px-3 text-right font-bold text-gray-900">5,792</td>
                  </tr>
                  <tr className="bg-white hover:bg-gray-50/50">
                    <td className="py-2 px-3 font-bold text-gray-900">fact_payments</td>
                    <td className="py-2 px-3 text-gray-500">Fact (Secondary)</td>
                    <td className="py-2 px-3 text-gray-700 font-sans">One row per payment transaction attempt</td>
                    <td className="py-2 px-3 text-gray-500">2 FKs (Date, Payment)</td>
                    <td className="py-2 px-3 text-right font-bold text-gray-900">62,952</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>


        {/* =================================================================== */}
        {/* SECTION D: Data Quality, Grain Awareness & SQL Engineering          */}
        {/* =================================================================== */}
        <section className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-card space-y-6">
          <div className="border-b border-gray-100 pb-4">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-bold">
              03 · Engineering Rigor & Data Quality
            </span>
            <h2 className="text-2xl font-bold text-gray-950 mt-1">
              Deterministic Recovery, Quarantine & Fact Grain Isolation
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Production data engineering decisions implemented to guarantee mathematical integrity across the warehouse.
            </p>
          </div>

          {/* Critical Technical Decision Callout: Grain Awareness */}
          <div className="p-5 rounded-xl bg-blue-50/60 border border-blue-200 space-y-3">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-600 text-white uppercase">
                Critical Architecture Principle
              </span>
              <h3 className="text-sm font-bold text-blue-950">
                Grain Awareness: Preventing Fact-to-Fact Join Multiplication
              </h3>
            </div>
            
            <p className="text-xs sm:text-sm text-blue-900 leading-relaxed">
              A classic modeling flaw in retail analytics is joining <code className="bg-white/80 px-1 py-0.5 rounded text-blue-950 font-mono">fact_sales</code> (104,852 rows) directly to <code className="bg-white/80 px-1 py-0.5 rounded text-blue-950 font-mono">fact_payments</code> (62,952 rows) on <code className="bg-white/80 px-1 py-0.5 rounded text-blue-950 font-mono">order_id</code>. Because multi-item orders produce a Cartesian product with payment retry records, a naive join severely inflates financial totals.
            </p>

            <div className="p-3 rounded-lg bg-gray-900 text-gray-200 font-mono text-[11px] overflow-x-auto leading-relaxed">
              <div className="text-gray-400">// NovaCart Grain-Safe CTE Pre-Aggregation Pattern</div>
              <span className="text-purple-400">WITH</span> order_level_sales <span className="text-purple-400">AS</span> (<br />
              &nbsp;&nbsp;<span className="text-purple-400">SELECT</span> order_id, <span className="text-blue-400">SUM</span>(net_revenue) <span className="text-purple-400">AS</span> total_order_revenue<br />
              &nbsp;&nbsp;<span className="text-purple-400">FROM</span> fact_sales <span className="text-purple-400">WHERE</span> is_completed = <span className="text-emerald-400">TRUE</span><br />
              &nbsp;&nbsp;<span className="text-purple-400">GROUP BY</span> order_id<br />
              ),<br />
              order_level_payments <span className="text-purple-400">AS</span> (<br />
              &nbsp;&nbsp;<span className="text-purple-400">SELECT</span> order_id, <span className="text-blue-400">SUM</span>(payment_amount) <span className="text-purple-400">AS</span> total_settled_payment<br />
              &nbsp;&nbsp;<span className="text-purple-400">FROM</span> fact_payments fp<br />
              &nbsp;&nbsp;<span className="text-purple-400">JOIN</span> dim_payment dp <span className="text-purple-400">ON</span> fp.payment_key = dp.payment_key<br />
              &nbsp;&nbsp;<span className="text-purple-400">WHERE</span> dp.payment_status = <span className="text-emerald-300">'Completed'</span><br />
              &nbsp;&nbsp;<span className="text-purple-400">GROUP BY</span> order_id<br />
              )<br />
              <span className="text-purple-400">SELECT</span> s.order_id, s.total_order_revenue, p.total_settled_payment<br />
              <span className="text-purple-400">FROM</span> order_level_sales s <span className="text-purple-400">JOIN</span> order_level_payments p <span className="text-purple-400">ON</span> s.order_id = p.order_id;
            </div>

            <div className="text-xs text-blue-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Verified in automated integration test: <code className="font-mono bg-white/70 px-1 rounded text-blue-950">tests/test_database.py::test_fact_to_fact_join_safety_cte</code></span>
            </div>
          </div>

          {/* Deterministic Recovery & Quarantine */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-lg bg-gray-50 border border-gray-200 space-y-2">
              <div className="font-bold text-gray-900 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Deterministic Customer ID Recovery</span>
              </div>
              <p className="text-gray-600 leading-relaxed text-xs">
                In upstream e-commerce logs, customer IDs can be omitted on individual line items due to serialization bugs. Rather than dropping valid data, NovaCart builds an <code className="bg-white px-1 py-0.5 rounded font-mono text-gray-800">order_id → customer_id</code> lookup mapping from valid lines within the same order, deterministically restoring <strong>142 lines</strong> without arbitrary imputation.
              </p>
            </div>

            <div className="p-4 rounded-lg bg-gray-50 border border-gray-200 space-y-2">
              <div className="font-bold text-gray-900 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <span>Audited Quarantine Isolation</span>
              </div>
              <p className="text-gray-600 leading-relaxed text-xs">
                Transactions where <em>all</em> line items lacked customer identity (<strong>68 unrecoverable rows</strong>) were quarantined to <code className="bg-white px-1 py-0.5 rounded font-mono text-gray-800">data/processed/quarantine/orders_quarantine.csv</code> with audit error logging, guaranteeing 0 foreign-key orphans in the warehouse.
              </p>
            </div>
          </div>
        </section>


        {/* =================================================================== */}
        {/* SECTION E: Actual Power BI Dashboard Suite (6 Real Screenshots)     */}
        {/* =================================================================== */}
        <section className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-card space-y-6">
          <div className="border-b border-gray-100 pb-4">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-bold">
                04 · Business Intelligence Suite
              </span>
              <span className="text-xs font-mono text-gray-500 bg-gray-50 px-2 py-0.5 rounded border border-gray-200">
                Click any dashboard to inspect high-res
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-950 mt-1">
              Power BI Dashboard Suite
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Six interactive analytical views covering executive performance, profitability, customer behavior, product performance, regional operations, and customer retention.
            </p>
          </div>

          {/* 6 Responsive Screenshot Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {screenshots.map((s, idx) => (
              <div
                key={s.id}
                onClick={() => setSelectedImage(s)}
                className="group border border-gray-200 rounded-xl overflow-hidden bg-white shadow-subtle hover:border-blue-400 hover:shadow-card transition-all cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
                    <img
                      src={`${import.meta.env.BASE_URL}images/projects/novacart/${s.filename}`}
                      alt={`NovaCart Power BI Dashboard — ${s.title}`}
                      className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                      loading="lazy"
                    />
                    
                    {/* Badge Overlay */}
                    <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded bg-gray-950/80 text-white text-[11px] font-mono backdrop-blur-sm shadow-subtle">
                      Page 0{idx + 1} · {s.title}
                    </div>

                    {/* Hover Zoom Prompt */}
                    <div className="absolute inset-0 bg-blue-950/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-gray-900 text-xs font-semibold shadow-card">
                        <ZoomIn className="w-3.5 h-3.5 text-blue-600" />
                        <span>Inspect Full Resolution</span>
                      </span>
                    </div>
                  </div>

                  <div className="p-4 space-y-1.5">
                    <h3 className="text-sm font-bold text-gray-950 group-hover:text-blue-600 transition-colors">
                      {s.title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {s.focus}
                    </p>
                  </div>
                </div>

                <div className="px-4 py-2.5 bg-gray-50/70 border-t border-gray-100 text-[11px] font-mono text-gray-500 flex items-center justify-between">
                  <span>Power BI Desktop (.pbix)</span>
                  <span className="text-blue-600 font-semibold group-hover:underline">Click to Expand ↗</span>
                </div>
              </div>
            ))}
          </div>

          {/* Lightbox / High-Resolution Image Modal */}
          {selectedImage && (
            <div
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex flex-col items-center justify-center p-3 sm:p-6"
              onClick={() => setSelectedImage(null)}
            >
              <div
                className="bg-white rounded-xl max-w-6xl w-full max-h-[92vh] overflow-hidden flex flex-col shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
                  <div>
                    <div className="text-xs font-mono uppercase text-blue-600 font-bold">
                      Power BI Dashboard Suite · High-Resolution View
                    </div>
                    <h3 className="text-base font-bold text-gray-950">
                      {selectedImage.title}
                    </h3>
                  </div>

                  <button
                    onClick={() => setSelectedImage(null)}
                    className="p-1.5 rounded-md hover:bg-gray-100 text-gray-500 hover:text-gray-900 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Modal Image Area */}
                <div className="flex-1 overflow-auto bg-gray-950 p-2 sm:p-4 flex items-center justify-center">
                  <img
                    src={`${import.meta.env.BASE_URL}images/projects/novacart/${selectedImage.filename}`}
                    alt={selectedImage.title}
                    className="max-h-[75vh] w-auto max-w-full object-contain rounded"
                  />
                </div>

                {/* Modal Caption */}
                <div className="p-4 bg-gray-50 border-t border-gray-200 text-xs text-gray-600">
                  <p className="font-medium text-gray-900 mb-0.5">{selectedImage.caption}</p>
                  <p className="text-[11px] text-gray-500">{selectedImage.focus}</p>
                </div>
              </div>
            </div>
          )}
        </section>


        {/* =================================================================== */}
        {/* SECTION F: Analytical Findings & Metric Definitions                 */}
        {/* =================================================================== */}
        <section className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-card space-y-6">
          <div className="border-b border-gray-100 pb-4">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-bold">
              05 · Analytical Findings & Reconciled Metrics
            </span>
            <h2 className="text-2xl font-bold text-gray-950 mt-1">
              Verified Revenue Hierarchy & Performance Benchmarks
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Every metric below has been reconciled to 100% mathematical precision across PostgreSQL SQL, Power BI DAX, and automated Pytest test fixtures.
            </p>
          </div>

          {/* Revenue Hierarchy Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/50 space-y-1">
              <div className="text-[10px] font-mono text-gray-500 uppercase font-semibold">1. Gross Intent</div>
              <div className="text-lg font-bold text-gray-900">{metrics?.placedRevenue?.label}</div>
              <div className="text-2xl font-extrabold text-gray-950 font-mono">{metrics?.placedRevenue?.value}</div>
              <div className="text-[11px] text-gray-500 pt-1 leading-snug">{metrics?.placedRevenue?.desc}</div>
            </div>

            <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/50 space-y-1">
              <div className="text-[10px] font-mono text-blue-600 uppercase font-semibold">2. Recognized Sales</div>
              <div className="text-lg font-bold text-gray-900">{metrics?.realizedRevenue?.label}</div>
              <div className="text-2xl font-extrabold text-blue-600 font-mono">{metrics?.realizedRevenue?.value}</div>
              <div className="text-[11px] text-gray-500 pt-1 leading-snug">{metrics?.realizedRevenue?.desc}</div>
            </div>

            <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/50 space-y-1">
              <div className="text-[10px] font-mono text-red-600 uppercase font-semibold">3. Customer Returns</div>
              <div className="text-lg font-bold text-gray-900">{metrics?.returnedRevenue?.label}</div>
              <div className="text-2xl font-extrabold text-red-600 font-mono">{metrics?.returnedRevenue?.value}</div>
              <div className="text-[11px] text-gray-500 pt-1 leading-snug">{metrics?.returnedRevenue?.desc}</div>
            </div>

            <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50/30 space-y-1">
              <div className="text-[10px] font-mono text-emerald-700 uppercase font-bold">4. Retained Cash</div>
              <div className="text-lg font-bold text-emerald-950">{metrics?.postReturnRevenue?.label}</div>
              <div className="text-2xl font-extrabold text-emerald-700 font-mono">{metrics?.postReturnRevenue?.value}</div>
              <div className="text-[11px] text-emerald-900 pt-1 leading-snug">{metrics?.postReturnRevenue?.desc}</div>
            </div>
          </div>

          {/* Secondary Metric Benchmarks Table */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
            <div className="p-3.5 rounded-lg bg-gray-50 border border-gray-200">
              <span className="text-[11px] font-mono text-gray-500 uppercase block">Operating Profit</span>
              <span className="text-lg font-extrabold text-gray-950 font-mono">{metrics?.realizedProfit?.value}</span>
              <span className="text-[10px] text-gray-400 block mt-0.5">Fulfilled catalog orders</span>
            </div>

            <div className="p-3.5 rounded-lg bg-gray-50 border border-gray-200">
              <span className="text-[11px] font-mono text-gray-500 uppercase block">Profit Margin</span>
              <span className="text-lg font-extrabold text-emerald-600 font-mono">{metrics?.profitMargin?.value}</span>
              <span className="text-[10px] text-gray-400 block mt-0.5">Realized profit ratio</span>
            </div>

            <div className="p-3.5 rounded-lg bg-gray-50 border border-gray-200">
              <span className="text-[11px] font-mono text-gray-500 uppercase block">Repeat Buyers</span>
              <span className="text-lg font-extrabold text-gray-950 font-mono">{metrics?.repeatShare?.value}</span>
              <span className="text-[10px] text-gray-400 block mt-0.5">3,260 multi-order buyers</span>
            </div>

            <div className="p-3.5 rounded-lg bg-gray-50 border border-gray-200">
              <span className="text-[11px] font-mono text-gray-500 uppercase block">Average Basket</span>
              <span className="text-lg font-extrabold text-gray-950 font-mono">{metrics?.aov?.value}</span>
              <span className="text-[10px] text-gray-400 block mt-0.5">Per fulfilled order</span>
            </div>
          </div>

          {/* Sensitivity Scenario Disclosure */}
          <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-gray-200 text-gray-800 uppercase">
                Modeled Sensitivity Simulation (~₹25.3M)
              </span>
            </div>
            <p className="text-xs text-gray-600 leading-relaxed">
              <strong>Analytical Disclosure:</strong> In addition to baseline metrics, SQL queries in <code className="bg-white px-1 py-0.5 rounded font-mono">sql/analysis/12_business_questions.sql</code> model an illustrative profit sensitivity scenario evaluating the impact of capping promotional discounts in Electronics (₹18.2M modeled upside) and shifting ad capital toward higher-margin Beauty & Apparel categories (₹7.1M modeled upside). This represents an illustrative mathematical sensitivity model, not realized historical savings.
            </p>
          </div>
        </section>


        {/* =================================================================== */}
        {/* SECTION G: Cohort Retention & Advanced SQL                          */}
        {/* =================================================================== */}
        <section className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-card space-y-6">
          <div className="border-b border-gray-100 pb-4">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-bold">
              06 · Cohort Analysis & SQL Intelligence
            </span>
            <h2 className="text-2xl font-bold text-gray-950 mt-1">
              Customer Retention Matrix (<code className="text-blue-700">vw_cohort_retention</code>) & RFM
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Moving beyond vanity acquisition counts to evaluate true customer lifecycle longevity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-lg bg-gray-50 border border-gray-200 space-y-2">
              <div className="font-bold text-gray-900 flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-600" />
                <span>Authoritative Cohort Retention View</span>
              </div>
              <p className="text-gray-600 leading-relaxed text-xs">
                NovaCart implements the database view <code className="bg-white px-1 py-0.5 rounded font-mono text-gray-900 font-bold">public.vw_cohort_retention</code> in PostgreSQL. It groups registered customers by acquisition month, computes order intervals across $M_0$ through $M_{18}$, and outputs retention rates and cohort spend.
              </p>
              <div className="pt-2 text-[11px] font-mono text-gray-500">
                • 383 cohort-retention matrix records validated<br />
                • Retention rates range from 1.23% to 100%<br />
                • Zero invalid month-zero records
              </div>
            </div>

            <div className="p-4 rounded-lg bg-gray-50 border border-gray-200 space-y-2">
              <div className="font-bold text-gray-900 flex items-center gap-2">
                <PieChart className="w-4 h-4 text-blue-600" />
                <span>RFM Quintile Behavioral Segmentation</span>
              </div>
              <p className="text-gray-600 leading-relaxed text-xs">
                Utilizing SQL window functions (<code className="bg-white px-1 py-0.5 rounded font-mono text-gray-800">NTILE(5) OVER(...)</code>), all 3,970 active customers are scored on Recency, Frequency, and Monetary dimensions to construct 4 executive action tiers:
              </p>
              <div className="pt-1 text-[11px] font-mono text-gray-700 space-y-1">
                <div>• <strong>Champions:</strong> High spend, recency &gt; 90 days</div>
                <div>• <strong>Loyal Customers:</strong> High repeat purchase frequency</div>
                <div>• <strong>At-Risk:</strong> Dormant high-spend shoppers</div>
                <div>• <strong>Lost / Hibernating:</strong> Inactive single-order accounts</div>
              </div>
            </div>
          </div>
        </section>


        {/* =================================================================== */}
        {/* SECTION H: Engineering Verification & Test Suite                    */}
        {/* =================================================================== */}
        <section className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-card space-y-6">
          <div className="border-b border-gray-100 pb-4">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-bold">
              07 · Automated Quality Assurance
            </span>
            <h2 className="text-2xl font-bold text-gray-950 mt-1">
              28 Automated Pytest Integration Tests (100% Pass)
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Complete automated test coverage spanning data hygiene, warehouse constraints, financial reconciliations, and REST API endpoints.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-gray-900 text-gray-100 font-mono text-xs overflow-x-auto space-y-1">
            <div className="text-gray-400">$ python -m pytest tests/</div>
            <div className="text-gray-300">tests/test_backend_api.py .........                         [ 32%]</div>
            <div className="text-gray-300">tests/test_cleaning.py ..                                   [ 39%]</div>
            <div className="text-gray-300">tests/test_database.py .......                              [ 64%]</div>
            <div className="text-gray-300">tests/test_features.py .                                    [ 67%]</div>
            <div className="text-gray-300">tests/test_powerbi.py ...                                   [ 78%]</div>
            <div className="text-gray-300">tests/test_sql_analysis.py ....                             [ 92%]</div>
            <div className="text-gray-300">tests/test_validation.py ..                                 [100%]</div>
            <div className="text-emerald-400 font-bold pt-2">
              ======================= 28 passed in 17.50s (100% pass rate) =======================
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs pt-1">
            <div className="p-3 rounded-lg bg-gray-50 border border-gray-200">
              <span className="font-bold text-gray-900 block mb-0.5">Schema Constraints</span>
              <span className="text-gray-600">Surrogate key uniqueness, 0 orphan keys across 104,852 sales lines.</span>
            </div>
            <div className="p-3 rounded-lg bg-gray-50 border border-gray-200">
              <span className="font-bold text-gray-900 block mb-0.5">DAX & SQL Equivalence</span>
              <span className="text-gray-600">Exact mathematical reconciliation between SQL sums and Power BI DAX.</span>
            </div>
            <div className="p-3 rounded-lg bg-gray-50 border border-gray-200">
              <span className="font-bold text-gray-900 block mb-0.5">FastAPI Endpoints</span>
              <span className="text-gray-600">Sub-50ms query latency, parameter filtering, and sanitized health checks.</span>
            </div>
          </div>
        </section>


        {/* =================================================================== */}
        {/* SECTION I: Categorized Technology Stack                             */}
        {/* =================================================================== */}
        <section className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-card space-y-6">
          <div className="border-b border-gray-100 pb-4">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-600 font-bold">
              08 · Technology Stack
            </span>
            <h2 className="text-2xl font-bold text-gray-950 mt-1">
              Categorized Analytics & Cloud Architecture
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="space-y-3">
              <div className="font-mono text-xs uppercase tracking-wider text-gray-500 font-bold border-b border-gray-100 pb-1 flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-blue-600" />
                <span>Data & Warehousing</span>
              </div>
              <ul className="space-y-1.5 text-gray-700">
                {project.techStackCategorized?.dataAndAnalytics.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <div className="font-mono text-xs uppercase tracking-wider text-gray-500 font-bold border-b border-gray-100 pb-1 flex items-center gap-1.5">
                <BarChart3 className="w-3.5 h-3.5 text-blue-600" />
                <span>Business Intelligence</span>
              </div>
              <ul className="space-y-1.5 text-gray-700">
                {project.techStackCategorized?.businessIntelligence.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <div className="font-mono text-xs uppercase tracking-wider text-gray-500 font-bold border-b border-gray-100 pb-1 flex items-center gap-1.5">
                <Server className="w-3.5 h-3.5 text-blue-600" />
                <span>App & Cloud Deployment</span>
              </div>
              <ul className="space-y-1.5 text-gray-700">
                {project.techStackCategorized?.applicationAndCloud.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>


        {/* =================================================================== */}
        {/* SECTION J: Final Call to Action                                     */}
        {/* =================================================================== */}
        <section className="p-8 rounded-xl bg-gradient-to-br from-gray-900 to-gray-950 text-white shadow-xl space-y-6 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-mono uppercase text-blue-400 font-bold tracking-wider">
                Explore The Working Platform
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
                Inspect NovaCart Live or Review the Source Code
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                Test the deployed React dashboard with dynamic multi-attribute global filters or explore the complete repository containing all SQL analyses, DAX measure documentation, and Pytest suites.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-blue-600 text-white hover:bg-blue-500 transition-colors shadow-subtle w-full sm:w-auto"
              >
                <span>Launch Live App</span>
                <ExternalLink className="w-4 h-4" />
              </a>

              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/20 w-full sm:w-auto"
              >
                <GitHubIcon className="w-4 h-4 text-white" />
                <span>GitHub Repository</span>
              </a>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-gray-400">
            <span>Author: Shubh Sharma · Data Analyst | BI & Product Analytics</span>
            <button
              onClick={onClose}
              className="hover:text-white transition-colors font-semibold underline underline-offset-4"
            >
              Return to Portfolio
            </button>
          </div>
        </section>

      </main>
    </div>
  );
}
