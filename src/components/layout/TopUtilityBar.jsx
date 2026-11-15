import React, { useState, useEffect } from 'react';
import { Mail, Phone, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export default function TopUtilityBar({ onOpenRFQ }) {
  const [istTime, setIstTime] = useState('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const options = {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        };
        const formatter = new Intl.DateTimeFormat([], options);
        setIstTime(formatter.format(new Date()));
      } catch (e) {
        setIstTime('IST (UTC +5:30)');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-navy-950 text-slate-300 text-xs border-b border-navy-800/80 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
        {/* Left: Statutory Badges & Time Zone */}
        <div className="flex items-center gap-4 lg:gap-6">
          <div className="flex items-center gap-1.5 text-amber-400 font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
            <span>Govt. Recognized Export House</span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-300">IEC: {siteConfig.company.iec}</span>
          </div>

          <div className="hidden lg:flex items-center gap-1.5 text-slate-400 border-l border-navy-800 pl-4">
            <Clock className="w-3.5 h-3.5 text-emerald-400" />
            <span>India HQ Time:</span>
            <span className="font-mono text-emerald-300">{istTime || 'Loading...'} IST</span>
          </div>
        </div>

        {/* Right: Direct Contacts & Fast RFQ Trigger */}
        <div className="flex items-center gap-5">
          <a
            href={`mailto:${siteConfig.contact.emails.inquiry}`}
            className="flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors"
          >
            <Mail className="w-3.5 h-3.5 text-amber-400" />
            <span>{siteConfig.contact.emails.inquiry}</span>
          </a>

          <a
            href={`tel:${siteConfig.contact.primaryPhone.replace(/\s+/g, '')}`}
            className="flex items-center gap-1.5 text-slate-300 hover:text-amber-400 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-emerald-400" />
            <span>{siteConfig.contact.phoneDisplay}</span>
          </a>

          <button
            onClick={() => onOpenRFQ && onOpenRFQ()}
            className="bg-amber-600 hover:bg-amber-500 text-navy-950 font-bold px-3 py-1 rounded text-[11px] transition-all flex items-center gap-1 tracking-wide shadow-sm"
          >
            <span>QUICK RFQ</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>
      </div>
    </div>
  );
}
