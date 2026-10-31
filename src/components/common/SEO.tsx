import React from 'react';
import { Helmet } from 'react-helmet-async';
import { contactInfo } from '../../data/navigation';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: 'website' | 'article';
  ogImage?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description = "Bareilly's premier diagnostic and imaging center led by Dr. Sher Singh Gangwar. High-precision 96 Multislice CT Scan, Logic Ultrasound, Fibroscan, Color Doppler, Digital X-Ray, and same-day reports.",
  canonical,
  ogType = 'website',
  ogImage = '/assets/img/hero-carousel/hero-carousel-1.jpg',
}) => {
  const fullTitle = title 
    ? `${title} | ${contactInfo.centerName}`
    : `${contactInfo.centerName} — ${contactInfo.tagline}`;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : 'https://vcarediagnostics.com';

  const schemaMarkup = {
    "@context": "https://schema.org",
    "@type": "DiagnosticLab",
    "name": "V Care Diagnostics & Imaging Center",
    "image": ogImage,
    "telephone": contactInfo.primaryPhone,
    "email": contactInfo.email,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Opp. Pratap Hospital, Mini Bypass Road, Karamchari Nagar",
      "addressLocality": "Bareilly",
      "addressRegion": "Uttar Pradesh",
      "postalCode": "243503",
      "addressCountry": "IN"
    },
    "founder": {
      "@type": "Physician",
      "name": "Dr. Sher Singh Gangwar",
      "medicalSpecialty": "Radiology"
    },
    "openingHours": [
      "Mo-Sa 09:00-21:00",
      "Su 10:00-16:00"
    ],
    "priceRange": "$$"
  };

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="CT Scan Bareilly, Ultrasound Bareilly, Dr Sher Singh Gangwar, Fibroscan Bareilly, Color Doppler, Digital X Ray, 4D Ultrasound, Fetal Echo, V Care Diagnostics" />
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonical || currentUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={contactInfo.centerName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(schemaMarkup)}
      </script>
    </Helmet>
  );
};
