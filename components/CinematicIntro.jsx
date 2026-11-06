'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SESSION_KEY = 'shubh_portfolio_intro_seen';
const DISPLAY_NAME = 'SHUBH SHARMA';
const TAGLINE = 'TURNING DATA INTO DECISIONS.';

// Analytical target coordinates for Stage 2 assembly
const NODES = [
  { id: 1, scatterX: -260, scatterY: -160, targetX: -140, targetY: -65, label: 'SQL' },
  { id: 2, scatterX: 240, scatterY: -170, targetX: 140, targetY: -65, label: 'DAX' },
  { id: 3, scatterX: -280, scatterY: 150, targetX: -140, targetY: 65, label: 'STAR SCHEMA' },
  { id: 4, scatterX: 270, scatterY: 160, targetX: 140, targetY: 65, label: 'WAREHOUSE' },
  { id: 5, scatterX: -80, scatterY: -210, targetX: 0, targetY: -100, label: 'ETL' },
  { id: 6, scatterX: 90, scatterY: -210, targetX: 0, targetY: 100, label: 'ANALYTICS' },
  { id: 7, scatterX: -210, scatterY: -10, targetX: -180, targetY: 0, label: 'RECONCILIATION' },
  { id: 8, scatterX: 220, scatterY: 10, targetX: 180, targetY: 0, label: 'DECISION' },
  { id: 9, scatterX: -130, scatterY: -120, targetX: -80, targetY: -35 },
  { id: 10, scatterX: 140, scatterY: -120, targetX: 80, targetY: -35 },
  { id: 11, scatterX: -120, scatterY: 120, targetX: -80, targetY: 35 },
  { id: 12, scatterX: 130, scatterY: 120, targetX: 80, targetY: 35 },
];

