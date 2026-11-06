'use client';

import React from 'react';

const TOOLS = [
  'SQL',
  'Python',
  'Power BI',
  'Tableau',
  'Excel',
  'Statistics',
  'ETL',
  'Data Storytelling',
  'Data Visualization',
  'A/B Testing',
];

const DOMAINS = [
  'Retail',
  'Finance',
  'Operations',
  'Marketing',
  'Healthcare',
  'SaaS',
  'E-commerce',
];

export default function Marquee() {
  return (
    <div className="relative w-full max-w-full overflow-hidden bg-[#070709] border-y border-white/10 py-4 select-none space-y-2.5">
      {/* Left & Right Fade Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-[#0A0A0B] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-[#0A0A0B] to-transparent z-10 pointer-events-none" />

      {/* Marquee 1: Trust & Toolkit */}
      <div className="w-full max-w-full overflow-hidden flex">
        <div className="animate-marquee flex items-center gap-8 font-mono text-xs text-slate-300 tracking-wider uppercase hover:[animation-play-state:paused]">
          {TOOLS.concat(TOOLS).concat(TOOLS).map((tool, index) => (
            <div key={`tool-${index}`} className="flex items-center gap-8 whitespace-nowrap shrink-0">
              <span className="hover:text-white transition-colors font-medium">{tool}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />
            </div>
          ))}
        </div>
      </div>

      {/* Marquee 2: Analytical Domains */}
      <div className="w-full max-w-full overflow-hidden flex border-t border-white/5 pt-2">
        <div className="animate-marquee-reverse flex items-center gap-8 font-mono text-xs text-slate-400 tracking-wider uppercase hover:[animation-play-state:paused]">
          {DOMAINS.concat(DOMAINS).concat(DOMAINS).map((domain, index) => (
            <div key={`domain-${index}`} className="flex items-center gap-8 whitespace-nowrap shrink-0">
              <span className="hover:text-[#14B8A6] transition-colors font-medium">{domain}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
