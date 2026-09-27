import React from 'react';
import { PageId } from '../types';
import { PATIENT_STORIES, CLINIC_INFO } from '../data/clinicData';
import {
  Star,
  ShieldCheck,
  HeartHandshake,
  MessageCircle,
  Quote,
  Clock,
  Sparkles,
  ArrowRight
} from 'lucide-react';

interface SkinStoriesPageProps {
  onNavigateToBooking: () => void;
}

export const SkinStoriesPage: React.FC<SkinStoriesPageProps> = ({ onNavigateToBooking }) => {
  return (
    <div className="space-y-16 pt-6">
      {/* 1. HEADER & VERIFIED STATS */}
      <section className="space-y-4 max-w-3xl">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8FA88A]">
          <HeartHandshake className="w-4 h-4 text-[#8FA88A]" />
          <span>Documented Clinical Outcomes</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#3C4A3B] leading-tight text-balance">
          Real patient journeys. Restored confidence. Unmatched results.
        </h1>
        <p className="text-base sm:text-lg text-[#3C4A3B]/80 leading-relaxed">
          Behind our 4.9-star rating are 57 real individuals who walked in with burning, breakout-prone, or sensitized skin—and found an attentive physician who listened and turned their skin around.
        </p>
      </section>

      {/* 2. RATING & REPUTATION SCOREBOARD (GROUNDED IN REAL DATA) */}
      <section className="p-8 sm:p-10 bg-white rounded-3xl border border-[#3C4A3B]/10 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-4 text-center md:text-left space-y-2">
            <div className="flex items-center justify-center md:justify-start text-[#C6A664] gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-[#C6A664]" />
              ))}
            </div>
            <div className="font-serif text-4xl sm:text-5xl font-bold text-[#3C4A3B] tabular-nums">
              4.9 <span className="text-xl text-[#3C4A3B]/50 font-normal">/ 5.0</span>
            </div>
            <p className="text-xs text-[#3C4A3B]/70 font-medium">
              Based on 57 Verified Patient Consultations in Lahore
            </p>
          </div>

          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#3C4A3B]/85">
            <div className="p-4 bg-[#EEF3ED] rounded-xl border border-[#3C4A3B]/5 space-y-1">
              <span className="font-bold text-[#3C4A3B] block">Attentive Listening Commended</span>
              <p className="text-[#3C4A3B]/70">
                Over 90% of reviews explicitly praise our physician for taking time to explain conditions without rushing.
              </p>
            </div>
            <div className="p-4 bg-[#EEF3ED] rounded-xl border border-[#3C4A3B]/5 space-y-1">
              <span className="font-bold text-[#3C4A3B] block">Pristine Hygiene & Calm</span>
              <p className="text-[#3C4A3B]/70">
                Patients frequently note the clean, serene clinic atmosphere compared to hectic commercial salons.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. PATIENT JOURNEY NARRATIVES — OFFSET-CARD CASCADE */}
      <section className="space-y-10">
        <div className="max-w-xl">
          <span className="text-xs uppercase tracking-widest text-[#8FA88A] font-semibold">
            In-Depth Case Studies
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#3C4A3B] mt-1">
            Turnaround stories from difficult skin cases.
          </h2>
        </div>

        <div className="space-y-8">
          {PATIENT_STORIES.map((story, index) => {
            const isAlternate = index % 2 === 1;

            return (
              <div
                key={story.id}
                className={`p-8 sm:p-10 bg-white rounded-3xl border border-[#3C4A3B]/10 shadow-sm transition-all hover:border-[#8FA88A] ${
                  isAlternate ? 'lg:ml-10 bg-[#FBF9F4]' : ''
                }`}
              >
                {/* Meta Header */}
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#3C4A3B]/10 pb-4 mb-6">
                  <div>
                    <span className="text-xs font-semibold text-[#8FA88A] uppercase tracking-wider block">
                      Case Study {index + 1}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#3C4A3B]">
                      {story.condition}
                    </h3>
                    <span className="text-xs text-[#3C4A3B]/60 mt-0.5 block">
                      {story.patientRef}
                    </span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-[#8FA88A] font-medium bg-[#EEF3ED] px-3 py-1 rounded-full">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified Patient Record</span>
                  </div>
                </div>

                {/* Narrative Breakdown */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                  <div className="space-y-4">
                    <div>
                      <span className="text-xs font-semibold text-[#3C4A3B]/60 uppercase tracking-wider block mb-1">
                        Prior Challenge & Failed Treatments:
                      </span>
                      <p className="text-xs sm:text-sm text-[#3C4A3B]/80 leading-relaxed">
                        {story.priorHistory}
                      </p>
                    </div>

                    <div>
                      <span className="text-xs font-semibold text-[#8FA88A] uppercase tracking-wider block mb-1">
                        The Skin Care Axis Protocol:
                      </span>
                      <p className="text-xs sm:text-sm text-[#3C4A3B]/80 leading-relaxed">
                        {story.clinicalSolution}
                      </p>
                    </div>
                  </div>

                  {/* Paraphrased Patient Quote & Timeline */}
                  <div className="p-6 bg-[#EEF3ED] rounded-2xl border border-[#3C4A3B]/5 space-y-4">
                    <div className="flex items-start gap-2">
                      <Quote className="w-5 h-5 text-[#C6A664] shrink-0 mt-0.5" />
                      <p className="font-serif italic text-sm sm:text-base text-[#3C4A3B] leading-relaxed">
                        "{story.quoteParaphrase}"
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#3C4A3B]/10 space-y-1 text-xs text-[#3C4A3B]/80">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5 text-[#8FA88A]" />
                        <span className="font-medium">Timeline: {story.resultTimeline}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-[#C6A664]" />
                        <span>Procedure: {story.treatmentUsed}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. REASSURANCE & WHATSAPP ACTION */}
      <section className="p-8 sm:p-10 bg-[#EEF3ED] rounded-3xl border border-[#3C4A3B]/10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="font-serif text-2xl font-bold text-[#3C4A3B]">
            Have you struggled with treatments that irritated your skin?
          </h3>
          <p className="text-xs sm:text-sm text-[#3C4A3B]/80">
            Tell our physician about your skin history. We'll outline a gentle, barrier-safe protocol.
          </p>
        </div>
        <a
          href={CLINIC_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#3C4A3B] hover:bg-[#263125] text-white rounded-lg text-xs font-semibold transition-colors whitespace-nowrap"
        >
          <MessageCircle className="w-4 h-4 text-[#C6A664]" />
          <span>Consult via WhatsApp (+92 303 9571111)</span>
        </a>
      </section>
    </div>
  );
};
