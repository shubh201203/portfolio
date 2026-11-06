'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Project-specific telemetry node definitions
const PROJECT_TELEMETRY = {
  novacart: [
    { id: 1, scatterX: -240, scatterY: -140, targetX: -130, targetY: -60, label: 'POSTGRESQL 18' },
    { id: 2, scatterX: 230, scatterY: -150, targetX: 130, targetY: -60, label: 'STAR SCHEMA' },
    { id: 3, scatterX: -260, scatterY: 130, targetX: -130, targetY: 60, label: '104K ORDERS' },
    { id: 4, scatterX: 250, scatterY: 140, targetX: 130, targetY: 60, label: 'POWER BI' },
    { id: 5, scatterX: -70, scatterY: -190, targetX: 0, targetY: -95, label: 'DAX MEASURES' },
    { id: 6, scatterX: 80, scatterY: -190, targetX: 0, targetY: 95, label: 'COHORT DECAY' },
    { id: 7, scatterX: -190, scatterY: -10, targetX: -160, targetY: 0, label: '₹847M REVENUE' },
    { id: 8, scatterX: 200, scatterY: 10, targetX: 160, targetY: 0, label: 'RECONCILIATION' },
  ],
  bitepulse: [
    { id: 1, scatterX: -240, scatterY: -140, targetX: -130, targetY: -60, label: 'SQL CTES' },
    { id: 2, scatterX: 230, scatterY: -150, targetX: 130, targetY: -60, label: 'FUNNEL DROP-OFF' },
    { id: 3, scatterX: -260, scatterY: 130, targetX: -130, targetY: 60, label: 'EVENT STREAM' },
    { id: 4, scatterX: 250, scatterY: 140, targetX: 130, targetY: 60, label: 'RETENTION CURVE' },
    { id: 5, scatterX: -70, scatterY: -190, targetX: 0, targetY: -95, label: 'PANDAS' },
    { id: 6, scatterX: 80, scatterY: -190, targetX: 0, targetY: 95, label: 'RFM SEGMENTS' },
    { id: 7, scatterX: -190, scatterY: -10, targetX: -160, targetY: 0, label: 'CONVERSION' },
    { id: 8, scatterX: 200, scatterY: 10, targetX: 160, targetY: 0, label: 'POWER BI' },
  ],
  dirs: [
    { id: 1, scatterX: -240, scatterY: -140, targetX: -130, targetY: -60, label: 'INCIDENT TRIAGE' },
    { id: 2, scatterX: 230, scatterY: -150, targetX: 130, targetY: -60, label: 'GEOCODING' },
    { id: 3, scatterX: -260, scatterY: 130, targetX: -130, targetY: 60, label: 'VOLUNTEER RELIEF' },
    { id: 4, scatterX: 250, scatterY: 140, targetX: 130, targetY: 60, label: 'POSTGRESQL' },
    { id: 5, scatterX: -70, scatterY: -190, targetX: 0, targetY: -95, label: 'RBAC AUTH' },
    { id: 6, scatterX: 80, scatterY: -190, targetX: 0, targetY: 95, label: 'BEACON TELEMETRY' },
    { id: 7, scatterX: -190, scatterY: -10, targetX: -160, targetY: 0, label: 'DISPATCH' },
    { id: 8, scatterX: 200, scatterY: 10, targetX: 160, targetY: 0, label: 'EMERGENCY GRID' },
  ],
  wardrobewhiz: [
    { id: 1, scatterX: -240, scatterY: -140, targetX: -130, targetY: -60, label: 'MOBILENET CNN' },
    { id: 2, scatterX: 230, scatterY: -150, targetX: 130, targetY: -60, label: 'COLOR HARMONY' },
    { id: 3, scatterX: -260, scatterY: 130, targetX: -130, targetY: 60, label: 'TAXONOMY' },
    { id: 4, scatterX: 250, scatterY: 140, targetX: 130, targetY: 60, label: 'FIREBASE' },
    { id: 5, scatterX: -70, scatterY: -190, targetX: 0, targetY: -95, label: 'CLOSET BALANCE' },
    { id: 6, scatterX: 80, scatterY: -190, targetX: 0, targetY: 95, label: 'OUTFIT ENGINE' },
    { id: 7, scatterX: -190, scatterY: -10, targetX: -160, targetY: 0, label: 'INVENTORY' },
    { id: 8, scatterX: 200, scatterY: 10, targetX: 160, targetY: 0, label: 'HEURISTICS' },
  ],
  'emotion-music': [
    { id: 1, scatterX: -240, scatterY: -140, targetX: -130, targetY: -60, label: 'FACIAL CNN' },
    { id: 2, scatterX: 230, scatterY: -150, targetX: 130, targetY: -60, label: 'VALENCE-AROUSAL' },
    { id: 3, scatterX: -260, scatterY: 130, targetX: -130, targetY: 60, label: 'SPOTIFY WEB API' },
    { id: 4, scatterX: 250, scatterY: 140, targetX: 130, targetY: 60, label: 'AUDIO DSP' },
    { id: 5, scatterX: -70, scatterY: -190, targetX: 0, targetY: -95, label: 'MOOD MATRIX' },
    { id: 6, scatterX: 80, scatterY: -190, targetX: 0, targetY: 95, label: 'LOW LATENCY' },
    { id: 7, scatterX: -190, scatterY: -10, targetX: -160, targetY: 0, label: 'INFERENCE' },
    { id: 8, scatterX: 200, scatterY: 10, targetX: 160, targetY: 0, label: 'SOUND WAVES' },
  ],
  todo: [
    { id: 1, scatterX: -240, scatterY: -140, targetX: -130, targetY: -60, label: 'PRIORITY MATRIX' },
    { id: 2, scatterX: 230, scatterY: -150, targetX: 130, targetY: -60, label: 'ORDERLY STATE' },
    { id: 3, scatterX: -260, scatterY: 130, targetX: -130, targetY: 60, label: 'TASK LIFECYCLE' },
    { id: 4, scatterX: 250, scatterY: 140, targetX: 130, targetY: 60, label: 'REACT 19' },
    { id: 5, scatterX: -70, scatterY: -190, targetX: 0, targetY: -95, label: 'PERSISTENCE' },
    { id: 6, scatterX: 80, scatterY: -190, targetX: 0, targetY: 95, label: 'EXECUTION' },
    { id: 7, scatterX: -190, scatterY: -10, targetX: -160, targetY: 0, label: 'VELOCITY' },
    { id: 8, scatterX: 200, scatterY: 10, targetX: 160, targetY: 0, label: 'WORKFLOW' },
  ],
};

