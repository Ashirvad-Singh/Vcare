import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Layers, Users, Clock, ShieldCheck, Zap } from 'lucide-react';

const reasons = [
  {
    title: 'Accurate Test Results',
    desc: 'We ensure dependable and timely test results utilizing fully automated, high-definition digital systems with AI-guided calibrations.',
    icon: CheckCircle2,
    badge: 'Zero-Error Standard',
  },
  {
    title: 'Advanced Imaging Modalities',
    desc: 'From 96 Multislice CT scans to matrix probe ultrasound and digital X-rays, our imaging infrastructure captures fine anatomical structures.',
    icon: Layers,
    badge: 'Latest Technology',
  },
  {
    title: 'Experienced Lab & Radiology Staff',
    desc: 'Our registered technicians and sonographers adhere to strict sterile protocols, ensuring hygiene, patient comfort, and procedural accuracy.',
    icon: Users,
    badge: 'Expert Clinical Team',
  },
  {
    title: 'Same-Day Fast Reports',
    desc: 'Most reports are processed and verified rapidly, with digital reports delivered straight to your WhatsApp to avoid treatment delays.',
    icon: Clock,
    badge: 'Immediate Delivery',
  },
];

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-10 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        
        {/* Left Column: Image Composition (5 cols) */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl border-2 sm:border-4 border-white">
            <img
              src="/assets/img/features.jpg"
              alt="High-tech diagnostic machines at V Care"
              className="w-full h-[220px] sm:h-[520px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent" />
            
            {/* Overlay highlight badge - compact on mobile */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-slate-100">
              <div className="flex items-center gap-2.5 sm:gap-3">
                <div className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-cyan-100 text-cyan-700 shrink-0">
                  <ShieldCheck className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="font-display text-xs sm:text-sm font-bold text-navy-900">
                    ISO 9001 Quality Benchmarks
                  </h4>
                  <p className="hidden sm:block text-xs text-slate-500">
                    Highest standards in medical radiation safety & patient care
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Pill */}
          <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 px-3 py-1 sm:px-4 sm:py-2 rounded-full bg-medical text-white text-[10px] sm:text-xs font-bold shadow-glow flex items-center gap-1.5">
            <Zap className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-cyan-300" />
            <span>AI-Integrated Precision</span>
          </div>
        </div>

        {/* Right Column: 4 Key Reasons (7 cols) */}
        <div className="lg:col-span-7">
          <div className="mb-5 sm:mb-8">
            <span className="text-[10px] sm:text-xs uppercase tracking-widest text-medical font-semibold px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-medical/10 border border-medical/20 inline-block mb-2 sm:mb-3">
              The V Care Advantage
            </span>
            <h2 className="font-display text-xl sm:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight">
              Why Patients & Physicians Trust V Care Diagnostics
            </h2>
            <p className="text-xs sm:text-base text-slate-600 mt-2 sm:mt-3 font-light leading-relaxed line-clamp-2 sm:line-clamp-none">
              Our center bridges state-of-the-art diagnostic technology with genuine human empathy.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-5">
            {reasons.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-white border border-slate-200/90 shadow-card hover:shadow-card-hover transition-all duration-300 group hover:-translate-y-1"
                >
                  <div className="flex items-center justify-between mb-2 sm:mb-3">
                    <div className="p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-navy-50 text-medical group-hover:bg-medical group-hover:text-white transition-colors">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    </div>
                    <span className="text-[9px] sm:text-[10px] uppercase font-bold tracking-wider text-cyan-600 bg-cyan-50 px-2 py-0.5 rounded-full">
                      {item.badge}
                    </span>
                  </div>
                  <h3 className="font-display text-sm sm:text-base font-bold text-navy-900 group-hover:text-medical transition-colors mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-slate-500 leading-relaxed font-light line-clamp-2 sm:line-clamp-none">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
