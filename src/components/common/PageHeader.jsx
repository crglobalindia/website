import React from 'react';
import { ChevronRight, Home, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function PageHeader({ title, subtitle, breadcrumb, onNavHome }) {
  return (
    <div className="relative bg-navy-950 text-white py-16 sm:py-20 border-b border-navy-800 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_70%_20%,rgba(217,119,6,0.25),transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b10_1px,transparent_1px),linear-gradient(to_bottom,#1e293b10_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-4">
          <button
            onClick={onNavHome}
            className="hover:text-amber-400 transition-colors flex items-center gap-1 text-slate-300"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-amber-400 font-bold">{breadcrumb || title}</span>
        </nav>

        {/* Title & Subtitle */}
        <div className="max-w-3xl space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>DGFT IEC: {siteConfig.company.iec} • APEDA Registered</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-display tracking-tight text-white">
            {title}
          </h1>

          {subtitle && (
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              {subtitle}
            </p>
          )}
        </div>

      </div>
    </div>
  );
}
