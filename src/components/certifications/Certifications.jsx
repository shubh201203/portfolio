import React from 'react';
import { Award, CheckCircle2, Clock, Calendar } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import Badge from '../common/Badge';

export default function Certifications() {
  const { certifications } = portfolioData;

  const getStatusIcon = (type) => {
    if (type === 'completed') {
      return <CheckCircle2 className="w-4 h-4 text-emerald-600" />;
    }
    if (type === 'in_progress') {
      return <Clock className="w-4 h-4 text-amber-600" />;
    }
    return <Calendar className="w-4 h-4 text-gray-400" />;
  };

  const completedCount = certifications.filter(c => c.statusType === 'completed').length;
  const inProgressCount = certifications.filter(c => c.statusType === 'in_progress').length;
  const plannedCount = certifications.filter(c => c.statusType === 'planned').length;

  return (
    <section id="certifications" className="py-24 border-b border-gray-200/80 bg-[#F7F7F3] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>Credentials & Roadmap</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-950">
              Professional Certifications
            </h2>
            <p className="text-gray-600 mt-2 text-base max-w-2xl">
              Industry credentials and continuous learning roadmap covering cloud data engineering, business intelligence, and analytics visualization.
            </p>
          </div>

          {/* Quick Counter Pills */}
          <div className="flex items-center gap-2 text-xs font-mono">
            <span className="px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold">
              {completedCount} Completed
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-amber-50 text-amber-800 border border-amber-200 font-semibold">
              {inProgressCount} In Progress
            </span>
            <span className="px-3 py-1.5 rounded-lg bg-gray-100 text-gray-700 border border-gray-200 font-semibold">
              {plannedCount} Planned
            </span>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert) => {
            const isCompleted = cert.statusType === 'completed';
            const isInProgress = cert.statusType === 'in_progress';

            return (
              <div
                key={cert.name}
                className={`bg-white border rounded-xl p-6 sm:p-7 shadow-card hover:shadow-elevated transition-all flex flex-col justify-between ${
                  isCompleted 
                    ? 'border-emerald-300 ring-1 ring-emerald-500/10' 
                    : isInProgress 
                    ? 'border-amber-300 ring-1 ring-amber-500/10' 
                    : 'border-gray-200'
                }`}
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        {getStatusIcon(cert.statusType)}
                        <span className="text-xs font-mono text-gray-500 uppercase tracking-wider font-semibold">
                          {cert.issuer}
                        </span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-gray-950 tracking-tight leading-snug">
                        {cert.name}
                      </h3>
                    </div>

                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <Badge status={cert.status} type={cert.statusType} />
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

                  <p className="text-xs text-gray-500 leading-relaxed mb-4">
                    {isCompleted 
                      ? 'Verified Google Cloud certification in big data architectures, cloud storage, BigQuery pipelines, and machine learning solutions.'
                      : isInProgress
                      ? 'Actively advancing through comprehensive DAX modeling, Power BI Service administration, and semantic layer architectures.'
                      : cert.name.includes('Azure')
                      ? 'Foundational cloud data services roadmap spanning Azure Synapse, Cosmos DB, and modern lakehouse architecture.'
                      : 'Advanced data modeling, visual analytics, and enterprise BI dashboard creation on Tableau.'}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="text-gray-500 font-mono">
                    {isCompleted 
                      ? 'Credential Verified' 
                      : isInProgress 
                      ? 'Active Preparation' 
                      : 'Strategic Target'}
                  </span>
                  <span className="font-mono font-medium text-gray-700">
                    {cert.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
