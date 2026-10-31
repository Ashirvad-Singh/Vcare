import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Award, Shield, CheckCircle2, HeartHandshake, Zap, Calendar, Building, Sparkles } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { chiefDoctor } from '../data/doctors';
import { AppointmentCTA } from '../components/home/AppointmentCTA';

export const About: React.FC = () => {
  return (
    <>
      <SEO
        title="About Us"
        description="Learn about V Care Diagnostics & Imaging Center in Bareilly, led by Dr. Sher Singh Gangwar (MBBS, MD, DNB). ISO 9001 certified diagnostic care, 96-slice CT, and high-frequency sonography."
      />

      {/* Hero Header */}
      <div className="bg-navy-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 medical-grid-pattern opacity-15 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: 'About Us' }]} />
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 inline-block mb-3">
              About V Care Diagnostics
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Clinical Precision, Compassionate Care, and Modern Imaging Technology.
            </h1>
            <p className="mt-4 text-slate-300 text-base sm:text-lg font-light leading-relaxed">
              Established under the clinical leadership of Dr. Sher Singh Gangwar (MBBS, MD, DNB), V Care Diagnostics has performed over 500,000 ultrasounds and 50,000 high-precision scans for patients across Bareilly and western Uttar Pradesh.
            </p>
          </div>
        </div>
      </div>

      {/* Main Editorial Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                <img
                  src="/assets/img/about.jpg"
                  alt="V Care Diagnostics Bareilly Facility"
                  className="w-full h-[520px] object-cover"
                />
              </div>

              {/* Floating Quality Badge */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 p-6 rounded-2xl bg-white shadow-xl border border-slate-100 max-w-xs">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-50 text-cyan-700">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-bold text-navy-900">
                      ISO 9001 Certified
                    </h4>
                    <p className="text-xs text-slate-500">
                      Strict diagnostic protocols and sterile patient environments
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs uppercase tracking-widest text-medical font-semibold px-3 py-1 rounded-full bg-medical/10 border border-medical/20 inline-block">
                Our Story & Commitment
              </span>

              <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight leading-tight">
                Pioneering Accurate Radiological Insights Since Inception
              </h2>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light">
                At V Care Diagnostics & Imaging Center, our journey began with a simple but unyielding conviction: every medical decision starts with an accurate diagnosis. Located strategically opposite Pratap Hospital near Mini Bypass Road, Karamchari Nagar, our facility was engineered from the ground up to offer clinical accuracy without patient discomfort.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-light">
                We have eliminated guesswork by investing in high-frequency matrix ultrasound systems, 96-slice multi-detector CT imaging, non-invasive liver elastography (Fibroscan), and high-frequency digital radiography.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <div className="p-4 rounded-xl bg-soft border border-slate-200">
                  <div className="flex items-center gap-2 text-navy-900 font-bold text-sm mb-1">
                    <Sparkles className="w-4 h-4 text-cyan-500" />
                    <span>Sub-Millimeter Imaging</span>
                  </div>
                  <p className="text-xs text-slate-500">
                    Capturing high-resolution cross-sectional details with low-dose radiation.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-soft border border-slate-200">
                  <div className="flex items-center gap-2 text-navy-900 font-bold text-sm mb-1">
                    <HeartHandshake className="w-4 h-4 text-cyan-500" />
                    <span>Patient-First Philosophy</span>
                  </div>
                  <p className="text-xs text-slate-500">
                    Dignified patient care, private suites, and immediate digital report access.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Leadership Profile Section */}
      <section className="py-24 bg-soft border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-medical font-semibold px-3 py-1 rounded-full bg-medical/10 border border-medical/20 inline-block mb-3">
              Medical Leadership
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
              Guided by Decades of Clinical Excellence
            </h2>
            <p className="text-base text-slate-600 mt-3 font-light">
              Under Dr. Sher Singh Gangwar’s clinical leadership, every radiological report undergoes meticulous scrutiny.
            </p>
          </div>

          <div className="glass-panel p-6 sm:p-10 lg:p-12 rounded-3xl border border-slate-200 shadow-xl max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 items-stretch bg-white">
            <div className="md:col-span-5 flex">
              <div className="relative w-full min-h-[360px] sm:min-h-[420px] rounded-2xl overflow-hidden shadow-xl border-4 border-white bg-navy-950 flex flex-col justify-end">
                <img
                  src={chiefDoctor.photo}
                  alt={chiefDoctor.name}
                  className="absolute inset-0 w-full h-full object-cover object-[72%_25%]"
                />
                <div className="relative z-10 p-5 bg-gradient-to-t from-navy-950/95 via-navy-950/60 to-transparent text-white">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold block mb-1">
                    Senior Radiologist in Clinical Action
                  </span>
                  <h4 className="font-display text-lg font-bold text-white">
                    {chiefDoctor.name}
                  </h4>
                  <p className="text-xs text-slate-300">
                    Consultant Radiologist & Ultrasonologist
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-7 flex flex-col justify-center space-y-4">
              <h3 className="font-display text-2xl font-bold text-navy-900">
                {chiefDoctor.name}
              </h3>
              <p className="text-sm font-semibold text-medical">
                {chiefDoctor.qualification} &bull; {chiefDoctor.role}
              </p>
              <div className="space-y-3 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                <p>
                  Dr. Gangwar completed his specialized medical and radiological training from prestigious institutions, followed by Senior Consultant roles in New Delhi at Mata Chanan Devi Hospital and Siddharth Diagnostic Centre.
                </p>
                <p>
                  He is a lifetime member of the Indian Radiological & Imaging Association (IRIA) and the Indian Medical Association (IMA).
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-2">
                {chiefDoctor.memberships.map((m, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-lg bg-navy-50 text-navy-900 text-xs font-medium border border-navy-100">
                    {m}
                  </span>
                ))}
              </div>

              <div className="pt-4">
                <Link
                  to="/appointment"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-brand-red to-brand-red-dark hover:from-brand-red-dark hover:to-brand-red shadow-md hover:shadow-glow-red transition-all"
                >
                  <Calendar className="w-4 h-4 text-amber-200" />
                  <span>Request Appointment with Dr. Gangwar</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Principles */}
      <section className="py-24 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-cyan-600 font-semibold px-3 py-1 rounded-full bg-cyan-50 border border-cyan-200 inline-block mb-3">
              Our Core Pillars
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-navy-900">
              The Standards We Never Compromise On
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-soft border border-slate-200 hover:shadow-card transition-shadow">
              <div className="p-3 rounded-xl bg-navy-100 text-medical inline-block mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-navy-900 mb-2">Diagnostic Integrity</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                Every image is cross-referenced with clinical indications. We double-check borderline findings to ensure doctors and patients have absolute clarity.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-soft border border-slate-200 hover:shadow-card transition-shadow">
              <div className="p-3 rounded-xl bg-cyan-100 text-cyan-700 inline-block mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-navy-900 mb-2">Radiation Safety</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                We strictly adhere to ALARA (As Low As Reasonably Achievable) radiation protocols on our 96-slice CT and high-frequency digital X-ray suites.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-soft border border-slate-200 hover:shadow-card transition-shadow">
              <div className="p-3 rounded-xl bg-emerald-100 text-emerald-700 inline-block mb-4">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="font-display text-lg font-bold text-navy-900 mb-2">Rapid Turnaround</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                Medical emergencies require instant decisions. Most of our ultrasound and digital X-ray reports are handed over within 30 to 60 minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment CTA */}
      <AppointmentCTA />
    </>
  );
};
