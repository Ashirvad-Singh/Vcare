import React, { useState } from 'react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { galleryData, galleryCategories } from '../data/gallery';
import { GalleryLightbox } from '../components/gallery/GalleryLightbox';
import { AppointmentCTA } from '../components/home/AppointmentCTA';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all'
    ? galleryData
    : galleryData.filter((item) => item.category === activeCategory);

  return (
    <>
      <SEO
        title="Photo Gallery"
        description="View photographs of V Care Diagnostics & Imaging Center in Bareilly. Explore our modern CT suite, ultrasound rooms, sterile laboratory, and community health camps."
      />

      {/* Header */}
      <div className="bg-navy-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 medical-grid-pattern opacity-15 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: 'Gallery' }]} />
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 inline-block mb-3">
              Center Infrastructure
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              A Glimpse of Our Medical Facilities & Care
            </h1>
            <p className="mt-4 text-slate-300 text-base sm:text-lg font-light leading-relaxed">
              Explore our sanitized examination suites, modern diagnostic rooms, patient reception, and community healthcare outreach events.
            </p>
          </div>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <section className="py-6 bg-white border-b border-slate-200 sticky top-20 z-30 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {galleryCategories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  activeCategory === cat.value
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

      {/* Gallery Grid */}
      <section className="py-20 bg-soft min-h-[500px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryLightbox items={filteredItems} />
        </div>
      </section>

      {/* Appointment CTA */}
      <AppointmentCTA />
    </>
  );
};
