import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import { contactInfo } from '../../data/navigation';
import { SectionHeading } from '../common/SectionHeading';

export const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.phone || !formState.message) {
      alert('Please fill in your name, contact phone, and message.');
      return;
    }

    // Connect to WhatsApp inquiry
    const text = `*Inquiry — V Care Diagnostics*
*From:* ${formState.name}
*Phone:* ${formState.phone}
*Email:* ${formState.email || 'N/A'}
*Subject:* ${formState.subject || 'General Inquiry'}
*Message:* ${formState.message}`;

    const url = `https://wa.me/${contactInfo.whatsappAdmin}?text=${encodeURIComponent(text)}`;
    setSubmitted(true);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-10 sm:py-24 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Reach Our Diagnostic Care Center"
          description="Have questions regarding an upcoming scan, test preparation, doctor prescriptions, or directions? Contact us directly."
          align="center"
        />

        {/* Google Map Full Width Embed - compact on mobile */}
        <div className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-card border border-slate-200/90 mb-6 sm:mb-12 h-52 sm:h-96 relative">
          <iframe
            src={contactInfo.googleMapsUrl}
            title="V Care Diagnostics Bareilly Google Map Location"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Contact Information & Form Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12">
          
          {/* Contact Details (5 cols) */}
          <div className="lg:col-span-5 space-y-3.5 sm:space-y-6">
            <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-soft border border-slate-200 flex items-start gap-3 sm:gap-4">
              <div className="p-3 rounded-xl bg-navy-100 text-navy-900 shrink-0">
                <MapPin className="w-6 h-6 text-medical" />
              </div>
              <div>
                <h4 className="font-display text-base font-bold text-navy-900">Center Location</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  Opp. Pratap Hospital, Mini Bypass Road, Karamchari Nagar, Bareilly, Uttar Pradesh 243503
                </p>
                <a
                  href={contactInfo.googleMapsDirectionUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-medical hover:underline mt-2 inline-block"
                >
                  Get Driving Directions &rarr;
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-soft border border-slate-200 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-cyan-100 text-cyan-900 shrink-0">
                <Phone className="w-6 h-6 text-cyan-600" />
              </div>
              <div>
                <h4 className="font-display text-base font-bold text-navy-900">Phone & WhatsApp</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Primary Hotline:{' '}
                  <a href={`tel:${contactInfo.primaryPhoneClean}`} className="font-semibold text-navy-900 hover:text-medical">
                    {contactInfo.primaryPhone}
                  </a>
                </p>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                  WhatsApp Admin:{' '}
                  <a href={`tel:${contactInfo.secondaryPhoneClean}`} className="font-semibold text-navy-900 hover:text-medical">
                    {contactInfo.secondaryPhone}
                  </a>
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-soft border border-slate-200 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-emerald-100 text-emerald-900 shrink-0">
                <Mail className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <h4 className="font-display text-base font-bold text-navy-900">Email Inquiries</h4>
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-xs sm:text-sm text-slate-600 hover:text-medical mt-1 inline-block"
                >
                  {contactInfo.email}
                </a>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-soft border border-slate-200 flex items-start gap-4">
              <div className="p-3 rounded-xl bg-amber-100 text-amber-900 shrink-0">
                <Clock className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <h4 className="font-display text-base font-bold text-navy-900">Operating Timings</h4>
                <p className="text-xs sm:text-sm text-slate-600 mt-1">
                  Monday to Saturday: <strong className="text-navy-900">9:00 AM – 9:00 PM</strong>
                </p>
                <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                  Sunday: <strong className="text-navy-900">10:00 AM – 4:00 PM</strong>
                </p>
              </div>
            </div>
          </div>

          {/* Quick Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-5 sm:p-10 rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-card">
              <h3 className="font-display text-lg sm:text-2xl font-bold text-navy-900 mb-1.5 sm:mb-2">
                Send Us a Direct Message
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 mb-4 sm:mb-6">
                Fill in the details below. Messages are promptly routed to our reception coordinator via WhatsApp.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                  <span>Message inquiry launched via WhatsApp! Our team will respond shortly.</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-navy-900 uppercase tracking-wider mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ankit Verma"
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-medical focus:ring-2 focus:ring-medical/15"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-navy-900 uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9105275929"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-medical focus:ring-2 focus:ring-medical/15"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-navy-900 uppercase tracking-wider mb-1">
                      Email Address (Optional)
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. name@domain.com"
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-medical focus:ring-2 focus:ring-medical/15"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-navy-900 uppercase tracking-wider mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. CT Scan inquiry / Timing"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-medical focus:ring-2 focus:ring-medical/15"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-navy-900 uppercase tracking-wider mb-1">
                    Your Message *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="How can our diagnostic team help you today?"
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-medical focus:ring-2 focus:ring-medical/15"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-6 rounded-xl font-semibold text-white bg-navy-900 hover:bg-medical transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 text-cyan-400" />
                  <span>Send Inquiry via WhatsApp</span>
                  <Send className="w-4 h-4 ml-1" />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
