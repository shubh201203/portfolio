'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';
import { asset } from '@/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll > 40);

      const sections = ['home', 'how-it-works', 'work', 'about', 'toolkit', 'credentials', 'contact'];
      const scrollPosition = window.scrollY + 160;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { num: '01', label: 'Pipeline', href: '#how-it-works' },
    { num: '02', label: 'Work', href: '#work' },
    { num: '03', label: 'About', href: '#about' },
    { num: '04', label: 'Toolkit', href: '#toolkit' },
    { num: '05', label: 'Credentials', href: '#credentials' },
    { num: '06', label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#07080B]/90 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl'
          : 'bg-transparent py-5 sm:py-6 border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Lockup */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-3 cursor-pointer"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-white/20 bg-[#121620] shrink-0 ring-1 ring-blue-500/30 group-hover:scale-105 transition-transform">
            <img
              src={asset('/images/profile.jpg')}
              alt="Shubh Sharma"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="flex flex-col">
            <div className="text-sm font-headline font-extrabold tracking-tight text-white group-hover:text-blue-400 transition-colors flex items-center gap-1.5 font-mono">
              <span>SHUBH SHARMA</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            </div>
            <div className="text-[10px] font-mono tracking-wider uppercase text-slate-400">
              From Raw Data to Decisions
            </div>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 bg-white/5 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 shadow-inner">
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-mono transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-blue-600 font-semibold shadow-md shadow-blue-600/30'
                    : 'text-slate-300 hover:text-white hover:bg-white/10 font-medium'
                }`}
              >
                <span className={`text-[10px] ${isActive ? 'text-blue-200' : 'text-slate-500'}`}>
                  {link.num}
                </span>
                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Availability & Resume */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-[11px] font-mono text-blue-300 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span>Available // Summer 2027</span>
          </div>

          <a
            href={asset('/resume.pdf')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-mono font-bold bg-white text-gray-950 hover:bg-blue-400 transition-all shadow-md active:scale-[0.98]"
          >
            <FileText className="w-3.5 h-3.5 text-gray-950" />
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3 text-gray-950" />
          </a>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl bg-white/10 border border-white/15 text-white hover:bg-white/20 transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A0D14]/98 border-b border-white/15 px-4 pt-4 pb-6 shadow-2xl backdrop-blur-2xl animate-fade-in">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-mono text-slate-300 hover:text-white hover:bg-white/10 transition-colors border-b border-white/5"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-xs text-blue-400 font-bold">{link.num}</span>
                  <span className="font-semibold">{link.label}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-slate-500" />
              </a>
            ))}

            <div className="pt-3 flex flex-col gap-2">
              <a
                href={asset('/resume.pdf')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 rounded-xl bg-blue-600 text-white font-mono text-xs font-bold shadow-md"
              >
                Download Official Resume PDF ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
