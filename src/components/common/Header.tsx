import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Calendar, Phone, ChevronDown, ChevronRight, Images, MessageSquareQuote, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { contactInfo } from '../../data/navigation';
import { useWindowScroll } from '../../hooks/useWindowScroll';

// Primary streamlined menu items
const primaryNavItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Doctors', path: '/doctors' },
  { label: 'Contact', path: '/contact' },
];

// Secondary items organized in a clean "More" dropdown
const secondaryNavItems = [
  { label: 'Photo Gallery', path: '/gallery', icon: Images, desc: 'Facilities & machine photos' },
  { label: 'Patient Reviews', path: '/testimonials', icon: MessageSquareQuote, desc: 'What patients say' },
  { label: 'Frequently Asked Questions', path: '/faq', icon: HelpCircle, desc: 'Fasting & test preparation' },
];

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { isScrolled } = useWindowScroll();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [location.pathname]);

  // Click outside listener for dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock body scroll on mobile menu
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const isTransparent = isHomePage && !isScrolled;
  const isMoreActive = secondaryNavItems.some((item) => item.path === location.pathname);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isTransparent
          ? 'bg-navy-900/70 backdrop-blur-md border-b border-white/10 text-white'
          : 'bg-white/95 backdrop-blur-md border-b border-slate-200/90 text-navy-900 shadow-glass'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo with matching Logo colors */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none shrink-0">
            <div className="relative p-0.5 sm:p-1 rounded-full bg-white shadow-sm border border-slate-200 group-hover:scale-105 transition-transform duration-300">
              <img
                src="/assets/img/logo.png"
                alt="V Care Diagnostics Logo"
                className="h-9 w-9 sm:h-12 sm:w-12 object-contain"
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-baseline gap-1 font-display text-base sm:text-xl font-extrabold tracking-tight leading-tight">
                <span className={isTransparent ? 'text-white' : 'text-brand-blue'}>V CARE</span>
                <span className="text-brand-red">DIAGNOSTICS</span>
              </div>
              <span className={`text-[9px] sm:text-[11px] tracking-wider uppercase font-semibold ${isTransparent ? 'text-slate-300' : 'text-slate-500'}`}>
                & Imaging Center &bull; Bareilly
              </span>
            </div>
          </Link>

          {/* Clean, Streamlined Desktop Navigation (5 links + "More ▾") */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {primaryNavItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative px-3.5 py-2 text-sm font-semibold transition-all duration-200 rounded-lg group ${
                    isActive
                      ? isTransparent
                        ? 'text-white font-bold'
                        : 'text-brand-red font-bold'
                      : isTransparent
                      ? 'text-slate-200 hover:text-white hover:bg-white/10'
                      : 'text-slate-700 hover:text-brand-blue hover:bg-slate-100/80'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{item.label}</span>
                    {isActive && (
                      <motion.div
                        layoutId="navIndicator"
                        className={`absolute bottom-0 left-3 right-3 h-0.5 rounded-full ${
                          isTransparent ? 'bg-brand-red shadow-glow-red' : 'bg-brand-red'
                        }`}
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}

            {/* "More ▾" Dropdown for Gallery, Testimonials & FAQ */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className={`flex items-center gap-1 px-3.5 py-2 text-sm font-semibold rounded-lg transition-all ${
                  isMoreActive
                    ? isTransparent
                      ? 'text-white font-bold'
                      : 'text-brand-red font-bold'
                    : isTransparent
                    ? 'text-slate-200 hover:text-white hover:bg-white/10'
                    : 'text-slate-700 hover:text-brand-blue hover:bg-slate-100/80'
                }`}
                aria-expanded={dropdownOpen}
              >
                <span>More</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180 text-brand-red' : ''}`} />
              </button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-64 p-2 rounded-2xl bg-white shadow-2xl border border-slate-200/90 text-navy-900 z-50"
                  >
                    {secondaryNavItems.map((item) => {
                      const Icon = item.icon;
                      const active = location.pathname === item.path;
                      return (
                        <Link
                          key={item.path}
                          to={item.path}
                          onClick={() => setDropdownOpen(false)}
                          className={`flex items-start gap-3 p-2.5 rounded-xl transition-all ${
                            active
                              ? 'bg-brand-red/10 text-brand-red font-semibold'
                              : 'hover:bg-slate-50 text-slate-700 hover:text-brand-blue'
                          }`}
                        >
                          <div className={`p-2 rounded-lg shrink-0 mt-0.5 ${active ? 'bg-brand-red text-white' : 'bg-slate-100 text-brand-blue'}`}>
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <span className="text-sm font-bold block">{item.label}</span>
                            <span className="text-[11px] text-slate-500 block leading-tight">{item.desc}</span>
                          </div>
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${contactInfo.primaryPhoneClean}`}
              className={`p-2.5 rounded-xl border transition-colors ${
                isTransparent
                  ? 'border-white/20 text-white hover:bg-white/10'
                  : 'border-slate-200 text-brand-blue hover:bg-slate-100'
              }`}
              title="Call Reception"
              aria-label="Call Reception"
            >
              <Phone className="w-4 h-4 text-brand-red" />
            </a>

            <Link
              to="/appointment"
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-bold rounded-xl text-white bg-brand-red hover:bg-brand-red-dark bg-gradient-to-r from-brand-red to-brand-red-dark transition-all duration-300 shadow-md hover:shadow-glow-red hover:-translate-y-0.5"
            >
              <Calendar className="w-4 h-4 text-amber-200 shrink-0" />
              <span className="text-white font-bold whitespace-nowrap">Book Appointment</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              to="/appointment"
              className="px-3 py-1.5 text-xs font-bold rounded-lg bg-brand-red text-white shadow-sm"
            >
              Book
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-xl border transition-colors ${
                isTransparent
                  ? 'border-white/20 text-white hover:bg-white/10'
                  : 'border-slate-200 text-navy-900 hover:bg-slate-100'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-navy-950/98 backdrop-blur-xl border-b border-navy-800 text-white overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 space-y-4">
              
              {/* Primary Links */}
              <div className="space-y-1">
                {primaryNavItems.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-4 py-2.5 rounded-xl text-base font-medium transition-all ${
                        isActive
                          ? 'bg-brand-red/20 text-brand-red-light font-bold border border-brand-red/40'
                          : 'text-slate-200 hover:bg-navy-900 hover:text-white'
                      }`
                    }
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-4 h-4 text-slate-400" />
                  </NavLink>
                ))}
              </div>

              {/* Secondary Links Category */}
              <div className="pt-3 border-t border-navy-800">
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 px-4 mb-1 block">
                  More Resources
                </span>
                <div className="space-y-1">
                  {secondaryNavItems.map((item) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={({ isActive }) =>
                        `flex items-center justify-between px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                          isActive
                            ? 'bg-brand-red/20 text-brand-red-light font-bold'
                            : 'text-slate-300 hover:bg-navy-900 hover:text-white'
                        }`
                      }
                    >
                      <span>{item.label}</span>
                      <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                    </NavLink>
                  ))}
                </div>
              </div>

              {/* Mobile Appointment & WhatsApp Button */}
              <div className="pt-4 border-t border-navy-800 space-y-2.5">
                <Link
                  to="/appointment"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-center text-white font-bold bg-gradient-to-r from-brand-red to-brand-red-dark shadow-glow-red"
                >
                  <Calendar className="w-4 h-4 text-amber-200" />
                  <span>Book Appointment Online</span>
                </Link>

                <a
                  href={`https://wa.me/${contactInfo.whatsappAdmin}?text=Hello%20V%20Care%20Diagnostics%2C%20I%20would%20like%20to%20book%20an%20appointment.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-sm transition-colors"
                >
                  <span>Chat on WhatsApp (+91 {contactInfo.whatsappAdmin})</span>
                </a>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
