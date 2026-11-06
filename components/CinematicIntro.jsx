'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FIRST_NAME = 'SHUBH';
const LAST_NAME = 'SHARMA';
const TAGLINE = 'FROM RAW DATA TO DECISIONS';

// Analytical scatter-to-matrix target coordinates
const DATA_NODES = [
  // Outer circular ring
  { id: 1, scatterX: -260, scatterY: -180, targetX: -120, targetY: -70, type: 'metric', label: 'SQL' },
  { id: 2, scatterX: 240, scatterY: -190, targetX: 120, targetY: -70, type: 'metric', label: 'DAX' },
  { id: 3, scatterX: -280, scatterY: 150, targetX: -120, targetY: 70, type: 'metric', label: 'STAR' },
  { id: 4, scatterX: 270, scatterY: 160, targetX: 120, targetY: 70, type: 'metric', label: 'WAREHOUSE' },
  { id: 5, scatterX: -90, scatterY: -220, targetX: 0, targetY: -110, type: 'core', label: 'ETL' },
  { id: 6, scatterX: 110, scatterY: -210, targetX: 0, targetY: 110, type: 'core', label: 'ANALYTICS' },
  { id: 7, scatterX: -200, scatterY: -10, targetX: -160, targetY: 0, type: 'metric', label: 'PIPELINE' },
  { id: 8, scatterX: 210, scatterY: 15, targetX: 160, targetY: 0, type: 'metric', label: 'RECONCILIATION' },
  // Diagonal anchors
  { id: 9, scatterX: -140, scatterY: -140, targetX: -70, targetY: -40, type: 'grid' },
  { id: 10, scatterX: 150, scatterY: -130, targetX: 70, targetY: -40, type: 'grid' },
  { id: 11, scatterX: -130, scatterY: 130, targetX: -70, targetY: 40, type: 'grid' },
  { id: 12, scatterX: 140, scatterY: 140, targetX: 70, targetY: 40, type: 'grid' },
];

