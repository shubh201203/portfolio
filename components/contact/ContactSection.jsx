'use client';

import React, { useState } from 'react';
import { 
  Mail, 
  Copy, 
  Check, 
  ArrowRight, 
  ArrowUpRight, 
  FileText, 
  ArrowUp,
  MapPin,
  Clock,
  Sparkles
} from 'lucide-react';
import { asset } from '@/lib/utils';
import { portfolioData } from '@/data/portfolioData';

export default function ContactSection() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="pt-24 sm:pt-32 pb-12 bg-[#07080B] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="pb-8 border-b border-white/10 mb-14 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.24em] text-blue-400 font-bold mb-3">
            <span>06 // CONTACT</span>
            <span className="text-white/20">•</span>
            <span>LET'S CONNECT</span>
          </div>

          <div className="space-y-4 max-w-4xl">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-headline font-extrabold tracking-tight text-white leading-[0.98]">
              LET'S MAKE SOMETHING<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white">
                MEANINGFUL.
              </span>
            </h2>

            <p className="text-base sm:text-xl font-display font-medium text-slate-300 pt-2">
              Have an interesting problem, an opportunity, or an idea worth exploring? Let's talk.
            </p>
          </div>
        </div>

        {/* Closing Interaction Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-stretch">
          
          {/* Guaranteed Single-Line Email Touchpoint Card */}
          <div className="lg:col-span-7 rounded-3xl bg-[#0B0E17] border border-white/15 p-6 sm:p-10 shadow-2xl flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                <span className="font-bold uppercase tracking-wider text-blue-400">PRIMARY CONTACT // DIRECT EMAIL</span>
                <Mail className="w-4 h-4 text-blue-400" />
              </div>

              {/* Single-Line Email Guaranteed Display */}
              <div className="pt-2 overflow-hidden">
                <a
                  href={`mailto:${personal.email}`}
                  className="text-base sm:text-xl md:text-2xl font-mono font-bold text-white hover:text-blue-300 transition-colors inline-block whitespace-nowrap tracking-tight truncate max-w-full select-all"
                  title={personal.email}
                >
                  {personal.email}
                </a>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 font-normal">
                Always open for Data Analyst, Business Intelligence, Analytics Engineering, and Product Analytics internships for Summer 2027. Typical response window: within 24 hours.
              </p>
            </div>

            <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 font-bold text-white transition-all cursor-pointer active:scale-[0.98]"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-blue-400" />}
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Address'}</span>
              </button>

              <a
                href={`mailto:${personal.email}?subject=Data%20Analyst%20Role%20Inquiry%20-%20Shubh%20Sharma`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-500 font-bold transition-all shadow-md shadow-blue-600/30"
              >
                <span>Compose Email</span>
                <ArrowRight className="w-3.5 h-3.5 text-blue-200" />
              </a>
            </div>
          </div>

          {/* Social Profiles & Resume Strip */}
          <div className="lg:col-span-5 rounded-3xl bg-[#0F131F] border border-blue-500/30 p-6 sm:p-10 shadow-2xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-blue-400 font-bold">
                CONNECT &amp; VERIFY
              </div>
              <p className="text-sm text-slate-300 leading-relaxed font-normal">
                Review codebases, explore analytical schemas, or download my official curriculum vitae.
              </p>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-white font-semibold"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-blue-400" />
                  <span>LinkedIn Profile</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-white font-semibold"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-2 h-2 rounded-full bg-white" />
                  <span>GitHub Repositories</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </a>

              <a
                href={asset('/resume.pdf')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-white text-gray-950 font-bold transition-all shadow-md hover:bg-blue-300"
              >
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4 text-gray-950" />
                  <span>Download Resume PDF</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-gray-950" />
              </a>
            </div>
          </div>

        </div>

        {/* Editorial Colophon & Bottom Footer */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-slate-400">
          <div className="space-y-1 text-center sm:text-left">
            <div>
              Designed &amp; Engineered by <strong className="text-white">Shubh Sharma</strong>.
            </div>
            <div className="text-[11px] text-slate-500">
              Next.js App Router • Framer Motion + GSAP • Lenis • Recharts • GitHub Pages Static Export
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-white font-bold shadow-sm transition-all cursor-pointer active:scale-95"
          >
            <span>Return to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-blue-400" />
          </button>
        </div>

      </div>
    </section>
  );
}
