import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, MessageSquareQuote } from 'lucide-react';
import { testimonialsData } from '../../data/testimonials';
import { SectionHeading } from '../common/SectionHeading';

export const TestimonialsSection: React.FC = () => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % testimonialsData.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIdx((prev) => (prev - 1 + testimonialsData.length) % testimonialsData.length);
  };

  const handleNext = () => {
    setCurrentIdx((prev) => (prev + 1) % testimonialsData.length);
  };

  return (
    <section className="py-24 bg-soft border-t border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          eyebrow="Patient Voices & Reviews"
          title="What Our Patients Say About Us"
          description="Read genuine feedback from patients and families who experienced our diagnostic precision, patient dignity, and quick reporting."
          align="center"
        />

        {/* Featured Testimonial Spotlight */}
        <div className="max-w-4xl mx-auto relative">
          <div className="glass-panel p-8 sm:p-12 lg:p-14 rounded-3xl shadow-xl border border-slate-200/90 relative min-h-[320px] flex flex-col justify-between">
            {/* Background Big Quote Mark */}
            <Quote className="absolute top-6 right-6 sm:top-10 sm:right-10 w-20 h-20 text-cyan-200/30 -scale-x-100 pointer-events-none" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIdx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1">
                  {[...Array(testimonialsData[currentIdx].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <blockquote className="font-display text-lg sm:text-2xl font-medium text-navy-900 leading-relaxed italic">
                  "{testimonialsData[currentIdx].content}"
                </blockquote>

                {/* Author Info */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-medical to-cyan-500 text-white font-bold flex items-center justify-center font-display text-sm shadow-md">
                    {testimonialsData[currentIdx].initials}
                  </div>
                  <div>
                    <h4 className="font-display text-base font-bold text-navy-900">
                      {testimonialsData[currentIdx].name}
                    </h4>
                    <span className="text-xs text-medical font-medium">
                      {testimonialsData[currentIdx].role} &bull; Verified Review
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Slider Controls */}
            <div className="flex items-center justify-between mt-8 pt-4 border-t border-slate-100">
              {/* Pagination Dots */}
              <div className="flex items-center gap-2">
                {testimonialsData.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIdx(idx)}
                    aria-label={`Go to testimonial ${idx + 1}`}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      currentIdx === idx ? 'w-8 bg-medical' : 'w-2 bg-slate-300'
                    }`}
                  />
                ))}
              </div>

              {/* Prev / Next Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrev}
                  className="p-2.5 rounded-full bg-white border border-slate-200 hover:bg-slate-100 text-navy-900 shadow-sm transition-all active:scale-95"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNext}
                  className="p-2.5 rounded-full bg-white border border-slate-200 hover:bg-slate-100 text-navy-900 shadow-sm transition-all active:scale-95"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Mini Grid Below to showcase more reviewers at a glance */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonialsData.slice(0, 3).map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm text-xs space-y-2 hover:shadow-card transition-shadow"
            >
              <div className="flex items-center justify-between">
                <span className="font-bold text-navy-900">{item.name}</span>
                <span className="text-[10px] text-cyan-600 bg-cyan-50 px-2 py-0.5 rounded font-medium">
                  {item.role}
                </span>
              </div>
              <p className="text-slate-600 line-clamp-3 italic">
                "{item.content}"
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