export default function CinematicIntro({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  const handleDismiss = useCallback(() => {
    if (isExiting) return;
    setIsExiting(true);
    setIsVisible(false);
    if (typeof document !== 'undefined') {
      document.body.style.overflow = '';
    }
    if (onComplete) onComplete();
  }, [isExiting, onComplete]);

  useEffect(() => {
    // Check prefers-reduced-motion
    if (typeof window !== 'undefined') {
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReducedMotion) {
        setIsVisible(false);
        if (onComplete) onComplete();
        return;
      }
    }

    // Lock scrolling while intro is active
    if (typeof document !== 'undefined') {
      document.body.style.overflow = 'hidden';
    }

    // Auto dismiss after 1.85 seconds (total under 2 seconds)
    const autoDismissTimer = setTimeout(() => {
      handleDismiss();
    }, 1850);

    // Keyboard dismissal (ESC, Space, Enter)
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        handleDismiss();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(autoDismissTimer);
      window.removeEventListener('keydown', handleKeyDown);
      if (typeof document !== 'undefined') {
        document.body.style.overflow = '';
      }
    };
  }, [handleDismiss, onComplete]);

  return (
    <AnimatePresence
      mode="wait"
      onExitComplete={() => {
        if (typeof document !== 'undefined') {
          document.body.style.overflow = '';
        }
        if (onComplete) onComplete();
      }}
    >
      {isVisible && (
        <motion.aside
          key="cinematic-intro"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.03,
            filter: 'blur(8px)',
            transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
          }}
          className="fixed inset-0 z-[100] bg-[#0A0A0B] text-[#F5F5F4] flex flex-col items-center justify-center p-6 select-none overflow-hidden cursor-pointer"
          onClick={handleDismiss}
          role="dialog"
          aria-label="Cinematic Startup Animation"
          aria-modal="true"
        >
          {/* Subtle Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />
          <div className="absolute inset-0 bg-radial from-transparent via-[#0A0A0B]/80 to-[#0A0A0B] pointer-events-none" />

          {/* Top Telemetry / Coordinates bar */}
          <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-[10px] font-mono tracking-wider text-slate-500 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: [0, 0.8, 0.6], x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] animate-pulse" />
              <span>SYS_INIT // 2026.11</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: [0, 0.8, 0.6], x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <span>COORDS // 13.0827°N 80.2707°E</span>
            </motion.div>
          </div>

          {/* Stage 1 & Stage 2: Central Data Transformation & Matrix */}
          <div className="relative w-full max-w-xl h-80 flex items-center justify-center">
            
            {/* SVG Connecting Vectors (Stage 2: 0.5s - 1.4s) */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
              <defs>
                <linearGradient id="introBlueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.2" />
                </linearGradient>
              </defs>

              {/* Connecting axes */}
              <motion.line
                x1="50%" y1="10%" x2="50%" y2="90%"
                stroke="url(#introBlueGrad)"
                strokeWidth="1"
                strokeDasharray="4 4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.4 }}
                transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
              />
              <motion.line
                x1="10%" y1="50%" x2="90%" y2="50%"
                stroke="url(#introBlueGrad)"
                strokeWidth="1"
                strokeDasharray="4 4"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.4 }}
                transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
              />

              {/* Matrix concentric radar rings */}
              <motion.circle
                cx="50%" cy="50%" r="90"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="1"
                strokeDasharray="3 6"
                initial={{ scale: 0.3, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.25 }}
                transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.circle
                cx="50%" cy="50%" r="140"
                fill="none"
                stroke="#14B8A6"
                strokeWidth="1"
                strokeDasharray="2 8"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.18 }}
                transition={{ duration: 1.0, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              />
            </svg>

            {/* Scattered Data Nodes that Converge to Matrix (0.5s - 1.4s) */}
            {DATA_NODES.map((node, i) => (
              <motion.div
                key={node.id}
                initial={{
                  x: node.scatterX,
                  y: node.scatterY,
                  opacity: 0,
                  scale: 0.4,
                }}
                animate={{
                  x: [node.scatterX, node.targetX],
                  y: [node.scatterY, node.targetY],
                  opacity: [0, 0.9, 0.7],
                  scale: [0.4, 1.2, 1],
                }}
                transition={{
                  duration: 0.85,
                  delay: 0.15 + i * 0.035,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="absolute flex items-center gap-1.5 pointer-events-none"
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    node.type === 'core'
                      ? 'bg-[#14B8A6] shadow-[0_0_8px_#14B8A6]'
                      : node.type === 'metric'
                      ? 'bg-[#3B82F6] shadow-[0_0_8px_#3B82F6]'
                      : 'bg-slate-400'
                  }`}
                />
                {node.label && (
                  <span className="text-[9px] font-mono text-slate-400 tracking-wider hidden sm:inline">
                    {node.label}
                  </span>
                )}
              </motion.div>
            ))}

            {/* Stage 1: Identity Reveal with Staggered Letters (0 - 0.5s) */}
            <div className="relative z-10 text-center flex flex-col items-center justify-center space-y-3 px-4">
              
              {/* Category Micro-Label */}
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-white/[0.04] border border-white/10 text-[10px] font-mono uppercase tracking-[0.25em] text-[#14B8A6]"
              >
                <span className="w-1 h-1 rounded-full bg-[#14B8A6]" />
                DATA ANALYST &bull; BI ANALYST
              </motion.div>

              {/* Monolithic Name Reveal with Staggered Letters */}
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter text-[#F5F5F4] flex items-center justify-center flex-wrap gap-x-4">
                <span className="inline-flex overflow-hidden">
                  {FIRST_NAME.split('').map((char, index) => (
                    <motion.span
                      key={`fn-${index}`}
                      initial={{ y: 40, opacity: 0, filter: 'blur(6px)' }}
                      animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                      transition={{
                        duration: 0.45,
                        delay: 0.08 + index * 0.04,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>

                <span className="inline-flex overflow-hidden text-transparent bg-clip-text bg-gradient-to-r from-[#F5F5F4] via-[#3B82F6] to-[#14B8A6]">
                  {LAST_NAME.split('').map((char, index) => (
                    <motion.span
                      key={`ln-${index}`}
                      initial={{ y: 40, opacity: 0, filter: 'blur(6px)' }}
                      animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                      transition={{
                        duration: 0.45,
                        delay: 0.22 + index * 0.04,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="inline-block"
                    >
                      {char}
                    </motion.span>
                  ))}
                </span>
              </h1>

              {/* Stage 2: Supporting Phrase Fades In (0.5s - 1.4s) */}
              <motion.div
                initial={{ opacity: 0, y: 10, letterSpacing: '0.15em' }}
                animate={{ opacity: 1, y: 0, letterSpacing: '0.28em' }}
                transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs sm:text-sm font-mono uppercase text-slate-400 font-medium"
              >
                {TAGLINE}
              </motion.div>

              {/* Dynamic Loading Telemetry Progress Line */}
              <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden mt-2">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.3, delay: 0.2, ease: 'easeInOut' }}
                  className="h-full bg-gradient-to-r from-[#3B82F6] to-[#14B8A6]"
                />
              </div>
            </div>
          </div>

          {/* Bottom Interactive Skip Controller */}
          <div className="absolute bottom-8 left-0 right-0 flex items-center justify-center">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleDismiss();
              }}
              className="group flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-white/20 text-xs font-mono text-slate-400 hover:text-white transition-all duration-200 shadow-sm cursor-pointer"
              aria-label="Skip Intro Animation"
            >
              <span>Skip Intro</span>
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
