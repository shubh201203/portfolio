'use client';

import React, { useState } from 'react';
import { 
  BarChart3, 
  Code2, 
  Database, 
  Cloud, 
  Terminal, 
  Sparkles 
} from 'lucide-react';

export default function ToolkitSection() {
  const [activeCategory, setActiveCategory] = useState(0);

  const toolkitGroups = [
    {
      id: 'analytics',
      category: 'Analytics & Business Intelligence',
      role: 'Executive Reporting & Measures',
      icon: BarChart3,
      description: 'Translating dimensional tables into interactive, high-fidelity executive suites with mathematically reconciled measure calculations.',
      tools: [
        { name: 'Power BI', role: 'Executive Dashboard Engineering', tag: 'Desktop & Service' },
        { name: 'DAX', role: 'Complex Grain-Safe Measures', tag: 'Calculations' },
        { name: 'Power Query', role: 'M-Code Transformation & Ingestion', tag: 'ETL' },
        { name: 'Excel', role: 'Ad-Hoc Modeling & Financial Tables', tag: 'Analysis' },
      ],
      architecturalNotes: 'Designed 6-page NovaCart suite with 30+ custom DAX measures reconciling placed vs realized revenue to 100% precision.',
    },
    {
      id: 'programming',
      category: 'Programming & Analytical Logic',
      role: 'Query Suites & Scripting',
      icon: Terminal,
      description: 'Writing clean, deterministic data manipulation algorithms, parameterized backend APIs, and grain-safe analytical SQL.',
      tools: [
        { name: 'Python', role: 'Data Hygiene, Automation & Inference', tag: 'Core Scripting' },
        { name: 'SQL', role: 'CTEs, Window Functions & Joins', tag: 'Query Engine' },
        { name: 'JavaScript', role: 'Interactive Client Architectures', tag: 'Frontend / Full-Stack' },
      ],
      architecturalNotes: 'Authored multi-CTE SQL analytical suites with zero Cartesian explosion and strict fact-grain isolation.',
    },
    {
      id: 'data',
      category: 'Relational Warehousing & Data',
      role: 'Star Schemas & Persistence',
      icon: Database,
      description: 'Engineering dimensional warehouses, managing surrogate keys, and performing exploratory data analysis on multi-thousand row datasets.',
      tools: [
        { name: 'PostgreSQL', role: 'Production Relational Warehouses', tag: 'Version 18' },
        { name: 'MySQL', role: 'Relational Schema Operations', tag: 'Databases' },
        { name: 'DuckDB', role: 'In-Process Fast Analytical OLAP', tag: 'Columnar Engine' },
        { name: 'Pandas', role: 'DataFrame Cleansing & Structuring', tag: 'Data Prep' },
      ],
      architecturalNotes: 'Staged 104,852 sales records into an 8-table star schema with 0 foreign-key orphans and deterministic key recovery.',
    },
    {
      id: 'development',
      category: 'Web Development & APIs',
      role: 'Applied Interfaces & Services',
      icon: Code2,
      description: 'Connecting back-end analytics pipelines to responsive, accessible, high-performance web applications.',
      tools: [
        { name: 'React', role: 'Dynamic Single-Page Applications', tag: 'Frontend (v19)' },
        { name: 'Vite', role: 'High-Speed Build Orchestration', tag: 'Tooling' },
        { name: 'FastAPI', role: 'High-Throughput REST Endpoints', tag: 'Async Backend' },
        { name: 'Node.js', role: 'Event-Driven Server Logic', tag: 'Runtime' },
      ],
      architecturalNotes: 'Built production full-stack analytics platforms with automated unit testing and sub-second response times.',
    },
    {
      id: 'platforms',
      category: 'Cloud Platforms & Workflow',
      role: 'Infrastructure & Version Control',
      icon: Cloud,
      description: 'Managing cloud resources, delta architectures, serverless databases, and CI/CD version control workflows.',
      tools: [
        { name: 'Microsoft Fabric', role: 'Lakehouse & Analytics Engineering', tag: 'DP-600 Certified' },
        { name: 'Azure', role: 'Cloud Data Storage & Services', tag: 'DP-900 Certified' },
        { name: 'GitHub', role: 'Version Control & Actions Automation', tag: 'Workflow' },
      ],
      architecturalNotes: 'Certified across Microsoft Fabric, Azure Data Fundamentals, and Google Cloud Associate ecosystems.',
    },
  ];

  return (
    <section id="toolkit" className="py-24 sm:py-32 bg-[#07080B] text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="pb-8 border-b border-white/10 mb-14 sm:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.24em] text-blue-400 font-bold mb-3">
              <span>04 // THE TOOLKIT</span>
              <span className="text-white/20">•</span>
              <span>TECHNICAL CAPABILITIES</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-headline font-extrabold tracking-tight text-white leading-[1.02]">
              THE TOOLS BEHIND<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white">
                THE THINKING.
              </span>
            </h2>
          </div>

          <p className="text-sm font-mono text-slate-400 max-w-sm">
            Structured into 5 functional capability domains. No arbitrary proficiency bars — just production tools backed by verified projects.
          </p>
        </div>

        {/* Category Navigation Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 border-b border-white/10">
          {toolkitGroups.map((group, idx) => (
            <button
              key={group.id}
              onClick={() => setActiveCategory(idx)}
              className={`px-4 py-2 rounded-full text-xs font-mono transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === idx
                  ? 'bg-blue-600 text-white font-bold shadow-md shadow-blue-600/30'
                  : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
              }`}
            >
              <span className="opacity-50 mr-1.5">0{idx + 1}</span>
              <span>{group.category.split(' & ')[0]}</span>
            </button>
          ))}
        </div>

        {/* Active Domain Spotlight Display */}
        <div className="rounded-3xl bg-[#0B0E17] border border-white/15 p-6 sm:p-10 shadow-2xl space-y-8">
          
          {/* Top Domain Headline */}
          <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b border-white/10 gap-4">
            <div className="space-y-1">
              <div className="text-xs font-mono uppercase tracking-wider text-blue-400 font-semibold">
                DOMAIN 0{activeCategory + 1} // {toolkitGroups[activeCategory].role}
              </div>
              <h3 className="text-2xl sm:text-3xl font-headline font-bold text-white">
                {toolkitGroups[activeCategory].category}
              </h3>
            </div>

            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 text-xs font-mono text-slate-300 max-w-md">
              {toolkitGroups[activeCategory].description}
            </div>
          </div>

          {/* Typographic Tool Tiles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {toolkitGroups[activeCategory].tools.map((tool, tIdx) => (
              <div
                key={tIdx}
                className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3 hover:border-blue-500/40 hover:bg-white/10 transition-all group"
              >
                <div className="flex items-center justify-between">
                  <span className="text-lg font-headline font-bold text-white group-hover:text-blue-300">
                    {tool.name}
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-white/10 border border-white/10 text-[10px] font-mono font-semibold text-slate-300">
                    {tool.tag}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {tool.role}
                </p>
              </div>
            ))}
          </div>

          {/* Architectural Notes Footer */}
          <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-slate-400">
            <div className="flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              <span className="font-bold text-white">Production Application:</span>
              <span>{toolkitGroups[activeCategory].architecturalNotes}</span>
            </div>

            <div className="text-[11px] text-slate-500">
              Verified in Repository
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
