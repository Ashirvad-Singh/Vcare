import React from 'react';
import { Clock, Phone, MessageSquare } from 'lucide-react';
import { contactInfo } from '../../data/navigation';

export const TopBar: React.FC = () => {
  return (
    <div className="bg-navy-950 text-slate-300 text-[11px] sm:text-xs py-1.5 px-3 sm:px-4 border-b border-navy-800/80">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2">
        {/* Left: Opening Hours */}
        <div className="flex items-center gap-1.5 text-slate-300 truncate">
          <Clock className="w-3 h-3 text-brand-gold shrink-0" />
          <span className="sm:hidden font-medium text-white truncate">Mon–Sat: 9AM–9PM</span>
          <span className="hidden sm:inline">
            Mon–Sat: <strong className="text-white font-semibold">9:00 AM – 9:00 PM</strong> | Sun: <strong className="text-white font-semibold">10:00 AM – 4:00 PM</strong>
          </span>
        </div>

        {/* Right: Direct Hotline and WhatsApp */}
        <div className="flex items-center gap-3 sm:gap-6 shrink-0">
          <a
            href={`tel:${contactInfo.primaryPhoneClean}`}
            className="flex items-center gap-1.5 hover:text-white transition-colors font-semibold text-white"
          >
            <Phone className="w-3 h-3 text-brand-red-light" />
            <span className="sm:hidden">Call Now</span>
            <span className="hidden sm:inline">{contactInfo.primaryPhone}</span>
          </a>

          <a
            href={`https://wa.me/${contactInfo.whatsappAdmin}?text=Hello%20V%20Care%20Diagnostics%2C%20I%20would%20like%20to%20inquire%20about%20a%20test.`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 hover:text-white hover:bg-emerald-800 transition-all font-semibold text-[11px]"
          >
            <MessageSquare className="w-3 h-3" />
            <span>WhatsApp: 918859992628</span>
          </a>
        </div>
      </div>
    </div>
  );
};
