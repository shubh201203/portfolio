import React from 'react';
import { Database } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';
import NovaCartFeatured from './NovaCartFeatured';
import ProjectCard from './ProjectCard';

export default function ProjectsSection({ onOpenCaseStudy }) {
  const { projects } = portfolioData;

  const productAnalytics = projects.find((p) => p.id === 'product-analytics');
  const disasterReporting = projects.find((p) => p.id === 'disaster-reporting');
  const additionalProjects = projects.filter(
    (p) => p.id === 'wardrobewhiz' || p.id === 'shortx' || p.id === 'todo' || p.id === 'emotion-music' || p.id === 'mental-health-detection'
  );

  return (
    <section id="projects" className="py-20 border-b border-gray-200/80 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 mb-3">
            <Database className="w-3.5 h-3.5" />
            <span>Portfolio Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Featured Analytics Work
          </h2>
          <p className="text-gray-600 mt-2 text-base max-w-2xl">
            Real analytics projects designed with dimensional modeling, SQL analysis pipelines, conversion funnels, and business intelligence architecture.
          </p>
        </div>

        {/* 1. Flagship Project: NovaCart (Visually dominant centerpiece) */}
        <div className="mb-12">
          <NovaCartFeatured onOpenCaseStudy={onOpenCaseStudy} />
        </div>

        {/* 2 & 3. Major Analytics & Capstone Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
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

        {/* 4 & 5. Additional Engineering Projects (Subordinated) */}
        <div className="pt-6 border-t border-gray-100">
          <div className="flex items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 tracking-tight">
                Additional Engineering Projects
              </h3>
              <p className="text-xs text-gray-500">
                Full-stack web application development and computer vision pipelines
              </p>
            </div>
            <span className="text-xs font-mono text-gray-400">
              Supporting Work
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalProjects.map((project) => (
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
