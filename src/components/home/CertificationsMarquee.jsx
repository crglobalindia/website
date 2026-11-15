import React from 'react';
import { ShieldCheck, Award, CheckCircle, ExternalLink } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function CertificationsMarquee({ onViewAllCertifications }) {
  const certItems = siteConfig.certifications;

  return (
    <section className="py-16 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-10 text-center sm:text-left gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 uppercase tracking-widest font-mono">
              <ShieldCheck className="w-4 h-4 text-amber-600" />
              <span>STATUTORY COMPLIANCE & ACCREDITATIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 font-display mt-1">
              Authorized by Government Export Councils & International Bodies
            </h2>
          </div>

          <button
            onClick={onViewAllCertifications}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-900 hover:text-amber-600 transition-colors bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm"
          >
            <span>View All Certificates & Licenses</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {certItems.slice(0, 8).map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group hover:border-amber-400"
            >
              <div className="space-y-2.5">
                <div className="flex items-center justify-between">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 flex items-center justify-center font-bold text-xs font-mono">
                    {cert.id.substring(0, 3).toUpperCase()}
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600 font-semibold">
                    {cert.tag}
                  </span>
                </div>

                <h3 className="font-bold text-slate-900 text-xs sm:text-sm group-hover:text-amber-700 transition-colors leading-snug">
                  {cert.name}
                </h3>

                <p className="text-[11px] text-slate-500 line-clamp-2">
                  {cert.description}
                </p>
              </div>

              <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500">
                <span className="truncate">{cert.code}</span>
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500 shrink-0 ml-1" />
              </div>
            </div>
          ))}
        </div>

        {/* Pre-Shipment Inspection Strip */}
        <div className="mt-8 bg-white border border-slate-200 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-slate-900">Pre-Shipment Inspection Supported:</span>
              <span className="ml-1 text-slate-600">
                Independent sampling, seal verification, and lab reports by SGS, Geo-Chem, Intertek, or Cotecna upon buyer request.
              </span>
            </div>
          </div>
          <span className="font-mono text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded border border-emerald-200 shrink-0">
            100% INSPECTION READY
          </span>
        </div>

      </div>
    </section>
  );
}
