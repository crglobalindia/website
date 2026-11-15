import React from 'react';
import { Sprout, Filter, ShieldCheck, Container, ArrowRight } from 'lucide-react';

export default function ProcessingPipeline({ onOpenRFQ }) {
  const steps = [
    {
      num: "01",
      title: "Direct Mandi & Farmer Sourcing",
      icon: <Sprout className="w-6 h-6 text-emerald-600" />,
      bg: "bg-emerald-50 border-emerald-200",
      description: "Direct procurement from Unjha, Saurashtra, Nizamabad, and Indo-Gangetic farmer mandis. Traceable lots with baseline moisture and purity vetting."
    },
    {
      num: "02",
      title: "Mechanical & Optical Sortex Cleaning",
      icon: <Filter className="w-6 h-6 text-amber-600" />,
      bg: "bg-amber-50 border-amber-200",
      description: "Multi-deck pre-cleaners, gravity separators, destoners, and multi-camera Buhler optical sortex sorters ensuring 99.5%+ uniform purity."
    },
    {
      num: "03",
      title: "SGS / Third-Party Lab Inspection",
      icon: <ShieldCheck className="w-6 h-6 text-blue-600" />,
      bg: "bg-blue-50 border-blue-200",
      description: "Pre-shipment sampling analyzed for Aflatoxins, Pesticide MRLs, E. coli, Salmonella, and moisture limits conforming to destination-country standards."
    },
    {
      num: "04",
      title: "Export Packing & Port Dispatch",
      icon: <Container className="w-6 h-6 text-purple-600" />,
      bg: "bg-purple-50 border-purple-200",
      description: "Packed in BOPP, multiwall paper, or food-grade jute bags with container desiccants. Rapid transit to Mundra & JNPT ports for immediate sailing."
    }
  ];

  return (
    <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="text-amber-400 font-mono text-xs font-bold uppercase tracking-widest mb-2">
            QUALITY ASSURANCE & TRACEABILITY
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white">
            From Indian Farms to Global Seaports: Our 4-Stage Export Pipeline
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3">
            Every export consignment follows a documented Standard Operating Procedure (SOP) to ensure zero rejections at international destination ports.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="bg-navy-950/80 border border-navy-800 rounded-2xl p-6 relative flex flex-col justify-between hover:border-navy-700 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-xl border flex items-center justify-center ${step.bg}`}>
                    {step.icon}
                  </div>
                  <span className="font-mono text-3xl font-extrabold text-navy-800 group-hover:text-amber-400/40 transition-colors">
                    {step.num}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 font-display">
                  {step.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-6 mt-4 border-t border-navy-900 flex items-center gap-1.5 text-xs text-amber-400 font-medium">
                <span>Verified Quality Step</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner with RFQ trigger */}
        <div className="mt-12 p-6 rounded-2xl bg-navy-800/80 border border-navy-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-sm font-bold text-white">Need Customized Quality Specifications for Your Country?</h4>
            <p className="text-xs text-slate-400 mt-0.5">We tailor purity, moisture, and sieve calibration to your exact import norms.</p>
          </div>
          <button
            onClick={onOpenRFQ}
            className="bg-amber-500 hover:bg-amber-400 text-navy-950 font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm flex items-center gap-2 transition-all shadow-md shrink-0"
          >
            <span>Discuss Custom Grade</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
