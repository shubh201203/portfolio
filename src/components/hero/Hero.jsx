import React, { useState, useEffect } from 'react';
import { 
  ArrowDownRight, 
  ArrowRight, 
  FileText, 
  Clock, 
  Compass, 
  CheckCircle2, 
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../common/Icons';
import { portfolioData } from '../../data/portfolioData';
import HeroVisual from './HeroVisual';

export default function Hero({ onExploreWork }) {
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
    <section id="home" className="relative min-h-[92vh] pt-28 sm:pt-32 pb-16 bg-[#F6F4ED] text-[#111215] overflow-hidden flex flex-col justify-between border-b border-[#111215]/10">
      
      {/* Background Subtle Paper Grid */}
      <div className="absolute inset-0 paper-grid opacity-60 pointer-events-none" />

      {/* Main Composition Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex-1 flex flex-col justify-between">
        
        {/* Top Editorial Telemetry Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 pb-6 border-b border-[#111215]/10 font-mono text-xs text-[#111215]/75">
          <div className="flex flex-wrap items-center gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#111215]/15 shadow-subtle text-[#111215] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#111215] animate-pulse" />
              <span>SHUBH SHARMA // DATA ANALYST &amp; BUILDER</span>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#111215]/15 shadow-subtle text-[#111215]/80 text-[11px]">
              <Clock className="w-3.5 h-3.5 text-[#111215]" />
              <span className="font-bold text-[#111215]">{istTime || '20:45:00'} IST</span>
              <span className="text-[#111215]/20">|</span>
              <Compass className="w-3.5 h-3.5 text-[#111215]" />
              <span>Amaravati 16.5°N · 80.5°E</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-blue-600/10 border border-blue-600/20 text-blue-900 font-semibold text-[11px]">
              4x Microsoft &amp; Google Certified (Oct 2026)
            </span>
            <span className="text-[#111215]/20 hidden sm:inline">•</span>
            <span className="text-[#111215]/70 hidden sm:inline">100% Reconciled SQL / DAX</span>
          </div>
        </div>

        {/* Hero Main Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center py-12 sm:py-16 my-auto">
          
          {/* Left Column: Monolithic Editorial Typography */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* Identity & Concept Label */}
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.22em] text-[#111215]/70 font-bold">
                <span className="text-[#111215]">CONCEPT // MAKING SENSE OF COMPLEXITY</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#111215]" />
              </div>
            </div>

            {/* Giant Monolithic Headline */}
            <div className="space-y-2">
              <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-[96px] font-headline font-extrabold tracking-tighter text-[#111215] leading-[0.92]">
                I MAKE DATA<br />
                <span className="text-[#111215] underline decoration-[#D8F243] decoration-[6px] sm:decoration-[10px] underline-offset-4">
                  MAKE SENSE.
                </span>
              </h1>
            </div>

            {/* Supporting Creative Positioning Statement */}
            <div className="space-y-4 max-w-2xl">
              <p className="text-lg sm:text-xl font-display font-medium text-[#111215] leading-snug">
                I'm Shubh — a data analyst and builder exploring the intersection of analytics, technology, and intelligent systems.
              </p>

              <p className="text-sm sm:text-base text-[#111215]/75 leading-relaxed font-normal">
                I translate operational clickstreams into star-schema relational warehouses in <strong className="text-[#111215] font-semibold">PostgreSQL 18</strong>, formulate grain-safe analytical SQL suites, and deliver mathematically reconciled <strong className="text-[#111215] font-semibold">Power BI / DAX</strong> executive reporting suites.
              </p>
            </div>

            {/* Key Benchmarks Quick-Check Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-1 font-mono text-xs">
              <div className="p-3.5 rounded-2xl bg-white border border-[#111215]/10 shadow-subtle space-y-0.5">
                <div className="text-[10px] text-[#111215]/50 uppercase font-semibold">Realized Rev</div>
                <div className="text-base sm:text-lg font-bold text-[#111215]">₹847.62M</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-[#111215]/10 shadow-subtle space-y-0.5">
                <div className="text-[10px] text-[#111215]/50 uppercase font-semibold">Settled Cash</div>
                <div className="text-base sm:text-lg font-bold text-emerald-700">₹796.75M</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-[#111215]/10 shadow-subtle space-y-0.5">
                <div className="text-[10px] text-[#111215]/50 uppercase font-semibold">Gross Margin</div>
                <div className="text-base sm:text-lg font-bold text-blue-700">30.93%</div>
              </div>
              <div className="p-3.5 rounded-2xl bg-white border border-[#111215]/10 shadow-subtle space-y-0.5">
                <div className="text-[10px] text-[#111215]/50 uppercase font-semibold">Repeat Buyers</div>
                <div className="text-base sm:text-lg font-bold text-[#111215]">82.12%</div>
              </div>
            </div>

            {/* Action Triggers */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => {
                  if (onExploreWork) onExploreWork();
                  else scrollTo('work');
                }}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full text-sm font-bold bg-[#111215] text-[#F6F4ED] hover:bg-black transition-all shadow-editorial active:scale-[0.98] cursor-pointer"
              >
                <span>Explore Selected Work (01 / 06)</span>
                <ArrowRight className="w-4 h-4 text-[#D8F243]" />
              </button>

              <button
                onClick={() => scrollTo('about')}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-sm font-semibold bg-white hover:bg-stone-100 text-[#111215] border border-[#111215]/15 transition-all shadow-subtle active:scale-[0.98] cursor-pointer"
              >
                <span>About Shubh</span>
                <ArrowDownRight className="w-4 h-4 text-[#111215]/60" />
              </button>

              <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-3.5 rounded-full text-xs font-mono text-[#111215]/80 hover:text-[#111215] border border-[#111215]/15 hover:border-[#111215]/30 transition-colors bg-white/50"
              >
                <FileText className="w-3.5 h-3.5 text-[#111215]" />
                <span>Resume PDF ↗</span>
              </a>
            </div>

            {/* Direct Connect Touchpoints */}
            <div className="flex flex-wrap items-center gap-5 pt-1 text-xs text-[#111215]/70 font-mono">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-700 transition-colors font-medium"
              >
                <LinkedInIcon className="w-4 h-4 text-[#111215]/60" />
                <span>LinkedIn</span>
              </a>
              <span className="text-[#111215]/20">•</span>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-black transition-colors font-medium"
              >
                <GitHubIcon className="w-4 h-4 text-[#111215]/60" />
                <span>GitHub</span>
              </a>
              <span className="text-[#111215]/20">•</span>
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-1.5 hover:text-black transition-colors font-mono whitespace-nowrap font-medium"
              >
                <span>{personal.email}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Custom Interactive Analytical Schematics */}
          <div className="lg:col-span-5">
            <HeroVisual />
          </div>

        </div>

        {/* Bottom Editorial Scroll Anchor */}
        <div className="pt-6 border-t border-[#111215]/10 flex items-center justify-between text-xs font-mono text-[#111215]/60">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#111215]" />
            <span className="font-bold text-[#111215]">01 / INTRODUCTION</span>
          </div>

          <button
            onClick={() => scrollTo('about')}
            className="flex items-center gap-1.5 hover:text-[#111215] transition-colors cursor-pointer"
          >
            <span>SCROLL TO EXPLORE STORY</span>
            <ChevronDown className="w-4 h-4 text-[#111215] animate-bounce" />
          </button>
        </div>

      </div>

    </section>
  );
}
