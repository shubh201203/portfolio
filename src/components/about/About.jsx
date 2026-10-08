import React from 'react';
import { BookOpen, GraduationCap } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-24 border-b border-gray-200/80 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-mono uppercase tracking-wider text-blue-600 font-semibold mb-2">
            Background & Approach
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-950">
            About Me
          </h2>
          <p className="text-gray-600 mt-2 text-base max-w-2xl">
            Passionate about understanding business dynamics through structured data modeling, SQL analytics, and interactive dashboards.
          </p>
        </div>

        {/* Narrative & Education Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          
          {/* Main Story Narrative — Clean, open editorial typography without boxed containers */}
          <div className="lg:col-span-7 space-y-5 text-gray-700 text-base leading-relaxed">
            <p>
              I am a data analyst and computer science undergraduate who enjoys solving business problems with data. My academic foundation combines core computer science at <strong className="text-gray-950 font-semibold">VIT-AP University</strong> with specialized coursework in data science and management from the <strong className="text-gray-950 font-semibold">Indian Institute of Technology Madras</strong>.
            </p>
            <p>
              I focus on the full analytics cycle: starting with messy operational records, cleaning and validating datasets with Python, designing star schemas in PostgreSQL, and writing advanced SQL queries to analyze revenue trajectory, customer behavior, and product performance.
            </p>
            <p>
              On the reporting side, I use Power BI and DAX to create intuitive dashboards that communicate trends clearly to stakeholders. Whether examining cohort retention in food delivery apps or modeling dimensional retail sales in NovaCart, my goal is to provide clear, reliable numbers that support sound business decisions.
            </p>
          </div>

          {/* Academic & Approach Column — Clean dividers and typography */}
          <div className="lg:col-span-5 space-y-8 pt-1">
            
            {/* Education Highlights */}
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold mb-3">
                Education
              </div>
              <div className="space-y-4">
                <div className="border-l-2 border-gray-300 pl-4 space-y-0.5">
                  <div className="text-sm font-bold text-gray-950">VIT-AP University</div>
                  <div className="text-xs text-gray-600">B.Tech in Computer Science and Engineering (Core)</div>
                  <div className="text-[11px] font-mono text-gray-400">2023–2027</div>
                </div>

                <div className="border-l-2 border-blue-600 pl-4 space-y-0.5">
                  <div className="text-sm font-bold text-gray-950">Indian Institute of Technology Madras</div>
                  <div className="text-xs text-gray-600">BS Degree in Data Science and Management</div>
                  <div className="text-[11px] font-mono text-emerald-700 font-medium">Foundational Level — Pursuing</div>
                </div>
              </div>
            </div>

            {/* How I Approach Data */}
            <div className="pt-4 border-t border-gray-100">
              <div className="text-xs font-mono uppercase tracking-wider text-gray-400 font-semibold mb-3">
                How I Approach Data Problems
              </div>
              <ul className="space-y-2.5 text-xs text-gray-700 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Understand the business question first:</strong> Clarify the core KPI and what decision the analysis needs to support.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Design clean data schemas:</strong> Build reliable fact and dimension tables to make querying fast and straightforward.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 font-bold">•</span>
                  <span><strong>Validate before reporting:</strong> Ensure SQL aggregations and DAX measures reconcile accurately before visualizing.</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
