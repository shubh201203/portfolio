import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, ArrowUpRight } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'skills', 'projects', 'certifications', 'education', 'contact'];
      const scrollPosition = window.scrollY + 120;

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
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
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-gray-200/90 py-3 shadow-card'
          : 'bg-[#F7F7F3]/90 backdrop-blur-md py-4 border-b border-gray-200/60'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        
        {/* Brand */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-3 text-left cursor-pointer"
        >
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-subtle group-hover:border-blue-600 transition-all bg-gray-100 flex-shrink-0 ring-1 ring-gray-200">
            <img
              src={`${import.meta.env.BASE_URL}images/profile.jpg`}
              alt="Shubh Sharma"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div>
            <div className="text-sm font-extrabold tracking-tight text-gray-950 group-hover:text-blue-600 transition-colors flex items-center gap-1.5">
              <span>SHUBH SHARMA</span>
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            </div>
            <div className="text-[10px] text-gray-500 tracking-wider font-mono uppercase">
              Data Analyst | BI & Analytics
            </div>
          </div>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-white/90 px-3 py-1.5 rounded-full border border-gray-200/80 shadow-subtle backdrop-blur-sm">
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all duration-200 ${
                  isActive
                    ? 'text-white bg-gray-950 shadow-sm'
                    : 'text-gray-600 hover:text-gray-950 hover:bg-gray-100'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Status Pill & Resume Button */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-mono text-emerald-800">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Open for Internships</span>
          </div>

          <a
            href={portfolioData.personal.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold bg-gray-950 text-white hover:bg-blue-600 transition-all shadow-subtle active:scale-[0.98]"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <a
            href={portfolioData.personal.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-md text-xs font-semibold bg-gray-950 text-white"
          >
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-white border border-gray-200 bg-white cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl border-b border-gray-200 px-4 pt-3 pb-5 space-y-2 mt-2 shadow-elevated animate-fade-in">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-800 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Available for Data Analyst & BI Roles</span>
          </div>

          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="block px-3 py-2 rounded-md text-sm font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-50"
            >
              {link.label}
            </a>
          ))}

          <div className="pt-2 border-t border-gray-100">
            <a
              href={portfolioData.personal.resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-md text-xs font-bold bg-gray-950 text-white hover:bg-blue-600 transition-colors shadow-subtle"
            >
              <FileText className="w-4 h-4" />
              <span>Download Official Resume</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
