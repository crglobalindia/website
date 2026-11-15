import React from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight, Award, Truck, Cpu, FlaskConical } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function CompanyOverview({ onLearnMore, onOpenRFQ }) {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual / Credentials Grid (Col 5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-navy-900 border border-navy-800 p-8 text-white">
              
              <div className="flex items-center justify-between pb-6 border-b border-navy-800">
                <div>
                  <span className="text-amber-400 text-xs font-mono font-bold uppercase tracking-wider">
                    ORIGIN INDIA 🇮🇳
                  </span>
                  <h3 className="text-2xl font-extrabold font-display mt-1">
                    Direct Mandi Sourcing
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Cpu className="w-6 h-6" />
                </div>
              </div>

              {/* Sourcing belts */}
              <div className="py-6 space-y-4 text-xs">
                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-navy-800 flex items-center justify-center text-amber-400 font-bold shrink-0">
                    01
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-100 text-sm">Unjha Mandi (Gujarat)</h5>
                    <p className="text-slate-400">The world capital of whole Cumin, Fennel, and Psyllium husk sourcing.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-navy-800 flex items-center justify-center text-emerald-400 font-bold shrink-0">
                    02
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-100 text-sm">Saurashtra Belt (Gujarat)</h5>
                    <p className="text-slate-400">Sweet-kernel Bold HPS Peanuts & White Natural Sesame 99.95% Sortex.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-navy-800 flex items-center justify-center text-blue-400 font-bold shrink-0">
                    03
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-100 text-sm">Indo-Gangetic Basin (Punjab & Haryana)</h5>
                    <p className="text-slate-400">Aged 1121 & 1509 Basmati Rice with exceptional elongation and aroma.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-navy-800 flex items-center justify-center text-purple-400 font-bold shrink-0">
                    04
                  </div>
                  <div>
                    <h5 className="font-bold text-slate-100 text-sm">Guntur (Andhra Pradesh) & Salem</h5>
                    <p className="text-slate-400">Teja S17 high-pungency red chillies and high-curcumin double-polished turmeric.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-navy-800 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1.5 text-amber-400 font-medium">
                  <ShieldCheck className="w-4 h-4" />
                  <span>APEDA & Spices Board Approved</span>
                </span>
                <span className="font-mono text-slate-300">ESTD {siteConfig.company.establishedYear}</span>
              </div>

            </div>
          </div>

          {/* Right Narrative & Corporate Intro (Col 7) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs font-bold uppercase tracking-wider">
                <Award className="w-3.5 h-3.5 text-amber-700" />
                <span>Government Recognized Merchant Exporter</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 font-display tracking-tight">
                Welcome to CR Global: Bridging Indian Agriculture with International Markets
              </h2>
            </div>

            <p className="text-slate-600 text-base leading-relaxed">
              Established with an uncompromising ethos toward quality and contract honoring, <strong className="text-navy-900 font-semibold">{siteConfig.company.legalName}</strong> is a benchmark Indian merchant exporter and processor. We specialize in sourcing raw agricultural commodities directly from accredited Indian farmer collectives and terminal mandis, processing them through cutting-edge optical Buhler Sortex machines, and dispatching export-ready containers globally.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                  <FlaskConical className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-navy-900 text-sm">Rigorous Lab Compliance</h4>
                <p className="text-xs text-slate-500 leading-normal">
                  Zero tolerance for pesticides, aflatoxins, and salmonella. Every container is verified against stringent EU, US FDA, and GCC import protocols.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-sm space-y-2">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
                  <Truck className="w-4 h-4" />
                </div>
                <h4 className="font-bold text-navy-900 text-sm">Strategic Port Proximity</h4>
                <p className="text-xs text-slate-500 leading-normal">
                  Our Mundra terminal is situated just 45 km from Mundra Port (APSEZ), minimizing domestic haulage time and eliminating customs delays.
                </p>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onLearnMore}
                className="inline-flex items-center gap-2 bg-navy-900 hover:bg-navy-800 text-white font-bold px-6 py-3 rounded-xl transition-all shadow-md text-sm"
              >
                <span>Read Full Corporate Profile</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </button>

              <button
                onClick={onOpenRFQ}
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-navy-950 font-bold px-6 py-3 rounded-xl transition-all shadow-md text-sm"
              >
                <span>Request B2B Quotation</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
