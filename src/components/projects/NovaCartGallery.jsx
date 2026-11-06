import React, { useState } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ZoomIn, 
  X
} from 'lucide-react';

export default function NovaCartGallery() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const dashboards = [
    {
      id: 1,
      page: '01',
      title: 'Executive Overview',
      filename: '01_executive_overview.png',
      caption: 'Executive Overview — Revenue, profitability, customers, order status, and regional performance.',
      focus: 'Top-level executive KPIs, monthly realized revenue trendline (2022–2026), regional sales distribution, category profit contribution, and order lifecycle status split.',
      keyMetrics: '₹847.6M Realized Revenue · 30.93% Margin · 3,970 Customers'
    },
    {
      id: 2,
      page: '02',
      title: 'Sales & Profitability',
      filename: '02_sales_profitability.png',
      caption: 'Sales & Profitability — Revenue and profit trends, discount impact, product profitability, and order-status analysis.',
      focus: 'Gross demand vs. realized revenue, monthly realized revenue vs. profit combo tracking, placed revenue by order status, promotional discount depth trendline, and top 10 products by profit.',
      keyMetrics: '₹971.5M Placed Gross · ₹50.87M Returns · Discount Depth Analysis'
    },
    {
      id: 3,
      page: '03',
      title: 'Customer Intelligence',
      filename: '03_customer_intelligence.png',
      caption: 'Customer Intelligence — Customer value, repeat versus one-time buyers, regional contribution, and purchase frequency.',
      focus: 'Active customer count (3,970), repeat customer share (82.12%), customer purchase frequency ranking (top distinct orders), repeat vs. one-time buyer distribution, and regional revenue.',
      keyMetrics: '82.12% Repeat Buyers · 3,260 Multi-Orders · ₹15,452 AOV'
    },
    {
      id: 4,
      page: '04',
      title: 'Product Analytics',
      filename: '04_product_analytics.png',
      caption: 'Product Analytics — Category profitability, product performance, discounting, and margin analysis.',
      focus: 'Catalog performance across 180 SKUs, Category Profitability Matrix, top 10 profit generators, and an interactive Discount % vs. Profit Margin scatter analysis.',
      keyMetrics: '180 SKUs · Beauty (59.5% Margin) vs Electronics (18.6% Margin)'
    },
    {
      id: 5,
      page: '05',
      title: 'Regional Operations',
      filename: '05_regional_operations.png',
      caption: 'Regional Operations — Revenue, profit, order-status mix, and regional category performance.',
      focus: 'Geographic demand across 18 Indian states and 6 macro-regions, top revenue-generating urban centers, uniform return rate tracking, and full Category × Region revenue cross-tabulation.',
      keyMetrics: '18 Indian States · 6 Macro-Regions · 54 Unique Cities'
    },
    {
      id: 6,
      page: '06',
      title: 'Customer Retention & RFM',
      filename: '06_customer_retention_rfm.png',
      caption: 'Customer Retention & RFM — Customer segments, repeat purchasing, cohort retention, and customer value.',
      focus: 'Demographic segment revenue, customer lifetime value table, and an authoritative Monthly Customer Cohort Retention Heatmap Matrix (public.vw_cohort_retention) tracking repeat retention across M0 to M18.',
      keyMetrics: '383 Cohort Records · NTILE(5) RFM Scoring · 18-Month Matrix'
    }
  ];

  const current = dashboards[activeIndex];

  const handlePrev = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev === 0 ? dashboards.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev === dashboards.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-full space-y-4">
      
      {/* Featured Dashboard Viewport */}
      <div 
        onClick={() => setLightboxOpen(true)}
        className="group relative rounded-xl overflow-hidden border border-gray-200 bg-white shadow-card hover:shadow-elevated transition-all duration-300 cursor-pointer"
      >
        <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden">
          <img
            src={`${import.meta.env.BASE_URL}images/projects/novacart/${current.filename}`}
            alt={`NovaCart Dashboard Page ${current.page}: ${current.title}`}
            className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.01]"
            loading="lazy"
          />

          {/* Top Info Bar */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-950/85 backdrop-blur-md text-white text-xs font-mono border border-white/10 shadow-lg">
              <span className="text-blue-400 font-bold">VIEW {current.page} OF 06</span>
              <span className="text-white/40">•</span>
              <span className="font-semibold text-white">{current.title}</span>
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-600/90 backdrop-blur-md text-white text-xs font-semibold shadow-lg group-hover:bg-blue-600 transition-colors">
              <ZoomIn className="w-3.5 h-3.5" />
              <span>Click to Zoom</span>
            </div>
          </div>

          {/* Navigation Arrows on image */}
          <button
            onClick={handlePrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-950/70 hover:bg-slate-950 text-white flex items-center justify-center backdrop-blur-md border border-white/10 opacity-70 group-hover:opacity-100 transition-all z-20 cursor-pointer"
            aria-label="Previous screenshot"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-950/70 hover:bg-slate-950 text-white flex items-center justify-center backdrop-blur-md border border-white/10 opacity-70 group-hover:opacity-100 transition-all z-20 cursor-pointer"
            aria-label="Next screenshot"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Viewport Caption Bar */}
        <div className="p-4 sm:p-5 bg-white border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
          <div className="space-y-1 max-w-2xl">
            <h4 className="text-sm sm:text-base font-bold text-gray-950 flex items-center gap-2">
              <span>{current.title}</span>
              <span className="text-xs font-mono text-gray-500 font-normal">({current.keyMetrics})</span>
            </h4>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {current.focus}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-blue-600 font-semibold bg-blue-50 px-2.5 py-1 rounded border border-blue-200">
              Interactive View
            </span>
          </div>
        </div>
      </div>

      {/* Thumbnail Navigation Strip (All 6 Dashboards) */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
        {dashboards.map((dash, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={dash.id}
              onClick={() => setActiveIndex(index)}
              className={`p-1.5 rounded-lg border text-left transition-all duration-200 cursor-pointer ${
                isActive 
                  ? 'bg-blue-50/80 border-blue-600 shadow-sm ring-1 ring-blue-600' 
                  : 'bg-white border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <div className="aspect-[16/9] w-full rounded overflow-hidden bg-slate-100 mb-1.5 border border-gray-100">
                <img
                  src={`${import.meta.env.BASE_URL}images/projects/novacart/${dash.filename}`}
                  alt={dash.title}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
              </div>
              <div className="text-[10px] font-mono font-bold text-blue-600">{dash.page}</div>
              <div className="text-[11px] font-bold text-gray-900 truncate leading-tight">
                {dash.title}
              </div>
            </button>
          );
        })}
      </div>

      {/* Full-Screen Lightbox Modal */}
      {lightboxOpen && (
        <div 
          onClick={() => setLightboxOpen(false)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col justify-between p-3 sm:p-6 animate-fade-in"
        >
          {/* Lightbox Topbar */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="flex items-center justify-between text-white pb-3 border-b border-white/10"
          >
            <div>
              <div className="text-xs font-mono text-blue-400 font-semibold">
                Page {current.page} of 06 · Power BI Executive Suite
              </div>
              <h3 className="text-lg font-bold text-white mt-0.5">
                {current.title}
              </h3>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-slate-400 hidden sm:inline">
                Press ESC or click outside to close
              </span>
              <button
                onClick={() => setLightboxOpen(false)}
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Lightbox Image Viewport */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="relative flex-1 flex items-center justify-center p-2 sm:p-4 overflow-hidden"
          >
            <img
              src={`${import.meta.env.BASE_URL}images/projects/novacart/${current.filename}`}
              alt={current.title}
              className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg shadow-2xl border border-white/10"
            />

            {/* Previous / Next Lightbox Controls */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center backdrop-blur-md border border-white/20 cursor-pointer shadow-xl transition-all"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center backdrop-blur-md border border-white/20 cursor-pointer shadow-xl transition-all"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Footer Details */}
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-white/5 border border-white/10 rounded-xl p-4 text-xs text-slate-300 max-w-4xl mx-auto w-full flex flex-wrap items-center justify-between gap-3"
          >
            <div>
              <p className="font-semibold text-white mb-0.5">{current.caption}</p>
              <p className="text-slate-400 text-[11px]">{current.focus}</p>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded border border-cyan-400/30">
                {current.keyMetrics}
              </span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
