import { Treatment, ConcernDetail, PatientStory, FaqItem } from '../types';

export const CLINIC_INFO = {
  name: 'Skin Care Axis',
  city: 'Lahore, Pakistan',
  address: 'Plot 40, Nasheman Iqbal Phase 1, Lahore',
  phone: '+92 303 9571111',
  phoneFormatted: '+92 303 957 1111',
  whatsappUrl: "https://wa.me/923039571111?text=Hi%2C%20I'd%20like%20to%20book%20a%20skin%20consultation%20at%20Skin%20Care%20Axis",
  rating: 4.9,
  reviewCount: 57,
  openingHoursDisplay: 'Currently closed · Opens 2:00 PM Monday',
  openingHoursNote: 'Regular Monday consultation schedule from 2:00 PM. Additional weekday clinic slots are currently being finalized with our clinical administration.',
  tagline: 'Attentive, Evidence-Based Dermatology in Lahore',
  googleMapsQuery: 'Skin+Care+Axis,+Plot+40,+Nasheman-e-Iqbal+Phase+1,+Lahore',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Skin+Care+Axis,+Plot+40,+Nasheman-e-Iqbal+Phase+1,+Lahore',
  googleMapsDirectionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=Skin+Care+Axis,+Plot+40,+Nasheman-e-Iqbal+Phase+1,+Lahore',
  googleMapsEmbedUrl: 'https://maps.google.com/maps?q=Skin+Care+Axis,+Plot+40,+Nasheman-e-Iqbal+Phase+1,+Lahore&t=&z=16&ie=UTF8&iwloc=&output=embed'
};

