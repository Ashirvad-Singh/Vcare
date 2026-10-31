import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Clock, CheckCircle2 } from 'lucide-react';
import { servicesData } from '../../data/services';
import { SectionHeading } from '../common/SectionHeading';

export const ServicesGrid: React.FC = () => {
  return (
    <section className="py-24 bg-soft border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Comprehensive Diagnostic Care"
          title="All Diagnostic & Imaging Services"
          description="High-precision clinical imaging and specialized scans under one roof — accurate, fast, and interpreted by experienced specialists."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
            >
              <div>
                {/* Image Header with Badge */}
                <div className="relative h-48 overflow-hidden bg-navy-950">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
                  
                  {/* Category Pill */}
                  <span className="absolute top-3 left-3 text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20">
                    {service.category}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-display text-base font-bold text-navy-900 group-hover:text-medical transition-colors leading-snug mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-light line-clamp-3 mb-4">
                    {service.shortDesc}
                  </p>

                  <div className="flex items-center gap-1.5 text-[11px] text-cyan-700 bg-cyan-50/80 px-2.5 py-1 rounded-lg border border-cyan-100">
                    <Clock className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                    <span className="font-medium truncate">TAT: {service.turnaroundTime}</span>
                  </div>
                </div>
              </div>

              {/* Card Footer with Learn More Link */}
              <div className="p-5 pt-0 mt-2">
                <Link
                  to={`/services/${service.slug}`}
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold text-navy-900 bg-slate-50 hover:bg-medical hover:text-white border border-slate-200 flex items-center justify-center gap-1.5 transition-all group-hover:border-medical"
                >
                  <span>Service Details & Prep</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
