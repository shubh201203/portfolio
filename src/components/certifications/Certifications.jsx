import React from 'react';
import { Award, CheckCircle2, Clock, ShieldCheck, Sparkles, Database, BarChart3, Cloud, Layers } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import Badge from '../common/Badge';

export default function Certifications() {
  const { certifications } = portfolioData;

  const completedCerts = certifications.filter(c => c.statusType === 'completed');
  const inProgressCerts = certifications.filter(c => c.statusType === 'in_progress');

  const getDomainIcon = (certName) => {
    if (certName.includes('Power BI')) {
      return <BarChart3 className="w-5 h-5 text-amber-600" />;
    }
    if (certName.includes('Fabric')) {
      return <Layers className="w-5 h-5 text-blue-600" />;
    }
    if (certName.includes('Azure')) {
      return <Cloud className="w-5 h-5 text-cyan-600" />;
    }
    if (certName.includes('Practitioner')) {
      return <Database className="w-5 h-5 text-emerald-600" />;
    }
    return <Sparkles className="w-5 h-5 text-indigo-600" />;
  };

  return (
    <section id="certifications" className="py-24 border-b border-gray-200/80 bg-[#F7F7F3] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Verified Credentials & Specializations</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-950">
              Professional Certifications
            </h2>
            <p className="text-gray-600 mt-2 text-base max-w-2xl">
              Industry-standard certifications validating expertise across business intelligence, cloud analytics engineering, relational databases, and enterprise data models.
            </p>
          </div>

          {/* Quick Counter Pills */}
          <div className="flex items-center gap-2 text-xs font-mono shrink-0">
            <span className="px-3.5 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold flex items-center gap-1.5 shadow-subtle">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>4 Completed (Oct 2026)</span>
            </span>
            <span className="px-3.5 py-1.5 rounded-lg bg-amber-50 text-amber-800 border border-amber-200 font-semibold flex items-center gap-1.5 shadow-subtle">
              <Clock className="w-3.5 h-3.5 text-amber-600" />
              <span>1 In Progress</span>
            </span>
          </div>
        </div>

        {/* GROUP 1: COMPLETED — OCTOBER 2026 */}
        <div className="mb-14">
          <div className="flex items-center justify-between pb-3 mb-6 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <h3 className="text-sm font-mono uppercase tracking-wider font-bold text-gray-900">
                Completed Credentials — October 2026
              </h3>
            </div>
            <span className="text-xs font-mono text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200 font-medium">
              100% Industry Verified
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {completedCerts.map((cert) => (
              <div
                key={cert.name}
                className="bg-white border border-emerald-200/90 rounded-2xl p-6 sm:p-7 shadow-card hover:shadow-elevated transition-all flex flex-col justify-between relative group ring-1 ring-emerald-500/10 hover:border-emerald-300"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="p-1.5 rounded-lg bg-gray-50 border border-gray-100">
                          {getDomainIcon(cert.name)}
                        </div>
                        <span className="text-xs font-mono text-gray-500 uppercase tracking-wider font-semibold">
                          {cert.issuer}
                        </span>
                      </div>
                      <h4 className="text-base sm:text-lg font-bold text-gray-950 tracking-tight leading-snug">
                        {cert.name}
                      </h4>
                    </div>

                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <Badge status="Completed · Oct 2026" type="completed" />
                      {cert.badgeImage && (
                        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-white border border-gray-200 p-1 shadow-subtle hover:scale-105 transition-transform flex items-center justify-center">
                          <img
                            src={`${import.meta.env.BASE_URL}${cert.badgeImage}`}
                            alt={`${cert.name} Official Badge`}
                            className="w-full h-full object-contain"
                            loading="lazy"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="text-emerald-700 font-mono font-medium flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Completed & Certified</span>
                  </span>
                  <span className="font-mono text-gray-500">
                    October 2026
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* GROUP 2: IN PROGRESS */}
        <div>
          <div className="flex items-center justify-between pb-3 mb-6 border-b border-gray-200">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse"></span>
              <h3 className="text-sm font-mono uppercase tracking-wider font-bold text-gray-900">
                Active Specialization — In Progress
              </h3>
            </div>
            <span className="text-xs font-mono text-amber-800 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200 font-medium">
              Curriculum Underway
            </span>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {inProgressCerts.map((cert) => (
              <div
                key={cert.name}
                className="bg-white border border-amber-200 rounded-2xl p-6 sm:p-7 shadow-card hover:shadow-elevated transition-all flex flex-col md:flex-row md:items-center justify-between gap-6 ring-1 ring-amber-500/10"
              >
                <div className="flex-1 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-amber-50 text-amber-700 border border-amber-200">
                      <Clock className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono text-gray-500 uppercase tracking-wider font-semibold">
                      {cert.issuer}
                    </span>
                    <span className="text-gray-300">•</span>
                    <span className="text-xs font-mono text-amber-700 font-medium">Professional Certificate</span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold text-gray-950 tracking-tight">
                    {cert.name}
                  </h4>

                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed max-w-3xl">
                    {cert.description}
                  </p>
                </div>

                <div className="flex flex-col sm:items-end gap-3 shrink-0">
                  <Badge status="In Progress" type="in_progress" />
                  <div className="text-xs font-mono text-gray-500">
                    Active Learning Track
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education & Academic Record Strip */}
        <div className="mt-12 p-6 sm:p-7 rounded-3xl bg-white border border-gray-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-gray-100 text-xs font-mono">
            <span className="font-bold text-gray-900 uppercase">Degree Programs &amp; Academic Foundations</span>
            <span className="text-gray-500">2023–2027</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-gray-50/70 border border-gray-200/80 space-y-1">
              <div className="text-sm font-bold text-gray-950">VIT-AP University</div>
              <div className="text-xs text-gray-700">B.Tech in Computer Science &amp; Engineering (Core)</div>
              <div className="text-xs font-mono text-gray-500 pt-0.5">2023–2027 • Amaravati, AP</div>
            </div>

            <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200/80 space-y-1">
              <div className="text-sm font-bold text-gray-950">Indian Institute of Technology Madras</div>
              <div className="text-xs text-gray-700">BS Degree in Data Science &amp; Management</div>
              <div className="text-xs font-mono text-blue-700 font-bold pt-0.5">Foundational Level — Pursuing</div>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between pt-1 text-xs font-mono text-gray-600">
            <span>Secondary &amp; Senior Secondary Examination Performance:</span>
            <span className="font-bold text-gray-900">Class X: 95% &nbsp;|&nbsp; Class XII: 78%</span>
          </div>
        </div>

        {/* Verification Standards Callout */}
        <div className="mt-6 bg-white border border-gray-200 rounded-xl p-5 shadow-subtle flex items-start sm:items-center gap-3 text-xs text-gray-600">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 sm:mt-0" />
          <p className="leading-relaxed">
            <strong className="text-gray-900 font-semibold">Credential Integrity Standard:</strong> All 4 completed certifications are directly verifiable against official Microsoft and Google Cloud credential records issued in October 2026. No synthetic credential IDs or mock badges are used.
          </p>
        </div>

      </div>
    </section>
  );
}
