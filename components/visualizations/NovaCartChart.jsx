'use client';

import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  CartesianGrid 
} from 'recharts';

const data = [
  { month: 'Q1 22', realized: 38.5, settled: 36.2, margin: 28.5 },
  { month: 'Q2 22', realized: 46.2, settled: 43.1, margin: 29.2 },
  { month: 'Q3 22', realized: 54.8, settled: 51.5, margin: 30.1 },
  { month: 'Q4 22', realized: 68.4, settled: 64.2, margin: 31.4 },
  { month: 'Q1 23', realized: 72.1, settled: 67.8, margin: 30.8 },
  { month: 'Q2 23', realized: 81.6, settled: 76.9, margin: 31.2 },
  { month: 'Q3 23', realized: 93.4, settled: 87.6, margin: 30.9 },
  { month: 'Q4 23', realized: 112.5, settled: 105.4, margin: 31.8 },
  { month: 'Q1 24', realized: 124.8, settled: 117.2, margin: 30.5 },
  { month: 'Q2 24', realized: 142.3, settled: 134.1, margin: 31.1 },
  { month: 'Total', realized: 847.62, settled: 796.75, margin: 30.93 },
];

export default function NovaCartChart() {
  return (
    <div className="w-full h-[280px] sm:h-[320px] p-4 rounded-2xl bg-[#090C13] border border-white/10 font-mono text-xs">
      <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3 text-[11px]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
          <span className="font-bold text-white uppercase tracking-wider">
            Reconciled Financial Trajectory (₹ Millions)
          </span>
        </div>
        <div className="flex items-center gap-4 text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500" />
            <span>Realized Rev</span>
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
            <span>Settled Cash</span>
          </span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height="84%">
        <AreaChart data={data.slice(0, 10)} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="realizedGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.4} />
              <stop offset="95%" stopColor="#3B82F6" stopOpacity={0.0} />
            </linearGradient>
            <linearGradient id="settledGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#10B981" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#10B981" stopOpacity={0.0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" />
          <XAxis dataKey="month" stroke="rgba(255,255,255,0.3)" tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 10 }} />
          <YAxis stroke="rgba(255,255,255,0.3)" tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 10 }} />
          <Tooltip 
            contentStyle={{ backgroundColor: '#0F131D', borderColor: 'rgba(255,255,255,0.15)', borderRadius: '12px', fontSize: '11px', color: '#fff' }}
            formatter={(value) => [`₹${value}M`, '']}
          />
          <Area type="monotone" dataKey="realized" stroke="#3B82F6" strokeWidth={2} fillOpacity={1} fill="url(#realizedGrad)" name="Realized" />
          <Area type="monotone" dataKey="settled" stroke="#10B981" strokeWidth={2} fillOpacity={1} fill="url(#settledGrad)" name="Settled" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
