import React, { useState } from 'react';
import { Globe, Anchor, Clock, ArrowRight, CheckCircle2, Ship } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function GlobalPresenceMap({ onOpenRFQ }) {
  const [selectedRegion, setSelectedRegion] = useState(0);
  const destinations = siteConfig.exportDestinations;
  const ports = siteConfig.gatewayPorts;

  const current = destinations[selectedRegion];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-amber-600 font-mono text-xs font-bold uppercase tracking-widest mb-2">
            GLOBAL LOGISTICS FOOTPRINT
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900 font-display tracking-tight">
            Export Destinations & Feeder Shipping Network
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2">
            Supplying major food distributors, spice millers, supermarket chains, and industrial processors across 35+ countries from premier Indian container terminals.
          </p>
        </div>

        {/* Region Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {destinations.map((dest, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedRegion(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedRegion === idx
                  ? 'bg-navy-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {dest.region}
            </button>
          ))}
        </div>

        {/* Selected Region Card */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm mb-14">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Region Details (Col 7) */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-600">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-navy-900 font-display">
                    {current.region}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-emerald-700 font-medium">
                    <Clock className="w-3.5 h-3.5" />
                    <span>Average Ocean Transit: {current.transitTime}</span>
                  </div>
                </div>
              </div>

              {/* Destination Countries */}
              <div>
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Key Destination Seaports & Markets:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {current.countries.map((c, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center gap-1 text-xs font-semibold bg-white px-3 py-1.5 rounded-lg border border-slate-200 text-slate-800 shadow-2xs"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      <span>{c}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Products Exported */}
              <div className="pt-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Top Commodities Exported to this Sector:
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {current.keyProducts.map((p, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium bg-amber-500/10 text-amber-900 border border-amber-200/80 px-2.5 py-1 rounded-md"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenRFQ}
                  className="inline-flex items-center gap-2 text-xs font-bold text-navy-900 bg-white hover:bg-slate-100 border border-slate-300 px-4 py-2.5 rounded-lg shadow-2xs transition-colors"
                >
                  <span>Request CIF Rates to {current.region}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-600" />
                </button>
              </div>
            </div>

            {/* Gateway Seaport Proximity Widget (Col 5) */}
            <div className="lg:col-span-5 bg-white border border-slate-200 rounded-xl p-5 shadow-2xs space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-navy-900 uppercase tracking-wider border-b border-slate-100 pb-2">
                <Ship className="w-4 h-4 text-amber-500" />
                <span>Primary Indian Loading Terminals</span>
              </div>

              <div className="space-y-2.5 text-xs">
                {ports.map((port, i) => (
                  <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-slate-50 border border-slate-100">
                    <div>
                      <div className="font-bold text-slate-800">{port.name}</div>
                      <div className="text-[11px] text-slate-500 font-mono">Port Code: {port.code}</div>
                    </div>
                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {port.distanceFromPlant}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
