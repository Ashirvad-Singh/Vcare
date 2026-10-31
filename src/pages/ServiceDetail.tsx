import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Clock, ShieldCheck, CheckCircle2, AlertCircle, Calendar, ArrowRight, Phone, FileText } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { servicesData } from '../data/services';
import { AppointmentForm } from '../components/appointment/AppointmentForm';
import { contactInfo } from '../data/navigation';
import { chiefDoctor } from '../data/doctors';

export const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const relatedServices = servicesData.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <>
      <SEO
        title={service.title}
        description={`${service.shortDesc} Available at V Care Diagnostics & Imaging Center, Bareilly under Dr. Sher Singh Gangwar.`}
        ogImage={service.image}
      />

      {/* Header */}
      <div className="bg-navy-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 medical-grid-pattern opacity-15 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs
            items={[
              { label: 'Services', path: '/services' },
              { label: service.title },
            ]}
          />
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 inline-block mb-3">
              Diagnostic Modality &bull; {service.category}
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              {service.title}
            </h1>
            <p className="mt-4 text-slate-300 text-base sm:text-lg font-light leading-relaxed">
              {service.shortDesc}
            </p>
          </div>
        </div>
      </div>

      {/* Detail Content Layout */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Content (8 cols) */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Featured Image */}
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-slate-100 relative h-80 sm:h-96">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-4 left-4 sm:left-6 px-4 py-2 rounded-xl bg-navy-900/90 backdrop-blur-md text-white text-xs font-semibold flex items-center gap-2 border border-white/20">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span>Report Turnaround: {service.turnaroundTime}</span>
                </div>
              </div>

              {/* Service Description */}
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-navy-900 mb-4">
                  Clinical Overview & Technology
                </h2>
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light">
                  {service.fullDesc}
                </p>
              </div>

              {/* Key Diagnostic Features */}
              <div className="p-8 rounded-3xl bg-soft border border-slate-200">
                <h3 className="font-display text-xl font-bold text-navy-900 mb-6 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-medical" />
                  <span>Key Modality Features & Capabilities</span>
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-sm">
                      <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Patient Preparation Instructions */}
              <div className="p-8 rounded-3xl bg-amber-50/70 border border-amber-200/80">
                <h3 className="font-display text-xl font-bold text-navy-900 mb-4 flex items-center gap-2 text-amber-900">
                  <AlertCircle className="w-5 h-5 text-amber-600" />
                  <span>Patient Preparation Guidelines</span>
                </h3>
                <p className="text-xs text-amber-800 mb-4">
                  Please review the recommended guidelines prior to visiting our clinic to ensure optimal test accuracy:
                </p>
                <ul className="space-y-2.5">
                  {service.preparation.map((prep, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-amber-900 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                      <span>{prep}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Why Choose V Care for this scan */}
              <div>
                <h3 className="font-display text-xl font-bold text-navy-900 mb-4">
                  Why Have This Scan at V Care Diagnostics?
                </h3>
                <div className="space-y-3">
                  {service.whyChooseThis.map((reason, idx) => (
                    <div key={idx} className="flex items-center gap-3 p-4 rounded-xl bg-white border border-slate-200 shadow-sm">
                      <div className="w-2 h-2 rounded-full bg-medical shrink-0" />
                      <span className="text-xs sm:text-sm text-slate-700 font-medium">{reason}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Related Diagnostic Services */}
              <div className="pt-8 border-t border-slate-200">
                <h3 className="font-display text-xl font-bold text-navy-900 mb-6">
                  Related Diagnostic Imaging
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {relatedServices.map((rel) => (
                    <Link
                      key={rel.id}
                      to={`/services/${rel.slug}`}
                      className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-medical hover:shadow-card transition-all group"
                    >
                      <h4 className="font-display text-sm font-bold text-navy-900 group-hover:text-medical transition-colors line-clamp-1 mb-1">
                        {rel.title}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-2">
                        {rel.shortDesc}
                      </p>
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-medical mt-3">
                        Learn More <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Sidebar: Booking Form & Support (4 cols) */}
            <div className="lg:col-span-4 space-y-8">
              
              {/* Presetted Appointment Form */}
              <AppointmentForm defaultService={service.title} />

              {/* Radiologist Note */}
              <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-card">
                <div className="flex items-center gap-3 mb-4">
                  <img
                    src={chiefDoctor.photo}
                    alt={chiefDoctor.name}
                    className="w-12 h-12 rounded-full object-cover border border-cyan-400"
                  />
                  <div>
                    <h4 className="font-display text-sm font-bold text-navy-900">{chiefDoctor.name}</h4>
                    <p className="text-xs text-medical">{chiefDoctor.role}</p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed italic">
                  "Accurate imaging is the cornerstone of effective clinical therapy. All studies in our department are interpreted personally with multi-planar reconstruction."
                </p>
              </div>

              {/* Direct Call Reception */}
              <div className="p-6 rounded-2xl bg-navy-950 text-white shadow-xl">
                <h4 className="font-display text-base font-bold text-white mb-2">Need Immediate Guidance?</h4>
                <p className="text-xs text-slate-300 mb-4">
                  Call our reception team for fasting questions or same-day walk-in availability.
                </p>
                <a
                  href={`tel:${contactInfo.primaryPhoneClean}`}
                  className="w-full py-3 px-4 rounded-xl font-semibold text-xs text-white bg-medical hover:bg-medical-dark transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call {contactInfo.primaryPhone}</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
};
