import React, { useState } from 'react';
import { MessageCircle, X, Send, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [userMsg, setUserMsg] = useState('');

  const defaultMsg = siteConfig.contact.whatsappDefaultMessage;
  const whatsappNum = siteConfig.contact.whatsappNumber;

  const handleSend = (e) => {
    e.preventDefault();
    const finalMsg = encodeURIComponent(userMsg.trim() || defaultMsg);
    window.open(`https://wa.me/${whatsappNum}?text=${finalMsg}`, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* WhatsApp Chat Popover Box */}
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-emerald-700 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center font-bold text-white text-lg">
                  CR
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-emerald-700 rounded-full" />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">CR Global Export Desk</h4>
                <div className="flex items-center gap-1 text-[11px] text-emerald-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 animate-pulse" />
                  <span>Online • Avg reply &lt; 15 mins</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-white/80 hover:text-white hover:bg-emerald-600 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-slate-50 space-y-3 text-xs text-slate-700">
            <div className="bg-white p-3 rounded-lg rounded-tl-none shadow-sm border border-slate-200/80 leading-relaxed">
              <p className="font-semibold text-slate-900 mb-1">
                Namaste & Welcome to CR Global! 🇮🇳
              </p>
              <p className="text-slate-600">
                Are you looking for FOB or CIF rates for Indian spices, grains, rice, or oilseeds? Send us your destination port and required quantity for an instant quote.
              </p>
            </div>

            <div className="flex items-center gap-1.5 text-[11px] text-slate-500 font-medium px-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>Direct connect with Commercial Export Manager</span>
            </div>

            {/* Input Form */}
            <form onSubmit={handleSend} className="pt-2">
              <textarea
                value={userMsg}
                onChange={(e) => setUserMsg(e.target.value)}
                placeholder="e.g. Need CIF rates for 2x20ft FCL Cumin Seeds to Jebel Ali Port..."
                rows={2}
                className="w-full text-xs p-2.5 bg-white border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-transparent resize-none text-slate-800"
              />
              <button
                type="submit"
                className="mt-2 w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <span>Start WhatsApp Chat</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 focus:outline-none"
        aria-label="Chat on WhatsApp"
      >
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-amber-400" />
        </span>
        <MessageCircle className="w-6 h-6 fill-white" />
        <span className="hidden sm:inline font-bold text-sm tracking-wide">
          Chat on WhatsApp
        </span>
      </button>
    </div>
  );
}
