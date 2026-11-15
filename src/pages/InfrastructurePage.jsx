import React from 'react';
import PageHeader from '../components/common/PageHeader';
import { Cpu, Box, Anchor, Truck, ShieldCheck, Thermometer, ArrowRight, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function InfrastructurePage({ setActivePage, onOpenRFQ }) {
  const ports = siteConfig.gatewayPorts;
  const packaging = siteConfig.packagingOptions;

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <PageHeader
        title="Processing Terminal, Packaging & Gateway Seaports"
        subtitle="World-class optical Sortex cleaning, hygienic automated packaging lines, and strategic proximity to Mundra & JNPT container ports."
        breadcrumb="Infrastructure & Ports"
        onNavHome={() => setActivePage('home')}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        
        {/* Processing Infrastructure Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-800 text-xs font-bold font-mono uppercase tracking-wider">
              <Cpu className="w-3.5 h-3.5" />
              <span>BUHLER OPTICAL SORTEX TECHNOLOGY</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 font-display tracking-tight">
              Advanced Optical Grading, De-Stoning & Pre-Cleaning Infrastructure
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              Achieving European and North American purity standards (99.5% to 99.95%) requires advanced mechanical separation and computerized optical inspection. Our Mundra/Gandhidham terminal is equipped with multi-stage processing lines configured specifically for whole spices, oilseeds, and grains.
            </p>

            <div className="space-y-3 pt-2 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-navy-900">Pre-Cleaning & Aspiration:</strong> Removes field dust, light chaff, loose husks, and organic straw via high-volume negative air aspiration.
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-navy-900">Multi-Deck Vibro Sieves & De-Stoners:</strong> Density-based separation removes heavy stones, glass shards, metal particles, and mud balls.
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-navy-900">Buhler Multi-Camera Optical Sorters:</strong> High-definition InGaAs infrared cameras inspect individual seeds at high speed, ejecting discolored or damaged kernels.
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-navy-900">Magnetic Separators:</strong> 10,000+ Gauss rare-earth magnetic bars eliminate all traces of ferrous particulate.
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 space-y-5">
            <h3 className="text-lg font-bold text-navy-900 font-display border-b border-slate-200 pb-3">
              Terminal Capacity Highlights
            </h3>

            <div className="space-y-4">
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-slate-200">
                <span className="text-xs text-slate-600 font-medium">Daily Sortex Capacity</span>
                <span className="text-sm font-bold text-navy-900 font-mono">150+ Metric Tons / Day</span>
              </div>

              <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-slate-200">
                <span className="text-xs text-slate-600 font-medium">Warehousing Floor Area</span>
                <span className="text-sm font-bold text-navy-900 font-mono">85,000+ Sq. Feet</span>
              </div>

              <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-slate-200">
                <span className="text-xs text-slate-600 font-medium">Fumigation Protocols</span>
                <span className="text-sm font-bold text-emerald-700 font-mono">Aluminium Phosphide / MBr</span>
              </div>

              <div className="flex items-center justify-between p-3.5 rounded-xl bg-white border border-slate-200">
                <span className="text-xs text-slate-600 font-medium">Distance to Mundra Port</span>
                <span className="text-sm font-bold text-amber-600 font-mono">45 km (Highway Connected)</span>
              </div>
            </div>

            <button
              onClick={onOpenRFQ}
              className="w-full bg-navy-900 hover:bg-navy-800 text-amber-400 font-bold py-3 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors"
            >
              <span>Schedule Plant Inspection / Audit</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Packaging Options Section */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-amber-600 font-mono text-xs font-bold uppercase tracking-widest mb-1">
              CUSTOM EXPORT PACKAGING
            </div>
            <h2 className="text-3xl font-extrabold text-navy-900 font-display">
              Export Packaging Engineered for Maritime Transport
            </h2>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Protecting commodities from sea humidity, condensation, and transit shifts across 30+ day ocean voyages.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packaging.map((pack, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600">
                    <Box className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono font-bold text-slate-500 bg-slate-100 px-2.5 py-0.5 rounded">
                    {pack.sizes}
                  </span>
                </div>

                <h4 className="text-base font-bold text-navy-900 font-display">
                  {pack.name}
                </h4>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {pack.features}
                </p>

                <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500">
                  <strong className="text-slate-700">Recommended For:</strong> {pack.idealFor}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Gateway Seaports Map & Port Breakdown */}
        <div className="bg-navy-950 text-white rounded-2xl border border-navy-800 p-8 sm:p-10 space-y-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-amber-400 font-mono text-xs font-bold uppercase tracking-wider">
              <Anchor className="w-4 h-4" />
              <span>INDIAN MARITIME GATEWAYS</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white mt-1">
              Direct Access to Premier Indian Seaports
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Fast container turnaround and direct vessel berths connecting you to Jebel Ali, Rotterdam, Singapore, and New York.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {ports.map((port, idx) => (
              <div key={idx} className="bg-navy-900 border border-navy-800 rounded-xl p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
                    <h4 className="font-bold text-white text-base">{port.name}</h4>
                  </div>
                  <span className="font-mono text-xs font-bold text-amber-400 bg-navy-950 px-2 py-0.5 rounded border border-navy-800">
                    {port.code}
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {port.advantages}
                </p>

                <div className="pt-2 border-t border-navy-800 flex items-center justify-between text-xs text-slate-400">
                  <span>Proximity to Terminal:</span>
                  <span className="font-semibold text-emerald-400">{port.distanceFromPlant}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
