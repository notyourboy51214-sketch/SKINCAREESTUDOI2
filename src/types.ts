export type SectionId =
  | 'home'
  | 'story'
  | 'services'
  | 'approach'
  | 'science'
  | 'reviews'
  | 'process'
  | 'faqs'
  | 'location'
  | 'booking';

// Full compatibility union
export type PageId =
  | SectionId
  | 'clinic'
  | 'dermatologist'
  | 'treatments'
  | 'concerns'
  | 'stories';

export type ConcernCategory = 'all' | 'acne' | 'sensitivity' | 'aging' | 'pigmentation' | 'hydration';

export interface Treatment {
  id: string;
  name: string;
  category: ConcernCategory;
  tagline: string;
  description: string;
  whatItTreats: string[];
  whatToExpect: string;
  duration: string;
  sessionsRecommended: string;
  suitableForSensitiveSkin: boolean;
  featured?: boolean;
}

export interface ConcernDetail {
  id: string;
  title: string;
  subtitle: string;
  clinicalReality: string;
  patientScenario: string;
  clinicApproach: string;
  typicalOutcome: string;
  recommendedTreatments: string[];
}

export interface PatientStory {
  id: string;
  patientRef: string;
  condition: string;
  priorHistory: string;
  clinicalSolution: string;
  resultTimeline: string;
  quoteParaphrase: string;
  treatmentUsed: string;
  verifiedReview: boolean;
}

export interface FaqItem {
  id: string;
  category: 'treatments' | 'sensitivity' | 'appointments' | 'philosophy';
  question: string;
  answer: string;
}

export interface BookingFormData {
  fullName: string;
  phone: string;
  concern: string;
  preferredDay: string;
  preferredTime: string;
  notes: string;
  hasSensitiveSkin: boolean;
}
