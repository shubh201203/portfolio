import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Copy, 
  Check, 
  ArrowRight, 
  MessageSquare, 
  FileText,
  ExternalLink
} from 'lucide-react';
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
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-blue-700 bg-blue-50 px-2.5 py-1 rounded border border-blue-200 mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>The Collaboration Lab</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-950 tracking-tight leading-tight">
            Let's discuss data analytics & opportunities.
          </h2>

          <p className="text-gray-600 mt-4 text-base sm:text-lg leading-relaxed">
            I am actively seeking <strong className="text-gray-900 font-semibold">Data Analyst, BI Analyst, and Product Analytics</strong> internship roles where I can deliver value with dimensional modeling, complex SQL, and Power BI dashboards.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${personal.email}?subject=Data%20Analyst%20Role%20Inquiry%20-%20Shubh%20Sharma`}
              className="inline-flex items-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold bg-gray-950 text-white hover:bg-blue-600 transition-all shadow-card hover:shadow-elevated active:scale-[0.98]"
            >
              <Mail className="w-4 h-4" />
              <span>Send Email Directly</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-blue-50 text-blue-700 border border-blue-200 hover:bg-blue-100 transition-all shadow-subtle"
            >
              <FileText className="w-4 h-4" />
              <span>View Official Resume</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Recruiter Contact Cards Grid - Designed with Generous Width to Prevent Text Wrap */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
          
          {/* Email Card (Wide, single-line guaranteed) */}
          <div className="bg-gray-50/80 border border-gray-200 rounded-2xl p-6 shadow-subtle hover:bg-white hover:shadow-card transition-all flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between text-gray-500 mb-2">
                <span className="text-xs font-mono uppercase tracking-wider font-semibold text-gray-500">
                  Primary Email
                </span>
                <div className="p-1.5 rounded-lg bg-blue-50 text-blue-600">
                  <Mail className="w-4 h-4" />
                </div>
              </div>

              {/* Single Line Guaranteed with whitespace-nowrap and overflow protection */}
              <div className="mt-2">
                <a
                  href={`mailto:${personal.email}`}
                  className="text-sm sm:text-base font-mono font-medium text-gray-900 hover:text-blue-600 transition-colors inline-block whitespace-nowrap"
                  title={personal.email}
                >
                  {personal.email}
                </a>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Typical response time: under 24 hours.
              </p>
            </div>

            <div className="pt-3 border-t border-gray-200/60 flex items-center justify-between">
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copied ? 'Copied to clipboard!' : 'Copy email address'}</span>
              </button>

              <a
                href={`mailto:${personal.email}`}
                className="text-xs font-mono text-gray-500 hover:text-blue-600 transition-colors inline-flex items-center gap-1"
              >
                <span>Compose</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Phone Card */}
          <div className="bg-gray-50/80 border border-gray-200 rounded-2xl p-6 shadow-subtle hover:bg-white hover:shadow-card transition-all flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between text-gray-500 mb-2">
                <span className="text-xs font-mono uppercase tracking-wider font-semibold text-gray-500">
                  Direct Telephone
                </span>
                <div className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600">
                  <Phone className="w-4 h-4" />
                </div>
              </div>

              <div className="mt-2">
                <a
                  href={`tel:${personal.phone}`}
                  className="text-sm sm:text-base font-mono font-medium text-gray-900 hover:text-blue-600 transition-colors inline-block"
                >
                  +91 {personal.phone}
                </a>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Available for phone interviews and recruiter syncs.
              </p>
            </div>

            <div className="pt-3 border-t border-gray-200/60 flex items-center justify-between">
              <a
                href={`tel:${personal.phone}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 hover:text-emerald-800 transition-colors"
              >
                <span>Call directly</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <span className="text-[11px] font-mono text-gray-400">
                IST (UTC+05:30)
              </span>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="bg-gray-50/80 border border-gray-200 rounded-2xl p-6 shadow-subtle hover:bg-white hover:shadow-card transition-all flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between text-gray-500 mb-2">
                <span className="text-xs font-mono uppercase tracking-wider font-semibold text-gray-500">
                  LinkedIn Profile
                </span>
                <div className="p-1.5 rounded-lg bg-blue-50 text-blue-600">
                  <LinkedInIcon className="w-4 h-4" />
                </div>
              </div>

              <div className="mt-2">
                <span className="text-sm sm:text-base font-mono font-medium text-gray-900">
                  shubh-sharma
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Connect for professional networking and career updates.
              </p>
            </div>

            <div className="pt-3 border-t border-gray-200/60">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
              >
                <span>Open LinkedIn Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* GitHub Card */}
          <div className="bg-gray-50/80 border border-gray-200 rounded-2xl p-6 shadow-subtle hover:bg-white hover:shadow-card transition-all flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between text-gray-500 mb-2">
                <span className="text-xs font-mono uppercase tracking-wider font-semibold text-gray-500">
                  GitHub Codebase
                </span>
                <div className="p-1.5 rounded-lg bg-gray-100 text-gray-800">
                  <GitHubIcon className="w-4 h-4" />
                </div>
              </div>

              <div className="mt-2">
                <span className="text-sm sm:text-base font-mono font-medium text-gray-900">
                  shubh201203
                </span>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Open-source repositories, SQL scripts, and full-stack platforms.
              </p>
            </div>

            <div className="pt-3 border-t border-gray-200/60">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-800 hover:text-blue-600 transition-colors"
              >
                <span>Explore Repositories</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Status Callout Banner */}
        <div className="mt-10 p-5 rounded-2xl bg-blue-50/60 border border-blue-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-emerald-500 animate-ping"></span>
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-blue-900 font-bold">
                Availability Status
              </div>
              <div className="text-xs text-gray-600 mt-0.5">
                Ready for summer & immediate data/BI analytics internship roles.
              </div>
            </div>
          </div>

          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            download="Shubh_Sharma_Resume.pdf"
            className="px-4 py-2 rounded-lg bg-white border border-blue-200 text-xs font-semibold text-blue-700 hover:bg-blue-100 transition-colors shadow-subtle shrink-0 inline-flex items-center gap-1.5"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Download Resume PDF</span>
          </a>
        </div>

      </div>
    </section>
  );
}
