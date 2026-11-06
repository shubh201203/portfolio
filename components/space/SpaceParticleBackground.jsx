'use client';

import React, { useEffect, useRef } from 'react';

export default function SpaceParticleBackground() {
  const canvasRef = useRef(null);

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
    const colors = [
      { r: 59, g: 130, b: 246 },  // Electric Blue (#3B82F6)
      { r: 20, g: 184, b: 166 },  // Cyan (#14B8A6)
      { r: 245, g: 245, b: 244 }, // Subtle White Star (#F5F5F4)
      { r: 168, g: 85, b: 247 },  // Restrained Violet (#A855F7)
    ];

    class Particle {
      constructor() {
        this.reset(true);
      }

      reset(initial = false) {
        this.x = Math.random() * width;
        this.y = initial ? Math.random() * height : (Math.random() < 0.5 ? -10 : height + 10);
        
        // Depth layer: 0 = far, 1 = mid, 2 = near
        this.layer = Math.random() < 0.55 ? 0 : (Math.random() < 0.75 ? 1 : 2);

        if (this.layer === 0) {
          // Distant star
          this.size = Math.random() * 0.9 + 0.6;
          this.baseAlpha = Math.random() * 0.35 + 0.15;
          this.speed = Math.random() * 0.12 + 0.04;
          this.color = colors[2]; // mostly subtle white
        } else if (this.layer === 1) {
          // Mid-field particle
          this.size = Math.random() * 1.4 + 1.1;
          this.baseAlpha = Math.random() * 0.45 + 0.25;
          this.speed = Math.random() * 0.22 + 0.08;
          this.color = Math.random() < 0.7 ? colors[0] : colors[1];
        } else {
          // Foreground data particle
          this.size = Math.random() * 2.0 + 1.8;
          this.baseAlpha = Math.random() * 0.55 + 0.35;
          this.speed = Math.random() * 0.35 + 0.15;
          this.color = colors[Math.floor(Math.random() * colors.length)];
        }

        const angle = Math.random() * Math.PI * 2;
        this.vx = Math.cos(angle) * this.speed;
        this.vy = Math.sin(angle) * this.speed - 0.08; // subtle upward drift
        
        this.alpha = this.baseAlpha;
        this.twinkleSpeed = Math.random() * 0.02 + 0.008;
        this.twinklePhase = Math.random() * Math.PI * 2;
      }

      update() {
        if (!prefersReducedMotion) {
          this.x += this.vx;
          this.y += this.vy;

          // Twinkle effect
          this.twinklePhase += this.twinkleSpeed;
          this.alpha = this.baseAlpha + Math.sin(this.twinklePhase) * 0.18;
          this.alpha = Math.max(0.08, Math.min(0.9, this.alpha));

          // Mouse influence (gentle magnetic curve)
          if (mouse.active) {
            const dx = mouse.x - this.x;
            const dy = mouse.y - this.y;
            const dist = Math.hypot(dx, dy);

            if (dist < mouse.radius && dist > 1) {
              const force = (1 - dist / mouse.radius) * 0.035;
              // Gentle attraction for foreground, slight repulsion for background
              const dir = this.layer === 2 ? 1 : -0.7;
              this.vx += (dx / dist) * force * dir;
              this.vy += (dy / dist) * force * dir;

              // Dampen velocity to prevent runaway speed
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
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.alpha})`;
        ctx.fill();

        // Soft outer glow on foreground data particles
        if (this.layer === 2 && this.alpha > 0.4) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.size * 2.4, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${this.color.r}, ${this.color.g}, ${this.color.b}, ${this.alpha * 0.15})`;
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
          particles.push(new Particle());
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

      // Smooth mouse lerp
      if (mouse.active) {
        mouse.x += (mouse.targetX - mouse.x) * 0.12;
        mouse.y += (mouse.targetY - mouse.y) * 0.12;
      }

      // Draw deep-space background (#080A10 with subtle radial space gradient)
      ctx.fillStyle = '#080A10';
      ctx.fillRect(0, 0, width, height);

      // Subtle atmospheric deep-space radial glow
      const radialGlow = ctx.createRadialGradient(
        width * 0.5,
        height * 0.35,
        50,
        width * 0.5,
        height * 0.5,
        width * 0.85
      );
      radialGlow.addColorStop(0, 'rgba(15, 23, 42, 0.45)');
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
        ctx.strokeStyle = `rgba(59, 130, 246, ${r.alpha})`;
        ctx.lineWidth = 1.2;
        ctx.stroke();
      }

      // Update Particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
      }

      // Draw Constellation Lines between nearby mid/near particles (Desktop/Tablet only)
      if (window.innerWidth >= 768 && !prefersReducedMotion) {
        const maxLineDist = 85;
        for (let i = 0; i < particles.length; i++) {
          const p1 = particles[i];
          if (p1.layer === 0) continue; // skip distant stars for line performance

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
              ctx.strokeStyle = `rgba(59, 130, 246, ${lineAlpha})`;
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
