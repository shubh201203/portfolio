import React, { useEffect } from 'react';
import { X, ArrowLeft, Layers, Filter, Users, TrendingUp, FlaskConical, ArrowDown, Clock } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import Badge from '../common/Badge';

export default function ProductAnalyticsCaseStudy({ onClose }) {
  const project = portfolioData.projects.find((p) => p.id === 'product-analytics');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;
  const { modules } = project;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#F7F7F3] text-gray-900 transition-all">
      {/* Sticky Top Bar */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-gray-200 py-3.5 px-4 sm:px-8 shadow-subtle">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 text-xs font-semibold text-gray-700 hover:text-gray-950 transition-colors bg-gray-50 hover:bg-gray-100 px-3 py-1.5 rounded-md border border-gray-200"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Portfolio</span>
          </button>

          <div className="text-center hidden sm:block">
            <span className="text-xs font-mono text-blue-600 font-bold">CASE STUDY 02</span>
            <span className="text-xs font-bold text-gray-900 ml-2">Product & Growth Analytics</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 border border-gray-200"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Case Study Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12 space-y-10">
        
        {/* Header Title */}
        <div className="space-y-4 border-b border-gray-200 pb-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-blue-600 text-white uppercase tracking-wider">
              Product & Growth Analytics
            </span>
            <Badge status={project.status} type="in_progress" />
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
            {project.tagline}
          </p>

          <div className="pt-2">
            <div className="text-xs font-mono text-gray-500 mb-2">Tech Stack:</div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((t) => (
                <span key={t} className="px-2.5 py-1 rounded text-xs font-mono bg-white text-gray-800 border border-gray-200 shadow-subtle">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* 1. Acquisition Section */}
        <section className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-card space-y-4">
          <div className="flex items-center gap-2 text-gray-900 font-bold text-lg border-b border-gray-100 pb-3">
            <Users className="w-5 h-5 text-blue-600" />
            <h2>01 — User Acquisition & Inflow Analysis</h2>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            Evaluating how prospective customers discover the platform and tracking channel efficiency across organic and paid acquisition funnels:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs">
            <div className="p-3.5 rounded-lg bg-gray-50 border border-gray-200">
              <div className="font-bold text-gray-900 mb-1">New User Inflow</div>
              <div className="text-gray-600 leading-relaxed">Tracking signup volume, device categories, and initial intent signals.</div>
            </div>
            <div className="p-3.5 rounded-lg bg-gray-50 border border-gray-200">
              <div className="font-bold text-gray-900 mb-1">Acquisition Channels</div>
              <div className="text-gray-600 leading-relaxed">Evaluating performance across Organic Search, Direct, Referral, and Digital Campaigns.</div>
            </div>
            <div className="p-3.5 rounded-lg bg-gray-50 border border-gray-200">
              <div className="font-bold text-gray-900 mb-1">Customer Acquisition Cost (CAC)</div>
              <div className="text-gray-600 leading-relaxed">Comparing marketing spend efficiency against new user onboarding velocity.</div>
            </div>
          </div>
        </section>

        {/* 2. Visual Conversion Funnel */}
        <section className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-card space-y-6">
          <div className="flex items-center justify-between border-b border-gray-100 pb-3">
            <div className="flex items-center gap-2 text-gray-900 font-bold text-lg">
              <Filter className="w-5 h-5 text-blue-600" />
              <h2>02 — End-to-End Conversion Funnel</h2>
            </div>
            <span className="text-xs font-mono text-gray-400">Journey Mapping</span>
          </div>

          <p className="text-gray-700 text-sm leading-relaxed">
            A 6-stage behavioral funnel mapped to identify user friction points and drop-off rates across the ordering lifecycle:
          </p>

          {/* Funnel Visualization Flow */}
          <div className="space-y-2.5">
            {modules.funnel.steps.map((step, idx) => {
              const isLast = idx === modules.funnel.steps.length - 1;
              const widthClasses = [
                'w-full',
                'w-[92%]',
                'w-[84%]',
                'w-[76%]',
                'w-[68%]',
                'w-[60%]'
              ];
              return (
                <div key={step} className="flex flex-col items-center">
                  <div
                    className={`${widthClasses[idx]} p-3.5 rounded-xl border transition-all flex items-center justify-between ${
                      isLast
                        ? 'bg-emerald-50 border-emerald-300 text-emerald-900 font-bold shadow-subtle'
                        : 'bg-gray-50 border-gray-200 text-gray-800'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-white border border-gray-200 text-gray-600 shadow-subtle">
                        0{idx + 1}
                      </span>
                      <span className="text-sm font-semibold">{step}</span>
                    </div>
                    <span className="text-xs font-mono text-gray-500">
                      {isLast ? 'Conversion Goal' : 'Stage Drop-off Analysis'}
                    </span>
                  </div>
                  {!isLast && (
                    <div className="py-0.5">
                      <ArrowDown className="w-3.5 h-3.5 text-gray-400" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="p-4 rounded-xl bg-[#F7F7F3] border border-gray-200 text-xs text-gray-600 leading-relaxed">
            <strong>Friction Point Analysis:</strong> Pinpointing drop-offs between <em>Add to Cart</em> and <em>Checkout</em> to isolate delivery fee friction, minimum order restrictions, or payment gateway failures.
          </div>
        </section>

        {/* 3. Retention & Cohorts */}
        <section className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-card space-y-4">
          <div className="flex items-center gap-2 text-gray-900 font-bold text-lg border-b border-gray-100 pb-3">
            <TrendingUp className="w-5 h-5 text-blue-600" />
            <h2>03 — Retention Metrics & Cohort Decay</h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-2">
              <div className="font-bold text-gray-900 text-sm">Retention Tracking Horizons</div>
              <p className="text-gray-600 text-xs">
                Monitoring customer repeat purchase intervals across standard lifecycle benchmarks:
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {modules.retention.metrics.map((m) => (
                  <span key={m} className="px-2.5 py-1 rounded bg-white border border-gray-200 text-blue-700 font-mono text-xs shadow-subtle">
                    {m}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-2">
              <div className="font-bold text-gray-900 text-sm">Cohort Slicing Dimensions</div>
              <p className="text-gray-600 text-xs">
                Segmenting cohorts to understand which acquisition profiles generate long-term durability:
              </p>
              <div className="flex flex-wrap gap-2 pt-1">
                {modules.retention.cohortSlices.map((slice) => (
                  <span key={slice} className="px-2.5 py-1 rounded bg-white border border-gray-200 text-gray-800 font-mono text-xs shadow-subtle">
                    {slice}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. User Segmentation */}
        <section className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-card space-y-4">
          <div className="flex items-center gap-2 text-gray-900 font-bold text-lg border-b border-gray-100 pb-3">
            <Users className="w-5 h-5 text-blue-600" />
            <h2>04 — Behavioral User Segmentation</h2>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            Classifying user profiles into operational tiers to drive targeted lifecycle marketing and reactivation campaigns:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-2 text-xs">
            {modules.segmentation.segments.map((seg) => (
              <div key={seg} className="p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-1">
                <div className="font-bold text-gray-900 text-sm">{seg}</div>
                <div className="text-gray-600 text-[11px] leading-relaxed">
                  {seg === 'High-value users' && 'Frequent ordering, high basket size, highly resilient.'}
                  {seg === 'Occasional users' && 'Orders during promotional discounts or weekends.'}
                  {seg === 'At-risk users' && 'Decreasing order frequency over 30+ days.'}
                  {seg === 'Churned users' && 'No active sessions or purchases beyond 60+ days.'}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. A/B Testing Framework */}
        <section className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-card space-y-4">
          <div className="flex items-center justify-between border-b border-gray-100 pb-3">
            <div className="flex items-center gap-2 text-gray-900 font-bold text-lg">
              <FlaskConical className="w-5 h-5 text-blue-600" />
              <h2>05 — A/B Testing & Experimentation Framework</h2>
            </div>
            <span className="text-xs font-mono text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
              Methodology in Development
            </span>
          </div>

          <p className="text-gray-700 text-sm leading-relaxed">
            A structured experiment design to test modifications to the consumer checkout experience:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-2">
              <div className="font-bold text-gray-900 text-sm">Experiment Hypothesis & Setup</div>
              <div className="text-gray-600 leading-relaxed">
                <strong>Concept:</strong> Control (Standard multi-step checkout) vs. Treatment (Streamlined single-screen checkout with 1-click payment options).
              </div>
              <div className="text-gray-600">
                <strong>Target Metric:</strong> Order Completion Rate & Cart Abandonment reduction.
              </div>
            </div>

            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-2">
              <div className="font-bold text-gray-900 text-sm">Evaluation Dimensions</div>
              <div className="space-y-1 text-gray-700 font-mono text-[11px]">
                {modules.abTesting.evaluations.map((metric) => (
                  <div key={metric} className="flex items-center gap-2">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>{metric}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-[#F7F7F3] border border-gray-200 text-xs text-gray-600 flex items-center gap-2">
            <Clock className="w-4 h-4 text-amber-600 flex-shrink-0" />
            <span>Note: Statistical experiment framework and parameter evaluation methodology currently being designed.</span>
          </div>
        </section>

      </div>
    </div>
  );
}
