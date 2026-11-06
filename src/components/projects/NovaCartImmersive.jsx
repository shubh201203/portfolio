import React, { useState } from 'react';
import { 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  ShieldCheck, 
  ZoomIn, 
  X, 
  ChevronLeft, 
  ChevronRight, 
  BarChart3
} from 'lucide-react';
import { GitHubIcon } from '../common/Icons';
import { portfolioData } from '../../data/portfolioData';

export default function NovaCartImmersive({ onOpenCaseStudy }) {
  const project = portfolioData.projects.find((p) => p.id === 'novacart');
  const [activeScreenIndex, setActiveScreenIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const dashboards = [
    {
      id: 1,
      title: 'Executive Performance & Revenue Realization',
      filename: '01_executive_overview.png',
      badge: 'View 01 · Board Level',
      desc: 'Canonical top-line tracking: monthly realized revenue trendlines (2022–2026), post-return cash reconciliation (−₹50.87M returns), and regional breakdown.',
      metrics: ['₹847.62M Realized Rev', '₹796.75M Post-Return', '54,854 Orders']
    },
    {
      id: 2,
      title: 'Product Margins & Category Profitability',
      filename: '02_sales_profitability.png',
      badge: 'View 02 · Margins',
      desc: 'Detailed gross and operating profit margin analysis across catalog departments, isolating category-level margin leakages from high discount thresholds.',
      metrics: ['30.93% Blended Margin', '₹262.16M Op. Profit', 'Electronics 34.2%']
    },
    {
      id: 3,
      title: 'Order Status & Return Loss Analysis',
      filename: '03_customer_intelligence.png',
      badge: 'View 03 · Quality & Loss',
      desc: 'Tracking 5.57% return claim rate, operational quarantine log breakdown, cancellation patterns, and fulfillment cycle SLA metrics.',
      metrics: ['5.57% Return Rate', '₹50.87M Loss Quarantined', '91.03% Delivery SLA']
    },
    {
      id: 4,
      title: 'Customer RFM & Value Segmentation',
      filename: '04_product_analytics.png',
      badge: 'View 04 · Behavioral RFM',
      desc: 'Behavioral segmentation classifying 3,970 active customers into 5 empirical tiers: Champions, Loyal, Potential, At-Risk, and Lost.',
      metrics: ['3,970 Active Users', '₹15,452 Repeat AOV', '5 RFM Tiers']
    },
    {
      id: 5,
      title: 'Geographic & Regional Logistics',
      filename: '05_regional_operations.png',
      badge: 'View 05 · Logistics',
      desc: 'State-wise India logistics density, courier transit durations, and regional fulfillment profitability across Tier-1, Tier-2, and Tier-3 hubs.',
      metrics: ['28 Indian States', 'Tier-1 42% Volume', 'Avg Transit 3.2 Days']
    },
    {
      id: 6,
      title: '18-Month Customer Cohort Retention Heatmap',
      filename: '06_customer_retention_rfm.png',
      badge: 'View 06 · Cohort Matrix',
      desc: 'Authoritative cohort retention matrix (M0 to M18) backed by PostgreSQL view public.vw_cohort_retention, measuring long-term customer repeat behavior.',
      metrics: ['82.12% Repeat Rate', '18-Month Decay Curve', 'M0–M18 Retention']
    }
  ];

  const currentDash = dashboards[activeScreenIndex];

  return (
    <section id="novacart" className="py-24 border-b border-gray-200/80 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Flagship Header Banner */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 pb-8 border-b border-gray-200">
          <div className="space-y-3 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-blue-600 text-white uppercase tracking-wider shadow-sm">
                Flagship Analytics Case Study
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Completed & Live Deployed</span>
              </span>
              <span className="text-xs font-mono text-gray-500 bg-gray-100 px-2.5 py-1 rounded">
                28/28 Pytest Verified
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight">
              NovaCart — E-Commerce Sales &amp; Customer Analytics Platform
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
              An enterprise-grade analytics engineering system combining Python ETL pipelines, an 8-table PostgreSQL star schema warehouse, a 6-page interactive Power BI dashboard suite, and a live deployed cloud analytics application.
            </p>

            {/* Architecture Stack Badges */}
            <div className="flex flex-wrap gap-2 pt-2">
              {['Python 3.11', 'Pandas', 'PostgreSQL 18 DW', 'Star Schema', 'Power BI Suite', '30+ DAX Measures', 'React 19', 'FastAPI on Render'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-gray-50 text-gray-800 border border-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap sm:flex-col items-stretch gap-3 shrink-0 w-full sm:w-auto">
            <button
              onClick={() => onOpenCaseStudy('novacart')}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-gray-950 text-white hover:bg-blue-600 transition-colors shadow-card active:scale-[0.98] whitespace-nowrap cursor-pointer"
            >
              <span>View Full 7-Stage Case Study</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2.5">
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition-colors"
              >
                <span>Launch Cloud App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold bg-gray-50 text-gray-700 border border-gray-200 hover:bg-gray-100 hover:text-gray-950 transition-colors"
              >
                <GitHubIcon className="w-3.5 h-3.5 text-gray-700" />
                <span>Source Code</span>
              </a>
            </div>
          </div>
        </div>

        {/* 4 Canonical Verified Analytical Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-card hover:border-gray-300 transition-colors">
            <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">Realized Revenue</div>
            <div className="text-2xl sm:text-3xl font-black text-gray-950 font-mono mt-1 tracking-tight">₹847.62M</div>
            <div className="text-xs text-gray-500 mt-1 leading-snug">
              Fulfilled &amp; in-transit orders (Completed + Shipped)
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-blue-200 shadow-card hover:border-blue-400 transition-colors">
            <div className="text-xs font-mono text-blue-700 uppercase tracking-wider font-semibold">Post-Return Net Cash</div>
            <div className="text-2xl sm:text-3xl font-black text-blue-600 font-mono mt-1 tracking-tight">₹796.75M</div>
            <div className="text-xs text-gray-500 mt-1 leading-snug">
              Net cash retained (−₹50.87M settled returns)
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-emerald-200 shadow-card hover:border-emerald-400 transition-colors">
            <div className="text-xs font-mono text-emerald-800 uppercase tracking-wider font-semibold">Operating Margin</div>
            <div className="text-2xl sm:text-3xl font-black text-emerald-600 font-mono mt-1 tracking-tight">30.93%</div>
            <div className="text-xs text-gray-500 mt-1 leading-snug">
              ₹262.16M realized profit across catalog
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-card hover:border-gray-300 transition-colors">
            <div className="text-xs font-mono text-gray-500 uppercase tracking-wider">Repeat Buyer Share</div>
            <div className="text-2xl sm:text-3xl font-black text-gray-950 font-mono mt-1 tracking-tight">82.12%</div>
            <div className="text-xs text-gray-500 mt-1 leading-snug">
              3,260 repeat buyers out of 3,970 active users
            </div>
          </div>
        </div>

        {/* Financial Lifecycle Bridge & Transaction Grain Isolation */}
        <div className="mb-12 p-6 sm:p-7 rounded-3xl bg-[#F5F3EC] border border-[#0A0A0C]/10 space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#0A0A0C]/10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#1D4ED8]" />
              <span className="text-xs font-mono uppercase tracking-wider font-bold text-[#0A0A0C]">
                Financial Lifecycle Waterfall &amp; Transaction Grain Isolation
              </span>
            </div>
            <span className="text-[11px] font-mono text-[#0A0A0C]/60 bg-white px-2.5 py-1 rounded-full border border-[#0A0A0C]/10">
              Zero Join Fan-Out / 100% Reconciled
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-white border border-[#0A0A0C]/10 space-y-1">
              <div className="text-[10px] font-mono uppercase text-[#0A0A0C]/50 font-bold">01. Placed Revenue</div>
              <div className="text-xl font-bold font-mono text-[#0A0A0C]">₹920.45M</div>
              <p className="text-[11px] text-[#0A0A0C]/60">Total gross order value booked at checkout across all sessions.</p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#0A0A0C]/10 space-y-1">
              <div className="text-[10px] font-mono uppercase text-[#0A0A0C]/50 font-bold">02. Realized Revenue</div>
              <div className="text-xl font-bold font-mono text-[#1D4ED8]">₹847.62M</div>
              <p className="text-[11px] text-[#0A0A0C]/60">Orders successfully shipped or completed (excluding cancellations).</p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#0A0A0C]/10 space-y-1">
              <div className="text-[10px] font-mono uppercase text-red-600 font-bold">03. Returned Revenue</div>
              <div className="text-xl font-bold font-mono text-red-600">−₹50.87M</div>
              <p className="text-[11px] text-[#0A0A0C]/60">Customer return claims deducted post-delivery (5.57% return rate).</p>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-[#D8F243] shadow-sm space-y-1">
              <div className="text-[10px] font-mono uppercase text-emerald-700 font-bold">04. Post-Return Net Cash</div>
              <div className="text-xl font-bold font-mono text-emerald-700">₹796.75M</div>
              <p className="text-[11px] text-[#0A0A0C]/60">Net cash retained in business bank accounts yielding ₹262.16M profit.</p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/70 border border-[#0A0A0C]/10 text-xs text-[#0A0A0C]/75 leading-relaxed font-mono">
            <strong>Grain Awareness Standard:</strong> Revenue metrics are computed strictly at <code className="bg-white px-1.5 py-0.5 rounded border border-[#0A0A0C]/10 text-[#0A0A0C] font-bold">fact_sales (sales_key)</code> line-item grain. Returns reside in a separate <code className="bg-white px-1.5 py-0.5 rounded border border-[#0A0A0C]/10 text-[#0A0A0C] font-bold">fact_returns</code> table linked via surrogate keys—preventing Cartesian product fan-out and double-counting across multi-item orders.
          </div>
        </div>

        {/* Interactive Power BI Showcase: 6 High-Res Genuine Views */}
        <div className="bg-[#0B0F19] text-white rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl space-y-8 mb-12">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-1">
                <BarChart3 className="w-4 h-4 text-cyan-400" />
                <span>Interactive Power BI Suite Showcase</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {currentDash.title}
              </h3>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => setLightboxOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs font-mono font-medium border border-white/15 transition-all"
              >
                <ZoomIn className="w-4 h-4 text-cyan-400" />
                <span>Full Resolution Lightbox</span>
              </button>
            </div>
          </div>

          {/* Main Large Dashboard Viewport */}
          <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/15 bg-black/60 shadow-2xl group cursor-pointer" onClick={() => setLightboxOpen(true)}>
            <img
              src={`${import.meta.env.BASE_URL}images/projects/novacart/${currentDash.filename}`}
              alt={currentDash.title}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
              loading="lazy"
            />

            {/* Floating Overlay Badge */}
            <div className="absolute top-4 left-4 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/15 text-xs font-mono text-cyan-300 shadow-md">
              {currentDash.badge}
            </div>

            <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/15 text-xs font-mono text-slate-300 flex items-center gap-2">
              <ZoomIn className="w-3.5 h-3.5 text-cyan-400" />
              <span>Click to Zoom</span>
            </div>
          </div>

          {/* View Details & Metric Highlights */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pt-2">
            <p className="text-slate-300 text-sm leading-relaxed max-w-3xl">
              {currentDash.desc}
            </p>

            <div className="flex flex-wrap items-center gap-2 shrink-0">
              {currentDash.metrics.map((m, idx) => (
                <span key={idx} className="px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono text-emerald-400 font-semibold">
                  {m}
                </span>
              ))}
            </div>
          </div>

          {/* Thumbnail Strip: 6 Views Selector */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-4 border-t border-white/10">
            {dashboards.map((dash, idx) => {
              const isSelected = activeScreenIndex === idx;
              return (
                <button
                  key={dash.id}
                  onClick={() => setActiveScreenIndex(idx)}
                  className={`text-left p-2.5 rounded-xl border transition-all ${
                    isSelected
                      ? 'bg-blue-600/30 border-blue-400 ring-2 ring-blue-500/50 -translate-y-1'
                      : 'bg-white/5 border-white/10 hover:border-white/30 hover:bg-white/10'
                  }`}
                >
                  <div className="aspect-[16/9] rounded-lg overflow-hidden bg-black/40 mb-2 border border-white/10">
                    <img
                      src={`${import.meta.env.BASE_URL}images/projects/novacart/${dash.filename}`}
                      alt={dash.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="text-[10px] font-mono font-bold text-cyan-400 truncate">{dash.badge}</div>
                  <div className="text-[11px] font-bold text-white leading-tight truncate mt-0.5">{dash.title}</div>
                </button>
              );
            })}
          </div>

        </div>

        {/* 3 Core Architecture Deliverables Grid */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <div className="text-xs font-mono uppercase tracking-wider text-gray-500 font-bold flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-600" />
              <span>Three Enterprise Analytics Deliverables</span>
            </div>
            <span className="text-xs text-gray-400 font-mono">100% Production Grade</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-gray-200 bg-gray-50/60 hover:bg-white hover:shadow-card transition-all space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-gray-500">
                <span className="font-bold text-blue-600">DELIVERABLE 01</span>
                <span>Python · PostgreSQL 18</span>
              </div>
              <h4 className="text-base font-bold text-gray-950">Dimensional Analytics Warehouse</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Cleaned and staged 104,852 sales records into an 8-table star schema warehouse with surrogate keys, 0 foreign-key orphans, deterministic customer recovery, and strict fact-grain isolation.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-gray-200 bg-gray-50/60 hover:bg-white hover:shadow-card transition-all space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-gray-500">
                <span className="font-bold text-blue-600">DELIVERABLE 02</span>
                <span>Power BI · 30+ DAX</span>
              </div>
              <h4 className="text-base font-bold text-gray-950">6-Page Business Intelligence Suite</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Engineered an executive decision suite covering realized revenue, return leakage, customer RFM segmentation, logistics transit performance, and 18-month customer cohort decay matrices.
              </p>
            </div>

            <div className="p-6 rounded-2xl border border-gray-200 bg-gray-50/60 hover:bg-white hover:shadow-card transition-all space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-gray-500">
                <span className="font-bold text-blue-600">DELIVERABLE 03</span>
                <span>React 19 · FastAPI · Neon</span>
              </div>
              <h4 className="text-base font-bold text-gray-950">Deployed Cloud Application</h4>
              <p className="text-xs text-gray-600 leading-relaxed">
                Packaged analytical models into a decoupled production web platform with sub-200ms API responses on Render, connected to serverless Neon PostgreSQL and deployed on Vercel.
              </p>
            </div>
          </div>
        </div>

        {/* Synthetic Dataset Notice Banner */}
        <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 flex items-start gap-3 text-xs text-gray-600">
          <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-gray-950 font-semibold">Synthetic Dataset Disclosure:</strong> All figures, customer cohorts, and financial metrics reflect deterministic analysis on an empirically modeled synthetic India-focused e-commerce dataset generated for analytics engineering and business intelligence demonstration. No fabricated commercial outcomes are claimed.
          </p>
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6"
          onClick={() => setLightboxOpen(false)}
        >
          <div className="flex items-center justify-between text-white pb-3 border-b border-white/10">
            <div>
              <div className="text-xs font-mono text-cyan-400">{currentDash.badge}</div>
              <h4 className="text-base sm:text-lg font-bold">{currentDash.title}</h4>
            </div>

            <button
              onClick={() => setLightboxOpen(false)}
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex-1 flex items-center justify-center py-4 overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <img
              src={`${import.meta.env.BASE_URL}images/projects/novacart/${currentDash.filename}`}
              alt={currentDash.title}
              className="max-h-[82vh] max-w-full object-contain rounded-xl shadow-2xl"
            />
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-white/10 text-xs font-mono text-slate-400" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setActiveScreenIndex((prev) => (prev > 0 ? prev - 1 : dashboards.length - 1))}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous View</span>
            </button>

            <span>View {activeScreenIndex + 1} of {dashboards.length}</span>

            <button
              onClick={() => setActiveScreenIndex((prev) => (prev < dashboards.length - 1 ? prev + 1 : 0))}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <span>Next View</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

    </section>
  );
}