const DEFAULT_NODES = [
  { id: 1, scatterX: -240, scatterY: -140, targetX: -130, targetY: -60, label: 'ANALYTICS' },
  { id: 2, scatterX: 230, scatterY: -150, targetX: 130, targetY: -60, label: 'ARCHITECTURE' },
  { id: 3, scatterX: -260, scatterY: 130, targetX: -130, targetY: 60, label: 'PIPELINE' },
  { id: 4, scatterX: 250, scatterY: 140, targetX: 130, targetY: 60, label: 'TELEMETRY' },
  { id: 5, scatterX: -70, scatterY: -190, targetX: 0, targetY: -95, label: 'ENGINEERING' },
  { id: 6, scatterX: 80, scatterY: -190, targetX: 0, targetY: 95, label: 'INSIGHTS' },
  { id: 7, scatterX: -190, scatterY: -10, targetX: -160, targetY: 0, label: 'METRICS' },
  { id: 8, scatterX: 200, scatterY: 10, targetX: 160, targetY: 0, label: 'SYSTEM' },
];

export default function ProjectPageTransition({ project, onComplete }) {
  const [isVisible, setIsVisible] = useState(true);
  const [animationStage, setAnimationStage] = useState(1); // 1: Stroke -> 2: Matrix Assembly -> 3: Reveal
  const [isInstantBypass, setIsInstantBypass] = useState(false);

  // Normalize project slug
  const rawSlug = (project?.slug || project?.id || '').toLowerCase();
  const normalizedKey = (rawSlug === 'product-analytics') 
    ? 'bitepulse' 
    : (rawSlug === 'disaster-reporting') 
      ? 'dirs' 
      : rawSlug;

  // Custom project display text
  const displayTitle = project?.shortTitle || project?.title?.split('—')[0]?.trim() || 'PROJECT';
  const displayCategory = project?.category || project?.role || 'TECHNICAL CASE STUDY';
  const displayTagline = project?.subtitle || project?.tagline || 'FROM RAW DATA TO DECISION.';

  // Project colors
  const accentColor = (normalizedKey === 'bitepulse') ? '#14B8A6'
    : (normalizedKey === 'dirs') ? '#2563EB'
    : (normalizedKey === 'wardrobewhiz') ? '#8B5CF6'
    : (normalizedKey === 'emotion-music') ? '#A855F7'
    : (normalizedKey === 'todo') ? '#3B82F6'
    : '#3B82F6';

  const secondaryColor = (normalizedKey === 'bitepulse') ? '#06B6D4'
    : (normalizedKey === 'dirs') ? '#0D9488'
    : (normalizedKey === 'wardrobewhiz') ? '#3B82F6'
    : (normalizedKey === 'emotion-music') ? '#3B82F6'
    : (normalizedKey === 'todo') ? '#F8FAFC'
    : '#14B8A6';

  const nodes = PROJECT_TELEMETRY[normalizedKey] || DEFAULT_NODES;

  const handleDismiss = useCallback((instant = false) => {
    if (instant) {
      setIsInstantBypass(true);
    }
    setIsVisible(false);
    if (typeof window !== 'undefined') {
      document.body.style.overflow = '';
    }
    if (onComplete) onComplete();
  }, [onComplete]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // 1. Reduced motion check: bypass immediately
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setIsInstantBypass(true);
      setIsVisible(false);
      document.body.style.overflow = '';
      if (onComplete) onComplete();
      return;
    }

    // Lock scroll during transition
    document.body.style.overflow = 'hidden';

    // Choreographed stages (~1.4s total for brisk, snappy response)
    const stage2Timer = setTimeout(() => setAnimationStage(2), 350);
    const completeTimer = setTimeout(() => handleDismiss(), 1450);

    // ESC / Space / Enter skip shortcut
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        handleDismiss(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(stage2Timer);
      clearTimeout(completeTimer);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleDismiss, onComplete]);

  if (isInstantBypass) return null;

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => {
        if (typeof document !== 'undefined') {
          document.body.style.overflow = '';
        }
      }}
    >
      {isVisible && (
        <motion.aside
          key={`project-transition-${rawSlug}`}
          data-project-transition="true"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
            filter: 'blur(8px)',
            transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-[90] bg-[#080A10] text-[#F5F5F4] flex flex-col items-center justify-center p-6 select-none overflow-hidden"
          onClick={() => handleDismiss(true)}
          role="dialog"
          aria-label={`${displayTitle} Case Study Transition`}
          aria-modal="true"
        >
          {/* Subtle Ambient Background Grids */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
          <div className="absolute inset-0 bg-radial from-transparent via-[#080A10]/80 to-[#080A10] pointer-events-none" />

          {/* Top Status Bar & Identity Telemetry */}
          <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-[11px] font-mono tracking-widest text-slate-500 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 0.85, x: 0 }}
              transition={{ duration: 0.35 }}
              className="flex items-center gap-2"
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ backgroundColor: accentColor }}
              />
              <span className="text-slate-300 font-semibold uppercase">
                CASE STUDY // {displayCategory}
              </span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 0.85, x: 0 }}
              transition={{ duration: 0.35 }}
              className="hidden sm:flex items-center gap-2"
            >
              <span className="text-slate-600">SYS //</span>
              <span style={{ color: accentColor }}>INITIALIZING ANALYTICAL MATRIX</span>
            </motion.div>
          </div>

          {/* Central Interactive Animation Arena */}
          <div className="relative w-full max-w-2xl h-80 sm:h-96 flex flex-col items-center justify-center">
            
            {/* SVG Connecting Lines & Radar Grid */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
              <defs>
                <linearGradient id="projectGlowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={accentColor} stopOpacity="0.8" />
                  <stop offset="100%" stopColor={secondaryColor} stopOpacity="0.6" />
                </linearGradient>
                <filter id="projectLuminousGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Luminous precision stroke path */}
              <motion.path
                d="M 60 120 C 120 70, 180 150, 240 100 C 300 50, 360 130, 420 80 C 480 40, 540 120, 600 75"
                fill="none"
                stroke="url(#projectGlowGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                filter="url(#projectLuminousGlow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: [0, 1, 1],
                  opacity: animationStage === 1 ? [0, 1, 0.4] : 0,
                }}
                transition={{
                  duration: 0.85,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />

              {/* Crosshair Axes & Radar Matrix */}
              <motion.line
                x1="50%" y1="12%" x2="50%" y2="88%"
                stroke={accentColor}
                strokeWidth="1"
                strokeDasharray="4 4"
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{
                  opacity: animationStage >= 2 ? 0.35 : 0,
                  pathLength: animationStage >= 2 ? 1 : 0,
                }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
              <motion.line
                x1="8%" y1="50%" x2="92%" y2="50%"
                stroke={secondaryColor}
                strokeWidth="1"
                strokeDasharray="4 4"
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{
                  opacity: animationStage >= 2 ? 0.35 : 0,
                  pathLength: animationStage >= 2 ? 1 : 0,
                }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              />
              <motion.circle
                cx="50%" cy="50%" r="96"
                fill="none"
                stroke={accentColor}
                strokeWidth="1"
                strokeDasharray="3 6"
                initial={{ scale: 0.4, opacity: 0 }}
                animate={{
                  scale: animationStage >= 2 ? 1 : 0.4,
                  opacity: animationStage >= 2 ? 0.25 : 0,
                }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.circle
                cx="50%" cy="50%" r="148"
                fill="none"
                stroke={secondaryColor}
                strokeWidth="1"
                strokeDasharray="2 8"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{
                  scale: animationStage >= 2 ? 1 : 0.5,
                  opacity: animationStage >= 2 ? 0.18 : 0,
                }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              />
            </svg>

            {/* Stage 2: Analytical Data Points Assembling */}
            {animationStage >= 2 &&
              nodes.map((node, i) => (
                <motion.div
                  key={node.id}
                  initial={{
                    x: node.scatterX,
                    y: node.scatterY,
                    opacity: 0,
                    scale: 0.4,
                  }}
                  animate={{
                    x: node.targetX,
                    y: node.targetY,
                    opacity: [0, 0.95, 0.7],
                    scale: [0.4, 1.25, 1],
                  }}
                  transition={{
                    duration: 0.55,
                    delay: i * 0.02,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="absolute flex items-center gap-1.5 pointer-events-none"
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{
                      backgroundColor: i % 2 === 0 ? accentColor : secondaryColor,
                      boxShadow: `0 0 8px ${i % 2 === 0 ? accentColor : secondaryColor}`,
                    }}
                  />
                  {node.label && (
                    <span className="text-[9px] font-mono text-slate-400 tracking-wider hidden sm:inline">
                      {node.label}
                    </span>
                  )}
                </motion.div>
              ))}

            {/* Central Typography with Light Sweep */}
            <div className="relative z-10 text-center flex flex-col items-center justify-center space-y-3 px-4">
              
              {/* Category Micro-Badge */}
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.08 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[10px] font-mono uppercase tracking-[0.24em]"
                style={{ color: secondaryColor }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full animate-ping"
                  style={{ backgroundColor: secondaryColor }}
                />
                <span>{displayCategory}</span>
              </motion.div>

              {/* Monolithic Project Title with Specular Light Sweep */}
              <div className="relative overflow-hidden py-1">
                <motion.h1
                  initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: 'blur(0px)',
                  }}
                  transition={{
                    duration: 0.5,
                    delay: 0.12,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter text-[#F5F5F4] font-headline uppercase"
                >
                  <span className="inline-block relative">
                    {displayTitle}
                    {/* Specular Light Sweep */}
                    <motion.span
                      initial={{ x: '-150%', opacity: 0 }}
                      animate={{ x: '150%', opacity: [0, 0.85, 0] }}
                      transition={{
                        duration: 0.85,
                        delay: 0.45,
                        ease: 'easeInOut',
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 pointer-events-none"
                    />
                  </span>
                </motion.h1>
              </div>

              {/* Stage 2 Supporting Subtitle */}
              <motion.div
                initial={{ opacity: 0, y: 10, letterSpacing: '0.1em' }}
                animate={{
                  opacity: animationStage >= 2 ? 1 : 0,
                  y: animationStage >= 2 ? 0 : 10,
                  letterSpacing: animationStage >= 2 ? '0.2em' : '0.1em',
                }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs sm:text-sm font-mono uppercase text-slate-300 font-semibold flex items-center gap-2 max-w-xl text-center line-clamp-1"
              >
                <span style={{ color: accentColor }} className="font-bold">&bull;</span>
                <span className="truncate">{displayTagline}</span>
                <span style={{ color: secondaryColor }} className="font-bold">&bull;</span>
              </motion.div>

              {/* Analytical Progress Sweep Bar */}
              <div className="w-56 h-[2px] bg-white/10 rounded-full overflow-hidden mt-3">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.35, delay: 0.08, ease: 'easeInOut' }}
                  className="h-full"
                  style={{
                    background: `linear-gradient(to right, ${accentColor}, ${secondaryColor}, ${accentColor})`
                  }}
                />
              </div>
            </div>
          </div>

          {/* Bottom Interactive Skip Controller with ESC shortcut */}
          <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDismiss(true);
              }}
              className="group flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-xs font-mono text-slate-400 hover:text-white transition-all duration-200 cursor-pointer shadow-lg"
              aria-label="Skip Project Reveal Animation"
            >
              <span>Skip Reveal</span>
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-slate-300 font-mono group-hover:bg-white/20">
                ESC
              </kbd>
            </button>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