export const TREATMENTS: Treatment[] = [
  {
    id: 'hydrafacial-clinical',
    name: 'Clinical Hydrafacial Elite',
    category: 'hydration',
    tagline: 'Vortex-infusion deep extraction and barrier replenishment',
    description: 'Our flagship dermatological hydro-dermabrasion protocol. Unlike commercial parlor facials that strip delicate lipid layers, our medical Hydrafacial uses precision non-abrasive vortex vacuum suction combined with calming botanical antioxidants and hyaluronic acid to unblock congested pores without inflammation.',
    whatItTreats: ['Clogged pores & blackheads', 'Dehydrated, dull complexion', 'Urban pollution debris & micro-flaking', 'Uneven surface texture'],
    whatToExpect: 'Zero downtime. Immediate dewy clarity, restored moisture barrier, and refined pore visibility right after the 45-minute procedure.',
    duration: '45 – 50 Minutes',
    sessionsRecommended: 'Once every 3 to 4 weeks for sustained cellular turnover',
    suitableForSensitiveSkin: true,
    featured: true
  },
  {
    id: 'barrier-repair-protocol',
    name: 'Sensitized Barrier Restoration Therapy',
    category: 'sensitivity',
    tagline: 'Ultra-gentle recovery for burning, over-exfoliated, or allergic skin',
    description: 'A bespoke physician-supervised protocol designed specifically for patients whose skin has become reactive to nearly all commercial products. Utilizing medical-grade lipid replenishment, anti-inflammatory centella soothing matrices, and calming cold-iontophoresis.',
    whatItTreats: ['Post-steroid rebound redness', 'Damaged stratum corneum barrier', 'Contact allergic dermatitis flare-ups', 'Chronic tightness and burning sensations'],
    whatToExpect: 'Instant relief from heat and stinging. Progressive rebuild of the natural protective barrier over 2 to 4 weeks.',
    duration: '60 Minutes',
    sessionsRecommended: '3 to 5 restorative sessions spaced 10 days apart',
    suitableForSensitiveSkin: true,
    featured: true
  },
  {
    id: 'acne-calming-protocol',
    name: 'Targeted Inflammatory Acne Clearance',
    category: 'acne',
    tagline: 'Non-scarring comedone resolution and microbial control',
    description: 'A gentle, physician-calibrated acne protocol addressing active cystic papules and stubborn comedones without aggressive chemical peeling that triggers post-inflammatory hyperpigmentation (PIH) in South Asian phototypes.',
    whatItTreats: ['Hormonal jawline flare-ups', 'Subsurface micro-comedones', 'Erythema and inflammatory pustules', 'Excessive sebum hyper-secretion'],
    whatToExpect: 'Noticeable reduction in inflammatory swelling within 48 hours; progressive suppression of recurring breakouts.',
    duration: '50 Minutes',
    sessionsRecommended: '4 to 6 sessions along with tailored home prescription routine',
    suitableForSensitiveSkin: true,
    featured: false
  },
  {
    id: 'pigmentation-defense',
    name: 'Melasma & Post-Acne Mark Regulation',
    category: 'pigmentation',
    tagline: 'Cautious tyrosinase inhibition for South Asian skin tones',
    description: 'Safe, low-trauma modulation for dark spots, stubborn PIH from old blemishes, and sun-induced melasma patches. Formulated to avoid the rebound hyperpigmentation so common when harsh lasers or strong acids are mishandled.',
    whatItTreats: ['Post-acne dark marks (PIH)', 'Sun-damaged hyperpigmentation', 'Stubborn epidermal melasma', 'Uneven tone from Lahore environmental exposure'],
    whatToExpect: 'Gradual, uniform brightening over a series of treatments without peeling or social downtime.',
    duration: '45 Minutes',
    sessionsRecommended: '4 to 6 sessions on a bi-weekly schedule',
    suitableForSensitiveSkin: true,
    featured: false
  },
  {
    id: 'cellular-longevity-collagen',
    name: 'Micro-Infusion Collagen Preservation',
    category: 'aging',
    tagline: 'Non-invasive smoothing of early fine lines and elasticity loss',
    description: 'A biological hydration and peptide infusion system delivering low-molecular weight peptides and bioactive ceramides into the epidermal junctions to stimulate dermal firming without dermal thermal trauma.',
    whatItTreats: ['Loss of dermal bounce', 'Fine dehydration lines around eyes and mouth', 'Premature collagen breakdown', 'Crepey neck and cheek texture'],
    whatToExpect: 'Plump, radiant firmness with enduring cellular hydration.',
    duration: '55 Minutes',
    sessionsRecommended: 'Series of 3 initial sessions, followed by quarterly maintenance',
    suitableForSensitiveSkin: true,
    featured: false
  }
];

