'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { 
  HelpCircle, 
  Database, 
  FileCode2, 
  BarChart3, 
  MessagesSquare, 
  TrendingUp,
  ShieldCheck,
  Sparkles
} from 'lucide-react';

export default function HowIWorkSequence() {
  const containerRef = useRef(null);
  const pinRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      phase: 'DEFINE',
      title: 'Define the Business Question',
      tag: 'Strategic Alignment',
      icon: HelpCircle,
      description: 'Isolate the core operational or financial question before querying data. For NovaCart: Why did placed gross demand decline by 39.81% into realized revenue, and which specific category margins drive profitability?',
      technicalAction: 'Formulate quantifiable business hypothesis and establish strict fact grains.',
      outputMetric: 'Defined Fact-Grain',
      outputVal: 'Order & Line-Item Level',
    },
    {
      num: '02',
      phase: 'COLLECT',
      title: 'Collect & Validate Data',
      tag: 'Data Hygiene & Audit',
      icon: Database,
      description: 'Audit 104,852 sales and transactional payment logs across multi-source files. Check schema drift, identify null foreign keys, inspect date timestamps, and catalog cancellation/return flags.',
      technicalAction: 'Automated profile audit detecting 142 missing customer keys across order items.',
      outputMetric: 'Audited Source Rows',
      outputVal: '104,852 Records',
    },
    {
      num: '03',
      phase: 'MODEL',
      title: 'Clean & Model the Warehouse',
      tag: 'PostgreSQL 18 Star Schema',
      icon: FileCode2,
      description: 'Stage clean tables into an 8-table relational Star Schema in PostgreSQL 18 with surrogate keys. Recover 142 customer IDs through co-occurring line items, route 68 unrecoverable rows to quarantine, and enforce strict fact-grain isolation.',
      technicalAction: 'Engineered surrogate keys with 0 foreign-key orphans between fact_sales and fact_payments.',
      outputMetric: 'Relational Warehouse',
      outputVal: '8 Tables · 0 Orphans',
    },
    {
      num: '04',
      phase: 'ANALYZE',
      title: 'Analyze with Grain-Safe SQL',
      tag: 'Analytical SQL & CTEs',
      icon: BarChart3,
      description: 'Construct multi-stage CTE queries, window functions, and NTILE customer lifetime value quintiles. Formulate monthly customer cohort retention decay matrices tracking repeat repurchase rates from Month 0 through Month 18.',
      technicalAction: 'Authored public.vw_cohort_retention and segmented 3,970 active customer accounts.',
      outputMetric: 'Retention Cohorts',
      outputVal: 'M0 to M18 Tracked',
    },
    {
      num: '05',
      phase: 'COMMUNICATE',
      title: 'Communicate with Precision',
      tag: 'Power BI + DAX',
      icon: MessagesSquare,
      description: 'Deliver an executive 6-page interactive reporting suite in Power BI Desktop backed by 30+ custom DAX measures. Ensure 100% mathematical reconciliation between SQL database sums and Power BI visuals.',
      technicalAction: 'Executive Overview, Sales & Margin, Customer Intelligence, Product Analysis, Operations, Retention.',
      outputMetric: 'SQL Reconciliation',
      outputVal: '100.0% Precision',
    },
    {
      num: '06',
      phase: 'DECIDE',
      title: 'Enable High-Impact Decisions',
      tag: 'Decision-Grade Impact',
      icon: TrendingUp,
      description: 'Provide stakeholders with decision-ready clarity: identify ₹847.62M realized revenue drivers, stop margin-diluting discount campaigns, resolve urban fulfillment bottlenecks, and maximize 82.12% repeat customer value.',
      technicalAction: 'Empirical decision enablement without speculation or synthetic metric fabrication.',
      outputMetric: 'Realized Margin',
      outputVal: '30.93% Confirmed',
    },
  ];

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top top',
        end: '+=1400',
        pin: pinRef.current,
        scrub: 0.5,
        onUpdate: (self) => {
          const progress = self.progress;
          const idx = Math.min(5, Math.floor(progress * 6));
          setActiveStep(idx);
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleStepClick = (idx) => {
    setActiveStep(idx);
    if (!containerRef.current) return;
    const containerTop = containerRef.current.offsetTop;
    const scrollTarget = containerTop + (idx / (steps.length - 1)) * 1400;
    if (typeof window !== 'undefined' && window.__lenis) {
      window.__lenis.scrollTo(scrollTarget, { duration: 0.8 });
    } else if (typeof window !== 'undefined') {
      window.scrollTo({ top: scrollTarget, behavior: 'smooth' });
    }
  };

  const StepIcon = steps[activeStep].icon;

  return (
    <section id="how-it-works" ref={containerRef} className="relative bg-[#0A0A0B] text-white">
      <div ref={pinRef} className="min-h-[85vh] flex flex-col justify-between py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="pb-6 border-b border-white/10 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.24em] text-[#3B82F6] font-bold mb-2">
              <span>HOW I WORK // THE 6-STAGE DISCIPLINE</span>
              <span className="text-white/20">•</span>
              <span>FROM RAW DATA TO DECISIONS</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-headline font-extrabold tracking-tight text-[#F5F5F4]">
              The Analytical Workflow
            </h2>
          </div>

          {/* Stepper Buttons */}
          <div className="flex flex-wrap items-center gap-1.5 font-mono text-xs">
            {steps.map((s, idx) => (
              <button
                key={idx}
                onClick={() => handleStepClick(idx)}
                className={`px-3 py-1 rounded-full border transition-all cursor-pointer ${
                  activeStep === idx
                    ? 'bg-[#3B82F6] border-[#3B82F6] text-white font-bold shadow-md shadow-[#3B82F6]/30'
                    : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
                }`}
              >
                <span>{s.num}</span>
                <span className="hidden sm:inline ml-1.5">{s.phase}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Interactive Stage Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-auto py-8 items-center">
          
          {/* Left Narrative Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-4xl sm:text-6xl font-headline font-extrabold text-[#3B82F6]">
                {steps[activeStep].num}
              </span>
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  STAGE {activeStep + 1} OF 6
                </span>
                <h3 className="text-2xl sm:text-4xl font-headline font-bold text-white tracking-tight">
                  {steps[activeStep].phase}
                </h3>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14B8A6]/10 border border-[#14B8A6]/20 text-xs font-mono text-[#14B8A6] font-semibold">
              <StepIcon className="w-3.5 h-3.5 text-[#14B8A6]" />
              <span>{steps[activeStep].tag}</span>
            </div>

            <h4 className="text-xl sm:text-2xl font-display font-semibold text-slate-200">
              {steps[activeStep].title}
            </h4>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {steps[activeStep].description}
            </p>

            {/* Stage Technical Action */}
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs font-mono text-slate-300 space-y-1">
              <div className="text-[10px] text-[#3B82F6] uppercase font-bold">Action Taken:</div>
              <div>{steps[activeStep].technicalAction}</div>
            </div>
          </div>

          {/* Right Inspection & Telemetry Card */}
          <div className="lg:col-span-6">
            <div className="rounded-3xl bg-[#0D0E12] border border-white/10 shadow-2xl overflow-hidden font-mono text-xs space-y-6 p-6 sm:p-8">
              
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center gap-2 text-[#3B82F6] font-bold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>STEP 0{activeStep + 1} // ARCHITECTURAL BENCHMARK</span>
                </div>
                <span className="px-2 py-0.5 rounded bg-white/10 text-slate-300 text-[10px]">
                  VERIFIED
                </span>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-2">
                  <div className="text-[11px] text-slate-400 uppercase">Primary Deliverable</div>
                  <div className="text-base sm:text-lg font-bold text-white">
                    {steps[activeStep].title}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 space-y-1">
                    <div className="text-[10px] text-slate-400 uppercase">Output Metric</div>
                    <div className="text-sm font-bold text-[#14B8A6]">{steps[activeStep].outputMetric}</div>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-white/5 border border-white/5 space-y-1">
                    <div className="text-[10px] text-slate-400 uppercase">Verification</div>
                    <div className="text-sm font-bold text-white">{steps[activeStep].outputVal}</div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                <span>Progress: {activeStep + 1} of 6 Steps</span>
                <span className="text-[#3B82F6]">Scroll to Advance Sequence →</span>
              </div>

            </div>
          </div>

        </div>

        {/* Footer Pipeline Progression Ticker */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#14B8A6]" />
            <span>THE 6 STEPS // DEFINE → COLLECT → MODEL → ANALYZE → COMMUNICATE → DECIDE</span>
          </div>

          <div className="text-slate-500">
            Grain-Safe Analytical Rigor
          </div>
        </div>

      </div>
    </section>
  );
}
