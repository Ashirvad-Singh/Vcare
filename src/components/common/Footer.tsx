import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Shield, Award, ChevronRight, MessageSquare } from 'lucide-react';
import { contactInfo } from '../../data/navigation';
import { servicesData } from '../../data/services';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 text-slate-300 relative overflow-hidden border-t border-navy-800">
      {/* Subtle glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-brand-blue/15 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Column 1: Brand & Overview (4 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link to="/" className="flex items-center gap-3">
              <div className="p-1 rounded-full bg-white shadow-sm border border-slate-200 shrink-0">
                <img
                  src="/assets/img/logo.png"
                  alt="V Care Diagnostics"
                  className="h-12 w-12 object-contain"
                />
              </div>
              <div>
                <span className="font-display text-xl font-extrabold tracking-tight text-white block">
                  V CARE <span className="text-brand-red-light">DIAGNOSTICS</span>
                </span>
                <span className="text-xs text-slate-400 tracking-wider uppercase font-semibold">
                  & Imaging Center &bull; Bareilly
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed">
              Bareilly’s trusted diagnostic imaging center led by Dr. Sher Singh Gangwar (MBBS, MD, DNB). Delivering clinical excellence with 96 Multislice CT scans, Logic Totus Ultrasound, Fibroscan, Color Doppler, and same-day certified reports.
            </p>

            {/* Quality badges */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-900 border border-navy-800 text-xs text-slate-300">
                <Award className="w-3.5 h-3.5 text-brand-gold" />
                <span>ISO 9001 Quality Protocols</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-900 border border-navy-800 text-xs text-slate-300">
                <Shield className="w-3.5 h-3.5 text-brand-red-light" />
                <span>IRIA & IMA Certified</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-display text-white text-base font-bold tracking-wide border-b border-navy-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-red" />
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link to="/about" className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-red" />
                  <span>About Us</span>
                </Link>
              </li>
              <li>
                <Link to="/services" className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-red" />
                  <span>Services</span>
                </Link>
              </li>
              <li>
                <Link to="/doctors" className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-red" />
                  <span>Our Doctors</span>
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-red" />
                  <span>Gallery</span>
                </Link>
              </li>
              <li>
                <Link to="/testimonials" className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-red" />
                  <span>Testimonials</span>
                </Link>
              </li>
              <li>
                <Link to="/contact" className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-red" />
                  <span>Contact</span>
                </Link>
              </li>
              <li>
                <Link to="/appointment" className="flex items-center gap-1.5 text-brand-red-light hover:text-white font-bold transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 text-brand-red" />
                  <span>Book Appointment</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Diagnostic Services (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display text-white text-base font-bold tracking-wide border-b border-navy-800 pb-2">
              Our Services
            </h4>
            <ul className="space-y-2 text-sm">
              {servicesData.slice(0, 7).map((srv) => (
                <li key={srv.id}>
                  <Link
                    to={`/services/${srv.slug}`}
                    className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors truncate"
                  >
                    <ChevronRight className="w-3 h-3 text-brand-red shrink-0" />
                    <span className="truncate">{srv.title}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/services"
                  className="text-xs text-brand-red-light hover:underline inline-block pt-1 font-semibold"
                >
                  View All Diagnostic Modalities &rarr;
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Location (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-display text-white text-base font-bold tracking-wide border-b border-navy-800 pb-2">
              Contact Center
            </h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-red shrink-0 mt-1" />
                <span className="text-xs text-slate-300 leading-relaxed">
                  {contactInfo.address}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-red shrink-0" />
                <div className="flex flex-col text-xs">
                  <a href={`tel:${contactInfo.primaryPhoneClean}`} className="hover:text-white transition-colors font-semibold">
                    {contactInfo.primaryPhone}
                  </a>
                  <a
                    href={`https://wa.me/${contactInfo.whatsappAdmin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1 mt-0.5"
                  >
                    <MessageSquare className="w-3 h-3" />
                    <span>WhatsApp: {contactInfo.whatsappAdmin}</span>
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-red shrink-0" />
                <a href={`mailto:${contactInfo.email}`} className="text-xs hover:text-white transition-colors">
                  {contactInfo.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 pt-1">
                <Clock className="w-4 h-4 text-brand-gold shrink-0 mt-0.5" />
                <div className="text-[11px] text-slate-400 leading-tight">
                  <p className="text-slate-200">Mon–Sat: 9:00 AM – 9:00 PM</p>
                  <p>Sunday: 10:00 AM – 4:00 PM</p>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Legal & Compliance Row */}
        <div className="mt-12 pt-8 border-t border-navy-800/80 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6">
            <Link to="/privacy-policy" className="hover:text-slate-200 transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-700">&bull;</span>
            <Link to="/terms-conditions" className="hover:text-slate-200 transition-colors">
              Terms & Conditions
            </Link>
            <span className="text-slate-700">&bull;</span>
            <Link to="/faq" className="hover:text-slate-200 transition-colors">
              Patient FAQ
            </Link>
            <span className="text-slate-700">&bull;</span>
            <Link to="/contact" className="hover:text-slate-200 transition-colors">
              Location Map
            </Link>
          </div>

          <p className="text-center md:text-right text-slate-500">
            &copy; {new Date().getFullYear()} V Care Diagnostics & Imaging Center. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
