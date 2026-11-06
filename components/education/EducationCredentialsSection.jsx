'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, 
  Award, 
  CheckCircle2, 
  Clock, 
  ShieldCheck, 
  Database, 
  BarChart3, 
  Cloud, 
  Layers, 
  Sparkles,
  ExternalLink,
  BookOpen
} from 'lucide-react';
import { asset } from '@/lib/utils';
import { portfolioData } from '@/data/portfolioData';

export default function EducationCredentialsSection() {
  const certifications = [
    {
      id: 'pl-300',
      name: 'Microsoft Certified: Power BI Data Analyst Associate (PL-300)',
      issuer: 'Microsoft',
      badge: 'PL-300',
      status: 'Completed',
      statusType: 'completed',
      date: 'Earned October 2026',
      badgeImage: null,
      description: 'Advanced semantic modeling, DAX measure calculations (Time Intelligence, CALCULATE, DIVIDE), Power Query ETL, and executive dashboard development reconciled with relational SQL databases.',
      skills: ['Power BI Desktop', 'Advanced DAX', 'Data Modeling', 'Power Query M', 'KPI Design'],
      icon: BarChart3,
      accent: 'amber'
    },
    {
      id: 'dp-600',
      name: 'Microsoft Certified: Fabric Analytics Engineer Associate (DP-600)',
      issuer: 'Microsoft',
      badge: 'DP-600',
      status: 'Completed',
      statusType: 'completed',
      date: 'Earned October 2026',
      badgeImage: null,
      description: 'Enterprise lakehouse architecture on Microsoft Fabric, Delta Lake storage, OneLake data unification, medallion architecture, and Direct Lake semantic reporting.',
      skills: ['Microsoft Fabric', 'OneLake', 'Delta Tables', 'Lakehouse', 'Data Factory'],
      icon: Layers,
      accent: 'blue'
    },
    {
      id: 'dp-900',
      name: 'Microsoft Certified: Azure Data Fundamentals (DP-900)',
      issuer: 'Microsoft',
      badge: 'DP-900',
      status: 'Completed',
      statusType: 'completed',
      date: 'Earned October 2026',
      badgeImage: null,
      description: 'Core cloud data concepts, relational data warehousing in Azure Synapse, non-relational document storage in Cosmos DB, and cloud data governance.',
      skills: ['Azure Synapse', 'Cloud Storage', 'Relational DBs', 'NoSQL', 'Security'],
      icon: Cloud,
      accent: 'cyan'
    },
    {
      id: 'gcp-data',
      name: 'Google Data Practitioner Associate',
      issuer: 'Google Cloud',
      badge: 'GCCF Data',
      status: 'Completed',
      statusType: 'completed',
      date: 'Earned October 2026',
      badgeImage: asset('/images/certifications/google-cloud-associate.png'),
      description: 'Google Cloud Computing Foundations: BigQuery SQL data warehousing, Cloud Storage data lakes, IAM security controls, and Looker Studio business analytics.',
      skills: ['BigQuery', 'Google Cloud', 'Cloud IAM', 'Data Warehousing', 'Analytics'],
      icon: Database,
      accent: 'emerald'
    },
    {
      id: 'google-analytics-prof',
      name: 'Google Data Analytics Professional Certificate',
      issuer: 'Google / Coursera',
      badge: 'In Progress',
      status: 'In Progress',
      statusType: 'in_progress',
      date: 'Pursuing — Expected 2027',
      description: 'Comprehensive 8-course professional specialization covering analytical problem solving, data cleansing methodologies, R programming, SQL querying, and stakeholder data storytelling.',
      skills: ['R Programming', 'Data Cleansing', 'Statistical Analysis', 'Spreadsheets', 'Storytelling'],
      icon: Clock,
      accent: 'amber'
    }
  ];

  const completed = certifications.filter(c => c.statusType === 'completed');
  const inProgress = certifications.filter(c => c.statusType === 'in_progress');

  return (
    <section id="education" className="py-24 sm:py-32 bg-[#0A0A0B] text-white border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="pb-8 border-b border-white/10 mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.24em] text-[#3B82F6] font-bold mb-3">
              <span>05 // FOUNDATIONS</span>
              <span className="text-white/20">•</span>
              <span>ACADEMIC &amp; INDUSTRY CREDENTIALS</span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-headline font-extrabold tracking-tight text-[#F5F5F4] leading-[1.02]">
              EDUCATION &amp;<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] via-[#14B8A6] to-[#F5F5F4]">
                CREDENTIALS
              </span>
            </h2>
          </div>

          <div className="flex items-center gap-3 font-mono text-xs">
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 font-bold flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>4 Certified (Oct 2026)</span>
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/30 font-bold flex items-center gap-2">
              <Clock className="w-3.5 h-3.5 text-amber-400" />
              <span>1 In Progress</span>
            </span>
          </div>
        </div>

        {/* ================================================================= */}
        {/* SUBSECTION 1: EDUCATION                                           */}
        {/* ================================================================= */}
        <div className="mb-20">
          <div className="flex items-center gap-3 pb-3 mb-8 border-b border-white/10">
            <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-500/20 text-[#3B82F6]">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#3B82F6] font-bold">
                Subsection 01 // Higher Education
              </h3>
              <p className="text-xl sm:text-2xl font-headline font-bold text-[#F5F5F4]">
                Academic Programs &amp; Degrees
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* VIT-AP University */}
            <div className="rounded-3xl bg-[#0D0E12] border border-white/10 p-7 sm:p-9 shadow-2xl relative overflow-hidden group hover:border-[#3B82F6]/50 transition-all duration-300">
              <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-mono font-semibold uppercase tracking-wider">
                    Undergraduate Program
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-headline font-bold text-white mt-3">
                    VIT-AP University
                  </h4>
                  <p className="text-sm font-semibold text-slate-300 mt-1">
                    B.Tech — Computer Science and Engineering (Core)
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-300 font-semibold shrink-0">
                  2023–2027
                </span>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
                  <span>Location:</span>
                  <span className="text-slate-200 font-semibold">Amaravati, Andhra Pradesh, India</span>
                </div>
                
                <p className="text-sm text-slate-300 leading-relaxed">
                  Rigorous core computer science curriculum emphasizing relational database systems, schema architecture, algorithms, and applied software engineering.
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                    Core Coursework &amp; Foundations:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Relational Database Systems (RDBMS)',
                      'Data Structures & Algorithms',
                      'Object-Oriented Programming',
                      'Operating Systems',
                      'Computer Networks',
                      'Software Engineering'
                    ].map((topic, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* IIT Madras */}
            <div className="rounded-3xl bg-[#0D0E12] border border-[#14B8A6]/30 p-7 sm:p-9 shadow-2xl relative overflow-hidden group hover:border-[#14B8A6]/60 transition-all duration-300">
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#14B8A6]/5 rounded-full blur-3xl pointer-events-none" />
              
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <span className="px-3 py-1 rounded-full bg-[#14B8A6]/10 border border-[#14B8A6]/30 text-[#14B8A6] text-xs font-mono font-semibold uppercase tracking-wider flex items-center gap-1.5 w-fit">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] animate-pulse" />
                    Pursuing Concurrently
                  </span>
                  <h4 className="text-2xl sm:text-3xl font-headline font-bold text-white mt-3">
                    IIT Madras
                  </h4>
                  <p className="text-sm font-semibold text-slate-300 mt-1">
                    BS Degree in Data Science and Management
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full bg-[#14B8A6]/10 border border-[#14B8A6]/30 text-xs font-mono text-[#14B8A6] font-bold shrink-0">
                  Foundational Level
                </span>
              </div>

              <div className="space-y-4 pt-4 border-t border-white/10">
                <div className="text-xs font-mono text-slate-400 flex items-center gap-2">
                  <span>Institution:</span>
                  <span className="text-slate-200 font-semibold">Indian Institute of Technology Madras</span>
                </div>
                
                <p className="text-sm text-slate-300 leading-relaxed">
                  Specialized program cultivating deep theoretical and applied competencies in mathematical modeling, exploratory data analysis, algorithmic statistics, and data-driven management frameworks.
                </p>

                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold block">
                    Curriculum &amp; Analytical Areas:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Mathematics for Data Science',
                      'Statistics for Data Science',
                      'Computational Thinking',
                      'Python Programming',
                      'Business Management Foundations'
                    ].map((topic, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-mono text-slate-300">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ================================================================= */}
        {/* SUBSECTION 2: CERTIFICATIONS                                      */}
        {/* ================================================================= */}
        <div>
          <div className="flex items-center gap-3 pb-3 mb-8 border-b border-white/10">
            <div className="p-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-emerald-400 font-bold">
                Subsection 02 // Professional Certifications
              </h3>
              <p className="text-xl sm:text-2xl font-headline font-bold text-[#F5F5F4]">
                Industry Verified Standards &amp; Credentials
              </p>
            </div>
          </div>

          {/* 4 Completed Credentials Grid */}
          <div className="mb-10">
            <div className="flex items-center justify-between pb-2 mb-6">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-white">
                  Completed Certifications — October 2026
                </h4>
              </div>
              <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/30 font-semibold">
                4 Completed
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {completed.map((cert) => {
                const IconComponent = cert.icon;
                return (
                  <div
                    key={cert.id}
                    className="rounded-3xl bg-[#0D0E12] border border-white/10 p-6 sm:p-7 shadow-xl hover:border-[#3B82F6]/40 transition-all flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300 font-semibold uppercase tracking-wider">
                              {cert.issuer}
                            </span>
                            <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/30 text-[10px] font-mono font-bold flex items-center gap-1">
                              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                              <span>Verified</span>
                            </span>
                          </div>
                          
                          <h5 className="text-base sm:text-lg font-headline font-bold text-white tracking-tight leading-snug">
                            {cert.name}
                          </h5>
                          
                          <p className="text-xs font-mono text-slate-400 mt-1">
                            {cert.date}
                          </p>
                        </div>

                        {cert.badgeImage ? (
                          <div className="w-14 h-14 rounded-2xl overflow-hidden bg-white/5 border border-white/15 p-1.5 shadow-md shrink-0 flex items-center justify-center">
                            <img
                              src={cert.badgeImage}
                              alt={cert.name}
                              className="w-full h-full object-contain"
                            />
                          </div>
                        ) : (
                          <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/15 p-3 shadow-md shrink-0 flex items-center justify-center text-[#3B82F6]">
                            <IconComponent className="w-7 h-7" />
                          </div>
                        )}
                      </div>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal mb-5">
                        {cert.description}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-white/10">
                      <div className="flex flex-wrap gap-1.5">
                        {cert.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/10 text-[11px] font-mono text-slate-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* 1 In-Progress Credential Card */}
          <div>
            <div className="flex items-center justify-between pb-2 mb-6">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400" />
                <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-white">
                  Active Specialization — In Progress
                </h4>
              </div>
              <span className="text-xs font-mono text-amber-300 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/30 font-semibold">
                1 In Progress
              </span>
            </div>

            {inProgress.map((cert) => (
              <div
                key={cert.id}
                className="rounded-3xl bg-[#0D0E12] border border-amber-500/30 p-6 sm:p-7 shadow-xl hover:border-amber-500/50 transition-all flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-3 max-w-2xl">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-[10px] font-mono text-amber-300 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                      In Progress
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[10px] font-mono text-slate-300 font-semibold">
                      {cert.issuer}
                    </span>
                  </div>

                  <h5 className="text-lg sm:text-xl font-headline font-bold text-white tracking-tight">
                    {cert.name}
                  </h5>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                    {cert.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {cert.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-0.5 rounded-md bg-white/[0.04] border border-white/10 text-[11px] font-mono text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-center shrink-0 min-w-[180px]">
                  <span className="text-[11px] font-mono text-slate-400 block mb-1">Status</span>
                  <span className="text-sm font-bold font-mono text-amber-300 flex items-center justify-center gap-1.5">
                    <Clock className="w-4 h-4" />
                    <span>In Progress</span>
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 block mt-2">
                    Pursuing Specialization
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}