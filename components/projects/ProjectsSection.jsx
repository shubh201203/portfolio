'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  Layers, 
  Database, 
  BarChart3, 
  Sparkles, 
  Maximize2,
  CheckCircle2,
  ShieldAlert,
  ExternalLink,
  Code2
} from 'lucide-react';
import { asset } from '@/lib/utils';
import { portfolioData } from '@/data/portfolioData';
import NovaCartChart from '@/components/visualizations/NovaCartChart';
import BitePulseFunnel from '@/components/visualizations/BitePulseFunnel';

export default function ProjectsSection({ onOpenCaseStudy }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeNovaDash, setActiveNovaDash] = useState(0);
  const [activeNovaStep, setActiveNovaStep] = useState(0);
  const [activeBiteStep, setActiveBiteStep] = useState(0);

  const novaCartSteps = [
    {
      num: '01',
      title: 'Problem',
      color: 'text-red-400',
      summary: '39.81% demand drop between gross placed orders and settled cash, obscured by cancellation & return friction.',
      detail: 'Gross placed orders of ₹971.49M experienced ₹123.86M in pre-fulfillment cancellation leakage, followed by ₹50.87M in post-delivery merchandise returns, leaving ₹796.75M in net settled cash.',
      kpi: '39.81% Friction'
    },
    {
      num: '02',
      title: 'Data',
      color: 'text-amber-400',
      summary: '104,852 sales records across 180 SKUs & 3,970 active buyers with missing keys and multi-grain transaction logs.',
      detail: 'Audited source files across orders, payments, customers, products, and fulfillment events. Detected 142 missing customer keys across order items resolved via co-occurring transaction records.',
      kpi: '104,852 Records'
    },
    {
      num: '03',
      title: 'Approach',
      color: 'text-blue-400',
      summary: 'PostgreSQL 18 Star Schema with surrogate keys, deterministic customer key recovery, and 30+ DAX measures.',
      detail: 'Engineered an 8-table relational data warehouse with surrogate integer keys, B-tree indexes, strict fact-grain isolation, and 0 foreign-key orphans between fact_sales and fact_payments.',
      kpi: '8-Table Warehouse'
    },
    {
      num: '04',
      title: 'Insight',
      color: 'text-cyan-400',
      summary: '82.12% repeat buyer share generates 86.4% of total profit, while deep discounting eroded electronics margin by 4.8%.',
      detail: 'Formulated monthly customer cohort retention decay matrices (M0–M18) and NTILE customer lifetime value quintiles. Discovered that repeat customer cohort retention stabilised at 68% after month 3.',
      kpi: '82.12% Repeat Rate'
    },
    {
      num: '05',
      title: 'Impact',
      color: 'text-emerald-400',
      summary: '100% mathematical reconciliation between SQL and Power BI suites, validated by 28 automated Pytest test suites.',
      detail: 'Reconciled ₹796.75M settled cash to the exact rupee between PostgreSQL database queries and Power BI DAX measures, empowering commercial strategy without speculation.',
      kpi: '100.0% Reconciled'
    },
  ];

  const bitePulseSteps = [
    {
      num: '01',
      title: 'Problem',
      color: 'text-red-400',
      summary: 'User drop-off before final checkout payment completion.',
      detail: 'Mobile ordering conversion decay was obscured by aggregate vanity traffic numbers, masking a severe funnel leakage at checkout.',
      kpi: 'Checkout Drop-off'
    },
    {
      num: '02',
      title: 'Data',
      color: 'text-amber-400',
      summary: '240,000 mobile session events across 6 distinct ordering steps.',
      detail: 'Audited timestamped session payloads across App Launch, Menu View, Item Select, Cart Addition, Address Entry, and Payment Settled.',
      kpi: '240K Events'
    },
    {
      num: '03',
      title: 'Approach',
      color: 'text-blue-400',
      summary: 'SQL CTE conversion funnels + M0–M18 cohort retention decay tracking.',
      detail: 'Constructed multi-stage Common Table Expressions with window functions to track step-by-step conversion probabilities and user path latency.',
      kpi: 'SQL CTE Funnel'
    },
    {
      num: '04',
      title: 'Insight',
      color: 'text-cyan-400',
      summary: '26% of visits drop at cart addition due to unoptimized delivery fee cues.',
      detail: 'Identified that unexpected delivery surcharges introduced late in the cart view caused the steepest drop-off in the entire 6-step ordering funnel.',
      kpi: '26% Drop at Cart'
    },
    {
      num: '05',
      title: 'Impact',
      color: 'text-emerald-400',
      summary: 'Designed A/B test framework projecting +2.4% net order completion lift.',
      detail: 'Formulated an upfront delivery fee indicator test framework with statistical power calculations, projecting a +2.4% conversion uplift.',
      kpi: '+2.4% Order Lift'
    },
  ];

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

  const secondaryProjects = [
    {
      id: 'disaster-reporting',
      num: '03',
      title: 'DIRS — Disaster Intelligence & Response Coordination System',
      category: 'systems',
      role: 'B.Tech Capstone Project',
      tagline: 'Multi-role coordination platform connecting citizens, verified volunteers, NGOs, and government administrators with incident tracking, resource triage, and status telemetry.',
      tech: ['React', 'Node.js', 'Express', 'PostgreSQL', 'RBAC Auth', 'Geocoding'],
      github: 'https://github.com/shubh201203/portfolio',
    },
    {
      id: 'wardrobewhiz',
      num: '04',
      title: 'WardrobeWhiz — AI-Powered Wardrobe Assistant & Computer Vision',
      category: 'systems',
      role: 'Applied AI & Recommendation',
      tagline: 'Smart apparel manager using MobileNet computer vision classification for automated taxonomy tagging, paired with color-theory recommendation heuristics and closet inventory balance analytics.',
      tech: ['React', 'Node.js', 'MobileNet', 'OpenAI API', 'Firebase', 'Framer Motion'],
      live: 'https://wardrobewhiz.vercel.app/home',
      github: 'https://github.com/shubh201203/wardrobewhiz',
    },
    {
      id: 'emotion-music',
      num: '05',
      title: 'Emotion-Driven Beats — Affective Computing & Audio Synthesis',
      category: 'systems',
      role: 'Affective Computing',
      tagline: 'Affective signal analyzer processing webcam frames via OpenCV, mapping emotional warmth distributions into normalized musical Valence, Energy, and Tempo coordinates via the Spotify Web API.',
      tech: ['FastAPI', 'Python', 'OpenCV', 'React', 'Spotify API', 'NumPy'],
      live: 'https://emotion-music-system.vercel.app/',
      github: 'https://github.com/shubh201203/emotion-music-system',
    },
    {
      id: 'todo',
      num: '06',
      title: 'TO-DO — High-Integrity Task Management Architecture',
      category: 'fullstack',
      role: 'Full-Stack Development',
      tagline: 'Production REST API application with parameterized SQL queries, strict fail-fast connection pooling, live status KPI counters, and 52 passing native automated unit and integration tests.',
      tech: ['Node.js', 'Express', 'PostgreSQL', 'Neon', 'JavaScript', '52 Automated Tests'],
      live: 'https://todo-app-shubh.onrender.com/',
      github: 'https://github.com/shubh201203/TO-DO',
    },
  ];

  return (
    <section id="work" className="py-16 sm:py-20 bg-[#07080B] text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="pb-6 border-b border-white/10 mb-8 sm:mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.24em] text-blue-400 font-bold mb-3">
              <span>02 // SELECTED WORK</span>
              <span className="text-white/20">•</span>
              <span>CURATED CASE STUDIES</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-headline font-extrabold tracking-tight text-white leading-[1.02]">
              Systems, Schemas &amp;<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white">
                Decision-Grade Dashboards.
              </span>
            </h2>
          </div>

          <div className="space-y-4 max-w-md">
            <p className="text-sm font-mono text-slate-400">
              Questions, datasets, systems, and the things I've built around them.
            </p>

            {/* Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 pt-1 font-mono text-xs">
              {[
                { id: 'all', label: 'All Work (6)' },
                { id: 'analytics', label: 'Analytics & BI (2)' },
                { id: 'systems', label: 'Systems & AI (2)' },
                { id: 'fullstack', label: 'Full-Stack Apps (2)' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-3 py-1 rounded-full transition-all cursor-pointer ${
                    activeFilter === tab.id
                      ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-600/30'
                      : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
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
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-10 rounded-3xl bg-[#0B0E17] border border-white/15 p-6 sm:p-10 shadow-2xl relative overflow-hidden space-y-6"
          >
            {/* Meta Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10">
              <div className="flex items-center gap-3 font-mono text-xs">
                <span className="px-3 py-1 rounded-full bg-blue-600 text-white font-bold shadow-sm">
                  PROJECT 01 // FLAGSHIP
                </span>
                <span className="text-white/20">•</span>
                <span className="text-blue-300 font-semibold">PostgreSQL 18 Star Schema + Power BI</span>
              </div>

              <div className="flex items-center gap-3 font-mono text-xs">
                <a
                  href="https://novacart-analytics.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-bold bg-white text-gray-950 hover:bg-blue-400 transition-colors"
                >
                  <span>Live App</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href="https://github.com/shubh201203/novacart-analytics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-semibold bg-white/10 border border-white/15 text-white hover:bg-white/20 transition-colors"
                >
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 text-slate-400" />
                </a>

                <a
                  href={asset('/projects/novacart/')}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-semibold bg-blue-500/15 border border-blue-500/30 text-blue-300 hover:bg-blue-500/25 transition-colors"
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                  <span>View Case Study</span>
                </a>
              </div>
            </div>

            {/* Title & Core Narrative */}
            <div className="space-y-4">
              <h3 className="text-2xl sm:text-4xl font-headline font-bold text-white tracking-tight">
                NovaCart — E-Commerce Sales &amp; Customer Analytics Platform
              </h3>
              
              <p className="text-sm sm:text-base text-slate-300 max-w-4xl leading-relaxed">
                An end-to-end analytics platform taking raw multi-source transactional order files, staging 104,852 records in an 8-table relational warehouse in <strong className="text-white">PostgreSQL 18</strong> with deterministic key recovery, formulating 30+ grain-safe DAX measures in <strong className="text-white">Power BI</strong>, and achieving 100% mathematical reconciliation across cash flow, revenue, margins, and cohort retention.
              </p>

              {/* Synthetic Dataset Transparency Disclosure */}
              <div className="p-4 rounded-2xl bg-blue-950/40 border border-blue-500/20 text-xs font-mono text-blue-200 flex items-start gap-3">
                <ShieldAlert className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white font-bold">Empirical Rigor Standard:</strong> All figures and behavioral patterns are generated from an empirically modeled synthetic India-focused e-commerce dataset designed to reflect realistic enterprise distribution, cancellation friction, and return dynamics without proprietary data leakage.
                </span>
              </div>
            </div>

            {/* 5-Step Interactive Case-Study Framework: Problem → Data → Approach → Insight → Impact */}
            <div className="space-y-3 pt-2">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="text-xs font-mono uppercase tracking-wider text-[#3B82F6] font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#14B8A6]" />
                  <span>CASE STUDY SEQUENCE // SELECT STEP (01–05) TO INSPECT</span>
                </div>
                <span className="text-[11px] font-mono text-slate-500">
                  Step {activeNovaStep + 1} of 5 Active
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 font-mono text-xs" role="tablist" aria-label="NovaCart Case Study Steps">
                {novaCartSteps.map((step, idx) => {
                  const isSelected = activeNovaStep === idx;
                  return (
                    <button
                      key={step.num}
                      type="button"
                      role="tab"
                      aria-selected={isSelected}
                      tabIndex={0}
                      onClick={() => setActiveNovaStep(idx)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          setActiveNovaStep(idx);
                        }
                      }}
                      className={`text-left p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 cursor-pointer space-y-1.5 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] ${
                        isSelected
                          ? 'bg-blue-600/15 border-[#3B82F6] ring-1 ring-[#3B82F6]/50 shadow-lg shadow-[#3B82F6]/20'
                          : 'bg-white/5 border-white/10 hover:border-white/25 hover:bg-white/[0.08]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-[10px] uppercase font-bold ${step.color}`}>
                          {step.num}. {step.title}
                        </span>
                        {isSelected && (
                          <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
                        )}
                      </div>
                      <div className={`leading-snug transition-colors ${isSelected ? 'text-white font-medium' : 'text-slate-300'}`}>
                        {step.summary}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Active Step Detailed Breakdown Panel */}
              <motion.div
                key={`nova-step-${activeNovaStep}`}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="p-4 rounded-2xl bg-blue-950/30 border border-blue-500/30 text-xs font-mono text-slate-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-inner"
              >
                <div className="space-y-1">
                  <div className="text-blue-400 font-bold uppercase tracking-wider flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] animate-pulse" />
                    <span>STEP {novaCartSteps[activeNovaStep].num} // {novaCartSteps[activeNovaStep].title.toUpperCase()} SPECIFICATION</span>
                  </div>
                  <div className="text-slate-200 leading-relaxed">{novaCartSteps[activeNovaStep].detail}</div>
                </div>
                <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-300 font-bold shrink-0 text-[11px]">
                  {novaCartSteps[activeNovaStep].kpi}
                </span>
              </motion.div>
            </div>

            {/* Recharts Financial Trajectory Visual */}
            <NovaCartChart />

            {/* Verified Benchmark Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-0.5">
                <div className="text-[10px] uppercase text-slate-400 font-semibold">Realized Revenue</div>
                <div className="text-xl sm:text-2xl font-bold text-white">₹847.62M</div>
                <div className="text-[10px] text-emerald-400 font-semibold">100% Reconciled</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-0.5">
                <div className="text-[10px] uppercase text-slate-400 font-semibold">Settled Cash</div>
                <div className="text-xl sm:text-2xl font-bold text-emerald-400">₹796.75M</div>
                <div className="text-[10px] text-slate-400">Post-Return Net</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-0.5">
                <div className="text-[10px] uppercase text-slate-400 font-semibold">Gross Margin</div>
                <div className="text-xl sm:text-2xl font-bold text-blue-400">30.93%</div>
                <div className="text-[10px] text-slate-400">Unit Economics</div>
              </div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-0.5">
                <div className="text-[10px] uppercase text-slate-400 font-semibold">Repeat Buyers</div>
                <div className="text-xl sm:text-2xl font-bold text-cyan-300">82.12%</div>
                <div className="text-[10px] text-slate-400">3,970 Active Buyers</div>
              </div>
            </div>

            {/* Interactive Power BI Dashboard Previewer Deck */}
            <div className="rounded-2xl border border-white/15 overflow-hidden bg-[#07090E]">
              
              {/* Tab Navigation */}
              <div className="bg-[#101420] px-3 py-2 border-b border-white/10 flex items-center justify-between overflow-x-auto">
                <div className="flex items-center gap-1 sm:gap-2">
                  {novaCartScreenshots.map((item, idx) => (
                    <button
                      key={item.id}
                      onClick={() => setActiveNovaDash(idx)}
                      className={`px-3 py-1.5 rounded-xl text-xs font-mono font-medium transition-all whitespace-nowrap cursor-pointer ${
                        activeNovaDash === idx
                          ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-600/30'
                          : 'text-slate-400 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {item.tabLabel}
                    </button>
                  ))}
                </div>

                <div className="hidden md:flex items-center gap-2 text-xs font-mono text-slate-400 pl-4">
                  <span>Page {activeNovaDash + 1} of 6</span>
                </div>
              </div>

              {/* Active Screenshot Display */}
              <div className="relative group cursor-pointer" onClick={() => onOpenCaseStudy('novacart')}>
                <div className="w-full aspect-[16/9] max-h-[580px] bg-[#050608] flex items-center justify-center overflow-hidden">
                  <img
                    src={asset(`/images/projects/novacart/${novaCartScreenshots[activeNovaDash].filename}`)}
                    alt={novaCartScreenshots[activeNovaDash].title}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>

                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="px-4 py-2 rounded-full bg-white text-gray-950 font-mono text-xs font-bold shadow-2xl flex items-center gap-2">
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>Expand Full NovaCart Case Study Modal</span>
                  </span>
                </div>
              </div>

              {/* Dashboard Caption */}
              <div className="p-4 sm:p-5 bg-[#0F131D] border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs font-mono">
                <div className="space-y-1">
                  <div className="font-bold text-white flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-blue-400" />
                    <span>Page {activeNovaDash + 1}: {novaCartScreenshots[activeNovaDash].title}</span>
                  </div>
                  <div className="text-slate-400 font-normal">
                    {novaCartScreenshots[activeNovaDash].caption}
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  {novaCartScreenshots[activeNovaDash].kpis.map((kpi, kIdx) => (
                    <span key={kIdx} className="px-2.5 py-1 rounded-md bg-white/10 text-slate-200 text-[11px]">
                      {kpi}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Tech Stack Pills Footer */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
              <div className="flex flex-wrap items-center gap-2">
                {['PostgreSQL 18', 'Python', 'Power BI Desktop', 'DAX', 'FastAPI', 'React 19'].map((t, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={asset('/projects/novacart/')}
                className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-bold"
              >
                <span>Examine Technical Schema &amp; Pytest Logs &rarr;</span>
              </a>
            </div>

          </motion.div>
        )}

        {/* ============================================================== */}
        {/* FEATURED PROJECT 02: BITEPULSE (PRODUCT ANALYTICS WAREHOUSE)   */}
        {/* ============================================================== */}
        {(activeFilter === 'all' || activeFilter === 'analytics') && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 sm:mb-10 rounded-3xl bg-[#0B0E17] border border-white/15 p-6 sm:p-10 shadow-2xl relative space-y-6"
          >
            {/* Meta Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 font-mono text-xs">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full bg-blue-600 text-white font-bold shadow-sm">
                  PROJECT 02 // MAJOR CASE STUDY
                </span>
                <span className="text-white/20">•</span>
                <span className="text-blue-300 font-semibold">Product Analytics &amp; Funnel Optimization</span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={asset('/projects/product-analytics/')}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-bold bg-white text-gray-950 hover:bg-blue-400 transition-colors"
                >
                  <span>Explore Case Study</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Narrative & Recharts Funnel Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-2xl sm:text-3xl font-headline font-bold text-white tracking-tight">
                  BitePulse — Food Delivery Product Analytics Warehouse
                </h3>
                
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  End-to-end product intelligence pipeline analyzing a 6-step ordering conversion funnel, cohort retention decay (Day 1/7/30 &amp; M0–M18), customer segmentation, and A/B checkout experiment evaluation.
                </p>

                {/* 5-Step Interactive Case-Study Framework: Problem → Data → Approach → Insight → Impact */}
                <div className="space-y-3 pt-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="text-xs font-mono uppercase tracking-wider text-[#3B82F6] font-bold flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#14B8A6]" />
                      <span>CASE STUDY SEQUENCE // SELECT STEP (01–05) TO INSPECT</span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-500">
                      Step {activeBiteStep + 1} of 5 Active
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 font-mono text-xs" role="tablist" aria-label="BitePulse Case Study Steps">
                    {bitePulseSteps.map((step, idx) => {
                      const isSelected = activeBiteStep === idx;
                      return (
                        <button
                          key={step.num}
                          type="button"
                          role="tab"
                          aria-selected={isSelected}
                          tabIndex={0}
                          onClick={() => setActiveBiteStep(idx)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              setActiveBiteStep(idx);
                            }
                          }}
                          className={`text-left p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer space-y-1 focus:outline-none focus:ring-2 focus:ring-[#3B82F6] ${
                            isSelected
                              ? 'bg-blue-600/15 border-[#3B82F6] ring-1 ring-[#3B82F6]/50 shadow-lg shadow-[#3B82F6]/20'
                              : 'bg-white/5 border-white/10 hover:border-white/25 hover:bg-white/[0.08]'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <span className={`text-[10px] uppercase font-bold ${step.color}`}>
                              {step.num}. {step.title}
                            </span>
                            {isSelected && (
                              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
                            )}
                          </div>
                          <div className={`text-[11px] leading-snug transition-colors ${isSelected ? 'text-white font-medium' : 'text-slate-300'}`}>
                            {step.summary}
                          </div>
                        </button>
                      );
                    })}
                  </div>

                  {/* Active Step Detailed Breakdown Panel */}
                  <motion.div
                    key={`bite-step-${activeBiteStep}`}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className="p-3.5 rounded-2xl bg-blue-950/30 border border-blue-500/30 text-xs font-mono text-slate-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-inner"
                  >
                    <div className="space-y-1">
                      <div className="text-blue-400 font-bold uppercase tracking-wider flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] animate-pulse" />
                        <span>STEP {bitePulseSteps[activeBiteStep].num} // {bitePulseSteps[activeBiteStep].title.toUpperCase()} SPECIFICATION</span>
                      </div>
                      <div className="text-slate-200 leading-relaxed text-[11px]">{bitePulseSteps[activeBiteStep].detail}</div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-blue-500/20 border border-blue-500/40 text-blue-300 font-bold shrink-0 text-[10px]">
                      {bitePulseSteps[activeBiteStep].kpi}
                    </span>
                  </motion.div>
                </div>

                {/* Recharts Funnel Chart */}
                <BitePulseFunnel />
              </div>

              {/* Right Column: Key Modules */}
              <div className="lg:col-span-5 space-y-3 font-mono text-xs">
                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <div className="font-bold text-white">Cohort Retention Decay (M0–M18)</div>
                  <div className="text-slate-400 text-[11px]">
                    Tracking user engagement fall-off by acquisition channel to evaluate long-term unit economics and payback periods.
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <div className="font-bold text-white">A/B Testing Framework</div>
                  <div className="text-slate-400 text-[11px]">
                    Statistical hypothesis testing measuring conversion delta, AOV changes, and 95% confidence intervals across checkout UX variants.
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
                  <div className="font-bold text-white">User Segmentation &amp; RFM Tiers</div>
                  <div className="text-slate-400 text-[11px]">
                    Clustering active cohorts into High-Value, Occasional, At-Risk, and Churned tiers to power targeted re-engagement strategies.
                  </div>
                </div>
              </div>

            </div>

            {/* Stack Footer */}
            <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
              <div className="flex flex-wrap items-center gap-2">
                {['SQL CTEs', 'PostgreSQL', 'Python', 'Pandas', 'Power BI', 'DAX', 'Funnel Analysis'].map((t, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href={asset('/projects/product-analytics/')}
                className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 font-bold"
              >
                <span>Open Product Analytics Case Study &rarr;</span>
              </a>
            </div>

          </motion.div>
        )}

        {/* ============================================================== */}
        {/* EXHIBITION PROJECTS 03 — 06 (COMPACT & DISTINCT CARDS)          */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {secondaryProjects
            .filter((p) => activeFilter === 'all' || p.category === activeFilter)
            .map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-3xl bg-[#0B0E17] border border-white/15 p-6 sm:p-8 shadow-2xl flex flex-col justify-between space-y-6 hover:border-blue-500/40 transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 text-xs font-mono">
                    <span className="font-bold text-blue-400">PROJECT {project.num} // 06</span>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300 font-semibold">
                      {project.role}
                    </span>
                  </div>

                  <div className="pt-5 space-y-3">
                    <h4 className="text-xl sm:text-2xl font-headline font-bold text-white tracking-tight group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                      {project.tagline}
                    </p>
                  </div>

                  <div className="pt-5 flex flex-wrap items-center gap-1.5">
                    {project.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300 font-medium"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-5 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-3">
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-white font-bold hover:underline"
                      >
                        <span>Live Demo</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-blue-400" />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-slate-400 hover:text-white transition-colors"
                      >
                        <span>GitHub</span>
                        <ExternalLink className="w-3 h-3 text-slate-500" />
                      </a>
                    )}
                  </div>

                  <a
                    href={asset(`/projects/${project.id}/`)}
                    className="inline-flex items-center gap-1 text-xs font-bold text-blue-400 hover:text-blue-300"
                  >
                    <span>Inspect System</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
}
