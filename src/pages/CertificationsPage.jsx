import React from 'react';
import PageHeader from '../components/common/PageHeader';
import { ShieldCheck, Award, FileCheck, CheckCircle2, ExternalLink, Check, FlaskConical } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function CertificationsPage({ setActivePage, onOpenRFQ }) {
  const certs = siteConfig.certifications;

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <PageHeader
        title="Certifications, Compliance & Statutory Licenses"
        subtitle="Full statutory authorization under Indian Export Promotion Councils and international food safety accreditation bodies."
        breadcrumb="Certifications"
        onNavHome={() => setActivePage('home')}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Intro Banner */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 font-mono uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4 text-amber-600" />
              <span>ZERO-COMPROMISE COMPLIANCE STANDARD</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 font-display">
              Verified Legal Standing & International Food Safety
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 max-w-2xl">
              Cross-border agricultural trade requires verifiable legal authorization. Every license listed below is actively maintained, audited annually, and available for due diligence by overseas procurement desks.
            </p>
          </div>

          <button
            onClick={onOpenRFQ}
            className="bg-navy-900 hover:bg-navy-800 text-amber-400 font-bold px-6 py-3 rounded-xl text-xs sm:text-sm transition-all shadow-md shrink-0"
          >
            Request Certified Due Diligence Pack
          </button>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {certs.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between group hover:border-amber-400"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 flex items-center justify-center font-bold text-sm font-mono">
                    {cert.id.substring(0, 3).toUpperCase()}
                  </div>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded bg-slate-100 text-slate-700 font-bold">
                    {cert.tag}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-navy-900 group-hover:text-amber-700 transition-colors font-display">
                    {cert.name}
                  </h3>
                  <div className="text-xs text-amber-700 font-medium mt-1">
                    Issuing Body: {cert.authority}
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {cert.description}
                </p>
              </div>

              <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-navy-900">{cert.code}</span>
                <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 text-[11px]">
                  <Check className="w-3 h-3 text-emerald-600" />
                  <span>Active</span>
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Pre-Shipment Inspection Protocol Detailed Section */}
        <div className="bg-navy-950 text-white rounded-2xl border border-navy-800 p-8 sm:p-10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-navy-800 gap-4">
            <div>
              <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
                <FlaskConical className="w-4 h-4" />
                <span>THIRD-PARTY LABORATORY SURVEILLANCE</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white mt-1">
                Independent Pre-Shipment Inspection (PSI)
              </h3>
            </div>
            <span className="text-xs font-mono px-3 py-1.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-bold self-start sm:self-center">
              SGS • GEO-CHEM • INTERTEK
            </span>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed max-w-3xl">
            To provide complete confidence to our overseas buyers, <strong className="text-white">CR Global</strong> welcomes and coordinates third-party pre-shipment inspections for every export container. Independent surveyors collect composite samples directly from the factory line or container terminal before custom sealing.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2 text-xs">
            <div className="p-4 rounded-xl bg-navy-900 border border-navy-800 space-y-1">
              <span className="font-bold text-amber-400 block">Purity & Admixture</span>
              <p className="text-slate-400">Micro-analysis for foreign seeds, dust, stone particles, and organic matter.</p>
            </div>
            <div className="p-4 rounded-xl bg-navy-900 border border-navy-800 space-y-1">
              <span className="font-bold text-amber-400 block">Aflatoxin Screening</span>
              <p className="text-slate-400">Testing for B1, B2, G1, and G2 toxins strictly complying with European limits (&lt;4 ppb).</p>
            </div>
            <div className="p-4 rounded-xl bg-navy-900 border border-navy-800 space-y-1">
              <span className="font-bold text-amber-400 block">Pesticide Residue (MRL)</span>
              <p className="text-slate-400">Multi-residue screening per EU Regulation 396/2005 and US FDA food safety rules.</p>
            </div>
            <div className="p-4 rounded-xl bg-navy-900 border border-navy-800 space-y-1">
              <span className="font-bold text-amber-400 block">Microbiological Testing</span>
              <p className="text-slate-400">Zero tolerance certification for Salmonella in 25g, E. coli, and Coliform count.</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