export const CONCERN_DETAILS: ConcernDetail[] = [
  {
    id: 'acne',
    title: 'Acne-Prone & Reactive Skin',
    subtitle: 'Breaking the vicious cycle of harsh drying products and rebound inflammation.',
    clinicalReality: 'Many patients arrive at our Nasheman-e-Iqbal clinic after months of aggressive stripping washes, unregulated salon bleachings, or harsh peeling acids that left their skin barrier torn and prone to cystic breakout flares.',
    patientScenario: 'Patients dealing with stubborn, painful nodules who were told their skin was "just oily", when in fact their outer barrier was severely dehydrated and chronically inflamed.',
    clinicApproach: 'We calm the active inflammation first using non-stripping anti-microbial infusions and soothing calming agents before introducing gentle, low-concentration keratolytic agents.',
    typicalOutcome: 'Noticeable reduction in tenderness within 72 hours, clear pore pathways, and steady remission without traumatic scarring.',
    recommendedTreatments: ['Targeted Inflammatory Acne Clearance', 'Clinical Hydrafacial Elite']
  },
  {
    id: 'sensitivity',
    title: 'Extreme Sensitivity & Allergic Skin',
    subtitle: 'Safe, diagnostic care for skin that reacts to virtually everything.',
    clinicalReality: 'Skin barrier compromise in Lahore is aggravated by seasonal smog particulate matter, hard tap water, and widespread overuse of unregulated steroid-based fairness creams.',
    patientScenario: 'Cases where a patient could not apply even a gentle mineral sunscreen or basic pharmacy moisturizer without severe stinging, flushing, and hive-like contact flare-ups.',
    clinicApproach: 'Zero trial-and-error experimentation. Our physician conducts a careful ingredient audit, eliminates all known triggers, and applies minimalist, physiologic bio-mimetic ceramides under strict clinical monitoring.',
    typicalOutcome: 'Immediate abatement of burning sensations; progressive rebuilding of the lipid envelope within 3 to 4 weeks.',
    recommendedTreatments: ['Sensitized Barrier Restoration Therapy', 'Clinical Hydrafacial Elite']
  },
  {
    id: 'aging',
    title: 'Premature Aging & Structural Dehydration',
    subtitle: 'Nourishing cellular reserves rather than creating traumatic heat injury.',
    clinicalReality: 'Intense ultraviolet indices in Punjab accelerate photolytic collagen degradation and cellular dryness, often misdiagnosed as simple dry skin.',
    patientScenario: 'Individuals in their late 20s and 30s noticing sudden crinkling on the forehead, loss of morning firmness, and makeup clinging to micro-crevices.',
    clinicApproach: 'Multi-depth peptide saturation and vortex hydration that deeply hydrates the cellular matrix without aggressive thermal energy.',
    typicalOutcome: 'Restored bounce, smooth surface light-reflection, and naturally softened micro-lines.',
    recommendedTreatments: ['Micro-Infusion Collagen Preservation', 'Clinical Hydrafacial Elite']
  },
  {
    id: 'pigmentation',
    title: 'Dullness, PIH & Melasma in South Asian Skin',
    subtitle: 'Evidence-based pigment control that respects Fitzpatrick phototypes IV–V.',
    clinicalReality: 'Melanin in South Asian skin is highly reactive. One aggressive laser pass or harsh chemical peel can double the darkness of a pigment patch through post-inflammatory rebound.',
    patientScenario: 'Patients left with shadowy brown patches after previous parlor treatments or aggressive bleaching attempts elsewhere.',
    clinicApproach: 'Cautious, multi-tier pigment inhibition utilizing gentle antioxidants, botanical tyrosinase blockers, and meticulous hydration barriers.',
    typicalOutcome: 'Harmonious, luminous skin tone with lasting clearance of stubborn brown marks.',
    recommendedTreatments: ['Melasma & Post-Acne Mark Regulation', 'Clinical Hydrafacial Elite']
  }
];

