'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { 
  ArrowRight, 
  FileText, 
  Mail, 
  MapPin, 
  Sparkles,
  TrendingUp,
  Activity,
  Layers,
  ChevronDown
} from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '@/components/common/Icons';
import { asset } from '@/lib/utils';
import { portfolioData } from '@/data/portfolioData';

export default function Hero({ onExploreWork, onExplorePipeline }) {
  const { personal } = portfolioData;

  // Desktop mouse parallax coordinates
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 120 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const parallaxX = useTransform(smoothMouseX, [-500, 500], [-15, 15]);
  const parallaxY = useTransform(smoothMouseY, [-500, 500], [-15, 15]);
  const chartTiltX = useTransform(smoothMouseY, [-500, 500], [6, -6]);
  const chartTiltY = useTransform(smoothMouseX, [-500, 500], [-6, 6]);

  const handleMouseMove = useCallback((e) => {
    if (typeof window === 'undefined') return;
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    mouseX.set(clientX - centerX);
    mouseY.set(clientY - centerY);
  }, [mouseX, mouseY]);

  const scrollTo = (id) => {
    if (typeof window !== 'undefined' && window.__lenis) {
      window.__lenis.scrollTo(`#${id}`, {
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  // 10 floating analytical data points connecting with dynamic SVG lines
  const floatingPoints = [
    { x: 12, y: 18, delay: 0 },
    { x: 28, y: 35, delay: 0.3 },
    { x: 45, y: 15, delay: 0.6 },
    { x: 62, y: 40, delay: 0.2 },
    { x: 78, y: 22, delay: 0.5 },
    { x: 88, y: 60, delay: 0.8 },
    { x: 35, y: 75, delay: 0.4 },
    { x: 18, y: 82, delay: 0.7 },
    { x: 55, y: 85, delay: 0.1 },
    { x: 72, y: 78, delay: 0.9 },
  ];

  return (
    <section 
      id="hero" 
      data-section="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-[85vh] pt-24 sm:pt-28 pb-10 bg-[#0A0A0B] text-[#F5F5F4] overflow-hidden flex flex-col justify-between border-b border-white/10"
    >
      {/* Animated Subtle Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none opacity-40" />

      {/* Floating Data Points Connecting into Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30 overflow-hidden" viewBox="0 0 1000 700" preserveAspectRatio="none">
        <defs>
          <linearGradient id="heroLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.1" />
          </linearGradient>
        </defs>
        {/* Connecting vector polygons */}
        <polyline
          points="120,140 280,260 450,120 620,300 780,180 880,450"
          fill="none"
          stroke="url(#heroLineGrad)"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <polyline
          points="180,620 350,560 550,640 720,590"
          fill="none"
          stroke="url(#heroLineGrad)"
          strokeWidth="1"
          strokeDasharray="3 5"
        />
      </svg>

      {/* Ambient Radial Accent Auras with Mouse Parallax */}
      <motion.div 
        style={{ x: parallaxX, y: parallaxY }}
        className="absolute top-1/4 right-1/4 w-[540px] h-[340px] bg-[#3B82F6]/10 rounded-full blur-[140px] pointer-events-none" 
      />
      <motion.div 
        style={{ x: parallaxY, y: parallaxX }}
        className="absolute bottom-16 left-12 w-[440px] h-[280px] bg-[#14B8A6]/8 rounded-full blur-[120px] pointer-events-none" 
      />

      {/* Main Composition Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 flex-1 flex flex-col justify-between">
        
        {/* Top Telemetry & Availability Strip */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-1 pb-4 border-b border-white/10 font-mono text-xs text-slate-400">
          <div className="flex flex-wrap items-center gap-3">
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md text-slate-200">
              <span className="w-2 h-2 rounded-full bg-[#14B8A6] animate-pulse" />
              <span className="font-semibold text-white">Open to Data Analyst opportunities</span>
            </div>

            {/* Location */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-slate-400 text-[11px] backdrop-blur-md">
              <MapPin className="w-3.5 h-3.5 text-[#3B82F6]" />
              <span>Amaravati, Andhra Pradesh, India</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3 text-slate-400">
            <a
              href="https://www.linkedin.com/in/shubh-sharma-2067981b5"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] hover:text-[#3B82F6] border border-white/10 transition-colors cursor-pointer"
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="https://github.com/shubh201203"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] hover:text-white border border-white/10 transition-colors cursor-pointer"
              aria-label="GitHub Profile"
            >
              <GitHubIcon className="w-3.5 h-3.5" />
            </a>
            <a
              href="mailto:shubhsharmaa2003@gmail.com"
              className="p-2 rounded-full bg-white/[0.04] hover:bg-white/[0.08] hover:text-[#14B8A6] border border-white/10 transition-colors cursor-pointer"
              aria-label="Email Shubh Sharma"
            >
              <Mail className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Hero Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center py-12 sm:py-16 my-auto">
          
          {/* Left Column: Monolithic Headline & Positioning */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">
            
            {/* DATA ANALYST Identity Label */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/30 text-xs font-mono uppercase tracking-[0.26em] text-[#3B82F6] font-bold"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-ping" />
              <span>DATA ANALYST</span>
            </motion.div>

            {/* Giant Monolithic Headline */}
            <div className="space-y-2">
              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-6xl lg:text-7xl xl:text-[82px] font-extrabold tracking-tighter text-[#F5F5F4] leading-[0.96] font-headline"
              >
                I turn complex data<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-[#3B82F6]">
                  into clear decisions.
                </span>
              </motion.h1>
            </div>

            {/* Exact Required Supporting Text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="space-y-4 max-w-2xl"
            >
              <p className="text-base sm:text-lg lg:text-xl font-sans text-slate-300 leading-relaxed font-normal">
                I&apos;m Shubh Sharma — a data analyst and builder who transforms complex datasets into meaningful insights, analytical systems, and better decisions.
              </p>
            </motion.div>

            {/* Action Triggers: View Case Studies & Download Resume */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              {/* Primary CTA */}
              <button
                onClick={() => {
                  if (onExploreWork) onExploreWork();
                  else scrollTo('work');
                }}
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-sm font-bold bg-[#3B82F6] hover:bg-blue-600 text-white transition-all shadow-lg shadow-[#3B82F6]/30 active:scale-[0.98] cursor-pointer"
              >
                <span>View Case Studies</span>
                <ArrowRight className="w-4 h-4 text-white" />
              </button>

              {/* Secondary CTA */}
              <a
                href={asset('/resume.pdf')}
                download="Shubh_Sharma_Data_Analyst_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-semibold bg-white/[0.06] hover:bg-white/[0.12] text-white border border-white/15 transition-all active:scale-[0.98] cursor-pointer shadow-sm"
              >
                <FileText className="w-4 h-4 text-[#14B8A6]" />
                <span>Download Resume</span>
              </a>

              {/* The 6-Stage Process Quick Link */}
              <button
                onClick={() => {
                  if (onExplorePipeline) onExplorePipeline();
                  else scrollTo('how-it-works');
                }}
                className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 hover:text-white transition-colors cursor-pointer px-3 py-2"
              >
                <span>Process Breakdown ↗</span>
              </button>
            </motion.div>

          </div>

          {/* Right Column: Lightweight Animated Line Chart / Scatterplot with 3D Tilt */}
          <motion.div 
            style={{ 
              rotateX: chartTiltX, 
              rotateY: chartTiltY,
              transformStyle: 'preserve-3d'
            }}
            className="lg:col-span-5"
          >
            <div className="p-6 sm:p-8 rounded-3xl bg-[#0D0E12] border border-white/10 shadow-2xl relative overflow-hidden space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10 font-mono text-xs">
                <div className="flex items-center gap-2 text-[#3B82F6] font-bold">
                  <Activity className="w-4 h-4" />
                  <span>DATA VELOCITY MATRIX</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-[#14B8A6]/20 text-[#14B8A6] font-semibold text-[10px]">
                  LIVE RECONCILED
                </span>
              </div>

              {/* Animated Vector Chart Display */}
              <div className="space-y-4 font-mono text-xs">
                <div className="relative w-full h-48 rounded-2xl bg-black/40 border border-white/5 p-4 flex flex-col justify-between overflow-hidden">
                  <div className="flex items-center justify-between text-[11px] text-slate-400">
                    <span>From Raw Scatter to Decision</span>
                    <span className="text-white font-bold">200K+ Staged Rows</span>
                  </div>

                  {/* SVG Animated Self-Drawing Line Chart with Scatter Dots */}
                  <svg className="w-full h-28 overflow-visible" viewBox="0 0 320 85">
                    <defs>
                      <linearGradient id="chartGrad" x1="0%" y1="0%" x2="0%" y2="1">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    {/* Area fill */}
                    <motion.path
                      d="M 0 70 Q 40 60, 80 50 T 160 38 T 240 22 T 320 8 L 320 85 L 0 85 Z"
                      fill="url(#chartGrad)"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    />
                    {/* Primary Trend Line */}
                    <motion.path
                      d="M 0 70 Q 40 60, 80 50 T 160 38 T 240 22 T 320 8"
                      fill="none"
                      stroke="#3B82F6"
                      strokeWidth="2.5"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.6, ease: 'easeInOut' }}
                    />
                    {/* Scatter points along the curve */}
                    <circle cx="80" cy="50" r="3" fill="#14B8A6" />
                    <circle cx="160" cy="38" r="3" fill="#3B82F6" />
                    <circle cx="240" cy="22" r="3" fill="#14B8A6" />
                    {/* Pulsing decision apex */}
                    <circle cx="320" cy="8" r="5" fill="#14B8A6" className="animate-ping" />
                    <circle cx="320" cy="8" r="3.5" fill="#F5F5F4" />
                  </svg>

                  <div className="flex items-center justify-between text-[10px] text-slate-500">
                    <span>Raw Input: 0% Structure</span>
                    <span className="text-[#14B8A6] font-semibold">Decided: 100% Reconciled</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/5 space-y-0.5">
                    <span className="text-[10px] text-slate-400 uppercase">PostgreSQL Star Schema</span>
                    <div className="text-white font-bold text-sm">8 Tables · 0 Orphans</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/5 space-y-0.5">
                    <span className="text-[10px] text-slate-400 uppercase">Power BI &amp; DAX</span>
                    <div className="text-[#14B8A6] font-bold text-sm">100% Reconciled</div>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
                <span>Verified Repository Baseline</span>
                <span className="text-[#3B82F6]">Zero Speculation</span>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator: "Scroll to explore" with gentle animated line */}
        <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#3B82F6] animate-pulse" />
            <span className="font-bold text-white uppercase tracking-wider">Scroll to explore</span>
            <span className="text-white/20">|</span>
            <span className="hidden sm:inline">From Raw Data to Decisions</span>
          </div>

          <button
            onClick={() => scrollTo('how-it-works')}
            className="group flex items-center gap-2 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Scroll to explore"
          >
            <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
            <div className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1">
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-1 h-2 rounded-full bg-[#3B82F6]"
              />
            </div>
          </button>
        </div>

      </div>

    </section>
  );
}
