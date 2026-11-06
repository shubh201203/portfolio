import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileText } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      setIsScrolled(currentScroll > 40);

      const sections = ['home', 'about', 'work', 'toolkit', 'credentials', 'contact'];
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
    { num: '01', label: 'About', href: '#about' },
    { num: '02', label: 'Work', href: '#work' },
    { num: '03', label: 'Toolkit', href: '#toolkit' },
    { num: '04', label: 'Credentials', href: '#credentials' },
    { num: '05', label: 'Contact', href: '#contact' },
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
          ? 'bg-[#F6F4ED]/90 backdrop-blur-md border-b border-[#111215]/10 py-3.5 shadow-subtle'
          : 'bg-transparent py-5 sm:py-6 border-b border-[#111215]/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Lockup */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="group flex items-center gap-3 cursor-pointer"
        >
          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-[#111215]/20 bg-[#111215] shrink-0 ring-1 ring-[#111215]/10 group-hover:scale-105 transition-transform">
            <img
              src={`${import.meta.env.BASE_URL}images/profile.jpg`}
              alt="Shubh Sharma"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="flex flex-col">
            <div className="text-sm font-headline font-extrabold tracking-tight text-[#111215] group-hover:text-black transition-colors flex items-center gap-1.5">
              <span>SHUBH SHARMA</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#111215]" />
            </div>
            <div className="text-[10px] font-mono tracking-wider uppercase text-[#111215]/60">
              Data × Design × Tech
            </div>
          </div>
        </a>

        {/* Desktop Editorial Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 bg-white/70 backdrop-blur-sm px-3.5 py-1.5 rounded-full border border-[#111215]/10 shadow-subtle">
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
                    ? 'text-white bg-[#111215] font-semibold shadow-sm'
                    : 'text-[#111215]/70 hover:text-[#111215] hover:bg-black/5 font-medium'
                }`}
              >
                <span className={`text-[10px] ${isActive ? 'text-[#D8F243]' : 'text-[#111215]/40'}`}>
                  {link.num}
                </span>
                <span>{link.label}</span>
              </a>
            );
          })}
        </nav>

        {/* Right Actions: Availability & Resume */}
        <div className="flex items-center gap-3">
          <div className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-600/20 text-[11px] font-mono text-emerald-800 font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
            <span>Available // Summer 2027</span>
          </div>

          <a
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-mono font-bold bg-[#111215] text-[#F6F4ED] hover:bg-black hover:text-white transition-all shadow-subtle active:scale-[0.98]"
          >
            <FileText className="w-3.5 h-3.5 text-[#D8F243]" />
            <span>Resume</span>
            <ArrowUpRight className="w-3 h-3 text-[#111215]/40" />
          </a>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-white border border-[#111215]/10 text-[#111215] hover:bg-stone-100 transition-colors"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F6F4ED] border-b border-[#111215]/15 px-4 pt-4 pb-6 shadow-xl animate-fade-in">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-mono text-[#111215] hover:bg-black/5 transition-colors border-b border-[#111215]/5"
              >
                <div className="flex items-center gap-2.5">
                  <span className="text-xs text-[#111215]/40 font-bold">{link.num}</span>
                  <span className="font-semibold">{link.label}</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#111215]/40" />
              </a>
            ))}

            <div className="pt-3 flex flex-col gap-2">
              <a
                href={`${import.meta.env.BASE_URL}resume.pdf`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-2.5 rounded-xl bg-[#111215] text-[#F6F4ED] font-mono text-xs font-bold"
              >
                Download Resume PDF ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
