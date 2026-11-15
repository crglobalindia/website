import React from 'react';
import { X, Send, MessageCircle, FileText, CheckCircle2, ShieldCheck, Box, Anchor, Sparkles } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function ProductDetailModal({ product, isOpen, onClose, onEnquire }) {
  if (!isOpen || !product) return null;

  const whatsappMsg = `Hello CR Global, I need latest FOB/CIF export prices for ${product.name} (HS Code: ${product.hsCode}). Please share available grades and shipping schedule.`;
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(whatsappMsg)}`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-navy-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto border border-slate-200">
        
        {/* Modal Header */}
        <div className="sticky top-0 z-20 bg-navy-950 text-white p-6 border-b border-navy-800 flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-400 border border-amber-500/30 font-bold uppercase">
                HS CODE: {product.hsCode}
              </span>
              <span className="text-slate-400 text-xs">•</span>
              <span className="text-xs text-slate-300 font-medium">{product.categoryLabel}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold font-display text-white mt-1">
              {product.name}
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 italic">
              Botanical Name: {product.botanicalName}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-navy-800 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Overview & Origin Snapshot */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
              COMMODITY OVERVIEW & SOURCING
            </h4>
            <p className="text-slate-700 text-sm leading-relaxed">
              {product.description}
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[11px] text-slate-500 block">Indian Origin</span>
                <span className="text-xs font-bold text-navy-900">{product.origin}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[11px] text-slate-500 block">Purity Standard</span>
                <span className="text-xs font-bold text-emerald-700">{product.purity}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[11px] text-slate-500 block">Moisture Limit</span>
                <span className="text-xs font-bold text-navy-900">{product.moisture}</span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                <span className="text-[11px] text-slate-500 block">Shelf Life</span>
                <span className="text-xs font-bold text-navy-900">{product.shelfLife}</span>
              </div>
            </div>
          </div>

          {/* Technical Specifications Table */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
                LABORATORY SPECIFICATIONS & CHEMICAL PARAMETERS
              </h4>
              <span className="text-[11px] text-emerald-700 font-semibold bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-200">
                SGS / Geo-Chem Verified
              </span>
            </div>

            <div className="border border-slate-200 rounded-xl overflow-hidden shadow-2xs">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                  <tr>
                    <th className="py-2.5 px-4">Test Parameter</th>
                    <th className="py-2.5 px-4">Guaranteed Export Specification</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50">
                    <td className="py-2 px-4 font-semibold text-slate-700">Purity Standard</td>
                    <td className="py-2 px-4 text-slate-900 font-mono">{product.purity}</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-2 px-4 font-semibold text-slate-700">Moisture Content</td>
                    <td className="py-2 px-4 text-slate-900 font-mono">{product.moisture}</td>
                  </tr>
                  <tr className="hover:bg-slate-50">
                    <td className="py-2 px-4 font-semibold text-slate-700">Foreign Matter / Admixture</td>
                    <td className="py-2 px-4 text-slate-900 font-mono">{product.admixture}</td>
                  </tr>
                  {product.specs && Object.entries(product.specs).map(([param, val], idx) => (
                    <tr key={idx} className="hover:bg-slate-50">
                      <td className="py-2 px-4 font-semibold text-slate-700">{param}</td>
                      <td className="py-2 px-4 text-slate-900 font-mono">{val}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Available Grades */}
          {product.gradeOptions && (
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
                COMMERCIAL GRADES AVAILABLE
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {product.gradeOptions.map((grade, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0" />
                    <span className="font-medium text-slate-800">{grade}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Container Capacity & Logistics Parameters */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider font-mono">
              CONTAINER STUFFING & EXPORT PACKAGING
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-navy-50/60 border border-navy-100 space-y-1">
                <span className="text-[11px] font-bold text-navy-800 uppercase font-mono">20ft FCL Payload</span>
                <div className="text-lg font-extrabold text-navy-900 font-display">{product.fcl20}</div>
                <p className="text-[11px] text-slate-500">Standard dry container weight</p>
              </div>

              <div className="p-4 rounded-xl bg-navy-50/60 border border-navy-100 space-y-1">
                <span className="text-[11px] font-bold text-navy-800 uppercase font-mono">40ft FCL Payload</span>
                <div className="text-lg font-extrabold text-navy-900 font-display">{product.fcl40}</div>
                <p className="text-[11px] text-slate-500">High cube container capacity</p>
              </div>

              <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200 space-y-1">
                <span className="text-[11px] font-bold text-amber-900 uppercase font-mono">Minimum Order Quantity</span>
                <div className="text-sm font-extrabold text-amber-950 font-display mt-1">{product.moq}</div>
                <p className="text-[11px] text-amber-700">Commercial export trial</p>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1">
              <div><strong className="text-slate-900">Standard Packaging Options:</strong> {product.packaging}</div>
              <div><strong className="text-slate-900">Crop Harvest & Availability:</strong> {product.cropSeason}</div>
              <div><strong className="text-slate-900">Loading Gateway Ports:</strong> Mundra Port (INMUN1), Nhava Sheva JNPT (INNSA1), Kandla Port</div>
            </div>
          </div>

        </div>

        {/* Modal Footer / CTAs */}
        <div className="sticky bottom-0 z-20 bg-slate-50 border-t border-slate-200 p-4 sm:p-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-slate-500 hidden sm:block">
            Need customized packaging or private OEM branding? Mention it in the RFQ.
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors w-1/2 sm:w-auto"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Rates</span>
            </a>

            <button
              onClick={() => {
                onClose();
                onEnquire(product);
              }}
              className="bg-navy-900 hover:bg-navy-800 text-amber-400 font-bold py-2.5 px-6 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors w-1/2 sm:w-auto shadow-md"
            >
              <Send className="w-4 h-4" />
              <span>Request Formal RFQ</span>
            </button>
          </div>
        </div>

      </div>

    </div>
  );
}
