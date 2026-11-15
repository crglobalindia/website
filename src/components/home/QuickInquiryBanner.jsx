import React from 'react';
import { FileText, MessageCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function QuickInquiryBanner({ onOpenRFQ }) {
  const whatsappUrl = `https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.contact.whatsappDefaultMessage)}`;

  return (
    <section className="py-16 bg-navy-950 text-white relative overflow-hidden border-t border-navy-800">
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_20%_50%,rgba(217,119,6,0.3),transparent_70%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-navy-900 via-navy-800 to-navy-900 rounded-2xl p-8 sm:p-12 border border-navy-700/80 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="space-y-3 text-center lg:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Direct Commercial Desk</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold font-display tracking-tight text-white">
              Ready to Source Indian Commodities for Your Market?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl">
              Get official FOB Mundra / JNPT or CIF Destination Port rates within 2 hours. Free commercial lab-certified samples dispatched via DHL/FedEx.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
            <button
              onClick={onOpenRFQ}
              className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-navy-950 font-bold px-7 py-3.5 rounded-xl transition-all shadow-lg text-sm sm:text-base flex items-center justify-center gap-2 group"
            >
              <FileText className="w-4 h-4 text-navy-950" />
              <span>Submit Detailed RFQ</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-6 py-3.5 rounded-xl transition-all shadow-lg text-sm sm:text-base flex items-center justify-center gap-2"
            >
              <MessageCircle className="w-5 h-5 fill-white" />
              <span>Instant WhatsApp</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
