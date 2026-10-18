import React from 'react';
import { ArrowRight, Layers, Shield, Cpu, Sparkles, ExternalLink, Link2 } from 'lucide-react';
import Badge from '../common/Badge';

export default function ProjectCard({ project, onOpenCaseStudy }) {
  const isProductAnalytics = project.id === 'product-analytics';
  const isDisasterPlatform = project.id === 'disaster-reporting';
  const isWardrobeWhiz = project.id === 'wardrobewhiz';
  const isShortX = project.id === 'shortx';

  const getCardIcon = () => {
    if (isProductAnalytics) return <Layers className="w-5 h-5 text-blue-600" />;
    if (isDisasterPlatform) return <Shield className="w-5 h-5 text-gray-700" />;
    if (isWardrobeWhiz) return <Sparkles className="w-5 h-5 text-amber-600" />;
    if (isShortX) return <Link2 className="w-5 h-5 text-indigo-600" />;
    return <Cpu className="w-5 h-5 text-gray-700" />;
  };

  return (
    <div className={`bg-white border rounded-lg p-6 sm:p-7 flex flex-col justify-between ${
      isProductAnalytics ? 'border-gray-300 shadow-subtle' : 'border-gray-200'
    }`}>
      <div className="space-y-4">
        {/* Top Meta */}
        <div className="flex items-center justify-between gap-3 border-b border-gray-100 pb-3">
          <div className="flex items-center gap-2">
            <div className={`p-1.5 rounded ${isProductAnalytics ? 'text-blue-600' : 'text-gray-600'}`}>
              {getCardIcon()}
            </div>
            <span className="text-[11px] font-mono text-gray-500 uppercase tracking-wider">
              {project.role}
            </span>
          </div>

          {project.status && (
            <Badge status={project.status} type={project.status.includes('In Development') ? 'in_progress' : 'default'} />
          )}
        </div>

        {/* Title & Tagline */}
        <div>
          <h3 className="text-xl font-bold text-gray-950 tracking-tight">
            {project.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mt-1.5">
            {project.tagline}
          </p>
        </div>

        {/* Product Analytics: Visual Conversion Funnel */}
        {isProductAnalytics && project.modules && (
          <div className="pt-2 pb-1 space-y-3">
            <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-gray-500 font-semibold">
              <span>Conversion Funnel & Drop-off Flow</span>
              <span className="text-blue-600">6 Stages</span>
            </div>
            
            {/* Visual Funnel Step Pills */}
            <div className="flex flex-wrap items-center gap-1 text-[11px] font-mono text-gray-800">
              {project.modules.funnel.steps.map((step, idx) => (
                <React.Fragment key={step}>
                  <span className="px-2 py-0.5 rounded bg-gray-50 border border-gray-200">
                    {step}
                  </span>
                  {idx < project.modules.funnel.steps.length - 1 && (
                    <span className="text-blue-600 text-xs font-bold">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>

            <p className="text-xs text-gray-500 leading-relaxed">
              {project.modules.funnel.analysis}
            </p>

            {/* Retention & A/B Testing Note */}
            <div className="pt-2 border-t border-gray-100 flex flex-wrap items-center justify-between gap-2 text-[11px] font-mono text-gray-500">
              <span>Cohorts: D1, D7, D30</span>
              <span className="text-gray-700 bg-gray-100 px-2 py-0.5 rounded">
                A/B Checkout Experiment Framework
              </span>
            </div>
          </div>
        )}

        {/* Disaster Reporting: Multi-Role System */}
        {isDisasterPlatform && project.rolesArchitecture && (
          <div className="pt-2 pb-1 space-y-2">
            <div className="text-[11px] font-mono uppercase tracking-wider text-gray-500 font-semibold">
              Coordinated Multi-Stakeholder Architecture
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 text-center text-xs">
              {project.rolesArchitecture.map((r) => (
                <div key={r.role} className="p-2 rounded bg-gray-50 border border-gray-200">
                  <div className="font-bold text-gray-900 text-xs">{r.role}</div>
                  <div className="text-[10px] text-gray-400 font-mono mt-0.5">{r.capabilities.length} tasks</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* WardrobeWhiz: Core Modules Architecture */}
        {isWardrobeWhiz && (
          <div className="pt-2 pb-1 space-y-2">
            <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-gray-500 font-semibold">
              <span>Core Application Modules</span>
              <span className="text-amber-600 font-semibold">AI + Full Stack</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5 text-center text-xs">
              <div className="p-2 rounded bg-gray-50 border border-gray-200">
                <div className="font-bold text-gray-900 text-xs">Digital Closet</div>
                <div className="text-[10px] text-gray-400 font-mono mt-0.5">MobileNet Vision</div>
              </div>
              <div className="p-2 rounded bg-gray-50 border border-gray-200">
                <div className="font-bold text-gray-900 text-xs">AI Stylist</div>
                <div className="text-[10px] text-gray-400 font-mono mt-0.5">OpenAI Context</div>
              </div>
              <div className="p-2 rounded bg-gray-50 border border-gray-200 col-span-2 sm:col-span-1">
                <div className="font-bold text-gray-900 text-xs">Style Analytics</div>
                <div className="text-[10px] text-gray-400 font-mono mt-0.5">Balance Index</div>
              </div>
            </div>
          </div>
        )}

        {/* Tech Stack */}
        <div className="pt-1">
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 rounded text-xs font-mono bg-gray-50 text-gray-600 border border-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Action Link */}
      <div className="pt-5 border-t border-gray-100 mt-5 flex flex-wrap items-center justify-between gap-3">
        {onOpenCaseStudy ? (
          <button
            onClick={() => onOpenCaseStudy(project.id)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
          >
            <span>{isProductAnalytics ? 'View Product Case Study' : isDisasterPlatform ? 'View Capstone Architecture' : 'View Project Details'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        ) : (
          <span className="text-xs text-gray-400 font-mono">Academic Project</span>
        )}

        {project.links && (
          <div className="flex items-center gap-2">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-medium bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors border border-blue-200"
                aria-label={`Open live demo for ${project.shortTitle || project.title}`}
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded text-xs font-medium bg-gray-50 text-gray-700 hover:bg-gray-100 transition-colors border border-gray-200"
                aria-label={`Open GitHub repository for ${project.shortTitle || project.title}`}
              >
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

