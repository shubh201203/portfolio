import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  ExternalLink, 
  Layers, 
  Database, 
  BarChart3, 
  Sparkles, 
  ChevronRight, 
  Maximize2,
  CheckCircle2,
  TrendingUp,
  Users,
  ShieldAlert,
  Calendar,
  Check
} from 'lucide-react';
import { GitHubIcon } from '../common/Icons';
import { portfolioData } from '../../data/portfolioData';

export default function ProjectsExhibition({ onOpenCaseStudy }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeNovaDash, setActiveNovaDash] = useState(0);

  const novaCartScreenshots = [
    {
      id: 0,
      title: 'Executive Overview',
      tabLabel: '01 Executive',
      filename: '01_executive_overview.png',
      caption: 'Top-level KPIs, 2022–2026 revenue trajectory, regional distribution, and order status split.',
      kpis: ['₹847.62M Realized Rev', '30.93% Margin', '82.12% Repeat Rate'],
    },
    {
      id: 1,
      title: 'Sales & Profitability',
      tabLabel: '02 Profitability',
      filename: '02_sales_profitability.png',
      caption: 'Realized revenue vs gross demand, discount margin erosion, and top 10 profit drivers.',
      kpis: ['₹796.75M Settled Cash', '39.81% Demand Loss', '100% SQL Match'],
    },
    {
      id: 2,
      title: 'Customer Intelligence',
      tabLabel: '03 Customers',
      filename: '03_customer_intelligence.png',
      caption: 'Customer purchase frequency, repeat vs one-time distributions, and city-level lifetime value.',
      kpis: ['3,970 Active Customers', '82.12% Repeat Buyers', '156,395 Units'],
    },
    {
      id: 3,
      title: 'Product Analytics',
      tabLabel: '04 Products',
      filename: '04_product_analytics.png',
      caption: '180 SKU category matrix, discount depth vs profit margin scatter analysis, and velocity.',
      kpis: ['180 Catalog SKUs', '5.57% Return Rate', 'Positive Unit Economics'],
    },
    {
      id: 4,
      title: 'Regional Operations',
      tabLabel: '05 Regional',
      filename: '05_regional_operations.png',
      caption: 'Geographic demand across 18 Indian states, delivery status mix, and urban tier splits.',
      kpis: ['18 Indian States', '6 Macro-Regions', 'Tier-1/2/3 Coverage'],
    },
    {
      id: 5,
      title: 'Customer Retention & RFM',
      tabLabel: '06 Cohorts',
      filename: '06_customer_retention_rfm.png',
      caption: 'Monthly customer cohort retention decay heatmap (M0–M18) and NTILE RFM tiers.',
      kpis: ['M0–M18 Retention Matrix', 'RFM Quintiles', 'public.vw_cohort_retention'],
    },
  ];

  const projects = [
    {
      id: 'novacart',
      num: '01',
      title: 'NovaCart — E-Commerce Sales & Customer Analytics Platform',
      shortTitle: 'NovaCart Analytics',
      category: 'analytics',
      categoryLabel: 'Analytics & BI',
      role: 'Flagship Analytics Platform',
      tagline: 'An end-to-end data analytics system: 104,852 sales records staged in an 8-table PostgreSQL 18 star schema, reconciled to 100% precision against a 6-page executive Power BI reporting suite and interactive deployed web application.',
      tech: ['PostgreSQL 18', 'Python', 'Power BI Desktop', 'DAX', 'FastAPI', 'React 19'],
      live: 'https://novacart-analytics.vercel.app/',
      github: 'https://github.com/shubh201203/novacart-analytics',
      isFlagship: true,
      caseStudyId: 'novacart',
    },
    {
      id: 'product-analytics',
      num: '02',
      title: 'BitePulse — Food Delivery Product Analytics Warehouse',
      shortTitle: 'BitePulse Analytics',
      category: 'analytics',
      categoryLabel: 'Analytics & BI',
      role: 'Product Analytics Case Study',
      tagline: 'End-to-end product intelligence pipeline analyzing a 6-step ordering conversion funnel, cohort retention decay (Day 1/7/30 & M0–M18), customer segmentation, and A/B checkout experiment evaluation.',
      tech: ['SQL CTEs', 'PostgreSQL', 'Python', 'Pandas', 'Power BI', 'DAX', 'Funnel Analysis'],
      github: 'https://github.com/shubh201203/portfolio',
      isFlagship: false,
      isSecondaryFeatured: true,
      caseStudyId: 'product-analytics',
    },
    {
      id: 'disaster-reporting',
      num: '03',
      title: 'DIRS — Disaster Intelligence & Response Coordination System',
      shortTitle: 'DIRS Incident Response',
      category: 'systems',
      categoryLabel: 'Systems & AI',
      role: 'B.Tech Capstone Project',
      tagline: 'Full-stack incident reporting platform with role-based coordination pipelines connecting citizens, verified volunteers, NGOs, and municipal authorities with real-time triage status updates.',
      tech: ['Node.js', 'Express', 'React', 'PostgreSQL', 'RBAC Auth', 'Geocoding'],
      github: 'https://github.com/shubh201203/portfolio',
      caseStudyId: 'disaster-reporting',
    },
    {
      id: 'wardrobewhiz',
      num: '04',
      title: 'WardrobeWhiz — AI-Powered Wardrobe Assistant & Computer Vision',
      shortTitle: 'WardrobeWhiz AI',
      category: 'systems',
      categoryLabel: 'Systems & AI',
      role: 'Applied AI & Recommendation',
      tagline: 'Smart apparel organizer leveraging MobileNet computer vision classification for automated garment categorization, paired with color-theory heuristic fallback algorithms and inventory metrics.',
      tech: ['React', 'Node.js', 'MobileNet', 'OpenAI API', 'Firebase', 'Framer Motion'],
      live: 'https://wardrobewhiz.vercel.app/home',
      github: 'https://github.com/shubh201203/wardrobewhiz',
      caseStudyId: 'wardrobewhiz',
    },
    {
      id: 'emotion-music',
      num: '05',
      title: 'Emotion-Driven Beats — Affective Computing & Audio Synthesis',
      shortTitle: 'Emotion-Driven Beats',
      category: 'systems',
      categoryLabel: 'Systems & AI',
      role: 'Affective Computing',
      tagline: 'Affective signal analyzer processing webcam image frames via OpenCV, deterministically mapping emotional warmth vectors to musical Valence, Energy, and Tempo coordinates via the Spotify Web API.',
      tech: ['FastAPI', 'Python', 'OpenCV', 'React', 'Spotify API', 'NumPy'],
      live: 'https://emotion-music-system.vercel.app/',
      github: 'https://github.com/shubh201203/emotion-music-system',
      caseStudyId: 'emotion-music',
    },
    {
      id: 'todo',
      num: '06',
      title: 'TO-DO — High-Integrity Task Management Architecture',
      shortTitle: 'TO-DO Full-Stack',
      category: 'fullstack',
      categoryLabel: 'Full-Stack Apps',
      role: 'Full-Stack Web App',
      tagline: 'Production REST API application with parameterized SQL queries, strict fail-fast connection pooling, live status KPI counters, and 52 passing native automated unit and integration tests.',
      tech: ['Node.js', 'Express', 'PostgreSQL', 'Neon', 'JavaScript', '52 Automated Tests'],
      live: 'https://todo-app-shubh.onrender.com/',
      github: 'https://github.com/shubh201203/TO-DO',
      caseStudyId: 'todo',
    },
  ];

  const filteredProjects = projects.filter((p) => {
    if (activeFilter === 'all') return true;
    return p.category === activeFilter;
  });

  return (
    <section id="work" className="py-24 sm:py-32 bg-[#F6F4ED] text-[#111215] border-b border-[#111215]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="pb-8 border-b border-[#111215]/10 mb-12 sm:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#111215]/60 font-bold mb-3">
              <span className="text-[#111215]">02 / SELECTED WORK</span>
              <span>—</span>
              <span>01 / 06 EXHIBITION</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-extrabold tracking-tight text-[#111215] leading-[1.05]">
              CURATED PROJECTS.<br />
              <span className="text-[#111215]/50">DECISION-GRADE SYSTEMS.</span>
            </h2>
          </div>

          <div className="space-y-4 max-w-md">
            <p className="text-sm font-mono text-[#111215]/70">
              Questions, datasets, systems, and the things I've built around them.
            </p>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 pt-1">
              {[
                { id: 'all', label: 'All Work (6)' },
                { id: 'analytics', label: 'Analytics & BI (2)' },
                { id: 'systems', label: 'Systems & AI (2)' },
                { id: 'fullstack', label: 'Full-Stack Apps (2)' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3 py-1 rounded-full text-xs font-mono transition-all cursor-pointer ${
                    activeFilter === tab.id
                      ? 'bg-[#111215] text-[#F6F4ED] font-bold shadow-sm'
                      : 'bg-white border border-[#111215]/10 text-[#111215]/70 hover:text-[#111215] hover:bg-stone-50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* FEATURED PROJECT 01: NOVACART (FLAGSHIP CURATED EXHIBITION)     */}
        {/* ============================================================== */}
        {(activeFilter === 'all' || activeFilter === 'analytics') && (
          <div className="mb-16 sm:mb-20 rounded-3xl bg-white border border-[#111215]/15 p-6 sm:p-10 shadow-editorial">
            
            {/* Project Meta Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#111215]/10">
              <div className="flex items-center gap-3 font-mono text-xs">
                <span className="px-2.5 py-1 rounded-full bg-[#111215] text-[#D8F243] font-bold">
                  PROJECT 01 // FLAGSHIP
                </span>
                <span className="text-[#111215]/40">•</span>
                <span className="text-[#111215]/70 font-semibold">PostgreSQL 18 Star Schema + Power BI</span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href="https://novacart-analytics.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-[#111215] text-white hover:bg-black transition-colors"
                >
                  <span>Live App</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#D8F243]" />
                </a>

                <a
                  href="https://github.com/shubh201203/novacart-analytics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-white border border-[#111215]/20 text-[#111215] hover:bg-stone-50 transition-colors"
                >
                  <GitHubIcon className="w-3.5 h-3.5 text-[#111215]" />
                  <span>GitHub</span>
                </a>

                <button
                  onClick={() => onOpenCaseStudy('novacart')}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold bg-stone-100 hover:bg-stone-200 text-[#111215] border border-[#111215]/10 transition-colors cursor-pointer"
                >
                  <Maximize2 className="w-3 h-3 text-[#111215]" />
                  <span>Case Study</span>
                </button>
              </div>
            </div>

            {/* Title & Core Narrative */}
            <div className="py-6 sm:py-8 space-y-4">
              <h3 className="text-2xl sm:text-4xl font-headline font-bold text-[#111215] tracking-tight">
                NovaCart — E-Commerce Sales &amp; Customer Analytics Platform
              </h3>
              
              <p className="text-sm sm:text-base text-[#111215]/80 max-w-4xl leading-relaxed">
                An end-to-end analytics platform taking raw multi-source transactional order files, staging 104,852 records in an 8-table relational warehouse in <strong className="text-[#111215]">PostgreSQL 18</strong> with deterministic key recovery, formulating 30+ grain-safe DAX measures in <strong className="text-[#111215]">Power BI</strong>, and achieving 100% mathematical reconciliation across cash flow, revenue, margins, and cohort retention.
              </p>

              {/* Synthetic Dataset Transparency Disclosure */}
              <div className="p-3.5 rounded-2xl bg-[#F6F4ED] border border-[#111215]/10 text-xs font-mono text-[#111215]/75 flex items-start gap-2.5">
                <ShieldAlert className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#111215]">Empirical Rigor Standard:</strong> All figures and behavioral patterns are generated from an empirically modeled synthetic India-focused e-commerce dataset designed to reflect realistic enterprise distribution, cancellation friction, and return dynamics without proprietary data leakage.
                </span>
              </div>
            </div>

            {/* Verified Benchmark Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-4 font-mono">
              <div className="p-4 rounded-2xl bg-[#F6F4ED] border border-[#111215]/10 space-y-0.5">
                <div className="text-[10px] uppercase text-[#111215]/60 font-semibold">Realized Revenue</div>
                <div className="text-xl sm:text-2xl font-bold text-[#111215]">₹847.62M</div>
                <div className="text-[10px] text-emerald-700">100% Reconciled</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#F6F4ED] border border-[#111215]/10 space-y-0.5">
                <div className="text-[10px] uppercase text-[#111215]/60 font-semibold">Settled Cash</div>
                <div className="text-xl sm:text-2xl font-bold text-emerald-800">₹796.75M</div>
                <div className="text-[10px] text-[#111215]/60">Post-Return Net</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#F6F4ED] border border-[#111215]/10 space-y-0.5">
                <div className="text-[10px] uppercase text-[#111215]/60 font-semibold">Gross Margin</div>
                <div className="text-xl sm:text-2xl font-bold text-blue-800">30.93%</div>
                <div className="text-[10px] text-[#111215]/60">Unit Economics</div>
              </div>
              <div className="p-4 rounded-2xl bg-[#F6F4ED] border border-[#111215]/10 space-y-0.5">
                <div className="text-[10px] uppercase text-[#111215]/60 font-semibold">Repeat Customer Share</div>
                <div className="text-xl sm:text-2xl font-bold text-[#111215]">82.12%</div>
                <div className="text-[10px] text-[#111215]/60">3,970 Active Buyers</div>
              </div>
            </div>

            {/* Interactive Power BI Dashboard Exhibition Deck */}
            <div className="mt-6 rounded-2xl border border-[#111215]/15 overflow-hidden bg-[#111215] text-white">
              
              {/* Dashboard Navigation Tabs */}
              <div className="bg-[#16181D] px-3 py-2 border-b border-white/10 flex items-center justify-between overflow-x-auto">
                <div className="flex items-center gap-1 sm:gap-2">
                  {novaCartScreenshots.map((item, idx) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveNovaDash(idx)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all whitespace-nowrap cursor-pointer ${
                        activeNovaDash === idx
                          ? 'bg-[#D8F243] text-[#111215] font-bold shadow-sm'
                          : 'text-white/70 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {item.tabLabel}
                    </button>
                  ))}
                </div>

                <div className="hidden md:flex items-center gap-2 text-xs font-mono text-white/50 pl-4">
                  <span>Page {activeNovaDash + 1} of 6</span>
                </div>
              </div>

              {/* Active Screenshot Display */}
              <div className="relative group cursor-pointer" onClick={() => onOpenCaseStudy('novacart')}>
                <div className="w-full aspect-[16/9] max-h-[580px] bg-[#0A0B0E] flex items-center justify-center overflow-hidden">
                  <img
                    src={`${import.meta.env.BASE_URL}images/projects/novacart/${novaCartScreenshots[activeNovaDash].filename}`}
                    alt={novaCartScreenshots[activeNovaDash].title}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>

                {/* Hover Quick Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 rounded-full bg-white text-[#111215] font-mono text-xs font-bold shadow-2xl flex items-center gap-2">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Expand Complete Analytical Case Study</span>
                  </span>
                </div>
              </div>

              {/* Dashboard Caption & Key Focus */}
              <div className="p-4 sm:p-5 bg-[#16181D] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono">
                <div className="space-y-1">
                  <div className="font-bold text-white flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-[#D8F243]" />
                    <span>Page {activeNovaDash + 1}: {novaCartScreenshots[activeNovaDash].title}</span>
                  </div>
                  <div className="text-white/70 font-normal">
                    {novaCartScreenshots[activeNovaDash].caption}
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {novaCartScreenshots[activeNovaDash].kpis.map((kpi, kIdx) => (
                    <span key={kIdx} className="px-2.5 py-1 rounded-md bg-white/10 text-white/90 text-[11px]">
                      {kpi}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Tech Stack Pills Footer */}
            <div className="pt-6 mt-6 border-t border-[#111215]/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                {projects[0].tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 rounded-full bg-[#F6F4ED] border border-[#111215]/10 text-xs font-mono text-[#111215] font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <button
                onClick={() => onOpenCaseStudy('novacart')}
                className="inline-flex items-center gap-2 text-xs font-mono font-bold text-[#111215] hover:underline cursor-pointer"
              >
                <span>Read Full Technical Architecture →</span>
              </button>
            </div>

          </div>
        )}

        {/* ============================================================== */}
        {/* FEATURED PROJECT 02: BITEPULSE (PRODUCT ANALYTICS WAREHOUSE)   */}
        {/* ============================================================== */}
        {(activeFilter === 'all' || activeFilter === 'analytics') && (
          <div className="mb-16 sm:mb-20 rounded-3xl bg-white border border-[#111215]/15 p-6 sm:p-10 shadow-editorial">
            
            {/* Meta Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#111215]/10">
              <div className="flex items-center gap-3 font-mono text-xs">
                <span className="px-2.5 py-1 rounded-full bg-[#111215] text-white font-bold">
                  PROJECT 02 // MAJOR CASE STUDY
                </span>
                <span className="text-[#111215]/40">•</span>
                <span className="text-[#111215]/70 font-semibold">Product Analytics &amp; Funnel Optimization</span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => onOpenCaseStudy('product-analytics')}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold bg-[#111215] text-white hover:bg-black transition-colors cursor-pointer"
                >
                  <span>Explore Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#D8F243]" />
                </button>
              </div>
            </div>

            {/* Asymmetrical 2-Column Product Case Presentation */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-2xl sm:text-3xl font-headline font-bold text-[#111215] tracking-tight">
                  BitePulse — Food Delivery Product Analytics Warehouse
                </h3>
                
                <p className="text-sm sm:text-base text-[#111215]/80 leading-relaxed font-normal">
                  An end-to-end product analytics pipeline evaluating user acquisition channels, conversion funnels, checkout drop-off friction, M0–M18 cohort retention decay curves, and A/B test experiments for a consumer delivery application.
                </p>

                {/* 6-Step Funnel Visual Representation */}
                <div className="p-4 sm:p-5 rounded-2xl bg-[#F6F4ED] border border-[#111215]/10 space-y-3 font-mono text-xs">
                  <div className="flex items-center justify-between font-bold text-[#111215]">
                    <span>6-Step Ordering Funnel Telemetry</span>
                    <span className="text-blue-700">14.2% Net Conversion</span>
                  </div>

                  <div className="space-y-2">
                    {[
                      { step: '01 App Visit', pct: 100, drop: '0%' },
                      { step: '02 Restaurant View', pct: 64, drop: '-36%' },
                      { step: '03 Add to Cart', pct: 38, drop: '-26%' },
                      { step: '04 Checkout Screen', pct: 24, drop: '-14%' },
                      { step: '05 Payment Gateway', pct: 18, drop: '-6%' },
                      { step: '06 Completed Order', pct: 14.2, drop: '-3.8%' },
                    ].map((item, idx) => (
                      <div key={idx} className="space-y-1">
                        <div className="flex items-center justify-between text-[11px] text-[#111215]/80">
                          <span>{item.step}</span>
                          <span>{item.pct}% ({item.drop})</span>
                        </div>
                        <div className="w-full h-1.5 rounded-full bg-[#111215]/10 overflow-hidden">
                          <div
                            className="h-full bg-[#111215] rounded-full"
                            style={{ width: `${item.pct}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Analytical Highlights */}
              <div className="lg:col-span-5 space-y-3 font-mono text-xs">
                <div className="p-4 rounded-2xl bg-[#F6F4ED] border border-[#111215]/10 space-y-1">
                  <div className="font-bold text-[#111215]">Cohort Retention Decay (M0–M18)</div>
                  <div className="text-[#111215]/70 text-[11px]">
                    Tracking user engagement fall-off by acquisition channel to evaluate long-term unit economics and payback periods.
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#F6F4ED] border border-[#111215]/10 space-y-1">
                  <div className="font-bold text-[#111215]">A/B Testing Framework</div>
                  <div className="text-[#111215]/70 text-[11px]">
                    Statistical hypothesis testing measuring conversion delta, AOV changes, and 95% confidence intervals across checkout UX variants.
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-[#F6F4ED] border border-[#111215]/10 space-y-1">
                  <div className="font-bold text-[#111215]">User Segmentation &amp; RFM Tiers</div>
                  <div className="text-[#111215]/70 text-[11px]">
                    Clustering active cohorts into High-Value, Occasional, At-Risk, and Churned tiers to power targeted re-engagement strategies.
                  </div>
                </div>
              </div>

            </div>

            {/* Stack Footer */}
            <div className="pt-6 border-t border-[#111215]/10 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap items-center gap-2">
                {projects[1].tech.map((t, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-3 py-1 rounded-full bg-[#F6F4ED] border border-[#111215]/10 text-xs font-mono text-[#111215] font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <button
                onClick={() => onOpenCaseStudy('product-analytics')}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#111215] hover:underline cursor-pointer"
              >
                <span>Open Product Analytics Case Study →</span>
              </button>
            </div>

          </div>
        )}

        {/* ============================================================== */}
        {/* EXHIBITION PROJECTS 03 — 06 (COMPACT & DISTINCT CARDS)          */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects
            .filter((p) => !p.isFlagship && !p.isSecondaryFeatured)
            .map((project) => (
              <div
                key={project.id}
                className="rounded-3xl bg-white border border-[#111215]/15 p-6 sm:p-8 shadow-editorial flex flex-col justify-between space-y-6 hover:border-[#111215]/30 transition-all group"
              >
                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#111215]/10 text-xs font-mono">
                    <span className="font-bold text-[#111215]">PROJECT {project.num} // 06</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#F6F4ED] border border-[#111215]/10 text-[#111215]/70 font-semibold">
                      {project.role}
                    </span>
                  </div>

                  {/* Title & Narrative */}
                  <div className="pt-5 space-y-3">
                    <h4 className="text-xl sm:text-2xl font-headline font-bold text-[#111215] tracking-tight group-hover:text-black transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#111215]/75 leading-relaxed font-normal">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Tech Stack Tags */}
                  <div className="pt-5 flex flex-wrap items-center gap-1.5">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-full bg-[#F6F4ED] border border-[#111215]/10 text-[11px] font-mono text-[#111215]/80 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Links */}
                <div className="pt-5 border-t border-[#111215]/10 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-3">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#111215] font-bold hover:underline"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-[#111215]/70 hover:text-[#111215] transition-colors"
                      >
                        <GitHubIcon className="w-3.5 h-3.5" />
                        <span>Code</span>
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => onOpenCaseStudy(project.caseStudyId)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#111215] hover:text-black cursor-pointer"
                  >
                    <span>Details</span>
                    <Maximize2 className="w-3 h-3 text-[#111215]/60" />
                  </button>
                </div>
              </div>
            ))}
        </div>

      </div>
    </section>
  );
}
