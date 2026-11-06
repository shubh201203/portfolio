'use client';

import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './Icons';
import { portfolioData } from '../../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      if (window.__lenis) {
        window.__lenis.scrollTo(0, { duration: 1.2 });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="border-t border-white/10 bg-[#0A0A0B] text-[#F5F5F4] py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="text-base font-extrabold text-[#F5F5F4] tracking-tight">{personal.name}</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 text-blue-400 border border-blue-500/20">
                Data Analyst &bull; BI &bull; Analytics Engineering
              </span>
            </div>
            <div className="text-xs text-slate-400 mt-1 font-mono">{personal.headline}</div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-white transition-colors"
            >
              <GitHubIcon className="w-4 h-4 text-slate-300" />
              <span>GitHub</span>
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-[#3B82F6] transition-colors"
            >
              <LinkedInIcon className="w-4 h-4 text-slate-300" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-[#14B8A6] transition-colors"
            >
              <Mail className="w-4 h-4 text-slate-300" />
              <span>Email</span>
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 text-xs font-mono text-slate-300 hover:bg-white/5 hover:text-white transition-colors cursor-pointer"
            aria-label="Scroll back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 font-mono text-center sm:text-left">
          <div>
            &copy; {new Date().getFullYear()} {personal.name} &bull; All analytical models, SQL CTEs &amp; DAX measures empirically verified.
          </div>
          <div className="text-slate-400">
            Next.js App Router &bull; Tailwind CSS &bull; Framer Motion
          </div>
        </div>
      </div>
    </footer>
  );
}