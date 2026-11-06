'use client';

import React, { useState, useEffect } from 'react';
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
  FileText,
  Smartphone,
  UserCheck,
  Building2,
  Landmark
} from 'lucide-react';
import { GitHubIcon } from '../common/Icons';
import Footer from '../common/Footer';
import { getProjectBySlug, allProjects } from '@/data/projects';
import { asset } from '@/lib/utils';
import NovaCartChart from '@/components/visualizations/NovaCartChart';
import BitePulseFunnel from '@/components/visualizations/BitePulseFunnel';

const PROJECT_SEQUENCE = [
  'novacart',
  'bitepulse',
  'disaster-reporting',
  'wardrobewhiz',
  'emotion-music',
  'todo',
  'smart-resume',
  'mental-health-detection',
  'shortx'
];

export default function ProjectCaseStudyLayout({ slug }) {
  const project = getProjectBySlug(slug);

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
  const normalizedCurrentSlug = project.slug || project.id;
  const currentSeqId = (slug === 'dirs' || slug === 'disaster-reporting') 
    ? 'disaster-reporting' 
    : (slug === 'product-analytics' || slug === 'bitepulse') 
      ? 'bitepulse' 
      : normalizedCurrentSlug;

  const currentIndex = PROJECT_SEQUENCE.indexOf(currentSeqId);
  const nextIndex = currentIndex !== -1 ? (currentIndex + 1) % PROJECT_SEQUENCE.length : 0;
  const nextProjectId = PROJECT_SEQUENCE[nextIndex];
  const nextProject = getProjectBySlug(nextProjectId);

  const screenshots = project.dashboardScreenshots || [];
  const hasScreenshots = Array.isArray(screenshots) && screenshots.length > 0;
  const hasCustomVisual = project.hasCustomVisual;
  const showVisualGallery = hasScreenshots || hasCustomVisual;

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
                href={asset(`/projects/${nextProject.slug || nextProject.id}/`)}
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

          {/* Key KPI Strip if available for this specific project */}
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
                  <span className="text-[11px] text-slate-400 leading-tight block font-mono">
                    {m.desc?.substring(0, 52)}...
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
                    <p className="text-xs text-slate-300 leading-relaxed mt-2 font-mono">{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

        </section>

        {/* ----------------------------------------------------------------- */}
        {/* 3. PROBLEM STATEMENT                                              */}
        {/* ----------------------------------------------------------------- */}
        <section id="business-problem" className="space-y-6 border-b border-white/10 pb-12">
          
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#3B82F6] font-bold">
            <span>02 // PROBLEM STATEMENT</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-headline font-bold text-white">
            Core Problem &amp; Inquiries
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-2xl bg-[#0D0E12] border border-white/10 space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-[#3B82F6] font-bold">
                Analytical &amp; Technical Inquiries
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-mono">
                {project.problemStatement?.inquiries || project.tagline}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0D0E12] border border-white/10 space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-[#14B8A6] font-bold">
                Operational &amp; Business Impact
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-mono">
                {project.problemStatement?.commercialImpact || project.description}
              </p>
            </div>
          </div>

        </section>

        {/* ----------------------------------------------------------------- */}
        {/* 4. DATASET & RELATIONAL ARCHITECTURE (Rendered when applicable)    */}
        {/* ----------------------------------------------------------------- */}
        {project.warehouseTables && (
          <section id="data-sources" className="space-y-6 border-b border-white/10 pb-12">
            
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#3B82F6] font-bold">
              <span>03 // DATA ARCHITECTURE</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-headline font-bold text-white">
              Dataset &amp; Relational Schema
            </h2>

            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Dimensions */}
                <div className="p-5 rounded-2xl bg-[#0D0E12] border border-white/10 space-y-3">
                  <div className="flex items-center justify-between pb-2 border-b border-white/10">
                    <span className="text-xs font-mono font-bold text-[#3B82F6] uppercase">
                      Dimension Tables
                    </span>
                    <span className="text-[11px] font-mono text-slate-400">Dimensional Entities</span>
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
                    <span className="text-[11px] font-mono text-slate-400">Strict Event-Grain</span>
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

              {project.warehouseTables.hygieneSummary && (
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 text-xs font-mono text-slate-400 flex items-center justify-between">
                  <span>Data Hygiene Standard:</span>
                  <span className="text-emerald-400 font-bold">{project.warehouseTables.hygieneSummary}</span>
                </div>
              )}
            </div>

          </section>
        )}

        {/* Multi-Role System Architecture (For DIRS) */}
        {project.multiRoles && (
          <section id="multi-roles" className="space-y-6 border-b border-white/10 pb-12">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#3B82F6] font-bold">
              <span>03 // ROLE ARCHITECTURE</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-headline font-bold text-white">
              Multi-Role Coordination Matrix
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.multiRoles.map((role) => (
                <div key={role.role} className="p-5 rounded-2xl bg-[#0D0E12] border border-white/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#3B82F6] uppercase">{role.role}</span>
                    <span className="text-[10px] font-mono text-slate-400">{role.summary}</span>
                  </div>
                  <ul className="text-xs text-slate-300 space-y-1 font-mono">
                    {role.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx}>&bull; {resp}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* 5. ARCHITECTURE & MODELING                                       */}
        {/* ----------------------------------------------------------------- */}
        {project.architectureSteps && project.architectureSteps.length > 0 && (
          <section id="architecture" className="space-y-6 border-b border-white/10 pb-12">
            
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#3B82F6] font-bold">
              <span>04 // SYSTEM PIPELINE</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-headline font-bold text-white">
              Architecture &amp; Data Pipeline Flow
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
              {project.architectureSteps.map((p) => (
                <div key={p.step} className="p-5 rounded-2xl bg-[#0D0E12] border border-white/10 space-y-2">
                  <span className="text-xs font-mono font-bold text-[#3B82F6]">{p.step} // {p.title}</span>
                  <div className="text-xs font-mono text-white font-semibold">{p.tool}</div>
                  <p className="text-[11px] text-slate-400 leading-relaxed font-mono">{p.desc}</p>
                </div>
              ))}
            </div>

          </section>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* 6. TECHNICAL METHODOLOGY                                          */}
        {/* ----------------------------------------------------------------- */}
        {project.methodology && (
          <section id="methodology" className="space-y-6 border-b border-white/10 pb-12">
            
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#3B82F6] font-bold">
              <span>05 // ENGINEERING METHODOLOGY</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-headline font-bold text-white">
              Technical Methodology &amp; Implementation Details
            </h2>

            <div className="space-y-4">
              
              <div className="rounded-2xl bg-[#07080B] border border-white/15 p-5 font-mono text-xs overflow-x-auto space-y-2">
                <div className="text-slate-400 text-[11px] pb-2 border-b border-white/10 flex items-center justify-between">
                  <span>{project.methodology.categoryLabel}</span>
                  <span className="text-emerald-400 font-bold">{project.methodology.badgeLabel}</span>
                </div>
                <pre className="text-blue-300 leading-relaxed whitespace-pre font-mono">
                  {project.methodology.codeSnippet}
                </pre>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-mono">
                {project.methodology.explanation}
              </p>

            </div>

          </section>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* 7. DASHBOARD SCREENSHOTS & VISUALIZATIONS (Condition-based)        */}
        {/* ----------------------------------------------------------------- */}
        {showVisualGallery && (
          <section id="screenshots" className="space-y-6 border-b border-white/10 pb-12">
            
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#3B82F6] font-bold">
              <span>06 // INTERACTIVE VISUAL GALLERY</span>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <h2 className="text-2xl sm:text-3xl font-headline font-bold text-white">
                Executive Dashboards &amp; Visual Artifacts
              </h2>
              {hasScreenshots && (
                <span className="text-xs font-mono text-slate-400">
                  {screenshots.length} High-Resolution Views Available
                </span>
              )}
            </div>

            {hasScreenshots ? (
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
                      src={asset(`/images/projects/${project.imageDir || project.id}/${screenshots[activeScreenshot].filename}`)}
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
                      <p className="text-xs text-slate-400 mt-1 max-w-2xl font-mono">
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
                {project.id === 'novacart' && <NovaCartChart />}
                {(project.id === 'product-analytics' || project.id === 'bitepulse') && <BitePulseFunnel />}
                <p className="text-xs text-slate-400 font-mono">
                  Interactive analytical visual model preview rendered directly from dataset metrics.
                </p>
              </div>
            )}

          </section>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* 8. KEY ANALYTICAL FINDINGS                                        */}
        {/* ----------------------------------------------------------------- */}
        {project.findings && project.findings.length > 0 && (
          <section id="findings" className="space-y-6 border-b border-white/10 pb-12">
            
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#3B82F6] font-bold">
              <span>07 // EMPIRICAL INSIGHTS</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-headline font-bold text-white">
              Key Analytical Findings &amp; Outcomes
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.findings.map((f) => (
                <div key={f.num} className="p-6 rounded-2xl bg-[#0D0E12] border border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-[#3B82F6] font-bold">FINDING {f.num}</span>
                    <span className="text-emerald-400 font-bold">{f.metric}</span>
                  </div>
                  <h3 className="text-base font-bold text-white font-headline">{f.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed font-mono">{f.desc}</p>
                </div>
              ))}
            </div>

          </section>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* 9. RESULTS & LIMITATIONS                                          */}
        {/* ----------------------------------------------------------------- */}
        {project.resultsAndDecisions && (
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
                  <span>Decisions &amp; Capabilities Enabled</span>
                </div>
                <ul className="text-xs text-slate-300 space-y-2 font-mono">
                  {project.resultsAndDecisions.decisionsEnabled?.map((item, i) => (
                    <li key={i}>&bull; {item}</li>
                  ))}
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-[#0D0E12] border border-white/10 space-y-3">
                <div className="flex items-center gap-2 text-xs font-mono font-bold text-amber-400 uppercase">
                  <AlertTriangle className="w-4 h-4" />
                  <span>Scope &amp; Technical Limitations</span>
                </div>
                <ul className="text-xs text-slate-300 space-y-2 font-mono">
                  {project.resultsAndDecisions.technicalLimitations?.map((item, i) => (
                    <li key={i}>&bull; {item}</li>
                  ))}
                </ul>
              </div>
            </div>

          </section>
        )}

        {/* ----------------------------------------------------------------- */}
        {/* 10. TECHNOLOGY STACK                                              */}
        {/* ----------------------------------------------------------------- */}
        {project.techStack && (
          <section id="tech-stack" className="space-y-6 border-b border-white/10 pb-12">
            
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#3B82F6] font-bold">
              <span>09 // COMPLETE STACK</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-headline font-bold text-white">
              Technologies &amp; Libraries Implemented
            </h2>

            <div className="flex flex-wrap gap-2">
              {project.techStack.map((t) => (
                <span key={t} className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-200">
                  {t}
                </span>
              ))}
            </div>

          </section>
        )}

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
              href={asset(`/projects/${nextProject.slug || nextProject.id}/`)}
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
                  
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-mono">
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

      {/* Reusable Dark Editorial Footer */}
      <Footer />

      {/* =================================================================== */}
      {/* Fullscreen Zoom Lightbox Modal                                      */}
      {/* =================================================================== */}
      {zoomImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setZoomImage(null)}
        >
          <div className="flex items-center justify-between max-w-7xl mx-auto w-full pb-4">
            <div>
              <h4 className="text-sm sm:text-base font-bold text-white font-headline">
                {zoomImage.title}
              </h4>
              <p className="text-xs text-slate-400 font-mono mt-0.5">
                {zoomImage.caption}
              </p>
            </div>
            
            <button
              onClick={() => setZoomImage(null)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer border border-white/10"
              aria-label="Close zoom"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div 
            className="flex-1 flex items-center justify-center p-2 max-w-7xl mx-auto w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={asset(`/images/projects/${project.imageDir || project.id}/${zoomImage.filename}`)}
              alt={zoomImage.title}
              className="max-h-[82vh] max-w-full object-contain rounded-xl shadow-2xl border border-white/10"
            />
          </div>

          <div className="text-center text-xs font-mono text-slate-500 pt-3">
            Press ESC or click anywhere outside the image to exit fullscreen inspection
          </div>
        </div>
      )}

    </div>
  );
}
