import React, { useEffect, useRef, useState } from 'react';
import { Database, GitBranch, Layers, Sparkles } from 'lucide-react';

export default function HeroVisual() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [activeMetricIndex, setActiveMetricIndex] = useState(0);

  const metrics = [
    { label: 'GRAIN ISOLATION', val: 'ORDER_ID × ITEM_ID', status: 'STRICT' },
    { label: 'RECONCILIATION', val: 'SQL == DAX', status: '100.0%' },
    { label: 'RECOVERY RATE', val: '142 CUSTOMER KEYS', status: 'DETERMINISTIC' },
    { label: 'SYNTHETIC CORPUS', val: '104,852 GRAIN ROWS', status: 'AUDITED' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMetricIndex((prev) => (prev + 1) % metrics.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [metrics.length]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = canvas.offsetWidth * window.devicePixelRatio);
    let height = (canvas.height = canvas.offsetHeight * window.devicePixelRatio);

    // Analytical Nodes
    const nodes = Array.from({ length: 24 }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      radius: Math.random() * 2.2 + 1.2,
      layer: i % 3,
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render subtle background grid
      ctx.strokeStyle = 'rgba(17, 18, 21, 0.05)';
      ctx.lineWidth = 1;
      const step = 40 * window.devicePixelRatio;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw connection vectors
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110 * window.devicePixelRatio) {
            const alpha = 1 - dist / (110 * window.devicePixelRatio);
            ctx.strokeStyle = `rgba(17, 18, 21, ${alpha * 0.12})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Update & draw nodes
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;

        if (n.x < 0 || n.x > width) n.vx *= -1;
        if (n.y < 0 || n.y > height) n.vy *= -1;

        ctx.fillStyle = n.layer === 0 ? '#111215' : n.layer === 1 ? '#1D4ED8' : '#717885';
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      height = canvas.height = canvas.offsetHeight * window.devicePixelRatio;
    };

    window.addEventListener('resize', handleResize);
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    setMousePos({
      x: Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width)),
      y: Math.max(0, Math.min(1, (e.clientY - rect.top) / rect.height)),
    });
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full h-[380px] sm:h-[440px] lg:h-[480px] rounded-3xl bg-white border border-[#111215]/15 shadow-editorial overflow-hidden flex flex-col justify-between p-6 sm:p-8 select-none"
    >
      {/* Background Interactive Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full pointer-events-none" />

      {/* Top Telemetry Header */}
      <div className="relative z-10 flex items-center justify-between pb-4 border-b border-[#111215]/10 font-mono text-[11px] text-[#111215]/70">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#111215] animate-ping" />
          <span className="font-bold text-[#111215] tracking-wider uppercase">ANALYTICS ENGINE // LIVE</span>
        </div>
        <div className="flex items-center gap-2">
          <span>X: {(mousePos.x * 100).toFixed(0)}%</span>
          <span>•</span>
          <span>Y: {(mousePos.y * 100).toFixed(0)}%</span>
        </div>
      </div>

      {/* Centerpiece: Analytical Schematics Overlay */}
      <div className="relative z-10 my-auto grid grid-cols-1 gap-3 max-w-sm">
        <div className="p-4 rounded-2xl bg-[#F6F4ED]/90 backdrop-blur-md border border-[#111215]/10 shadow-sm space-y-1 transition-all">
          <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-[#111215]/60 font-semibold">
            <span className="flex items-center gap-1.5">
              <Database className="w-3.5 h-3.5 text-[#1D4ED8]" />
              <span>Core Architecture</span>
            </span>
            <span className="px-1.5 py-0.5 rounded bg-[#111215] text-[#D8F243] font-bold">STAR SCHEMA</span>
          </div>
          <div className="text-base font-headline font-bold text-[#111215]">
            PostgreSQL 18 Warehouse
          </div>
          <div className="text-xs text-[#111215]/70 font-mono">
            8 Relational Tables • Strict Grain Isolation
          </div>
        </div>

        <div className="p-4 rounded-2xl bg-[#F6F4ED]/90 backdrop-blur-md border border-[#111215]/10 shadow-sm space-y-1 transition-all">
          <div className="flex items-center justify-between text-[10px] font-mono uppercase tracking-wider text-[#111215]/60 font-semibold">
            <span className="flex items-center gap-1.5">
              <Layers className="w-3.5 h-3.5 text-[#111215]" />
              <span>Semantic Modeling</span>
            </span>
            <span className="px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 font-bold">100% RECONCILED</span>
          </div>
          <div className="text-base font-headline font-bold text-[#111215]">
            Power BI Desktop + DAX
          </div>
          <div className="text-xs text-[#111215]/70 font-mono">
            30+ Measures • 6 Executive Report Pages
          </div>
        </div>
      </div>

      {/* Bottom Live Metric Ticker */}
      <div className="relative z-10 pt-4 border-t border-[#111215]/10 flex flex-wrap items-center justify-between gap-2 font-mono text-[11px]">
        <div className="flex items-center gap-2">
          <GitBranch className="w-3.5 h-3.5 text-[#111215]/50" />
          <span className="text-[#111215]/60 uppercase">{metrics[activeMetricIndex].label}:</span>
          <span className="font-bold text-[#111215]">{metrics[activeMetricIndex].val}</span>
        </div>
        <span className="px-2 py-0.5 rounded-full bg-[#111215]/5 border border-[#111215]/10 text-[10px] font-bold text-[#111215]">
          {metrics[activeMetricIndex].status}
        </span>
      </div>
    </div>
  );
}