export default function CinematicIntro({ onComplete }) {
  const [isVisible, setIsVisible] = useState(true);
  const [animationStage, setAnimationStage] = useState(1); // 1: Stroke -> 2: Matrix Assembly -> 3: Reveal
  const [isInstantBypass, setIsInstantBypass] = useState(false);

  const handleDismiss = useCallback((instant = false) => {
    if (instant) {
      setIsInstantBypass(true);
    }
    setIsVisible(false);
    if (typeof window !== 'undefined') {
      try {
        sessionStorage.setItem(SESSION_KEY, 'true');
      } catch (e) {
        // Safe fallback
      }
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

    // 2. Returning visitor check: bypass immediately without animation
    const hasSeenIntro = sessionStorage.getItem(SESSION_KEY) === 'true';
    if (hasSeenIntro) {
      setIsInstantBypass(true);
      setIsVisible(false);
      document.body.style.overflow = '';
      if (onComplete) onComplete();
      return;
    }

    // 3. Lock scroll during intro
    document.body.style.overflow = 'hidden';

    // Choreographed stages (< 2.2s total)
    const stage2Timer = setTimeout(() => setAnimationStage(2), 450);
    const stage3Timer = setTimeout(() => setAnimationStage(3), 1400);
    const completeTimer = setTimeout(() => handleDismiss(), 2000);

    // ESC / Space / Enter key skip - instant bypass
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        handleDismiss(true);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(stage2Timer);
      clearTimeout(stage3Timer);
      clearTimeout(completeTimer);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleDismiss, onComplete]);

  // If reduced motion or bypassed instantly, render nothing
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
          key="apple-startup-intro"
          data-intro="true"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.02,
            filter: 'blur(8px)',
            transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-[100] bg-[#0A0A0B] text-[#F5F5F4] flex flex-col items-center justify-center p-6 select-none overflow-hidden"
          onClick={handleDismiss}
          role="dialog"
          aria-label="Cinematic Startup Animation"
          aria-modal="true"
        >
          {/* Subtle Ambient Background Grids */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
          <div className="absolute inset-0 bg-radial from-transparent via-[#0A0A0B]/80 to-[#0A0A0B] pointer-events-none" />

          {/* Top Status Bar & Identity Telemetry */}
          <div className="absolute top-6 left-6 right-6 flex items-center justify-between text-[11px] font-mono tracking-widest text-slate-500 pointer-events-none">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 0.8, x: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] animate-pulse" />
              <span>SHUBH SHARMA // DATA ANALYST</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 0.8, x: 0 }}
              transition={{ duration: 0.4 }}
              className="hidden sm:flex items-center gap-2"
            >
              <span className="text-slate-600">SYS //</span>
              <span className="text-[#3B82F6]">INITIALIZING ANALYTICAL MATRIX</span>
            </motion.div>
          </div>

          {/* Central Interactive Animation Arena */}
          <div className="relative w-full max-w-2xl h-80 sm:h-96 flex flex-col items-center justify-center">
            
            {/* Stage 1 & 2: SVG Connecting Lines & Radar Grid */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
              <defs>
                <linearGradient id="appleGlowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#14B8A6" stopOpacity="0.6" />
                </linearGradient>
                <filter id="luminousGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Apple-style luminous precision handwriting stroke path */}
              <motion.path
                d="M 60 120 C 120 70, 180 150, 240 100 C 300 50, 360 130, 420 80 C 480 40, 540 120, 600 75"
                fill="none"
                stroke="url(#appleGlowGrad)"
                strokeWidth="2.5"
                strokeLinecap="round"
                filter="url(#luminousGlow)"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{
                  pathLength: [0, 1, 1],
                  opacity: animationStage === 1 ? [0, 1, 0.4] : 0,
                }}
                transition={{
                  duration: 1.0,
                  ease: [0.16, 1, 0.3, 1],
                }}
              />

              {/* Stage 2 Crosshair Axes & Radar Matrix */}
              <motion.line
                x1="50%" y1="12%" x2="50%" y2="88%"
                stroke="#3B82F6"
                strokeWidth="1"
                strokeDasharray="4 4"
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{
                  opacity: animationStage >= 2 ? 0.35 : 0,
                  pathLength: animationStage >= 2 ? 1 : 0,
                }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />
              <motion.line
                x1="8%" y1="50%" x2="92%" y2="50%"
                stroke="#14B8A6"
                strokeWidth="1"
                strokeDasharray="4 4"
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{
                  opacity: animationStage >= 2 ? 0.35 : 0,
                  pathLength: animationStage >= 2 ? 1 : 0,
                }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              />
              <motion.circle
                cx="50%" cy="50%" r="96"
                fill="none"
                stroke="#3B82F6"
                strokeWidth="1"
                strokeDasharray="3 6"
                initial={{ scale: 0.4, opacity: 0 }}
                animate={{
                  scale: animationStage >= 2 ? 1 : 0.4,
                  opacity: animationStage >= 2 ? 0.25 : 0,
                }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              />
              <motion.circle
                cx="50%" cy="50%" r="148"
                fill="none"
                stroke="#14B8A6"
                strokeWidth="1"
                strokeDasharray="2 8"
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{
                  scale: animationStage >= 2 ? 1 : 0.5,
                  opacity: animationStage >= 2 ? 0.18 : 0,
                }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              />
            </svg>

            {/* Stage 2: Scattered Data Points Assembling into Structured Visual */}
            {animationStage >= 2 &&
              NODES.map((node, i) => (
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
                    duration: 0.65,
                    delay: i * 0.025,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="absolute flex items-center gap-1.5 pointer-events-none"
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      i % 2 === 0
                        ? 'bg-[#3B82F6] shadow-[0_0_8px_#3B82F6]'
                        : 'bg-[#14B8A6] shadow-[0_0_8px_#14B8A6]'
                    }`}
                  />
                  {node.label && (
                    <span className="text-[9px] font-mono text-slate-400 tracking-wider hidden sm:inline">
                      {node.label}
                    </span>
                  )}
                </motion.div>
              ))}

            {/* Central Monolithic Typography with Apple-Style Light Sweep */}
            <div className="relative z-10 text-center flex flex-col items-center justify-center space-y-3 px-4">
              
              {/* Category Micro-Badge */}
              <motion.div
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[10px] font-mono uppercase tracking-[0.26em] text-[#14B8A6]"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#14B8A6] animate-ping" />
                <span>DATA ANALYST &bull; AMARAVATI, INDIA</span>
              </motion.div>

              {/* SHUBH SHARMA Centered with Light Sweep */}
              <div className="relative overflow-hidden py-1">
                <motion.h1
                  initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    filter: 'blur(0px)',
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.15,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tighter text-[#F5F5F4] font-headline"
                >
                  <span className="inline-block relative">
                    {DISPLAY_NAME}
                    {/* Subtle Specular Light Sweep */}
                    <motion.span
                      initial={{ x: '-150%', opacity: 0 }}
                      animate={{ x: '150%', opacity: [0, 0.85, 0] }}
                      transition={{
                        duration: 1.0,
                        delay: 0.55,
                        ease: 'easeInOut',
                      }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12 pointer-events-none"
                    />
                  </span>
                </motion.h1>
              </div>

              {/* Stage 2 Supporting Phrase: "TURNING DATA INTO DECISIONS." */}
              <motion.div
                initial={{ opacity: 0, y: 10, letterSpacing: '0.12em' }}
                animate={{
                  opacity: animationStage >= 2 ? 1 : 0,
                  y: animationStage >= 2 ? 0 : 10,
                  letterSpacing: animationStage >= 2 ? '0.24em' : '0.12em',
                }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="text-xs sm:text-sm font-mono uppercase text-slate-300 font-semibold flex items-center gap-2"
              >
                <span className="text-[#3B82F6] font-bold">&bull;</span>
                <span>{TAGLINE}</span>
                <span className="text-[#14B8A6] font-bold">&bull;</span>
              </motion.div>

              {/* Analytical Progress Sweep Bar */}
              <div className="w-56 h-[2px] bg-white/10 rounded-full overflow-hidden mt-3">
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.8, delay: 0.1, ease: 'easeInOut' }}
                  className="h-full bg-gradient-to-r from-[#3B82F6] via-[#14B8A6] to-[#3B82F6]"
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
