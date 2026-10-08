import React from 'react';
import { Database, BarChart3, LineChart, Layers, Wrench } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;

  const biSkills = skills.find((s) => s.category === 'Data Analytics / BI');
  const pythonSkills = skills.find((s) => s.category === 'Python / Data');
  const conceptSkills = skills.find((s) => s.category === 'Analytics Concepts');
  const devSkills = skills.find((s) => s.category === 'Development / Tools');

  return (
    <section id="skills" className="py-24 border-b border-gray-200/80 bg-[#F7F7F3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 mb-3">
            <Database className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Skills & Core Stack
          </h2>
          <p className="text-gray-600 mt-2 text-base max-w-2xl">
            Prioritized by analytical discipline with dominant focus on SQL querying, star schema data modeling, and business intelligence development.
          </p>
        </div>

        <div className="space-y-8">
          
          {/* 1. DOMINANT CORE DISCIPLINE: Data Analytics & Business Intelligence */}
          {biSkills && (
            <div className="bg-white border-2 border-blue-600/30 rounded-lg p-6 sm:p-8 shadow-subtle">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded bg-blue-600 flex items-center justify-center text-white">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                        {biSkills.category}
                      </h3>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold uppercase bg-blue-600 text-white tracking-wider">
                        Primary Focus
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mt-0.5">
                      Complex SQL querying, star schema dimensional modeling, and interactive Power BI dashboard engineering.
                    </p>
                  </div>
                </div>

                <span className="text-xs font-mono text-gray-400">
                  {biSkills.skills.length} core competencies
                </span>
              </div>

              {/* Large, High-Emphasis Skill Badges */}
              <div className="flex flex-wrap gap-2.5">
                {biSkills.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded text-xs sm:text-sm font-bold bg-blue-50 text-blue-950 border border-blue-200 hover:border-blue-400 transition-colors shadow-subtle"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* 2 & 3. Python & Data + Analytics Concepts (Two balanced columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Python / Data */}
            {pythonSkills && (
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-subtle">
                <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-gray-100">
                  <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-gray-700">
                    <LineChart className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900">{pythonSkills.category}</h3>
                    <div className="text-[11px] font-mono text-gray-400">Exploratory & Statistics</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {pythonSkills.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded text-xs font-semibold bg-gray-50 text-gray-800 border border-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Analytics Concepts */}
            {conceptSkills && (
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-subtle">
                <div className="flex items-center gap-2.5 mb-4 pb-3 border-b border-gray-100">
                  <div className="w-8 h-8 rounded bg-gray-100 flex items-center justify-center text-gray-700">
                    <Layers className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-gray-900">{conceptSkills.category}</h3>
                    <div className="text-[11px] font-mono text-gray-400">Analytical Methodologies</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {conceptSkills.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded text-xs font-semibold bg-gray-50 text-gray-800 border border-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* 4. Development / Tools (Clearly subordinated supporting technical capabilities) */}
          {devSkills && (
            <div className="p-5 rounded-lg bg-gray-100/70 border border-gray-200">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div className="flex items-center gap-2">
                  <Wrench className="w-4 h-4 text-gray-500" />
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-600">
                    Supporting Engineering & Developer Tools
                  </span>
                </div>
                <span className="text-[11px] text-gray-500">
                  Version control, app frameworks & backend services
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {devSkills.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded text-xs font-mono text-gray-600 bg-white border border-gray-200 shadow-subtle"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
