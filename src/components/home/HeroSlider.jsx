import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck, Anchor, CheckCircle2, Award, ChevronLeft, ChevronRight, FileText } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function HeroSlider({ onOpenCatalog, onOpenRFQ }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Direct Source Indian Agro-Commodities & Sortex Spices",
      subtitle: "Government-Recognized Star Export House",
      description: "Direct farm-to-port supply of Sortex 99.5% Cumin Seeds, Double Polished Turmeric, Sesame Seeds, and Red Chillies with SGS lab-certified purity and customized export packaging.",
      tag: "AGRI EXPORTS & WHOLE SPICES",
      theme: "from-navy-950 via-navy-900 to-navy-950",
      accent: "text-amber-400",
      stats: "35+ Global Ports Served",
      highlightPill: "APEDA & Spices Board Verified",
      bgPattern: "radial-gradient(circle at 80% 20%, rgba(217, 119, 6, 0.15) 0%, transparent 50%)"
    },
    {
      title: "Premium 1121 Basmati & Non-Basmati Long Grain Rice",
      subtitle: "Traditional Indo-Gangetic Plains Heritage",
      description: "Aged 1121 Steam, Golden Sella, and IR-64 Parboiled rice. 100% sortex-milled with remarkable elongation, delicate aroma, and zero-admixture guarantee for institutional importers.",
      tag: "BULK GRAINS & BASMATI RICE",
      theme: "from-navy-950 via-slate-900 to-navy-950",
      accent: "text-amber-400",
      stats: "48,000+ MT Annual Output",
      highlightPill: "ISO 22000:2018 Certified",
      bgPattern: "radial-gradient(circle at 75% 30%, rgba(5, 150, 105, 0.18) 0%, transparent 50%)"
    },
    {
      title: "FOB & CIF Container Shipping from Mundra & JNPT Ports",
      subtitle: "Seamless Global Logistics & Customs Clearance",
      description: "Strategically located within 45 km of Mundra Port (India's premier commercial container port). Rapid container stuffing, pre-shipment fumigation, and on-time ocean feeder connections.",
      tag: "GLOBAL MARITIME SUPPLY CHAIN",
      theme: "from-navy-950 via-navy-900 to-slate-950",
      accent: "text-amber-400",
      stats: "99.8% On-Time Vessel Sailing",
      highlightPill: "Mundra & JNPT Direct Feeder",
      bgPattern: "radial-gradient(circle at 80% 40%, rgba(37, 99, 235, 0.18) 0%, transparent 50%)"
    }
  ];

  // Auto slide rotation every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const active = slides[currentSlide];

  return (
    <div className="relative bg-navy-950 text-white overflow-hidden border-b border-navy-800">
      {/* Background Graphic Grid */}
      <div 
        className="absolute inset-0 opacity-40 transition-all duration-1000 pointer-events-none"
        style={{ background: active.bgPattern }}
      />
      
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b10_1px,transparent_1px),linear-gradient(to_bottom,#1e293b10_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy (Col 7) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-navy-800/90 border border-navy-700 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-ping" />
              <span className="text-amber-400 uppercase font-mono">{active.tag}</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300">{active.highlightPill}</span>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold font-display tracking-tight leading-tight sm:leading-none text-white">
              {active.title}
            </h1>

            {/* Subtitle / Description */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              {active.description}
            </p>

            {/* Value Proposition Micro-Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Buhler Sortex Cleaned (99.5%+ Purity)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>SGS / Geo-Chem Third-Party Inspection</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Custom Export Bags (BOPP / Jute / Jumbo)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>FOB, CIF & CFR Incoterms Supported</span>
              </div>
            </div>

            {/* Dual Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={onOpenRFQ}
                className="bg-amber-500 hover:bg-amber-400 text-navy-950 font-bold px-7 py-3.5 rounded-xl transition-all shadow-lg hover:shadow-amber-500/25 flex items-center justify-center gap-2.5 text-sm sm:text-base group"
              >
                <FileText className="w-5 h-5 text-navy-950" />
                <span>Request Instant Price Quote</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onOpenCatalog}
                className="bg-navy-800/80 hover:bg-navy-700 text-white font-semibold px-6 py-3.5 rounded-xl border border-navy-700 hover:border-slate-500 transition-all text-sm sm:text-base flex items-center justify-center gap-2"
              >
                <span>Explore Products Catalog</span>
              </button>
            </div>
          </div>

          {/* Right Highlight Card (Col 4) */}
          <div className="lg:col-span-4">
            <div className="bg-gradient-to-b from-navy-900/90 to-navy-950/90 border border-navy-700/80 rounded-2xl p-6 sm:p-7 shadow-2xl backdrop-blur-md space-y-6">
              
              <div className="flex items-center justify-between border-b border-navy-800 pb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-white font-bold text-sm">B2B Trade Snapshot</div>
                    <div className="text-xs text-slate-400">Export Specifications</div>
                  </div>
                </div>
                <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-semibold">
                  LIVE DESK
                </span>
              </div>

              {/* Specs snapshot list */}
              <div className="space-y-3.5 text-xs">
                <div className="flex items-center justify-between py-1.5 border-b border-navy-800/60">
                  <span className="text-slate-400">Govt. Registration:</span>
                  <span className="font-mono font-medium text-slate-200">DGFT IEC: {siteConfig.company.iec}</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-navy-800/60">
                  <span className="text-slate-400">Primary Gateway Port:</span>
                  <span className="font-medium text-amber-400 flex items-center gap-1">
                    <Anchor className="w-3.5 h-3.5" />
                    <span>Mundra Port (INMUN1)</span>
                  </span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-navy-800/60">
                  <span className="text-slate-400">Average Transit to GCC:</span>
                  <span className="font-medium text-emerald-400">3 - 5 Days Feeder</span>
                </div>
                <div className="flex items-center justify-between py-1.5 border-b border-navy-800/60">
                  <span className="text-slate-400">Payment Modes:</span>
                  <span className="font-medium text-slate-200">Irrevocable L/C / T/T</span>
                </div>
                <div className="flex items-center justify-between py-1.5">
                  <span className="text-slate-400">Samples Policy:</span>
                  <span className="font-medium text-slate-200">Courier via DHL / FedEx</span>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.contact.whatsappDefaultMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 text-xs transition-colors shadow-sm"
                >
                  <span>Connect with Export Manager</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Slide Controls & Indicators */}
        <div className="mt-12 flex items-center justify-between pt-6 border-t border-navy-800/80">
          <div className="flex items-center gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentSlide(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentSlide === idx ? 'w-8 bg-amber-400' : 'w-2.5 bg-navy-700 hover:bg-slate-500'
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
              className="p-2 rounded-lg bg-navy-800 hover:bg-navy-700 text-slate-300 transition-colors border border-navy-700"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
              className="p-2 rounded-lg bg-navy-800 hover:bg-navy-700 text-slate-300 transition-colors border border-navy-700"
              aria-label="Next slide"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
