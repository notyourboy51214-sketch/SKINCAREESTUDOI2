import React from 'react';
import { PageId } from '../types';
import { CLINIC_INFO } from '../data/clinicData';
import { IMAGES } from '../assets/images';
import { ImageMaskReveal } from '../components/ImageMaskReveal';
import {
  ShieldCheck,
  Sparkles,
  HeartHandshake,
  CheckCircle2,
  Calendar,
  MessageCircle,
  Building
} from 'lucide-react';

interface TheClinicPageProps {
  onNavigate: (page: PageId) => void;
}

export const TheClinicPage: React.FC<TheClinicPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-20 pt-6">
      {/* 1. HEADER & INTRO */}
      <section className="space-y-4 max-w-3xl">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8FA88A]">
          <Building className="w-4 h-4 text-[#8FA88A]" />
          <span>About Skin Care Axis</span>
          <span aria-hidden="true">·</span>
          <span>Nasheman-e-Iqbal Phase 1, Lahore</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#3C4A3B] leading-tight text-balance">
          A calm, orderly sanctuary built for medical dermatology, not commercial volume.
        </h1>
        <p className="text-base sm:text-lg text-[#3C4A3B]/80 leading-relaxed">
          Skin Care Axis was established with a singular conviction: skin healing requires an unhurried mind, spotless medical standards, and an environment stripped of the chaotic commercial noise so common in aesthetic clinics.
        </p>
      </section>

      {/* 2. PHOTO-LED PHYSICAL SPACE SECTION */}
      <section className="space-y-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <ImageMaskReveal
              src={IMAGES.clinicInterior}
              alt="Bright airy modern dermatology clinic interior consultation suite in Lahore"
              aspectRatioClass="aspect-[16/10]"
              caption="Clinical Suite · Spotless, Quiet & Natural Daylight"
            />
          </div>

          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs uppercase tracking-widest text-[#8FA88A] font-semibold">
              The Physical Space
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#3C4A3B]">
              Cleanliness you can sense the moment you walk through our doors.
            </h2>
            <p className="text-sm text-[#3C4A3B]/80 leading-relaxed">
              Patients consistently highlight our clean, organized clinic environment in their reviews. We deliberately maintain low appointment density—never packing the waiting lounge—so your visit feels private, serene, and thoroughly attended to.
            </p>
            <div className="pt-2 space-y-2 text-xs text-[#3C4A3B]/85">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8FA88A] shrink-0" />
                <span>Individualized sanitization cycles between each patient</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8FA88A] shrink-0" />
                <span>Filtered airflow reducing ambient particulate smog exposure</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#8FA88A] shrink-0" />
                <span>Single-use medical barrier covers and sealed disposable tips</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. CORE CLINICAL VALUES — OFFSET-CARD CASCADE */}
      <section className="space-y-8">
        <div className="max-w-xl">
          <span className="text-xs uppercase tracking-widest text-[#8FA88A] font-semibold">
            Our Guiding Standards
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#3C4A3B] mt-1">
            Three principles that govern every diagnosis.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          {/* Principle 1 */}
          <div className="md:col-span-4 bg-white p-7 rounded-2xl border border-[#3C4A3B]/10 shadow-sm space-y-3">
            <div className="w-9 h-9 rounded-lg bg-[#8FA88A]/15 flex items-center justify-center text-[#8FA88A]">
              <HeartHandshake className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#3C4A3B]">
              01. Unhurried Listening
            </h3>
            <p className="text-xs text-[#3C4A3B]/80 leading-relaxed">
              We never cut patients off or prescribe before we fully understand how your skin responded to prior products, seasonal weather shifts, and dietary or stress triggers.
            </p>
          </div>

          {/* Principle 2 (staggered slightly) */}
          <div className="md:col-span-4 md:mt-6 bg-white p-7 rounded-2xl border border-[#3C4A3B]/10 shadow-sm space-y-3">
            <div className="w-9 h-9 rounded-lg bg-[#8FA88A]/15 flex items-center justify-center text-[#8FA88A]">
              <Sparkles className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#3C4A3B]">
              02. Barrier-First Medicine
            </h3>
            <p className="text-xs text-[#3C4A3B]/80 leading-relaxed">
              We refuse to subject sensitive skin to aggressive peelings or uncalibrated lasers that trigger hyperpigmentation rebound. A healthy moisture barrier is non-negotiable.
            </p>
          </div>

          {/* Principle 3 (staggered further) */}
          <div className="md:col-span-4 md:mt-12 bg-white p-7 rounded-2xl border border-[#3C4A3B]/10 shadow-sm space-y-3">
            <div className="w-9 h-9 rounded-lg bg-[#8FA88A]/15 flex items-center justify-center text-[#8FA88A]">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#3C4A3B]">
              03. Evidence & Honest Prognosis
            </h3>
            <p className="text-xs text-[#3C4A3B]/80 leading-relaxed">
              We provide realistic timelines rather than false overnight promises. If a requested treatment is contraindicated for your barrier type, we will explicitly explain why.
            </p>
          </div>
        </div>
      </section>

      {/* 4. CLINIC HYGIENE & STERILIZATION DEEP-DIVE */}
      <section className="p-8 sm:p-10 bg-[#EEF3ED] rounded-3xl border border-[#3C4A3B]/10">
        <div className="max-w-2xl space-y-4">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#3C4A3B]/70">
            Medical Rigor
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#3C4A3B]">
            Why clean organization matters so much for acne and sensitive skin.
          </h2>
          <p className="text-sm text-[#3C4A3B]/80 leading-relaxed">
            When skin is already inflamed or broken with active micro-comedones, cross-contamination is catastrophic. A poorly cleaned tool or reusable tip can transmit bacterial strains like Cutibacterium acnes, provoking secondary cystic infections. At Skin Care Axis, sterilization isn't an afterthought; it is our clinical foundation.
          </p>

          <div className="pt-4 flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate('dermatologist')}
              className="px-5 py-2.5 bg-[#3C4A3B] hover:bg-[#263125] text-white rounded-lg text-xs font-semibold transition-colors"
            >
              Meet the Dermatologist
            </button>
            <a
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-[#FBF9F4] text-[#3C4A3B] border border-[#3C4A3B]/15 rounded-lg text-xs font-semibold transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#8FA88A]" />
              <span>Ask About Clinic Visits</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
