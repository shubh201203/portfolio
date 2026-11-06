'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { asset } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Database, 
  BarChart3, 
  Code2, 
  Layers, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  FolderGit2,
  Table,
  Cloud,
  Server,
  Cpu
} from 'lucide-react';

export default function SkillsMatrix({ onOpenProject }) {
  const [selectedSkill, setSelectedSkill] = useState('SQL');

  const skillsData = [
    {
      name: 'SQL',
      category: 'Data Engineering & Querying',
      icon: Database,
      proof: 'Constructed complex multi-stage CTEs, window functions (ROW_NUMBER, NTILE, LAG/LEAD), grain-safe aggregations, and dimensional star-schema analytical queries across 200K+ transaction rows.',
      tools: ['PostgreSQL 18', 'CTEs', 'Window Functions', 'Analytical Views', 'Grain Isolation'],
      sparkline: [20, 35, 45, 60, 75, 90, 100],
      connectedProjects: [
        { id: 'novacart', title: 'NovaCart Analytics', role: 'Grain-Safe Reconciliation Queries' },
        { id: 'product-analytics', title: 'BitePulse Analytics', role: 'Cohort Retention CTEs' },
      ],
    },
    {
      name: 'Python and Pandas',
      category: 'Data Manipulation & Modeling',
      icon: Code2,
      proof: 'Engineered automated ETL scripts, missing-key recovery routines, exploratory statistical analysis, data cleaning pipelines, and customer segmentation algorithms.',
      tools: ['Python 3.12', 'Pandas', 'NumPy', 'Jupyter', 'Scikit-learn'],
      sparkline: [30, 45, 40, 65, 80, 85, 95],
      connectedProjects: [
        { id: 'novacart', title: 'NovaCart Analytics', role: '104,852-Row Cleaning & Audit' },
        { id: 'product-analytics', title: 'BitePulse Analytics', role: 'Cohort Decay Modeling' },
        { id: 'emotion-music', title: 'Emotion-Based Music', role: 'Feature Extraction & Clustering' },
      ],
    },
    {
      name: 'Power BI and DAX',
      category: 'Business Intelligence',
      icon: BarChart3,
      proof: 'Authored 30+ custom DAX measures (time intelligence, cumulative margin, retention curves) and designed an executive 6-page interactive reporting suite with 100% mathematical reconciliation.',
      tools: ['Power BI Desktop', 'DAX Measures', 'Power BI Service', 'Visual Modeling', 'KPI Cards'],
      sparkline: [25, 40, 55, 70, 80, 92, 100],
      connectedProjects: [
        { id: 'novacart', title: 'NovaCart Analytics', role: '6-Page Executive Suite' },
        { id: 'product-analytics', title: 'BitePulse Analytics', role: 'Funnel Drop-Off Dashboards' },
      ],
    },
    {
      name: 'PostgreSQL',
      category: 'Relational Warehousing',
      icon: Server,
      proof: 'Modeled star schemas in PostgreSQL 18 with enforced primary/foreign keys, surrogate identity keys, dimension tables, indexed joins, and 0 orphan records.',
      tools: ['PostgreSQL 18', 'Star Schema', 'DDL/DML', 'Index Tuning', 'Surrogate Keys'],
      sparkline: [15, 30, 50, 65, 75, 88, 98],
      connectedProjects: [
        { id: 'novacart', title: 'NovaCart Analytics', role: '8-Table Dimensional Warehouse' },
        { id: 'todo', title: 'TO-DO Full-Stack', role: 'Neon PostgreSQL Database' },
      ],
    },
    {
      name: 'Data Modeling',
      category: 'Architecture',
      icon: Layers,
      proof: 'Architected Kimball dimensional modeling dividing fact orders and fact payments with shared dimensions (Customer, Product, Date, Location) to eliminate Cartesian duplicate revenue.',
      tools: ['Kimball Methodology', 'Star Schema', 'Fact Grains', 'Conformed Dimensions', 'SCD'],
      sparkline: [20, 35, 50, 65, 80, 90, 100],
      connectedProjects: [
        { id: 'novacart', title: 'NovaCart Analytics', role: 'Fact & Dimension Separation' },
      ],
    },
    {
      name: 'Excel and Power Query',
      category: 'Data Wrangling',
      icon: Table,
      proof: 'Built parameterized M-code transformations in Power Query, complex XLOOKUP/INDEX-MATCH models, scenario data tables, and executive summary pivot models.',
      tools: ['Power Query', 'M-Language', 'PivotTables', 'Dynamic Arrays', 'Data Cleaning'],
      sparkline: [40, 50, 60, 75, 80, 88, 94],
      connectedProjects: [
        { id: 'novacart', title: 'NovaCart Analytics', role: 'Source Audit & Profiling' },
      ],
    },
    {
      name: 'Microsoft Fabric',
      category: 'Cloud Analytics',
      icon: Cloud,
      proof: 'Certified in Microsoft Fabric Analytics Engineering (DP-600). Practical experience structuring Lakehouses, Delta tables, semantic models, and automated workspace deployment pipelines.',
      tools: ['OneLake', 'Lakehouse', 'Delta Parquet', 'Fabric Pipelines', 'Semantic Models'],
      sparkline: [10, 25, 45, 60, 70, 82, 92],
      connectedProjects: [
        { id: 'novacart', title: 'NovaCart Analytics', role: 'Semantic Model Integration' },
      ],
    },
    {
      name: 'Azure',
      category: 'Cloud Infrastructure',
      icon: Cloud,
      proof: 'Certified in Azure Data Fundamentals (DP-900). Familiarity with Azure Synapse, Azure SQL Database, Blob Storage, and Data Factory cloud ingestion workflows.',
      tools: ['Azure Blob Storage', 'Azure SQL', 'Synapse Analytics', 'Azure Data Factory'],
      sparkline: [15, 30, 45, 60, 72, 85, 90],
      connectedProjects: [
        { id: 'novacart', title: 'NovaCart Analytics', role: 'Cloud Architecture Exploration' },
      ],
    },
    {
      name: 'React',
      category: 'Frontend Engineering',
      icon: Code2,
      proof: 'Built responsive client-side telemetry dashboards, interactive analytical labs, and custom data visualization suites with React 19, Next.js, and Framer Motion.',
      tools: ['React 19', 'Next.js App Router', 'Tailwind CSS', 'Framer Motion', 'State Management'],
      sparkline: [35, 50, 65, 75, 85, 92, 98],
      connectedProjects: [
        { id: 'novacart', title: 'NovaCart Analytics', role: 'Interactive Deployed App' },
        { id: 'smart-resume', title: 'Smart Resume ATS', role: 'ATS Telemetry Dashboard' },
      ],
    },
    {
      name: 'FastAPI',
      category: 'Backend & APIs',
      icon: Cpu,
      proof: 'Developed low-latency RESTful APIs serving SQL analytical queries, model inference endpoints, and automated data ingestion webhooks with Pydantic validation.',
      tools: ['FastAPI', 'Pydantic', 'Uvicorn', 'RESTful Design', 'SQLAlchemy'],
      sparkline: [20, 35, 55, 68, 78, 86, 94],
      connectedProjects: [
        { id: 'novacart', title: 'NovaCart Analytics', role: 'Analytics Query Backend' },
        { id: 'todo', title: 'TO-DO Full-Stack', role: 'FastAPI REST Endpoints' },
      ],
    },
  ];

  const active = skillsData.find((s) => s.name === selectedSkill) || skillsData[0];
  const ActiveIcon = active.icon;

  return (
    <section id="skills" className="py-24 sm:py-32 bg-[#0A0A0B] text-[#F5F5F4] border-b border-white/10 relative overflow-hidden">
      
      {/* Background Subtle Ambient Aura */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#3B82F6]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#14B8A6]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Staggered Entrance */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.24em] text-[#3B82F6] font-bold mb-3">
              <span>TECHNICAL CAPABILITIES</span>
              <span className="text-white/20">•</span>
              <span>VERIFIED EVIDENCE ONLY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-headline font-extrabold tracking-tight text-[#F5F5F4]">
              Skills &amp; Evidence Matrix
            </h2>
          </div>
          <p className="text-sm font-mono text-slate-400 max-w-md">
            Click or hover any skill below to inspect verified usage evidence, connected projects, and technical tooling. No fabricated percentage bars.
          </p>
        </div>

        {/* 2-Column Responsive Layout: Skill Selector Grid (Left) + Evidence Card (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-12 items-start">
          
          {/* Left Column: Interactive Skills List with Sparklines */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5">
            {skillsData.map((skill) => {
              const isSelected = selectedSkill === skill.name;
              const Icon = skill.icon;
              return (
                <button
                  key={skill.name}
                  onClick={() => setSelectedSkill(skill.name)}
                  onMouseEnter={() => setSelectedSkill(skill.name)}
                  className={`group w-full text-left p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-white/[0.08] border-[#3B82F6] shadow-lg shadow-[#3B82F6]/20'
                      : 'bg-white/[0.02] hover:bg-white/[0.05] border-white/10 text-slate-400 hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`p-2 rounded-xl transition-colors ${
                        isSelected
                          ? 'bg-[#3B82F6] text-white shadow-md'
                          : 'bg-white/5 text-slate-400 group-hover:text-white'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className={`text-sm font-bold font-mono ${isSelected ? 'text-white' : 'text-slate-300'}`}>
                        {skill.name}
                      </div>
                      <div className="text-[10px] font-mono text-slate-500">
                        {skill.category}
                      </div>
                    </div>
                  </div>

                  {/* Micro Sparkline Indicator */}
                  <div className="flex items-center gap-1">
                    <svg className="w-16 h-5" viewBox="0 0 70 20">
                      <path
                        d={`M 0 ${20 - skill.sparkline[0] / 5} ` + skill.sparkline.map((v, i) => `L ${i * 10} ${20 - v / 5}`).join(' ')}
                        fill="none"
                        stroke={isSelected ? '#3B82F6' : '#64748B'}
                        strokeWidth="1.5"
                      />
                    </svg>
                    <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isSelected ? 'text-[#3B82F6] translate-x-1' : 'text-slate-600'}`} />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Evidence Card & Connected Projects */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="p-6 sm:p-8 rounded-3xl bg-[#0D0E12] border border-white/10 shadow-2xl space-y-6"
              >
                {/* Header */}
                <div className="flex items-start justify-between pb-6 border-b border-white/10">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-2xl bg-[#3B82F6]/20 border border-[#3B82F6]/40 text-[#3B82F6]">
                      <ActiveIcon className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xs font-mono uppercase tracking-wider text-[#14B8A6] font-semibold">
                        {active.category}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-headline font-extrabold text-white">
                        {active.name}
                      </h3>
                    </div>
                  </div>

                  <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-400">
                    Verified Skill
                  </span>
                </div>

                {/* Proof Statement */}
                <div className="space-y-2">
                  <div className="text-xs font-mono uppercase text-slate-400 tracking-wider font-semibold">
                    Actual Usage Evidence:
                  </div>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-sans">
                    {active.proof}
                  </p>
                </div>

                {/* Related Tooling Tags */}
                <div className="space-y-2">
                  <div className="text-xs font-mono uppercase text-slate-400 tracking-wider font-semibold">
                    Related Tools &amp; Ecosystem:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {active.tools.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Connected Projects */}
                <div className="space-y-3 pt-2">
                  <div className="text-xs font-mono uppercase text-[#3B82F6] tracking-wider font-bold flex items-center gap-2">
                    <FolderGit2 className="w-4 h-4" />
                    <span>Connected Projects Using {active.name}:</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {active.connectedProjects.map((p) => (
                      <a
                        key={p.id}
                        href={asset(`/projects/${p.id}/`)}
                        className="p-4 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-[#3B82F6]/50 text-left transition-all duration-200 group block"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-bold text-white group-hover:text-[#3B82F6] transition-colors">
                            {p.title}
                          </span>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-white group-hover:translate-x-1 transition-all" />
                        </div>
                        <div className="text-xs font-mono text-slate-400 mt-1">
                          Role: {p.role}
                        </div>
                        <div className="text-[10px] font-mono text-[#14B8A6] mt-2 group-hover:underline">
                          View Project Case Study &rarr;
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
