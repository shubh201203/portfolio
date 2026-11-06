'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, CheckCircle2, TrendingUp, Layers, Sparkles } from 'lucide-react';

export default function ExperienceTimeline() {
  const [metricsVisible, setMetricsVisible] = useState(false);

  const metrics = [
    { label: 'Projects Completed', value: '6+', detail: 'Production & Analytics Suites' },
    { label: 'Dashboards Built', value: '12+', detail: 'Interactive Power BI Pages' },
    { label: 'Business Questions Answered', value: '40+', detail: 'Empirical Hypotheses' },
    { label: 'Hours of Manual Reporting Reduced', value: '150+', detail: 'Automated SQL & DAX' },
    { label: 'Datasets Analyzed', value: '200K+', detail: 'Validated Transaction Records' },
  ];

  const experiences = [
    {
      role: 'Data Analytics & BI Engineering Lead',
      company: 'NovaCart & Independent Analytics Research',
      dates: '2025 – Present',
      scope: 'End-to-end data lifecycle architecture: Python ETL, PostgreSQL 18 star schema warehousing, and executive Power BI reporting.',
      bullets: [
        'Cleaned and modeled 104,852 sales and payment transactions into an 8-table star schema with surrogate keys and 0 orphan records.',
        'Authored 30+ DAX measures and 6 executive dashboard views, uncovering a 39.81% gross demand loss and segmenting 3,970 active customer accounts.',
      ],
      tools: ['PostgreSQL 18', 'Power BI', 'DAX', 'Python', 'Star Schema', 'FastAPI'],
    },
    {
      role: 'Analytics Engineering & Cloud Data Fellow',
      company: 'Microsoft Certified Professional Cohort',
      dates: '2025 – 2026',
      scope: 'Enterprise lakehouse architecture, semantic modeling, and automated cloud data transformation workflows.',
      bullets: [
        'Earned official DP-600 (Fabric Analytics Engineer Associate) and DP-900 (Azure Data Fundamentals) credentials.',
        'Engineered Delta Parquet storage pipelines and semantic models connecting OneLake storage directly to Power BI.',
      ],
      tools: ['Microsoft Fabric', 'OneLake', 'Azure Synapse', 'T-SQL', 'Delta Parquet'],
    },
    {
      role: 'Undergraduate Data Science & Systems Builder',
      company: 'VIT-AP University & IIT Madras (BS Degree Pathway)',
      dates: '2023 – Present',
      scope: 'Dual-track academic education in Computer Science Core and Data Science / Statistics Foundations.',
      bullets: [
        'Applied EDA, statistical correlation analysis, and regression modeling to identify user churn drivers and checkout funnel friction.',
        'Built full-stack data applications with PostgreSQL, FastAPI, React, and automated unit testing suites.',
      ],
      tools: ['Python', 'SQL', 'PostgreSQL', 'Pandas', 'Statistics', 'React'],
    },
  ];

  return (
    <section id="experience" className="py-24 sm:py-32 bg-[#0A0A0B] text-[#F5F5F4] border-b border-white/10 relative overflow-hidden">
      
      {/* Background Subtle Gradient */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#3B82F6]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#14B8A6]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ============================================================== */}
        {/* COMPACT IMPACT METRICS (COUNT-UP / PROOF STRIP)               */}
        {/* ============================================================== */}
        <div className="mb-20 sm:mb-24">
          <div className="pb-8 border-b border-white/10 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.24em] text-[#3B82F6] font-bold mb-2">
                <span>04 // IMPACT METRICS</span>
                <span className="text-white/20">•</span>
                <span>MEASURED RESULTS</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-headline font-extrabold tracking-tight text-[#F5F5F4]">
                By the Numbers
              </h2>
            </div>
            <p className="text-xs font-mono text-slate-400 max-w-sm">
              Empirical portfolio benchmarks across dimensional warehousing, executive reporting, and automated pipelines.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
            {metrics.map((m, idx) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.08 }}
                className="p-5 rounded-2xl bg-[#0D0E12] border border-white/10 space-y-2 hover:border-[#3B82F6]/40 transition-all"
              >
                <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-headline text-white tracking-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-[#3B82F6]">
                    {m.value}
                  </span>
                </div>
                <div className="text-xs font-bold text-slate-200 font-mono">
                  {m.label}
                </div>
                <div className="text-[10px] text-slate-400 font-mono">
                  {m.detail}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ============================================================== */}
        {/* VERTICAL EXPERIENCE TIMELINE                                   */}
        {/* ============================================================== */}
        <div>
          <div className="pb-8 border-b border-white/10 mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.24em] text-[#14B8A6] font-bold mb-2">
                <span>05 // WORK &amp; ACADEMIC TIMELINE</span>
                <span className="text-white/20">•</span>
                <span>PROVEN TRACK RECORD</span>
              </div>
              <h3 className="text-3xl sm:text-5xl font-headline font-extrabold tracking-tight text-[#F5F5F4]">
                Experience &amp; Leadership
              </h3>
            </div>
            <p className="text-xs font-mono text-slate-400 max-w-sm">
              A chronology of data engineering, cloud analytics engineering, and academic computer science projects.
            </p>
          </div>

          {/* Timeline Container with Center Vertical Line */}
          <div className="relative border-l border-white/15 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
            {experiences.map((exp, idx) => (
              <motion.div
                key={exp.role}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative group"
              >
                {/* Timeline Bullet Anchor */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-[#0A0A0B] border-2 border-[#3B82F6] flex items-center justify-center group-hover:scale-125 transition-transform">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#14B8A6]" />
                </div>

                <div className="p-6 sm:p-8 rounded-3xl bg-[#0D0E12] border border-white/10 hover:border-[#3B82F6]/40 transition-all space-y-4 shadow-xl">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-white/10">
                    <div>
                      <h4 className="text-lg sm:text-xl font-bold font-headline text-white group-hover:text-[#3B82F6] transition-colors">
                        {exp.role}
                      </h4>
                      <div className="text-xs font-mono text-slate-300 font-semibold mt-0.5">
                        {exp.company}
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300 w-fit">
                      <Calendar className="w-3 h-3 text-[#3B82F6]" />
                      <span>{exp.dates}</span>
                    </div>
                  </div>

                  {/* One-Line Scope */}
                  <p className="text-sm font-sans text-slate-300 leading-relaxed font-normal">
                    {exp.scope}
                  </p>

                  {/* Two Outcome-Focused Bullets */}
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300 font-sans">
                    {exp.bullets.map((bullet, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-[#14B8A6] shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Relevant Tools Tags */}
                  <div className="pt-2 flex flex-wrap gap-2">
                    {exp.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] font-mono text-slate-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
