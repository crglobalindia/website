import React from 'react';
import { Globe2, Package, History, CheckCheck } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function MetricsStrip() {
  const metricIcons = [
    <Globe2 className="w-7 h-7 text-amber-500" />,
    <Package className="w-7 h-7 text-emerald-500" />,
    <History className="w-7 h-7 text-blue-500" />,
    <CheckCheck className="w-7 h-7 text-purple-500" />
  ];

  return (
    <section className="relative -mt-8 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white rounded-2xl shadow-xl border border-slate-200/90 p-6 sm:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {siteConfig.metrics.map((item, idx) => (
            <div key={idx} className={`flex items-center gap-4 ${idx > 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''}`}>
              <div className="w-14 h-14 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center shrink-0 shadow-sm">
                {metricIcons[idx % metricIcons.length]}
              </div>
              <div>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl sm:text-3xl font-extrabold text-navy-900 font-display">
                    {item.value}
                  </span>
                  {item.unit && (
                    <span className="text-xs font-semibold text-slate-500">{item.unit}</span>
                  )}
                </div>
                <div className="text-sm font-bold text-slate-800 leading-tight">
                  {item.label}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  {item.note}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
