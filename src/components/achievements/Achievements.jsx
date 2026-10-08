import React from 'react';
import { Trophy, Star } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function Achievements() {
  const { achievements } = portfolioData;

  return (
    <section id="achievements" className="py-20 border-b border-gray-200/80 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 mb-3">
            <Trophy className="w-3.5 h-3.5" />
            <span>Merit & Recognition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Key Achievements
          </h2>
          <p className="text-gray-600 mt-2 text-base max-w-2xl">
            Selected academic honors and competitive technical project recognitions.
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((item, idx) => (
            <div
              key={item.title}
              className="bg-gray-50/70 border border-gray-200 rounded-xl p-6 sm:p-7 flex items-start gap-4 shadow-subtle"
            >
              <div className="p-2.5 rounded-lg bg-white border border-gray-200 text-blue-600 shadow-subtle flex-shrink-0">
                {idx === 0 ? <Star className="w-5 h-5" /> : <Trophy className="w-5 h-5" />}
              </div>

              <div className="space-y-1.5">
                <h3 className="text-base sm:text-lg font-bold text-gray-900 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
