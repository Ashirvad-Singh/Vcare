import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Images } from 'lucide-react';
import { galleryData } from '../../data/gallery';
import { GalleryLightbox } from '../gallery/GalleryLightbox';
import { SectionHeading } from '../common/SectionHeading';

export const HomeGallery: React.FC = () => {
  return (
    <section className="py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <SectionHeading
            eyebrow="Center Facilities & Technology"
            title="A Glimpse Inside V Care Diagnostics"
            description="Explore our sanitized scan rooms, patient lounges, emergency triage bay, and clinical team at work."
            align="left"
          />

          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs uppercase tracking-wider text-medical bg-medical/10 hover:bg-medical hover:text-white transition-all shrink-0 self-start md:self-auto"
          >
            <Images className="w-4 h-4" />
            <span>Open Complete Gallery & Lightbox</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Gallery Lightbox Grid */}
        <GalleryLightbox items={galleryData.slice(0, 8)} />
      </div>
    </section>
  );
};
