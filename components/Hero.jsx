'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  ArrowDown, 
  FileText, 
  Clock, 
  Compass, 
  Database, 
  Layers, 
  Sparkles,
  ChevronDown,
  BarChart3,
  TrendingUp,
  Activity
} from 'lucide-react';
import { asset } from '@/lib/utils';
import { portfolioData } from '@/data/portfolioData';

export default function Hero({ onExploreWork, onExplorePipeline }) {
  const { personal } = portfolioData;
  const [istTime, setIstTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const formatted = now.toLocaleTimeString('en-US', {
        timeZone: 'Asia/Kolkata',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      setIstTime(formatted);
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-[94vh] pt-28 sm:pt-36 pb-16 bg-[#0A0A0B] text-[#F5F5F4] overflow-hidden flex flex-col justify-between border-b border-white/10">
      
      {/* Background Data Grid & Subtle Radial Ambient Aura */}
      <div className="absolute inset-0 data-grid opacity-25 pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[360px] bg-[#3B82F6]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[420px] h-[260px] bg-[#14B8A6]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Composition Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex-1 flex flex-col justify-between">
        
        {/* Top Telemetry Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 pb-6 border-b border-white/10 font-mono text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-slate-200">
              <span className="w-2 h-2 rounded-full bg-[#14B8A6] animate-pulse" />
              <span className="font-semibold text-white">ANALYTICS ENGINE // ACTIVE</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-400 text-[11px] backdrop-blur-md">
              <Clock className="w-3.5 h-3.5 text-[#3B82F6]" />
              <span className="text-slate-200 font-bold">{istTime || '21:00:00'} IST</span>
              <span className="text-white/20">|</span>
              <Compass className="w-3.5 h-3.5 text-[#14B8A6]" />
              <span>Amaravati 16.5°N · 80.5°E</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-[11px]">
            <span className="px-3 py-1 rounded-full bg-[#3B82F6]/15 border border-[#3B82F6]/30 text-[#3B82F6] font-semibold">
              4x Microsoft &amp; Google Certified (Oct 2026)
            </span>
            <span className="text-white/20 hidden sm:inline">•</span>
            <span className="text-slate-400 hidden sm:inline">100% Reconciled SQL / DAX</span>
          </div>
        </div>

        {/* Hero Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center py-12 sm:py-16 my-auto">
          
          {/* Left Column: Monolithic Headline & Positioning */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Identity Badge */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.24em] text-[#3B82F6] font-bold"
            >
              <span>SHUBH SHARMA // DATA ANALYST &amp; BUILDER</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] animate-pulse" />
            </motion.div>

            {/* Giant Monolithic Headline with Staggered Framer Motion Reveal */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-5xl sm:text-7xl lg:text-8xl xl:text-[92px] font-headline font-extrabold tracking-tighter text-[#F5F5F4] leading-[0.94]"
              >
                I turn complex data<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-[#3B82F6]">
                  into decisions.
                </span>
              </motion.h1>
            </div>

            {/* Supporting Creative Positioning Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="space-y-4 max-w-2xl"
            >
              <p className="text-lg sm:text-xl font-display font-medium text-slate-200 leading-snug">
                Turning multi-source operational clickstreams into star-schema relational warehouses in <strong className="text-white font-semibold">PostgreSQL 18</strong>, formulating grain-safe analytical SQL suites, and delivering mathematically reconciled <strong className="text-white font-semibold">Power BI / DAX</strong> executive reporting suites.
              </p>

              <div className="flex items-center gap-3 text-xs font-mono text-[#14B8A6]">
                <span className="w-2 h-2 rounded-full bg-[#14B8A6]" />
                <span>Available for Summer 2027 Internships // Data &amp; BI Analytics</span>
              </div>
            </motion.div>

            {/* Analytical Benchmarks Strip */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1 font-mono text-xs"
            >
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-0.5">
                <div className="text-[10px] text-slate-400 uppercase font-semibold">Realized Rev</div>
                <div className="text-base sm:text-lg font-bold text-white">₹847.62M</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-0.5">
                <div className="text-[10px] text-slate-400 uppercase font-semibold">Settled Cash</div>
                <div className="text-base sm:text-lg font-bold text-[#14B8A6]">₹796.75M</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-0.5">
                <div className="text-[10px] text-slate-400 uppercase font-semibold">Gross Margin</div>
                <div className="text-base sm:text-lg font-bold text-[#3B82F6]">30.93%</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 space-y-0.5">
                <div className="text-[10px] text-slate-400 uppercase font-semibold">Repeat Buyers</div>
                <div className="text-base sm:text-lg font-bold text-cyan-300">82.12%</div>
              </div>
            </motion.div>

            {/* Action Triggers */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <button
                onClick={() => {
                  if (onExploreWork) onExploreWork();
                  else scrollTo('work');
                }}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-bold bg-[#3B82F6] hover:bg-blue-600 text-white transition-all shadow-lg shadow-[#3B82F6]/30 active:scale-[0.98] cursor-pointer"
              >
                <span>Explore Featured Work</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              <button
                onClick={() => {
                  if (onExplorePipeline) onExplorePipeline();
                  else scrollTo('how-it-works');
                }}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-sm font-semibold bg-white/10 hover:bg-white/15 text-white border border-white/15 transition-all active:scale-[0.98] cursor-pointer"
              >
                <span>The 6-Stage Process</span>
                <ArrowDown className="w-4 h-4 text-slate-400" />
              </button>

              <a
                href={asset('/resume.pdf')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-full text-xs font-mono text-slate-300 hover:text-white border border-white/10 hover:border-white/25 transition-colors bg-white/5"
              >
                <FileText className="w-3.5 h-3.5 text-[#3B82F6]" />
                <span>Resume PDF ↗</span>
              </a>
            </motion.div>

          </div>

          {/* Right Column: Animated Chart & Telemetry Visual Focal Point */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0D0E12] border border-white/10 shadow-2xl relative overflow-hidden space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10 font-mono text-xs">
                <div className="flex items-center gap-2 text-[#3B82F6] font-bold">
                  <Activity className="w-4 h-4" />
                  <span>ANALYTICAL FOCAL TELEMETRY</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-[#14B8A6]/20 text-[#14B8A6] font-semibold text-[10px]">
                  LIVE RECONCILED
                </span>
              </div>

              {/* Animated Vector Chart Display */}
              <div className="space-y-3 font-mono text-xs">
                <div className="relative w-full h-44 rounded-2xl bg-black/40 border border-white/5 p-4 flex flex-col justify-between overflow-hidden">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>Grain-Safe Velocity</span>
                    <span className="text-white font-bold">104,852 Staged Rows</span>
                  </div>

                  {/* SVG Animated Sparkline */}
                  <svg className="w-full h-24 overflow-visible" viewBox="0 0 300 80">
                    <defs>
                      <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <motion.path
                      d="M 0 65 Q 40 55, 75 45 T 150 35 T 225 20 T 300 8 L 300 80 L 0 80 Z"
                      fill="url(#chartGrad)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    />
                    <motion.path
                      d="M 0 65 Q 40 55, 75 45 T 150 35 T 225 20 T 300 8"
                      fill="none"
                      stroke="#3B82F6"
                      strokeWidth="2.5"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.5, ease: 'easeInOut' }}
                    />
                    {/* Glowing Data Marker */}
                    <circle cx="300" cy="8" r="4" fill="#14B8A6" className="animate-ping" />
                    <circle cx="300" cy="8" r="3" fill="#F5F5F4" />
                  </svg>

                  <div className="flex items-center justify-between text-[10px] text-slate-500">
                    <span>Q1 2022: ₹38.5M</span>
                    <span>Q4 2026: ₹847.62M</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between">
                  <span className="text-slate-400">PostgreSQL Star Schema:</span>
                  <span className="text-white font-bold">8 Tables · 0 Orphans</span>
                </div>

                <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-between">
                  <span className="text-slate-400">Power BI Measure Accuracy:</span>
                  <span className="text-[#14B8A6] font-bold">100% Reconciled DAX</span>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Verified Repository Baseline</span>
                <span className="text-[#3B82F6]">Zero Fabrication</span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Editorial Scroll Cue */}
        <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse" />
            <span className="font-bold text-white">THE 6-STAGE PROCESS</span>
            <span className="text-white/20">|</span>
            <span>HOW I WORK</span>
          </div>

          <button
            onClick={() => scrollTo('how-it-works')}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
          >
            <span>SCROLL TO EXPLORE PROCESS</span>
            <ChevronDown className="w-4 h-4 text-[#3B82F6] animate-bounce" />
          </button>
        </div>

      </div>

    </section>
  );
}
