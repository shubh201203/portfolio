import React, { useState } from 'react';
import { 
  Database, 
  BarChart3, 
  LineChart, 
  Cpu, 
  Code2, 
  Layers, 
  Sparkles, 
  Terminal,
  Activity
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;
  const [activeTab, setActiveTab] = useState('all');

  const getCategoryIcon = (category) => {
    switch (category) {
      case 'Data Analytics':
        return <LineChart className="w-5 h-5 text-blue-600" />;
      case 'Databases & SQL':
        return <Database className="w-5 h-5 text-cyan-600" />;
      case 'Business Intelligence':
        return <BarChart3 className="w-5 h-5 text-emerald-600" />;
      case 'Engineering':
        return <Code2 className="w-5 h-5 text-indigo-600" />;
      case 'AI / Machine Learning':
        return <Cpu className="w-5 h-5 text-purple-600" />;
      default:
        return <Layers className="w-5 h-5 text-blue-600" />;
    }
  };

  const getCategoryBadge = (category) => {
    switch (category) {
      case 'Data Analytics':
        return { label: 'Statistical Analysis', color: 'bg-blue-50 text-blue-700 border-blue-200' };
      case 'Databases & SQL':
        return { label: 'Warehouse & Star Schema', color: 'bg-cyan-50 text-cyan-700 border-cyan-200' };
      case 'Business Intelligence':
        return { label: 'DAX & Reporting Suite', color: 'bg-emerald-50 text-emerald-700 border-emerald-200' };
      case 'Engineering':
        return { label: 'Full-Stack & APIs', color: 'bg-indigo-50 text-indigo-700 border-indigo-200' };
      case 'AI / Machine Learning':
        return { label: 'Applied AI & Models', color: 'bg-purple-50 text-purple-700 border-purple-200' };
      default:
        return { label: 'Technical Domain', color: 'bg-gray-50 text-gray-700 border-gray-200' };
    }
  };

  const getApplicationReference = (category) => {
    switch (category) {
      case 'Data Analytics':
        return 'Applied in NovaCart deterministic data cleaning, quarantine logging, and exploratory distribution profiling.';
      case 'Databases & SQL':
        return 'Demonstrated via 8-table star schema, grain-safe CTEs, public.vw_cohort_retention, and window aggregation.';
      case 'Business Intelligence':
        return 'Implemented across NovaCart 6-page Power BI dashboard suite with 30+ DAX measures and synchronized slicers.';
      case 'Engineering':
        return 'Powering production full-stack apps with React 19, FastAPI on Render, Neon PostgreSQL, and RESTful endpoints.';
      case 'AI / Machine Learning':
        return 'Integrated in SmartResume deterministic scoring heuristics and WardrobeWhiz computer vision pipelines.';
      default:
        return '';
    }
  };

  const filteredSkills = activeTab === 'all' 
    ? skills 
    : skills.filter(s => s.category.toLowerCase().includes(activeTab.toLowerCase()));

  return (
    <section id="skills" className="py-24 border-b border-gray-200/80 bg-[#F7F7F3] relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 mb-3">
              <Terminal className="w-3.5 h-3.5" />
              <span>Technical Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-950">
              Technical Matrix & Stack
            </h2>
            <p className="text-gray-600 mt-2 text-base max-w-2xl">
              Organized across 5 rigorous analytical and engineering disciplines, directly connected to end-to-end production implementations.
            </p>
          </div>

          {/* Interactive Discipline Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-white border border-gray-200 rounded-lg shadow-subtle text-xs font-mono">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-md transition-all font-medium ${
                activeTab === 'all'
                  ? 'bg-gray-950 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              All (5)
            </button>
            <button
              onClick={() => setActiveTab('Data Analytics')}
              className={`px-3 py-1.5 rounded-md transition-all font-medium ${
                activeTab === 'Data Analytics'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
              }`}
            >
              Data Analytics
            </button>
            <button
              onClick={() => setActiveTab('Databases & SQL')}
              className={`px-3 py-1.5 rounded-md transition-all font-medium ${
                activeTab === 'Databases & SQL'
                  ? 'bg-cyan-700 text-white shadow-sm'
                  : 'text-gray-600 hover:text-cyan-700 hover:bg-cyan-50'
              }`}
            >
              Databases & SQL
            </button>
            <button
              onClick={() => setActiveTab('Business Intelligence')}
              className={`px-3 py-1.5 rounded-md transition-all font-medium ${
                activeTab === 'Business Intelligence'
                  ? 'bg-emerald-600 text-white shadow-sm'
                  : 'text-gray-600 hover:text-emerald-600 hover:bg-emerald-50'
              }`}
            >
              Business Intelligence
            </button>
            <button
              onClick={() => setActiveTab('Engineering')}
              className={`px-3 py-1.5 rounded-md transition-all font-medium ${
                activeTab === 'Engineering'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-gray-600 hover:text-indigo-600 hover:bg-indigo-50'
              }`}
            >
              Engineering
            </button>
            <button
              onClick={() => setActiveTab('AI / Machine Learning')}
              className={`px-3 py-1.5 rounded-md transition-all font-medium ${
                activeTab === 'AI / Machine Learning'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-gray-600 hover:text-purple-600 hover:bg-purple-50'
              }`}
            >
              AI / ML
            </button>
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((categoryGroup) => {
            const badge = getCategoryBadge(categoryGroup.category);
            const isPrimary = categoryGroup.category === 'Databases & SQL' || categoryGroup.category === 'Business Intelligence' || categoryGroup.category === 'Data Analytics';

            return (
              <div
                key={categoryGroup.category}
                className={`bg-white border rounded-xl p-6 shadow-card hover:shadow-elevated transition-all flex flex-col justify-between ${
                  isPrimary ? 'border-gray-300 ring-1 ring-black/5' : 'border-gray-200'
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-3 pb-3 border-b border-gray-100">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-gray-50 border border-gray-100 shadow-subtle">
                        {getCategoryIcon(categoryGroup.category)}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-gray-900 tracking-tight">
                          {categoryGroup.category}
                        </h3>
                        <span className={`inline-block text-[10px] font-mono font-medium px-2 py-0.5 rounded border mt-0.5 ${badge.color}`}>
                          {badge.label}
                        </span>
                      </div>
                    </div>

                    <span className="text-[11px] font-mono text-gray-600 bg-gray-100 px-2 py-0.5 rounded">
                      {categoryGroup.skills.length} tools
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-gray-600 leading-relaxed mt-3 mb-4">
                    {categoryGroup.description}
                  </p>

                  {/* Skill Badges */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {categoryGroup.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded text-xs font-mono font-medium bg-gray-50 text-gray-800 border border-gray-200 hover:border-blue-300 hover:bg-blue-50/50 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Practical Implementation Note */}
                <div className="pt-3 border-t border-gray-100 flex items-start gap-2 text-[11px] text-gray-500 bg-gray-50/60 p-2.5 rounded-lg border border-gray-100">
                  <Activity className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span className="leading-snug">{getApplicationReference(categoryGroup.category)}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Analytical Workflow Architecture Callout */}
        <div className="mt-12 bg-white border border-gray-200 rounded-xl p-6 shadow-subtle">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-blue-600 font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Analytical Rigor & Verification Standard</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">
                All metrics, SQL queries, and DAX measures follow deterministic testing standards: grain-safe joins, zero cross-grain double counting, explicit return handling, and 100% reconciled KPI definitions.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <div className="text-center px-4 py-2 rounded-lg bg-gray-50 border border-gray-200">
                <div className="text-base font-extrabold font-mono text-gray-900">28/28</div>
                <div className="text-[10px] font-mono text-gray-600">ETL Pytests</div>
              </div>
              <div className="text-center px-4 py-2 rounded-lg bg-gray-50 border border-gray-200">
                <div className="text-base font-extrabold font-mono text-blue-600">30+</div>
                <div className="text-[10px] font-mono text-gray-600">DAX Measures</div>
              </div>
              <div className="text-center px-4 py-2 rounded-lg bg-gray-50 border border-gray-200">
                <div className="text-base font-extrabold font-mono text-emerald-600">8 Tables</div>
                <div className="text-[10px] font-mono text-gray-600">Star Schema DW</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
