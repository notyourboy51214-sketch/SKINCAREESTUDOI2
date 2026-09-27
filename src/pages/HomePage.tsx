import React from 'react';
import { PageId, ConcernCategory } from '../types';
import { CLINIC_INFO, TREATMENTS } from '../data/clinicData';
import { IMAGES } from '../assets/images';
import { ImageMaskReveal } from '../components/ImageMaskReveal';
import {
  MessageCircle,
  Star,
  Sparkles,
  ArrowRight,
  Shield,
  CheckCircle2,
  Clock,
  MapPin,
  HeartHandshake
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId, filter?: ConcernCategory) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const hydrafacialTreatment = TREATMENTS.find(t => t.id === 'hydrafacial-clinical');

  return (
    <div className="space-y-24">
      {/* 1. HERO SECTION: SPLIT SCREEN */}
      <section className="pt-6 sm:pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Side: Editorial Typography & Conversion */}
          <div className="lg:col-span-6 space-y-6">
            {/* Trust Kicker (No Pill Enclosure - Clean Unboxed Typography) */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-[#3C4A3B]/80">
              <span className="flex items-center text-[#C6A664]">
                <Star className="w-3.5 h-3.5 fill-[#C6A664] mr-1" />
                <span className="font-semibold text-[#3C4A3B] tabular-nums">4.9</span> / 5.0
              </span>
              <span aria-hidden="true" className="text-[#3C4A3B]/40">·</span>
              <span>57 Verified Patient Outcomes</span>
              <span aria-hidden="true" className="text-[#3C4A3B]/40">·</span>
              <span className="text-[#8FA88A]">Nasheman-e-Iqbal Phase 1, Lahore</span>
            </div>

            {/* Headline with High-Contrast Serif */}
            <h1 className="font-serif text-4xl sm:text-5xl xl:text-6xl font-bold tracking-tight text-[#3C4A3B] leading-[1.12] text-balance">
              Where difficult, reactive skin finds its turning point.
            </h1>

            {/* Context-Specific Subcopy */}
            <p className="text-base sm:text-lg text-[#3C4A3B]/80 leading-relaxed max-w-xl">
              A private dermatology practice known for physician consultations that never rush, an immaculately organized clinical space, and restorative care for sensitive, acne-prone skin when previous treatments have failed.
            </p>

            {/* Primary Action Button (WhatsApp First) + Secondary Action */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#3C4A3B] hover:bg-[#263125] text-white rounded-lg text-sm font-semibold tracking-wide transition-all shadow-sm hover:shadow group"
              >
                <MessageCircle className="w-4 h-4 text-[#C6A664] group-hover:scale-110 transition-transform" />
                <span>Book Your Consultation</span>
              </a>

              <button
                onClick={() => onNavigate('treatments')}
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#EEF3ED] hover:bg-[#8FA88A]/20 text-[#3C4A3B] rounded-lg text-sm font-medium transition-colors"
              >
                <span>View Treatment Menu</span>
                <ArrowRight className="w-4 h-4 text-[#8FA88A]" />
              </button>
            </div>

            {/* Real Operational Note */}
            <div className="pt-3 border-t border-[#3C4A3B]/10 flex items-center gap-2 text-xs text-[#3C4A3B]/70">
              <Clock className="w-3.5 h-3.5 text-[#C6A664] shrink-0" />
              <span>Currently closed · Opens 2:00 PM Monday · Plot 40, Nasheman Iqbal</span>
            </div>
          </div>

          {/* Right Side: Full-Height Calming Clinical Image with Mask Wipe */}
          <div className="lg:col-span-6 relative">
            <ImageMaskReveal
              src={IMAGES.heroSkinTexture}
              alt="Macro healthy dewy skin texture and delicate moisture barrier"
              aspectRatioClass="aspect-[4/5] sm:aspect-[3/4]"
              caption="Clinical Hydrafacial & Barrier Health Protocol"
            />
          </div>
        </div>
      </section>

      {/* 2. TRUST BAND */}
      <section className="py-8 px-6 bg-[#EEF3ED]/70 rounded-2xl border border-[#3C4A3B]/5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
          <div className="space-y-1">
            <span className="text-2xl font-serif font-bold text-[#3C4A3B] tabular-nums">4.9 ★ Rating</span>
            <p className="text-xs text-[#3C4A3B]/75 leading-relaxed">
              Based on 57 verified patient appointments in Lahore, citing unmatched clinical results.
            </p>
          </div>
          <div className="space-y-1 md:border-l md:border-[#3C4A3B]/10 md:pl-6">
            <span className="text-2xl font-serif font-bold text-[#3C4A3B]">Attentive Listening</span>
            <p className="text-xs text-[#3C4A3B]/75 leading-relaxed">
              Every consultation allocates dedicated time to review previous product reactions and medical history.
            </p>
          </div>
          <div className="space-y-1 md:border-l md:border-[#3C4A3B]/10 md:pl-6">
            <span className="text-2xl font-serif font-bold text-[#3C4A3B]">Pristine Hygiene</span>
            <p className="text-xs text-[#3C4A3B]/75 leading-relaxed">
              Autoclaved medical instruments, single-use vacuum tips, and spotless clinical suites.
            </p>
          </div>
        </div>
      </section>

      {/* 3. WHY PATIENTS CHOOSE SKIN CARE AXIS — OFFSET-CARD CASCADE */}
      <section className="space-y-10">
        <div className="max-w-xl">
          <span className="text-xs uppercase tracking-widest text-[#8FA88A] font-semibold">
            Dermatological Foundation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#3C4A3B] mt-1 text-balance">
            Why patients trust Skin Care Axis when other clinics fell short.
          </h2>
        </div>

        {/* Offset Cascade: Cards are intentionally staggered at different vertical offsets and widths */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          {/* Card 1: Attentive Care (Wide, shifted up) */}
          <div className="md:col-span-7 bg-[#FBF9F4] p-8 rounded-2xl border border-[#3C4A3B]/10 shadow-sm space-y-4 hover:border-[#8FA88A] transition-all">
            <div className="w-10 h-10 rounded-lg bg-[#8FA88A]/15 flex items-center justify-center text-[#3C4A3B]">
              <HeartHandshake className="w-5 h-5 text-[#8FA88A]" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#3C4A3B]">
              A Doctor Who Patiently Listens to Every Single Detail
            </h3>
            <p className="text-sm text-[#3C4A3B]/80 leading-relaxed">
              The most frequent observation our patients make is that they never felt rushed out of the room. Sensitive skin is intimately personal; understanding what triggered a reaction requires patience, medical empathy, and an exhaustive review of what you have put on your face over months or years.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#8FA88A] font-medium">
              <CheckCircle2 className="w-4 h-4" />
              <span>Unhurried 1-on-1 consultations · No delegated diagnosis</span>
            </div>
          </div>

          {/* Card 2: Pristine Environment (Narrower, shifted down with top margin on desktop) */}
          <div className="md:col-span-5 md:mt-12 bg-[#FBF9F4] p-8 rounded-2xl border border-[#3C4A3B]/10 shadow-sm space-y-4 hover:border-[#8FA88A] transition-all">
            <div className="w-10 h-10 rounded-lg bg-[#8FA88A]/15 flex items-center justify-center text-[#3C4A3B]">
              <Shield className="w-5 h-5 text-[#8FA88A]" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#3C4A3B]">
              An Immaculate, Calm & Well-Organized Clinic
            </h3>
            <p className="text-sm text-[#3C4A3B]/80 leading-relaxed">
              We reject chaotic, noisy clinic environments. From strictly sanitized procedural suites to individually packed tips, every square foot of our Nasheman-e-Iqbal facility is engineered for quiet medical calm and spotless hygiene.
            </p>
            <div className="pt-2 flex items-center gap-2 text-xs text-[#8FA88A] font-medium">
              <CheckCircle2 className="w-4 h-4" />
              <span>Hospital-grade autoclave sterilization</span>
            </div>
          </div>

          {/* Card 3: Difficult Skin Success (Spans 10 columns centered, offset further) */}
          <div className="md:col-span-10 md:col-start-2 bg-[#EEF3ED] p-8 sm:p-10 rounded-2xl border border-[#3C4A3B]/10 shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-[#3C4A3B]">
              <Sparkles className="w-5 h-5 text-[#C6A664]" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#3C4A3B]">
              Proven Success with Skin Where Other Treatments Failed
            </h3>
            <p className="text-sm sm:text-base text-[#3C4A3B]/85 leading-relaxed max-w-2xl">
              Many of our patients arrive after having tried multiple harsh steroid creams, aggressive salon bleachings, or traumatic chemical peels elsewhere. Our protocol restores the lipid barrier first before cautiously clearing inflammation.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('stories')}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#3C4A3B] hover:text-[#263125] group"
              >
                <span>Read patient turnaround journeys</span>
                <ArrowRight className="w-4 h-4 text-[#8FA88A] group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FEATURED TREATMENT: HYDRAFACIAL SPOTLIGHT */}
      {hydrafacialTreatment && (
        <section className="p-8 sm:p-12 bg-white rounded-3xl border border-[#3C4A3B]/10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Image reveal on left */}
            <div className="lg:col-span-6">
              <ImageMaskReveal
                src={IMAGES.hydrafacialTreatment}
                alt="Gentle clinical hydrafacial treatment with vortex wand infusion"
                aspectRatioClass="aspect-[4/3]"
                caption="Medical Hydrafacial Elite Protocol"
              />
            </div>

            {/* Information on right */}
            <div className="lg:col-span-6 space-y-5">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#8FA88A] uppercase tracking-wider">
                <span>Featured Procedure</span>
                <span aria-hidden="true">·</span>
                <span>Signature at Skin Care Axis</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#3C4A3B] leading-tight">
                {hydrafacialTreatment.name}
              </h2>

              <p className="text-sm sm:text-base text-[#3C4A3B]/80 leading-relaxed">
                {hydrafacialTreatment.description}
              </p>

              <div className="space-y-2 pt-1">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#3C4A3B]/70 block">
                  What It Deeply Treats:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#3C4A3B]/85">
                  {hydrafacialTreatment.whatItTreats.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C6A664] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <a
                  href={`https://wa.me/923039571111?text=Hi%2C%20I'd%20like%20to%20inquire%20about%20booking%20a%20Hydrafacial%20at%20Skin%20Care%20Axis`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-[#3C4A3B] hover:bg-[#263125] text-white rounded-lg text-xs font-semibold transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#C6A664]" />
                  <span>Inquire for Hydrafacial Slot</span>
                </a>
                <span className="text-xs text-[#3C4A3B]/60 tabular-nums">
                  Duration: {hydrafacialTreatment.duration}
                </span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 5. QUICK CONCERN-FINDER: "What brings you in today?" */}
      <section className="space-y-6">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-xs uppercase tracking-widest text-[#8FA88A] font-semibold">
            Triage Your Skin Need
          </span>
          <h2 className="font-serif text-3xl font-bold text-[#3C4A3B]">
            What brings you to our clinic today?
          </h2>
          <p className="text-sm text-[#3C4A3B]/75">
            Select your primary skin challenge to view physician protocols and treatment roadmaps.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4">
          {[
            {
              id: 'acne' as ConcernCategory,
              title: 'Acne & Breakouts',
              description: 'Active cysts, stubborn comedones, post-blemish red marks',
              target: 'concerns' as PageId
            },
            {
              id: 'sensitivity' as ConcernCategory,
              title: 'Reactive Sensitivity',
              description: 'Skin that burns, stings, or flares up from basic moisturizers',
              target: 'concerns' as PageId
            },
            {
              id: 'hydration' as ConcernCategory,
              title: 'Dehydration & Smog Dullness',
              description: 'Urban congestion, clogged pores, loss of luminous bounce',
              target: 'treatments' as PageId
            },
            {
              id: 'aging' as ConcernCategory,
              title: 'Premature Lines & Texture',
              description: 'Fine dehydration lines, sun damage, elasticity decline',
              target: 'treatments' as PageId
            }
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.target, item.id)}
              className="p-6 bg-white hover:bg-[#EEF3ED] rounded-xl border border-[#3C4A3B]/10 hover:border-[#8FA88A] text-left transition-all group flex flex-col justify-between shadow-sm"
            >
              <div>
                <h3 className="font-serif text-lg font-bold text-[#3C4A3B] group-hover:text-[#263125]">
                  {item.title}
                </h3>
                <p className="text-xs text-[#3C4A3B]/70 mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>
              <div className="pt-4 flex items-center gap-1.5 text-xs font-semibold text-[#8FA88A] group-hover:text-[#3C4A3B]">
                <span>Explore Care Protocol</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* 6. LOCATION & HOURS CALLOUT */}
      <section className="p-8 bg-[#EEF3ED] rounded-2xl border border-[#3C4A3B]/10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2 text-xs font-semibold text-[#3C4A3B]">
            <MapPin className="w-4 h-4 text-[#8FA88A]" />
            <span>Plot 40, Nasheman Iqbal Phase 1, Lahore</span>
          </div>
          <p className="text-sm text-[#3C4A3B]/80">
            Consultations scheduled by appointment. Currently closed · Opens Monday at 2:00 PM.
          </p>
        </div>
        <button
          onClick={() => onNavigate('booking')}
          className="px-6 py-3 bg-[#3C4A3B] hover:bg-[#263125] text-white text-xs font-semibold rounded-lg transition-colors whitespace-nowrap"
        >
          Request Clinic Appointment
        </button>
      </section>
    </div>
  );
};
