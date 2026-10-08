import React from 'react';
import { ArrowRight, GitBranch, ArrowDown, BarChart3, Clock, LineChart, PieChart, Database } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function NovaCartFeatured({ onOpenCaseStudy }) {
  const project = portfolioData.projects.find((p) => p.id === 'novacart');
  if (!project) return null;

  const caseStudyFlow = [
    { step: '01', title: 'Business Problem', desc: 'Margin leakage & retention decay' },
    { step: '02', title: 'Raw Data', desc: 'Operational transactions & orders' },
    { step: '03', title: 'Transformation', desc: 'Python cleaning & data validation' },
    { step: '04', title: 'Data Model', desc: 'PostgreSQL Star Schema (Fact/Dim)' },
    { step: '05', title: 'SQL Analytics', desc: 'Revenue, cohorts & RFM queries' },
    { step: '06', title: 'Power BI', desc: 'DAX measures & executive canvas' },
    { step: '07', title: 'Insights', desc: 'Actionable business recommendations' },
  ];

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8 lg:p-10 shadow-subtle relative space-y-10">
      
      {/* Header Banner */}
      <div className="flex flex-wrap items-start justify-between gap-6 border-b border-gray-100 pb-8">
        <div className="space-y-2 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-bold bg-blue-600 text-white uppercase tracking-wider">
              Flagship Analytics Case Study
            </span>
            <span className="text-xs font-mono text-gray-500">
              End-to-End Enterprise Project
            </span>
          </div>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-950 tracking-tight">
            {project.title}
          </h3>
          <p className="text-gray-600 text-base leading-relaxed pt-1">
            {project.tagline}
          </p>

          {/* Core Tech Stack */}
          <div className="flex flex-wrap gap-1.5 pt-2">
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

        <button
          onClick={() => onOpenCaseStudy('novacart')}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold bg-gray-950 text-white hover:bg-blue-600 transition-colors shadow-subtle active:scale-[0.98] whitespace-nowrap"
        >
          <span>Read Full Case Study</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

      {/* Case Study Pipeline Story Sequence */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold">
            Analytics Methodology & Case Study Sequence
          </div>
          <span className="text-xs text-gray-500 font-mono">7-Stage Methodology</span>
        </div>

        {/* Desktop Pipeline Flow */}
        <div className="hidden lg:grid grid-cols-7 gap-2">
          {caseStudyFlow.map((s, idx) => {
            const isLast = idx === caseStudyFlow.length - 1;
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

      {/* SECTION: Supporting Dashboard Preview (Clearly labeled, supporting role) */}
      <div className="border border-gray-200 rounded-lg bg-gray-50/40 p-6 space-y-6">
        
        {/* Frame Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-gray-200 pb-3">
          <div className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-bold text-gray-900">Power BI Reporting Canvas Architecture</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded text-xs font-mono text-amber-800 bg-amber-50 border border-amber-200">
            <Clock className="w-3.5 h-3.5 text-amber-600" />
            <span>Dashboard Preview — In Development</span>
          </div>
        </div>

        {/* Structural KPI Measures Grid — Natural Analytical Logic */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          <div className="p-3 rounded bg-white border border-gray-200 shadow-subtle">
            <div className="text-[11px] font-mono text-gray-500 uppercase">Revenue Metric</div>
            <div className="text-sm font-bold text-gray-900 font-mono mt-0.5">Net Revenue Logic</div>
            <div className="text-[10px] text-gray-400 mt-1">Post-return calculation</div>
          </div>

          <div className="p-3 rounded bg-white border border-gray-200 shadow-subtle">
            <div className="text-[11px] font-mono text-gray-500 uppercase">Customer Base</div>
            <div className="text-sm font-bold text-gray-900 font-mono mt-0.5">Customer Analysis</div>
            <div className="text-[10px] text-gray-400 mt-1">Distinct customer count</div>
          </div>

          <div className="p-3 rounded bg-white border border-gray-200 shadow-subtle">
            <div className="text-[11px] font-mono text-gray-500 uppercase">Average Order Value</div>
            <div className="text-sm font-bold text-gray-900 font-mono mt-0.5">Average Basket Value</div>
            <div className="text-[10px] text-gray-400 mt-1">Revenue / order count</div>
          </div>

          <div className="p-3 rounded bg-white border border-gray-200 shadow-subtle">
            <div className="text-[11px] font-mono text-gray-500 uppercase">Growth Rate</div>
            <div className="text-sm font-bold text-gray-900 font-mono mt-0.5">Time-Series Trajectory</div>
            <div className="text-[10px] text-gray-400 mt-1">Period-over-period comparison</div>
          </div>
        </div>

        {/* Visual Charts Grid: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Revenue Trajectory Geometry */}
          <div className="lg:col-span-7 p-4 rounded bg-white border border-gray-200 shadow-subtle space-y-3">
            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
              <span className="text-xs font-bold text-gray-800 flex items-center gap-1.5">
                <LineChart className="w-3.5 h-3.5 text-blue-600" />
                Revenue Trend & Time Intelligence
              </span>
              <span className="text-[10px] font-mono text-gray-400">Model View</span>
            </div>

            <div className="h-28 w-full pt-2">
              <svg className="w-full h-full" viewBox="0 0 400 90" preserveAspectRatio="none">
                <line x1="0" y1="22" x2="400" y2="22" stroke="#F3F4F6" strokeWidth="1" />
                <line x1="0" y1="45" x2="400" y2="45" stroke="#F3F4F6" strokeWidth="1" />
                <line x1="0" y1="68" x2="400" y2="68" stroke="#F3F4F6" strokeWidth="1" />
                
                <path
                  d="M0,68 C60,63 110,50 160,54 C210,58 260,32 310,36 C360,40 385,18 400,14"
                  fill="none"
                  stroke="#2563EB"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M0,77 C60,74 110,68 160,70 C210,72 260,54 310,52 C360,56 385,43 400,38"
                  fill="none"
                  stroke="#CBD5E1"
                  strokeWidth="1.25"
                  strokeDasharray="3 3"
                />
              </svg>
            </div>
            <div className="flex items-center justify-between text-[10px] text-gray-500 font-mono">
              <span>Time Slices (Q1 → Q4)</span>
              <span className="text-blue-600 font-medium">— Current Period vs Prior Period Baseline</span>
            </div>
          </div>

          {/* Qualitative RFM Segmentation Framework */}
          <div className="lg:col-span-5 p-4 rounded bg-white border border-gray-200 shadow-subtle space-y-3">
            <div className="flex items-center justify-between border-b border-gray-100 pb-2">
              <span className="text-xs font-bold text-gray-800 flex items-center gap-1.5">
                <PieChart className="w-3.5 h-3.5 text-blue-600" />
                RFM Segmentation Framework
              </span>
              <span className="text-[10px] font-mono text-gray-400">Behavioral Tiers</span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="p-2 rounded bg-gray-50 border border-gray-100 flex items-center justify-between">
                <div>
                  <div className="font-bold text-gray-900">Champions</div>
                  <div className="text-[11px] text-gray-500">High Recency · High Frequency · High Monetary</div>
                </div>
                <span className="text-[10px] font-mono font-semibold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200">
                  Tier 1
                </span>
              </div>

              <div className="p-2 rounded bg-gray-50 border border-gray-100 flex items-center justify-between">
                <div>
                  <div className="font-bold text-gray-900">Loyal Customers</div>
                  <div className="text-[11px] text-gray-500">High Repeat Purchase Behavior</div>
                </div>
                <span className="text-[10px] font-mono font-semibold text-gray-600 bg-white px-1.5 py-0.5 rounded border border-gray-200">
                  Tier 2
                </span>
              </div>

              <div className="p-2 rounded bg-gray-50 border border-gray-100 flex items-center justify-between">
                <div>
                  <div className="font-bold text-gray-900">At-Risk</div>
                  <div className="text-[11px] text-gray-500">Declining Recency & Activity</div>
                </div>
                <span className="text-[10px] font-mono font-semibold text-amber-700 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                  Tier 3
                </span>
              </div>

              <div className="p-2 rounded bg-gray-50 border border-gray-100 flex items-center justify-between">
                <div>
                  <div className="font-bold text-gray-900">Lost / Hibernating</div>
                  <div className="text-[11px] text-gray-500">Dormant Customer Segment</div>
                </div>
                <span className="text-[10px] font-mono font-semibold text-gray-400 bg-white px-1.5 py-0.5 rounded border border-gray-200">
                  Tier 4
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Footer Link to Full Case Study */}
      <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-gray-100">
        <div className="text-xs text-gray-500 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          <span>PostgreSQL Star Schema & SQL Analysis Suite ready • Power BI canvas in development</span>
        </div>

        <button
          onClick={() => onOpenCaseStudy('novacart')}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
        >
          <span>Open Complete 11-Stage Case Study</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>

    </div>
  );
}
