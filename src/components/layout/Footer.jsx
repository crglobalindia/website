import React from 'react';
import { Globe, Mail, Phone, MapPin, ShieldCheck, ArrowRight, Anchor, FileCheck } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function Footer({ setActivePage, onOpenRFQ }) {
  const handleNav = (page) => {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-navy-800">
      {/* Top Credentials Strip */}
      <div className="bg-navy-900 border-b border-navy-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center md:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-2.5">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-white text-xs font-bold uppercase tracking-wider">DGFT Registered</div>
                <div className="text-[11px] text-slate-400 font-mono">IEC: {siteConfig.company.iec}</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2.5">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <FileCheck className="w-5 h-5" />
              </div>
              <div>
                <div className="text-white text-xs font-bold uppercase tracking-wider">Food Safety Certified</div>
                <div className="text-[11px] text-slate-400 font-mono">FSSAI: {siteConfig.company.fssaiLicense}</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2.5">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                <Anchor className="w-5 h-5" />
              </div>
              <div>
                <div className="text-white text-xs font-bold uppercase tracking-wider">Gateway Port Proximity</div>
                <div className="text-[11px] text-slate-400">Mundra Port: 45 km</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-2.5">
              <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <div className="text-white text-xs font-bold uppercase tracking-wider">Global Footprint</div>
                <div className="text-[11px] text-slate-400">35+ Export Countries</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Company Profile & Badges (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-navy-800 border border-navy-700 flex items-center justify-center text-amber-400">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xl font-extrabold text-white font-display tracking-tight">
                  CR GLOBAL EXIM
                </div>
                <p className="text-xs text-amber-400 font-medium">
                  {siteConfig.company.legalName}
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              A premier Indian agricultural merchant exporter and processor. Specializing in Sortex-cleaned whole spices, Basmati and non-basmati rice, oilseeds, and pulses with verifiable lab purity, custom export packaging, and reliable worldwide container shipping.
            </p>

            <div className="pt-2 space-y-1.5 text-xs text-slate-400 font-mono">
              <div><span className="text-slate-500">CIN:</span> {siteConfig.company.cin}</div>
              <div><span className="text-slate-500">GSTIN:</span> {siteConfig.company.gstin}</div>
              <div><span className="text-slate-500">APEDA:</span> {siteConfig.company.apedaReg}</div>
              <div><span className="text-slate-500">Spices Board:</span> {siteConfig.company.spicesBoardReg}</div>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider border-b border-navy-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => handleNav('home')} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" />
                  <span>Home</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('about')} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" />
                  <span>About Our Company</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('products')} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" />
                  <span>Products Catalog</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('certifications')} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" />
                  <span>Compliance & Certifications</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('infrastructure')} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" />
                  <span>Infrastructure & Seaports</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-amber-400 transition-colors flex items-center gap-1.5">
                  <ArrowRight className="w-3 h-3 text-slate-600" />
                  <span>Contact & Detailed RFQ</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Core Export Products */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider border-b border-navy-800 pb-2">
              Core Commodities
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="hover:text-amber-400 transition-colors cursor-pointer" onClick={() => handleNav('products')}>
                • Sortex Cumin Seeds (Jeera)
              </li>
              <li className="hover:text-amber-400 transition-colors cursor-pointer" onClick={() => handleNav('products')}>
                • Double Polished Turmeric
              </li>
              <li className="hover:text-amber-400 transition-colors cursor-pointer" onClick={() => handleNav('products')}>
                • 1121 Steam & Sella Basmati
              </li>
              <li className="hover:text-amber-400 transition-colors cursor-pointer" onClick={() => handleNav('products')}>
                • White Natural Sesame 99.95%
              </li>
              <li className="hover:text-amber-400 transition-colors cursor-pointer" onClick={() => handleNav('products')}>
                • Red Dry Chilli (Teja / Byadgi)
              </li>
              <li className="hover:text-amber-400 transition-colors cursor-pointer" onClick={() => handleNav('products')}>
                • Saurashtra Bold Peanuts
              </li>
              <li className="hover:text-amber-400 transition-colors cursor-pointer" onClick={() => handleNav('products')}>
                • Kabuli Chickpeas (Garbanzo)
              </li>
              <li className="hover:text-amber-400 transition-colors cursor-pointer" onClick={() => handleNav('products')}>
                • USP Pure Psyllium Husk
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Locations */}
          <div className="space-y-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider border-b border-navy-800 pb-2">
              Export Desks
            </h4>
            
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-semibold">Corporate HQ</div>
                  <div>{siteConfig.contact.headOffice.addressLine1}</div>
                  <div>{siteConfig.contact.headOffice.city}, {siteConfig.contact.headOffice.state} - {siteConfig.contact.headOffice.postalCode}, India</div>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <div className="text-white font-semibold">Mundra Port Terminal</div>
                  <div>{siteConfig.contact.warehouseLogisticsHub.addressLine1}</div>
                  <div>{siteConfig.contact.warehouseLogisticsHub.city}, Gujarat</div>
                </div>
              </div>

              <div className="pt-2 border-t border-navy-800/80 space-y-1.5">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-amber-400" />
                  <a href={`mailto:${siteConfig.contact.emails.inquiry}`} className="hover:text-amber-300">
                    {siteConfig.contact.emails.inquiry}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-emerald-400" />
                  <a href={`tel:${siteConfig.contact.primaryPhone.replace(/\s+/g, '')}`} className="hover:text-emerald-300">
                    {siteConfig.contact.phoneDisplay}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Global Ports Banner */}
        <div className="mt-12 pt-8 border-t border-navy-800/80">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <Anchor className="w-4 h-4 text-amber-400" />
              <span className="font-semibold text-white">Direct Loading Ports:</span>
              <span>Mundra Port (INMUN1) • JNPT Nhava Sheva (INNSA1) • Kandla Port (IXY) • Chennai Port</span>
            </div>
            <div>
              <span className="font-semibold text-white">Accepted Incoterms:</span>
              <span className="ml-1 text-slate-300">FOB • CIF • CFR • EXW</span>
            </div>
          </div>
        </div>

        {/* Bottom Legal Copyright */}
        <div className="mt-8 pt-6 border-t border-navy-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} {siteConfig.company.legalName}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => handleNav('certifications')} className="hover:text-slate-300 transition-colors">
              Statutory Compliance
            </button>
            <span>•</span>
            <button onClick={() => handleNav('infrastructure')} className="hover:text-slate-300 transition-colors">
              Quality Assurance
            </button>
            <span>•</span>
            <button onClick={() => onOpenRFQ && onOpenRFQ()} className="text-amber-400 hover:text-amber-300 font-semibold">
              Submit Tender / RFQ
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
