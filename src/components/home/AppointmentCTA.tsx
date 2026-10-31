import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Phone, Clock, ShieldCheck, MessageSquare } from 'lucide-react';
import { contactInfo } from '../../data/navigation';

export const AppointmentCTA: React.FC = () => {
  return (
    <section className="py-20 bg-navy-950 text-white relative overflow-hidden">
      {/* Background glow and patterns */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-brand-red/20 to-brand-blue/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 medical-grid-pattern opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="glass-dark rounded-3xl p-8 sm:p-12 lg:p-16 border border-white/10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-10">
          
          <div className="max-w-2xl text-center lg:text-left space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-red/20 text-brand-red-light text-xs font-bold uppercase tracking-wider border border-brand-red/40">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Prioritize Your Health Today</span>
            </span>

            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Need a Fast, Accurate Diagnostic Scan?
            </h2>

            <p className="text-slate-300 text-base sm:text-lg font-light leading-relaxed">
              Book your appointment online or reach our reception team on WhatsApp for same-day slots. We provide clear preparation instructions and instant digital report delivery.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs text-slate-300">
              <span className="flex items-center gap-1 text-emerald-400 font-semibold">
                <Clock className="w-3.5 h-3.5" /> Same-Day Digital Reports on WhatsApp
              </span>
              <span>&bull;</span>
              <span>ISO 9001 Certified Sanitation</span>
              <span>&bull;</span>
              <span>Dr. Sher Singh Gangwar (MBBS, MD, DNB)</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
            <Link
              to="/appointment"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-brand-red to-brand-red-dark hover:from-brand-red-dark hover:to-brand-red shadow-glow-red transition-all duration-300 hover:scale-105 text-center"
            >
              <Calendar className="w-5 h-5 text-amber-200" />
              <span>Book Appointment Online</span>
            </Link>

            <a
              href={`https://wa.me/${contactInfo.whatsappAdmin}?text=Hello%20V%20Care%20Diagnostics%2C%20I%20would%20like%20to%20book%20an%20appointment.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-700 border border-emerald-400/40 backdrop-blur-md transition-all text-center"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Direct</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
