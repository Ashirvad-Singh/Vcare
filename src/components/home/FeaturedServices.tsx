import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Activity, Waves, Radio, ScanLine } from 'lucide-react';
import { SectionHeading } from '../common/SectionHeading';

const featured = [
  {
    id: 'ct-scan',
    title: '96 Multislice CT Scan',
    tagline: 'High-Resolution Volumetric Imaging',
    desc: 'Routine, 3D, Angiography, Urography & Contrast CTs with precision sub-millimeter anatomical slicing and lowest radiation dose.',
    image: '/assets/img/departments-1.jpg',
    icon: Activity,
    badge: 'Flagship Technology',
    accent: 'from-blue-600/90 to-navy-950/95',
  },
  {
    id: 'ultrasound-logic-totus',
    title: 'Logic Totus Ultrasound',
    tagline: 'Advanced Maternal & Fetal Sonography',
    desc: 'Abdominal, Obstetric, Small Parts, 3D/4D Live scans and Fetal Echo with multi-frequency matrix probes.',
    image: '/assets/img/departments-2.jpg',
    icon: Waves,
    badge: 'High-Precision Sonography',
    accent: 'from-cyan-700/90 to-navy-950/95',
  },
  {
    id: 'color-doppler',
    title: 'Color Doppler Studies',
    tagline: 'Comprehensive Vascular Blood Flow Mapping',
    desc: 'Obstetrics, Peripheral limb vessels for DVT, Carotid artery plaque screening, and Renal vascular assessment.',
    image: '/assets/img/departments-3.jpg',
    icon: Radio,
    badge: 'Hemodynamic Diagnostics',
    accent: 'from-sky-700/90 to-navy-950/95',
  },
  {
    id: 'digital-x-ray',
    title: 'High-Frequency Digital X-Ray',
    tagline: 'Immediate Bone & Chest Radiography',
    desc: 'Digital skeletal series, chest examinations, and special contrast investigations including Barium, IVP, and HSG.',
    image: '/assets/img/services.jpg',
    icon: ScanLine,
    badge: 'Instant Digital Results',
    accent: 'from-indigo-700/90 to-navy-950/95',
  },
];

export const FeaturedServices: React.FC = () => {
  return (
    <section className="py-10 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeading
        eyebrow="Key Diagnostic Modalities"
        title="Pioneering Medical Imaging in Bareilly"
        description="Our high-precision diagnostic procedures provide fast, trustworthy results for you and your consulting physician."
        align="center"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {featured.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-[250px] sm:h-[440px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-500 border border-slate-200/80 flex flex-col justify-end p-4 sm:p-6"
            >
              {/* Background Image with Zoom */}
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
              />

              {/* Gradient Scrim */}
              <div className={`absolute inset-0 bg-gradient-to-t ${item.accent} opacity-90 group-hover:opacity-95 transition-opacity duration-300`} />

              {/* Subtle grid pattern overlay */}
              <div className="absolute inset-0 opacity-10 medical-grid-pattern pointer-events-none" />

              {/* Top Floating Badge */}
              <div className="absolute top-4 left-4 right-4 sm:top-6 sm:left-6 sm:right-6 flex items-center justify-between z-10">
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20">
                  {item.badge}
                </span>
                <div className="p-2 sm:p-2.5 rounded-full bg-white/15 backdrop-blur-md text-cyan-300 group-hover:bg-cyan-400 group-hover:text-navy-900 transition-colors">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10 text-white">
                <span className="text-[10px] sm:text-xs text-cyan-300 font-medium tracking-wide block mb-0.5 sm:mb-1">
                  {item.tagline}
                </span>
                <h3 className="font-display text-base sm:text-2xl font-bold text-white mb-1 sm:mb-2 group-hover:text-cyan-200 transition-colors">
                  {item.title}
                </h3>
                <p className="hidden sm:block text-xs sm:text-sm text-slate-200/90 leading-relaxed line-clamp-3 mb-5 font-light">
                  {item.desc}
                </p>

                <Link
                  to={`/services/${item.id}`}
                  className="inline-flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold text-white group-hover:text-cyan-300 tracking-wide uppercase transition-all mt-1 sm:mt-0"
                >
                  <span>Explore Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Bottom CTA to view all 8 services */}
      <div className="mt-8 sm:mt-12 text-center">
        <Link
          to="/services"
          className="inline-flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl text-xs sm:text-sm font-semibold text-medical bg-white border border-medical/20 hover:bg-medical hover:text-white shadow-sm transition-all duration-300"
        >
          <span>View All 8 Specialized Services</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};
