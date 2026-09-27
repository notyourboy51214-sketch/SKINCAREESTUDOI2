import React, { useState } from 'react';
import { ConcernCategory, Treatment } from '../types';
import { TREATMENTS, CLINIC_INFO } from '../data/clinicData';
import {
  Sparkles,
  Clock,
  Calendar,
  ShieldCheck,
  MessageCircle,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

interface TreatmentMenuPageProps {
  initialFilter?: ConcernCategory;
  onNavigateToBooking: () => void;
}

export const TreatmentMenuPage: React.FC<TreatmentMenuPageProps> = ({
  initialFilter = 'all',
  onNavigateToBooking
}) => {
  const [activeFilter, setActiveFilter] = useState<ConcernCategory>(initialFilter);

  const filterTabs: { id: ConcernCategory; label: string }[] = [
    { id: 'all', label: 'All Treatments' },
    { id: 'hydration', label: 'Hydrafacial & Glow' },
    { id: 'sensitivity', label: 'Sensitive Skin Protocols' },
    { id: 'acne', label: 'Acne Clearance' },
    { id: 'pigmentation', label: 'Melasma & PIH Marks' },
    { id: 'aging', label: 'Collagen & Longevity' },
  ];

  const filteredTreatments = activeFilter === 'all'
    ? TREATMENTS
    : TREATMENTS.filter(t => t.category === activeFilter);

  return (
    <div className="space-y-14 pt-6">
      {/* 1. HEADER */}
      <section className="space-y-4 max-w-3xl">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8FA88A]">
          <Sparkles className="w-4 h-4 text-[#8FA88A]" />
          <span>Clinical Treatment Menu</span>
          <span aria-hidden="true">·</span>
          <span>Dermatologist Supervised</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#3C4A3B] leading-tight text-balance">
          Evidence-based procedures designed to respect and heal the skin barrier.
        </h1>
        <p className="text-base sm:text-lg text-[#3C4A3B]/80 leading-relaxed">
          Every procedure at Skin Care Axis is calibrated around skin comfort, safety for South Asian phototypes, and enduring cellular hydration. We do not offer harsh, stripping salon bleachings.
        </p>
      </section>

      {/* 2. INTERACTIVE FILTER TABS (ALLOWED FUNCTIONAL BUTTONS) */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#EEF3ED] rounded-xl border border-[#3C4A3B]/5 w-fit">
        {filterTabs.map((tab) => {
          const isActive = activeFilter === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                isActive
                  ? 'bg-white text-[#263125] font-semibold shadow-sm border border-[#3C4A3B]/10'
                  : 'text-[#3C4A3B]/70 hover:text-[#3C4A3B] hover:bg-white/50'
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* 3. OFFSET-CARD CASCADE FOR TREATMENTS */}
      <div className="space-y-8">
        {filteredTreatments.map((treatment, index) => {
          // Staggered layout offsets
          const isAlternate = index % 2 === 1;
          const prefilledMsg = encodeURIComponent(
            `Hi, I'd like to book an appointment for ${treatment.name} at Skin Care Axis.`
          );

          return (
            <div
              key={treatment.id}
              className={`p-8 sm:p-10 bg-white rounded-3xl border border-[#3C4A3B]/10 shadow-sm transition-all hover:border-[#8FA88A] ${
                isAlternate ? 'lg:ml-8 bg-[#FDFCF9]' : ''
              }`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Left Overview */}
                <div className="lg:col-span-7 space-y-4">
                  {/* Unboxed Metadata Line */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#3C4A3B]/70 font-medium">
                    <span className="text-[#8FA88A] uppercase tracking-wider font-semibold">
                      {treatment.category.toUpperCase()}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#C6A664]" />
                      <span className="tabular-nums">{treatment.duration}</span>
                    </span>
                    <span aria-hidden="true">·</span>
                    {treatment.suitableForSensitiveSkin && (
                      <span className="flex items-center gap-1 text-[#8FA88A]">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        <span>Sensitive Skin Safe</span>
                      </span>
                    )}
                  </div>

                  <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#3C4A3B]">
                    {treatment.name}
                  </h2>

                  <p className="text-sm font-medium text-[#8FA88A]">
                    {treatment.tagline}
                  </p>

                  <p className="text-sm text-[#3C4A3B]/80 leading-relaxed">
                    {treatment.description}
                  </p>

                  <div className="pt-2">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#3C4A3B]/70 block mb-2">
                      Key Indications:
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#3C4A3B]/85">
                      {treatment.whatItTreats.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#8FA88A] shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right What-to-Expect & Booking */}
                <div className="lg:col-span-5 p-6 bg-[#EEF3ED] rounded-2xl border border-[#3C4A3B]/5 space-y-4 lg:mt-2">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#3C4A3B]/70 block mb-1">
                      What to Expect:
                    </span>
                    <p className="text-xs text-[#3C4A3B]/80 leading-relaxed">
                      {treatment.whatToExpect}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-[#3C4A3B]/10">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#3C4A3B]/70 block mb-1">
                      Recommended Protocol:
                    </span>
                    <p className="text-xs text-[#3C4A3B]/80">
                      {treatment.sessionsRecommended}
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col gap-2">
                    <a
                      href={`https://wa.me/923039571111?text=${prefilledMsg}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#3C4A3B] hover:bg-[#263125] text-white rounded-lg text-xs font-semibold transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 text-[#C6A664]" />
                      <span>Book on WhatsApp</span>
                    </a>

                    <button
                      onClick={onNavigateToBooking}
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-3 bg-white hover:bg-[#FBF9F4] text-[#3C4A3B] rounded-lg text-xs font-medium border border-[#3C4A3B]/10 transition-colors"
                    >
                      <span>Request Clinic Callback Form</span>
                      <ArrowRight className="w-3.5 h-3.5 text-[#8FA88A]" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 4. CLINICAL SAFETY GUARANTEE */}
      <section className="p-8 bg-[#EEF3ED]/80 rounded-2xl border border-[#3C4A3B]/10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs font-bold text-[#3C4A3B]">
            <ShieldCheck className="w-4 h-4 text-[#8FA88A]" />
            <span>Physician Evaluation Precedes All In-Clinic Procedures</span>
          </div>
          <p className="text-xs text-[#3C4A3B]/75 leading-relaxed">
            If your skin barrier is acutely inflamed, our doctor may recommend calming restorative therapy before starting active hydra-peeling.
          </p>
        </div>
        <a
          href={CLINIC_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2.5 bg-[#3C4A3B] text-white rounded-lg text-xs font-semibold hover:bg-[#263125] transition-colors whitespace-nowrap"
        >
          Speak with our Practice
        </a>
      </section>
    </div>
  );
};
