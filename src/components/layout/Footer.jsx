import React from 'react';
import { Link } from 'react-router-dom';
import { Sprout, Mail, Phone, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Products', path: '/products' },
    { label: 'Vermicompost', path: '/products/vermicompost' },
    { label: 'Export Enquiries', path: '/export-enquiries' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <footer className="bg-forest-950 text-ivory-200 border-t border-forest-900">
      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
          
          {/* Column 1: Brand & Tagline (Span 5) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-forest-800 border border-gold-500/30 flex items-center justify-center text-gold-500">
                <Sprout className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xl font-extrabold text-white tracking-tight font-display">
                  CR GLOBAL
                </span>
                <p className="text-xs text-gold-500 font-medium">
                  {siteConfig.company.tagline}
                </p>
              </div>
            </div>

            <p className="text-sm text-ivory-200/80 leading-relaxed max-w-md pt-1">
              {siteConfig.company.description}
            </p>

            <div className="pt-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-forest-900 border border-forest-800 text-xs text-gold-400 font-medium">
                <ShieldCheck className="w-4 h-4 text-gold-500" />
                <span>Verified B2B Sourcing & Trade Partner • India</span>
              </div>
            </div>
          </div>

          {/* Column 2: Navigation Links (Span 3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider border-b border-forest-800/80 pb-2.5">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {navigationLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="hover:text-gold-400 transition-colors flex items-center gap-2 group text-ivory-200/90"
                  >
                    <ArrowRight className="w-3.5 h-3.5 text-gold-500/60 group-hover:text-gold-400 group-hover:translate-x-0.5 transition-all" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Verified Contact & Inquiries (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-white text-sm font-bold uppercase tracking-wider border-b border-forest-800/80 pb-2.5">
              Trade & Sourcing Inquiries
            </h4>
            
            <p className="text-xs text-ivory-200/80 leading-relaxed">
              For bulk export orders, container specifications, and FOB/CIF trade pricing:
            </p>

            <div className="space-y-3 text-xs pt-1">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-500 shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.inquiriesEmail}`}
                  className="text-ivory-100 hover:text-gold-400 transition-colors font-medium text-sm"
                >
                  {siteConfig.contact.inquiriesEmail}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-gold-500/70 shrink-0" />
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-ivory-200/80 hover:text-gold-400 transition-colors"
                >
                  {siteConfig.contact.email}
                </a>
              </div>

              {siteConfig.contact.phone && (
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-gold-500 shrink-0" />
                  <a
                    href={`tel:${siteConfig.contact.phoneRaw || siteConfig.contact.phone}`}
                    className="text-ivory-100 hover:text-gold-400 transition-colors font-medium text-xs"
                  >
                    {siteConfig.contact.phone}
                  </a>
                  {siteConfig.contact.whatsappNumber && (
                    <a
                      href={`https://wa.me/${siteConfig.contact.whatsappNumber}?text=${encodeURIComponent(siteConfig.contact.whatsappMessage || '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-1 text-[11px] bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 px-2 py-0.5 rounded transition-colors"
                    >
                      WhatsApp
                    </a>
                  )}
                </div>
              )}

              <div className="flex items-center gap-2.5 text-ivory-200/80 pt-1">
                <MapPin className="w-4 h-4 text-gold-500 shrink-0" />
                <span>India Operations & International Trade Desk</span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/export-enquiries"
                className="inline-flex items-center gap-2 text-xs font-bold text-forest-950 bg-gold-500 hover:bg-gold-400 px-4 py-2 rounded-lg transition-colors shadow-sm"
              >
                <span>Submit Export Enquiry</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Legal Copyright */}
        <div className="mt-12 pt-8 border-t border-forest-900/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory-200/60">
          <div>
            © {currentYear} {siteConfig.company.name}. All rights reserved. — {siteConfig.company.tagline}
          </div>
          <div className="flex items-center gap-5">
            <span className="text-ivory-200/50 hover:text-ivory-200 transition-colors cursor-default">
              Privacy Policy (Coming Soon)
            </span>
            <span>•</span>
            <Link to="/contact" className="hover:text-gold-400 transition-colors">
              Contact Desk
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
