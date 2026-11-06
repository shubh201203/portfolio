'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function SpaceScrollRail() {
  const pathname = usePathname();
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredTooltip, setHoveredTooltip] = useState(null);
  const [astronautTilt, setAstronautTilt] = useState(0);
  const [isHoveringMoon, setIsHoveringMoon] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Landing sequence state machine: 'CLIMBING' | 'RELEASING' | 'FALLING' | 'LANDING' | 'MISSION_COMPLETE'
  const [landingState, setLandingState] = useState('CLIMBING');
  const [dustParticles, setDustParticles] = useState([]);

  const lastScrollY = useRef(0);
  const lastScrollTime = useRef(Date.now());
  const velocityRef = useRef(0);
  const landingTimeoutRef = useRef(null);

  // Check reduced motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Section markers definition based on route
  const isProjectPage = pathname.startsWith('/projects');

  const homepageSections = [
    { id: 'hero', label: 'Home', num: '00', offset: 0.0 },
    { id: 'work', label: 'Selected Work', num: '01', offset: 0.16 },
    { id: 'how-it-works', label: 'Workflow', num: '02', offset: 0.32 },
    { id: 'about', label: 'About', num: '03', offset: 0.50 },
    { id: 'skills', label: 'Skills & Toolkit', num: '04', offset: 0.68 },
    { id: 'education', label: 'Credentials', num: '05', offset: 0.84 },
    { id: 'contact', label: 'Contact', num: '06', offset: 0.96 }
  ];

  const projectSections = [
    { id: 'hero', label: 'Hero', offset: 0.0 },
    { id: 'overview', label: 'Overview', offset: 0.18 },
    { id: 'business-problem', label: 'Problem', offset: 0.35 },
    { id: 'architecture', label: 'System', offset: 0.52 },
    { id: 'methodology', label: 'Methodology', offset: 0.68 },
    { id: 'findings', label: 'Findings', offset: 0.82 },
    { id: 'next-project', label: 'Next Project', offset: 0.95 }
  ];

  const currentSections = isProjectPage ? projectSections : homepageSections;

  // Reset landing state on route change
  useEffect(() => {
    setLandingState('CLIMBING');
    setDustParticles([]);
    if (landingTimeoutRef.current) clearTimeout(landingTimeoutRef.current);
  }, [pathname]);

  // Scroll tracking and progress calculation
  const updateScrollProgress = useCallback(() => {
    if (typeof window === 'undefined') return;

    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const docHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight,
      document.body.offsetHeight,
      document.documentElement.offsetHeight
    );
    const viewportHeight = window.innerHeight;
    const maxScroll = Math.max(1, docHeight - viewportHeight);
    const progress = Math.min(1, Math.max(0, scrollY / maxScroll));

    setScrollProgress(progress);

    // Calculate scroll velocity for astronaut tilt
    const now = Date.now();
    const dt = Math.max(1, now - lastScrollTime.current);
    const dy = scrollY - lastScrollY.current;
    const velocity = (dy / dt) * 16; // normalized velocity
    velocityRef.current = velocity;
    lastScrollY.current = scrollY;
    lastScrollTime.current = now;

    // Apply smooth tilt: max ±12 degrees
    const targetTilt = Math.max(-12, Math.min(12, velocity * 1.8));
    setAstronautTilt((prev) => prev * 0.75 + targetTilt * 0.25);

    // Identify active section
    for (let i = currentSections.length - 1; i >= 0; i--) {
      const section = currentSections[i];
      const el = document.getElementById(section.id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= viewportHeight * 0.45) {
          setActiveSection(section.id);
          break;
        }
      }
    }

    // Landing sequence state transitions
    if (progress >= 0.975) {
      if (landingState === 'CLIMBING') {
        if (prefersReducedMotion) {
          setLandingState('MISSION_COMPLETE');
        } else {
          setLandingState('RELEASING');
          // Step 1: Release hand
          setTimeout(() => {
            setLandingState('FALLING');
            // Step 2: Fall & land
            setTimeout(() => {
              setLandingState('LANDING');
              // Spawn dust particles
              const newDust = Array.from({ length: 12 }, (_, i) => ({
                id: i,
                angle: (i / 12) * Math.PI * 2,
                distance: Math.random() * 24 + 10,
                size: Math.random() * 2.5 + 1.5,
              }));
              setDustParticles(newDust);

              // Step 3: Settle into mission complete
              setTimeout(() => {
                setLandingState('MISSION_COMPLETE');
              }, 450);
            }, 650);
          }, 300);
        }
      }
    } else if (progress < 0.94) {
      if (landingState !== 'CLIMBING') {
        setLandingState('CLIMBING');
        setDustParticles([]);
      }
    }
  }, [currentSections, landingState, prefersReducedMotion]);

  useEffect(() => {
    // Listen to Lenis scroll event if available
    if (window.__lenis) {
      window.__lenis.on('scroll', updateScrollProgress);
    }

    // Fallback window scroll listener
    window.addEventListener('scroll', updateScrollProgress, { passive: true });
    window.addEventListener('resize', updateScrollProgress, { passive: true });

    // Initial check
    updateScrollProgress();

    return () => {
      if (window.__lenis) {
        window.__lenis.off('scroll', updateScrollProgress);
      }
      window.removeEventListener('scroll', updateScrollProgress);
      window.removeEventListener('resize', updateScrollProgress);
      if (landingTimeoutRef.current) clearTimeout(landingTimeoutRef.current);
    };
  }, [updateScrollProgress]);

  // Smooth scroll to top via Moon
  const scrollToTop = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Smooth scroll to section
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    if (window.__lenis) {
      window.__lenis.scrollTo(el, { offset: -30, duration: 1.0 });
    } else {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      aria-label="Space-Themed Scroll Navigation Rail"
      className="fixed right-3 sm:right-6 top-0 bottom-0 z-40 pointer-events-none hidden lg:flex flex-col items-center justify-between py-5 select-none"
      style={{ width: '56px' }}
    >
      {/* =================================================================== */}
      {/* 1. GLOWING MOON AT TOP (BACK TO TOP CONTROL)                         */}
      {/* =================================================================== */}
      <div className="relative pointer-events-auto flex flex-col items-center">
        <button
          onClick={scrollToTop}
          onMouseEnter={() => setIsHoveringMoon(true)}
          onMouseLeave={() => setIsHoveringMoon(false)}
          className="relative group p-1 rounded-full cursor-pointer transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#3B82F6]"
          aria-label="Back to orbit (scroll to top)"
          title="Back to orbit"
        >
          {/* Subtle outer atmospheric lunar glow */}
          <div className="absolute inset-0 rounded-full bg-[#3B82F6]/25 blur-md group-hover:bg-[#3B82F6]/45 transition-all duration-300" />
          
          {/* Realistic Lunar Moon SVG */}
          <svg
            className="w-10 h-10 sm:w-11 sm:h-11 relative z-10 filter drop-shadow-[0_0_8px_rgba(59,130,246,0.6)] animate-pulse"
            style={{ animationDuration: '6s' }}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <radialGradient id="moonGradient" cx="38%" cy="36%" r="62%">
                <stop offset="0%" stopColor="#FFFFFF" />
                <stop offset="45%" stopColor="#E2E8F0" />
                <stop offset="85%" stopColor="#94A3B8" />
                <stop offset="100%" stopColor="#475569" />
              </radialGradient>
              <radialGradient id="craterGlow" cx="40%" cy="40%" r="55%">
                <stop offset="0%" stopColor="#334155" />
                <stop offset="70%" stopColor="#1E293B" />
                <stop offset="100%" stopColor="#0F172A" />
              </radialGradient>
              <filter id="lunarAtmosphere" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Moon Base Sphere */}
            <circle cx="50" cy="50" r="46" fill="url(#moonGradient)" />

            {/* Maria (Dark Volcanic Plains) */}
            <path
              d="M32 28 C38 24, 52 26, 56 34 C58 40, 48 48, 40 46 C34 44, 28 34, 32 28 Z"
              fill="#64748B"
              opacity="0.55"
            />
            <path
              d="M55 52 C64 48, 76 56, 72 68 C68 76, 54 74, 50 66 C48 60, 50 54, 55 52 Z"
              fill="#64748B"
              opacity="0.5"
            />
            <path
              d="M26 56 C32 50, 42 54, 40 64 C38 72, 24 70, 22 62 C20 58, 22 56, 26 56 Z"
              fill="#64748B"
              opacity="0.45"
            />

            {/* Craters & Ejecta Rings */}
            <circle cx="68" cy="34" r="6" fill="url(#craterGlow)" stroke="#CBD5E1" strokeWidth="0.75" opacity="0.8" />
            <circle cx="36" cy="68" r="7.5" fill="url(#craterGlow)" stroke="#CBD5E1" strokeWidth="0.8" opacity="0.8" />
            <circle cx="48" cy="38" r="4" fill="url(#craterGlow)" stroke="#CBD5E1" strokeWidth="0.6" opacity="0.75" />
            <circle cx="62" cy="74" r="3.5" fill="url(#craterGlow)" stroke="#CBD5E1" strokeWidth="0.5" opacity="0.7" />
            <circle cx="28" cy="40" r="3" fill="url(#craterGlow)" stroke="#CBD5E1" strokeWidth="0.5" opacity="0.7" />

            {/* Lunar Rim Highlight */}
            <circle cx="50" cy="50" r="46" stroke="#93C5FD" strokeWidth="1.2" opacity="0.85" />
          </svg>
        </button>

        {/* Moon Tooltip */}
        <AnimatePresence>
          {isHoveringMoon && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: -14 }}
              exit={{ opacity: 0, x: -10 }}
              className="absolute right-full top-2 px-2.5 py-1 rounded-md bg-[#0D0E12] border border-[#3B82F6]/50 shadow-xl whitespace-nowrap text-[11px] font-mono text-[#F5F5F4] flex items-center gap-1.5"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] animate-ping" />
              <span>Back to orbit</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* =================================================================== */}
      {/* 2. VERTICAL CHAIN TRACK & SECTION MARKERS                            */}
      {/* =================================================================== */}
      <div className="relative flex-1 w-full flex items-center justify-center my-2">
        
        {/* Repeating Vertical Chain Track */}
        <div className="relative h-full flex flex-col items-center">
          
          {/* Background Metallic Chain Spine */}
          <div className="w-[3px] h-full bg-[#1E293B]/70 rounded-full relative overflow-hidden">
            {/* Luminous Energized Section (Above Astronaut) */}
            <div
              className="w-full bg-gradient-to-b from-[#3B82F6] via-[#14B8A6] to-[#3B82F6] shadow-[0_0_8px_#3B82F6] transition-all duration-150"
              style={{
                height: `${Math.min(100, Math.max(0, scrollProgress * 100))}%`,
              }}
            />
          </div>

          {/* Detailed Repeating Interlocking Chain Links */}
          <svg
            className="absolute top-0 bottom-0 w-3 h-full overflow-visible pointer-events-none"
            preserveAspectRatio="none"
          >
            <defs>
              <pattern id="chainPattern" width="12" height="16" patternUnits="userSpaceOnUse">
                {/* Vertical Oval Link */}
                <rect
                  x="4.5"
                  y="1"
                  width="3"
                  height="8"
                  rx="1.5"
                  fill="none"
                  stroke="#475569"
                  strokeWidth="1.2"
                />
                {/* Horizontal Interlocking Link */}
                <rect
                  x="3"
                  y="7"
                  width="6"
                  height="3"
                  rx="1.2"
                  fill="none"
                  stroke="#334155"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#chainPattern)" opacity="0.65" />
          </svg>

          {/* Traveling Energy Pulse along the chain */}
          <div
            className="absolute top-0 w-1.5 h-12 bg-gradient-to-b from-transparent via-blue-400 to-transparent blur-[1px] pointer-events-none animate-pulse"
            style={{
              top: `${(scrollProgress * 85) % 100}%`,
              transition: 'top 0.2s linear',
            }}
          />

          {/* --------------------------------------------------------------- */}
          {/* Section Navigation Markers along the chain                      */}
          {/* --------------------------------------------------------------- */}
          {currentSections.map((sec, idx) => {
            const topPct = (idx / (currentSections.length - 1)) * 90 + 5;
            const isActive = activeSection === sec.id;
            const isHovered = hoveredTooltip === sec.id;

            return (
              <div
                key={sec.id}
                className="absolute pointer-events-auto flex items-center justify-center -translate-x-1/2 left-1/2"
                style={{ top: `${topPct}%` }}
              >
                <button
                  onClick={() => scrollToSection(sec.id)}
                  onMouseEnter={() => setHoveredTooltip(sec.id)}
                  onMouseLeave={() => setHoveredTooltip(null)}
                  className={`relative p-1 rounded-full cursor-pointer transition-all duration-200 focus:outline-none ${
                    isActive ? 'scale-125' : 'hover:scale-110 opacity-70 hover:opacity-100'
                  }`}
                  aria-label={`Jump to ${sec.label}`}
                >
                  {/* Glowing Node */}
                  <div
                    className={`w-2.5 h-2.5 rounded-full border transition-all duration-300 ${
                      isActive
                        ? 'bg-[#3B82F6] border-white shadow-[0_0_10px_#3B82F6]'
                        : 'bg-[#0D0E12] border-slate-500 hover:border-[#14B8A6]'
                    }`}
                  />
                </button>

                {/* Section Name Tooltip */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: -14 }}
                      exit={{ opacity: 0, x: -8 }}
                      className="absolute right-full px-2.5 py-1 rounded-md bg-[#0D0E12] border border-[#3B82F6]/40 shadow-xl whitespace-nowrap text-[11px] font-mono text-white flex items-center gap-1.5"
                    >
                      {sec.num && <span className="text-[#3B82F6] font-bold">{sec.num}</span>}
                      <span className={`w-1.5 h-1.5 rounded-full ${isActive ? 'bg-[#3B82F6]' : 'bg-[#14B8A6]'}`} />
                      <span>{sec.label}</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}

          {/* --------------------------------------------------------------- */}
          {/* 3. ASTRONAUT COMPANION (Hangs from Chain / Lands at bottom)      */}
          {/* --------------------------------------------------------------- */}
          <div
            className="absolute left-1/2 -translate-x-1/2 pointer-events-none transition-all duration-75"
            style={{
              top: landingState === 'MISSION_COMPLETE' || landingState === 'LANDING'
                ? '97%'
                : `${Math.min(96, Math.max(2, scrollProgress * 95))}%`,
              transform: `translate(-50%, -50%) rotate(${landingState === 'FALLING' ? 8 : astronautTilt}deg)`,
            }}
          >
            {/* Astronaut Character Container */}
            <div className="relative flex flex-col items-center">
              
              {/* Glowing Aura */}
              <div className="absolute inset-0 bg-[#3B82F6]/20 rounded-full blur-md" />

              {/* Hand Grip Tether attachment to chain */}
              {landingState === 'CLIMBING' && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-1 h-3 bg-gradient-to-b from-[#3B82F6] to-slate-300 shadow-[0_0_4px_#3B82F6]" />
              )}

              {/* Detailed Original Astronaut SVG */}
              <svg
                className={`w-9 h-9 sm:w-10 sm:h-10 relative z-10 filter drop-shadow-[0_2px_8px_rgba(59,130,246,0.5)] transition-transform duration-300 ${
                  landingState === 'LANDING' ? 'scale-y-75 scale-x-110' : ''
                }`}
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Visor Reflective Gradient */}
                  <linearGradient id="visorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#38BDF8" />
                    <stop offset="45%" stopColor="#1E3A8A" />
                    <stop offset="85%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#D97706" />
                  </linearGradient>
                  {/* Suit Shading Gradient */}
                  <linearGradient id="suitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FFFFFF" />
                    <stop offset="70%" stopColor="#E2E8F0" />
                    <stop offset="100%" stopColor="#94A3B8" />
                  </linearGradient>
                </defs>

                {/* Oxygen Backpack (PLSS) */}
                <rect x="18" y="18" width="28" height="26" rx="5" fill="#475569" stroke="#64748B" strokeWidth="1.2" />
                <rect x="22" y="22" width="20" height="6" rx="2" fill="#0F172A" />
                <circle cx="26" cy="25" r="1.5" fill="#14B8A6" className="animate-ping" />
                <circle cx="38" cy="25" r="1.5" fill="#3B82F6" />

                {/* Legs in zero-g floating pose / standing */}
                {landingState === 'MISSION_COMPLETE' ? (
                  // Standing legs
                  <g>
                    <rect x="24" y="44" width="6" height="12" rx="3" fill="url(#suitGrad)" stroke="#64748B" strokeWidth="1" />
                    <rect x="34" y="44" width="6" height="12" rx="3" fill="url(#suitGrad)" stroke="#64748B" strokeWidth="1" />
                    {/* Boots */}
                    <rect x="22" y="54" width="9" height="5" rx="2" fill="#334155" />
                    <rect x="33" y="54" width="9" height="5" rx="2" fill="#334155" />
                  </g>
                ) : (
                  // Floating zero-g legs
                  <g>
                    <path d="M26 44 C25 48, 22 52, 20 56" stroke="url(#suitGrad)" strokeWidth="6" strokeLinecap="round" />
                    <path d="M38 44 C39 49, 43 53, 45 57" stroke="url(#suitGrad)" strokeWidth="6" strokeLinecap="round" />
                    {/* Boots */}
                    <circle cx="19" cy="57" r="3.5" fill="#334155" />
                    <circle cx="46" cy="58" r="3.5" fill="#334155" />
                  </g>
                )}

                {/* Torso & Suit Body */}
                <rect x="22" y="24" width="20" height="22" rx="6" fill="url(#suitGrad)" stroke="#64748B" strokeWidth="1.2" />
                {/* Chest Mission Console */}
                <rect x="26" y="28" width="12" height="10" rx="2" fill="#1E293B" stroke="#475569" strokeWidth="0.8" />
                <circle cx="29" cy="32" r="1.2" fill="#3B82F6" />
                <circle cx="33" cy="32" r="1.2" fill="#14B8A6" />
                <circle cx="35" cy="35" r="1" fill="#EF4444" />

                {/* Left Arm Gripping Chain Tether */}
                {landingState === 'CLIMBING' ? (
                  <path d="M22 28 C16 24, 14 14, 18 8" stroke="url(#suitGrad)" strokeWidth="5" strokeLinecap="round" />
                ) : landingState === 'MISSION_COMPLETE' ? (
                  <path d="M22 28 C16 34, 16 40, 18 42" stroke="url(#suitGrad)" strokeWidth="5" strokeLinecap="round" />
                ) : (
                  <path d="M22 28 C14 26, 12 18, 14 12" stroke="url(#suitGrad)" strokeWidth="5" strokeLinecap="round" />
                )}

                {/* Gripping Glove / Hand */}
                {landingState === 'CLIMBING' ? (
                  <circle cx="18" cy="8" r="3.2" fill="#334155" stroke="#3B82F6" strokeWidth="1" />
                ) : landingState === 'MISSION_COMPLETE' ? (
                  // Friendly wave gesture
                  <g>
                    <path d="M42 28 C48 24, 52 18, 50 12" stroke="url(#suitGrad)" strokeWidth="5" strokeLinecap="round" />
                    <circle cx="50" cy="11" r="3.2" fill="#334155" />
                  </g>
                ) : (
                  <path d="M42 28 C48 32, 50 38, 48 42" stroke="url(#suitGrad)" strokeWidth="5" strokeLinecap="round" />
                )}

                {/* Helmet Base */}
                <circle cx="32" cy="18" r="13" fill="url(#suitGrad)" stroke="#64748B" strokeWidth="1.2" />

                {/* Reflective Visor */}
                <ellipse cx="33" cy="18" rx="8.5" ry="7" fill="url(#visorGrad)" stroke="#0F172A" strokeWidth="1" />

                {/* Star Glint on Visor */}
                <circle cx="30" cy="15" r="1.5" fill="#FFFFFF" opacity="0.9" />
              </svg>

              {/* Status / Mission Complete Floating Badge */}
              <AnimatePresence>
                {landingState === 'MISSION_COMPLETE' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.9 }}
                    animate={{ opacity: 1, y: -2, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute right-full mr-3 bottom-0 px-3 py-1.5 rounded-xl bg-[#0D0E12] border border-emerald-500/60 shadow-[0_0_15px_rgba(16,185,129,0.35)] whitespace-nowrap text-left"
                  >
                    <div className="flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-400">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      <span>MISSION COMPLETE</span>
                    </div>
                    <div className="text-[10px] font-mono text-slate-300 mt-0.5">
                      Thanks for exploring.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>

      {/* =================================================================== */}
      {/* 4. PLANETARY SURFACE GROUND PLATFORM (BOTTOM OF RAIL)                */}
      {/* =================================================================== */}
      <div className="relative pointer-events-auto flex flex-col items-center">
        
        {/* Landing Shockwave Dust Particles */}
        {dustParticles.map((d) => (
          <motion.div
            key={d.id}
            initial={{ opacity: 0.8, x: 0, y: 0, scale: 1 }}
            animate={{
              opacity: 0,
              x: Math.cos(d.angle) * d.distance,
              y: Math.sin(d.angle) * (d.distance * 0.4),
              scale: 0.2,
            }}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="absolute -top-3 left-1/2 rounded-full bg-[#14B8A6]"
            style={{ width: `${d.size}px`, height: `${d.size}px` }}
          />
        ))}

        {/* Lunar Surface Ground Platform */}
        <div className="relative w-11 h-6 flex items-center justify-center">
          {/* Surface Glow */}
          <div className="absolute inset-0 bg-[#3B82F6]/20 blur-sm rounded-full" />
          
          {/* Cratered Lunar Crust Segment */}
          <svg className="w-full h-full relative z-10" viewBox="0 0 50 25" fill="none">
            <path
              d="M2 20 C14 8, 36 8, 48 20 C42 24, 8 24, 2 20 Z"
              fill="#1E293B"
              stroke="#64748B"
              strokeWidth="1.2"
            />
            {/* Crater Indentations */}
            <ellipse cx="18" cy="15" rx="4" ry="2" fill="#0F172A" stroke="#475569" strokeWidth="0.6" />
            <ellipse cx="32" cy="16" rx="5" ry="2.2" fill="#0F172A" stroke="#475569" strokeWidth="0.6" />
            <circle cx="25" cy="18" r="1.5" fill="#64748B" opacity="0.6" />
          </svg>
        </div>

        {/* Small Progress Percentage Pill */}
        <div className="text-[10px] font-mono text-slate-400 mt-1">
          {Math.round(scrollProgress * 100)}%
        </div>

      </div>

    </nav>
  );
}
