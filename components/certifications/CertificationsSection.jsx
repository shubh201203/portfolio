'use client';

import React from 'react';
import { 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Database, 
  BarChart3, 
  Cloud, 
  Layers, 
  Sparkles 
} from 'lucide-react';
import { asset } from '@/lib/utils';
import { portfolioData } from '@/data/portfolioData';

export default function CertificationsSection() {
  const { certifications } = portfolioData;

  const completedCerts = certifications.filter((c) => c.statusType === 'completed');
  const inProgressCerts = certifications.filter((c) => c.statusType === 'in_progress');

  const getDomainIcon = (certName) => {
    if (certName.includes('Power BI')) return <BarChart3 className="w-5 h-5 text-amber-400" />;
    if (certName.includes('Fabric')) return <Layers className="w-5 h-5 text-blue-400" />;
    if (certName.includes('Azure')) return <Cloud className="w-5 h-5 text-cyan-400" />;
    if (certName.includes('Practitioner')) return <Database className="w-5 h-5 text-emerald-400" />;
    return <Sparkles className="w-5 h-5 text-indigo-400" />;
  };

  return (
    <section id="credentials" className="py-24 sm:py-32 bg-[#07080B] text-white border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="pb-8 border-b border-white/10 mb-14 sm:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.24em] text-blue-400 font-bold mb-3">
              <span>05 // CREDENTIALS</span>
              <span className="text-white/20">•</span>
              <span>SPECIALIZATIONS &amp; STANDARDS</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-headline font-extrabold tracking-tight text-white leading-[1.02]">
              VERIFIED CREDENTIALS.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-white">
                INDUSTRY STANDARDS.
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-2.5 font-mono text-xs">
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>4 Completed (Oct 2026)</span>
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 font-bold flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>1 In Progress</span>
            </span>
          </div>
        </div>

        {/* 4 Completed Certifications Grid */}
        <div className="mb-14">
          <div className="flex items-center justify-between pb-3 mb-6 border-b border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <h3 className="text-xs font-mono uppercase tracking-wider font-bold text-white">
                Completed Credentials — October 2026
              </h3>
            </div>
            <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/30 font-medium">
              100% Industry Verified
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {completedCerts.map((cert) => (
              <div
                key={cert.name}
                className="rounded-3xl bg-[#0B0E17] border border-white/15 p-6 sm:p-7 shadow-2xl hover:border-blue-500/40 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="p-1.5 rounded-xl bg-white/5 border border-white/10">
                          {getDomainIcon(cert.name)}
                        </div>
                        <span className="text-xs font-mono text-slate-400 uppercase tracking-wider font-semibold">
                          {cert.issuer}
                        </span>
                      </div>
                      <h4 className="text-base sm:text-lg font-headline font-bold text-white tracking-tight leading-snug">
                        {cert.name}
                      </h4>
                    </div>

                    {cert.badgeImage && (
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden bg-white/5 border border-white/15 p-1 shadow-md shrink-0">
                        <img
                          src={asset(`/${cert.badgeImage}`)}
                          alt={`${cert.name} Official Badge`}
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                    {cert.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
                  <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Completed · October 2026</span>
                  </span>
                  <span className="text-slate-500">
                    Official Record
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 1 In-Progress Specialization Track */}
        <div className="rounded-3xl bg-[#0B0E17] border border-white/15 p-6 sm:p-8 shadow-2xl">
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
              <span className="font-bold text-white uppercase">Active Learning Track // In Progress</span>
            </div>
            <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 font-semibold">
              Curriculum Underway
            </span>
          </div>

          {inProgressCerts.map((cert) => (
            <div key={cert.name} className="flex flex-col md:flex-row md:items-center justify-between gap-6">
              <div className="space-y-2 max-w-3xl">
                <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
                  <span className="font-bold uppercase text-amber-400">{cert.issuer}</span>
                  <span>•</span>
                  <span>Professional Certificate</span>
                </div>
                <h4 className="text-lg sm:text-xl font-headline font-bold text-white">
                  {cert.name}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                  {cert.description}
                </p>
              </div>

              <div className="shrink-0 flex items-center gap-2 font-mono text-xs">
                <span className="px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 font-bold flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span>In Progress</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Integrity Standard Strip */}
        <div className="mt-8 p-4 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-400" />
            <span><strong className="text-white">Credential Integrity Standard:</strong> Directly verifiable against official Microsoft and Google Cloud credential records issued in October 2026.</span>
          </div>
        </div>

      </div>
    </section>
  );
}
