import React from 'react';
import { Mail, ArrowUp } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './Icons';
import { portfolioData } from '../../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-gray-200 bg-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-gray-100 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="text-base font-extrabold text-gray-950 tracking-tight">{personal.name}</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 text-blue-700 border border-blue-200">
                Interactive Analytics Lab
              </span>
            </div>
            <div className="text-xs text-gray-500 mt-1 font-mono">{personal.roleTitle}</div>
          </div>

          <div className="flex items-center gap-6">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-gray-600 hover:text-gray-950 transition-colors"
            >
              <GitHubIcon className="w-4 h-4 text-gray-700" />
              <span>GitHub</span>
            </a>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              <LinkedInIcon className="w-4 h-4 text-gray-700" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="flex items-center gap-1.5 text-xs font-medium text-gray-600 hover:text-blue-600 transition-colors"
            >
              <Mail className="w-4 h-4 text-gray-700" />
              <span>Email</span>
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-gray-200 text-xs font-mono text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
            aria-label="Scroll back to top"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 font-mono text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} {personal.name} · All models, SQL CTEs & DAX measures empirically verified.
          </div>
          <div>
            Built with React 19, Tailwind CSS & Vite
          </div>
        </div>
      </div>
    </footer>
  );
}
