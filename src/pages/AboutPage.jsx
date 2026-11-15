import React from 'react';
import PageHeader from '../components/common/PageHeader';
import { ShieldCheck, Target, Eye, Award, CheckCircle2, Building, Cpu, Truck, ArrowRight, FileCheck } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function AboutPage({ setActivePage, onOpenRFQ }) {
  const values = [
    {
      title: "Sanctity of Export Contracts",
      desc: "In cross-border commodity trade, trust is established by honoring agreed price contracts irrespective of domestic market price spikes."
    },
    {
      title: "Verifiable Lab Purity",
      desc: "Every container lot is tested for pesticide MRLs, aflatoxins, and microbiological purity through independent testing agencies (SGS / Geo-Chem)."
    },
    {
      title: "On-Time Ocean Despatch",
      desc: "Operating within 45 km of Mundra Port guarantees priority container stuffing, rapid customs sealing, and seamless vessel sailings."
    },
    {
      title: "Transparent B2B Communication",
      desc: "Direct communication with commercial export directors, real-time photographic container stuffing reports, and swift documentation dispatch."
    }
  ];

  return (
    <div className="bg-white">
      {/* Page Header */}
      <PageHeader
        title="About CR Global: Indian Agricultural Excellence"
        subtitle="Bridging India's premier farming belts with international food importers, spice millers, and institutional buyers across 35+ countries."
        breadcrumb="About Us"
        onNavHome={() => setActivePage('home')}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-20">
        
        {/* Company Narrative & Origin Story */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs font-bold font-mono uppercase tracking-wider">
              <Building className="w-3.5 h-3.5" />
              <span>ESTABLISHED IN {siteConfig.company.establishedYear} • GUJARAT, INDIA</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 font-display tracking-tight">
              A Premier Merchant Exporter Driven by Quality, Precision & Integrity
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              <strong className="text-navy-900 font-semibold">{siteConfig.company.legalName}</strong> was founded with a singular mission: to eliminate the quality inconsistencies traditionally associated with agricultural commodity trading. Operating from the commercial hub of Ahmedabad and our processing facility in the Mundra/Gandhidham port corridor, we serve as a trusted direct-source supply partner for global distributors.
            </p>

            <p className="text-slate-600 text-base leading-relaxed">
              Our direct presence in India's agricultural capital mandis—including Unjha (Cumin, Fennel, Sesame), Saurashtra (Groundnuts, Sesame), Guntur (Red Chilli), and Punjab (Basmati Rice)—allows us to procure newly harvested crops at primary mandi rates, passing substantial value and quality advantages to our international clientele.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-2xl font-extrabold text-navy-900 font-display">100%</div>
                <div className="text-xs text-slate-500 mt-0.5">Customs Compliant Clearances</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <div className="text-2xl font-extrabold text-amber-600 font-display">35+</div>
                <div className="text-xs text-slate-500 mt-0.5">Global Seaports Served</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-navy-950 text-white rounded-2xl p-8 border border-navy-800 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-navy-800 pb-4">
              <h3 className="text-lg font-bold font-display text-white">Statutory Credentials</h3>
              <ShieldCheck className="w-5 h-5 text-amber-400" />
            </div>

            <div className="space-y-3.5 text-xs">
              <div className="flex items-center justify-between py-1 border-b border-navy-900">
                <span className="text-slate-400">DGFT IEC:</span>
                <span className="font-mono font-bold text-amber-400">{siteConfig.company.iec}</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-navy-900">
                <span className="text-slate-400">APEDA RCMC:</span>
                <span className="font-mono text-slate-200">{siteConfig.company.apedaReg}</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-navy-900">
                <span className="text-slate-400">Spices Board:</span>
                <span className="font-mono text-slate-200">{siteConfig.company.spicesBoardReg}</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-navy-900">
                <span className="text-slate-400">FSSAI Central:</span>
                <span className="font-mono text-slate-200">{siteConfig.company.fssaiLicense}</span>
              </div>
              <div className="flex items-center justify-between py-1 border-b border-navy-900">
                <span className="text-slate-400">FIEO Registration:</span>
                <span className="font-mono text-slate-200">{siteConfig.company.fieoMembership}</span>
              </div>
              <div className="flex items-center justify-between py-1">
                <span className="text-slate-400">Corporate CIN:</span>
                <span className="font-mono text-slate-200">{siteConfig.company.cin}</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setActivePage('certifications')}
                className="w-full bg-navy-800 hover:bg-navy-700 text-slate-200 font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors border border-navy-700"
              >
                <span>View Authenticated Certificates</span>
                <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
              </button>
            </div>
          </div>

        </div>

        {/* Vision & Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-extrabold text-navy-900 font-display">
              Our Vision
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              To be the most reputable and dependable Indian agricultural merchant export house, recognized worldwide for ethical commodity trading, zero-adulteration standards, and seamless port-to-port ocean logistics.
            </p>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 space-y-4">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600">
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-extrabold text-navy-900 font-display">
              Our Mission
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              To empower Indian farming communities by providing transparent global market access, while delivering premium Sortex-cleaned, laboratory-verified agri-commodities to overseas importers at competitive, honest FOB and CIF prices.
            </p>
          </div>

        </div>

        {/* Core Principles */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-amber-600 font-mono text-xs font-bold uppercase tracking-widest mb-1">
              THE CR GLOBAL STANDARD
            </div>
            <h2 className="text-3xl font-extrabold text-navy-900 font-display">
              Core Principles Guiding Every Container We Ship
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((val, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                <div className="w-9 h-9 rounded-lg bg-navy-50 text-navy-900 flex items-center justify-center font-bold text-sm font-mono">
                  0{idx + 1}
                </div>
                <h4 className="text-base font-bold text-navy-900 font-display">
                  {val.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Banner */}
        <div className="bg-navy-950 text-white p-8 sm:p-10 rounded-2xl border border-navy-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
              Ready to Establish a Long-Term Commodity Supply Partnership?
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              Speak directly with our senior commercial export directors.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenRFQ}
              className="bg-amber-500 hover:bg-amber-400 text-navy-950 font-bold px-6 py-3 rounded-xl text-xs sm:text-sm transition-all shadow-md"
            >
              Request Commercial RFQ
            </button>
            <button
              onClick={() => setActivePage('products')}
              className="bg-navy-800 hover:bg-navy-700 text-white font-semibold px-5 py-3 rounded-xl text-xs sm:text-sm transition-all border border-navy-700"
            >
              Explore Products
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
