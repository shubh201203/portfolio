import React, { useState } from 'react';
import { 
  Mail, 
  Copy, 
  Check, 
  ArrowRight, 
  ArrowUpRight, 
  FileText, 
  ArrowUp,
  MapPin,
  Clock,
  Sparkles
} from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '../common/Icons';
import { portfolioData } from '../../data/portfolioData';

export default function ContactEditorial() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="pt-24 sm:pt-32 pb-12 bg-[#F6F4ED] text-[#111215] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="pb-8 border-b border-[#111215]/10 mb-14 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-[#111215]/60 font-bold mb-3">
            <span className="text-[#111215]">05 / CONTACT</span>
            <span>—</span>
            <span>GET IN TOUCH</span>
          </div>

          <div className="space-y-4 max-w-4xl">
            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-headline font-extrabold tracking-tight text-[#111215] leading-[0.98]">
              LET'S MAKE SOMETHING<br />
              <span className="text-[#111215] underline decoration-[#D8F243] decoration-[6px] sm:decoration-[10px] underline-offset-4">
                MEANINGFUL.
              </span>
            </h2>

            <p className="text-base sm:text-xl font-display font-medium text-[#111215]/80 pt-2">
              Have an interesting problem, an opportunity, or an idea worth exploring? Let's talk.
            </p>
          </div>
        </div>

        {/* Closing Interaction Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-stretch">
          
          {/* Primary Guaranteed Single-Line Email Touchpoint Card */}
          <div className="lg:col-span-7 rounded-3xl bg-white border border-[#111215]/15 p-6 sm:p-10 shadow-editorial flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between text-xs font-mono text-[#111215]/60">
                <span className="font-bold uppercase tracking-wider text-[#111215]">DIRECT ELECTRONIC MAIL</span>
                <Mail className="w-4 h-4 text-[#111215]" />
              </div>

              {/* Single-Line Email Guaranteed Display */}
              <div className="pt-2 overflow-hidden">
                <a
                  href={`mailto:${personal.email}`}
                  className="text-base sm:text-xl md:text-2xl font-mono font-bold text-[#111215] hover:text-black transition-colors inline-block whitespace-nowrap tracking-tight truncate max-w-full select-all"
                  title={personal.email}
                >
                  {personal.email}
                </a>
              </div>

              <p className="text-xs sm:text-sm text-[#111215]/70 font-normal">
                Always open for Data Analyst, Business Intelligence, Analytics Engineering, and Product Analytics internships for Summer 2027. Typical response window: within 24 hours.
              </p>
            </div>

            <div className="pt-6 border-t border-[#111215]/10 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F6F4ED] hover:bg-stone-100 border border-[#111215]/15 font-bold text-[#111215] transition-all cursor-pointer shadow-subtle active:scale-[0.98]"
              >
                {copied ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5 text-[#111215]" />}
                <span>{copied ? 'Copied to Clipboard!' : 'Copy Address'}</span>
              </button>

              <a
                href={`mailto:${personal.email}?subject=Data%20Analyst%20Role%20Inquiry%20-%20Shubh%20Sharma`}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#111215] text-[#F6F4ED] hover:bg-black font-bold transition-all shadow-subtle"
              >
                <span>Compose Email</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#D8F243]" />
              </a>
            </div>
          </div>

          {/* Social Profiles & Resume Strip */}
          <div className="lg:col-span-5 rounded-3xl bg-[#111215] text-[#F6F4ED] border border-[#111215] p-6 sm:p-10 shadow-editorial flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="text-xs font-mono uppercase tracking-wider text-[#D8F243] font-bold">
                CONNECT &amp; VERIFY
              </div>
              <p className="text-sm text-[#F6F4ED]/80 leading-relaxed font-normal">
                Review codebases, explore analytical schemas, or download my official curriculum vitae.
              </p>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 transition-all text-[#F6F4ED] font-semibold"
              >
                <div className="flex items-center gap-2.5">
                  <LinkedInIcon className="w-4 h-4 text-blue-400" />
                  <span>LinkedIn Profile</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#F6F4ED]/60" />
              </a>

              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 transition-all text-[#F6F4ED] font-semibold"
              >
                <div className="flex items-center gap-2.5">
                  <GitHubIcon className="w-4 h-4 text-white" />
                  <span>GitHub Repositories</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#F6F4ED]/60" />
              </a>

              <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-2xl bg-[#D8F243] hover:bg-[#CCFF00] text-[#111215] font-bold transition-all shadow-md"
              >
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4 text-[#111215]" />
                  <span>Download Resume PDF</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#111215]" />
              </a>
            </div>
          </div>

        </div>

        {/* Editorial Colophon & Bottom Footer */}
        <div className="pt-8 border-t border-[#111215]/10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-[#111215]/60">
          <div className="space-y-1 text-center sm:text-left">
            <div>
              Designed &amp; Engineered by <strong className="text-[#111215]">Shubh Sharma</strong>.
            </div>
            <div className="text-[11px] text-[#111215]/40">
              Set in Space Grotesk, Syne &amp; JetBrains Mono • Deployed on GitHub Pages
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white hover:bg-stone-50 border border-[#111215]/15 text-[#111215] font-bold shadow-subtle transition-all cursor-pointer active:scale-95"
          >
            <span>Return to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#111215]" />
          </button>
        </div>

      </div>
    </section>
  );
}
