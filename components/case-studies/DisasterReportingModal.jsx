'use client';

import React, { useEffect } from 'react';
import { X, ArrowLeft, Shield, Users, CheckCircle2, UserCheck, Building2, Landmark, Smartphone } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function DisasterReportingModal({ onClose }) {
  const project = portfolioData.projects.find((p) => p.id === 'disaster-reporting');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const getRoleIcon = (role) => {
    switch (role) {
      case 'Citizen':
        return <Smartphone className="w-5 h-5 text-emerald-600" />;
      case 'Volunteer':
        return <UserCheck className="w-5 h-5 text-blue-600" />;
      case 'NGO':
        return <Building2 className="w-5 h-5 text-amber-600" />;
      case 'Government Admin':
        return <Landmark className="w-5 h-5 text-indigo-600" />;
      default:
        return <Users className="w-5 h-5 text-slate-400" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0A0A0B] text-[#F5F5F4] transition-all">
      {/* Sticky Bar */}
      <div className="sticky top-0 z-30 bg-[#0A0A0B]/95 backdrop-blur-md border-b border-white/10 py-3.5 px-4 sm:px-8 shadow-subtle">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <button
            onClick={onClose}
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors bg-[#0D0E12]/[0.04] hover:bg-[#0D0E12]/[0.08] px-3 py-1.5 rounded-md border border-white/10"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Portfolio</span>
          </button>

          <div className="text-center hidden sm:block">
            <span className="text-xs font-mono text-indigo-700 font-bold">CAPSTONE</span>
            <span className="text-xs font-bold text-[#F5F5F4] ml-2">Disaster Reporting Platform</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-slate-400 hover:text-[#F5F5F4] hover:bg-[#0D0E12]/[0.08] border border-white/10"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12 space-y-10">
        
        {/* Header */}
        <div className="space-y-4 border-b border-white/10 pb-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-indigo-50 text-indigo-800 border border-indigo-200 uppercase tracking-wider">
              B.Tech Capstone Project
            </span>
            <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-[#0D0E12] text-slate-300 border border-white/10 shadow-subtle">
              Multi-Role Platform
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#F5F5F4] tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-3xl">
            {project.tagline}
          </p>

          <div className="pt-2">
            <div className="text-xs font-mono text-slate-400 mb-2">Architectural Highlights:</div>
            <div className="flex flex-wrap gap-2">
              {project.highlights.map((h) => (
                <span key={h} className="px-2.5 py-1 rounded text-xs font-mono bg-[#0D0E12] text-slate-200 border border-white/10 shadow-subtle">
                  {h}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Multi-Role System Architecture */}
        <section className="bg-[#0D0E12] border border-white/10 rounded-xl p-6 sm:p-8 shadow-card space-y-6">
          <div className="flex items-center justify-between border-b border-white/5 pb-3">
            <div className="flex items-center gap-2 text-[#F5F5F4] font-bold text-lg">
              <Shield className="w-5 h-5 text-indigo-600" />
              <h2>Multi-Role Coordination Architecture</h2>
            </div>
            <span className="text-xs font-mono text-gray-400">4 Operational Tiers</span>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed">
            The platform establishes distinct operational boundaries and access permissions tailored to 4 key stakeholder groups involved in disaster management:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.rolesArchitecture.map((roleObj) => (
              <div
                key={roleObj.role}
                className="p-5 rounded-xl bg-[#0D0E12]/[0.04] border border-white/10 space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-[#0D0E12] border border-white/10 shadow-subtle">
                    {getRoleIcon(roleObj.role)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-[#F5F5F4]">{roleObj.role}</h3>
                    <div className="text-[11px] font-mono text-slate-400">Operational Tier</div>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="text-xs font-mono text-slate-400 mb-2 uppercase tracking-wider font-bold">
                    Core Capabilities:
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {roleObj.capabilities.map((cap) => (
                      <li key={cap} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-600 flex-shrink-0" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Engineering Highlights */}
        <section className="bg-[#0D0E12] border border-white/10 rounded-xl p-6 sm:p-8 shadow-card space-y-4">
          <h2 className="text-lg font-bold text-[#F5F5F4] border-b border-white/5 pb-3">
            Key Engineering Takeaways
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-[#0D0E12]/[0.04] border border-white/10 space-y-1">
              <div className="font-bold text-[#F5F5F4]">Relational Data Integrity</div>
              <div className="text-slate-400 leading-relaxed">Structured schema entities linking users, incident logs, status milestones, and task assignments.</div>
            </div>
            <div className="p-4 rounded-xl bg-[#0D0E12]/[0.04] border border-white/10 space-y-1">
              <div className="font-bold text-[#F5F5F4]">Multi-Role Auth</div>
              <div className="text-slate-400 leading-relaxed">Multi-role authentication and authorization verifying identity prior to granting administrative actions.</div>
            </div>
            <div className="p-4 rounded-xl bg-[#0D0E12]/[0.04] border border-white/10 space-y-1">
              <div className="font-bold text-[#F5F5F4]">Real-World Team Coordination</div>
              <div className="text-slate-400 leading-relaxed">Coordinated cross-functional workflows solving complex stakeholder communication under real-world conditions.</div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
