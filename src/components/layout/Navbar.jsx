import React, { useState } from 'react';
import { Globe, Menu, X, ArrowUpRight, PhoneCall, FileText } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function Navbar({ activePage, setActivePage, onOpenRFQ }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'products', label: 'Products Catalog' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'infrastructure', label: 'Infrastructure & Ports' },
    { id: 'contact', label: 'Contact & RFQ' },
  ];

  const handleNavClick = (id) => {
    setActivePage(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/90 shadow-sm transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand Name */}
          <div 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 cursor-pointer select-none group shrink-0"
          >
            <div className="w-11 h-11 rounded-lg bg-navy-900 flex items-center justify-center text-amber-400 shadow-md group-hover:bg-navy-800 transition-colors shrink-0">
              <Globe className="w-6 h-6 animate-pulse" />
            </div>
            <div className="whitespace-nowrap">
              <div className="flex items-baseline gap-1.5">
                <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-navy-900 font-display">
                  CR GLOBAL
                </span>
                <span className="text-xs font-bold text-amber-600 tracking-widest uppercase">
                  EXIM
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-slate-500 font-medium tracking-tight">
                Indian Merchant Exporter & Processor
              </p>
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-3.5 py-2 text-sm font-semibold rounded-lg transition-all relative ${
                    isActive
                      ? 'text-navy-900 bg-slate-100 font-bold'
                      : 'text-slate-600 hover:text-navy-900 hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-amber-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => onOpenRFQ && onOpenRFQ()}
              className="bg-navy-900 hover:bg-navy-800 text-white text-sm font-bold px-5 py-2.5 rounded-lg transition-all shadow-md hover:shadow-lg flex items-center gap-2 group"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              <span>Request Quote</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-amber-400" />
            </button>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenRFQ && onOpenRFQ()}
              className="bg-navy-900 text-amber-400 p-2 rounded-lg text-xs font-bold sm:px-3 sm:py-2 flex items-center gap-1.5"
            >
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">RFQ</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-700 hover:text-navy-900 hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white shadow-xl animate-in slide-in-from-top-2 duration-200">
          <div className="max-w-7xl mx-auto px-4 pt-3 pb-6 space-y-1">
            {navLinks.map((link) => {
              const isActive = activePage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-base font-semibold transition-colors flex items-center justify-between ${
                    isActive
                      ? 'bg-navy-50 text-navy-900 border-l-4 border-amber-500 font-bold'
                      : 'text-slate-700 hover:bg-slate-50 hover:text-navy-900'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-amber-500" />}
                </button>
              );
            })}

            <div className="pt-4 border-t border-slate-100 space-y-2.5">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRFQ && onOpenRFQ();
                }}
                className="w-full bg-amber-600 hover:bg-amber-500 text-navy-950 font-bold py-3 px-4 rounded-lg text-center flex items-center justify-center gap-2 shadow-sm"
              >
                <FileText className="w-4 h-4" />
                <span>Submit Detailed RFQ</span>
              </button>

              <a
                href={`tel:${siteConfig.contact.primaryPhone.replace(/\s+/g, '')}`}
                className="w-full bg-navy-900 text-white font-semibold py-3 px-4 rounded-lg text-center flex items-center justify-center gap-2 shadow-sm text-sm"
              >
                <PhoneCall className="w-4 h-4 text-emerald-400" />
                <span>Call Desk: {siteConfig.contact.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
