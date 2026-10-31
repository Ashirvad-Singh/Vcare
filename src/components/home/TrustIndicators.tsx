import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Award, Waves, HeartHandshake } from 'lucide-react';

const indicators = [
  {
    title: '96 Multislice CT Scan',
    desc: 'Ultra low-radiation volumetric scan with 3D angiography',
    icon: Activity,
    color: 'text-brand-red',
    bg: 'bg-brand-red/10',
  },
  {
    title: 'Consultant Radiologist',
    desc: 'Dr. Sher Singh Gangwar (MBBS, MD, DNB) over a decade experience',
    icon: Award,
    color: 'text-brand-blue',
    bg: 'bg-brand-blue/10',
  },
  {
    title: 'Logic Totus Ultrasound',
    desc: 'High-frequency obstetric, 4D/3D & Color Doppler diagnostics',
    icon: Waves,
    color: 'text-brand-red',
    bg: 'bg-brand-red/10',
  },
  {
    title: 'Patient-Centered Care',
    desc: 'Sanitized private suites, digital tokens & fast report delivery',
    icon: HeartHandshake,
    color: 'text-emerald-700',
    bg: 'bg-emerald-50',
  },
];

export const TrustIndicators: React.FC = () => {
  return (
    <section className="relative -mt-4 sm:-mt-8 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="glass-panel rounded-2xl shadow-xl border border-white/80 p-3 sm:p-6 lg:p-8 bg-white/95 backdrop-blur-xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6 lg:gap-8">
          {indicators.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center sm:items-start gap-2 sm:gap-4 p-1.5 sm:p-0"
              >
                <div className={`p-2 sm:p-3 rounded-xl sm:rounded-2xl ${item.bg} ${item.color} shadow-sm shrink-0`}>
                  <Icon className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="font-display text-xs sm:text-base font-bold text-navy-900 leading-snug">
                    {item.title}
                  </h4>
                  <p className="hidden sm:block text-xs text-slate-500 mt-1 leading-snug line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
