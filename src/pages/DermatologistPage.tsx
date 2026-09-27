import React from 'react';
import { PageId } from '../types';
import { CLINIC_INFO } from '../data/clinicData';
import { IMAGES } from '../assets/images';
import { ImageMaskReveal } from '../components/ImageMaskReveal';
import {
  HeartHandshake,
  Award,
  CheckCircle,
  Clock,
  Sparkles,
  MessageCircle,
  FileText
} from 'lucide-react';

interface DermatologistPageProps {
  onNavigate: (page: PageId) => void;
}

export const DermatologistPage: React.FC<DermatologistPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-20 pt-6">
      {/* 1. HERO / EDITORIAL LEAD */}
      <section className="space-y-4 max-w-3xl">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8FA88A]">
          <HeartHandshake className="w-4 h-4 text-[#8FA88A]" />
          <span>Physician Philosophy & Practice</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#3C4A3B] leading-tight text-balance">
          "The first question is never what treatment to sell, but what your skin has endured."
        </h1>
        <p className="text-base sm:text-lg text-[#3C4A3B]/80 leading-relaxed">
          At Skin Care Axis, our lead dermatologist has built a quiet reputation across Lahore as an exceptionally attentive listener—someone who takes down your complete history, understands the vulnerability of skin struggles, and designs gentle, sustainable regimens.
        </p>
      </section>

      {/* 2. SPLIT SECTION: CONSULTATION DESK PHOTO & THE LISTENING ETHOS */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        <div className="lg:col-span-6">
          <ImageMaskReveal
            src={IMAGES.consultationDesk}
            alt="Dermatologist consultation desk with dermatoscope instrument and appointment notes"
            aspectRatioClass="aspect-[4/3]"
            caption="The Consultation Room · Dedicated Diagnostic Assessment"
          />
        </div>

        <div className="lg:col-span-6 space-y-5">
          <span className="text-xs uppercase tracking-widest text-[#8FA88A] font-semibold">
            Patient-Centered Approach
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#3C4A3B]">
            Why patient listening is our most potent clinical tool.
          </h2>
          <p className="text-sm text-[#3C4A3B]/80 leading-relaxed">
            In typical fast-paced outpatient settings, appointments often last barely five minutes before a prescription slip is handed over. But reactive, allergy-prone, and hormonal acne skin cannot be understood in five minutes.
          </p>
          <p className="text-sm text-[#3C4A3B]/80 leading-relaxed">
            Our doctor sits with you to reconstruct your routine step by step: what cleanser triggers tightness, what sunscreens cause white bumps, which salon treatments coincided with flares, and how the Lahore dry season or summer humidity impacts your barrier.
          </p>

          <div className="pt-2 flex items-center gap-3 text-xs text-[#3C4A3B] font-medium">
            <div className="p-2 rounded-lg bg-[#EEF3ED] text-[#8FA88A]">
              <Clock className="w-4 h-4" />
            </div>
            <span>Dedicated consultation intervals ensure zero rushed decisions.</span>
          </div>
        </div>
      </section>

      {/* 3. CREDENTIALS & CLINICAL FOCUS */}
      <section className="p-8 sm:p-10 bg-white rounded-3xl border border-[#3C4A3B]/10 shadow-sm space-y-6">
        <div className="max-w-xl">
          <span className="text-xs uppercase tracking-widest text-[#8FA88A] font-semibold">
            Qualifications & Clinical Depth
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#3C4A3B] mt-1">
            Rooted in medical dermatology and South Asian barrier biology.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="space-y-2 p-5 bg-[#FBF9F4] rounded-xl border border-[#3C4A3B]/5">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3C4A3B]">
              <Award className="w-4 h-4 text-[#C6A664]" />
              <span>Medical Credentials</span>
            </div>
            <p className="text-xs text-[#3C4A3B]/80 leading-relaxed">
              Certified medical graduate with advanced dermatological training, clinical aesthetic certifications, and ongoing participation in global skin barrier congresses.
            </p>
          </div>

          <div className="space-y-2 p-5 bg-[#FBF9F4] rounded-xl border border-[#3C4A3B]/5">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3C4A3B]">
              <Sparkles className="w-4 h-4 text-[#8FA88A]" />
              <span>Phototype Expertise</span>
            </div>
            <p className="text-xs text-[#3C4A3B]/80 leading-relaxed">
              Specialized expertise in Fitzpatrick skin phototypes IV and V, where careless peeling or laser thermal shock readily triggers devastating post-inflammatory hyperpigmentation.
            </p>
          </div>

          <div className="space-y-2 p-5 bg-[#FBF9F4] rounded-xl border border-[#3C4A3B]/5">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3C4A3B]">
              <FileText className="w-4 h-4 text-[#8FA88A]" />
              <span>Barrier Recovery</span>
            </div>
            <p className="text-xs text-[#3C4A3B]/80 leading-relaxed">
              Extensive documented success rehabilitating damaged skin caused by unregulated local steroid creams, over-exfoliation, or severe allergic contact dermatitis.
            </p>
          </div>
        </div>
      </section>

      {/* 4. WHAT A FIRST VISIT LOOKS LIKE WALKTHROUGH */}
      <section className="space-y-8">
        <div className="max-w-xl">
          <span className="text-xs uppercase tracking-widest text-[#8FA88A] font-semibold">
            Patient Journey
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#3C4A3B] mt-1">
            What your first visit looks like at Skin Care Axis.
          </h2>
          <p className="text-sm text-[#3C4A3B]/75 mt-1">
            A structured, unhurried 3-step walkthrough designed to eliminate anxiety and establish clarity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-[#EEF3ED] rounded-2xl border border-[#3C4A3B]/10 space-y-3">
            <span className="font-serif text-3xl font-bold text-[#8FA88A] block">01</span>
            <h3 className="font-serif text-lg font-bold text-[#3C4A3B]">
              Comprehensive Routine & Trigger Audit
            </h3>
            <p className="text-xs text-[#3C4A3B]/80 leading-relaxed">
              You share all the cleansers, actives, sunscreen brands, and lifestyle habits you currently use. We listen without judgment and catalogue what may be sensitizing your barrier.
            </p>
          </div>

          <div className="p-6 bg-[#EEF3ED] rounded-2xl border border-[#3C4A3B]/10 space-y-3 md:translate-y-2">
            <span className="font-serif text-3xl font-bold text-[#8FA88A] block">02</span>
            <h3 className="font-serif text-lg font-bold text-[#3C4A3B]">
              Clinical Examination & Barrier Check
            </h3>
            <p className="text-xs text-[#3C4A3B]/80 leading-relaxed">
              Our doctor examines skin vascularity, micro-comedone depth, trans-epidermal water loss signs, and areas of erythema under dermatological magnification.
            </p>
          </div>

          <div className="p-6 bg-[#EEF3ED] rounded-2xl border border-[#3C4A3B]/10 space-y-3 md:translate-y-4">
            <span className="font-serif text-3xl font-bold text-[#8FA88A] block">03</span>
            <h3 className="font-serif text-lg font-bold text-[#3C4A3B]">
              Clear, Minimalist Treatment Roadmap
            </h3>
            <p className="text-xs text-[#3C4A3B]/80 leading-relaxed">
              You receive a personalized plan: gentle in-clinic procedures like Hydrafacial or barrier infusion, alongside a simplified 3-step home routine that will not overwhelm your skin.
            </p>
          </div>
        </div>
      </section>

      {/* 5. CONSULTATION CTA */}
      <section className="p-8 bg-[#FBF9F4] rounded-2xl border border-[#3C4A3B]/10 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-serif text-xl font-bold text-[#3C4A3B]">
            Ready to speak with a doctor who truly listens?
          </h3>
          <p className="text-xs text-[#3C4A3B]/70 mt-1">
            Consultations open Monday at 2:00 PM · Pre-booking recommended to secure your slot.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={CLINIC_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-[#3C4A3B] hover:bg-[#263125] text-white rounded-lg text-xs font-semibold transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-[#C6A664]" />
            <span>Book Consultation via WhatsApp</span>
          </a>
        </div>
      </section>
    </div>
  );
};
