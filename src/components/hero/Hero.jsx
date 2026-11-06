import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  FileText, 
  Terminal, 
  Database, 
  Sparkles, 
  ShieldCheck, 
  ChevronDown,
  Clock,
  Compass
} from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../common/Icons';
import { portfolioData } from '../../data/portfolioData';

export default function Hero() {
  const { personal } = portfolioData;
  const [activeTelemetryTab, setActiveTelemetryTab] = useState('revenue');
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const [istTime, setIstTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      setIstTime(formatted);
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Verified dataset benchmarks
  const telemetryData = {
    revenue: {
      label: 'Revenue & Cash Settled',
      kpis: [
        { title: 'Realized Revenue', value: '₹847.62M', change: '+12.4% YoY', note: 'Fulfilled & Shipped' },
        { title: 'Post-Return Cash', value: '₹796.75M', change: '−₹50.87M', note: 'Net Settled Cash' },
        { title: 'Operating Margin', value: '30.93%', change: '₹262.16M', note: 'Operating Profit' }
      ],
      points: [
        { month: 'Jan', val: 45, label: '₹45.2M' },
        { month: 'Mar', val: 58, label: '₹58.7M' },
        { month: 'May', val: 72, label: '₹72.1M' },
        { month: 'Jul', val: 86, label: '₹86.4M' },
        { month: 'Sep', val: 94, label: '₹94.8M' },
        { month: 'Nov', val: 118, label: '₹118.5M' },
        { month: 'Dec', val: 142, label: '₹142.3M' }
      ],
      sql: `SELECT date_trunc('month', order_date) AS month,\n       SUM(realized_amount) AS realized_rev,\n       SUM(realized_amount - return_amount) AS net_cash\nFROM fact_sales WHERE order_status IN ('Completed', 'Shipped')\nGROUP BY 1 ORDER BY 1;`
    },
    retention: {
      label: 'Customer Retention & Cohorts',
      kpis: [
        { title: 'Repeat Buyer Share', value: '82.12%', change: '3,260 buyers', note: 'Active Customer Base' },
        { title: 'Avg Order Value', value: '₹15,452', change: '+8.1%', note: 'Per Repeat Transaction' },
        { title: 'Return Rate', value: '5.57%', change: 'Contained', note: 'Post-Delivery Returns' }
      ],
      points: [
        { month: 'M0', val: 100, label: '100% Acquired' },
        { month: 'M3', val: 78, label: '78.4% Retained' },
        { month: 'M6', val: 64, label: '64.2% Retained' },
        { month: 'M9', val: 52, label: '52.8% Retained' },
        { month: 'M12', val: 44, label: '44.1% Retained' },
        { month: 'M15', val: 38, label: '38.6% Retained' },
        { month: 'M18', val: 34, label: '34.2% Retained' }
      ],
      sql: `SELECT cohort_month, month_number,\n       retained_customers::float / cohort_size AS retention_rate\nFROM public.vw_cohort_retention\nWHERE cohort_size >= 100 ORDER BY cohort_month, month_number;`
    },
    margins: {
      label: 'Category Profitability',
      kpis: [
        { title: 'Electronics Margin', value: '34.20%', change: 'Top Contributor', note: '₹94.2M Profit' },
        { title: 'Apparel Margin', value: '31.45%', change: 'High Volume', note: '₹82.6M Profit' },
        { title: 'Blended Margin', value: '30.93%', change: '₹262.16M', note: 'Total Operating Margin' }
      ],
      points: [
        { month: 'Q1', val: 28.4, label: '28.4%' },
        { month: 'Q2', val: 29.8, label: '29.8%' },
        { month: 'Q3', val: 31.2, label: '31.2%' },
        { month: 'Q4', val: 32.6, label: '32.6%' },
        { month: 'H1', val: 30.5, label: '30.5%' },
        { month: 'H2', val: 31.4, label: '31.4%' },
        { month: 'Full', val: 30.93, label: '30.93%' }
      ],
      sql: `SELECT p.category_name,\n       SUM(s.realized_amount) AS revenue,\n       SUM(s.realized_profit) / SUM(s.realized_amount) AS profit_margin\nFROM fact_sales s JOIN dim_products p ON s.product_id = p.product_id\nGROUP BY 1 ORDER BY 2 DESC;`
    }
  };

  const current = telemetryData[activeTelemetryTab];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative pt-28 sm:pt-36 pb-20 sm:pb-32 bg-[#060913] text-white overflow-hidden border-b border-white/10">
      
      {/* Ambient Lighting & High-Tech Grid */}
      <div className="absolute inset-0 lab-grid opacity-30 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[450px] bg-gradient-to-b from-blue-600/20 via-cyan-500/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-[-100px] w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Top Status & Verification Ribbon */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-white/10">
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white font-medium">OPEN TO INTERNSHIPS</span>
              <span className="text-white/20">•</span>
              <span className="text-cyan-400">VIT-AP &amp; IIT Madras</span>
            </div>

            {/* Live IST Time & Telemetry Stamp */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-slate-400 backdrop-blur-md">
              <Clock className="w-3 h-3 text-cyan-400" />
              <span className="text-slate-200 font-semibold">{istTime || '20:00:00'} IST</span>
              <span className="text-white/20">|</span>
              <Compass className="w-3 h-3 text-cyan-400" />
              <span>Amaravati 16.5°N · 80.5°E</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-400">
            <span className="px-2.5 py-1 rounded bg-blue-950/70 border border-blue-500/30 text-blue-300 font-semibold">
              4x Microsoft &amp; Google Certified (Oct 2026)
            </span>
            <span className="hidden sm:inline text-white/20">•</span>
            <span className="text-slate-400 hidden sm:inline">100% Deterministic SQL / DAX</span>
          </div>
        </div>

        {/* Main Hero Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Statement: Bold Editorial Typography */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-cyan-400 font-bold">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                <span>The Interactive Data Experience</span>
              </div>

              {/* Central Name Anchor with Genuine Profile Image */}
              <div className="flex items-center gap-4 pt-1">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-cyan-400/50 shadow-glow-blue shrink-0 ring-1 ring-white/20 bg-[#0B0F19]">
                  <img
                    src={`${import.meta.env.BASE_URL}images/profile.jpg`}
                    alt="Shubh Sharma"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-mono uppercase tracking-[0.22em] text-slate-400 block font-semibold">
                    Personal Portfolio &amp; Analytics Lab
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white font-mono flex items-center gap-2">
                    <span>SHUBH SHARMA</span>
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  </h2>
                </div>
              </div>

              {/* Oversized Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]">
                I TURN <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent">COMPLEX DATA</span> INTO CLEAR DECISIONS.
              </h1>

              {/* Professional Positioning Statement */}
              <p className="text-lg sm:text-xl font-medium text-slate-300 tracking-tight">
                Data Analyst <span className="text-cyan-400 font-bold">|</span> Business Intelligence <span className="text-cyan-400 font-bold">|</span> Analytics Engineering
              </p>
            </div>

            {/* Narrative Value Proposition */}
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl font-normal">
              I architect end-to-end data systems: transforming messy clickstreams and operational events into clean star-schema relational warehouses in <strong className="text-white font-semibold">PostgreSQL 18</strong>, formulating grain-safe SQL query suites, and delivering executive <strong className="text-white font-semibold">Power BI / DAX</strong> reporting suites reconciled to mathematical precision.
            </p>

            {/* Core Capability Pills */}
            <div className="flex flex-wrap gap-2 pt-1 text-xs font-mono">
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300">
                PostgreSQL 18 Star Schema
              </span>
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300">
                Power BI (30+ DAX Measures)
              </span>
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300">
                Python & Pandas ETL
              </span>
              <span className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300">
                Cohort & RFM Analytics
              </span>
            </div>

            {/* Magnetic Hero CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={() => scrollTo('novacart')}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold bg-blue-600 text-white hover:bg-blue-500 shadow-glow-blue transition-all active:scale-[0.98] cursor-pointer"
              >
                <span>Explore Flagship Project</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => scrollTo('playground')}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-medium bg-white/10 hover:bg-white/15 text-white border border-white/15 transition-all shadow-subtle active:scale-[0.98]"
              >
                <Sparkles className="w-4 h-4 text-cyan-400" />
                <span>Inside The Data</span>
              </button>

              <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-xl text-xs font-mono text-slate-300 hover:text-white border border-white/10 hover:border-white/20 transition-colors"
              >
                <FileText className="w-4 h-4 text-slate-400" />
                <span>Resume PDF</span>
              </a>
            </div>

            {/* Direct Connect Touchpoints */}
            <div className="flex items-center gap-5 pt-2 text-xs text-slate-400">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
              >
                <LinkedInIcon className="w-4 h-4 text-slate-400" />
                <span>LinkedIn</span>
              </a>
              <span className="text-white/20">•</span>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <GitHubIcon className="w-4 h-4 text-slate-400" />
                <span>GitHub</span>
              </a>
              <span className="text-white/20">•</span>
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors font-mono whitespace-nowrap"
              >
                <span>{personal.email}</span>
              </a>
            </div>

          </div>

          {/* Right Hero Feature: Dynamic Analytical Telemetry Environment */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl border border-white/15 bg-[#0D1322]/90 backdrop-blur-xl p-5 sm:p-6 shadow-2xl relative overflow-hidden space-y-5">
              
              {/* Telemetry Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                  <span className="text-xs font-mono uppercase tracking-wider text-white font-bold">
                    Live Telemetry Canvas
                  </span>
                </div>

                {/* View Switcher Tabs */}
                <div className="flex items-center gap-1 p-1 rounded-lg bg-white/5 border border-white/10 text-xs font-mono">
                  <button
                    onClick={() => { setActiveTelemetryTab('revenue'); setHoveredPoint(null); }}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeTelemetryTab === 'revenue' ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Revenue
                  </button>
                  <button
                    onClick={() => { setActiveTelemetryTab('retention'); setHoveredPoint(null); }}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeTelemetryTab === 'retention' ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Retention
                  </button>
                  <button
                    onClick={() => { setActiveTelemetryTab('margins'); setHoveredPoint(null); }}
                    className={`px-2.5 py-1 rounded transition-colors ${
                      activeTelemetryTab === 'margins' ? 'bg-blue-600 text-white font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Margins
                  </button>
                </div>
              </div>

              {/* Floating KPI Cards Grid */}
              <div className="grid grid-cols-3 gap-2.5">
                {current.kpis.map((kpi, idx) => (
                  <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/10 hover:border-blue-500/40 transition-colors">
                    <div className="text-[10px] font-mono text-slate-400 uppercase truncate">{kpi.title}</div>
                    <div className="text-base sm:text-lg font-black font-mono text-white mt-0.5 tracking-tight">{kpi.value}</div>
                    <div className="text-[10px] text-cyan-400 font-mono mt-0.5 truncate">{kpi.change}</div>
                  </div>
                ))}
              </div>

              {/* Dynamic SVG Visualizer with Interactive Data Points */}
              <div className="relative p-4 rounded-xl bg-black/40 border border-white/10 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                  <span>{current.label}</span>
                  <span className="text-cyan-400 font-bold">
                    {hoveredPoint !== null ? `${current.points[hoveredPoint].month}: ${current.points[hoveredPoint].label}` : 'Hover Points to Inspect'}
                  </span>
                </div>

                <div className="h-32 sm:h-36 w-full relative">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 400 120" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="curveGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#38BDF8" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    {/* Technical horizontal gridlines */}
                    <line x1="0" y1="20" x2="400" y2="20" stroke="rgba(255,255,255,0.08)" strokeDasharray="4 4" />
                    <line x1="0" y1="60" x2="400" y2="60" stroke="rgba(255,255,255,0.08)" strokeDasharray="4 4" />
                    <line x1="0" y1="100" x2="400" y2="100" stroke="rgba(255,255,255,0.08)" strokeDasharray="4 4" />

                    {/* Area fill */}
                    <polygon
                      points={
                        current.points
                          .map((p, i) => `${(i / (current.points.length - 1)) * 400},${110 - (p.val / 150) * 90}`)
                          .join(' ') + ' 400,120 0,120'
                      }
                      fill="url(#curveGradient)"
                    />

                    {/* Interactive Curve Line */}
                    <polyline
                      fill="none"
                      stroke="#38BDF8"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      points={current.points
                        .map((p, i) => `${(i / (current.points.length - 1)) * 400},${110 - (p.val / 150) * 90}`)
                        .join(' ')}
                    />

                    {/* Data Points */}
                    {current.points.map((p, i) => {
                      const cx = (i / (current.points.length - 1)) * 400;
                      const cy = 110 - (p.val / 150) * 90;
                      const isHovered = hoveredPoint === i;

                      return (
                        <g key={i} className="cursor-pointer" onMouseEnter={() => setHoveredPoint(i)}>
                          <circle
                            cx={cx}
                            cy={cy}
                            r={isHovered ? 6 : 3.5}
                            fill={isHovered ? '#38BDF8' : '#FFFFFF'}
                            stroke="#060913"
                            strokeWidth="2"
                            className="transition-all duration-200"
                          />
                        </g>
                      );
                    })}
                  </svg>
                </div>

                {/* X-Axis labels */}
                <div className="flex justify-between text-[10px] font-mono text-slate-400 pt-1">
                  {current.points.map((p, i) => (
                    <span key={i}>{p.month}</span>
                  ))}
                </div>
              </div>

              {/* SQL Source Logic Preview */}
              <div className="p-3 rounded-xl bg-black/60 border border-white/10 font-mono text-[11px] text-slate-300 space-y-1.5">
                <div className="flex items-center justify-between text-[10px] text-cyan-400 uppercase font-semibold">
                  <div className="flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5" />
                    <span>PostgreSQL 18 Analytics Query</span>
                  </div>
                  <span className="text-slate-400">Deterministic</span>
                </div>
                <pre className="text-slate-300 overflow-x-auto text-[10px] sm:text-[11px] leading-relaxed whitespace-pre-wrap">
                  {current.sql}
                </pre>
              </div>

              {/* Verified Synthetic Notice */}
              <div className="text-[11px] font-mono text-slate-400 flex items-center gap-2 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Empirically reconciled against 104,852 records in NovaCart DW.</span>
              </div>

            </div>
          </div>

        </div>

        {/* Custom Scroll Indicator */}
        <div className="pt-16 pb-4 flex flex-col items-center justify-center space-y-2 text-slate-400">
          <span className="text-[11px] font-mono tracking-widest uppercase text-slate-400">Scroll to Explore</span>
          <button
            onClick={() => scrollTo('pipeline')}
            className="p-2 rounded-full border border-white/10 hover:border-white/30 text-slate-400 hover:text-white transition-colors animate-bounce"
            aria-label="Scroll to next section"
          >
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
