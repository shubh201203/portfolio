import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, ArrowRight, MessageSquare, ArrowUpRight } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../common/Icons';
import { portfolioData } from '../../data/portfolioData';

export default function Contact() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 border-b border-gray-200/80 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Section Header */}
        <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 mb-4">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Get In Touch</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
          Let's talk about data, analytics and opportunities.
        </h2>

        <p className="text-gray-600 mt-4 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          I am actively seeking Data Analyst, BI Analyst, and Product Analytics internship opportunities where I can apply structured dimensional modeling, advanced SQL, and Power BI reporting.
        </p>

        {/* Primary Action Button */}
        <div className="pt-8 pb-12 flex justify-center">
          <a
            href={`mailto:${personal.email}?subject=Data%20Analyst%20Role%20Inquiry%20-%20Shubh%20Sharma`}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg text-base font-semibold bg-gray-950 text-white hover:bg-blue-600 transition-colors shadow-subtle active:scale-[0.98]"
          >
            <span>Get in Touch →</span>
          </a>
        </div>

        {/* Recruiter Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
          
          {/* Email Card */}
          <div className="bg-gray-50/80 border border-gray-200 rounded-xl p-4 sm:p-5 shadow-subtle flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-gray-500 mb-2">
                <span className="text-xs font-mono uppercase">Email</span>
                <Mail className="w-4 h-4 text-blue-600" />
              </div>
              <a
                href={`mailto:${personal.email}`}
                className="text-[11.5px] sm:text-xs font-mono font-medium text-gray-900 hover:text-blue-600 transition-colors block whitespace-nowrap overflow-hidden text-ellipsis"
                title={personal.email}
              >
                {personal.email}
              </a>
            </div>
            <button
              onClick={handleCopyEmail}
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-blue-600 hover:text-blue-800 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied to clipboard' : 'Copy address'}</span>
            </button>
          </div>

          {/* Phone Card */}
          <div className="bg-gray-50/80 border border-gray-200 rounded-xl p-5 shadow-subtle flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-gray-500 mb-2">
                <span className="text-xs font-mono uppercase">Phone</span>
                <Phone className="w-4 h-4 text-blue-600" />
              </div>
              <div className="text-sm font-mono font-medium text-gray-900">
                +91 {personal.phone}
              </div>
            </div>
            <a
              href={`tel:${personal.phone}`}
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-blue-600 hover:text-blue-800 transition-colors"
            >
              <span>Call directly</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* LinkedIn Card */}
          <div className="bg-gray-50/80 border border-gray-200 rounded-xl p-5 shadow-subtle flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-gray-500 mb-2">
                <span className="text-xs font-mono uppercase">LinkedIn</span>
                <LinkedInIcon className="w-4 h-4 text-blue-600" />
              </div>
              <div className="text-xs font-mono text-gray-900">
                shubh-sharma
              </div>
            </div>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-blue-600 hover:text-blue-800 transition-colors"
            >
              <span>View profile</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* GitHub Card */}
          <div className="bg-gray-50/80 border border-gray-200 rounded-xl p-5 shadow-subtle flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-gray-500 mb-2">
                <span className="text-xs font-mono uppercase">GitHub</span>
                <GitHubIcon className="w-4 h-4 text-blue-600" />
              </div>
              <div className="text-xs font-mono text-gray-900">
                shubh201203
              </div>
            </div>
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-blue-600 hover:text-blue-800 transition-colors"
            >
              <span>View code repositories</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
