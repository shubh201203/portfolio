import React from 'react';
import { GraduationCap } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-20 border-b border-gray-200/80 bg-[#F7F7F3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Education
          </h2>
          <p className="text-gray-600 mt-2 text-base max-w-2xl">
            Computer science engineering degree combined with rigorous foundational training in data science and management.
          </p>
        </div>

        {/* Timeline / Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {education.map((edu, idx) => {
            const isDual = idx < 2;
            return (
              <div
                key={edu.institution}
                className={`bg-white border rounded-xl p-6 shadow-card flex flex-col justify-between ${
                  isDual ? 'border-gray-300' : 'border-gray-200'
                }`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono text-blue-700 uppercase tracking-wider font-bold">
                      {idx === 0 ? 'Primary Degree' : idx === 1 ? 'Data Science Track' : 'Board Examinations'}
                    </span>
                    {edu.period && (
                      <span className="text-xs font-mono text-gray-600 px-2 py-0.5 rounded bg-gray-50 border border-gray-200">
                        {edu.period}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 tracking-tight leading-snug">
                    {edu.institution}
                  </h3>

                  <div className="text-xs font-semibold text-blue-700">
                    {edu.degree}
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed pt-1">
                    {edu.details}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
