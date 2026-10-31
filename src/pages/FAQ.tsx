import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ChevronDown, HelpCircle, Phone, MessageSquare, AlertCircle } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { Breadcrumbs } from '../components/common/Breadcrumbs';
import { faqsData, faqCategories } from '../data/faqs';
import { AppointmentCTA } from '../components/home/AppointmentCTA';
import { contactInfo } from '../data/navigation';

export const FAQ: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({ '1': true });

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredFaqs = faqsData.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <SEO
        title="Frequently Asked Questions (FAQ)"
        description="Have questions about diagnostic tests at V Care Diagnostics? Read answers on doctor prescriptions, CT scans, ultrasound fasting, same-day reports, and directions."
      />

      {/* Header */}
      <div className="bg-navy-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 medical-grid-pattern opacity-15 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Breadcrumbs items={[{ label: 'Frequently Asked Questions' }]} />
          <div className="max-w-3xl">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/20 inline-block mb-3">
              Patient Help Desk
            </span>
            <h1 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-slate-300 text-base sm:text-lg font-light leading-relaxed">
              Find transparent answers to common inquiries regarding scan preparation, reporting timeframes, medical prescriptions, and insurance.
            </p>

            {/* Search Input Box */}
            <div className="mt-8 relative max-w-xl">
              <Search className="w-5 h-5 text-slate-400 absolute left-4 top-3.5" />
              <input
                type="text"
                placeholder="Search questions (e.g. CT scan, fasting, report timing, prescription)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-slate-300 text-sm focus:outline-none focus:bg-white/20 focus:border-cyan-400"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <section className="py-6 bg-white border-b border-slate-200 sticky top-20 z-30 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {faqCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-navy-900 text-white shadow-md'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-navy-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Accordions List */}
      <section className="py-20 bg-soft min-h-[500px]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFaqs.length === 0 ? (
            <div className="p-12 text-center bg-white rounded-3xl border border-slate-200">
              <HelpCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <h3 className="font-display text-lg font-bold text-navy-900">No matching questions found</h3>
              <p className="text-xs text-slate-500 mt-1">
                Try searching with different keywords or call our reception desk directly.
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredFaqs.map((faq) => {
                const isOpen = !!openIds[faq.id];
                return (
                  <div
                    key={faq.id}
                    className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden transition-all duration-200"
                  >
                    <button
                      onClick={() => toggleItem(faq.id)}
                      className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                    >
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-600 bg-cyan-50 px-2 py-0.5 rounded mr-2">
                          {faq.category}
                        </span>
                        <span className="font-display text-base font-bold text-navy-900">
                          {faq.question}
                        </span>
                      </div>
                      <div className={`p-2 rounded-xl transition-all ${isOpen ? 'bg-medical text-white rotate-180' : 'bg-slate-100 text-slate-500'}`}>
                        <ChevronDown className="w-4 h-4 shrink-0" />
                      </div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 font-light">
                            {faq.answer}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          )}

          {/* Quick Support Banner */}
          <div className="mt-16 p-8 rounded-3xl bg-white border border-slate-200 shadow-card flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3.5 rounded-2xl bg-cyan-50 text-cyan-700">
                <HelpCircle className="w-7 h-7" />
              </div>
              <div>
                <h4 className="font-display text-base font-bold text-navy-900">Still have a diagnostic query?</h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Speak directly with our front desk counselor or send a WhatsApp message.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <a
                href={`tel:${contactInfo.primaryPhoneClean}`}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs text-white bg-navy-900 hover:bg-medical transition-colors text-center"
              >
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>Call Center</span>
              </a>
              <a
                href={`https://wa.me/${contactInfo.whatsappAdmin}?text=Hello%20V%20Care%20Diagnostics%2C%20I%20have%20a%20question.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-xs text-white bg-emerald-600 hover:bg-emerald-700 transition-colors text-center"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment CTA */}
      <AppointmentCTA />
    </>
  );
};
