import React, { useState } from 'react';
import { PageId, ConcernCategory } from '../types';
import { CONCERN_DETAILS, CLINIC_INFO } from '../data/clinicData';
import {
  ShieldAlert,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  AlertCircle,
  Stethoscope,
  MessageCircle
} from 'lucide-react';

interface SkinConcernsPageProps {
  onNavigateToTreatment: (category: ConcernCategory) => void;
  onNavigateToBooking: () => void;
}

export const SkinConcernsPage: React.FC<SkinConcernsPageProps> = ({
  onNavigateToTreatment,
  onNavigateToBooking
}) => {
  const [selectedConcern, setSelectedConcern] = useState<string>('acne');

  const activeConcern = CONCERN_DETAILS.find(c => c.id === selectedConcern) || CONCERN_DETAILS[0];

  return (
    <div className="space-y-16 pt-6">
      {/* 1. HEADER */}
      <section className="space-y-4 max-w-3xl">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8FA88A]">
          <ShieldAlert className="w-4 h-4 text-[#8FA88A]" />
          <span>Clinical Dermatology Diagnostic Focus</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#3C4A3B] leading-tight text-balance">
          Skin concerns we treat with thoughtful, individualized care.
        </h1>
        <p className="text-base sm:text-lg text-[#3C4A3B]/80 leading-relaxed">
          We specialize in skin that does not fit into standard generic categories—skin that has been irritated by excessive salon treatments, damaged by aggressive acids, or is hypersensitive to everyday cosmetics.
        </p>
      </section>

      {/* 2. INTERACTIVE CONCERN SELECTOR PILL-LESS BUTTONS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {CONCERN_DETAILS.map((concern) => {
          const isSelected = selectedConcern === concern.id;
          return (
            <button
              key={concern.id}
              onClick={() => setSelectedConcern(concern.id)}
              className={`p-4 rounded-xl text-left border transition-all ${
                isSelected
                  ? 'bg-white border-[#8FA88A] shadow-sm ring-1 ring-[#8FA88A]'
                  : 'bg-[#EEF3ED] border-transparent hover:bg-white/60 text-[#3C4A3B]/70'
              }`}
            >
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#8FA88A] block">
                Protocol Category
              </span>
              <h3 className="font-serif text-base font-bold text-[#3C4A3B] mt-1">
                {concern.title}
              </h3>
            </button>
          );
        })}
      </div>

      {/* 3. DEEP-DIVE CARD FOR SELECTED CONCERN */}
      <section className="p-8 sm:p-12 bg-white rounded-3xl border border-[#3C4A3B]/10 shadow-sm space-y-8">
        <div className="border-b border-[#3C4A3B]/10 pb-6 space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#8FA88A] font-semibold">
            In-Depth Clinical Profile
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#3C4A3B]">
            {activeConcern.title}
          </h2>
          <p className="text-base text-[#8FA88A] font-medium">
            {activeConcern.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Real Patient Scenario */}
          <div className="space-y-3 p-6 bg-[#FBF9F4] rounded-2xl border border-[#3C4A3B]/5">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#C6A664]">
              <AlertCircle className="w-4 h-4" />
              <span>What We Often See in Clinic</span>
            </div>
            <p className="text-xs sm:text-sm text-[#3C4A3B]/80 leading-relaxed">
              {activeConcern.patientScenario}
            </p>
            <p className="text-xs text-[#3C4A3B]/70 italic pt-1 border-t border-[#3C4A3B]/10">
              {activeConcern.clinicalReality}
            </p>
          </div>

          {/* Our Dermatological Approach */}
          <div className="space-y-3 p-6 bg-[#EEF3ED] rounded-2xl border border-[#3C4A3B]/5">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8FA88A]">
              <Stethoscope className="w-4 h-4" />
              <span>How Skin Care Axis Solves It</span>
            </div>
            <p className="text-xs sm:text-sm text-[#3C4A3B]/80 leading-relaxed">
              {activeConcern.clinicApproach}
            </p>
            <div className="pt-2 flex items-start gap-2 text-xs text-[#3C4A3B] font-medium">
              <CheckCircle2 className="w-4 h-4 text-[#8FA88A] shrink-0 mt-0.5" />
              <span>Target Outcome: {activeConcern.typicalOutcome}</span>
            </div>
          </div>
        </div>

        {/* Action Row */}
        <div className="pt-4 border-t border-[#3C4A3B]/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-[#3C4A3B]/60 uppercase tracking-wider">
              Recommended Clinic Procedures:
            </span>
            <div className="flex flex-wrap gap-2 pt-1">
              {activeConcern.recommendedTreatments.map((treatmentName, idx) => (
                <span
                  key={idx}
                  className="text-xs font-medium text-[#3C4A3B] bg-[#EEF3ED] px-2.5 py-1 rounded"
                >
                  {treatmentName}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/923039571111?text=Hi%2C%20I'd%20like%20to%20consult%20about%20${encodeURIComponent(activeConcern.title)}%20at%20Skin%20Care%20Axis.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#3C4A3B] hover:bg-[#263125] text-white rounded-lg text-xs font-semibold transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#C6A664]" />
              <span>Consult on WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* 4. ALL 4 CONCERNS STAGGERED OVERVIEW */}
      <section className="space-y-8">
        <div className="max-w-xl">
          <span className="text-xs uppercase tracking-widest text-[#8FA88A] font-semibold">
            Comprehensive Overview
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#3C4A3B] mt-1">
            Our diagnostic roadmap across every condition.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CONCERN_DETAILS.map((c, i) => (
            <div
              key={c.id}
              className={`p-6 bg-[#FBF9F4] rounded-2xl border border-[#3C4A3B]/10 space-y-3 ${
                i % 2 === 1 ? 'md:mt-4' : ''
              }`}
            >
              <h3 className="font-serif text-xl font-bold text-[#3C4A3B]">
                {c.title}
              </h3>
              <p className="text-xs text-[#3C4A3B]/80 leading-relaxed">
                {c.subtitle}
              </p>
              <p className="text-xs text-[#3C4A3B]/70 leading-relaxed">
                {c.clinicalReality}
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setSelectedConcern(c.id)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#8FA88A] hover:text-[#3C4A3B]"
                >
                  <span>View clinical protocol details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
