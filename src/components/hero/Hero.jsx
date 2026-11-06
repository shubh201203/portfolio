import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  FileText, 
  Sparkles, 
  Clock,
  Compass,
  ChevronDown
} from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../common/Icons';
import { portfolioData } from '../../data/portfolioData';
import HeroGenerativeVisualization from './HeroGenerativeVisualization';

export default function Hero({ onExploreNovaCart }) {
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
    <section id="home" className="relative min-h-screen pt-24 sm:pt-28 pb-16 bg-[#08090C] text-white overflow-hidden flex flex-col justify-between border-b border-white/10">
      
      {/* Editorial Background Layers */}
      <div className="absolute inset-0 lab-grid opacity-25 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[650px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[300px] bg-[#D8F243]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full relative z-10 flex-1 flex flex-col justify-between">
        
        {/* Top Technical Telemetry Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 pb-6 border-b border-white/10 font-mono text-xs">
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#D8F243] animate-pulse" />
              <span className="text-white font-semibold">AVAILABLE // SUMMER 2027 INTERNSHIPS</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[11px] text-slate-400 backdrop-blur-md">
              <Clock className="w-3 h-3 text-[#D8F243]" />
              <span className="text-slate-200 font-bold">{istTime || '20:10:00'} IST</span>
              <span className="text-white/20">|</span>
              <Compass className="w-3 h-3 text-[#D8F243]" />
              <span>Amaravati 16.5°N · 80.5°E</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded bg-blue-950/80 border border-blue-500/40 text-blue-300 font-semibold">
              4x Microsoft &amp; Google Certified (Oct 2026)
            </span>
            <span className="text-white/20 hidden sm:inline">•</span>
            <span className="text-slate-400 hidden sm:inline">100% Reconciled SQL / DAX</span>
          </div>
        </div>

        {/* Hero Main Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center py-10 sm:py-14 my-auto">
          
          {/* Left Column: Massive Kinetic Typography Lockup */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Identity & Avatar Strip */}
            <div className="flex items-center gap-3.5">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl overflow-hidden border-2 border-white/20 shadow-glow-blue shrink-0 ring-1 ring-[#D8F243]/30 bg-[#10131B]">
                <img
                  src={`${import.meta.env.BASE_URL}images/profile.jpg`}
                  alt="Shubh Sharma"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="space-y-0.5">
                <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.22em] text-[#D8F243] font-bold">
                  <span>Data Analyst &amp; Quantitative Engineer</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D8F243] animate-pulse" />
                </div>
                <div className="text-xs text-slate-400 font-mono">
                  VIT-AP University (B.Tech) • IIT Madras (BS Data Science)
                </div>
              </div>
            </div>

            {/* Giant Monolithic Headline */}
            <div className="space-y-1">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-[92px] font-headline font-extrabold tracking-tighter text-white leading-[0.92]">
                SHUBH<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-[#D8F243]">
                  SHARMA.
                </span>
              </h1>
            </div>

            {/* Supporting Creative Positioning Statement */}
            <div className="space-y-3 pt-1">
              <div className="text-lg sm:text-2xl font-display font-bold text-slate-200 tracking-tight flex flex-wrap items-center gap-2">
                <span>DATA ANALYST</span>
                <span className="text-[#D8F243]">/</span>
                <span>BUILDING INTELLIGENT EXPERIENCES.</span>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl font-normal">
                I translate complex clickstreams and enterprise operations into clean star-schema relational warehouses in <strong className="text-white font-semibold">PostgreSQL 18</strong>, formulate grain-safe analytical SQL suites, and deliver mathematically reconciled <strong className="text-white font-semibold">Power BI / DAX</strong> executive reporting suites.
              </p>
            </div>

            {/* Key Benchmarks Quick-Check */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 font-mono text-xs">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-0.5">
                <div className="text-[10px] text-slate-400 uppercase">Realized Rev</div>
                <div className="text-base font-bold text-white">₹847.62M</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-0.5">
                <div className="text-[10px] text-slate-400 uppercase">Settled Cash</div>
                <div className="text-base font-bold text-emerald-400">₹796.75M</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-0.5">
                <div className="text-[10px] text-slate-400 uppercase">Margin</div>
                <div className="text-base font-bold text-[#D8F243]">30.93%</div>
              </div>
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-0.5">
                <div className="text-[10px] text-slate-400 uppercase">Repeat Buyers</div>
                <div className="text-base font-bold text-cyan-300">82.12%</div>
              </div>
            </div>

            {/* Action Triggers */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <button
                onClick={() => {
                  if (onExploreNovaCart) onExploreNovaCart();
                  else scrollTo('novacart');
                }}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-sm font-bold bg-[#D8F243] text-gray-950 hover:bg-[#CCFF00] transition-all shadow-glow-blue active:scale-[0.98] cursor-pointer"
              >
                <span>Explore Flagship (NovaCart)</span>
                <ArrowRight className="w-4 h-4 text-gray-950" />
              </button>

              <button
                onClick={() => scrollTo('playground')}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl text-sm font-semibold bg-white/10 hover:bg-white/15 text-white border border-white/15 transition-all shadow-subtle active:scale-[0.98] cursor-pointer"
              >
                <Sparkles className="w-4 h-4 text-[#D8F243]" />
                <span>Inside The Data</span>
              </button>

              <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-xl text-xs font-mono text-slate-300 hover:text-white border border-white/10 hover:border-white/25 transition-colors"
              >
                <FileText className="w-4 h-4 text-slate-400" />
                <span>Resume PDF</span>
              </a>
            </div>

            {/* Direct Connect Touchpoints */}
            <div className="flex flex-wrap items-center gap-5 pt-1 text-xs text-slate-400 font-mono">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
              >
                <LinkedInIcon className="w-4 h-4 text-slate-400" />
                <span>LinkedIn</span>
              </a>
              <span className="text-white/20">•</span>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-white transition-colors"
              >
                <GitHubIcon className="w-4 h-4 text-slate-400" />
                <span>GitHub</span>
              </a>
              <span className="text-white/20">•</span>
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-1.5 hover:text-[#D8F243] transition-colors font-mono whitespace-nowrap"
              >
                <span>{personal.email}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Custom Generative Analytical Visualization */}
          <div className="lg:col-span-5 h-[420px] sm:h-[480px]">
            <HeroGenerativeVisualization />
          </div>

        </div>

        {/* Bottom Editorial Scroll Anchor */}
        <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D8F243]" />
            <span>EXPERIENCE 01 // THE OPENING</span>
          </div>

          <button
            onClick={() => scrollTo('introduction')}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer"
          >
            <span>SCROLL TO EXPLORE ARCHIVE</span>
            <ChevronDown className="w-4 h-4 text-[#D8F243] animate-bounce" />
          </button>
        </div>

      </div>

    </section>
  );
}
