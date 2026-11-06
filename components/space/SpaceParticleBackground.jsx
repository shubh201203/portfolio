'use client';

import React, { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

// Theme Presets for Individual Projects & Global Pages
const THEMES = {
  novacart: {
    name: 'novacart',
    colors: [
      { r: 59, g: 130, b: 246 },   // Electric Blue (#3B82F6)
      { r: 20, g: 184, b: 166 },   // Cyan (#14B8A6)
      { r: 248, g: 250, b: 252 },  // Crisp White (#F8FAFC)
      { r: 96, g: 165, b: 250 },   // Light Blue (#60A5FA)
    ],
    lineColor: { r: 59, g: 130, b: 246 },
    maxLineDist: 95,
    style: 'network', // Crisp analytical clustering
  },
  bitepulse: {
    name: 'bitepulse',
    colors: [
      { r: 20, g: 184, b: 166 },   // Teal (#14B8A6)
      { r: 6, g: 182, b: 212 },    // Cyan (#06B6D4)
      { r: 45, g: 212, b: 191 },   // Mint (#2DD4BF)
      { r: 245, g: 245, b: 244 },  // Star White (#F5F5F4)
    ],
    lineColor: { r: 6, g: 182, b: 212 },
    maxLineDist: 85,
    style: 'flow', // Fluid user behavior conversion stream
  },
  dirs: {
    name: 'dirs',
    colors: [
      { r: 37, g: 99, b: 235 },    // Restrained Blue (#2563EB)
      { r: 13, g: 148, b: 136 },   // Teal (#0D9488)
      { r: 239, g: 68, b: 68 },    // Beacon Crimson (#EF4444)
      { r: 245, g: 245, b: 244 },  // Star White
    ],
    lineColor: { r: 37, g: 99, b: 235 },
    maxLineDist: 90,
    style: 'beacon', // Emergency coordination network with pulsating beacons
  },
  wardrobewhiz: {
    name: 'wardrobewhiz',
    colors: [
      { r: 139, g: 92, b: 246 },   // Subtle Violet (#8B5CF6)
      { r: 59, g: 130, b: 246 },    // Royal Blue (#3B82F6)
      { r: 236, g: 72, b: 153 },   // Soft Rose (#EC4899)
      { r: 245, g: 245, b: 244 },  // Star White
    ],
    lineColor: { r: 139, g: 92, b: 246 },
    maxLineDist: 85,
    style: 'lifestyle', // Soft floating curved connections
  },
  emotion: {
    name: 'emotion',
    colors: [
      { r: 168, g: 85, b: 247 },   // Dynamic Purple (#A855F7)
      { r: 59, g: 130, b: 246 },    // Electric Blue (#3B82F6)
      { r: 6, g: 182, b: 212 },     // Cyan (#06B6D4)
      { r: 244, g: 63, b: 94 },    // Soft Magenta (#F43F5E)
    ],
    lineColor: { r: 168, g: 85, b: 247 },
    maxLineDist: 88,
    style: 'wave', // Sound-wave oscillation motion
  },
  todo: {
    name: 'todo',
    colors: [
      { r: 59, g: 130, b: 246 },    // Clean Blue (#3B82F6)
      { r: 248, g: 250, b: 252 },  // Crisp White (#F8FAFC)
      { r: 96, g: 165, b: 250 },   // Sky Blue (#60A5FA)
      { r: 148, g: 163, b: 184 },  // Slate (#94A3B8)
    ],
    lineColor: { r: 59, g: 130, b: 246 },
    maxLineDist: 80,
    style: 'orderly', // Structured orderly movement, checklist alignment
  },
  default: {
    name: 'default',
    colors: [
      { r: 59, g: 130, b: 246 },    // Electric Blue (#3B82F6)
      { r: 20, g: 184, b: 166 },    // Cyan (#14B8A6)
      { r: 245, g: 245, b: 244 },   // Subtle White Star (#F5F5F4)
      { r: 168, g: 85, b: 247 },   // Restrained Violet (#A855F7)
    ],
    lineColor: { r: 59, g: 130, b: 246 },
    maxLineDist: 85,
    style: 'cosmic',
  },
};

function getThemeForPath(pathname) {
  if (!pathname) return THEMES.default;
  const p = pathname.toLowerCase();
  if (p.includes('novacart')) return THEMES.novacart;
  if (p.includes('bitepulse') || p.includes('product-analytics')) return THEMES.bitepulse;
  if (p.includes('dirs') || p.includes('disaster-reporting')) return THEMES.dirs;
  if (p.includes('wardrobewhiz')) return THEMES.wardrobewhiz;
  if (p.includes('emotion-music') || p.includes('emotion')) return THEMES.emotion;
  if (p.includes('todo')) return THEMES.todo;
  return THEMES.default;
}

export default function SpaceParticleBackground() {
  const canvasRef = useRef(null);
  const pathname = usePathname();
  const themeRef = useRef(getThemeForPath(pathname));

  // Sync theme when pathname changes without resetting canvas or RAF loop
  useEffect(() => {
    themeRef.current = getThemeForPath(pathname);
  }, [pathname]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animationFrameId;
    let width = 0;
    let height = 0;
    let dpr = 1;

    // Check reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Mouse & Ripple State
    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 130,
      active: false
    };

    const ripples = [];

    // Particle Configuration
    let particleCount = 75;
    if (window.innerWidth < 768) {
      particleCount = 28;
    } else if (window.innerWidth < 1024) {
      particleCount = 48;
    }

    const particles = [];

    class Particle {
      constructor(idx) {
        this.idx = idx;
        this.color = { r: 59, g: 130, b: 246 };
        this.targetColor = { r: 59, g: 130, b: 246 };
        this.colorIdx = idx % 4;
        this.isBeacon = false;
        this.beaconPulse = Math.random() * Math.PI * 2;
        this.waveOffset = Math.random() * Math.PI * 2;
        this.reset(true);
      }

      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = initial ? Math.random() * height : (Math.random() < 0.5 ? -10 : height + 10);
        
        // Depth layer: 0 = far star, 1 = mid constellation, 2 = foreground data node
        this.layer = Math.random() < 0.52 ? 0 : (Math.random() < 0.74 ? 1 : 2);

        if (this.layer === 0) {
          this.size = Math.random() * 0.9 + 0.6;
          this.baseAlpha = Math.random() * 0.35 + 0.15;
          this.speed = Math.random() * 0.12 + 0.04;
        } else if (this.layer === 1) {
          this.size = Math.random() * 1.4 + 1.1;
          this.baseAlpha = Math.random() * 0.45 + 0.25;
          this.speed = Math.random() * 0.22 + 0.08;
        } else {
          this.size = Math.random() * 2.0 + 1.8;
          this.baseAlpha = Math.random() * 0.55 + 0.35;
          this.speed = Math.random() * 0.35 + 0.15;
        }

        // Designation for DIRS emergency beacon nodes
        this.isBeacon = this.layer === 2 && (this.idx % 6 === 0);

        const currentTheme = themeRef.current;
        const targetPalette = currentTheme.colors;
        const chosen = targetPalette[this.colorIdx % targetPalette.length];
        this.color = { ...chosen };
        this.targetColor = { ...chosen };

        const angle = Math.random() * Math.PI * 2;
        this.baseVx = Math.cos(angle) * this.speed;
        this.baseVy = Math.sin(angle) * this.speed - 0.06;
        this.vx = this.baseVx;
        this.vy = this.baseVy;
        
        this.alpha = this.baseAlpha;
        this.twinkleSpeed = Math.random() * 0.02 + 0.008;
        this.twinklePhase = Math.random() * Math.PI * 2;
      }

      update(time) {
        const currentTheme = themeRef.current;
        const targetPalette = currentTheme.colors;
        
        // Update target color toward active theme palette
        const targetCol = targetPalette[this.colorIdx % targetPalette.length];
        if (targetCol) {
          this.targetColor = targetCol;
        }

        // Smooth color interpolation
        this.color.r += (this.targetColor.r - this.color.r) * 0.04;
        this.color.g += (this.targetColor.g - this.color.g) * 0.04;
        this.color.b += (this.targetColor.b - this.color.b) * 0.04;

        if (!prefersReducedMotion) {
          // Dynamic personality modifications per project
          if (currentTheme.style === 'wave') {
            // Emotion-Driven Beats: harmonic audio-wave vertical oscillation
            const waveY = Math.sin(time * 0.0025 + this.x * 0.012 + this.waveOffset) * 0.45;
            this.x += this.vx;
            this.y += this.vy + waveY;
          } else if (currentTheme.style === 'flow') {
            // BitePulse: horizontal conversion stream flow with smooth horizontal drift
            this.x += this.vx * 1.25 + 0.22;
            this.y += this.vy * 0.7;
          } else if (currentTheme.style === 'orderly') {
            // TO-DO: precise structured motion, orthogonal drift
            this.x += (Math.abs(this.vx) > 0.15 ? Math.sign(this.vx) * 0.25 : 0);
            this.y += this.vy * 0.8;
          } else if (currentTheme.style === 'lifestyle') {
            // WardrobeWhiz: soft floating curved path
            const curve = Math.cos(time * 0.0018 + this.y * 0.008) * 0.3;
            this.x += this.vx + curve;
            this.y += this.vy;
          } else {
            // NovaCart & Default: analytical network drift
            this.x += this.vx;
            this.y += this.vy;
          }

          // Beacon periodic pulse for DIRS
          if (this.isBeacon) {
            this.beaconPulse += 0.035;
          }

          // Twinkle effect
          this.twinklePhase += this.twinkleSpeed;
          this.alpha = this.baseAlpha + Math.sin(this.twinklePhase) * 0.16;
          this.alpha = Math.max(0.08, Math.min(0.9, this.alpha));

          // Mouse influence
          if (mouse.active) {
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const dist = Math.hypot(dx, dy);

            if (dist < mouse.radius && dist > 1) {
              const force = (1 - dist / mouse.radius) * 0.035;
              const dir = this.layer === 2 ? 1 : -0.7;
              this.vx += (dx / dist) * force * dir;
              this.vy += (dy / dist) * force * dir;

              this.vx *= 0.98;
              this.vy *= 0.98;
            }
          }

          // Ripples influence
          for (let i = 0; i < ripples.length; i++) {
            const r = ripples[i];
            const dx = this.x - r.x;
            const dy = this.y - r.y;
            const dist = Math.hypot(dx, dy);
            const ringDist = Math.abs(dist - r.currentRadius);

            if (ringDist < 25) {
              const push = (1 - ringDist / 25) * r.strength * 0.6;
              const angle = Math.atan2(dy, dx);
              this.vx += Math.cos(angle) * push;
              this.vy += Math.sin(angle) * push;
            }
          }

          // Wrap around edges seamlessly
          if (this.x < -20) this.x = width + 20;
          if (this.x > width + 20) this.x = -20;
          if (this.y < -20) this.y = height + 20;
          if (this.y > height + 20) this.y = -20;
        }
      }

      draw() {
        const cr = Math.round(this.color.r);
        const cg = Math.round(this.color.g);
        const cb = Math.round(this.color.b);

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${cr}, ${cg}, ${cb}, ${this.alpha})`;
        ctx.fill();

        // DIRS Beacon Radar rings
        if (this.isBeacon && themeRef.current.style === 'beacon') {
          const pulseRadius = (Math.sin(this.beaconPulse) * 0.5 + 0.5) * 16 + this.size;
          const pulseAlpha = (1 - (pulseRadius / (16 + this.size))) * 0.45;
          ctx.beginPath();
          ctx.arc(this.x, this.y, pulseRadius, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(239, 68, 68, ${pulseAlpha})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // Soft outer glow on foreground data particles
        if (this.layer === 2 && this.alpha > 0.4) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 2.4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${cr}, ${cg}, ${cb}, ${this.alpha * 0.16})`;
          ctx.fill();
        }
      }
    }

    // Resize Handler
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.scale(dpr, dpr);

      // Re-initialize particles if needed
      if (particles.length === 0) {
        for (let i = 0; i < particleCount; i++) {
          particles.push(new Particle(i));
        }
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });

    // Pointer Events on Window (Canvas is pointer-events: none)
    const handlePointerMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
      mouse.active = true;
    };

    const handlePointerLeave = () => {
      mouse.active = false;
    };

    const handleClick = (e) => {
      if (prefersReducedMotion) return;
      ripples.push({
        x: e.clientX,
        y: e.clientY,
        currentRadius: 0,
        maxRadius: 180,
        strength: 0.85,
        alpha: 0.35
      });
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    window.addEventListener('pointerleave', handlePointerLeave, { passive: true });
    window.addEventListener('click', handleClick, { passive: true });

    // Page Visibility change
    let isTabVisible = true;
    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
      if (isTabVisible && !animationFrameId) {
        render();
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    // Main Render Loop
    let lastTime = performance.now();

    const render = () => {
      if (!isTabVisible) {
        animationFrameId = null;
        return;
      }

      const now = performance.now();
      const delta = Math.min(now - lastTime, 64);
      lastTime = now;

      const currentTheme = themeRef.current;

      // Smooth mouse lerp
      if (mouse.active) {
        mouse.x += (mouse.targetX - mouse.x) * 0.12;
        mouse.y += (mouse.targetY - mouse.y) * 0.12;
      }

      // Draw deep-space background (#080A10 with subtle radial space gradient)
      ctx.fillStyle = '#080A10';
      ctx.fillRect(0, 0, width, height);

      // Atmospheric radial glow matching active project tone
      const lr = currentTheme.lineColor.r;
      const lg = currentTheme.lineColor.g;
      const lb = currentTheme.lineColor.b;

      const radialGlow = ctx.createRadialGradient(
        width * 0.5,
        height * 0.35,
        50,
        width * 0.5,
        height * 0.5,
        width * 0.85
      );
      radialGlow.addColorStop(0, `rgba(${lr}, ${lg}, ${lb}, 0.08)`);
      radialGlow.addColorStop(0.5, 'rgba(10, 14, 26, 0.3)');
      radialGlow.addColorStop(1, 'rgba(8, 10, 16, 0)');
      ctx.fillStyle = radialGlow;
      ctx.fillRect(0, 0, width, height);

      // Update & Draw Ripples
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.currentRadius += delta * 0.28;
        const progress = r.currentRadius / r.maxRadius;
        r.alpha = (1 - progress) * 0.25;

        if (progress >= 1) {
          ripples.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(r.x, r.y, r.currentRadius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${lr}, ${lg}, ${lb}, ${r.alpha})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }

      // Update Particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update(now);
      }

      // Draw Constellation Lines between nearby mid/near particles (Desktop/Tablet only)
      if (window.innerWidth >= 768 && !prefersReducedMotion) {
        const maxLineDist = currentTheme.maxLineDist || 85;
        for (let i = 0; i < particles.length; i++) {
          const p1 = particles[i];
          if (p1.layer === 0) continue; // skip distant stars for performance

          for (let j = i + 1; j < particles.length; j++) {
            const p2 = particles[j];
            if (p2.layer === 0) continue;

            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const dist = Math.hypot(dx, dy);

            if (dist < maxLineDist) {
              const lineAlpha = (1 - dist / maxLineDist) * 0.16 * Math.min(p1.alpha, p2.alpha);
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.strokeStyle = `rgba(${lr}, ${lg}, ${lb}, ${lineAlpha})`;
              ctx.lineWidth = 0.75;
              ctx.stroke();
            }
          }
        }
      }

      // Draw Particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].draw();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerleave', handlePointerLeave);
      window.removeEventListener('click', handleClick);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 w-full h-full"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  );
}
