import React, { useState } from 'react';
import { 
  Database
} from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import NovaCartFeatured from './NovaCartFeatured';
import ProjectCard from './ProjectCard';
import DataPipelineVisual from '../common/DataPipelineVisual';
import InteractiveSqlLab from '../common/InteractiveSqlLab';

export default function ProjectsSection({ onOpenCaseStudy }) {
  const { projects } = portfolioData;
  const [filter, setFilter] = useState('all');

  const productAnalytics = projects.find((p) => p.id === 'product-analytics');
  const disasterReporting = projects.find((p) => p.id === 'disaster-reporting');

  // Filter logic
  const getFilteredAdditionalProjects = () => {
    const list = projects.filter(
      (p) => p.id !== 'novacart'
    );

    if (filter === 'analytics') {
      return list.filter((p) => p.id === 'product-analytics');
    }
    if (filter === 'ai') {
      return list.filter((p) => p.id === 'smart-resume' || p.id === 'wardrobewhiz' || p.id === 'emotion-music' || p.id === 'mental-health-detection');
    }
    if (filter === 'engineering') {
      return list.filter((p) => p.id === 'disaster-reporting' || p.id === 'shortx' || p.id === 'todo');
    }
    return list.filter((p) => p.id !== 'product-analytics' && p.id !== 'disaster-reporting');
  };

  const filteredList = getFilteredAdditionalProjects();

  return (
    <section id="projects" className="py-24 border-b border-gray-200/80 bg-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 mb-3">
              <Database className="w-3.5 h-3.5" />
              <span>Interactive Analytics Showcase</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-950">
              Featured Case Studies & Projects
            </h2>
            <p className="text-gray-600 mt-2 text-base max-w-2xl">
              End-to-end data systems spanning dimensional warehouses, deterministic ETL pipelines, DAX measure modeling, and full-stack cloud deployments.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono text-gray-500 bg-gray-50 border border-gray-200 px-3 py-1.5 rounded-lg shrink-0">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>All Data Models Reconciled</span>
          </div>
        </div>

        {/* 1. Flagship Project: NovaCart (Visually dominant centerpiece) */}
        <div className="mb-16">
          <NovaCartFeatured onOpenCaseStudy={onOpenCaseStudy} />
        </div>

        {/* Technical Showcase 1: Interactive Data Pipeline Architecture */}
        <div className="mb-16">
          <DataPipelineVisual />
        </div>

        {/* 2 & 3. Major Analytics & Capstone Projects Grid */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-xl font-bold text-gray-950 tracking-tight">
                Core Analytical & System Implementations
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">
                Conversion funnel modeling, user behavioral cohorts, and multi-role crisis coordination
              </p>
            </div>
            <span className="text-xs font-mono text-gray-400">Featured Capstones</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {productAnalytics && (
              <ProjectCard
                project={productAnalytics}
                onOpenCaseStudy={onOpenCaseStudy}
              />
            )}
            {disasterReporting && (
              <ProjectCard
                project={disasterReporting}
                onOpenCaseStudy={onOpenCaseStudy}
              />
            )}
          </div>
        </div>

        {/* Technical Showcase 2: Interactive SQL Query Laboratory */}
        <div className="mb-16">
          <InteractiveSqlLab />
        </div>

        {/* 4 & 5. Additional Engineering & Applied AI Projects */}
        <div className="pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <h3 className="text-xl font-bold text-gray-950 tracking-tight">
                Supporting Engineering & Applied AI Projects
              </h3>
              <p className="text-xs text-gray-500 mt-0.5">
                Applied AI heuristics, full-stack systems, algorithmic shorteners, and persistent local storage
              </p>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-gray-50 border border-gray-200 rounded-lg text-xs font-mono">
              <button
                onClick={() => setFilter('all')}
                className={`px-3 py-1 rounded-md transition-colors ${
                  filter === 'all'
                    ? 'bg-gray-950 text-white shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                All Secondary ({projects.length - 3})
              </button>
              <button
                onClick={() => setFilter('ai')}
                className={`px-3 py-1 rounded-md transition-colors ${
                  filter === 'ai'
                    ? 'bg-purple-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                Applied AI
              </button>
              <button
                onClick={() => setFilter('engineering')}
                className={`px-3 py-1 rounded-md transition-colors ${
                  filter === 'engineering'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-gray-600 hover:text-indigo-600'
                }`}
              >
                Full-Stack
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredList.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenCaseStudy={onOpenCaseStudy}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
