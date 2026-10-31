import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Phone } from 'lucide-react';
import { SEO } from '../components/common/SEO';
import { contactInfo } from '../data/navigation';

export const NotFound: React.FC = () => {
  return (
    <>
      <SEO title="Page Not Found" />
      <div className="min-h-[70vh] flex items-center justify-center bg-soft px-4 py-20">
        <div className="max-w-md w-full text-center space-y-6 p-8 rounded-3xl bg-white border border-slate-200 shadow-xl">
          <div className="w-20 h-20 rounded-full bg-navy-50 text-medical font-display text-3xl font-extrabold flex items-center justify-center mx-auto border border-medical/20">
            404
          </div>
          <h1 className="font-display text-2xl font-bold text-navy-900">
            Page Not Found
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
            The page you are looking for may have been moved, renamed, or is temporarily unavailable.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <Link
              to="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-medical hover:bg-medical-dark transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Back to Homepage</span>
            </Link>
            <Link
              to="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-navy-900 bg-slate-100 hover:bg-slate-200 transition-colors"
            >
              <span>Our Services</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
