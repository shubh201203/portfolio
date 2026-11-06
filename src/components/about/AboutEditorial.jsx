import React from 'react';
import { 
  Sparkles, 
  Database, 
  BarChart3, 
  Code2, 
  Layers, 
  ShieldCheck, 
  GraduationCap, 
  ArrowUpRight 
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function AboutEditorial() {
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
    <section id="about" className="py-24 sm:py-32 bg-[#F6F4ED] text-[#111215] border-b border-[#111215]/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="pb-8 border-b border-[#111215]/10 mb-14 sm:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#111215]/60 font-bold mb-3">
              <span className="text-[#111215]">01 / INTRODUCTION</span>
              <span>—</span>
              <span>THE THINKING &amp; FOUNDATIONS</span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-headline font-extrabold tracking-tight text-[#111215] leading-[1.05]">
              CURIOUS BY DEFAULT.<br />
              <span className="text-[#111215]/50">ANALYTICAL BY NATURE.</span>
            </h2>
          </div>

          <p className="text-sm font-mono text-[#111215]/60 max-w-sm">
            Translating complex operational chaos into structured relational models and decision-grade intelligence.
          </p>
        </div>

        {/* Asymmetrical 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Natural Narrative & Academic Credentials */}
          <div className="lg:col-span-7 space-y-10">
            
            {/* Story Paragraphs */}
            <div className="space-y-6 text-base sm:text-lg text-[#111215]/80 leading-relaxed font-normal">
              <p>
                I am a data analyst and computer science undergraduate focused on translating multi-source operational data into clean, structured analytical models and decision-grade business intelligence.
              </p>
              
              <p>
                My work centers around the complete data lifecycle: raw data hygiene and transformation in <strong className="text-[#111215] font-semibold">Python &amp; Pandas</strong>, dimensional data warehousing (<strong className="text-[#111215] font-semibold">Star Schema</strong>) in <strong className="text-[#111215] font-semibold">PostgreSQL 18</strong>, structured analytical SQL with CTEs and window calculations, and interactive <strong className="text-[#111215] font-semibold">Power BI reporting suites</strong> powered by mathematically reconciled DAX measures.
              </p>

              <p>
                Beyond standard dashboard reporting, I care deeply about how analytical information is experienced. Whether it is diagnosing a multi-step checkout funnel drop-off, tracking an 18-month customer cohort retention decay, or building full-stack applications with React and FastAPI, I bridge raw numbers with clear product insights.
              </p>
            </div>

            {/* Profile Presentation with Editorial Framing */}
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-[#111215]/10 shadow-editorial flex flex-col sm:flex-row items-center gap-6">
              <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-[#111215]/20 bg-[#111215] shrink-0 shadow-md">
                <img
                  src={`${import.meta.env.BASE_URL}images/profile.jpg`}
                  alt="Shubh Sharma"
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="space-y-2 text-center sm:text-left">
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
                  <span className="text-base font-headline font-bold text-[#111215]">Shubh Sharma</span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-800 border border-emerald-500/20 text-[10px] font-mono font-semibold">
                    Candidate Profile
                  </span>
                </div>
                <p className="text-xs text-[#111215]/70 font-mono">
                  Data Analyst • Business Intelligence • Analytics Engineering
                </p>
                <div className="text-[11px] text-[#111215]/60 font-mono flex flex-wrap items-center justify-center sm:justify-start gap-2 pt-1">
                  <span>Based in Amaravati, India</span>
                  <span>•</span>
                  <span>Targeting Summer 2027 Internships</span>
                </div>
              </div>
            </div>

            {/* Academic Foundations (Exact degree wording, NO CGPA) */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#111215]/60 font-bold">
                <GraduationCap className="w-4 h-4 text-[#111215]" />
                <span>Academic Foundations &amp; Degrees</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-white border border-[#111215]/10 shadow-subtle space-y-1.5">
                  <div className="text-sm font-bold text-[#111215] font-display">
                    VIT-AP University
                  </div>
                  <div className="text-xs text-[#111215]/80 font-medium">
                    B.Tech in Computer Science and Engineering (Core)
                  </div>
                  <div className="text-xs font-mono text-[#111215]/50 pt-1">
                    2023–2027 • Amaravati, AP
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-blue-600/30 shadow-subtle space-y-1.5">
                  <div className="text-sm font-bold text-[#111215] font-display">
                    Indian Institute of Technology Madras
                  </div>
                  <div className="text-xs text-[#111215]/80 font-medium">
                    BS Degree in Data Science and Management
                  </div>
                  <div className="text-xs font-mono text-blue-700 font-bold pt-1">
                    Foundational Level — Pursuing
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#111215]/10 flex flex-wrap items-center justify-between text-xs font-mono text-[#111215]/70 shadow-subtle">
                <span>Secondary &amp; Senior Secondary Board Records:</span>
                <span className="font-bold text-[#111215]">Class X: 95% &nbsp;|&nbsp; Class XII: 78%</span>
              </div>
            </div>

          </div>

          {/* Right Column: Core Disciplines & Zero Speculation Pledge */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="text-xs font-mono uppercase tracking-wider text-[#111215]/60 font-bold">
              Core Competencies // The 4 Pillars
            </div>

            <div className="space-y-3.5">
              {disciplines.map((d, idx) => {
                const IconComponent = d.icon;
                return (
                  <div 
                    key={idx}
                    className="p-5 sm:p-6 rounded-2xl bg-white border border-[#111215]/10 shadow-subtle hover:border-[#111215]/30 transition-all space-y-2 group"
                  >
                    <div className="flex items-center justify-between text-sm font-bold text-[#111215] font-display">
                      <span className="flex items-center gap-2">
                        <IconComponent className="w-4 h-4 text-[#111215]/70 group-hover:text-[#111215] transition-colors" />
                        <span>{d.title}</span>
                      </span>
                      <span className="text-xs font-mono text-[#111215]/40 group-hover:text-[#111215] transition-colors">
                        0{idx + 1}
                      </span>
                    </div>
                    <p className="text-xs text-[#111215]/70 leading-relaxed font-normal">
                      {d.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Zero Speculation Pledge */}
            <div className="p-6 sm:p-7 rounded-3xl bg-[#111215] text-[#F6F4ED] border border-[#111215] space-y-3 shadow-editorial">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#D8F243] font-bold">
                <ShieldCheck className="w-4 h-4 text-[#D8F243]" />
                <span>Zero Speculation Standard</span>
              </div>
              <p className="text-xs text-[#F6F4ED]/80 leading-relaxed font-normal">
                "Every metric published across my portfolio is backed by automated tests, grain-aware database schemas, and mathematical reconciliation between SQL queries and DAX measures. No fabricated numbers, ever."
              </p>
              <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-[#F6F4ED]/50">
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
