import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Copy, 
  Check, 
  ArrowRight, 
  FileText, 
  ExternalLink, 
  ArrowUp, 
  Terminal
} from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../common/Icons';
import { portfolioData } from '../../data/portfolioData';

export default function ContactEditorial() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-28 bg-[#060913] text-white relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 lab-grid opacity-30 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800/60">
            <Terminal className="w-3.5 h-3.5" />
            <span>Collaboration &amp; Opportunities</span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08]">
            LET'S MAKE DATA <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-white bg-clip-text text-transparent">MEAN SOMETHING.</span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-normal">
            I am actively seeking <strong className="text-white font-semibold">Data Analyst, BI Analyst, and Product Analytics</strong> internship opportunities. Whether discussing dimensional modeling, DAX measures, or summer roles, I’d love to connect.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
            <a
              href={`mailto:${personal.email}?subject=Data%20Analyst%20Role%20Inquiry%20-%20Shubh%20Sharma`}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold bg-blue-600 text-white hover:bg-blue-500 shadow-glow-blue transition-all active:scale-[0.98]"
            >
              <Mail className="w-4 h-4" />
              <span>Send Email Directly</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-medium bg-white/10 hover:bg-white/15 text-white border border-white/15 transition-all shadow-subtle"
            >
              <FileText className="w-4 h-4 text-cyan-400" />
              <span>Download Official Resume</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Contact Cards Grid (Generous width ensuring single-line email) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-16">
          
          {/* Email Card (Single line guaranteed) */}
          <div className="rounded-2xl border border-white/10 bg-[#0D1424] p-6 sm:p-7 shadow-2xl hover:border-blue-400/50 transition-all flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between text-slate-400 mb-2">
                <span className="text-xs font-mono uppercase tracking-wider font-semibold text-cyan-400">
                  Primary Email
                </span>
                <Mail className="w-4 h-4 text-cyan-400" />
              </div>

              <div className="mt-2">
                <a
                  href={`mailto:${personal.email}`}
                  className="text-sm sm:text-base lg:text-lg font-mono font-bold text-white hover:text-cyan-300 transition-colors inline-block whitespace-nowrap tracking-tight"
                >
                  {personal.email}
                </a>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Typical response time: under 24 hours.
              </p>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied to clipboard!' : 'Copy email address'}</span>
              </button>

              <a
                href={`mailto:${personal.email}`}
                className="text-xs font-mono text-slate-400 hover:text-white transition-colors inline-flex items-center gap-1"
              >
                <span>Compose</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Phone Card */}
          <div className="rounded-2xl border border-white/10 bg-[#0D1424] p-6 sm:p-7 shadow-2xl hover:border-emerald-400/50 transition-all flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between text-slate-400 mb-2">
                <span className="text-xs font-mono uppercase tracking-wider font-semibold text-emerald-400">
                  Direct Telephone
                </span>
                <Phone className="w-4 h-4 text-emerald-400" />
              </div>

              <div className="mt-2">
                <a
                  href={`tel:${personal.phone}`}
                  className="text-base sm:text-lg font-mono font-bold text-white hover:text-emerald-300 transition-colors inline-block"
                >
                  +91 {personal.phone}
                </a>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Available for phone screens and technical recruiter syncs.
              </p>
            </div>

            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <a
                href={`tel:${personal.phone}`}
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                <span>Call directly</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>

              <span className="text-xs font-mono text-slate-400">
                IST (UTC+05:30)
              </span>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="rounded-2xl border border-white/10 bg-[#0D1424] p-6 sm:p-7 shadow-2xl hover:border-blue-400/50 transition-all flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between text-slate-400 mb-2">
                <span className="text-xs font-mono uppercase tracking-wider font-semibold text-blue-400">
                  LinkedIn Professional Profile
                </span>
                <LinkedInIcon className="w-4 h-4 text-blue-400" />
              </div>

              <div className="mt-2 text-base sm:text-lg font-mono font-bold text-white">
                shubh-sharma
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Professional network updates, certifications, and recommendations.
              </p>
            </div>

            <div className="pt-3 border-t border-white/10">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors"
              >
                <span>Open LinkedIn Profile</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* GitHub Codebase Card */}
          <div className="rounded-2xl border border-white/10 bg-[#0D1424] p-6 sm:p-7 shadow-2xl hover:border-white/30 transition-all flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between text-slate-400 mb-2">
                <span className="text-xs font-mono uppercase tracking-wider font-semibold text-slate-300">
                  GitHub Repositories
                </span>
                <GitHubIcon className="w-4 h-4 text-slate-300" />
              </div>

              <div className="mt-2 text-base sm:text-lg font-mono font-bold text-white">
                shubh201203
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Open-source analytics codebases, SQL transformation scripts, and apps.
              </p>
            </div>

            <div className="pt-3 border-t border-white/10">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
              >
                <span>Explore GitHub Repos</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Footer Sub-Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="text-base font-bold text-white">{personal.name}</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-900/60 text-cyan-300 border border-blue-700/60">
                The Data Experience
              </span>
            </div>
            <div className="text-xs text-slate-400 mt-0.5 font-mono">
              © {new Date().getFullYear()} Shubh Sharma · All models, SQL CTEs &amp; DAX measures empirically verified.
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-white/30 text-xs font-mono text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
