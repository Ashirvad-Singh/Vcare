export interface Service {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  image: string;
  features: string[];
  preparation: string[];
  whyChooseThis: string[];
  turnaroundTime: string;
  category: 'radiology' | 'ultrasound' | 'cardiac' | 'liver' | 'general';
}

export interface Doctor {
  name: string;
  qualification: string;
  role: string;
  experience: string;
  photo: string;
  bio: string[];
  memberships: string[];
  formerHospitals: string[];
  specializations: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  date?: string;
  initials: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'facilities' | 'diagnostics' | 'patient-care' | 'events';
  image: string;
  description: string;
}

export interface AppointmentFormData {
  name: string;
  email: string;
  phone: string;
  dateTime: string;
  testType: string;
  notes?: string;
}
