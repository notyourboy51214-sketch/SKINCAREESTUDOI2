import React from 'react';
import { PageId } from '../types';
import { CLINIC_INFO } from '../data/clinicData';
import { IMAGES } from '../assets/images';
import { ImageMaskReveal } from '../components/ImageMaskReveal';
import {
  Microscope,
  ShieldCheck,
  Droplets,
  Layers,
  Sparkles,
  Wind,
  CheckCircle2,
  MessageCircle
} from 'lucide-react';

interface SciencePageProps {
  onNavigateToBooking: () => void;
}

export const SciencePage: React.FC<SciencePageProps> = ({ onNavigateToBooking }) => {
  return (
    <div className="space-y-20 pt-6">
      {/* 1. HEADER */}
      <section className="space-y-4 max-w-3xl">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8FA88A]">
          <Microscope className="w-4 h-4 text-[#8FA88A]" />
          <span>Biomedical Formulation & Technology</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#3C4A3B] leading-tight text-balance">
          The biological science behind gentle, barrier-first dermatology.
        </h1>
        <p className="text-base sm:text-lg text-[#3C4A3B]/80 leading-relaxed">
          True clinical skin rejuvenation is not about aggressive chemical abrasion. It is about understanding lipid bilayer chemistry, cellular osmotic balance, and micro-vortex fluidics that cleanse without trauma.
        </p>
      </section>

      {/* 2. HYDRAFACIAL VORTEX-FUSION TECHNOLOGY */}
      <section className="p-8 sm:p-12 bg-white rounded-3xl border border-[#3C4A3B]/10 shadow-sm space-y-8">
        <div className="max-w-2xl space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#8FA88A] font-semibold">
            Fluidics & Micro-Extraction
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#3C4A3B]">
            How Medical Hydrafacial Vortex Technology Protects Sensitive Skin
          </h2>
          <p className="text-sm text-[#3C4A3B]/80 leading-relaxed">
            Conventional manual extractions squeeze pores with metallic comedone extractors, causing micro-capillary ruptures, pain, and lingering post-inflammatory hyperpigmentation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-[#EEF3ED] rounded-2xl border border-[#3C4A3B]/5 space-y-3">
            <Droplets className="w-6 h-6 text-[#8FA88A]" />
            <h3 className="font-serif text-lg font-bold text-[#3C4A3B]">
              01. Spiral Hydro-Dislodgement
            </h3>
            <p className="text-xs text-[#3C4A3B]/80 leading-relaxed">
              A specialized hydro-cyclone tip generates a localized micro-whirlpool. It softens solidified sebum plugs gently with glucosamine and botanical extracts rather than abrasive grains.
            </p>
          </div>

          <div className="p-6 bg-[#EEF3ED] rounded-2xl border border-[#3C4A3B]/5 space-y-3">
            <Layers className="w-6 h-6 text-[#8FA88A]" />
            <h3 className="font-serif text-lg font-bold text-[#3C4A3B]">
              02. Calibrated Vacuum Suction
            </h3>
            <p className="text-xs text-[#3C4A3B]/80 leading-relaxed">
              Negative suction pressure is digitally regulated. On sensitized or rosacea-prone skin, we lower the barometric draw to safely evacuate pore debris without causing erythema.
            </p>
          </div>

          <div className="p-6 bg-[#EEF3ED] rounded-2xl border border-[#3C4A3B]/5 space-y-3">
            <Sparkles className="w-6 h-6 text-[#C6A664]" />
            <h3 className="font-serif text-lg font-bold text-[#3C4A3B]">
              03. Simultaneous Peptide Infiltration
            </h3>
            <p className="text-xs text-[#3C4A3B]/80 leading-relaxed">
              As impurities are withdrawn, low-molecular weight hyaluronic acid and antioxidant peptides are instantly infused into the open follicular ostia to stabilize barrier homeostasis.
            </p>
          </div>
        </div>
      </section>

      {/* 3. PRODUCT FORMULATION PHILOSOPHY + SERUM BOTTLES PHOTO */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-6">
          <ImageMaskReveal
            src={IMAGES.serumBottles}
            alt="Clean glass skincare bottles and dropper serums in natural morning window light"
            aspectRatioClass="aspect-[4/3]"
            caption="Physiologic Lipid Serums & Clean Formulations"
          />
        </div>

        <div className="lg:col-span-6 space-y-5">
          <span className="text-xs uppercase tracking-widest text-[#8FA88A] font-semibold">
            Ingredient Discipline
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#3C4A3B]">
            Formulated strictly for reactive South Asian skin barrier thresholds.
          </h2>
          <p className="text-sm text-[#3C4A3B]/80 leading-relaxed">
            Every serum, topical solution, and post-procedure compress utilized at Skin Care Axis adheres to a strict non-sensitizing guideline. We eliminate the volatile fragrances, essential oils, and denatured drying alcohols frequently hidden in retail skincare.
          </p>

          <div className="space-y-2 pt-2 text-xs text-[#3C4A3B]/85">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#8FA88A] shrink-0" />
              <span>Bio-identical Ceramides (1:3:1 ratio with cholesterol & free fatty acids)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#8FA88A] shrink-0" />
              <span>Pharmaceutical-grade Centella Asiatica & Madecassoside for vascular calming</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#8FA88A] shrink-0" />
              <span>pH-balanced physiological vehicles (pH 5.2 – 5.6) matching healthy acid mantle</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CLINIC HYGIENE & ENVIRONMENTAL DEFENSE (LAHORE SMOG CONTEXT) */}
      <section className="p-8 sm:p-10 bg-[#EEF3ED] rounded-3xl border border-[#3C4A3B]/10 space-y-6">
        <div className="max-w-2xl space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3C4A3B]">
            <Wind className="w-4 h-4 text-[#8FA88A]" />
            <span>Environmental Dermatology</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#3C4A3B]">
            Countering Lahore's seasonal smog and groundwater minerals.
          </h2>
          <p className="text-sm text-[#3C4A3B]/80 leading-relaxed">
            Atmospheric particulate matter (PM2.5) during Lahore's winter smog binds with ambient polycyclic aromatic hydrocarbons, penetrating deep into epidermal micro-fissures and triggering sudden allergic eczema and breakout flares.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#3C4A3B]/85">
          <div className="p-4 bg-white rounded-xl border border-[#3C4A3B]/5 space-y-1">
            <span className="font-bold text-[#3C4A3B] block">Air-Purified Treatment Rooms</span>
            <p className="text-[#3C4A3B]/70">
              Our clinical consultation and procedure rooms operate under continuous multi-stage HEPA filtration to keep air pristine.
            </p>
          </div>
          <div className="p-4 bg-white rounded-xl border border-[#3C4A3B]/5 space-y-1">
            <span className="font-bold text-[#3C4A3B] block">Demineralized Deionized Hydro-Lines</span>
            <p className="text-[#3C4A3B]/70">
              Our Hydrafacial devices utilize ultra-pure medical demineralized water to prevent the calcium and magnesium deposits common in municipal water from clinging to your pores.
            </p>
          </div>
        </div>

        <div className="pt-4 flex items-center justify-between flex-wrap gap-4 border-t border-[#3C4A3B]/10">
          <span className="text-xs text-[#3C4A3B]/70">
            Have questions about whether your skin can handle our treatments?
          </span>
          <a
            href={CLINIC_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#3C4A3B] hover:bg-[#263125] text-white rounded-lg text-xs font-semibold transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-[#C6A664]" />
            <span>Speak with our Clinical Team</span>
          </a>
        </div>
      </section>
    </div>
  );
};
