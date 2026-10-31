import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, CheckCircle2, Building, Shield, ArrowRight, HeartHandshake } from 'lucide-react';
import { chiefDoctor } from '../../data/doctors';

export const DoctorFeature: React.FC = () => {
  return (
    <section className="py-10 sm:py-24 bg-white relative overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-2xl sm:rounded-3xl p-5 sm:p-12 lg:p-16 border border-slate-200/90 shadow-xl relative overflow-hidden bg-gradient-to-br from-white via-soft to-white">
          
          {/* Subtle medical badge watermark */}
          <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
            <Award className="w-80 h-80 text-medical" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center relative z-10">
            
            {/* Left: Doctor Photo with Frame (5 cols) */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative mx-auto max-w-md"
              >
                {/* Glow ring */}
                <div className="absolute -inset-2 bg-gradient-to-r from-medical to-cyan-400 rounded-2xl sm:rounded-3xl blur-lg opacity-30" />
                
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 sm:border-4 border-white bg-navy-950">
                  <img
                    src={chiefDoctor.photo}
                    alt={chiefDoctor.name}
                    className="w-full h-[280px] sm:h-[460px] object-cover object-[72%_25%]"
                  />
                  
                  {/* Bottom Doctor Title Strip */}
                  <div className="absolute bottom-0 inset-x-0 p-4 sm:p-6 bg-gradient-to-t from-navy-950 via-navy-950/80 to-transparent text-white">
                    <span className="text-[10px] sm:text-xs uppercase tracking-widest text-cyan-300 font-semibold">
                      Chief Consultant Radiologist
                    </span>
                    <h3 className="font-display text-lg sm:text-2xl font-bold text-white mt-0.5">
                      {chiefDoctor.name}
                    </h3>
                    <p className="text-[11px] sm:text-xs text-slate-300 mt-0.5">
                      {chiefDoctor.qualification} &bull; Ultrasonologist
                    </p>
                  </div>
                </div>

                {/* Lifetime Membership Pill */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-navy-900 text-white text-[10px] sm:text-xs font-semibold shadow-xl border border-white/20 whitespace-nowrap flex items-center gap-1.5">
                  <Shield className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-400" />
                  <span>IRIA & IMA Lifetime Member</span>
                </div>
              </motion.div>
            </div>

            {/* Right: Credentials & Career Journey (7 cols) */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6 mt-4 sm:mt-0">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3.5 sm:py-1.5 rounded-full bg-medical/10 border border-medical/20 text-medical text-[10px] sm:text-xs font-semibold uppercase tracking-wider mb-2 sm:mb-3">
                  <Award className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  <span>Medical Director & Radiologist</span>
                </div>

                <h2 className="font-display text-xl sm:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight">
                  {chiefDoctor.name}
                </h2>
                <p className="text-xs sm:text-sm font-semibold text-medical mt-0.5 sm:mt-1">
                  {chiefDoctor.qualification} &mdash; {chiefDoctor.role}
                </p>

                {/* Bio Paragraphs - concise on mobile */}
                <div className="mt-3 sm:mt-5 space-y-2.5 sm:space-y-3.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  <p>
                    {chiefDoctor.name} (MBBS, MD, DNB) is an expert radiologist with over a decade of clinical experience in advanced cross-sectional diagnostics, 96-slice CT scans, and 4D Color Doppler imaging.
                  </p>
                  <p className="hidden sm:block">
                    He has previously served at renowned healthcare institutions including <strong>Mata Chanan Devi Hospital (New Delhi)</strong>, <strong>Siddharth Diagnostic Centre (New Delhi)</strong>, and <strong>Focus Diagnostics (Bareilly)</strong>.
                  </p>
                  <p className="hidden sm:block">
                    With over a decade of clinical experience, Dr. Gangwar combines state-of-the-art diagnostic machinery with an exhaustive understanding of human anatomy to deliver fast, reliable, and clinically decisive insights for patients and consulting clinicians.
                  </p>
                </div>

                {/* Former Hospital Credentials */}
                <div className="mt-4 sm:mt-6 pt-3 sm:pt-5 border-t border-slate-200">
                  <h4 className="text-[11px] sm:text-xs font-bold text-navy-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Building className="w-3.5 h-3.5 text-cyan-600" />
                    <span>Previous Appointments:</span>
                  </h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {chiefDoctor.formerHospitals.map((hosp) => (
                      <span
                        key={hosp}
                        className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-lg bg-slate-100 text-slate-700 text-[11px] sm:text-xs font-medium border border-slate-200"
                      >
                        {hosp}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="mt-5 sm:mt-8 flex flex-wrap items-center gap-3">
                  <Link
                    to="/appointment"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-medical to-cyan-500 shadow-md hover:shadow-glow transition-all"
                  >
                    <HeartHandshake className="w-4 h-4" />
                    <span>Consult with Dr. Gangwar</span>
                  </Link>
                  <Link
                    to="/doctors"
                    className="hidden sm:inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-navy-900 bg-white hover:bg-slate-50 border border-slate-300 transition-all text-sm"
                  >
                    <span>Full Medical Bio & Credentials</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

              </motion.div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
