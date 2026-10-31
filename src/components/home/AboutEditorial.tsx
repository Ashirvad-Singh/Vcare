import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, Award, Shield, ArrowRight, UserCheck } from 'lucide-react';
import { chiefDoctor } from '../../data/doctors';

export const AboutEditorial: React.FC = () => {
  return (
    <section className="py-8 sm:py-24 bg-white relative overflow-hidden border-y border-slate-200/70">
      {/* Background soft shapes */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-soft -skew-x-12 pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-center">
          
          {/* Left Column: Editorial Medical Image with Glass Overlays (6 cols) */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              {/* Primary Image */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl border-2 sm:border-4 border-white">
                <img
                  src="/assets/img/about.jpg"
                  alt="V Care Diagnostic Center Facility"
                  className="w-full h-[200px] sm:h-[480px] lg:h-[540px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
              </div>

              {/* Floating Doctor Badge Card - hidden on phone to save vertical clutter */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="hidden sm:block absolute -bottom-6 -right-4 sm:-right-8 p-5 rounded-2xl bg-white/95 backdrop-blur-xl border border-slate-100 shadow-xl max-w-xs"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={chiefDoctor.photo}
                    alt={chiefDoctor.name}
                    className="w-14 h-14 rounded-full object-cover object-[72%_25%] border-2 border-brand-red shadow-sm shrink-0"
                  />
                  <div>
                    <h4 className="font-display text-sm font-bold text-navy-900 leading-tight">
                      {chiefDoctor.name}
                    </h4>
                    <p className="text-xs text-medical font-medium mt-0.5">
                      {chiefDoctor.qualification}
                    </p>
                    <p className="text-[11px] text-slate-500">
                      Consultant Radiologist
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Experience Badge */}
              <div className="absolute top-4 left-4 sm:top-6 sm:left-6 px-3 py-1 sm:px-4 sm:py-2 rounded-xl bg-navy-900/90 backdrop-blur-md text-white border border-white/20 text-[11px] sm:text-xs font-semibold shadow-lg flex items-center gap-1.5 sm:gap-2">
                <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400" />
                <span>12+ Years Clinical Excellence</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Editorial Text & Technology Credentials (6 cols) */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-medical/10 border border-medical/20 text-medical text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-2 sm:mb-4">
                <UserCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                <span>About V-Care Diagnostics</span>
              </div>

              <h2 className="font-display text-xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight">
                Reliable Diagnostic Services with <span className="text-gradient">Advanced Technology</span> & Expert Care.
              </h2>

              <p className="mt-2.5 sm:mt-5 text-xs sm:text-lg text-slate-600 leading-relaxed font-light line-clamp-2 sm:line-clamp-none">
                V Care Diagnostics & Imaging Center is Bareilly's trusted center for high-precision radiology. From routine screenings to complex multi-planar cross-sectional scans, we ensure accurate and timely reports.
              </p>

              {/* Bullet Points - concise on mobile */}
              <div className="mt-4 sm:mt-8 space-y-2.5 sm:space-y-4">
                <div className="flex items-start gap-2.5 sm:gap-3.5">
                  <div className="p-1 rounded-full bg-cyan-100 text-cyan-600 mt-0.5 shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-navy-900">Advanced 96 Multislice CT Scan & Fibroscan</h4>
                    <p className="hidden sm:block text-xs text-slate-500 mt-0.5">High-speed volumetric anatomical imaging and non-invasive liver elastography.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 sm:gap-3.5">
                  <div className="p-1 rounded-full bg-cyan-100 text-cyan-600 mt-0.5 shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-navy-900">Specialized Sonography & Fetal Echo</h4>
                    <p className="hidden sm:block text-xs text-slate-500 mt-0.5">4D/3D Live fetal scans, congenital cardiac evaluation, and multi-vessel Color Doppler.</p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5 sm:gap-3.5">
                  <div className="p-1 rounded-full bg-cyan-100 text-cyan-600 mt-0.5 shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-navy-900">Leadership by Renowned Radiologists</h4>
                    <p className="hidden sm:block text-xs text-slate-500 mt-0.5">Consultant credentials from Mata Chanan Devi Hospital (New Delhi) and Bareilly.</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 sm:mt-10 flex flex-wrap items-center gap-3">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3.5 rounded-xl font-semibold text-xs sm:text-sm text-white bg-navy-900 hover:bg-medical shadow-md transition-all duration-300"
                >
                  <span>Read Full Center Story</span>
                  <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </Link>

                <Link
                  to="/doctors"
                  className="hidden sm:inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-navy-900 bg-slate-100 hover:bg-slate-200 transition-all duration-300"
                >
                  <span>Meet Dr. Sher Singh Gangwar</span>
                </Link>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
