import React, { useState } from 'react';
import { 
  FileSpreadsheet, 
  Terminal, 
  Database, 
  GitMerge, 
  BarChart3, 
  Lightbulb, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';

export default function DataPipelineVisual() {
  const [activeStage, setActiveStage] = useState(2); // default to PostgreSQL DW stage

  const stages = [
    {
      id: 0,
      number: '01',
      title: 'Raw Operational Data',
      tech: 'CSV / Transaction Logs',
      icon: FileSpreadsheet,
      accent: 'blue',
      badge: '105,420 Raw Events',
      summary: 'Ingestion of uncleaned multi-category retail e-commerce orders, customer profiles, product catalog, payment attempts, and return events.',
      details: [
        'Raw transaction payloads with potential serialization anomalies',
        'State codes, customer IDs, and localized Indian currency values',
        'Order statuses: Completed, Shipped, Cancelled, and Returned'
      ]
    },
    {
      id: 1,
      number: '02',
      title: 'Python / Pandas ETL',
      tech: 'Python 3.11 · Pandas · NumPy',
      icon: Terminal,
      accent: 'cyan',
      badge: 'Deterministic Recovery',
      summary: 'Automated data hygiene routines, schema standardization, missing-key recovery, and audited quarantine handling.',
      details: [
        'Deduplication removed 136 redundant transaction entries',
        'Deterministic order_id lookup recovered 142 missing customer IDs',
        '68 unrecoverable records isolated in audited quarantine CSV file'
      ]
    },
    {
      id: 2,
      number: '03',
      title: 'SQL / PostgreSQL DW',
      tech: 'PostgreSQL 18 · Neon Cloud',
      icon: Database,
      accent: 'emerald',
      badge: '8 Tables · 0 FK Orphans',
      summary: 'Production relational star schema data warehouse with surrogate integer keys, B-tree indexes, and strict grain isolation.',
      details: [
        '104,852 sales records loaded with 100% relational integrity',
        '5 Dimension tables (Customer, Product, Location, Payment, Date)',
        '3 Fact tables (Sales, Returns, Payments) preventing Cartesian multiplication'
      ]
    },
    {
      id: 3,
      number: '04',
      title: 'Data Modeling & CTEs',
      tech: 'Star Schema · Analytical SQL',
      icon: GitMerge,
      accent: 'indigo',
      badge: 'Grain-Aware Queries',
      summary: 'Common Table Expressions (CTEs), window functions (NTILE, DENSE_RANK), and cohort retention view construction.',
      details: [
        'Order-level CTE pre-aggregation prevents multi-item payment inflation',
        'public.vw_cohort_retention pre-aggregates 18-month decay curves',
        'Pareto 80/20 cumulative running profit calculations'
      ]
    },
    {
      id: 4,
      number: '05',
      title: 'Power BI & DAX',
      tech: 'Power BI Desktop · 30+ DAX',
      icon: BarChart3,
      accent: 'amber',
      badge: '100% Reconciliation',
      summary: 'Six-page executive analytical reporting suite with single-direction relationships and mathematical reconciliation.',
      details: [
        '30+ validated DAX measures (Realized Rev, Post-Return Rev, AOV, YoY)',
        'Dedicated Date Table with standard Time Intelligence functions',
        'Dynamic cross-filtering across Region, Year, and Category slices'
      ]
    },
    {
      id: 5,
      number: '06',
      title: 'Business Insights',
      tech: 'Executive Decision Support',
      icon: Lightbulb,
      accent: 'teal',
      badge: 'Decision-Grade Telemetry',
      summary: 'Clear, empirical business findings that isolate commercial leakage, identify profit anchors, and optimize marketing spend.',
      details: [
        'Isolates ₹123.9M gross-to-realized cancellation & return erosion',
        'Identifies Electronics as volume anchor (18.6% margin) vs Beauty (59.5%)',
        'Demonstrates 82.1% repeat customer share driving commercial longevity'
      ]
    }
  ];

  const current = stages[activeStage];

  return (
    <div className="w-full bg-[#0B0F19] text-white border border-white/10 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-2xl">
      
      {/* Background Accent Grids */}
      <div className="absolute inset-0 lab-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/10 relative z-10">
        <div>
          <div className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Interactive Analytics Engineering Pipeline</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white mt-1">
            From Raw Operational Events to Executive Intelligence
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
            Click any node below to inspect the engineering architecture, grain logic, and reconciliation checkpoints across each stage.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1.5 rounded-full">
          <CheckCircle2 className="w-4 h-4" />
          <span>Verified Architecture</span>
        </div>
      </div>

      {/* Connected Interactive Stage Rail */}
      <div className="py-8 relative z-10 overflow-x-auto">
        <div className="min-w-[640px] grid grid-cols-6 gap-2 relative">
          
          {/* Animated connector line running through nodes */}
          <div className="absolute top-6 left-8 right-8 h-0.5 bg-white/10 -z-0" />
          <div 
            className="absolute top-6 left-8 h-0.5 bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 -z-0 transition-all duration-500" 
            style={{ width: `${(activeStage / (stages.length - 1)) * 90}%` }}
          />

          {stages.map((stage) => {
            const Icon = stage.icon;
            const isActive = activeStage === stage.id;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStage(stage.id)}
                className={`flex flex-col items-center text-center group cursor-pointer transition-all duration-200 relative z-10 ${
                  isActive ? 'scale-105' : 'opacity-70 hover:opacity-100'
                }`}
              >
                {/* Node circle */}
                <div 
                  className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                    isActive 
                      ? 'bg-blue-600 text-white shadow-glow-blue border-2 border-cyan-300' 
                      : 'bg-white/10 text-slate-300 border border-white/10 group-hover:bg-white/20 group-hover:text-white'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>

                {/* Node info */}
                <div className="mt-3 space-y-0.5">
                  <span className={`text-[10px] font-mono font-bold block ${isActive ? 'text-cyan-400' : 'text-slate-500'}`}>
                    STAGE {stage.number}
                  </span>
                  <span className="text-xs font-semibold text-white block leading-tight px-1">
                    {stage.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Stage Detail Card (Active Stage Inspection) */}
      <div className="bg-white/5 rounded-xl border border-white/10 p-5 sm:p-6 space-y-4 relative z-10">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-blue-400">
              <current.icon className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs font-mono text-cyan-400 font-semibold">
                STAGE {current.number} // {current.tech}
              </div>
              <h4 className="text-lg font-bold text-white">
                {current.title}
              </h4>
            </div>
          </div>

          <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-blue-500/10 text-blue-300 border border-blue-400/20">
            {current.badge}
          </span>
        </div>

        <p className="text-sm text-slate-300 leading-relaxed">
          {current.summary}
        </p>

        {/* Bullet Checkpoints */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-1">
          {current.details.map((detail, idx) => (
            <div 
              key={idx}
              className="p-3 rounded-lg bg-black/40 border border-white/5 text-xs text-slate-300 flex items-start gap-2"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <span className="leading-snug">{detail}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
