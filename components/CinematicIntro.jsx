'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function CinematicIntro({ onComplete }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Check reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setVisible(false);
      if (onComplete) onComplete();
      return;
    }

    // Auto complete in 1.8s
    const timer = setTimeout(() => {
      handleDismiss();
    }, 1800);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        handleDismiss();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleDismiss = () => {
    setVisible(false);
    if (onComplete) onComplete();
  };

  if (!visible) return null;

  // 16 analytical data coordinates
  const points = [
    { x: -140, y: -90, delay: 0.1 },
    { x: 120, y: -110, delay: 0.15 },
    { x: -180, y: 70, delay: 0.2 },
    { x: 160, y: 80, delay: 0.25 },
    { x: -60, y: -130, delay: 0.12 },
    { x: 70, y: -70, delay: 0.18 },
    { x: -100, y: 120, delay: 0.22 },
    { x: 90, y: 140, delay: 0.28 },
    { x: 0, y: -160, delay: 0.14 },
    { x: -200, y: 0, delay: 0.24 },
    { x: 200, y: -20, delay: 0.16 },
    { x: 0, y: 170, delay: 0.3 },
  ];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] bg-[#0A0A0B] flex flex-col items-center justify-center p-6 select-none overflow-hidden"
          onClick={handleDismiss}
        >
          {/* Subtle Background Grid */}
          <div className="absolute inset-0 data-grid opacity-20 pointer-events-none" />

          {/* Scattered Data Points that converge */}
          <div className="relative w-80 h-80 flex items-center justify-center">
            {points.map((pt, i) => (
              <motion.div
                key={i}
                initial={{ 
                  x: pt.x * 2.2, 
                  y: pt.y * 2.2, 
                  opacity: 0,
                  scale: 0.5 
                }}
                animate={{ 
                  x: pt.x, 
                  y: pt.y, 
                  opacity: [0, 0.9, 0.4],
                  scale: [0.5, 1.2, 1] 
                }}
                transition={{ 
                  duration: 1.1, 
                  delay: pt.delay,
                  ease: [0.16, 1, 0.3, 1] 
                }}
                className="absolute w-2 h-2 rounded-full bg-[#3B82F6] shadow-sm shadow-[#3B82F6]"
              />
            ))}

            {/* Connecting Vector Lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-40">
              <motion.line
                x1="40" y1="60" x2="160" y2="160"
                stroke="#14B8A6" strokeWidth="1" strokeDasharray="3 3"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.9, delay: 0.2 }}
              />
              <motion.line
                x1="280" y1="80" x2="160" y2="160"
                stroke="#3B82F6" strokeWidth="1" strokeDasharray="3 3"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.9, delay: 0.3 }}
              />
              <motion.line
                x1="80" y1="260" x2="160" y2="160"
                stroke="#3B82F6" strokeWidth="1" strokeDasharray="3 3"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.9, delay: 0.4 }}
              />
              <motion.line
                x1="250" y1="240" x2="160" y2="160"
                stroke="#14B8A6" strokeWidth="1" strokeDasharray="3 3"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.9, delay: 0.5 }}
              />
            </svg>

            {/* Central Monolithic Resolving Typography */}
            <div className="relative z-10 text-center space-y-2">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-xs font-mono uppercase tracking-[0.3em] text-[#14B8A6] font-bold"
              >
                INITIALIZING ANALYTICAL MATRIX
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
                className="text-4xl sm:text-6xl font-headline font-extrabold tracking-tighter text-[#F5F5F4]"
              >
                SHUBH SHARMA
              </motion.h1>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="text-xs font-mono text-slate-400"
              >
                From Raw Data to Decisions.
              </motion.p>
            </div>
          </div>

          {/* Skip Button */}
          <button
            onClick={handleDismiss}
            className="absolute bottom-8 px-4 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-mono text-slate-400 hover:text-white transition-all cursor-pointer"
            aria-label="Skip Intro Animation"
          >
            Skip [ESC]
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
