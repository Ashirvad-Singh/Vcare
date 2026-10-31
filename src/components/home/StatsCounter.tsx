import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CalendarCheck, Scan, Smile } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export const StatsCounter: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const num1Ref = useRef<HTMLSpanElement>(null);
  const num2Ref = useRef<HTMLSpanElement>(null);
  const num3Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const statsObj = { count1: 0, count2: 0, count3: 0 };

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: 'top 80%',
        onEnter: () => {
          gsap.to(statsObj, {
            count1: 500000,
            count2: 50000,
            count3: 600000,
            duration: 2.2,
            ease: 'power2.out',
            onUpdate: () => {
              if (num1Ref.current) {
                num1Ref.current.textContent = Math.floor(statsObj.count1).toLocaleString('en-US');
              }
              if (num2Ref.current) {
                num2Ref.current.textContent = Math.floor(statsObj.count2).toLocaleString('en-US');
              }
              if (num3Ref.current) {
                num3Ref.current.textContent = Math.floor(statsObj.count3).toLocaleString('en-US');
              }
            },
          });
        },
        once: true,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-20 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950 text-white relative overflow-hidden">
      {/* Background patterns */}
      <div className="absolute inset-0 medical-grid-pattern opacity-10 pointer-events-none" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-medical/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 inline-block mb-3">
            Proven Clinical Record
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white">
            Trusted by Doctors & Families Across Bareilly
          </h2>
          <p className="text-sm sm:text-base text-slate-300 mt-3 font-light">
            Every test performed at V Care Diagnostics adheres to stringent clinical benchmarks for zero-error diagnostic assurance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Stat 1: 500,000+ Ultrasounds */}
          <div className="glass-dark p-8 rounded-3xl border border-white/10 flex flex-col items-center text-center relative group hover:border-cyan-400/40 transition-colors shadow-2xl">
            <div className="p-4 rounded-2xl bg-cyan-500/10 text-cyan-300 border border-cyan-400/20 mb-5 group-hover:scale-110 transition-transform">
              <CalendarCheck className="w-8 h-8" />
            </div>
            <div className="flex items-baseline justify-center gap-1 font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              <span ref={num1Ref}>0</span>
              <span className="text-cyan-400">+</span>
            </div>
            <h3 className="text-lg font-bold text-slate-100 mt-2 font-display">
              Ultrasounds Completed
            </h3>
            <p className="text-xs text-slate-400 mt-1 max-w-xs">
              General, obstetric, 4D/3D scans, small parts and specialized doppler sonography.
            </p>
          </div>

          {/* Stat 2: 50,000+ Scans & Tests Done */}
          <div className="glass-dark p-8 rounded-3xl border border-white/10 flex flex-col items-center text-center relative group hover:border-cyan-400/40 transition-colors shadow-2xl">
            <div className="p-4 rounded-2xl bg-medical/20 text-medical-light border border-medical/30 mb-5 group-hover:scale-110 transition-transform">
              <Scan className="w-8 h-8" />
            </div>
            <div className="flex items-baseline justify-center gap-1 font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              <span ref={num2Ref}>0</span>
              <span className="text-cyan-400">+</span>
            </div>
            <h3 className="text-lg font-bold text-slate-100 mt-2 font-display">
              Scans & Tests Done
            </h3>
            <p className="text-xs text-slate-400 mt-1 max-w-xs">
              96-Slice CT, Fibroscan, Digital X-Rays, ECG and pathology investigations.
            </p>
          </div>

          {/* Stat 3: 600,000+ Happy Patients */}
          <div className="glass-dark p-8 rounded-3xl border border-white/10 flex flex-col items-center text-center relative group hover:border-cyan-400/40 transition-colors shadow-2xl">
            <div className="p-4 rounded-2xl bg-emerald-500/10 text-emerald-400 border border-emerald-400/20 mb-5 group-hover:scale-110 transition-transform">
              <Smile className="w-8 h-8" />
            </div>
            <div className="flex items-baseline justify-center gap-1 font-display text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              <span ref={num3Ref}>0</span>
              <span className="text-cyan-400">+</span>
            </div>
            <h3 className="text-lg font-bold text-slate-100 mt-2 font-display">
              Happy Patients Served
            </h3>
            <p className="text-xs text-slate-400 mt-1 max-w-xs">
              Decades of compassionate patient assistance, dignified care, and timely reporting.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};
