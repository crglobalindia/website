import React from 'react';
import { Eye, Send, FileText, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';

export default function ProductCard({ product, onViewDetails, onEnquire }) {
  // Category-based color accents
  const getBadgeStyle = (category) => {
    switch (category) {
      case 'spices':
        return 'bg-amber-500/10 text-amber-800 border-amber-300';
      case 'grains':
        return 'bg-blue-500/10 text-blue-800 border-blue-300';
      case 'oilseeds':
        return 'bg-emerald-500/10 text-emerald-800 border-emerald-300';
      default:
        return 'bg-purple-500/10 text-purple-800 border-purple-300';
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between group">
      
      {/* Card Header & Visual Preview */}
      <div>
        <div className="relative h-44 bg-gradient-to-br from-navy-950 via-slate-900 to-navy-900 p-5 flex flex-col justify-between overflow-hidden">
          {/* Subtle geometric pattern */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:16px_16px]" />
          
          <div className="relative z-10 flex items-start justify-between">
            <span className={`text-[10px] font-bold font-mono px-2.5 py-1 rounded-md border ${getBadgeStyle(product.category)} bg-white/95 shadow-2xs`}>
              {product.categoryLabel}
            </span>

            {product.featured && (
              <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500 text-navy-950 font-mono shadow-xs">
                <Sparkles className="w-3 h-3" />
                <span>TOP EXPORT</span>
              </span>
            )}
          </div>

          <div className="relative z-10">
            <div className="text-[11px] font-mono text-amber-300 font-semibold flex items-center gap-1">
              <span>HS CODE:</span>
              <span className="bg-navy-800/80 px-1.5 py-0.5 rounded border border-navy-700 text-white font-bold">
                {product.hsCode}
              </span>
            </div>
            <h3 className="text-lg font-bold text-white font-display leading-snug mt-1 group-hover:text-amber-300 transition-colors">
              {product.name}
            </h3>
            <p className="text-[11px] text-slate-300 italic">
              {product.botanicalName}
            </p>
          </div>
        </div>

        {/* Card Body & Procurement Parameters */}
        <div className="p-5 space-y-3.5 text-xs">
          
          <p className="text-slate-600 line-clamp-2 leading-relaxed">
            {product.description}
          </p>

          <div className="space-y-2 pt-2 border-t border-slate-100">
            <div className="flex items-center justify-between text-slate-600">
              <span className="font-semibold text-slate-500">Origin:</span>
              <span className="font-medium text-slate-800 text-right">{product.origin}</span>
            </div>

            <div className="flex items-center justify-between text-slate-600">
              <span className="font-semibold text-slate-500">Purity Grade:</span>
              <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                {product.purity}
              </span>
            </div>

            <div className="flex items-center justify-between text-slate-600">
              <span className="font-semibold text-slate-500">Moisture Limit:</span>
              <span className="font-mono text-slate-800">{product.moisture}</span>
            </div>

            <div className="flex items-center justify-between text-slate-600">
              <span className="font-semibold text-slate-500">Minimum Order (MOQ):</span>
              <span className="font-semibold text-navy-900">{product.moq}</span>
            </div>
          </div>

          {/* Quick Packaging Tag */}
          <div className="pt-2 border-t border-slate-100">
            <div className="text-[11px] text-slate-500 line-clamp-1">
              <span className="font-semibold text-slate-700">Packaging:</span> {product.packaging}
            </div>
          </div>

        </div>
      </div>

      {/* Card Action Buttons */}
      <div className="p-5 pt-0">
        <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-100">
          <button
            onClick={() => onViewDetails(product)}
            className="w-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold py-2.5 px-3 rounded-xl transition-colors text-xs flex items-center justify-center gap-1.5"
          >
            <Eye className="w-3.5 h-3.5 text-slate-600" />
            <span>Full Specs</span>
          </button>

          <button
            onClick={() => onEnquire(product)}
            className="w-full bg-navy-900 hover:bg-navy-800 text-white font-bold py-2.5 px-3 rounded-xl transition-colors text-xs flex items-center justify-center gap-1.5 shadow-sm group-hover:bg-amber-600 group-hover:text-navy-950"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Enquire</span>
          </button>
        </div>
      </div>

    </div>
  );
}
