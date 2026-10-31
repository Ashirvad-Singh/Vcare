import React from 'react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { ContactSection } from '../components/home/ContactSection';
import { AppointmentCTA } from '../components/home/AppointmentCTA';

export const Contact: React.FC = () => {
  return (
    <>
      <SEO
        title="Contact Us & Center Location"
        description="Find directions to V Care Diagnostics & Imaging Center in Bareilly. Located opposite Pratap Hospital, Mini Bypass Road, Karamchari Nagar. Call +91 9105275929."
      />

      {/* Header */}
      <div className="bg-navy-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 medical-grid-pattern opacity-15 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: 'Contact Us' }]} />
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 inline-block mb-3">
              Reach Our Clinic
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Get In Touch & Visit Our Center
            </h1>
            <p className="mt-4 text-slate-300 text-base sm:text-lg font-light leading-relaxed">
              We are conveniently located on Mini Bypass Road, Karamchari Nagar, Bareilly. Reach out for appointment bookings, preparation instructions, or driving directions.
            </p>
          </div>
        </div>
      </div>

      {/* Contact & Map Component */}
      <ContactSection />

      {/* Appointment CTA */}
      <AppointmentCTA />
    </>
  );
};
