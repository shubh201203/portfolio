import React from 'react';
import { GraduationCap, CheckCircle2 } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 border-b border-gray-200/80 bg-[#F7F7F3] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-950">
            Education & Foundations
          </h2>
          <p className="text-gray-600 mt-2 text-base max-w-2xl">
            Dual academic foundation combining computer science engineering with specialized training in data science and management.
          </p>
        </div>

        {/* Education Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((edu, idx) => {
            const isDual = idx < 2;
            return (
              <div
                key={edu.institution}
                className={`bg-white border rounded-xl p-6 sm:p-7 shadow-card hover:shadow-elevated transition-all flex flex-col justify-between ${
                  isDual ? 'border-gray-300' : 'border-gray-200'
                }`}
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-blue-700 uppercase tracking-wider font-bold">
                      {idx === 0 ? 'Primary Degree' : idx === 1 ? 'Data Science Track' : 'Board Records'}
                    </span>
                    {edu.period && (
                      <span className="text-xs font-mono text-gray-700 px-2.5 py-0.5 rounded-full bg-gray-100 border border-gray-200 font-medium">
                        {edu.period}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-gray-950 tracking-tight leading-snug">
                    {edu.institution}
                  </h3>

                  <div className="text-xs font-semibold text-blue-700 leading-relaxed">
                    {edu.degree}
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed pt-1">
                    {edu.details}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 mt-4 flex items-center gap-1.5 text-[11px] font-mono text-gray-400">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Verified Academic Record</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
