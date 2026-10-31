import React from 'react';
import { useLocation } from 'react-router-dom';
import { Calendar, Clock, AlertCircle, ShieldCheck, CheckCircle2, Phone, MapPin } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { AppointmentForm } from '../components/appointment/AppointmentForm';
import { contactInfo } from '../data/navigation';

export const Appointment: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const defaultService = searchParams.get('service') || '';

  return (
    <>
      <SEO
        title="Book Diagnostic Appointment"
        description="Schedule your 96-slice CT scan, ultrasound, Fibroscan, or digital X-ray online at V Care Diagnostics Bareilly. Direct WhatsApp confirmation."
      />

      {/* Header */}
      <div className="bg-navy-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 medical-grid-pattern opacity-15 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: 'Book Appointment' }]} />
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 inline-block mb-3">
              Online Priority Scheduling
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Book Your Diagnostic Scan or Test
            </h1>
            <p className="mt-4 text-slate-300 text-base sm:text-lg font-light leading-relaxed">
              Submit your slot request. Our patient care team coordinates with our radiologist to confirm your appointment and provide required preparation instructions.
            </p>
          </div>
        </div>
      </div>

      {/* Booking Form Layout */}
      <section className="py-20 bg-soft">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Form Column (7 cols) */}
            <div className="lg:col-span-7">
              <AppointmentForm defaultService={defaultService} />
            </div>

            {/* Preparation & Info Sidebar (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Important Patient Guidelines Box */}
              <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-card">
                <div className="flex items-center gap-2.5 text-medical font-bold text-sm mb-4">
                  <AlertCircle className="w-5 h-5 text-medical" />
                  <span>Before Your Appointment</span>
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                    <p>
                      <strong>Doctor Referral:</strong> Please carry your original prescription or doctor advice slip on the day of the test.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                    <p>
                      <strong>Fasting Guidelines:</strong> 6 to 8 hours of fasting is required for abdominal ultrasounds. 3 hours fasting for Fibroscan.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                    <p>
                      <strong>Bladder Preparation:</strong> For pelvic, early pregnancy, and KUB ultrasounds, drink 4–5 glasses of water 1 hour before and do not void urine.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-cyan-600 shrink-0 mt-0.5" />
                    <p>
                      <strong>Contrast CT (CECT):</strong> A recent Serum Creatinine report (within 30 days) is mandatory.
                    </p>
                  </div>
                </div>
              </div>

              {/* Operating Hours & Fast Contact Card */}
              <div className="p-8 rounded-3xl bg-navy-950 text-white shadow-xl space-y-4">
                <div className="flex items-center gap-2 text-cyan-400 text-xs uppercase font-bold tracking-wider">
                  <Clock className="w-4 h-4" />
                  <span>Working Hours & Walk-Ins</span>
                </div>

                <h3 className="font-display text-xl font-bold text-white">
                  Flexible Diagnostic Timings
                </h3>

                <div className="text-xs text-slate-300 space-y-1.5 pt-1">
                  <p className="flex justify-between border-b border-white/10 pb-2">
                    <span>Monday &ndash; Saturday</span>
                    <strong className="text-white">9:00 AM &ndash; 9:00 PM</strong>
                  </p>
                  <p className="flex justify-between pt-1">
                    <span>Sunday</span>
                    <strong className="text-white">10:00 AM &ndash; 4:00 PM</strong>
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-col gap-2.5">
                  <a
                    href={`tel:${contactInfo.primaryPhoneClean}`}
                    className="w-full py-3 px-4 rounded-xl font-semibold text-xs text-white bg-medical hover:bg-medical-dark transition-colors flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Reception: {contactInfo.primaryPhone}</span>
                  </a>

                  <a
                    href={contactInfo.googleMapsDirectionUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl font-semibold text-xs text-slate-300 hover:text-white bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center gap-2"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>View Map Directions</span>
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  );
};
