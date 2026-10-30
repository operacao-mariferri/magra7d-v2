export interface TestimonialItem {
  id: string;
  name: string;
  city: string;
  text: string;
  imageUrl?: string;
  videoUrl?: string;
  weightLossKg?: string;
}

export interface TrackingParams {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  fbclid?: string;
  gclid?: string;
  visitor_id?: string;
  [key: string]: string | undefined;
}

export interface LeadFormData {
  name: string;
  email: string;
  whatsapp: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