export const PATIENT_STORIES: PatientStory[] = [
  {
    id: 'story-1',
    patientRef: 'Patient A. K., 26 · Banker, Lahore',
    condition: 'Chronic Reactive Acne & Barrier Collapse',
    priorHistory: 'Spent over two years cycling through intense prescription retinoids and harsh salicylic acid washes recommended by general clinics. Skin became so fragile and reactive that even plain tap water caused redness and burning.',
    clinicalSolution: 'Rather than prescribing another drying agent, our doctor paused all active topicals for 14 days, administered two gentle Sensitized Barrier Restoration sessions, followed by medical Hydrafacial with customized non-acid hydration.',
    resultTimeline: 'Stinging ceased within 5 days; cystic eruptions resolved over 6 weeks with zero new active cysts.',
    quoteParaphrase: 'For the first time in years, a doctor sat and listened to my entire skincare history without brushing me off. My skin felt calm and peaceful after the very first appointment.',
    treatmentUsed: 'Sensitized Barrier Restoration + Hydrafacial Protocol',
    verifiedReview: true
  },
  {
    id: 'story-2',
    patientRef: 'Patient M. S., 34 · Architect, Nasheman-e-Iqbal',
    condition: 'Stubborn Congestion & Urban Smog Asphyxiation',
    priorHistory: 'Daily site visits and seasonal winter smog had left large, oxidized comedones across the T-zone and deep dullness that ordinary facials aggravated into pustules.',
    clinicalSolution: 'Sequential monthly Clinical Hydrafacial Elite sessions with concentrated botanical antioxidants and sebum-softening vortex extraction in an impeccably sterile environment.',
    resultTimeline: 'Immediate pore clearing without post-extraction erythema; prolonged luminosity across 4 months.',
    quoteParaphrase: 'The clinic cleanliness is unmatched. Everything is sterile, modern, and unhurried. The hydrafacial results are unlike any standard salon treatment in Lahore.',
    treatmentUsed: 'Clinical Hydrafacial Elite (4-session course)',
    verifiedReview: true
  },
  {
    id: 'story-3',
    patientRef: 'Patient Z. R., 31 · Teacher, Model Town',
    condition: 'Severe Post-Bleach Contact Dermatitis',
    priorHistory: 'Experienced intense facial burning and raw epidermal peeling after an aggressive salon treatment prior to a family event. Arrived at Skin Care Axis in acute distress.',
    clinicalSolution: 'Immediate acute dermatological triage: anti-inflammatory lipid compresses, cooled non-invasive peptide bath, and a strict hypoallergenic barrier cream.',
    resultTimeline: 'Epidermal heat subsided within 3 hours; natural barrier completely regenerated within 10 days.',
    quoteParaphrase: 'The doctor was gentle, calm, and reassuring. She took the time to explain what had happened to my barrier and didn’t try to upsell unnecessary products.',
    treatmentUsed: 'Acute Anti-Inflammatory Barrier Rescue',
    verifiedReview: true
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'treatments',
    question: 'Is a Hydrafacial safe for highly sensitive or reactive skin?',
    answer: 'Yes, because at Skin Care Axis, our Hydrafacial is administered under clinical dermatology oversight. We calibrate the vortex suction levels and serum active concentrations specifically to your barrier threshold. We omit harsh alpha-hydroxy peel boosters on reactive skin, replacing them with calming centella, panthenol, and low-weight hyaluronic acid infusions.'
  },
  {
    id: 'faq-2',
    category: 'sensitivity',
    question: 'How do you handle patients whose skin reacts to almost every skincare product?',
    answer: 'We begin with an exhaustive consultation where our doctor listens to every single product, procedure, and medication you have previously tried. We do not perform aggressive treatments on compromised skin. Instead, we initiate a diagnostic barrier-repair sequence using strictly fragrance-free, medical-grade lipid formulations until your skin resilience is restored.'
  },
  {
    id: 'faq-3',
    category: 'treatments',
    question: 'How many sessions are typically required for post-acne marks and scarring?',
    answer: 'Post-inflammatory hyperpigmentation (dark marks) generally shows visible improvement within 2 to 4 gentle sessions, combined with a sun-protective regimen. Textural scarring requires a personalized multi-stage plan formulated during your initial physician consultation.'
  },
  {
    id: 'faq-4',
    category: 'philosophy',
    question: 'What should I avoid before coming in for my consultation or treatment?',
    answer: 'Please avoid applying prescription retinoids, chemical exfoliants (AHA/BHA), or getting salon threading/waxing for 3 to 5 days prior to your appointment. On the day of your consultation, arriving with clean skin or light sunscreen allows our doctor to examine your natural barrier and vascular tone accurately.'
  },
  {
    id: 'faq-5',
    category: 'philosophy',
    question: 'How is Skin Care Axis different from commercial beauty parlors or high-volume clinics?',
    answer: 'Three fundamental differences: First, our doctor spends dedicated, unhurried time listening to your skin story. Second, we enforce rigorous medical sterilization standards—every instrument is autoclaved and treatment tips are single-use. Third, we specialize in difficult, sensitive skin where standard aggressive treatments have previously failed.'
  },
  {
    id: 'faq-6',
    category: 'appointments',
    question: 'What are the current consultation hours and how do I schedule an appointment?',
    answer: 'The clinic is currently closed and opens at 2:00 PM on Monday. Consultation slots are pre-booked to ensure no waiting room overcrowding and ample consultation time for each patient. Please message our official WhatsApp at +92 303 9571111 or submit our consultation request form to confirm your slot.'
  }
];
