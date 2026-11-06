'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, FileText, Sparkles } from 'lucide-react';
import { asset } from '@/lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (currentScroll / totalHeight) * 100 : 0;
      setScrollProgress(progress);
      setIsScrolled(currentScroll > 40);

      const sections = ['home', 'how-it-works', 'work', 'skills', 'experience', 'about', 'credentials', 'contact'];
      const scrollPosition = currentScroll + 220;

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
    { num: '01', label: 'Process', href: '#how-it-works' },
    { num: '02', label: 'Work', href: '#work' },
    { num: '03', label: 'Skills', href: '#skills' },
    { num: '04', label: 'Experience', href: '#experience' },
    { num: '05', label: 'About', href: '#about' },
    { num: '06', label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const sectionId = href.replace('#', '');

    // Dispatches custom event for section entrance coordinator
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('sectionTransition', {
          detail: { target: sectionId },
        })
      );

      // Smooth scroll using Lenis if available
      if (window.__lenis) {
        window.__lenis.scrollTo(href, {
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        });
      } else {
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth' });
        }
      }

      history.pushState(null, '', href);
      setActiveSection(sectionId);
    }
  };

  return (
    <>
      {/* Top Scroll Progress Indicator Bar */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] z-[60] bg-white/5 pointer-events-none">
        <motion.div
          className="h-full bg-gradient-to-r from-[#3B82F6] via-[#14B8A6] to-[#3B82F6]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#07080B]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
            : 'bg-transparent py-5 sm:py-6 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Identity Lockup */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-3 cursor-pointer"
            aria-label="Shubh Sharma Home"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-white/20 bg-[#121620] shrink-0 ring-1 ring-[#3B82F6]/30 group-hover:scale-105 transition-transform">
              <img
                src={asset('/images/profile.jpg')}
                alt="Shubh Sharma"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="flex flex-col">
              <div className="text-sm font-headline font-extrabold tracking-tight text-white group-hover:text-[#3B82F6] transition-colors flex items-center gap-1.5 font-mono">
                <span>SHUBH SHARMA</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-pulse" />
              </div>
              <div className="text-[10px] font-mono tracking-wider uppercase text-slate-400">
                From Raw Data to Decision
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links with Active Pill Transition */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/[0.04] backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10 shadow-inner">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono transition-all duration-200 ${
                    isActive
                      ? 'text-white font-semibold'
                      : 'text-slate-300 hover:text-white hover:bg-white/5 font-medium'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNavPill"
                      className="absolute inset-0 bg-[#3B82F6] rounded-full shadow-md shadow-[#3B82F6]/30"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className={`relative z-10 text-[10px] ${isActive ? 'text-blue-200' : 'text-slate-500'}`}>
                    {link.num}
                  </span>
                  <span className="relative z-10">{link.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Actions: Availability Badge & Resume */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/30 text-[11px] font-mono text-[#3B82F6] font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] animate-pulse" />
              <span>Available for Roles</span>
            </div>

            <a
              href={asset('/resume.pdf')}
              download="Shubh_Sharma_Data_Analyst_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-mono font-bold bg-[#F5F5F4] text-[#0A0A0B] hover:bg-[#3B82F6] hover:text-white transition-all shadow-md active:scale-[0.98] cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-white/10 border border-white/15 text-white hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Full-Screen Staggered Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-[#0A0A0B]/98 border-b border-white/15 px-4 pt-4 pb-6 shadow-2xl backdrop-blur-2xl"
            >
              <div className="flex flex-col space-y-1">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    initial={{ opacity: 0, x: -15 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-mono text-slate-300 hover:text-white hover:bg-white/10 transition-colors border-b border-white/5"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="text-xs text-[#3B82F6] font-bold">{link.num}</span>
                      <span className="font-semibold">{link.label}</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-500" />
                  </motion.a>
                ))}

                <div className="pt-3">
                  <a
                    href={asset('/resume.pdf')}
                    download="Shubh_Sharma_Data_Analyst_Resume.pdf"
                    className="w-full text-center block py-2.5 rounded-xl bg-[#3B82F6] text-white font-mono text-xs font-bold shadow-md cursor-pointer"
                  >
                    Download Official Resume PDF ↗
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
