import React from 'react';
import { SEO } from '../components/common/SEO';
import { HeroSlider } from '../components/home/HeroSlider';
import { TrustIndicators } from '../components/home/TrustIndicators';
import { FeaturedServices } from '../components/home/FeaturedServices';
import { AboutEditorial } from '../components/home/AboutEditorial';
import { StatsCounter } from '../components/home/StatsCounter';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { ServicesGrid } from '../components/home/ServicesGrid';
import { DoctorFeature } from '../components/home/DoctorFeature';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { HomeGallery } from '../components/home/HomeGallery';
import { HomeFAQ } from '../components/home/HomeFAQ';
import { AppointmentCTA } from '../components/home/AppointmentCTA';
import { ContactSection } from '../components/home/ContactSection';
import { AppointmentForm } from '../components/appointment/AppointmentForm';
import { SectionHeading } from '../components/common/SectionHeading';

export const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="Home"
        description="V Care Diagnostics & Imaging Center in Bareilly. Led by Dr. Sher Singh Gangwar (MBBS, MD, DNB). 96 Multislice CT Scan, Logic Totus Ultrasound, Fibroscan, Color Doppler, Digital X-Ray & Same-Day Reports."
      />

      {/* Hero Section */}
      <HeroSlider />

      {/* Trust Indicators Bar */}
      <TrustIndicators />

      {/* Featured Services (Asymmetrical Cards) */}
      <FeaturedServices />

      {/* About Section (Editorial Split-Screen) */}
      <AboutEditorial />

      {/* Statistics Section (GSAP Animated Counters) */}
      <StatsCounter />

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* All 8 Diagnostic Services Grid */}
      <ServicesGrid />

      {/* Inline Appointment Booking Section */}
      <section id="appointment-booking" className="py-24 bg-white border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Quick Online Booking"
            title="Book Your Diagnostic Appointment"
            description="Schedule your CT scan, ultrasound, or health checkup online. Our team coordinates fast slot allocations with instant WhatsApp confirmation."
            align="center"
          />
          <AppointmentForm />
        </div>
      </section>

      {/* Featured Doctor Profile */}
      <DoctorFeature />

      {/* Testimonials Slider */}
      <TestimonialsSection />

      {/* Gallery Preview & Lightbox */}
      <HomeGallery />

      {/* Frequently Asked Questions */}
      <HomeFAQ />

      {/* Appointment CTA Banner */}
      <AppointmentCTA />

      {/* Google Maps & Contact Section */}
      <ContactSection />
    </>
  );
};
