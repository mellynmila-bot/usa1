export type Language = 'pt' | 'en' | 'es';

export interface ServiceItem {
  id: string;
  name: string;
  description: string;
  price: string;
  duration?: string;
  group: 'cilios' | 'sobrancelhas' | 'maquiagem' | 'pele' | 'epilacao';
  image: string;
}

export interface GalleryItem {
  id: number;
  url: string;
  alt: string;
  caption?: string;
}

export interface CourseItem {
  id: string;
  title: string;
  duration: string;
  price: string;
  description: string;
}

export interface FeedbackItem {
  id: number;
  name: string;
  service: string;
  quote: string;
  rating: number;
}

export interface StudioFeature {
  id: string;
  title: string;
  description: string;
}

export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export interface BookingNotice {
  id: string;
  iconName: string;
  title: string;
  description: string;
}
