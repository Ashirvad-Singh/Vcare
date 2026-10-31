import React, { useState } from 'react';
import { Send, CheckCircle2, MessageSquare, AlertCircle, Calendar, User, Mail, Phone, FileText } from 'lucide-react';
import { contactInfo } from '../../data/navigation';

interface AppointmentFormProps {
  defaultService?: string;
  className?: string;
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({ defaultService = '', className = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    dateTime: '',
    testType: defaultService || '',
    notes: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState<string | null>(null);

  const testOptions = [
    'Advance 96 Multislice CT Scan',
    'Advanced Logic Totus Ultrasound',
    'Fibroscan (Liver Stiffness & Steatosis)',
    'Fetal Echocardiography',
    '4D / 3D Live Ultrasound',
    'Color Doppler Vascular Study',
    'Digital X-Ray',
    '12-Lead ECG & Echocardiography',
    'Routine Blood / Pathology Test',
    'Comprehensive Health Checkup Package',
    'Other Diagnostic Investigation'
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.phone.trim()) {
      newErrors.phone = 'Mobile number is required';
    } else if (!/^[0-9+ \-]{10,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    }
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.dateTime) newErrors.dateTime = 'Preferred date & time is required';
    if (!formData.testType) newErrors.testType = 'Please select a diagnostic test type';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    const formattedDate = new Date(formData.dateTime).toLocaleString('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short',
    });

    // Clean, readable WhatsApp formatted message
    const rawMessage = `🏥 *NEW APPOINTMENT REQUEST*
*V Care Diagnostics & Imaging Center*
----------------------------------------
👤 *Patient Name:* ${formData.name.trim()}
📱 *Mobile Number:* ${formData.phone.trim()}
📧 *Email Address:* ${formData.email.trim() || 'Not Provided'}
🔬 *Diagnostic Test:* ${formData.testType}
🗓️ *Preferred Date & Time:* ${formattedDate}
📝 *Symptoms / Notes:* ${formData.notes.trim() || 'None provided'}
----------------------------------------
_कृपया समय और तैयारी के निर्देश कन्फर्म करें।_`;

    const encoded = encodeURIComponent(rawMessage);
    const whatsappUrl = `https://wa.me/${contactInfo.whatsappAdmin}?text=${encoded}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedMessage('Opening WhatsApp to send your appointment request...');
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 400);
  };

  return (
    <div className={`glass-panel p-6 sm:p-8 lg:p-10 rounded-3xl shadow-card relative border border-slate-200/90 ${className}`}>
      
      {/* Informational Header */}
      <div className="mb-6 pb-6 border-b border-slate-200">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold mb-2">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Direct WhatsApp Booking &bull; सीधा व्हाट्सएप बुकिंग</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-brand-blue font-display">
          Schedule Your Diagnostic Scan
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 mt-1">
          Form bharte hi aapki appointment request seedhe hamare WhatsApp coordinator (<span className="font-semibold text-emerald-700">+91 {contactInfo.whatsappAdmin}</span>) par bhej di jayegi.
        </p>
      </div>

      {submittedMessage && (
        <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <p className="font-bold">WhatsApp khul gaya hai!</p>
            <p className="text-xs text-emerald-700 mt-0.5">
              Aapka appointment message WhatsApp par load ho chuka hai. Send button dabakar booking request confirm karein.
            </p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5" noValidate>
        {/* Name & Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Full Name / मरीज का नाम <span className="text-brand-red">*</span>
            </label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="e.g. Ramesh Kumar"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-slate-800 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                  errors.name ? 'border-brand-red focus:ring-brand-red/20' : 'border-slate-300 focus:border-brand-red focus:ring-brand-red/15'
                }`}
              />
            </div>
            {errors.name && <p className="text-xs text-brand-red font-medium mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Mobile Number / फोन नंबर <span className="text-brand-red">*</span>
            </label>
            <div className="relative">
              <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="tel"
                placeholder="e.g. 9105275929"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-slate-800 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                  errors.phone ? 'border-brand-red focus:ring-brand-red/20' : 'border-slate-300 focus:border-brand-red focus:ring-brand-red/15'
                }`}
              />
            </div>
            {errors.phone && <p className="text-xs text-brand-red font-medium mt-1">{errors.phone}</p>}
          </div>
        </div>

        {/* Email & Date */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Email Address <span className="text-slate-400 font-normal lowercase">(optional)</span>
            </label>
            <div className="relative">
              <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="email"
                placeholder="e.g. name@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full pl-10 pr-4 py-2.5 rounded-xl border text-sm text-slate-800 bg-white placeholder:text-slate-400 focus:outline-none focus:ring-2 transition-all ${
                  errors.email ? 'border-brand-red focus:ring-brand-red/20' : 'border-slate-300 focus:border-brand-red focus:ring-brand-red/15'
                }`}
              />
            </div>
            {errors.email && <p className="text-xs text-brand-red font-medium mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Preferred Date & Time / समय <span className="text-brand-red">*</span>
            </label>
            <input
              type="datetime-local"
              value={formData.dateTime}
              onChange={(e) => setFormData({ ...formData, dateTime: e.target.value })}
              className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 transition-all ${
                errors.dateTime ? 'border-brand-red focus:ring-brand-red/20' : 'border-slate-300 focus:border-brand-red focus:ring-brand-red/15'
              }`}
            />
            {errors.dateTime && <p className="text-xs text-brand-red font-medium mt-1">{errors.dateTime}</p>}
          </div>
        </div>

        {/* Test Type */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Select Test / जांच का प्रकार <span className="text-brand-red">*</span>
          </label>
          <select
            value={formData.testType}
            onChange={(e) => setFormData({ ...formData, testType: e.target.value })}
            className={`w-full px-4 py-2.5 rounded-xl border text-sm text-slate-800 bg-white focus:outline-none focus:ring-2 transition-all ${
              errors.testType ? 'border-brand-red focus:ring-brand-red/20' : 'border-slate-300 focus:border-brand-red focus:ring-brand-red/15'
            }`}
          >
            <option value="">-- Choose Diagnostic Test / Modality --</option>
            {testOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          {errors.testType && <p className="text-xs text-brand-red font-medium mt-1">{errors.testType}</p>}
        </div>

        {/* Notes */}
        <div>
          <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
            Doctor Advice / Symptoms (Optional)
          </label>
          <div className="relative">
            <FileText className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <textarea
              rows={3}
              placeholder="Doctor prescription details or specific test instructions..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-300 text-sm text-slate-800 bg-white placeholder:text-slate-400 focus:outline-none focus:border-brand-red focus:ring-2 focus:ring-brand-red/15 transition-all"
            />
          </div>
        </div>

        {/* WhatsApp Notice Box */}
        <div className="p-3.5 rounded-2xl bg-emerald-50/80 border border-emerald-200 text-xs text-emerald-900 flex items-start gap-2.5">
          <MessageSquare className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
          <span>
            Ye form submit karne par aapka appointment request seedhe admin WhatsApp (<strong>+91 {contactInfo.whatsappAdmin}</strong>) par open ho jayega.
          </span>
        </div>

        {/* Big WhatsApp Action Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-4 px-6 rounded-2xl font-bold text-white bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-600 hover:from-emerald-700 hover:to-teal-700 transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2.5 cursor-pointer disabled:opacity-75 group"
        >
          {isSubmitting ? (
            <span>Opening WhatsApp...</span>
          ) : (
            <>
              <MessageSquare className="w-5 h-5 text-white group-hover:scale-110 transition-transform" />
              <span className="text-sm sm:text-base">WhatsApp पर अपॉइंटमेंट भेजें (Send on WhatsApp)</span>
              <Send className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </form>
    </div>
  );
};
