import React, { useState } from 'react';
import PageHeader from '../components/common/PageHeader';
import RFQForm from '../components/rfq/RFQForm';
import { Mail, Phone, MapPin, Clock, MessageCircle, ShieldCheck, ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export default function ContactPage({ setActivePage, initialProduct = null, initialContainer = null }) {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: "What is your commercial sample policy?",
      a: "We provide free commercial product samples (up to 500g per commodity) accompanied by our internal certificate of analysis (COA). International buyers provide their DHL, FedEx, or Aramex account number to cover the courier freight charges."
    },
    {
      q: "Which Incoterms do you support for international shipments?",
      a: "We routinely quote on FOB (Mundra Port or Nhava Sheva JNPT Port) and CIF (Cost, Insurance & Freight to your designated port of discharge). We also support CFR and EXW upon request."
    },
    {
      q: "What are your standard payment terms for new buyers?",
      a: "Our standard export payment terms are: (1) 100% Irrevocable Confirmed Letter of Credit (L/C) at sight issued by a prime international bank, or (2) 30% Advance Deposit via Telegraphic Transfer (T/T) with the remaining 70% payable against scanned copies of the original Bill of Lading (BL) and third-party inspection certificates."
    },
    {
      q: "Can you provide SGS or Geo-Chem third-party inspection certificates?",
      a: "Yes. Third-party pre-shipment inspection by SGS, Geo-Chem, Intertek, or Cotecna can be arranged for any container. Surveyors draw composite samples, verify gross/net weights, supervise container stuffing, and apply customs security seals."
    },
    {
      q: "Do you offer private OEM branding and customized consumer retail packaging?",
      a: "Yes. We offer complete OEM private labeling for supermarket chains and distributors, including branded BOPP bags, pouches, zipper stand-up bags, and master cartons printed with your logos, barcodes, and destination-country regulatory markings."
    }
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* Page Header */}
      <PageHeader
        title="Contact Our Commercial Export Desk & RFQ"
        subtitle="Request official FOB / CIF export quotations, request certified product samples, or schedule an audit of our Mundra processing facility."
        breadcrumb="Contact & RFQ"
        onNavHome={() => setActivePage('home')}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        
        {/* Contact Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Headquarters */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-navy-900 text-amber-400 flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-navy-900 font-display">Corporate Headquarters</h4>
              <p className="text-xs text-slate-500 font-mono mt-0.5">Ahmedabad, Gujarat, India</p>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              {siteConfig.contact.headOffice.addressLine1}, {siteConfig.contact.headOffice.addressLine2}, {siteConfig.contact.headOffice.city} - {siteConfig.contact.headOffice.postalCode}, Gujarat, India
            </p>
            <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-200 flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-emerald-600" />
              <span>{siteConfig.contact.headOffice.operatingHours}</span>
            </div>
          </div>

          {/* Card 2: Mundra Terminal */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-600 flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-base font-bold text-navy-900 font-display">Mundra Processing Terminal</h4>
              <p className="text-xs text-slate-500 font-mono mt-0.5">Gandhidham / Mundra Port Belt</p>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              {siteConfig.contact.warehouseLogisticsHub.addressLine1}, {siteConfig.contact.warehouseLogisticsHub.addressLine2}, {siteConfig.contact.warehouseLogisticsHub.city} - {siteConfig.contact.warehouseLogisticsHub.postalCode}, Gujarat, India
            </p>
            <div className="text-[11px] text-amber-800 font-medium pt-2 border-t border-slate-200">
              {siteConfig.contact.warehouseLogisticsHub.proximityNote}
            </div>
          </div>

          {/* Card 3: Direct Connect */}
          <div className="bg-navy-950 text-white rounded-2xl p-6 space-y-4 border border-navy-800">
            <div>
              <span className="text-[10px] font-mono text-amber-400 font-bold uppercase tracking-wider block">
                COMMERCIAL HOTLINE
              </span>
              <h4 className="text-lg font-bold text-white font-display mt-0.5">
                Instant Export Inquiry
              </h4>
            </div>

            <div className="space-y-2 text-xs">
              <a
                href={`tel:${siteConfig.contact.primaryPhone.replace(/\s+/g, '')}`}
                className="flex items-center gap-2 text-slate-200 hover:text-amber-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{siteConfig.contact.phoneDisplay}</span>
              </a>

              <a
                href={`mailto:${siteConfig.contact.emails.inquiry}`}
                className="flex items-center gap-2 text-slate-200 hover:text-amber-400 transition-colors"
              >
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{siteConfig.contact.emails.inquiry}</span>
              </a>
            </div>

            <div className="pt-2">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.contact.whatsappDefaultMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat with Export Director</span>
              </a>
            </div>
          </div>

        </div>

        {/* Full B2B RFQ Form */}
        <div>
          <RFQForm
            initialProduct={initialProduct}
            initialContainer={initialContainer}
          />
        </div>

        {/* Interactive Google Map / Location Embed Placeholder */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-600" />
              <h4 className="text-sm font-bold text-navy-900 uppercase font-mono tracking-wider">
                Strategic Location: Gujarat Trade & Seaport Corridor
              </h4>
            </div>
            <span className="text-xs text-slate-500 font-mono">23.0225° N, 72.5714° E</span>
          </div>

          <div className="relative h-64 sm:h-80 w-full rounded-xl bg-gradient-to-br from-navy-950 via-slate-900 to-navy-900 border border-navy-800 flex items-center justify-center p-6 text-center text-white overflow-hidden">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:20px_20px]" />
            
            <div className="relative z-10 max-w-md space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/30 text-amber-400 flex items-center justify-center mx-auto">
                <MapPin className="w-6 h-6" />
              </div>
              <h5 className="text-lg font-bold font-display">
                Gujarat, India: Global Trade Crossroads
              </h5>
              <p className="text-xs text-slate-300 leading-relaxed">
                Seamless multi-modal transit linking primary agricultural production mandis (Unjha, Saurashtra, Gondal) directly to Mundra Port & Kandla Port for fast container loading.
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-navy-800 text-xs font-mono text-emerald-400 border border-navy-700">
                <span>Facility Audits Welcomed by Appointment</span>
              </div>
            </div>
          </div>
        </div>

        {/* B2B EXIM FAQ Section */}
        <div className="space-y-6">
          <div className="text-center max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-1.5 text-amber-600 font-mono text-xs font-bold uppercase tracking-widest mb-1">
              <HelpCircle className="w-4 h-4" />
              <span>COMMONLY ASKED QUESTIONS</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-navy-900 font-display">
              Export Terms, Logistics & Sample Clearance
            </h3>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-2xs transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-xs sm:text-sm text-navy-900 hover:text-amber-600 transition-colors"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-amber-600 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="p-4 sm:p-5 pt-0 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-slate-50/50">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
