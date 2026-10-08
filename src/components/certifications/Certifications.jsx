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

  return (
    <section id="certifications" className="py-20 border-b border-gray-200/80 bg-[#F7F7F3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials & Roadmap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Certifications
          </h2>
          <p className="text-gray-600 mt-2 text-base max-w-2xl">
            Formal validation and active learning roadmap across cloud data analytics, Power BI, and visualization platforms.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {certifications.map((cert) => {
            const isCompleted = cert.statusType === 'completed';
            return (
              <div
                key={cert.name}
                className={`bg-white border rounded-xl p-6 shadow-card flex flex-col justify-between ${
                  isCompleted ? 'border-emerald-200 shadow-elevated' : 'border-gray-200'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      {getStatusIcon(cert.statusType)}
                      <span className="text-xs font-mono text-gray-500 uppercase tracking-wider">
                        {cert.issuer}
                      </span>
                    </div>
                    <Badge status={cert.status} type={cert.statusType} />
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight leading-snug mb-2">
                    {cert.name}
                  </h3>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs">
                  <span className="text-gray-500 font-mono">
                    {isCompleted ? 'Credential Earned' : cert.statusType === 'in_progress' ? 'Preparation Underway' : 'Target Roadmap'}
                  </span>
                  <span className="font-mono text-gray-600">
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
