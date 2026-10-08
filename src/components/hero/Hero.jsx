import React from 'react';
import { ArrowRight, FileText, Mail, ArrowUpRight } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../common/Icons';
import { portfolioData } from '../../data/portfolioData';
import HeroAnalyticsVisual from './HeroAnalyticsVisual';

export default function Hero({ onExploreNovaCart }) {
  const { personal } = portfolioData;

  const techStack = [
    'SQL',
    'PostgreSQL',
    'Power BI / DAX',
    'Python / Pandas',
    'Star Schema',
    'Product Analytics'
  ];

  return (
    <section id="home" className="relative pt-36 pb-24 border-b border-gray-200/70 bg-[#F7F7F3]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Personal Identity Dominant */}
          <div className="lg:col-span-7 text-left space-y-7">
            
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 text-xs font-medium text-gray-600 bg-white px-3 py-1 rounded-full border border-gray-200 shadow-subtle">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span>Available for Data Analyst & BI Internships</span>
            </div>

            {/* Name & Role — High Editorial Contrast */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-950 leading-[1.08]">
                {personal.name}
              </h1>
              <p className="text-lg sm:text-2xl font-bold tracking-tight text-blue-600">
                {personal.roleTitle}
              </p>
            </div>

            {/* Value Proposition Microcopy */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl font-normal">
              {personal.headline}
            </p>

            {/* Core Tech Stack — Editorial Subtle Tags */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded text-xs font-mono text-gray-700 bg-white border border-gray-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onExploreNovaCart}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold bg-gray-950 text-white hover:bg-blue-600 transition-colors shadow-subtle active:scale-[0.98]"
              >
                <span>Explore NovaCart Flagship</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={personal.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-md text-sm font-medium bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 transition-colors shadow-subtle"
              >
                <FileText className="w-4 h-4 text-gray-500" />
                <span>Download Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-gray-400" />
              </a>
            </div>

            {/* Secondary Recruiter Links */}
            <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-gray-500">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-blue-600 transition-colors"
              >
                <LinkedInIcon className="w-4 h-4 text-gray-600" />
                <span>LinkedIn</span>
              </a>
              <span className="text-gray-300">•</span>
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 hover:text-gray-900 transition-colors"
              >
                <GitHubIcon className="w-4 h-4 text-gray-600" />
                <span>GitHub</span>
              </a>
              <span className="text-gray-300">•</span>
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-1.5 hover:text-blue-600 transition-colors font-mono"
              >
                <Mail className="w-4 h-4 text-gray-600" />
                <span>{personal.email}</span>
              </a>
            </div>

          </div>

          {/* Right Column: Supporting Analytics Visual */}
          <div className="lg:col-span-5">
            <HeroAnalyticsVisual />
          </div>

        </div>
      </div>
    </section>
  );
}
