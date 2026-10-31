import { GalleryItem } from '../types';

export const galleryData: GalleryItem[] = [
  {
    id: '1',
    title: 'Advanced Diagnostic & Imaging Suite',
    category: 'facilities',
    image: '/assets/img/gallery/gallery-1.jpg',
    description: 'Sterile high-precision examination suite equipped with advanced diagnostic positioning equipment.'
  },
  {
    id: '2',
    title: 'Patient Reception & Registration Lounge',
    category: 'facilities',
    image: '/assets/img/gallery/gallery-2.jpg',
    description: 'Spacious, air-conditioned reception area with computerized token queue management.'
  },
  {
    id: '3',
    title: 'Private Ultrasound & Clinical Care Room',
    category: 'patient-care',
    image: '/assets/img/gallery/gallery-3.jpg',
    description: 'Comfortable, private ultrasound suite designed for patient dignity and quiet diagnostic examination.'
  },
  {
    id: '4',
    title: 'Automated Diagnostic Laboratory',
    category: 'diagnostics',
    image: '/assets/img/gallery/gallery-4.jpg',
    description: 'Calibrated diagnostic analyzers ensuring accurate and rapid specimen evaluation.'
  },
  {
    id: '5',
    title: 'Support Desk & Pharmaceutical Services',
    category: 'facilities',
    image: '/assets/img/gallery/gallery-5.jpg',
    description: 'Dedicated patient coordination center for report pickup and health service guidance.'
  },
  {
    id: '6',
    title: 'Emergency Diagnostic Response Bay',
    category: 'diagnostics',
    image: '/assets/img/gallery/gallery-6.jpg',
    description: 'Equipped to handle urgent trauma, stroke, and critical diagnostic imaging with rapid triage.'
  },
  {
    id: '7',
    title: 'Experienced Diagnostic Healthcare Team',
    category: 'patient-care',
    image: '/assets/img/gallery/gallery-7.jpg',
    description: 'Our team of certified technicians, radiographers, and patient care staff dedicated to your health.'
  },
  {
    id: '8',
    title: 'Community Health Awareness & Screening',
    category: 'events',
    image: '/assets/img/gallery/gallery-8.jpg',
    description: 'V Care Diagnostics community health screening camp providing preventive diagnostics.'
  }
];

export const galleryCategories = [
  { label: 'All Photos', value: 'all' },
  { label: 'Center Facilities', value: 'facilities' },
  { label: 'Diagnostics & Scans', value: 'diagnostics' },
  { label: 'Patient Care & Staff', value: 'patient-care' },
  { label: 'Events & Outreach', value: 'events' }
];
