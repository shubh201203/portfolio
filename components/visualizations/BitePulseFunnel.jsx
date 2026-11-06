'use client';

import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  Cell 
} from 'recharts';

const funnelData = [
  { step: 'App Visit', conversion: 100, dropoff: '0%', count: '240,000' },
  { step: 'Restaurant View', conversion: 64, dropoff: '-36%', count: '153,600' },
  { step: 'Add to Cart', conversion: 38, dropoff: '-26%', count: '91,200' },
  { step: 'Checkout', conversion: 24, dropoff: '-14%', count: '57,600' },
  { step: 'Payment', conversion: 18, dropoff: '-6%', count: '43,200' },
  { step: 'Completed', conversion: 14.2, dropoff: '-3.8%', count: '34,080' },
];

const colors = ['#3B82F6', '#2563EB', '#1D4ED8', '#1E40AF', '#172554', '#10B981'];

export default function BitePulseFunnel() {
  return (
    <div className="w-full p-4 rounded-2xl bg-[#090C13] border border-white/10 font-mono text-xs space-y-3">
      <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[11px]">
        <span className="font-bold text-white uppercase tracking-wider">
          Ordering Funnel Conversion &amp; Friction
        </span>
        <span className="text-emerald-400 font-bold">14.2% Net End-to-End</span>
      </div>

      <div className="h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={funnelData} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
            <XAxis type="number" domain={[0, 100]} tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 10 }} unit="%" />
            <YAxis dataKey="step" type="category" tick={{ fill: 'rgba(255,255,255,0.7)', fontSize: 10 }} width={90} />
            <Tooltip
              contentStyle={{ backgroundColor: '#0F131D', borderColor: 'rgba(255,255,255,0.15)', borderRadius: '12px', fontSize: '11px', color: '#fff' }}
              formatter={(val, name, item) => [`${val}% (${item.payload.count} users)`, 'Conversion']}
            />
            <Bar dataKey="conversion" radius={[0, 6, 6, 0]}>
              {funnelData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-3 gap-2 pt-2 border-t border-white/10 text-[10px] text-slate-400 text-center">
        <div>Cart Abandon: <strong className="text-white">26.0%</strong></div>
        <div>Checkout Drop: <strong className="text-white">14.0%</strong></div>
        <div>Pay Falloff: <strong className="text-white">6.0%</strong></div>
      </div>
    </div>
  );
}
