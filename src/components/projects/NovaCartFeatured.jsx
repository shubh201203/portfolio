import React from 'react';
import { ArrowRight, ExternalLink, BarChart3, CheckCircle2, Layers, ShieldCheck, LineChart } from 'lucide-react';
import { GitHubIcon } from '../common/Icons';
import { portfolioData } from '../../data/portfolioData';

export default function NovaCartFeatured({ onOpenCaseStudy }) {
  const project = portfolioData.projects.find((p) => p.id === 'novacart');
  if (!project) return null;

  const caseStudyFlow = [
    { step: '01', title: 'Business Problem', desc: 'Margin leakage & retention decay' },
    { step: '02', title: 'Raw Data', desc: '105K+ order transactions & events' },
    { step: '03', title: 'Transformation', desc: 'Deterministic recovery & quarantine' },
    { step: '04', title: 'Star Schema', desc: '8-table dimensional warehouse' },
    { step: '05', title: 'SQL Analytics', desc: '12 business query modules & CTEs' },
    { step: '06', title: 'Power BI Suite', desc: '6 interactive views & 30+ DAX' },
    { step: '07', title: 'Cloud Deploy', desc: 'React + FastAPI + Neon live app' },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 lg:p-10 shadow-subtle relative space-y-10">
      
      {/* Header Banner */}
      <div className="flex flex-wrap items-start justify-between gap-6 border-b border-gray-100 pb-8">
        <div className="space-y-3 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-blue-600 text-white uppercase tracking-wider">
              Flagship Analytics Project
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-mono text-emerald-800 bg-emerald-50 border border-emerald-200">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Completed & Deployed</span>
            </span>
            <span className="text-xs font-mono text-gray-500">
              28/28 Pytest Passed
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-950 tracking-tight">
            {project.title}
          </h3>

          <p className="text-gray-600 text-base leading-relaxed">
            {project.tagline}
          </p>

          {/* Core Tech Stack */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded text-xs font-mono bg-gray-50 text-gray-700 border border-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap sm:flex-col items-stretch gap-2.5 w-full sm:w-auto">
          <button
            onClick={() => onOpenCaseStudy('novacart')}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold bg-gray-950 text-white hover:bg-blue-600 transition-colors shadow-subtle active:scale-[0.98] whitespace-nowrap"
          >
            <span>View Detailed Case Study</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2 w-full">
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-md text-xs font-semibold bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition-colors"
            >
              <span>Live Web App</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-md text-xs font-semibold bg-gray-50 text-gray-700 border border-gray-200 hover:bg-gray-100 hover:text-gray-950 transition-colors"
            >
              <GitHubIcon className="w-3.5 h-3.5 text-gray-700" />
              <span>Source Code</span>
            </a>
          </div>
        </div>
      </div>

      {/* 3 Core Architecture Deliverables */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="text-xs font-mono uppercase tracking-wider text-gray-500 font-semibold flex items-center gap-2">
            <Layers className="w-3.5 h-3.5 text-blue-600" />
            <span>Three Core Analytics Deliverables</span>
          </div>
          <span className="text-xs text-gray-400 font-mono">End-to-End Delivery</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {project.deliverables?.map((d) => (
            <div
              key={d.num}
              className="p-5 rounded-lg border border-gray-200 bg-gray-50/50 hover:bg-white hover:border-blue-200 transition-colors flex flex-col justify-between space-y-3"
            >
              <div>
                <div className="flex items-center justify-between text-xs font-mono text-gray-400 mb-1.5">
                  <span className="font-bold text-blue-600">DELIVERABLE {d.num}</span>
                  <span className="text-[11px] text-gray-500">{d.tech}</span>
                </div>
                <h4 className="text-sm font-bold text-gray-900">{d.title}</h4>
                <p className="text-xs text-gray-600 leading-relaxed mt-2">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Verified Core Analytical Benchmarks Grid */}
      <div className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="text-xs font-mono uppercase tracking-wider text-gray-500 font-semibold flex items-center gap-1.5">
            <LineChart className="w-3.5 h-3.5 text-blue-600" />
            <span>Verified Canonical Benchmarks (100% SQL / DAX Reconciled)</span>
          </div>
          <span className="text-[11px] font-mono text-gray-400">Deterministic Analysis</span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="p-4 rounded-lg bg-white border border-gray-200 shadow-subtle">
            <div className="text-[11px] font-mono text-gray-500 uppercase">Realized Revenue</div>
            <div className="text-xl sm:text-2xl font-extrabold text-gray-950 font-mono mt-1">₹847.62M</div>
            <div className="text-[11px] text-gray-500 mt-1 leading-snug">
              Fulfilled & in-transit orders (Completed + Shipped)
            </div>
          </div>

          <div className="p-4 rounded-lg bg-white border border-gray-200 shadow-subtle">
            <div className="text-[11px] font-mono text-gray-500 uppercase">Post-Return Revenue</div>
            <div className="text-xl sm:text-2xl font-extrabold text-blue-600 font-mono mt-1">₹796.75M</div>
            <div className="text-[11px] text-gray-500 mt-1 leading-snug">
              Net settled cash retained (−₹50.87M returns)
            </div>
          </div>

          <div className="p-4 rounded-lg bg-white border border-gray-200 shadow-subtle">
            <div className="text-[11px] font-mono text-gray-500 uppercase">Realized Profit Margin</div>
            <div className="text-xl sm:text-2xl font-extrabold text-emerald-600 font-mono mt-1">30.93%</div>
            <div className="text-[11px] text-gray-500 mt-1 leading-snug">
              ₹262.16M operating profit across fulfilled catalog
            </div>
          </div>

          <div className="p-4 rounded-lg bg-white border border-gray-200 shadow-subtle">
            <div className="text-[11px] font-mono text-gray-500 uppercase">Customer Retention</div>
            <div className="text-xl sm:text-2xl font-extrabold text-gray-950 font-mono mt-1">82.12%</div>
            <div className="text-[11px] text-gray-500 mt-1 leading-snug">
              3,260 repeat buyers out of 3,970 active customers
            </div>
          </div>
        </div>

        {/* Synthetic Dataset Notice */}
        <div className="p-3 rounded-lg bg-gray-50 border border-gray-200 flex items-start gap-2.5 text-xs text-gray-600">
          <ShieldCheck className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
          <p className="leading-relaxed">
            <strong className="text-gray-900 font-medium">Synthetic Dataset Disclosure:</strong> All figures and behavioral patterns reflect rigorous, deterministic analysis on an empirically modeled synthetic India-focused e-commerce dataset generated for analytics engineering and business intelligence demonstration.
          </p>
        </div>
      </div>

      {/* Case Study Pipeline Story Sequence */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold">
            Analytics Methodology & Case Study Sequence
          </div>
          <span className="text-xs text-gray-500 font-mono">7-Stage Pipeline</span>
        </div>

        {/* Desktop Pipeline Flow */}
        <div className="hidden lg:grid grid-cols-7 gap-2">
          {caseStudyFlow.map((s) => {
            const isModel = s.step === '04' || s.step === '06';
            return (
              <div
                key={s.step}
                className={`p-3 rounded border text-left flex flex-col justify-between ${
                  isModel ? 'bg-blue-50/50 border-blue-200' : 'bg-gray-50/60 border-gray-200'
                }`}
              >
                <div>
                  <div className="text-[10px] font-mono font-bold text-gray-400">{s.step}</div>
                  <div className="text-xs font-bold text-gray-950 mt-0.5 leading-snug">{s.title}</div>
                </div>
                <div className="text-[10px] text-gray-500 mt-2 leading-snug">{s.desc}</div>
              </div>
            );
          })}
        </div>

        {/* Mobile Pipeline Flow */}
        <div className="lg:hidden grid grid-cols-2 sm:grid-cols-3 gap-2">
          {caseStudyFlow.map((s) => (
            <div key={s.step} className="p-3 rounded border border-gray-200 bg-gray-50">
              <span className="text-[10px] font-mono text-blue-600 font-bold">{s.step}</span>
              <div className="text-xs font-bold text-gray-900 mt-0.5">{s.title}</div>
              <div className="text-[10px] text-gray-500 mt-1">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Power BI Dashboard Preview Gallery Showcase */}
      <div className="border border-gray-200 rounded-xl bg-gray-50/40 p-6 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-200 pb-3">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold text-gray-900">
              Power BI Dashboard Suite Preview (6 Interactive Views)
            </span>
          </div>

          <button
            onClick={() => onOpenCaseStudy('novacart')}
            className="text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1"
          >
            <span>View All 6 High-Res Views in Case Study</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Responsive Preview Cards showing Actual Screenshots */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div
            onClick={() => onOpenCaseStudy('novacart')}
            className="cursor-pointer group border border-gray-200 rounded-lg overflow-hidden bg-white shadow-subtle hover:border-blue-300 transition-all"
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
              <img
                src={`${import.meta.env.BASE_URL}images/projects/novacart/01_executive_overview.png`}
                alt="NovaCart Executive Overview Power BI Dashboard"
                className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-gray-900/80 text-white text-[10px] font-mono backdrop-blur-sm">
                View 01 · Executive Overview
              </div>
            </div>
            <div className="p-3.5">
              <div className="text-xs font-bold text-gray-900">Executive Performance & Revenue Realization</div>
              <div className="text-[11px] text-gray-500 mt-0.5">Monthly revenue trendlines (2022–2026), regional sales split, and order status breakdown.</div>
            </div>
          </div>

          <div
            onClick={() => onOpenCaseStudy('novacart')}
            className="cursor-pointer group border border-gray-200 rounded-lg overflow-hidden bg-white shadow-subtle hover:border-blue-300 transition-all"
          >
            <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
              <img
                src={`${import.meta.env.BASE_URL}images/projects/novacart/06_customer_retention_rfm.png`}
                alt="NovaCart Customer Retention & RFM Power BI Dashboard"
                className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-300"
                loading="lazy"
              />
              <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-gray-900/80 text-white text-[10px] font-mono backdrop-blur-sm">
                View 06 · Customer Retention & RFM
              </div>
            </div>
            <div className="p-3.5">
              <div className="text-xs font-bold text-gray-900">18-Month Customer Cohort Heatmap & RFM</div>
              <div className="text-[11px] text-gray-500 mt-0.5">Authoritative cohort retention matrix (M0 to M18) backed by PostgreSQL view public.vw_cohort_retention.</div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-gray-600 pt-2 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span>All 6 dashboard views documented with full resolution, metric specifications, and DAX measures.</span>
          </div>
          <button
            onClick={() => onOpenCaseStudy('novacart')}
            className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1"
          >
            <span>Explore Dashboard Suite</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Footer Link to Full Case Study */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-100">
        <div className="text-xs text-gray-500 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span>PostgreSQL 18 DW · Power BI 6-Page Suite · FastAPI on Render · React on Vercel</span>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={project.links.live}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-700 hover:text-blue-600 transition-colors"
          >
            <span>Launch Live App</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <span className="text-gray-300">•</span>
          <button
            onClick={() => onOpenCaseStudy('novacart')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span>Open Complete Case Study</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

    </div>
  );
}
