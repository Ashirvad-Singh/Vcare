import React from 'react';
import { Star, Quote, CheckCircle2, MessageSquare, ThumbsUp, Heart } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { testimonialsData } from '../data/testimonials';
import { AppointmentCTA } from '../components/home/AppointmentCTA';
import { contactInfo } from '../data/navigation';

export const Testimonials: React.FC = () => {
  return (
    <>
      <SEO
        title="Patient Testimonials & Reviews"
        description="Read verified patient reviews and ratings for V Care Diagnostics in Bareilly. Learn about patient experiences with Dr. Sher Singh Gangwar and our diagnostic staff."
      />

      {/* Header */}
      <div className="bg-navy-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 medical-grid-pattern opacity-15 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: 'Testimonials' }]} />
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 inline-block mb-3">
              Patient Experiences
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Patient Voices & Community Trust
            </h1>
            <p className="mt-4 text-slate-300 text-base sm:text-lg font-light leading-relaxed">
              We are honored to have served over 600,000 patients across Bareilly. Read genuine experiences shared by families, patients, and local community guides.
            </p>
          </div>
        </div>
      </div>

      {/* Trust Highlights Strip */}
      <section className="py-8 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-around gap-6 text-center">
            <div>
              <div className="flex items-center justify-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs font-bold text-navy-900 mt-1">4.9 / 5.0 Star Rating</p>
              <p className="text-[11px] text-slate-500">Google & Verified Patient Feedback</p>
            </div>

            <div className="h-8 w-px bg-slate-200 hidden md:block" />

            <div>
              <p className="font-display text-xl font-bold text-navy-900">600,000+</p>
              <p className="text-xs text-slate-500">Patients Cared For</p>
            </div>

            <div className="h-8 w-px bg-slate-200 hidden md:block" />

            <div>
              <p className="font-display text-xl font-bold text-navy-900">99.8%</p>
              <p className="text-xs text-slate-500">Diagnostic Repeat Accuracy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-20 bg-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between relative group hover:-translate-y-1"
              >
                <Quote className="absolute top-6 right-6 w-12 h-12 text-slate-100 group-hover:text-cyan-100 transition-colors pointer-events-none -scale-x-100" />
                
                <div>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-light italic mb-6">
                    "{item.content}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-medical to-cyan-500 text-white font-bold flex items-center justify-center text-xs shadow-sm">
                    {item.initials}
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-navy-900">{item.name}</h4>
                    <span className="text-[11px] text-cyan-600 font-medium">{item.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Feedback Invitation Callout */}
          <div className="mt-16 p-8 rounded-3xl bg-white border border-slate-200 shadow-card text-center max-w-2xl mx-auto space-y-4">
            <Heart className="w-8 h-8 text-rose-500 mx-auto" />
            <h3 className="font-display text-xl font-bold text-navy-900">
              Have You Visited V Care Diagnostics Recently?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 font-light max-w-lg mx-auto">
              Your valuable feedback helps our clinical staff and management continuously improve service wait times and patient care.
            </p>
            <a
              href={`https://wa.me/${contactInfo.whatsappAdmin}?text=Hello%2C%20I%20would%20like%20to%20share%20my%20feedback%20regarding%20my%20recent%20visit%20to%20V%20Care%20Diagnostics.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-xs text-white bg-navy-900 hover:bg-medical transition-colors"
            >
              <MessageSquare className="w-4 h-4 text-cyan-400" />
              <span>Share Feedback on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Appointment CTA */}
      <AppointmentCTA />
    </>
  );
};
