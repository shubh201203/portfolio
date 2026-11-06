import React from 'react';
import { ArrowRight, FileText, Mail, ArrowUpRight, Terminal } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../common/Icons';
import { portfolioData } from '../../data/portfolioData';
import HeroInteractiveLab from './HeroInteractiveLab';

export default function Hero() {
  const { personal } = portfolioData;

  const coreFocusTags = [
    'SQL (CTEs & Windows)',
    'PostgreSQL 18 DW',
    'Star Schema Modeling',
    'Power BI & DAX (30+ Measures)',
    'Python & Pandas ETL',
    'Product & Cohort Analytics'
  ];

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const target = document.querySelector('#projects');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-32 sm:pt-36 pb-20 sm:pb-24 bg-[#0B0F19] text-white border-b border-white/10 overflow-hidden">
      
      {/* Background Grids & Atmospheric Radial Glows */}
      <div className="absolute inset-0 lab-grid opacity-35 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-blue-600/15 via-cyan-500/10 to-transparent rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Personal Identity & Editorial Positioning */}
          <div className="lg:col-span-6 text-left space-y-6">
            
            {/* Status & Domain Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300 backdrop-blur-md shadow-subtle">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white font-medium">Seeking Data Analyst & BI Roles</span>
              <span className="text-white/30">•</span>
              <span className="text-cyan-400">VIT-AP & IIT Madras</span>
            </div>

            {/* Candidate Name & Stated Identity */}
            <div className="space-y-2">
              <div className="text-xs font-mono tracking-widest uppercase text-blue-400 font-bold flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5" />
                <span>The Interactive Analytics Lab</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.08]">
                {personal.name}
              </h1>
              <p className="text-lg sm:text-2xl font-bold tracking-tight bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent">
                {personal.roleTitle}
              </p>
            </div>

            {/* High-Conviction Value Proposition */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-xl">
              I build end-to-end analytics pipelines—from messy operational events and star-schema warehouses in <strong className="text-white font-semibold">PostgreSQL</strong>, to structured SQL analytical suites and decision-grade <strong className="text-white font-semibold">Power BI / DAX</strong> reporting suites.
            </p>

            {/* Core Technical Highlights Pills */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {coreFocusTags.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-mono text-slate-300 bg-white/5 border border-white/10 hover:border-blue-400/40 hover:text-white transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Recruiter Primary CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="#projects"
                onClick={handleScrollToProjects}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-blue-600 text-white hover:bg-blue-500 shadow-glow-blue transition-all active:scale-[0.98] cursor-pointer"
              >
                <span>Explore My Work</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={personal.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium bg-white/10 hover:bg-white/15 text-white border border-white/15 transition-all shadow-subtle active:scale-[0.98]"
              >
                <FileText className="w-4 h-4 text-slate-300" />
                <span>Download Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>

            {/* Quick Profile & Contact Touchpoints */}
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs text-slate-400">
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
                className="flex items-center gap-1.5 hover:text-cyan-300 transition-colors font-mono"
              >
                <Mail className="w-4 h-4 text-slate-400" />
                <span>{personal.email}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Live Interactive Analytics Lab */}
          <div className="lg:col-span-6">
            <HeroInteractiveLab />
          </div>

        </div>
      </div>
    </section>
  );
}
