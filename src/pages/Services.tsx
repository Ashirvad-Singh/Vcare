import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, ShieldCheck, CheckCircle2, Calendar, FileText } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { servicesData } from '../data/services';
import { AppointmentCTA } from '../components/home/AppointmentCTA';

const categories = [
  { id: 'all', label: 'All Modalities' },
  { id: 'radiology', label: 'CT & X-Ray' },
  { id: 'ultrasound', label: 'Ultrasound & Sonography' },
  { id: 'cardiac', label: 'Cardiac & Echo' },
  { id: 'liver', label: 'Fibroscan & Liver' },
];

export const Services: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = activeCategory === 'all'
    ? servicesData
    : servicesData.filter((s) => s.category === activeCategory);

  return (
    <>
      <SEO
        title="Diagnostic Services"
        description="Explore comprehensive medical imaging and scans at V Care Diagnostics Bareilly. 96 Multislice CT, Logic Totus Ultrasound, Fibroscan, Fetal Echo, Color Doppler, Digital X-Ray, and ECG."
      />

      {/* Header */}
      <div className="bg-navy-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 medical-grid-pattern opacity-15 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: 'Our Services' }]} />
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 inline-block mb-3">
              Precision Clinical Imaging
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Comprehensive Diagnostic & Imaging Services
            </h1>
            <p className="mt-4 text-slate-300 text-base sm:text-lg font-light leading-relaxed">
              Every scan at V Care Diagnostics is executed using modern digital acquisition hardware and interpreted directly by Dr. Sher Singh Gangwar (MBBS, MD, DNB).
            </p>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <section className="py-8 bg-white border-b border-slate-200 sticky top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat.id
                    ? 'bg-navy-900 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-navy-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-soft min-h-[500px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="relative h-56 overflow-hidden bg-navy-950">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                    
                    <span className="absolute top-4 left-4 text-[10px] uppercase font-bold tracking-wider px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20">
                      {service.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <h3 className="font-display text-lg sm:text-xl font-bold text-navy-900 group-hover:text-medical transition-colors mb-2">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light line-clamp-3 mb-5">
                      {service.shortDesc}
                    </p>

                    <div className="space-y-2 mb-5">
                      {service.features.slice(0, 3).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-cyan-800 bg-cyan-50 px-3 py-1.5 rounded-lg border border-cyan-100">
                      <Clock className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                      <span className="font-medium">TAT: {service.turnaroundTime}</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-slate-100 flex items-center gap-3 mt-4">
                  <Link
                    to={`/services/${service.slug}`}
                    className="flex-1 py-3 px-4 rounded-xl text-xs font-semibold text-center text-navy-900 bg-slate-100 hover:bg-slate-200 transition-colors"
                  >
                    View Details
                  </Link>

                  <Link
                    to={`/appointment?service=${encodeURIComponent(service.title)}`}
                    className="py-3 px-4 rounded-xl text-xs font-semibold text-white bg-medical hover:bg-medical-dark transition-colors flex items-center gap-1.5 shadow-sm"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>Book</span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment CTA */}
      <AppointmentCTA />
    </>
  );
};
