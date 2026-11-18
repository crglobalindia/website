import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [userMsg, setUserMsg] = useState('');

  const whatsappNum = siteConfig.contact?.whatsappNumber;
  const defaultMsg = siteConfig.contact?.whatsappMessage || 'Hello CR Global, I would like to inquire about your products.';

  // If no verified WhatsApp number is configured, do not render to avoid publishing placeholder numbers
  if (!whatsappNum) {
    return null;
  }

  const handleSend = (e) => {
    e.preventDefault();
    const finalMsg = encodeURIComponent(userMsg.trim() || defaultMsg);
    window.open(`https://wa.me/${whatsappNum}?text=${finalMsg}`, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-ivory-200 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          <div className="bg-forest-800 text-white p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center font-bold text-white text-sm">
                CR
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight">CR Global Trade Desk</h4>
                <div className="flex items-center gap-1 text-[11px] text-ivory-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span>Trade & Sourcing Support</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-white/80 hover:text-white hover:bg-forest-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-4 bg-ivory-50/50 space-y-3 text-xs text-charcoal-700">
            <div className="bg-white p-3 rounded-lg shadow-xs border border-ivory-200 leading-relaxed">
              <p className="font-semibold text-forest-800 mb-1">
                Welcome to CR Global
              </p>
              <p className="text-charcoal-600">
                Inquiring about bulk Vermicompost, organic fertilizers, or custom export specifications? Connect with our team directly.
              </p>
            </div>

            <form onSubmit={handleSend} className="pt-2">
              <textarea
                value={userMsg}
                onChange={(e) => setUserMsg(e.target.value)}
                placeholder="e.g. Inquiring about bulk container vermicompost..."
                rows={2}
                className="w-full text-xs p-2.5 bg-white border border-ivory-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-forest-800 resize-none text-charcoal-800"
              />
              <button
                type="submit"
                className="mt-2 w-full bg-forest-800 hover:bg-forest-900 text-ivory-100 font-bold py-2.5 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm"
              >
                <span>Send via WhatsApp</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-white" />
        <span className="hidden sm:inline font-bold text-xs tracking-wide">
          WhatsApp Desk
        </span>
      </button>
    </div>
  );
}
