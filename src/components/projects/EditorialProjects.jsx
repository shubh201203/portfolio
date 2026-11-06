import React from 'react';
import { 
  ArrowRight, 
  ExternalLink, 
  CheckCircle2, 
  Terminal
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function EditorialProjects({ onOpenCaseStudy }) {
  const { projects } = portfolioData;

  const productAnalytics = projects.find((p) => p.id === 'product-analytics');
  const disasterReporting = projects.find((p) => p.id === 'disaster-reporting');
  const smartResume = projects.find((p) => p.id === 'smart-resume');
  const wardrobeWhiz = projects.find((p) => p.id === 'wardrobewhiz');
  const emotionMusic = projects.find((p) => p.id === 'emotion-music');
  const todoProject = projects.find((p) => p.id === 'todo');

  return (
    <section id="projects" className="py-24 border-b border-gray-200/80 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-6 border-b border-gray-200">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200 mb-3">
              <Terminal className="w-3.5 h-3.5" />
              <span>Editorial Project Portfolio</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight">
              APPLIED DATA SYSTEMS &amp; CAPSTONES
            </h2>
            <p className="text-gray-600 mt-2 text-sm sm:text-base max-w-2xl leading-relaxed">
              Every system is engineered with its own tailored visual treatment: consumer conversion funnels, multi-role crisis orchestration, applied AI, and persistent data layers.
            </p>
          </div>

          <div className="text-xs font-mono text-gray-500 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-lg shrink-0">
            6 Specialized Case Studies
          </div>
        </div>

        {/* 1. PRODUCT ANALYTICS (BITEPULSE) — CONSUMER ANALYTICS & CONVERSION FUNNEL TREATMENT */}
        {productAnalytics && (
          <div className="mb-14 rounded-3xl bg-[#0B0F19] text-white p-6 sm:p-8 lg:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              <div className="lg:col-span-7 space-y-5">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-blue-600 text-white uppercase tracking-wider">
                    Product Analytics Warehouse
                  </span>
                  <span className="text-xs font-mono text-cyan-400">
                    1.6M+ Events · 11-Table Semantic Model · 66 DAX
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  {productAnalytics.title}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  {productAnalytics.tagline}
                </p>

                {/* 7-Stage Visual Conversion Funnel */}
                <div className="p-4 rounded-2xl bg-black/50 border border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono text-cyan-300 font-bold uppercase">
                    <span>7-Stage Conversion Funnel Flow</span>
                    <span>27.78% Session-to-Order</span>
                  </div>

                  <div className="flex flex-wrap items-center gap-1.5 text-xs font-mono">
                    {['Session Start', 'Menu View', 'Cart Add', 'Checkout', 'Payment', 'Order Placed', 'Fulfilled'].map((step, idx) => (
                      <React.Fragment key={step}>
                        <span className="px-2.5 py-1 rounded bg-white/10 border border-white/10 text-white font-medium">
                          {step}
                        </span>
                        {idx < 6 && <span className="text-cyan-400 font-bold">→</span>}
                      </React.Fragment>
                    ))}
                  </div>

                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/10 text-center font-mono">
                    <div className="p-2 rounded bg-white/5">
                      <div className="text-[10px] text-slate-400 uppercase">Checkout Conv.</div>
                      <div className="text-base font-bold text-emerald-400 mt-0.5">85.39%</div>
                    </div>
                    <div className="p-2 rounded bg-white/5">
                      <div className="text-[10px] text-slate-400 uppercase">Repeat Ordering</div>
                      <div className="text-base font-bold text-cyan-400 mt-0.5">68.90%</div>
                    </div>
                    <div className="p-2 rounded bg-white/5">
                      <div className="text-[10px] text-slate-400 uppercase">Effective Take</div>
                      <div className="text-base font-bold text-white mt-0.5">19.91%</div>
                    </div>
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {productAnalytics.techStack.map((tech) => (
                    <span key={tech} className="px-2.5 py-1 rounded text-xs font-mono bg-white/5 text-slate-300 border border-white/10">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action and Metrics */}
              <div className="lg:col-span-5 space-y-4">
                <div className="p-6 rounded-2xl bg-[#111827] border border-white/10 space-y-4">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                    Analytical Highlights
                  </div>
                  <div className="space-y-2 text-xs text-slate-300 leading-relaxed">
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>1.24M clickstream events, 180K sessions, and 50K completed orders modeled in PostgreSQL 18.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>26 complex SQL analytical queries analyzing funnel drop-offs, hour-of-day surge, and user cohort lifetime value.</span>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <span>6-page Power BI suite backed by 66 DAX measures and an 11-table semantic model.</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onOpenCaseStudy('product-analytics')}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-blue-600 text-white hover:bg-blue-500 shadow-glow-blue transition-colors cursor-pointer"
                  >
                    <span>View Product Analytics Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* 2. DISASTER RESPONSE SYSTEM (DIRS) — MULTI-ROLE CRISIS COORDINATION TREATMENT */}
        {disasterReporting && (
          <div className="mb-14 rounded-3xl bg-gray-50 border border-gray-200 p-6 sm:p-8 lg:p-10 shadow-subtle space-y-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-gray-200">
              <div className="space-y-2 max-w-3xl">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-gray-900 text-white uppercase tracking-wider">
                    B.Tech Capstone Project
                  </span>
                  <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200 font-semibold">
                    Team Leader · 4-Member Team
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-950 tracking-tight">
                  {disasterReporting.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {disasterReporting.tagline}
                </p>
              </div>

              <button
                onClick={() => onOpenCaseStudy('disaster-reporting')}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-gray-950 text-white hover:bg-blue-600 transition-colors shadow-subtle shrink-0"
              >
                <span>View Capstone Architecture</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* 4-Stakeholder Architecture Visual Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { role: 'Citizens', desc: 'Incident reporting, photo verification, SOS broadcast, evacuation routing' },
                { role: 'Volunteers', desc: 'Task allocation, real-time check-ins, field inventory, live updates' },
                { role: 'NGO Teams', desc: 'Resource dispatching, relief material tracking, shelter occupancy' },
                { role: 'Government Admin', desc: 'Incident validation, high-level map overlays, emergency coordination' }
              ].map((r) => (
                <div key={r.role} className="p-5 rounded-2xl bg-white border border-gray-200 shadow-subtle space-y-2">
                  <div className="text-xs font-mono text-blue-700 font-bold uppercase">{r.role}</div>
                  <p className="text-xs text-gray-600 leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>

            {/* Engineering Highlights Pill Strip */}
            <div className="p-4 rounded-xl bg-white border border-gray-200 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-gray-600">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span>PuLP Linear Optimization + Google OR-Tools Spatial Routing</span>
              </div>
              <span>Sub-15ms Proximity Queries · Sub-45ms API P95 Latency</span>
            </div>
          </div>
        )}

        {/* 3, 4, 5, 6. SECONDARY CASE STUDIES GRID (Bespoke Editorial Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* SmartResume AI: Recruiter Intelligence & Scoring Rubric */}
          {smartResume && (
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-gray-200 shadow-card hover:shadow-elevated transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <span className="text-xs font-mono text-blue-700 font-bold uppercase">
                    AI Recruiter Intelligence
                  </span>
                  <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    29 Tests Verified
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-950 tracking-tight">{smartResume.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{smartResume.tagline}</p>

                <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                  <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-200">
                    <div className="font-bold text-gray-900">Deterministic Scoring</div>
                    <div className="text-[10px] text-gray-500 font-mono mt-0.5">Math 1.0–10.0 + Evidence Quotes</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-200">
                    <div className="font-bold text-gray-900">3-Way Comparison</div>
                    <div className="text-[10px] text-gray-500 font-mono mt-0.5">Benchmarking + CSV Export</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <button
                  onClick={() => onOpenCaseStudy('smart-resume')}
                  className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Inspect Scoring Engine</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                {smartResume.links?.live && (
                  <a
                    href={smartResume.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-gray-700 hover:text-blue-600 transition-colors inline-flex items-center gap-1"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          )}

          {/* WardrobeWhiz: AI Vision & Outfit Balance Analytics */}
          {wardrobeWhiz && (
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-gray-200 shadow-card hover:shadow-elevated transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <span className="text-xs font-mono text-amber-700 font-bold uppercase">
                    Computer Vision + AI
                  </span>
                  <span className="text-xs font-mono text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                    MobileNet + React
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-950 tracking-tight">{wardrobeWhiz.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{wardrobeWhiz.tagline}</p>

                <div className="grid grid-cols-3 gap-2 text-center text-xs pt-1">
                  <div className="p-2 rounded-lg bg-gray-50 border border-gray-200">
                    <div className="font-bold text-gray-900 text-xs">Digital Closet</div>
                    <div className="text-[10px] text-gray-500 font-mono mt-0.5">MobileNet Vision</div>
                  </div>
                  <div className="p-2 rounded-lg bg-gray-50 border border-gray-200">
                    <div className="font-bold text-gray-900 text-xs">AI Stylist</div>
                    <div className="text-[10px] text-gray-500 font-mono mt-0.5">Rule Harmony</div>
                  </div>
                  <div className="p-2 rounded-lg bg-gray-50 border border-gray-200">
                    <div className="font-bold text-gray-900 text-xs">Style Analytics</div>
                    <div className="text-[10px] text-gray-500 font-mono mt-0.5">Balance Index</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <button
                  onClick={() => onOpenCaseStudy('wardrobewhiz')}
                  className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Inspect Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                {wardrobeWhiz.links?.live && (
                  <a
                    href={wardrobeWhiz.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-gray-700 hover:text-blue-600 transition-colors inline-flex items-center gap-1"
                  >
                    <span>Live Web App</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          )}

          {/* Emotion-Driven Beats: Audio Synthesis & Fuzzy Mood Mapping */}
          {emotionMusic && (
            <div className="p-6 sm:p-7 rounded-2xl bg-white border border-gray-200 shadow-card hover:shadow-elevated transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-gray-100 pb-3">
                  <span className="text-xs font-mono text-purple-700 font-bold uppercase">
                    Audio Synthesis & RL
                  </span>
                  <span className="text-xs font-mono text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200">
                    Live Cloud Deployed
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-950 tracking-tight">{emotionMusic.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{emotionMusic.tagline}</p>

                <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                  <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-200">
                    <div className="font-bold text-gray-900">Fuzzy Mood Engine</div>
                    <div className="text-[10px] text-gray-500 font-mono mt-0.5">Valence, Energy & Tempo Map</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-gray-50 border border-gray-200">
                    <div className="font-bold text-gray-900">Spotify + RL Feedback</div>
                    <div className="text-[10px] text-gray-500 font-mono mt-0.5">Seed Genre Pivoting</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <button
                  onClick={() => onOpenCaseStudy('emotion-music')}
                  className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Inspect Recommendation Engine</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                {emotionMusic.links?.live && (
                  <a
                    href={emotionMusic.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-gray-700 hover:text-blue-600 transition-colors inline-flex items-center gap-1"
                  >
                    <span>Live App</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          )}

          {/* TO-DO Desktop: Minimalist Text-Only Card Without Image Placeholder */}
          {todoProject && (
            <div className="p-6 sm:p-7 rounded-2xl bg-gray-50 border border-gray-200 shadow-card hover:shadow-elevated transition-all flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-gray-200/80 pb-3">
                  <span className="text-xs font-mono text-emerald-800 font-bold uppercase">
                    Software Architecture & Persistence
                  </span>
                  <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200 font-bold">
                    52 Tests Passed
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-950 tracking-tight">{todoProject.title}</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{todoProject.tagline}</p>

                <div className="grid grid-cols-2 gap-2 text-xs pt-1">
                  <div className="p-2.5 rounded-lg bg-white border border-gray-200">
                    <div className="font-bold text-gray-900">Dual Persistence</div>
                    <div className="text-[10px] text-gray-500 font-mono mt-0.5">PostgreSQL (Neon) + SQLite</div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-gray-200">
                    <div className="font-bold text-gray-900">Full CRUD & Filtering</div>
                    <div className="text-[10px] text-gray-500 font-mono mt-0.5">Priority & Overdue Flags</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-200 flex items-center justify-between">
                <button
                  onClick={() => onOpenCaseStudy('todo')}
                  className="text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Inspect Persistence Architecture</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                {todoProject.links?.github && (
                  <a
                    href={todoProject.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-gray-700 hover:text-blue-600 transition-colors inline-flex items-center gap-1"
                  >
                    <span>GitHub Code</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
