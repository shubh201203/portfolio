import React from 'react';

export default function Badge({ status, type = 'default' }) {
  if (type === 'completed' || status === 'Completed') {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
        <span>Completed</span>
      </span>
    );
  }

  if (type === 'in_progress' || status === 'In Progress' || status === 'Case Study / In Development' || status === 'In Development') {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-medium bg-amber-50 text-amber-700 border border-amber-200">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
        <span>{status}</span>
      </span>
    );
  }

  if (type === 'planned' || status === 'Planned') {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-xs font-medium bg-gray-100 text-gray-600 border border-gray-200">
        <span className="w-1.5 h-1.5 rounded-full bg-gray-400"></span>
        <span>Planned</span>
      </span>
    );
  }

  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-50 text-gray-700 border border-gray-200">
      {status}
    </span>
  );
}
