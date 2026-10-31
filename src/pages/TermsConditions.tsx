import React from 'react';
import { AlertCircle, FileText, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { contactInfo } from '../data/navigation';

export const TermsConditions: React.FC = () => {
  return (
    <>
      <SEO
        title="Terms & Conditions"
        description="Terms of service, diagnostic appointment policies, and clinical disclaimers for V Care Diagnostics & Imaging Center, Bareilly."
      />

      <div className="bg-navy-950 text-white py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: 'Terms & Conditions' }]} />
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-white">
            Terms & Conditions of Service
          </h1>
          <p className="mt-3 text-slate-300 text-sm sm:text-base font-light">
            Effective: January 2026 &bull; General Patient Guidelines & Clinical Disclaimers
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none space-y-8 text-sm sm:text-base text-slate-600 leading-relaxed font-light">
            
            <div className="p-6 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-3.5">
              <AlertCircle className="w-6 h-6 text-amber-700 shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-base font-bold text-amber-900 m-0">Medical Disclaimer</h3>
                <p className="text-xs sm:text-sm text-amber-800 m-0 mt-1">
                  Diagnostic imaging and laboratory findings are clinical aids designed to assist licensed physicians. They do not constitute independent medical diagnoses or therapeutic plans. Please discuss all reports with your treating physician.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-navy-900 mb-3">1. Doctor Referral & Statutory Compliance</h2>
              <p>
                In strict compliance with statutory healthcare laws in India, diagnostic procedures including Computed Tomography (CT), Obstetric Sonography, and Contrast Studies require a valid prescription or referral from a registered medical practitioner.
              </p>
              <p className="mt-2 text-xs text-rose-600 font-semibold uppercase">
                Notice: Under the Pre-Conception and Pre-Natal Diagnostic Techniques (PCPNDT) Act, sex determination of the fetus is strictly prohibited and punishable by law. V Care Diagnostics complies 100% with all PCPNDT protocols.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-navy-900 mb-3">2. Online Appointment Requests</h2>
              <p>
                Submitting an appointment request through our website or WhatsApp interface registers an initial booking request. Final slot confirmation is subject to doctor availability, machine scheduling, and verified completion of preparation protocols (such as fasting or contrast clearance).
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-navy-900 mb-3">3. Patient Preparation Responsibility</h2>
              <p>
                Accurate diagnostic outcomes depend on strict adherence to instructed preparation guidelines (e.g. 6-8 hours fasting for ultrasound abdomen, full bladder for pelvic scans, recent normal creatinine for contrast CT). If preparation criteria are not met, our staff reserves the right to reschedule the test for the patient's own safety and accuracy.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-navy-900 mb-3">4. Turnaround Times & Report Delivery</h2>
              <p>
                While we make every effort to deliver same-day reports within indicated timeframes, emergency cases or unexpected equipment recalibration may occasionally alter delivery schedules. Digital copies are provided as a convenience; physical printed films and signed reports remain available at our front desk.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-navy-900 mb-3">5. Inquiries & Grievances</h2>
              <p>
                For any administrative questions or service clarifications:
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm mt-3">
                <p><strong>V Care Diagnostics & Imaging Center</strong></p>
                <p>Opp. Pratap Hospital, Mini Bypass Road, Karamchari Nagar, Bareilly 243503</p>
                <p>Helpline: {contactInfo.primaryPhone} | Email: {contactInfo.email}</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};
