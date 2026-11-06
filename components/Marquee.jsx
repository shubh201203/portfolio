'use client';

import React from 'react';

const items = [
  'PostgreSQL 18 Warehousing',
  'Power BI Desktop & Service',
  'Complex DAX Measures',
  'Python & Pandas Cleansing',
  'Star Schema Dimensional Modeling',
  'Microsoft Fabric (DP-600)',
  'Azure Data Fundamentals (DP-900)',
  'Google Cloud Associate Certified',
  'Grain-Safe Analytical SQL',
  'Cohort Retention Decay (M0–M18)',
  'Conversion Funnel Optimization',
  '100% Mathematical Reconciliation',
  'FastAPI & React Integration',
  'Automated Test Suites (Pytest)',
];

export default function Marquee() {
  return (
    <div className="relative w-full overflow-hidden bg-[#070709] border-y border-white/10 py-3 select-none">
      {/* Left & Right Gradient Shadows */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0A0A0B] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0A0A0B] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee flex items-center gap-8 font-mono text-xs text-slate-300 tracking-wider uppercase">
        {items.concat(items).map((item, index) => (
          <div key={index} className="flex items-center gap-8 whitespace-nowrap shrink-0">
            <span className="hover:text-white transition-colors">{item}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6]" />
          </div>
        ))}
      </div>
    </div>
  );
}
