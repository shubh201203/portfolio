'use client';

import React, { useState } from 'react';
import { 
  Database, 
  BarChart3, 
  Terminal, 
  Code2, 
  Layers, 
  CheckCircle2, 
  Sparkles,
  ArrowRight,
  FolderGit2
} from 'lucide-react';

export default function SkillsMatrix({ onOpenProject }) {
  const [selectedSkill, setSelectedSkill] = useState('Power BI');

  const skillsData = [
    {
      name: 'Power BI',
      domain: 'Analytics & BI',
      description: 'Executive reporting suites, star-schema semantic data modeling, and parameter-driven interactive dashboards.',
      connectedProjects: [
        { id: 'novacart', title: 'NovaCart Analytics', role: '6-Page Executive Suite' },
        { id: 'product-analytics', title: 'BitePulse Analytics', role: 'Cohort & Funnel Reports' },
      ],
    },
    {
      name: 'DAX',
      domain: 'Analytics & BI',
      description: 'Formulating complex time-intelligence, grain-safe aggregation, cumulative revenue, and customer retention metrics.',
      connectedProjects: [
        { id: 'novacart', title: 'NovaCart Analytics', role: '30+ Custom Measures' },
        { id: 'product-analytics', title: 'BitePulse Analytics', role: 'Retention & Drop-Off Rates' },
      ],
    },
    {
      name: 'PostgreSQL 18',
      domain: 'Warehousing & Databases',
      description: 'Relational Star Schema engineering, surrogate key generation, fact-grain deduplication, and CTE query suites.',
      connectedProjects: [
        { id: 'novacart', title: 'NovaCart Analytics', role: '8-Table Dimensional Warehouse' },
        { id: 'product-analytics', title: 'BitePulse Analytics', role: 'Event Telemetry & Funnels' },
        { id: 'todo', title: 'TO-DO Full-Stack', role: 'Persistent Neon Postgres' },
      ],
    },
    {
      name: 'Python & Pandas',
      domain: 'Data Science & ETL',
      description: 'Raw data ingestion, missing-key deterministic recovery algorithms, exploratory data analysis, and schema audits.',
      connectedProjects: [
        { id: 'novacart', title: 'NovaCart Analytics', role: '104,852 Staged Row Hygiene' },
        { id: 'product-analytics', title: 'BitePulse Analytics', role: 'Cohort Decay Modeling' },
        { id: 'emotion-music', title: 'Emotion-Driven Beats', role: 'Signal Extraction' },
      ],
    },
    {
      name: 'SQL CTEs & Windows',
      domain: 'Query Engineering',
      description: 'Writing grain-safe analytical SQL suites, pre-aggregating fact line items to avoid Cartesian duplication with payments.',
      connectedProjects: [
        { id: 'novacart', title: 'NovaCart Analytics', role: 'Reconciled SQL Suites' },
        { id: 'product-analytics', title: 'BitePulse Analytics', role: 'Funnel Step Conversions' },
      ],
    },
    {
      name: 'Star Schema Modeling',
      domain: 'Architecture',
      description: 'Designing dimensional data architectures separating fact line items from fact payments with dedicated dimension conformities.',
      connectedProjects: [
        { id: 'novacart', title: 'NovaCart Analytics', role: '8-Table Clean Schema' },
      ],
    },
    {
      name: 'React 19 & Next.js',
      domain: 'Frontend & UI',
      description: 'Developing high-performance responsive web applications, client telemetry dashboards, and interactive case study overlays.',
      connectedProjects: [
        { id: 'novacart', title: 'NovaCart Analytics', role: 'Interactive Deployed App' },
        { id: 'wardrobewhiz', title: 'WardrobeWhiz AI', role: 'Apparel Organizer' },
        { id: 'emotion-music', title: 'Emotion-Driven Beats', role: 'Webcam Interface' },
      ],
    },
    {
      name: 'FastAPI & REST',
      domain: 'Backend & APIs',
      description: 'High-throughput asynchronous REST APIs serving parameterized analytical queries with automated Pytest suites.',
      connectedProjects: [
        { id: 'novacart', title: 'NovaCart Analytics', role: 'REST Analytics Endpoints' },
        { id: 'emotion-music', title: 'Emotion-Driven Beats', role: 'Mood Ingestion Engine' },
      ],
    },
    {
      name: 'Microsoft Fabric',
      domain: 'Cloud Analytics',
      description: 'Certified Lakehouse architectures, Delta Parquet tables, and semantic analytics engineering (DP-600 certified).',
      connectedProjects: [
        { id: 'novacart', title: 'NovaCart Analytics', role: 'Lakehouse Concept Alignment' },
      ],
    },
  ];

  const currentSkillData = skillsData.find((s) => s.name === selectedSkill) || skillsData[0];

  return (
    <section id="skills-matrix" className="py-24 sm:py-32 bg-[#0A0A0B] text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="pb-8 border-b border-white/10 mb-14 sm:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.24em] text-[#3B82F6] font-bold mb-3">
              <span>INTERACTIVE SKILLS MATRIX</span>
              <span className="text-white/20">•</span>
              <span>GROUNDED IN REAL REPOSITORIES</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-headline font-extrabold tracking-tight text-[#F5F5F4] leading-[1.02]">
              Select a Skill to Trace<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white">
                its Project Execution.
              </span>
            </h2>
          </div>

          <p className="text-sm font-mono text-slate-400 max-w-sm">
            No synthetic proficiency bars or ratings. Every listed competency links directly to an active project implementation in this portfolio.
          </p>
        </div>

        {/* Matrix Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Skill Pills */}
          <div className="lg:col-span-7 space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">
              Available Technical Competencies (Click to Inspect)
            </div>

            <div className="flex flex-wrap gap-2.5">
              {skillsData.map((skill) => {
                const isSelected = selectedSkill === skill.name;
                return (
                  <button
                    key={skill.name}
                    onClick={() => setSelectedSkill(skill.name)}
                    onMouseEnter={() => setSelectedSkill(skill.name)}
                    className={`px-4 py-2.5 rounded-2xl text-xs font-mono transition-all text-left flex items-center gap-2 cursor-pointer ${
                      isSelected
                        ? 'bg-[#3B82F6] text-white font-bold shadow-lg shadow-[#3B82F6]/30 border border-blue-400'
                        : 'bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <span>{skill.name}</span>
                    <span className={`text-[10px] ${isSelected ? 'text-blue-100' : 'text-slate-500'}`}>
                      ({skill.connectedProjects.length})
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Connected Project Inspector */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-[#0D0E12] border border-white/15 p-6 sm:p-8 shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="space-y-0.5">
                  <div className="text-[10px] font-mono text-[#3B82F6] uppercase font-bold">
                    {currentSkillData.domain}
                  </div>
                  <h3 className="text-xl font-headline font-bold text-white">
                    {currentSkillData.name}
                  </h3>
                </div>
                <span className="px-2.5 py-1 rounded-full bg-[#14B8A6]/20 text-[#14B8A6] text-xs font-mono font-semibold">
                  Verified In Code
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                {currentSkillData.description}
              </p>

              {/* Connected Projects List */}
              <div className="space-y-2.5 pt-2">
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold flex items-center gap-1.5">
                  <FolderGit2 className="w-3.5 h-3.5 text-[#3B82F6]" />
                  <span>Projects Powered by this Skill:</span>
                </div>

                <div className="space-y-2 font-mono text-xs">
                  {currentSkillData.connectedProjects.map((proj, pIdx) => (
                    <div
                      key={pIdx}
                      className="p-3.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between hover:border-blue-500/40 transition-all"
                    >
                      <div className="space-y-0.5">
                        <div className="font-bold text-white">{proj.title}</div>
                        <div className="text-[11px] text-slate-400">{proj.role}</div>
                      </div>

                      {onOpenProject && (
                        <button
                          onClick={() => onOpenProject(proj.id)}
                          className="p-2 rounded-xl bg-white/10 hover:bg-[#3B82F6] text-slate-300 hover:text-white transition-all cursor-pointer"
                          aria-label={`Open ${proj.title}`}
                        >
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
