import React from 'react';
import { Mail } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from './Icons';
import { portfolioData } from '../../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  return (
    <footer className="border-t border-gray-200 bg-white py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <div>
          <div className="text-sm font-bold text-gray-900 tracking-tight">{personal.name}</div>
          <div className="text-xs text-gray-500 mt-0.5">{personal.roleTitle}</div>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-gray-600 hover:text-gray-900 transition-colors"
          >
            <GitHubIcon className="w-4 h-4 text-gray-700" />
            <span>GitHub</span>
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs text-gray-600 hover:text-blue-600 transition-colors"
          >
            <LinkedInIcon className="w-4 h-4 text-gray-700" />
            <span>LinkedIn</span>
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="flex items-center gap-1.5 text-xs text-gray-600 hover:text-blue-600 transition-colors"
          >
            <Mail className="w-4 h-4 text-gray-700" />
            <span>Email</span>
          </a>
        </div>

        <div className="text-xs text-gray-400 font-mono">
          © 2026 {personal.name}
        </div>
      </div>
    </footer>
  );
}
