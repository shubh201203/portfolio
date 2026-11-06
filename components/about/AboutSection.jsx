'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Database, 
  BarChart3, 
  Code2, 
  Layers, 
  ShieldCheck, 
  GraduationCap 
} from 'lucide-react';
import { asset } from '@/lib/utils';
import { portfolioData } from '@/data/portfolioData';

export default function AboutSection() {
  const disciplines = [
    {
      title: 'Data Analytics & Relational Modeling',
      desc: 'Formulating grain-safe analytical SQL suites, star schemas in PostgreSQL 18, and exploratory Python data pipelines.',
      icon: Database,
    },
    {
      title: 'Business Intelligence & Semantic DAX',
      desc: 'Designing high-reconciliation executive dashboards in Power BI Desktop with complex DAX measures and cohort retention matrices.',
      icon: BarChart3,
    },
    {
      title: 'Product & Growth Analytics',
      desc: 'Analyzing user journey funnels, multi-step checkout drop-offs, retention curves, and A/B experiment evaluation frameworks.',
      icon: Layers,
    },
    {
      title: 'Applied Engineering & Intelligent Systems',
      desc: 'Developing resilient full-stack systems with FastAPI, Node.js, and React backed by automated unit test suites.',
      icon: Code2,
    },
  ];

  return (
    <section id="about" className="py-16 sm:py-20 bg-[#07080B] text-white border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="pb-6 border-b border-white/10 mb-8 sm:mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.24em] text-blue-400 font-bold mb-3">
              <span>03 // ABOUT</span>
              <span className="text-white/20">•</span>
              <span>THE THINKING &amp; FOUNDATIONS</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-headline font-extrabold tracking-tight text-white leading-[1.02]">
              CURIOUS BY DEFAULT.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-200">
                ANALYTICAL BY NATURE.
              </span>
            </h2>
          </div>

          <p className="text-sm font-mono text-slate-400 max-w-sm">
            Translating complex operational chaos into structured relational models and decision-grade intelligence.
          </p>
        </div>

        {/* Asymmetrical 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Left Column: Natural Narrative & Academic Record */}
          <div className="lg:col-span-7 space-y-6">
            
            <div className="space-y-6 text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
              <p>
                I am a data analyst and computer science undergraduate focused on translating multi-source operational data into clean, structured analytical models and decision-grade business intelligence.
              </p>
              
              <p>
                My work centers around the complete data lifecycle: raw data hygiene and transformation in <strong className="text-white font-semibold">Python &amp; Pandas</strong>, dimensional data warehousing (<strong className="text-white font-semibold">Star Schema</strong>) in <strong className="text-white font-semibold">PostgreSQL 18</strong>, structured analytical SQL with CTEs and window calculations, and interactive <strong className="text-white font-semibold">Power BI reporting suites</strong> powered by mathematically reconciled DAX measures.
              </p>

              <p>
                Beyond standard dashboard reporting, I care deeply about how analytical information is experienced. Whether it is diagnosing a multi-step checkout funnel drop-off, tracking an 18-month customer cohort retention decay, or building full-stack applications with React and FastAPI, I bridge raw numbers with clear product insights.
              </p>
            </div>

            {/* Profile Presentation */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#0D1017] border border-white/10 shadow-2xl flex flex-col sm:flex-row items-center gap-6">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-white/20 bg-[#121622] shrink-0 shadow-md">
                <img
                  src={asset('/images/profile.jpg')}
                  alt="Shubh Sharma"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="space-y-2 text-center sm:text-left">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <span className="text-lg font-headline font-bold text-white">Shubh Sharma</span>
                  <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-[10px] font-mono font-semibold">
                    Candidate Profile
                  </span>
                </div>
                <p className="text-xs text-slate-400 font-mono">
                  Data Analyst • Business Intelligence • Analytics Engineering
                </p>
                <div className="text-[11px] text-slate-400 font-mono flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1">
                  <span>Based in Amaravati, India</span>
                  <span>•</span>
                  <span>Available Summer 2027</span>
                </div>
              </div>
            </div>

            {/* Academic Foundations Link */}
            <div className="p-5 rounded-2xl bg-[#0B0E17] border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white font-display">
                    Dual Academic Foundations
                  </div>
                  <div className="text-xs text-slate-400 font-mono">
                    VIT-AP B.Tech CSE (Core) &bull; IIT Madras BS Data Science
                  </div>
                </div>
              </div>

              <a
                href="#education"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-[#3B82F6] hover:text-[#14B8A6] transition-colors whitespace-nowrap"
              >
                <span>View Full Credentials</span>
                <span>&rarr;</span>
              </a>
            </div>

          </div>

          {/* Right Column: Core Disciplines & Zero Speculation Standard */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
              Core Competencies // The 4 Pillars
            </div>

            <div className="space-y-3.5">
              {disciplines.map((d, idx) => {
                const IconComponent = d.icon;
                return (
                  <div 
                    key={idx}
                    className="p-5 sm:p-6 rounded-2xl bg-[#0B0E17] border border-white/10 space-y-2 group hover:border-blue-500/40 transition-all"
                  >
                    <div className="flex items-center justify-between text-sm font-bold text-white font-display">
                      <span className="flex items-center gap-2">
                        <IconComponent className="w-4 h-4 text-blue-400" />
                        <span>{d.title}</span>
                      </span>
                      <span className="text-xs font-mono text-slate-500 group-hover:text-blue-400 transition-colors">
                        0{idx + 1}
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed font-normal">
                      {d.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Zero Speculation Pledge */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#0E131F] text-white border border-blue-500/30 space-y-3 shadow-2xl">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-400 font-bold">
                <ShieldCheck className="w-4 h-4 text-blue-400" />
                <span>Zero Speculation Standard</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                "Every metric published across my portfolio is backed by automated tests, grain-aware database schemas, and mathematical reconciliation between SQL queries and DAX measures. No fabricated numbers, ever."
              </p>
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>100% RECONCILED</span>
                <span>28 AUTOMATED TESTS</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
