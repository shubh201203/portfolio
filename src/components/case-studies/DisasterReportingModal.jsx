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
        return <Users className="w-5 h-5 text-gray-500" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#F7F7F3] text-gray-900 transition-all">
      {/* Sticky Bar */}
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
            <span className="text-xs font-mono text-indigo-700 font-bold">CAPSTONE</span>
            <span className="text-xs font-bold text-gray-900 ml-2">Disaster Reporting Platform</span>
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

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12 space-y-10">
        
        {/* Header */}
        <div className="space-y-4 border-b border-gray-200 pb-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-0.5 rounded text-xs font-mono font-bold bg-indigo-50 text-indigo-800 border border-indigo-200 uppercase tracking-wider">
              B.Tech Capstone Project
            </span>
            <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-white text-gray-700 border border-gray-200 shadow-subtle">
              Multi-Role Platform
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
            {project.title}
          </h1>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl">
            {project.tagline}
          </p>

          <div className="pt-2">
            <div className="text-xs font-mono text-gray-500 mb-2">Architectural Highlights:</div>
            <div className="flex flex-wrap gap-2">
              {project.highlights.map((h) => (
                <span key={h} className="px-2.5 py-1 rounded text-xs font-mono bg-white text-gray-800 border border-gray-200 shadow-subtle">
                  {h}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Multi-Role System Architecture */}
        <section className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-card space-y-6">
          <div className="flex items-center justify-between border-b border-gray-100 pb-3">
            <div className="flex items-center gap-2 text-gray-900 font-bold text-lg">
              <Shield className="w-5 h-5 text-indigo-600" />
              <h2>Multi-Role Coordination Architecture</h2>
            </div>
            <span className="text-xs font-mono text-gray-400">4 Operational Tiers</span>
          </div>

          <p className="text-gray-700 text-sm leading-relaxed">
            The platform establishes distinct operational boundaries and access permissions tailored to 4 key stakeholder groups involved in disaster management:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.rolesArchitecture.map((roleObj) => (
              <div
                key={roleObj.role}
                className="p-5 rounded-xl bg-gray-50 border border-gray-200 space-y-3"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-md bg-white border border-gray-200 shadow-subtle">
                    {getRoleIcon(roleObj.role)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900">{roleObj.role}</h3>
                    <div className="text-[11px] font-mono text-gray-500">Operational Tier</div>
                  </div>
                </div>

                <div className="pt-2">
                  <div className="text-xs font-mono text-gray-500 mb-2 uppercase tracking-wider font-bold">
                    Core Capabilities:
                  </div>
                  <ul className="space-y-1.5 text-xs text-gray-700">
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
        <section className="bg-white border border-gray-200 rounded-xl p-6 sm:p-8 shadow-card space-y-4">
          <h2 className="text-lg font-bold text-gray-900 border-b border-gray-100 pb-3">
            Key Engineering Takeaways
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-1">
              <div className="font-bold text-gray-900">Relational Data Integrity</div>
              <div className="text-gray-600 leading-relaxed">Structured schema entities linking users, incident logs, status milestones, and task assignments.</div>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-1">
              <div className="font-bold text-gray-900">Multi-Role Auth</div>
              <div className="text-gray-600 leading-relaxed">Multi-role authentication and authorization verifying identity prior to granting administrative actions.</div>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-1">
              <div className="font-bold text-gray-900">Real-World Team Coordination</div>
              <div className="text-gray-600 leading-relaxed">Coordinated cross-functional workflows solving complex stakeholder communication under real-world conditions.</div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
