import React, { useEffect } from 'react';
import { X, ArrowLeft, GitBranch, CheckCircle2, ExternalLink, AlertCircle } from 'lucide-react';
import { GitHubIcon } from '../common/Icons';
import { portfolioData } from '../../data/portfolioData';

export default function SecondaryProjectModal({ projectId, onClose }) {
  const project = portfolioData.projects.find((p) => p.id === projectId);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#F7F7F3] text-gray-900 transition-all">
      {/* Sticky Bar */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-gray-200 py-3.5 px-4 sm:px-8 shadow-subtle">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 text-xs font-semibold text-gray-700 hover:text-gray-950 transition-colors bg-gray-50 hover:bg-gray-100 px-3 py-1.5 rounded-md border border-gray-200"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Portfolio</span>
          </button>

          <div className="text-center hidden sm:block">
            <span className="text-xs font-mono text-blue-600 font-bold uppercase">PROJECT ARCHITECTURE</span>
            <span className="text-xs font-bold text-gray-900 ml-2">{project.shortTitle}</span>
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

      {/* Modal Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-8 py-12 space-y-10">
        
        {/* Title Header */}
        <div className="space-y-4 border-b border-gray-200 pb-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-gray-100 text-gray-800 border border-gray-200 uppercase tracking-wider">
              {project.role}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            {project.title}
          </h1>

          <p className="text-base text-gray-600 leading-relaxed max-w-2xl">
            {project.tagline}
          </p>

          <div className="pt-2">
            <div className="text-xs font-mono text-gray-500 mb-2">Technologies:</div>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span key={tech} className="px-2.5 py-1 rounded text-xs font-mono bg-white text-gray-800 border border-gray-200 shadow-subtle">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* WardrobeWhiz Dedicated Presentation */}
        {project.id === 'wardrobewhiz' && (
          <div className="space-y-6">
            {/* Visual Branding & Quick Links */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-card flex flex-col md:flex-row items-center justify-between gap-6">
              {project.image && (
                <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center max-w-[200px]">
                  <img src={project.image} alt="WardrobeWhiz Logo" className="max-h-20 w-auto object-contain" />
                </div>
              )}
              <div className="flex-1 space-y-2 text-center md:text-left">
                <span className="text-xs font-mono font-bold text-amber-700 bg-amber-50 px-2.5 py-1 rounded border border-amber-200 uppercase tracking-wider">
                  Full-Stack AI Deployment
                </span>
                <h3 className="text-xl font-bold text-gray-900">WardrobeWhiz Core Engine</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  Decoupled full-stack architecture featuring a React 19 + Framer Motion client on Vercel, a Node.js/Express inference proxy on Render, and Google Cloud Firestore persistence.
                </p>
              </div>
              <div className="flex flex-wrap sm:flex-col gap-2.5 w-full md:w-auto">
                {project.links?.live && (
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md text-xs font-semibold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-subtle"
                  >
                    <span>Launch Live App</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.links?.github && (
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md text-xs font-semibold bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors border border-gray-300"
                  >
                    <GitHubIcon className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>
                )}
              </div>
            </div>

            {/* Platform Architecture & Core Concepts */}
            <section className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-card space-y-4">
              <h2 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-3 flex items-center justify-between">
                <span>Verified Core Capabilities</span>
                <span className="text-xs font-mono text-gray-400">8 Modules Verified</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm">
                {project.concepts.map((concept) => (
                  <div key={concept} className="p-3.5 rounded-lg bg-gray-50 border border-gray-200 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800 font-medium leading-relaxed">{concept}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Technical Scope & Integrity Callout */}
            <section className="bg-amber-50/60 border border-amber-200/80 rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
                <AlertCircle className="w-4 h-4 text-amber-700 flex-shrink-0" />
                <span>Technical Scope & MVP Architecture Transparency</span>
              </div>
              <ul className="text-xs text-amber-950/80 space-y-2 leading-relaxed list-disc list-inside">
                <li>
                  <strong>AvatarFit Virtual Fitting:</strong> Implemented as a live camera-based body mapping prototype that simulates garment silhouettes over video feeds. Full real-time 3D physics-based mesh deformation is reserved for future WebGL iterations.
                </li>
                <li>
                  <strong>Multi-Tenancy & Data Isolation:</strong> The current public deployment routes to a shared demo sandbox collection (<code className="bg-amber-100/70 px-1 py-0.5 rounded text-amber-900 font-mono">users/demo_user/wardrobe_items</code>) to allow seamless evaluation without mandatory user registration friction.
                </li>
                <li>
                  <strong>Automated Unit Verification:</strong> Verified with native Node.js test suites (<code className="bg-amber-100/70 px-1 py-0.5 rounded text-amber-900 font-mono">node:test</code>) with 100% pass rates across scenario filters, gap detection, and styling rule heuristics.
                </li>
              </ul>
            </section>
          </div>
        )}

        {/* ShortX Dedicated Section */}
        {project.id === 'shortx' && (
          <div className="space-y-6">
            <section className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-card space-y-4">
              <h2 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-3 flex items-center justify-between">
                <span>System Architecture & Core Capabilities</span>
                {project.links && (
                  <div className="flex items-center gap-3">
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-mono font-bold text-blue-600 hover:text-blue-800 underline"
                      >
                        Live App ↗
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-mono font-bold text-gray-700 hover:text-gray-950 underline"
                      >
                        GitHub ↗
                      </a>
                    )}
                  </div>
                )}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm">
                {project.concepts.map((concept) => (
                  <div key={concept} className="p-3.5 rounded-lg bg-gray-50 border border-gray-200 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800 font-medium leading-relaxed">{concept}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* TO-DO Dedicated Section */}
        {project.id === 'todo' && (
          <div className="space-y-8">
            {/* Visual Screenshot Gallery */}
            <section className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-card space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-100 pb-4">
                <div>
                  <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200 uppercase tracking-wider">
                    Full-Stack Application Showcase
                  </span>
                  <h2 className="text-xl font-bold text-gray-900 mt-2">Production Interface & Live Dashboard</h2>
                </div>
                {project.links && (
                  <div className="flex items-center gap-3">
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors shadow-subtle"
                      >
                        <span>Live Demo ↗</span>
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-semibold bg-gray-100 text-gray-800 hover:bg-gray-200 transition-colors border border-gray-300"
                      >
                        <GitHubIcon className="w-3.5 h-3.5" />
                        <span>Source Code ↗</span>
                      </a>
                    )}
                  </div>
                )}
              </div>

              {/* Screenshots Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-2">
                {project.screenshots?.map((shot) => (
                  <div key={shot.id} className="space-y-2">
                    <div className="rounded-lg overflow-hidden border border-gray-200 bg-gray-950 shadow-sm">
                      <img
                        src={shot.image}
                        alt={shot.title}
                        className="w-full h-auto object-cover object-top hover:scale-[1.02] transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="px-1">
                      <div className="text-xs font-bold text-gray-900">{shot.title}</div>
                      <p className="text-[11px] text-gray-500 leading-relaxed mt-0.5">{shot.caption}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Architecture & Capabilities Section */}
            <section className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-card space-y-4">
              <h2 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-3 flex items-center justify-between">
                <span>System Architecture & Engineering Highlights</span>
                <span className="text-xs font-mono text-gray-500">52 Tests Verified</span>
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm">
                {project.concepts.map((concept) => (
                  <div key={concept} className="p-3.5 rounded-lg bg-gray-50 border border-gray-200 flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-800 font-medium leading-relaxed">{concept}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Mental Health Detection Section */}
        {project.id === 'mental-health-detection' && (
          <div className="space-y-6">
            <section className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-card space-y-4">
              <h2 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-3 flex items-center justify-between">
                <span>Platform Architecture & Core Concepts</span>
                {project.links && (
                  <div className="flex items-center gap-3">
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-mono font-bold text-blue-600 hover:text-blue-800 underline"
                      >
                        Live App ↗
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-mono font-bold text-gray-700 hover:text-gray-950 underline"
                      >
                        GitHub ↗
                      </a>
                    )}
                  </div>
                )}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm">
                {project.concepts.map((concept) => (
                  <div key={concept} className="p-3.5 rounded-lg bg-gray-50 border border-gray-200 flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{concept}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {project.id === 'emotion-music' && (
          <div className="space-y-6">
            <section className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-card space-y-5">
              <h2 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-3 flex items-center gap-2">
                <GitBranch className="w-5 h-5 text-emerald-600" />
                <span>Detection & Recommendation Pipeline</span>
              </h2>
              
              <div className="p-4 rounded-xl bg-[#F7F7F3] border border-gray-200">
                <div className="grid grid-cols-2 sm:grid-cols-6 gap-2 text-center text-xs font-mono">
                  {project.pipeline.map((p, idx) => (
                    <div key={p} className="p-2.5 rounded-lg bg-white border border-gray-200 text-gray-800 shadow-subtle">
                      <span className="text-[10px] text-gray-400 block mb-1">0{idx + 1}</span>
                      <span className="text-xs font-semibold">{p}</span>
                    </div>
                  ))}
                </div>
              </div>

              {project.historicalDetail && (
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-xs text-gray-600 leading-relaxed">
                  <strong className="text-gray-800">Engineering Detail:</strong> {project.historicalDetail}
                </div>
              )}
            </section>
          </div>
        )}

        {/* Footer Back Action */}
        <div className="pt-6 border-t border-gray-200 flex items-center justify-between">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Portfolio</span>
          </button>
        </div>

      </div>
    </div>
  );
}
