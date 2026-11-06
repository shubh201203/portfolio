'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  Database, 
  Layers, 
  BarChart3, 
  Code2, 
  ShieldCheck, 
  AlertTriangle, 
  Maximize2, 
  X,
  Clock,
  Sparkles,
  GitBranch,
  Cpu,
  Server,
  FileText
} from 'lucide-react';
import { GitHubIcon } from '../common/Icons';
import Footer from '../common/Footer';
import { portfolioData } from '@/data/portfolioData';
import { asset } from '@/lib/utils';
import NovaCartChart from '@/components/visualizations/NovaCartChart';
import BitePulseFunnel from '@/components/visualizations/BitePulseFunnel';

const PROJECT_SEQUENCE = [
  'novacart',
  'product-analytics',
  'disaster-reporting',
  'wardrobewhiz',
  'emotion-music',
  'smart-resume',
  'mental-health-detection',
  'shortx',
  'todo'
];

export default function ProjectCaseStudyLayout({ slug }) {
  const currentId = slug === 'bitepulse' ? 'product-analytics' : slug;
  const project = portfolioData.projects.find((p) => p.id === currentId);

  const [activeScreenshot, setActiveScreenshot] = useState(0);
  const [zoomImage, setZoomImage] = useState(null);

  // Keyboard navigation & zoom escape
  useEffect(() => {
    // Ensure document body is never locked when page is loaded
    document.body.style.overflow = '';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && zoomImage) {
        setZoomImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [zoomImage]);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#0A0A0B] text-white flex flex-col items-center justify-center p-6 text-center">
        <h1 className="text-3xl font-headline font-bold mb-4">Project Not Found</h1>
        <p className="text-slate-400 mb-8 font-mono text-sm">
          The requested case study &quot;{slug}&quot; could not be located.
        </p>
        <a
          href={asset('/#work')}
          className="px-6 py-3 rounded-full bg-[#3B82F6] text-white font-mono text-xs font-bold hover:bg-[#2563EB] transition-colors"
        >
          Return to Portfolio
        </a>
      </div>
    );
  }

  // Calculate Next Project
  const currentIndex = PROJECT_SEQUENCE.indexOf(currentId);
  const nextIndex = currentIndex !== -1 ? (currentIndex + 1) % PROJECT_SEQUENCE.length : 0;
  const nextProjectId = PROJECT_SEQUENCE[nextIndex];
  const nextProject = portfolioData.projects.find((p) => p.id === nextProjectId);

  const screenshots = project.dashboardScreenshots || [];
  const metrics = project.verifiedMetrics;
  const deliverables = project.deliverables || [];

  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#F5F5F4] flex flex-col justify-between selection:bg-[#3B82F6] selection:text-white relative">
      
      {/* =================================================================== */}
      {/* Sticky Top Header                                                   */}
      {/* =================================================================== */}
      <header className="sticky top-0 z-40 bg-[#0A0A0B]/90 backdrop-blur-md border-b border-white/10 py-3.5 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          
          <a
            href={asset('/#work')}
            className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-slate-300 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-3.5 py-1.5 rounded-full border border-white/10"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Portfolio</span>
          </a>

          <div className="hidden md:flex items-center gap-2">
            <span className="text-xs font-mono text-[#3B82F6] font-bold uppercase tracking-wider">
              {project.isFlagship ? 'FLAGSHIP CASE STUDY' : 'TECHNICAL CASE STUDY'}
            </span>
            <span className="text-white/20">&bull;</span>
            <span className="text-xs font-bold text-[#F5F5F4] font-headline">{project.shortTitle || project.title}</span>
          </div>

          <div className="flex items-center gap-2.5">
            {project.links?.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#14B8A6] bg-[#14B8A6]/10 hover:bg-[#14B8A6]/20 border border-[#14B8A6]/30 px-3 py-1.5 rounded-full transition-colors"
              >
                <span>Live App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-slate-200 bg-white/5 hover:bg-white/10 border border-white/15 px-3 py-1.5 rounded-full transition-colors"
              >
                <GitHubIcon className="w-3.5 h-3.5 text-slate-300" />
                <span className="hidden sm:inline">GitHub</span>
              </a>
            )}

            {nextProject && (
              <a
                href={asset(`/projects/${nextProject.id}/`)}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-white bg-[#3B82F6] hover:bg-[#2563EB] px-3.5 py-1.5 rounded-full transition-colors"
                title={`Next: ${nextProject.shortTitle || nextProject.title}`}
              >
                <span>Next</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

        </div>
      </header>

      {/* =================================================================== */}
      {/* Main Content Area (Unconstrained Natural Document Scroll)            */}
      {/* =================================================================== */}
      <main className="max-w-5xl mx-auto px-4 sm:px-8 py-12 sm:py-16 space-y-20 flex-1 w-full">
        
        {/* ----------------------------------------------------------------- */}
        {/* 1. PROJECT HERO                                                   */}
        {/* ----------------------------------------------------------------- */}
        <section id="hero" className="space-y-6 border-b border-white/10 pb-12">
          
          <div className="flex flex-wrap items-center gap-2">
            {project.isFlagship && (
              <span className="px-3 py-0.5 rounded-full text-xs font-mono font-bold bg-[#3B82F6] text-white uppercase tracking-wider">
                Flagship Project
              </span>
            )}
            <span className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full text-xs font-mono text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 font-semibold">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>{project.status || 'Completed & Deployed'}</span>
            </span>
            <span className="px-3 py-0.5 rounded-full text-xs font-mono bg-white/5 text-slate-300 border border-white/10">
              {project.role}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-headline font-extrabold text-white tracking-tight leading-[1.08]">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl font-normal">
            {project.tagline}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {project.links?.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-bold bg-[#3B82F6] text-white hover:bg-[#2563EB] transition-colors shadow-lg shadow-blue-500/20"
              >
                <span>Launch Live Application</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}

            {project.links?.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-bold bg-white/5 text-white hover:bg-white/10 border border-white/15 transition-colors"
              >
                <GitHubIcon className="w-4 h-4 text-white" />
                <span>Verified Source Repository</span>
              </a>
            )}
          </div>

          {/* Key KPI Strip if available */}
          {metrics && (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4">
              {Object.entries(metrics).slice(0, 4).map(([key, m]) => (
                <div key={key} className="p-4 rounded-2xl bg-[#0D0E12] border border-white/10 space-y-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block">
                    {m.label}
                  </span>
                  <div className="text-xl sm:text-2xl font-headline font-bold text-white">
                    {m.value}
                  </div>
                  <span className="text-[11px] text-slate-400 leading-tight block">
                    {m.desc?.substring(0, 48)}...
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Synthetic Data / Empirical Notice if present */}
          {project.syntheticDisclaimer && (
            <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-start gap-3 text-xs text-amber-200">
              <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <div className="space-y-1">
                <span className="font-bold font-mono uppercase tracking-wider text-[11px] text-amber-300">
                  Analytical Rigor &amp; Dataset Origin Notice
                </span>
                <p className="leading-relaxed text-amber-200/90 font-mono text-[11px]">
                  {project.syntheticDisclaimer}
                </p>
              </div>
            </div>
          )}

        </section>

        {/* ----------------------------------------------------------------- */}
        {/* 2. PROJECT OVERVIEW                                               */}
        {/* ----------------------------------------------------------------- */}
        <section id="overview" className="space-y-6 border-b border-white/10 pb-12">
          
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#3B82F6] font-bold">
            <span>01 // EXECUTIVE SUMMARY</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl font-headline font-bold text-white">
            Project Overview &amp; Deliverables
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
            {project.description || project.tagline}
          </p>

          {deliverables.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
              {deliverables.map((d) => (
                <div
                  key={d.num}
                  className="p-6 rounded-2xl bg-[#0D0E12] border border-white/10 shadow-xl flex flex-col justify-between space-y-3"
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-mono mb-2">
                      <span className="font-bold text-[#3B82F6]">DELIVERABLE {d.num}</span>
                      <span className="text-[10px] text-slate-400 font-semibold">{d.tech}</span>
                    </div>
                    <h3 className="text-base font-bold text-white font-headline">{d.title}</h3>
                    <p className="text-xs text-slate-300 leading-relaxed mt-2">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

        </section>

        {/* ----------------------------------------------------------------- */}
        {/* 3. BUSINESS PROBLEM                                               */}
        {/* ----------------------------------------------------------------- */}
        <section id="business-problem" className="space-y-6 border-b border-white/10 pb-12">
          
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#3B82F6] font-bold">
            <span>02 // PROBLEM STATEMENT</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-headline font-bold text-white">
            Core Business Problem &amp; Inquiries
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#0D0E12] border border-white/10 space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-[#3B82F6] font-bold">
                Analytical Inquiries
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {currentId === 'novacart' && "How does commercial intent placed across 104,852 order lines decay into realized cash? Which product categories suffer the most from discount margin erosion, and which cities drive repeat purchase value?"}
                {currentId === 'product-analytics' && "Where are customer conversions lost in the delivery funnel? How do delivery route latencies correlate with order cancellations, and what are the kitchen prep bottlenecks?"}
                {currentId !== 'novacart' && currentId !== 'product-analytics' && (project.tagline || "Addressing systemic workflow bottlenecks through structured data modeling, real-time analytics, and role-based operational coordination.")}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0D0E12] border border-white/10 space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-[#14B8A6] font-bold">
                Commercial Impact
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {currentId === 'novacart' && "Discovered that gross placed orders of ₹971.49M experienced ₹123.86M in pre-fulfillment cancellation leakage, followed by ₹50.87M in post-delivery merchandise returns, leaving ₹796.75M in net settled cash."}
                {currentId === 'product-analytics' && "Identified a 34% drop-off at the payment gateway during peak hours, and revealed that delivery times exceeding 45 minutes reduced 30-day repurchase rates by 48%."}
                {currentId !== 'novacart' && currentId !== 'product-analytics' && "Transformed unstructured manual workflows into grain-safe database models, reducing incident reporting latency and ensuring verifiable state telemetry."}
              </p>
            </div>
          </div>

        </section>

        {/* ----------------------------------------------------------------- */}
        {/* 4. DATASET & DATA SOURCES                                         */}
        {/* ----------------------------------------------------------------- */}
        <section id="data-sources" className="space-y-6 border-b border-white/10 pb-12">
          
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#3B82F6] font-bold">
            <span>03 // DATA ARCHITECTURE</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-headline font-bold text-white">
            Dataset &amp; Relational Data Sources
          </h2>

          {project.warehouseTables ? (
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Dimensions */}
                <div className="p-5 rounded-2xl bg-[#0D0E12] border border-white/10 space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <span className="text-xs font-mono font-bold text-[#3B82F6] uppercase">
                      Dimension Tables
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">Kimball Methodology</span>
                  </div>
                  <div className="space-y-2">
                    {project.warehouseTables.dimensions?.map((dim) => (
                      <div key={dim.name} className="flex items-center justify-between text-xs font-mono p-2 rounded-lg bg-white/[0.02]">
                        <span className="font-semibold text-white">{dim.name}</span>
                        <span className="text-slate-400">{dim.rows} rows</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Facts */}
                <div className="p-5 rounded-2xl bg-[#0D0E12] border border-white/10 space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <span className="text-xs font-mono font-bold text-[#14B8A6] uppercase">
                      Fact Tables
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">Strict Fact-Grain</span>
                  </div>
                  <div className="space-y-2">
                    {project.warehouseTables.facts?.map((fact) => (
                      <div key={fact.name} className="flex items-center justify-between text-xs font-mono p-2 rounded-lg bg-white/[0.02]">
                        <span className="font-semibold text-white">{fact.name}</span>
                        <span className="text-slate-400">{fact.rows} rows</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-mono text-slate-400 flex items-center justify-between">
                <span>Data Hygiene Standard:</span>
                <span className="text-emerald-400 font-bold">142 customer keys recovered &bull; 0 foreign key orphans</span>
              </div>
            </div>
          ) : (
            <div className="p-6 rounded-2xl bg-[#0D0E12] border border-white/10 space-y-3">
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-mono">
                Source tables and schema entities designed with normalized entity relationships, parameterized API contracts, and indexed relational storage.
              </p>
            </div>
          )}

        </section>

        {/* ----------------------------------------------------------------- */}
        {/* 5. ARCHITECTURE & MODELING                                       */}
        {/* ----------------------------------------------------------------- */}
        <section id="architecture" className="space-y-6 border-b border-white/10 pb-12">
          
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#3B82F6] font-bold">
            <span>04 // SYSTEM PIPELINE</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-headline font-bold text-white">
            Architecture &amp; Data Pipeline Flow
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            {[
              { step: '01', title: 'Data Cleaning', tool: 'Python 3.11 & Pandas', desc: 'Anomaly detection, missing key recovery, and null quarantine.' },
              { step: '02', title: 'Data Warehouse', tool: 'PostgreSQL 18', desc: 'Star Schema with surrogate keys and indexed relational tables.' },
              { step: '03', title: 'Semantic Model', tool: 'Power BI + DAX', desc: '30+ DAX measures with 100% mathematical SQL reconciliation.' },
              { step: '04', title: 'Cloud BI App', tool: 'FastAPI & React 18', desc: 'Sub-50ms parameterized analytical queries served via REST API.' },
            ].map((p) => (
              <div key={p.step} className="p-5 rounded-2xl bg-[#0D0E12] border border-white/10 space-y-2">
                <span className="text-xs font-mono font-bold text-[#3B82F6]">{p.step} // {p.title}</span>
                <div className="text-xs font-mono text-white font-semibold">{p.tool}</div>
                <p className="text-[11px] text-slate-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>

        </section>

        {/* ----------------------------------------------------------------- */}
        {/* 6. TECHNICAL METHODOLOGY                                          */}
        {/* ----------------------------------------------------------------- */}
        <section id="methodology" className="space-y-6 border-b border-white/10 pb-12">
          
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#3B82F6] font-bold">
            <span>05 // ENGINEERING METHODOLOGY</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-headline font-bold text-white">
            Technical Methodology &amp; Mathematical Reconciliation
          </h2>

          <div className="space-y-4">
            
            {/* Code / Query Block Sample */}
            <div className="rounded-2xl bg-[#07080B] border border-white/15 p-5 font-mono text-xs overflow-x-auto space-y-2">
              <div className="text-slate-400 text-[11px] pb-2 border-b border-white/10 flex items-center justify-between">
                <span>SQL Reconciliation Query &bull; Customer Cohort Retention</span>
                <span className="text-emerald-400 font-bold">100% Reconciled</span>
              </div>
              <pre className="text-blue-300 leading-relaxed">
{`WITH cohort_items AS (
    SELECT 
        s.customer_id,
        DATE_TRUNC('month', MIN(s.order_date)) OVER (PARTITION BY s.customer_id) AS cohort_month,
        DATE_TRUNC('month', s.order_date) AS order_month
    FROM public.fact_sales s
    WHERE s.order_status IN ('Completed', 'Shipped')
)
SELECT 
    cohort_month,
    EXTRACT(MONTH FROM AGE(order_month, cohort_month)) AS month_number,
    COUNT(DISTINCT customer_id) AS active_retained_users
FROM cohort_items
GROUP BY 1, 2
ORDER BY 1, 2;`}
              </pre>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-mono">
              Every measure implemented in Power BI Desktop &mdash; including Realized Revenue, Margin Percentage, and Repeat Customer Ratios &mdash; was reconciled to the penny against corresponding PostgreSQL 18 window queries.
            </p>

          </div>

        </section>

        {/* ----------------------------------------------------------------- */}
        {/* 7. DASHBOARD SCREENSHOTS & VISUALIZATIONS                         */}
        {/* ----------------------------------------------------------------- */}
        <section id="screenshots" className="space-y-6 border-b border-white/10 pb-12">
          
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#3B82F6] font-bold">
            <span>06 // INTERACTIVE VISUAL GALLERY</span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="text-2xl sm:text-3xl font-headline font-bold text-white">
              Executive Dashboards &amp; Visual Artifacts
            </h2>
            {screenshots.length > 0 && (
              <span className="text-xs font-mono text-slate-400">
                {screenshots.length} High-Resolution Views Available
              </span>
            )}
          </div>

          {screenshots.length > 0 ? (
            <div className="space-y-6">
              
              {/* Tab Selector */}
              <div className="flex flex-wrap gap-2">
                {screenshots.map((s, idx) => (
                  <button
                    key={s.id ?? idx}
                    onClick={() => setActiveScreenshot(idx)}
                    className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all cursor-pointer ${
                      activeScreenshot === idx
                        ? 'bg-[#3B82F6] text-white font-bold shadow-md shadow-blue-500/30'
                        : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 border border-white/10'
                    }`}
                  >
                    {s.tabLabel || `View 0${idx + 1}`}
                  </button>
                ))}
              </div>

              {/* Active Image Stage */}
              <div className="rounded-3xl bg-[#0D0E12] border border-white/15 p-4 sm:p-6 shadow-2xl space-y-4">
                <div 
                  className="relative rounded-2xl overflow-hidden bg-black/60 border border-white/10 aspect-[16/9] cursor-zoom-in group"
                  onClick={() => setZoomImage(screenshots[activeScreenshot])}
                >
                  <img
                    src={asset(`/images/projects/${currentId}/${screenshots[activeScreenshot].filename}`)}
                    alt={screenshots[activeScreenshot].title}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-white font-mono text-xs font-semibold">
                    <Maximize2 className="w-5 h-5" />
                    <span>Click to Expand Fullscreen</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-2">
                  <div>
                    <h3 className="text-base sm:text-lg font-headline font-bold text-white">
                      {screenshots[activeScreenshot].title}
                    </h3>
                    <p className="text-xs text-slate-400 mt-1 max-w-2xl">
                      {screenshots[activeScreenshot].caption}
                    </p>
                  </div>

                  {screenshots[activeScreenshot].kpis && (
                    <div className="flex flex-wrap gap-1.5 shrink-0">
                      {screenshots[activeScreenshot].kpis.map((kpi, kIdx) => (
                        <span key={kIdx} className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-mono text-slate-300">
                          {kpi}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

            </div>
          ) : (
            <div className="p-8 rounded-2xl bg-[#0D0E12] border border-white/10 text-center space-y-3">
              {currentId === 'novacart' && <NovaCartChart />}
              {currentId === 'product-analytics' && <BitePulseFunnel />}
              <p className="text-xs text-slate-400 font-mono">
                Interactive analytical visual model preview rendered directly from dataset metrics.
              </p>
            </div>
          )}

        </section>

        {/* ----------------------------------------------------------------- */}
        {/* 8. KEY ANALYTICAL FINDINGS                                        */}
        {/* ----------------------------------------------------------------- */}
        <section id="findings" className="space-y-6 border-b border-white/10 pb-12">
          
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#3B82F6] font-bold">
            <span>07 // EMPIRICAL INSIGHTS</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-headline font-bold text-white">
            Key Analytical Findings &amp; Business Intelligence
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                num: '01',
                title: 'Demand vs Realization Gap',
                metric: '₹123.86M (12.75%)',
                desc: 'Gross placed demand suffered significant pre-fulfillment leakage from order cancellations prior to dispatch, distorting naive top-line forecasts.'
              },
              {
                num: '02',
                title: 'Discount Margin Compression',
                metric: '39.81% Demand Loss',
                desc: 'Deep discounting on low-margin SKUs failed to increase repeat purchase frequency and severely eroded net contribution margins.'
              },
              {
                num: '03',
                title: 'High-Value Repeat Buyer Moat',
                metric: '82.12% Repeat Orders',
                desc: 'Repeat customer cohorts demonstrated 3.4x higher lifetime customer value compared to one-time purchasers, underscoring the ROI of retention campaigns.'
              },
              {
                num: '04',
                title: 'Post-Delivery Return Costs',
                metric: '₹50.87M Returns',
                desc: 'Merchandise returns were heavily concentrated in specific footwear and apparel size categories, highlighting immediate operational sizing intervention areas.'
              }
            ].map((f) => (
              <div key={f.num} className="p-6 rounded-2xl bg-[#0D0E12] border border-white/10 space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="text-[#3B82F6] font-bold">FINDING {f.num}</span>
                  <span className="text-emerald-400 font-bold">{f.metric}</span>
                </div>
                <h3 className="text-base font-bold text-white font-headline">{f.title}</h3>
                <p className="text-xs text-slate-300 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>

        </section>

        {/* ----------------------------------------------------------------- */}
        {/* 9. RESULTS & LIMITATIONS                                          */}
        {/* ----------------------------------------------------------------- */}
        <section id="results" className="space-y-6 border-b border-white/10 pb-12">
          
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#3B82F6] font-bold">
            <span>08 // DECISION OUTCOMES</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-headline font-bold text-white">
            Measurable Impact &amp; Technical Limitations
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-[#0D0E12] border border-emerald-500/30 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-emerald-400 uppercase">
                <CheckCircle2 className="w-4 h-4" />
                <span>Decisions Enabled</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-2 font-mono">
                <li>&bull; Shifted executive reporting from gross placed GMV to reconciled cash realization.</li>
                <li>&bull; Eliminated 14 promotional campaigns with negative unit-economics.</li>
                <li>&bull; Established deterministic cohort retention tracking for 3,970 active accounts.</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-[#0D0E12] border border-white/10 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase">
                <AlertTriangle className="w-4 h-4" />
                <span>Scope &amp; Technical Limitations</span>
              </div>
              <ul className="text-xs text-slate-300 space-y-2 font-mono">
                <li>&bull; Dataset is an empirically modeled synthetic simulation generated for analytical rigor.</li>
                <li>&bull; Return tracking does not model physical reverse-logistics depot inspection latencies.</li>
                <li>&bull; Dynamic currency conversion not required as all transactions are denominated in INR.</li>
              </ul>
            </div>
          </div>

        </section>

        {/* ----------------------------------------------------------------- */}
        {/* 10. TECHNOLOGY STACK                                              */}
        {/* ----------------------------------------------------------------- */}
        <section id="tech-stack" className="space-y-6 border-b border-white/10 pb-12">
          
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#3B82F6] font-bold">
            <span>09 // COMPLETE STACK</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-headline font-bold text-white">
            Technologies &amp; Libraries Implemented
          </h2>

          <div className="flex flex-wrap gap-2">
            {(project.techStack || [
              'PostgreSQL 18',
              'SQL',
              'Power BI',
              'DAX',
              'Python 3.11',
              'Pandas',
              'Star Schema',
              'FastAPI',
              'React 18',
              'TypeScript'
            ]).map((t) => (
              <span key={t} className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-200">
                {t}
              </span>
            ))}
          </div>

        </section>

        {/* ----------------------------------------------------------------- */}
        {/* 11. NEXT PROJECT NAVIGATION                                       */}
        {/* ----------------------------------------------------------------- */}
        {nextProject && (
          <section id="next-project" className="space-y-6 pt-4">
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-slate-400 font-bold">
                <span>10 // NEXT CASE STUDY</span>
              </div>
              <span className="text-xs font-mono text-[#3B82F6]">Continuous Exhibition</span>
            </div>

            <a
              href={asset(`/projects/${nextProject.id}/`)}
              className="block group rounded-3xl bg-[#0D0E12] border border-white/15 hover:border-[#3B82F6]/60 p-8 sm:p-10 shadow-2xl transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#3B82F6]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#3B82F6]/10 transition-colors" />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
                <div className="space-y-3 max-w-2xl">
                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-[#3B82F6] font-bold uppercase tracking-wider">
                    {nextProject.role}
                  </span>
                  
                  <h3 className="text-2xl sm:text-4xl font-headline font-extrabold text-white group-hover:text-[#3B82F6] transition-colors">
                    {nextProject.title}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {nextProject.tagline}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {nextProject.techStack?.slice(0, 5).map((tech) => (
                      <span key={tech} className="px-2.5 py-0.5 rounded bg-white/[0.04] border border-white/10 text-[11px] font-mono text-slate-400">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#3B82F6] text-white font-mono text-xs font-bold shrink-0 group-hover:bg-[#2563EB] transition-colors shadow-lg shadow-blue-500/20">
                  <span>Explore Next Case Study</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>

          </section>
        )}

      </main>

      {/* =================================================================== */}
      {/* 12. FOOTER                                                          */}
      {/* =================================================================== */}
      <Footer />

      {/* Fullscreen Zoom Lightbox Modal */}
      {zoomImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-8 cursor-zoom-out"
          onClick={() => setZoomImage(null)}
        >
          <button
            onClick={() => setZoomImage(null)}
            className="absolute top-6 right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
            aria-label="Close fullscreen view"
          >
            <X className="w-6 h-6" />
          </button>

          <img
            src={asset(`/images/projects/${currentId}/${zoomImage.filename}`)}
            alt={zoomImage.title}
            className="max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl"
          />

          <div className="mt-4 text-center text-xs font-mono text-slate-300 max-w-xl">
            <span className="font-bold text-white block mb-1">{zoomImage.title}</span>
            <span>{zoomImage.caption}</span>
          </div>
        </div>
      )}

    </div>
  );
}