import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, ChevronRight, ChevronLeft, ShieldCheck, Activity, Award, MessageSquare } from 'lucide-react';
import { contactInfo } from '../../data/navigation';

const slides = [
  {
    image: '/assets/img/hero-carousel/hero-carousel-1.jpg',
    badge: 'Premier Medical Imaging in Bareilly',
    shortBadge: 'Premier Diagnostic Center',
    title: 'Advanced Diagnostics.',
    titleHighlight: 'Better Healthcare Decisions.',
    subtitle: 'Led by Dr. Sher Singh Gangwar (MBBS, MD, DNB), V Care Diagnostics delivers expert imaging care including 96 Multislice CT Scan, Logic Totus Ultrasound, Fibroscan, and same-day certified reports.',
    mobileSubtitle: '96 Multislice CT, 4D Ultrasound, Fibroscan & same-day verified reports.',
    ctaText: 'Explore Services',
    ctaLink: '/services',
  },
  {
    image: '/assets/img/hero-carousel/hero-carousel-2.jpg',
    badge: 'Precision Technology & Clinical Trust',
    shortBadge: 'Precision Technology',
    title: 'Sub-Millimeter Clarity.',
    titleHighlight: 'Accurate Radiology Insights.',
    subtitle: 'Experience supreme diagnostic accuracy with 96 Multislice CT, 4D Real-time Ultrasound, Fetal Echocardiography, and comprehensive Color Doppler vascular studies under one roof.',
    mobileSubtitle: 'High-definition 96 Slice CT & advanced 4D Color Doppler imaging.',
    ctaText: 'View All Modalities',
    ctaLink: '/services',
  },
  {
    image: '/assets/img/hero-carousel/hero-carousel-3.jpg',
    badge: 'Patient Dignity & Same-Day Reports',
    shortBadge: 'Fast Digital Reports',
    title: 'Patient Comfort',
    titleHighlight: 'Is Our Supreme Priority.',
    subtitle: 'ISO 9001 certified protocols, sanitized scanning rooms, trained radiology specialists, and digital reports delivered directly to your WhatsApp for rapid treatment.',
    mobileSubtitle: 'Sanitized private rooms with instant digital reports on WhatsApp.',
    ctaText: 'Contact Center',
    ctaLink: '/contact',
  },
];

export const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <section className="relative min-h-[460px] sm:min-h-[620px] sm:h-[84vh] max-h-[940px] w-full overflow-hidden bg-navy-950 text-white flex items-center">
      {/* Background Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.5, 1] }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt="V Care Diagnostic Center"
            className="w-full h-full object-cover object-center filter brightness-[0.68] contrast-[1.08]"
          />
          {/* Deep Navy Gradient Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/85 to-navy-950/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-navy-950/60" />
          <div className="absolute inset-0 medical-grid-pattern opacity-15 pointer-events-none" />
        </motion.div>
      </AnimatePresence>

      {/* Decorative Red & Gold High-Tech Scan Accent */}
      <div className="absolute top-0 right-10 lg:right-32 w-72 lg:w-96 h-full pointer-events-none hidden md:block opacity-35">
        <div className="absolute inset-0 border-x border-brand-red/20" />
        <motion.div
          animate={{ y: ['-10%', '110%'] }}
          transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
          className="w-full h-32 bg-gradient-to-b from-transparent via-brand-red/25 to-transparent border-b border-brand-red/60"
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-6 sm:py-16">
        <div className="max-w-3xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              {/* Logo Colors Eyebrow Badge */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 sm:px-3.5 sm:py-1.5 rounded-full bg-brand-red/20 border border-brand-red/40 text-brand-red-light text-[10px] sm:text-sm font-bold tracking-wide backdrop-blur-md mb-2 sm:mb-6 shadow-glow-red">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-brand-red animate-pulse" />
                <span className="text-white sm:hidden">{slides[current].shortBadge}</span>
                <span className="text-white hidden sm:inline">{slides[current].badge}</span>
              </div>

              {/* Heading - compact on mobile, fully visible text */}
              <h1 className="font-display text-xl sm:text-4xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight sm:leading-[1.12] mb-2 sm:mb-6">
                {slides[current].title}{' '}
                <span className="text-red-400 block sm:inline mt-0.5 sm:mt-1">
                  {slides[current].titleHighlight}
                </span>
              </h1>

              {/* Subtitle - crisp on mobile, detailed on desktop */}
              <p className="text-xs text-slate-200/90 leading-relaxed mb-4 sm:hidden font-light">
                {slides[current].mobileSubtitle}
              </p>
              <p className="hidden sm:block text-base lg:text-xl text-slate-200/90 leading-relaxed mb-8 max-w-2xl font-light">
                {slides[current].subtitle}
              </p>

              {/* CTA Action Buttons */}
              <div className="flex flex-row items-center gap-2 sm:gap-4">
                <Link
                  to="/appointment"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2 px-4 py-2.5 sm:px-7 sm:py-4 rounded-xl text-xs sm:text-base font-bold text-white bg-red-600 hover:bg-red-700 shadow-lg shadow-red-600/30 transition-all duration-300"
                >
                  <Calendar className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-amber-200" />
                  <span>Book Scan</span>
                </Link>

                <a
                  href={`https://wa.me/${contactInfo.whatsappAdmin}?text=Hello%20V%20Care%20Diagnostics%2C%20I%20would%20like%20to%20book%20a%20test%20appointment.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 py-2.5 sm:px-6 sm:py-4 rounded-xl text-xs sm:text-base font-semibold text-white bg-emerald-600/90 hover:bg-emerald-600 border border-emerald-400/40 backdrop-blur-md transition-all duration-300"
                >
                  <MessageSquare className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
                  <span>WhatsApp</span>
                </a>
              </div>

              {/* Floating Mini Indicators - hidden on phone */}
              <div className="mt-8 pt-6 border-t border-white/15 hidden sm:grid grid-cols-2 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-brand-red/20 text-brand-red-light border border-brand-red/30">
                    <Activity className="w-4 h-4 text-brand-red-light" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">96 Multislice CT</p>
                    <p className="text-[11px] text-slate-300">Sub-second Volumetric</p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-brand-blue/40 text-blue-300 border border-brand-blue/50">
                    <Award className="w-4 h-4 text-amber-300" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Dr. Sher Singh Gangwar</p>
                    <p className="text-[11px] text-slate-300">MBBS, MD, DNB</p>
                  </div>
                </div>

                <div className="hidden sm:flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-white">Same-Day Reports</p>
                    <p className="text-[11px] text-slate-300">Direct on WhatsApp</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slider Navigation Arrows */}
      <div className="absolute bottom-8 right-6 sm:right-12 z-20 flex items-center gap-3">
        <button
          onClick={prevSlide}
          aria-label="Previous Slide"
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 transition-all hover:scale-105 active:scale-95"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Slide Indicators */}
        <div className="flex items-center gap-2">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                current === idx ? 'w-8 bg-brand-red shadow-glow-red' : 'w-2 bg-white/40'
              }`}
            />
          ))}
        </div>

        <button
          onClick={nextSlide}
          aria-label="Next Slide"
          className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md border border-white/20 transition-all hover:scale-105 active:scale-95"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};
