import React, { useRef, useEffect, useState } from 'react';

export default function HeroGenerativeVisualization() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [hoveredNode, setHoveredNode] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.offsetWidth);
    let height = (canvas.height = canvas.parentElement.offsetHeight);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth;
      height = canvas.height = canvas.parentElement.offsetHeight;
      initNodes();
    };

    window.addEventListener('resize', handleResize);

    // Node definitions representing analytical records
    let nodes = [];
    const nodeCount = Math.min(Math.floor((width * height) / 9000), 48);

    const initNodes = () => {
      nodes = [];
      for (let i = 0; i < nodeCount; i++) {
        const u = i / (nodeCount - 1);
        // Base structure: curve resembling cohort decay / power law
        const baseX = width * (0.12 + 0.76 * u);
        const baseY = height * (0.28 + 0.48 * Math.pow(u, 1.4));
        nodes.push({
          x: baseX + (Math.random() - 0.5) * 40,
          y: baseY + (Math.random() - 0.5) * 40,
          baseX: baseX,
          baseY: baseY,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: 2 + Math.random() * 2.5,
          color: i % 7 === 0 ? '#D8F243' : i % 3 === 0 ? '#38BDF8' : '#94A3B8',
          label: i === 0 ? 'M0 (100%)' : i === Math.floor(nodeCount * 0.5) ? 'M6 (64.2%)' : i === nodeCount - 1 ? 'M18 (34.2%)' : null,
          value: `₹${(Math.random() * 80 + 10).toFixed(1)}k`,
          id: `REC_${1000 + i}`
        });
      }
    };

    initNodes();

    // Mouse coordinates
    let mouse = { x: -1000, y: -1000, active: false };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;

      // Find closest node
      let closest = null;
      let minD = 40;
      for (const node of nodes) {
        const d = Math.hypot(node.x - mouse.x, node.y - mouse.y);
        if (d < minD) {
          minD = d;
          closest = node;
        }
      }
      setHoveredNode(closest);
    };

    const handleMouseLeave = () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
      setHoveredNode(null);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    let time = 0;
    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Draw subtle analytical grid lines
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.lineWidth = 1;
      const gridCols = 6;
      for (let i = 1; i < gridCols; i++) {
        const gx = (width / gridCols) * i;
        ctx.beginPath();
        ctx.setLineDash([2, 4]);
        ctx.moveTo(gx, 20);
        ctx.lineTo(gx, height - 20);
        ctx.stroke();
      }

      const gridRows = 4;
      for (let j = 1; j < gridRows; j++) {
        const gy = (height / gridRows) * j;
        ctx.beginPath();
        ctx.setLineDash([2, 4]);
        ctx.moveTo(20, gy);
        ctx.lineTo(width - 20, gy);
        ctx.stroke();
      }
      ctx.setLineDash([]);

      // Update and connect nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];

        // Organic oscillation
        n.x = n.baseX + Math.sin(time + i * 0.5) * 8;
        n.y = n.baseY + Math.cos(time * 0.8 + i * 0.7) * 7;

        // Gentle interactive deflection
        if (mouse.active) {
          const dx = mouse.x - n.x;
          const dy = mouse.y - n.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 120 && dist > 0) {
            const force = (120 - dist) / 120;
            n.x -= (dx / dist) * force * 18;
            n.y -= (dy / dist) * force * 18;
          }
        }

        // Draw connections to nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const n2 = nodes[j];
          const dist = Math.hypot(n.x - n2.x, n.y - n2.y);
          if (dist < 90) {
            const alpha = (1 - dist / 90) * 0.28;
            ctx.strokeStyle = `rgba(148, 163, 184, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(n.x, n.y);
            ctx.lineTo(n2.x, n2.y);
            ctx.stroke();
          }
        }
      }

      // Draw primary spline curve through nodes
      ctx.beginPath();
      ctx.strokeStyle = 'rgba(216, 242, 67, 0.4)';
      ctx.lineWidth = 1.5;
      for (let i = 0; i < nodes.length; i++) {
        if (i === 0) ctx.moveTo(nodes[i].x, nodes[i].y);
        else ctx.lineTo(nodes[i].x, nodes[i].y);
      }
      ctx.stroke();

      // Render node markers
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = n.color;
        ctx.fill();

        if (n.color === '#D8F243') {
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius + 3, 0, Math.PI * 2);
          ctx.strokeStyle = 'rgba(216, 242, 67, 0.3)';
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        // Key labels
        if (n.label) {
          ctx.font = '10px "JetBrains Mono", monospace';
          ctx.fillStyle = '#E2E8F0';
          ctx.fillText(n.label, n.x + 8, n.y - 6);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-full min-h-[360px] sm:min-h-[440px] rounded-3xl border border-white/10 bg-[#0B0D13] p-5 sm:p-6 overflow-hidden flex flex-col justify-between shadow-2xl backdrop-blur-xl group"
    >
      {/* Background Gradients */}
      <div className="absolute -top-24 -right-24 w-72 h-72 bg-blue-600/15 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#D8F243]/10 rounded-full blur-[80px] pointer-events-none" />

      {/* Top Telemetry Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#D8F243] animate-ping" />
          <span className="text-xs font-mono uppercase tracking-wider text-slate-200 font-bold">
            Interactive Analytical Constellation
          </span>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
          <span className="text-[#D8F243]">104,852</span>
          <span>RECORDS INGESTED</span>
        </div>
      </div>

      {/* Canvas Element */}
      <div className="relative flex-1 w-full my-2">
        <canvas ref={canvasRef} className="w-full h-full block cursor-crosshair" />

        {/* Dynamic Tooltip on Hover */}
        {hoveredNode && (
          <div 
            className="absolute z-20 pointer-events-none -translate-x-1/2 -translate-y-full mb-3 px-3 py-1.5 rounded-lg bg-[#08090C]/95 border border-[#D8F243]/50 text-white shadow-xl text-xs font-mono"
            style={{ left: hoveredNode.x, top: hoveredNode.y }}
          >
            <div className="text-[10px] text-[#D8F243] font-bold">{hoveredNode.id}</div>
            <div className="text-[11px] text-slate-200">Value: {hoveredNode.value}</div>
          </div>
        )}
      </div>

      {/* Bottom Technical Ticker */}
      <div className="relative z-10 pt-3 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs font-mono text-slate-400">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D8F243]" />
            <span className="text-slate-300">Cohort M0–M18</span>
          </span>
          <span className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
            <span className="text-slate-300">Pareto 80/20</span>
          </span>
        </div>
        <div className="text-[11px] text-slate-500">
          HOVER OR DRAG NODES TO INTERACT
        </div>
      </div>
    </div>
  );
}
