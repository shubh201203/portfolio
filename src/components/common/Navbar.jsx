import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const progress = totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0;
      setScrollProgress(progress);
      setIsScrolled(currentScroll > 40);

      const sections = ['home', 'pipeline', 'novacart', 'skills', 'playground', 'projects', 'certifications', 'about', 'contact'];
      const scrollPosition = window.scrollY + 140;

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
    { label: 'Pipeline', href: '#pipeline' },
    { label: 'NovaCart', href: '#novacart' },
    { label: 'Capability Map', href: '#skills' },
    { label: 'Inside The Data', href: '#playground' },
    { label: 'Projects', href: '#projects' },
    { label: 'Credentials', href: '#certifications' },
    { label: 'About', href: '#about' },
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
    <>
      {/* Scroll Progress Bar at very top */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] bg-transparent z-50 pointer-events-none">
        <div 
          className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#060913]/90 backdrop-blur-md border-b border-white/10 py-3 shadow-2xl'
            : 'bg-transparent py-5 border-b border-white/5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          
          {/* Brand & Identity */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-3 text-left cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/20 shadow-md group-hover:border-cyan-400 transition-all bg-[#0B0F19] flex-shrink-0 ring-1 ring-white/10">
              <img
                src={`${import.meta.env.BASE_URL}images/profile.jpg`}
                alt="Shubh Sharma"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div>
              <div className="text-sm font-extrabold tracking-tight text-white group-hover:text-cyan-300 transition-colors flex items-center gap-1.5 font-mono">
                <span>SHUBH SHARMA</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              </div>
              <div className="text-[10px] text-slate-400 tracking-wider font-mono uppercase">
                The Data Experience
              </div>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/5 px-3 py-1.5 rounded-full border border-white/10 shadow-inner backdrop-blur-md">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`px-3 py-1 rounded-full text-xs font-mono font-medium transition-all duration-200 ${
                    isActive
                      ? 'text-white bg-blue-600 shadow-glow-blue'
                      : 'text-slate-300 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Resume & Mobile Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-mono font-bold bg-white text-gray-950 hover:bg-cyan-300 transition-all shadow-md active:scale-[0.98]"
            >
              <FileText className="w-3.5 h-3.5 text-gray-950" />
              <span>Resume PDF</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-white/10 border border-white/15 text-white hover:bg-white/20 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#070B14]/98 border-b border-white/15 px-4 pt-4 pb-6 shadow-2xl backdrop-blur-2xl">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-2.5 rounded-xl text-sm font-mono text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                >
                  {link.label}
                </a>
              ))}

              <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
                <a
                  href={`${import.meta.env.BASE_URL}resume.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2.5 rounded-xl bg-blue-600 text-white font-mono text-xs font-bold shadow-md"
                >
                  Download Resume PDF
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
