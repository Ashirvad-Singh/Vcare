import React from 'react';
import { Shield, Lock, FileText, CheckCircle2 } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { contactInfo } from '../data/navigation';

export const PrivacyPolicy: React.FC = () => {
  return (
    <>
      <SEO
        title="Privacy Policy"
        description="Privacy policy and diagnostic data protection practices at V Care Diagnostics & Imaging Center, Bareilly."
      />

      <div className="bg-navy-950 text-white py-16 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: 'Privacy Policy' }]} />
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-white">
            Patient Privacy Policy
          </h1>
          <p className="mt-3 text-slate-300 text-sm sm:text-base font-light">
            Last Updated: January 2026 &bull; Strict Medical Record Confidentiality
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-slate max-w-none space-y-8 text-sm sm:text-base text-slate-600 leading-relaxed font-light">
            
            <div className="p-6 rounded-2xl bg-soft border border-slate-200 flex items-start gap-3.5">
              <Shield className="w-6 h-6 text-medical shrink-0 mt-1" />
              <div>
                <h3 className="font-display text-base font-bold text-navy-900 m-0">Our Confidentiality Pledge</h3>
                <p className="text-xs sm:text-sm text-slate-600 m-0 mt-1">
                  At V Care Diagnostics & Imaging Center, patient confidentiality is held with the highest ethical gravity. We do not sell, rent, or publicly disclose your personal or medical records to any third-party marketing entities.
                </p>
              </div>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-navy-900 mb-3">1. Information We Collect</h2>
              <p>
                When you visit our center or book an appointment online, we collect personal identifying information (such as your full name, mobile number, email address, age, gender, and home address) as well as medical information (such as doctor referral prescriptions, past diagnostic reports, clinical symptoms, and scan images).
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-navy-900 mb-3">2. How We Use Patient Data</h2>
              <p>Your information is collected solely for the purposes of:</p>
              <ul className="space-y-1.5 list-disc pl-5 mt-2">
                <li>Performing and interpreting your requested radiological scans and laboratory tests.</li>
                <li>Transmitting digital copies of certified test reports to your registered WhatsApp number or email address.</li>
                <li>Maintaining statutory diagnostic records in compliance with Indian healthcare and medical regulatory mandates (including PCPNDT compliance for obstetric sonography).</li>
                <li>Communicating critical test alerts, follow-up scheduling, or preparation guidelines.</li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-navy-900 mb-3">3. Medical Data Security & Archival</h2>
              <p>
                Our digital PACS (Picture Archiving and Communication System) and laboratory information networks employ industry-standard encryption protocols. Physical archives and printed film sheets are stored in access-controlled environments accessible only to authorized radiology personnel.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-navy-900 mb-3">4. Third-Party Links & Messaging</h2>
              <p>
                Our online booking integration utilizes WhatsApp for direct messaging. Transmission over WhatsApp is subject to Meta's end-to-end encryption protocols. We recommend patients ensure their personal devices are password-protected.
              </p>
            </div>

            <div>
              <h2 className="font-display text-xl font-bold text-navy-900 mb-3">5. Contact Our Privacy Officer</h2>
              <p>
                If you have questions regarding the confidentiality of your diagnostic records or wish to update your contact details, please reach out directly:
              </p>
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm mt-3">
                <p><strong>V Care Diagnostics & Imaging Center</strong></p>
                <p>Opp. Pratap Hospital, Mini Bypass Road, Karamchari Nagar, Bareilly (U.P) 243503</p>
                <p>Email: {contactInfo.email} | Phone: {contactInfo.primaryPhone}</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};
