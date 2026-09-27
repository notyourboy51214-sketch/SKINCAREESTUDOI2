import heroSkinTextureLocal from './hero_dewy_skin_texture_1790495493420.jpg';
import clinicInteriorLocal from './clinic_bright_interior_1790495512246.jpg';
import hydrafacialTreatmentLocal from './hydrafacial_treatment_close_1790495525331.jpg';
import serumBottlesLocal from './serum_dropper_glass_1790495540871.jpg';
import consultationDeskLocal from './doctor_consultation_table_1790495555910.jpg';

export const IMAGES = {
  heroSkinTexture: heroSkinTextureLocal,
  clinicInterior: clinicInteriorLocal,
  hydrafacialTreatment: hydrafacialTreatmentLocal,
  serumBottles: serumBottlesLocal,
  consultationDesk: consultationDeskLocal,
};

export const IMAGE_FALLBACKS: Record<keyof typeof IMAGES, string[]> = {
  heroSkinTexture: [
    './images/hero_dewy_skin_texture_1790495493420.jpg',
    '/images/hero_dewy_skin_texture_1790495493420.jpg',
    'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=1200&q=80',
  ],
  clinicInterior: [
    './images/clinic_bright_interior_1790495512246.jpg',
    '/images/clinic_bright_interior_1790495512246.jpg',
    'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80',
  ],
  hydrafacialTreatment: [
    './images/hydrafacial_treatment_close_1790495525331.jpg',
    '/images/hydrafacial_treatment_close_1790495525331.jpg',
    'https://images.unsplash.com/photo-1512290900672-1f5076eb523f?auto=format&fit=crop&w=1200&q=80',
  ],
  serumBottles: [
    './images/serum_dropper_glass_1790495540871.jpg',
    '/images/serum_dropper_glass_1790495540871.jpg',
    'https://images.unsplash.com/photo-1608248597359-0a5601d32617?auto=format&fit=crop&w=1200&q=80',
  ],
  consultationDesk: [
    './images/doctor_consultation_table_1790495555910.jpg',
    '/images/doctor_consultation_table_1790495555910.jpg',
    'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80',
  ],
};
