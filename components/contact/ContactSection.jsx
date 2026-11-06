'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Copy, 
  Check, 
  ArrowUpRight, 
  FileText, 
  MapPin, 
  Sparkles,
  ArrowUp,
  FolderGit2
} from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '@/components/common/Icons';
import { asset } from '@/lib/utils';
import { portfolioData } from '@/data/portfolioData';

export default function ContactSection() {
  const { personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    }
  };

  const scrollTo = (id) => {
    if (typeof window !== 'undefined' && window.__lenis) {
      window.__lenis.scrollTo(`#${id}`, { duration: 1.2 });
      return;
    }
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToTop = () => {
    if (typeof window !== 'undefined' && window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1.2 });
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="contact" className="py-16 sm:py-20 pb-10 bg-[#0A0A0B] text-[#F5F5F4] border-b border-white/10 relative overflow-hidden">
      
      {/* Background Subtle Data Particle Field / Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[340px] bg-[#3B82F6]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[250px] bg-[#14B8A6]/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Decorative Subtle Grid Lines Behind CTA */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Exact Required Headline & Subheading */}
        <div className="pb-6 border-b border-white/10 mb-8 sm:mb-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-xs font-mono uppercase tracking-[0.24em] text-[#3B82F6] font-bold mb-4"
          >
            <span>06 // CONTACT</span>
            <span className="text-white/20">•</span>
            <span>GET IN TOUCH</span>
          </motion.div>

          <div className="space-y-4 max-w-4xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-7xl font-headline font-extrabold tracking-tight text-[#F5F5F4] leading-[1.02]"
            >
              Have a business problem<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-[#3B82F6]">
                that needs data?
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl sm:text-2xl font-headline font-bold text-[#14B8A6] pt-1"
            >
              Let&apos;s turn it into a decision.
            </motion.p>
          </div>
        </div>

        {/* 4 Interactive CTA Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          
          {/* Button 1: Email Me (With Copy Interaction & "Copied" Confirmation) */}
          <button
            onClick={handleCopyEmail}
            className="p-6 rounded-3xl bg-[#0D0E12] border border-white/10 hover:border-[#3B82F6]/50 transition-all duration-200 flex flex-col justify-between space-y-4 text-left group hover:-translate-y-1 shadow-xl cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-2xl bg-[#3B82F6]/20 text-[#3B82F6] group-hover:scale-110 transition-transform">
                <Mail className="w-5 h-5" />
              </div>
              <span className="text-xs font-mono text-slate-500 flex items-center gap-1 group-hover:text-white">
                {copied ? (
                  <span className="text-[#14B8A6] font-bold flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" /> Copied!
                  </span>
                ) : (
                  <span className="flex items-center gap-1">
                    <Copy className="w-3.5 h-3.5" /> Copy
                  </span>
                )}
              </span>
            </div>
            <div>
              <div className="text-base font-bold text-white group-hover:text-[#3B82F6] transition-colors">
                Email Me
              </div>
              <div className="text-xs font-mono text-slate-400 truncate mt-1">
                {personal.email}
              </div>
            </div>
          </button>

          {/* Button 2: Connect on LinkedIn */}
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 rounded-3xl bg-[#0D0E12] border border-white/10 hover:border-[#3B82F6]/50 transition-all duration-200 flex flex-col justify-between space-y-4 text-left group hover:-translate-y-1 shadow-xl cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-2xl bg-blue-500/20 text-blue-400 group-hover:scale-110 transition-transform">
                <LinkedInIcon className="w-5 h-5" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
            <div>
              <div className="text-base font-bold text-white group-hover:text-[#3B82F6] transition-colors">
                Connect on LinkedIn
              </div>
              <div className="text-xs font-mono text-slate-400 mt-1">
                in/shubh-sharma-2067981b5 ↗
              </div>
            </div>
          </a>

          {/* Button 3: View Resume */}
          <a
            href={asset('/resume.pdf')}
            download="Shubh_Sharma_Data_Analyst_Resume.pdf"
            className="p-6 rounded-3xl bg-[#0D0E12] border border-white/10 hover:border-[#14B8A6]/50 transition-all duration-200 flex flex-col justify-between space-y-4 text-left group hover:-translate-y-1 shadow-xl cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-2xl bg-[#14B8A6]/20 text-[#14B8A6] group-hover:scale-110 transition-transform">
                <FileText className="w-5 h-5" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
            <div>
              <div className="text-base font-bold text-white group-hover:text-[#14B8A6] transition-colors">
                View Resume
              </div>
              <div className="text-xs font-mono text-slate-400 mt-1">
                Official PDF Download ↗
              </div>
            </div>
          </a>

          {/* Button 4: Explore Projects */}
          <button
            onClick={() => scrollTo('work')}
            className="p-6 rounded-3xl bg-[#0D0E12] border border-white/10 hover:border-white/30 transition-all duration-200 flex flex-col justify-between space-y-4 text-left group hover:-translate-y-1 shadow-xl cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <div className="p-3 rounded-2xl bg-white/10 text-white group-hover:scale-110 transition-transform">
                <FolderGit2 className="w-5 h-5" />
              </div>
              <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
            <div>
              <div className="text-base font-bold text-white group-hover:text-[#3B82F6] transition-colors">
                Explore Projects
              </div>
              <div className="text-xs font-mono text-slate-400 mt-1">
                Selected Work &amp; Schemas ↓
              </div>
            </div>
          </button>

        </div>

        {/* Bottom Editorial Colophon & Direct Links */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 font-mono text-xs text-slate-500">
          <div className="flex flex-wrap items-center gap-3">
            <span className="text-slate-300 font-bold">SHUBH SHARMA</span>
            <span>•</span>
            <span>DATA ANALYST</span>
            <span>•</span>
            <div className="inline-flex items-center gap-1.5 text-slate-400">
              <MapPin className="w-3.5 h-3.5 text-[#3B82F6]" />
              <span>Amaravati, AP, India</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/shubh201203"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              LinkedIn
            </a>
            <span>•</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
