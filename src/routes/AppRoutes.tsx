import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Services } from '../pages/Services';
import { ServiceDetail } from '../pages/ServiceDetail';
import { Doctors } from '../pages/Doctors';
import { Gallery } from '../pages/Gallery';
import { Testimonials } from '../pages/Testimonials';
import { FAQ } from '../pages/FAQ';
import { Contact } from '../pages/Contact';
import { Appointment } from '../pages/Appointment';
import { PrivacyPolicy } from '../pages/PrivacyPolicy';
import { TermsConditions } from '../pages/TermsConditions';
import { NotFound } from '../pages/NotFound';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/:slug" element={<ServiceDetail />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/testimonials" element={<Testimonials />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/appointment" element={<Appointment />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-conditions" element={<TermsConditions />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
