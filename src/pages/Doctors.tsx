import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Shield, Building, CheckCircle2, Calendar, Users, GraduationCap, HeartHandshake } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { chiefDoctor, technicalTeamHighlights } from '../data/doctors';
import { AppointmentCTA } from '../components/home/AppointmentCTA';

export const Doctors: React.FC = () => {
  return (
    <>
      <SEO
        title="Our Radiologist & Medical Team"
        description="Meet Dr. Sher Singh Gangwar (MBBS, MD, DNB), Consultant Radiologist & Ultrasonologist at V Care Diagnostics Bareilly. Former consultant at Mata Chanan Devi Hospital and Siddharth Diagnostics."
        ogImage={chiefDoctor.photo}
      />

      {/* Header */}
      <div className="bg-navy-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 medical-grid-pattern opacity-15 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: 'Our Doctors' }]} />
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 inline-block mb-3">
              Medical Leadership
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Meet Our Chief Radiologist & Diagnostic Specialists
            </h1>
            <p className="mt-4 text-slate-300 text-base sm:text-lg font-light leading-relaxed">
              Dr. Sher Singh Gangwar brings over a decade of specialized radiology acumen cultivated in premier healthcare centers across New Delhi, Lucknow, and Bareilly.
            </p>
          </div>
        </div>
      </div>

      {/* Chief Doctor Deep-Dive Profile */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="glass-panel p-8 sm:p-14 lg:p-16 rounded-3xl border border-slate-200/90 shadow-2xl bg-gradient-to-br from-white via-soft to-white">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              
              {/* Doctor Photo & Credentials Badge (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-navy-950 max-w-md mx-auto">
                  <img
                    src={chiefDoctor.photo}
                    alt={chiefDoctor.name}
                    className="w-full h-[480px] object-cover object-[72%_25%]"
                  />
                  <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-navy-950 via-navy-950/80 to-transparent text-white">
                    <span className="text-xs uppercase tracking-widest text-cyan-300 font-semibold">
                      Consultant Radiologist & Ultrasonologist
                    </span>
                    <h2 className="font-display text-2xl font-bold text-white mt-0.5">
                      {chiefDoctor.name}
                    </h2>
                    <p className="text-xs text-slate-300 mt-1">
                      {chiefDoctor.qualification}
                    </p>
                  </div>
                </div>

                {/* Professional Memberships Card */}
                <div className="p-6 rounded-2xl bg-navy-900 text-white shadow-card max-w-md mx-auto">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-3 flex items-center gap-2">
                    <Shield className="w-4 h-4 text-cyan-400" />
                    <span>Statutory Memberships & Registrations</span>
                  </h4>
                  <ul className="space-y-2 text-xs text-slate-300">
                    {chiefDoctor.memberships.map((m, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 mt-0.5 shrink-0" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Comprehensive Bio & Experience (7 cols) */}
              <div className="lg:col-span-7 space-y-8">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-medical/10 border border-medical/20 text-medical text-xs font-semibold uppercase tracking-wider mb-3">
                    <Award className="w-3.5 h-3.5" />
                    <span>Clinical Director</span>
                  </div>
                  <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
                    {chiefDoctor.name}
                  </h2>
                  <p className="text-base font-semibold text-medical mt-1">
                    {chiefDoctor.qualification} &mdash; {chiefDoctor.role}
                  </p>
                  <p className="text-xs text-slate-500 font-medium mt-0.5">
                    {chiefDoctor.experience}
                  </p>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed font-light">
                  {chiefDoctor.bio.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>

                {/* Previous Hospital Appointments */}
                <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-sm">
                  <h3 className="font-display text-base font-bold text-navy-900 mb-3 flex items-center gap-2">
                    <Building className="w-4 h-4 text-medical" />
                    <span>Previous Prestigious Hospital Appointments</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {chiefDoctor.formerHospitals.map((hosp, idx) => (
                      <div key={idx} className="p-3 rounded-xl bg-soft border border-slate-200 text-xs font-semibold text-navy-900 text-center">
                        {hosp}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Core Specializations */}
                <div>
                  <h3 className="font-display text-base font-bold text-navy-900 mb-3 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-cyan-600" />
                    <span>Key Diagnostic Specializations</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {chiefDoctor.specializations.map((spec, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Consultation CTA */}
                <div className="pt-4 flex flex-wrap items-center gap-4">
                  <Link
                    to="/appointment"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-medical to-cyan-500 shadow-md hover:shadow-glow transition-all"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Request Diagnostic Consultation</span>
                  </Link>
                </div>

              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Technical and Radiology Staff Highlights */}
      <section className="py-20 bg-soft border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs uppercase tracking-widest text-medical font-semibold px-3 py-1 rounded-full bg-medical/10 border border-medical/20 inline-block mb-3">
              Certified Technologists
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-navy-900 tracking-tight">
              Supported by Trained Diagnostic Staff
            </h2>
            <p className="text-sm text-slate-600 mt-2 font-light">
              Every stage of your diagnostic process is assisted by qualified healthcare professionals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {technicalTeamHighlights.map((team, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-white border border-slate-200 shadow-card hover:shadow-card-hover transition-all">
                <div className="p-3 rounded-xl bg-cyan-50 text-cyan-700 inline-block mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="font-display text-lg font-bold text-navy-900 mb-2">{team.title}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">{team.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment CTA */}
      <AppointmentCTA />
    </>
  );
};
