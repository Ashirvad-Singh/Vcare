import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, Phone, ArrowRight } from 'lucide-react';
import { faqsData } from '../../data/faqs';
import { SectionHeading } from '../common/SectionHeading';
import { contactInfo } from '../../data/navigation';

export const HomeFAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('1');

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-10 sm:py-24 bg-soft border-t border-slate-200/80">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Patient Information"
          title="Frequently Asked Questions"
          description="Find clear answers to common questions about diagnostic tests, doctor prescriptions, and center guidelines."
          align="center"
        />

        <div className="space-y-3 sm:space-y-4">
          {faqsData.slice(0, 6).map((item, index) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`bg-white rounded-xl sm:rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden transition-all duration-200 ${
                  index >= 3 ? 'hidden sm:block' : ''
                }`}
              >
                <button
                  onClick={() => toggleFAQ(item.id)}
                  className="w-full py-3.5 px-4 sm:py-5 sm:px-6 text-left flex items-center justify-between gap-3 sm:gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-xs sm:text-base font-bold text-navy-900 pr-2">
                    {item.question}
                  </span>
                  <div className={`p-1.5 sm:p-2 rounded-lg sm:rounded-xl transition-all ${isOpen ? 'bg-medical text-white rotate-180' : 'bg-slate-100 text-slate-500'}`}>
                    <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 pt-1 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 font-light">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Quick Help Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-sm">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-full bg-cyan-100 text-cyan-700 shrink-0">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display text-base font-bold text-navy-900">
                Have a specific scan question or special requirement?
              </h4>
              <p className="text-xs text-slate-500">
                Our front desk is available to assist you Monday through Saturday.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`tel:${contactInfo.primaryPhoneClean}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold text-xs text-white bg-medical hover:bg-medical-dark transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Call Helpline</span>
            </a>
            <Link
              to="/faq"
              className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl font-semibold text-xs text-navy-900 hover:bg-slate-100 transition-colors"
            >
              <span>More FAQs</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
