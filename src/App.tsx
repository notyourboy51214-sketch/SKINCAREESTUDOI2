/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { SectionId, ConcernCategory, BookingFormData } from './types';
import { CLINIC_INFO, TREATMENTS, CONCERN_DETAILS, PATIENT_STORIES, FAQ_ITEMS } from './data/clinicData';
import { IMAGES, IMAGE_FALLBACKS } from './assets/images';
import { ImageMaskReveal } from './components/ImageMaskReveal';
import { NavigationRail } from './components/NavigationRail';
import { Footer } from './components/Footer';
import {
  MessageCircle,
  Star,
  Sparkles,
  ArrowRight,
  Shield,
  CheckCircle2,
  Clock,
  MapPin,
  HeartHandshake,
  Building,
  ShieldCheck,
  Award,
  FileText,
  Microscope,
  Droplets,
  Layers,
  Wind,
  Quote,
  Search,
  ChevronDown,
  CalendarCheck,
  Phone,
  Copy,
  Check,
  ExternalLink,
  AlertCircle,
  Stethoscope,
  HelpCircle
} from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [treatmentFilter, setTreatmentFilter] = useState<ConcernCategory>('all');

  // Subtle, smooth scroll progress indicator
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    restDelta: 0.001
  });

  // FAQ state
  const [faqSearch, setFaqSearch] = useState('');
  const [faqCategory, setFaqCategory] = useState<string>('all');
  const [openFaqIds, setOpenFaqIds] = useState<string[]>(['faq-1', 'faq-2']);

  // Booking Form state
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    phone: '',
    concern: 'Clinical Hydrafacial Elite',
    preferredDay: 'Monday (from 2:00 PM)',
    preferredTime: 'Afternoon (2:00 PM – 4:00 PM)',
    notes: '',
    hasSensitiveSkin: true
  });
  const [submittedRefId, setSubmittedRefId] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Smooth scroll handler
  const scrollToSection = (sectionId: SectionId) => {
    setActiveSection(sectionId);
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  // Scroll spy to highlight active section in navigation rail
  useEffect(() => {
    const sectionIds: SectionId[] = [
      'home',
      'story',
      'services',
      'approach',
      'science',
      'reviews',
      'process',
      'faqs',
      'location',
      'booking'
    ];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px',
        threshold: 0.1
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const toggleFaq = (id: string) => {
    if (openFaqIds.includes(id)) {
      setOpenFaqIds(openFaqIds.filter((item) => item !== id));
    } else {
      setOpenFaqIds([...openFaqIds, id]);
    }
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) return;

    setSubmitting(true);
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const newRefId = `SCA-${randomSuffix}`;

    setTimeout(() => {
      setSubmittedRefId(newRefId);
      setSubmitting(false);
    }, 400);
  };

  const handleCopyRef = () => {
    if (!submittedRefId) return;
    navigator.clipboard.writeText(submittedRefId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const filteredFaqs = FAQ_ITEMS.filter((faq) => {
    const matchesCategory = faqCategory === 'all' || faq.category === faqCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
      faq.answer.toLowerCase().includes(faqSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const filteredTreatments = treatmentFilter === 'all'
    ? TREATMENTS
    : TREATMENTS.filter((t) => t.category === treatmentFilter);

  const hydrafacialFeatured = TREATMENTS.find((t) => t.id === 'hydrafacial-clinical');

  return (
    <div className="min-h-screen bg-[#FBF9F4] text-[#3C4A3B] flex flex-col antialiased">
      {/* Subtle, slim scroll progress bar at the very top of the screen */}
      <div className="fixed top-0 left-0 right-0 z-50 h-[2.5px] bg-[#E8E4DA]/40 pointer-events-none">
        <motion.div
          style={{ scaleX, transformOrigin: '0%' }}
          className="h-full bg-gradient-to-r from-[#8FA88A] via-[#C6A664] to-[#8FA88A]"
        />
      </div>

      {/* Navigation (Desktop Left Rail + Mobile Drawer) */}
      <NavigationRail
        activeSection={activeSection}
        onNavigate={scrollToSection}
      />

      {/* Main Single Continuous Scroll Flow: Offset by desktop vertical rail */}
      <div className="lg:pl-64 xl:pl-72 flex-1 flex flex-col justify-between pt-16 lg:pt-0">
        <main className="max-w-6xl w-full mx-auto px-6 sm:px-10 py-8 lg:py-12 space-y-32">
          
          {/* ========================================================
              1. HERO SECTION (#home)
             ======================================================== */}
          <section id="home" className="pt-4 sm:pt-8 scroll-mt-24 space-y-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left Side: Editorial Typography & Conversion */}
              <div className="lg:col-span-6 space-y-6">
                {/* Trust Kicker (Clean Unboxed Typography) */}
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

                {/* Action Row */}
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
                    onClick={() => scrollToSection('services')}
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#EEF3ED] hover:bg-[#8FA88A]/20 text-[#3C4A3B] rounded-lg text-sm font-medium transition-colors"
                  >
                    <span>Explore Treatment Menu</span>
                    <ArrowRight className="w-4 h-4 text-[#8FA88A]" />
                  </button>
                </div>

                {/* Operational Note */}
                <div className="pt-3 border-t border-[#3C4A3B]/10 flex items-center gap-2 text-xs text-[#3C4A3B]/70">
                  <Clock className="w-3.5 h-3.5 text-[#C6A664] shrink-0" />
                  <span>Currently closed · Opens 2:00 PM Monday · Plot 40, Nasheman Iqbal</span>
                </div>
              </div>

              {/* Right Side: Calming Clinical Image with Mask Wipe */}
              <div className="lg:col-span-6 relative">
                <ImageMaskReveal
                  src={IMAGES.heroSkinTexture}
                  fallbackSrcs={IMAGE_FALLBACKS.heroSkinTexture}
                  alt="Macro healthy dewy skin texture and delicate moisture barrier"
                  aspectRatioClass="aspect-[4/5] sm:aspect-[3/4]"
                  caption="Clinical Hydrafacial & Barrier Health Protocol"
                />
              </div>
            </div>

            {/* Trust Band */}
            <div className="py-8 px-6 bg-[#EEF3ED]/70 rounded-2xl border border-[#3C4A3B]/5">
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
            </div>

            {/* Quick Concern Finder: Directly scroll into treatment menu or approach */}
            <div className="space-y-6 pt-4">
              <div className="text-center max-w-xl mx-auto space-y-1">
                <span className="text-xs uppercase tracking-widest text-[#8FA88A] font-semibold">
                  Triage Your Skin Need
                </span>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#3C4A3B]">
                  What brings you to our clinic today?
                </h2>
                <p className="text-xs sm:text-sm text-[#3C4A3B]/70">
                  Select your primary challenge to jump straight into tailored treatment protocols.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  {
                    filter: 'acne' as ConcernCategory,
                    title: 'Acne & Breakouts',
                    description: 'Active cysts, stubborn comedones, post-blemish red marks'
                  },
                  {
                    filter: 'sensitivity' as ConcernCategory,
                    title: 'Reactive Sensitivity',
                    description: 'Skin that burns, stings, or flares up from basic moisturizers'
                  },
                  {
                    filter: 'hydration' as ConcernCategory,
                    title: 'Dehydration & Smog Dullness',
                    description: 'Urban congestion, clogged pores, loss of luminous bounce'
                  },
                  {
                    filter: 'aging' as ConcernCategory,
                    title: 'Premature Lines & Texture',
                    description: 'Fine dehydration lines, sun damage, elasticity decline'
                  }
                ].map((item) => (
                  <button
                    key={item.filter}
                    onClick={() => {
                      setTreatmentFilter(item.filter);
                      scrollToSection('services');
                    }}
                    className="p-5 bg-white hover:bg-[#EEF3ED] rounded-xl border border-[#3C4A3B]/10 hover:border-[#8FA88A] text-left transition-all group flex flex-col justify-between shadow-xs"
                  >
                    <div>
                      <h3 className="font-serif text-base font-bold text-[#3C4A3B] group-hover:text-[#263125]">
                        {item.title}
                      </h3>
                      <p className="text-xs text-[#3C4A3B]/70 mt-1.5 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                    <div className="pt-3 flex items-center gap-1.5 text-xs font-semibold text-[#8FA88A] group-hover:text-[#3C4A3B]">
                      <span>View Care Protocol</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* ========================================================
              2. INTRO / BRAND STORY (#story)
             ======================================================== */}
          <section id="story" className="scroll-mt-24 space-y-12">
            <div className="space-y-4 max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8FA88A]">
                <Building className="w-4 h-4 text-[#8FA88A]" />
                <span>The Clinic & Story</span>
                <span aria-hidden="true">·</span>
                <span>Nasheman-e-Iqbal Phase 1, Lahore</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3C4A3B] leading-tight text-balance">
                A calm, orderly sanctuary built for medical dermatology, not commercial volume.
              </h2>
              <p className="text-base sm:text-lg text-[#3C4A3B]/80 leading-relaxed">
                Skin Care Axis was founded to provide a quiet, clinical counterweight to commercial beauty parlors and rushed practices. We believe skin healing requires an unhurried mind, spotless medical standards, and an environment stripped of chaotic commercial noise.
              </p>
            </div>

            {/* Photo-Led Space Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <ImageMaskReveal
                  src={IMAGES.clinicInterior}
                  fallbackSrcs={IMAGE_FALLBACKS.clinicInterior}
                  alt="Bright airy modern dermatology clinic interior consultation suite in Lahore"
                  aspectRatioClass="aspect-[16/10]"
                  caption="Clinical Suite · Spotless, Quiet & Natural Daylight"
                />
              </div>

              <div className="lg:col-span-5 space-y-4">
                <span className="text-xs uppercase tracking-widest text-[#8FA88A] font-semibold">
                  The Physical Space
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#3C4A3B]">
                  Cleanliness you can sense the moment you walk through our doors.
                </h3>
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

            {/* Core Standards Offset-Card Cascade */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start pt-4">
              <div className="md:col-span-4 bg-white p-7 rounded-2xl border border-[#3C4A3B]/10 shadow-xs space-y-3">
                <div className="w-9 h-9 rounded-lg bg-[#8FA88A]/15 flex items-center justify-center text-[#8FA88A]">
                  <HeartHandshake className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-lg font-bold text-[#3C4A3B]">
                  01. Unhurried Listening
                </h4>
                <p className="text-xs text-[#3C4A3B]/80 leading-relaxed">
                  We never cut patients off or prescribe before we fully understand how your skin responded to prior products, seasonal weather shifts, and stress triggers.
                </p>
              </div>

              <div className="md:col-span-4 md:mt-6 bg-white p-7 rounded-2xl border border-[#3C4A3B]/10 shadow-xs space-y-3">
                <div className="w-9 h-9 rounded-lg bg-[#8FA88A]/15 flex items-center justify-center text-[#8FA88A]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-lg font-bold text-[#3C4A3B]">
                  02. Barrier-First Medicine
                </h4>
                <p className="text-xs text-[#3C4A3B]/80 leading-relaxed">
                  We refuse to subject sensitive skin to aggressive peelings or uncalibrated lasers that trigger hyperpigmentation rebound in South Asian skin types.
                </p>
              </div>

              <div className="md:col-span-4 md:mt-12 bg-white p-7 rounded-2xl border border-[#3C4A3B]/10 shadow-xs space-y-3">
                <div className="w-9 h-9 rounded-lg bg-[#8FA88A]/15 flex items-center justify-center text-[#8FA88A]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="font-serif text-lg font-bold text-[#3C4A3B]">
                  03. Evidence & Honest Prognosis
                </h4>
                <p className="text-xs text-[#3C4A3B]/80 leading-relaxed">
                  We provide realistic timelines rather than false overnight promises. If a requested treatment is contraindicated for your barrier type, we explicitly explain why.
                </p>
              </div>
            </div>
          </section>

          {/* ========================================================
              3. MAIN SERVICES / OFFER (#services)
             ======================================================== */}
          <section id="services" className="scroll-mt-24 space-y-12">
            <div className="space-y-4 max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8FA88A]">
                <Sparkles className="w-4 h-4 text-[#8FA88A]" />
                <span>Treatment Menu & Clinical Offerings</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3C4A3B] leading-tight text-balance">
                Evidence-based procedures designed to respect and heal the skin barrier.
              </h2>
              <p className="text-base sm:text-lg text-[#3C4A3B]/80 leading-relaxed">
                Every procedure at Skin Care Axis is calibrated around skin comfort, safety for South Asian phototypes, and enduring cellular hydration. We do not offer harsh, stripping salon bleachings.
              </p>
            </div>

            {/* Featured Treatment Spotlight: Hydrafacial Elite */}
            {hydrafacialFeatured && (
              <div className="p-8 sm:p-12 bg-white rounded-3xl border border-[#3C4A3B]/10 shadow-xs">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                  <div className="lg:col-span-6">
                    <ImageMaskReveal
                      src={IMAGES.hydrafacialTreatment}
                      fallbackSrcs={IMAGE_FALLBACKS.hydrafacialTreatment}
                      alt="Gentle clinical hydrafacial treatment with vortex wand infusion"
                      aspectRatioClass="aspect-[4/3]"
                      caption="Flagship Medical Hydrafacial Protocol"
                    />
                  </div>

                  <div className="lg:col-span-6 space-y-4">
                    <div className="flex items-center gap-2 text-xs font-semibold text-[#8FA88A] uppercase tracking-wider">
                      <span>Signature Clinic Procedure</span>
                      <span aria-hidden="true">·</span>
                      <span>Flagship Protocol</span>
                    </div>

                    <h3 className="font-serif text-3xl font-bold text-[#3C4A3B]">
                      {hydrafacialFeatured.name}
                    </h3>

                    <p className="text-sm font-medium text-[#8FA88A]">
                      {hydrafacialFeatured.tagline}
                    </p>

                    <p className="text-sm text-[#3C4A3B]/80 leading-relaxed">
                      {hydrafacialFeatured.description}
                    </p>

                    <div className="space-y-1.5 pt-1">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#3C4A3B]/70 block">
                        What It Deeply Treats:
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#3C4A3B]/85">
                        {hydrafacialFeatured.whatItTreats.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C6A664] shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 flex flex-wrap items-center gap-4">
                      <a
                        href={`https://wa.me/923039571111?text=Hi%2C%20I'd%20like%20to%20inquire%20about%20booking%20a%20Hydrafacial%20at%20Skin%20Care%20Axis`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#3C4A3B] hover:bg-[#263125] text-white rounded-lg text-xs font-semibold transition-colors"
                      >
                        <MessageCircle className="w-4 h-4 text-[#C6A664]" />
                        <span>Inquire for Hydrafacial Slot</span>
                      </a>
                      <span className="text-xs text-[#3C4A3B]/60 tabular-nums">
                        Duration: {hydrafacialFeatured.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Interactive Filter Tabs (Button controls) */}
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#EEF3ED] rounded-xl border border-[#3C4A3B]/5 w-fit">
                {[
                  { id: 'all' as ConcernCategory, label: 'All Treatments' },
                  { id: 'hydration' as ConcernCategory, label: 'Hydrafacial & Glow' },
                  { id: 'sensitivity' as ConcernCategory, label: 'Sensitive Skin Protocols' },
                  { id: 'acne' as ConcernCategory, label: 'Acne Clearance' },
                  { id: 'pigmentation' as ConcernCategory, label: 'Melasma & PIH Marks' },
                  { id: 'aging' as ConcernCategory, label: 'Collagen & Longevity' },
                ].map((tab) => {
                  const isActive = treatmentFilter === tab.id;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => setTreatmentFilter(tab.id)}
                      className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-all whitespace-nowrap ${
                        isActive
                          ? 'bg-white text-[#263125] font-semibold shadow-xs border border-[#3C4A3B]/10'
                          : 'text-[#3C4A3B]/70 hover:text-[#3C4A3B] hover:bg-white/50'
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              {/* Offset-Card Cascade for Treatments */}
              <div className="space-y-6">
                {filteredTreatments.map((treatment, index) => {
                  const isAlternate = index % 2 === 1;
                  const prefilledMsg = encodeURIComponent(
                    `Hi, I'd like to book an appointment for ${treatment.name} at Skin Care Axis.`
                  );

                  return (
                    <div
                      key={treatment.id}
                      className={`p-8 sm:p-10 bg-white rounded-3xl border border-[#3C4A3B]/10 shadow-xs transition-all hover:border-[#8FA88A] ${
                        isAlternate ? 'lg:ml-8 bg-[#FDFCF9]' : ''
                      }`}
                    >
                      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                        {/* Left Overview */}
                        <div className="lg:col-span-7 space-y-3">
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

                          <h3 className="font-serif text-2xl font-bold text-[#3C4A3B]">
                            {treatment.name}
                          </h3>

                          <p className="text-xs font-semibold text-[#8FA88A]">
                            {treatment.tagline}
                          </p>

                          <p className="text-xs sm:text-sm text-[#3C4A3B]/80 leading-relaxed">
                            {treatment.description}
                          </p>

                          <div className="pt-2">
                            <span className="text-xs font-semibold uppercase tracking-wider text-[#3C4A3B]/70 block mb-1.5">
                              Key Indications:
                            </span>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-[#3C4A3B]/85">
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
                        <div className="lg:col-span-5 p-6 bg-[#EEF3ED] rounded-2xl border border-[#3C4A3B]/5 space-y-3 lg:mt-2">
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

                          <div className="pt-3 flex flex-col gap-2">
                            <a
                              href={`https://wa.me/923039571111?text=${prefilledMsg}`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#3C4A3B] hover:bg-[#263125] text-white rounded-lg text-xs font-semibold transition-colors"
                            >
                              <MessageCircle className="w-4 h-4 text-[#C6A664]" />
                              <span>Book on WhatsApp</span>
                            </a>

                            <button
                              onClick={() => {
                                setFormData((prev) => ({ ...prev, concern: treatment.name }));
                                scrollToSection('booking');
                              }}
                              className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 bg-white hover:bg-[#FBF9F4] text-[#3C4A3B] rounded-lg text-xs font-medium border border-[#3C4A3B]/10 transition-colors"
                            >
                              <span>Request Callback Form</span>
                              <ArrowRight className="w-3.5 h-3.5 text-[#8FA88A]" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* ========================================================
              4. UNIQUE VALUE / APPROACH (#approach)
             ======================================================== */}
          <section id="approach" className="scroll-mt-24 space-y-12">
            <div className="space-y-4 max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8FA88A]">
                <HeartHandshake className="w-4 h-4 text-[#8FA88A]" />
                <span>Physician Approach & Philosophy</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3C4A3B] leading-tight text-balance">
                "The first question is never what treatment to sell, but what your skin has endured."
              </h2>
              <p className="text-base sm:text-lg text-[#3C4A3B]/80 leading-relaxed">
                At Skin Care Axis, our lead dermatologist has built a quiet reputation across Lahore as an exceptionally attentive listener—someone who takes down your complete history, understands the vulnerability of skin struggles, and designs gentle, sustainable regimens.
              </p>
            </div>

            {/* Split Section: Consultation Desk Photo & Attentive Ethos */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-6">
                <ImageMaskReveal
                  src={IMAGES.consultationDesk}
                  fallbackSrcs={IMAGE_FALLBACKS.consultationDesk}
                  alt="Dermatologist consultation desk with dermatoscope instrument and appointment notes"
                  aspectRatioClass="aspect-[4/3]"
                  caption="The Consultation Room · Dedicated Diagnostic Assessment"
                />
              </div>

              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs uppercase tracking-widest text-[#8FA88A] font-semibold">
                  Patient-Centered Practice
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#3C4A3B]">
                  Why patient listening is our most potent clinical tool.
                </h3>
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
            </div>

            {/* Depth & Phototype Credentials */}
            <div className="p-8 sm:p-10 bg-white rounded-3xl border border-[#3C4A3B]/10 shadow-xs space-y-6">
              <div className="max-w-xl">
                <span className="text-xs uppercase tracking-widest text-[#8FA88A] font-semibold">
                  Qualifications & Clinical Depth
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#3C4A3B] mt-1">
                  Rooted in medical dermatology and South Asian barrier biology.
                </h3>
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
                    Extensive documented success rehabilitating damaged skin caused by unregulated local steroid fairness creams, over-exfoliation, or severe contact allergic dermatitis.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ========================================================
              5. FEATURED CONTENT / VISUAL STORY (#science)
             ======================================================== */}
          <section id="science" className="scroll-mt-24 space-y-12">
            <div className="space-y-4 max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8FA88A]">
                <Microscope className="w-4 h-4 text-[#8FA88A]" />
                <span>Biomedical Formulation & Environmental Science</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3C4A3B] leading-tight text-balance">
                The biological science behind gentle, barrier-first dermatology.
              </h2>
              <p className="text-base sm:text-lg text-[#3C4A3B]/80 leading-relaxed">
                True clinical skin rejuvenation is not about aggressive chemical abrasion. It is about understanding lipid bilayer chemistry, cellular osmotic balance, and micro-vortex fluidics that cleanse without trauma.
              </p>
            </div>

            {/* Hydrafacial Vortex Technology Cards */}
            <div className="p-8 sm:p-12 bg-white rounded-3xl border border-[#3C4A3B]/10 shadow-xs space-y-8">
              <div className="max-w-2xl space-y-2">
                <span className="text-xs uppercase tracking-widest text-[#8FA88A] font-semibold">
                  Fluidics & Micro-Extraction
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#3C4A3B]">
                  How Medical Hydrafacial Vortex Technology Protects Sensitive Skin
                </h3>
                <p className="text-sm text-[#3C4A3B]/80 leading-relaxed">
                  Conventional manual extractions squeeze pores with metallic comedone extractors, causing micro-capillary ruptures, pain, and lingering post-inflammatory hyperpigmentation.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-[#EEF3ED] rounded-2xl border border-[#3C4A3B]/5 space-y-3">
                  <Droplets className="w-6 h-6 text-[#8FA88A]" />
                  <h4 className="font-serif text-lg font-bold text-[#3C4A3B]">
                    01. Spiral Hydro-Dislodgement
                  </h4>
                  <p className="text-xs text-[#3C4A3B]/80 leading-relaxed">
                    A specialized hydro-cyclone tip generates a localized micro-whirlpool. It softens solidified sebum plugs gently with glucosamine and botanical extracts rather than abrasive grains.
                  </p>
                </div>

                <div className="p-6 bg-[#EEF3ED] rounded-2xl border border-[#3C4A3B]/5 space-y-3">
                  <Layers className="w-6 h-6 text-[#8FA88A]" />
                  <h4 className="font-serif text-lg font-bold text-[#3C4A3B]">
                    02. Calibrated Vacuum Suction
                  </h4>
                  <p className="text-xs text-[#3C4A3B]/80 leading-relaxed">
                    Negative suction pressure is digitally regulated. On sensitized or rosacea-prone skin, we lower the barometric draw to safely evacuate pore debris without causing erythema.
                  </p>
                </div>

                <div className="p-6 bg-[#EEF3ED] rounded-2xl border border-[#3C4A3B]/5 space-y-3">
                  <Sparkles className="w-6 h-6 text-[#C6A664]" />
                  <h4 className="font-serif text-lg font-bold text-[#3C4A3B]">
                    03. Simultaneous Peptide Infiltration
                  </h4>
                  <p className="text-xs text-[#3C4A3B]/80 leading-relaxed">
                    As impurities are withdrawn, low-molecular weight hyaluronic acid and antioxidant peptides are instantly infused into the open follicular ostia to stabilize barrier homeostasis.
                  </p>
                </div>
              </div>
            </div>

            {/* Formulation Philosophy & Serum Bottles Photo */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-6">
                <ImageMaskReveal
                  src={IMAGES.serumBottles}
                  fallbackSrcs={IMAGE_FALLBACKS.serumBottles}
                  alt="Clean glass skincare bottles and dropper serums in natural morning window light"
                  aspectRatioClass="aspect-[4/3]"
                  caption="Physiologic Lipid Serums & Clean Formulations"
                />
              </div>

              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs uppercase tracking-widest text-[#8FA88A] font-semibold">
                  Ingredient Discipline
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#3C4A3B]">
                  Formulated strictly for reactive South Asian skin barrier thresholds.
                </h3>
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
            </div>

            {/* Environmental Smog Defense Callout */}
            <div className="p-8 sm:p-10 bg-[#EEF3ED] rounded-3xl border border-[#3C4A3B]/10 space-y-4">
              <div className="max-w-2xl space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#3C4A3B]">
                  <Wind className="w-4 h-4 text-[#8FA88A]" />
                  <span>Environmental Dermatology</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#3C4A3B]">
                  Countering Lahore's seasonal smog and groundwater minerals.
                </h3>
                <p className="text-sm text-[#3C4A3B]/80 leading-relaxed">
                  Atmospheric particulate matter (PM2.5) during Lahore's winter smog binds with ambient polycyclic aromatic hydrocarbons, penetrating deep into epidermal micro-fissures and triggering sudden allergic eczema and breakout flares.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#3C4A3B]/85 pt-2">
                <div className="p-4 bg-white rounded-xl border border-[#3C4A3B]/5 space-y-1">
                  <span className="font-bold text-[#3C4A3B] block">Air-Purified Treatment Rooms</span>
                  <p className="text-[#3C4A3B]/70">
                    Continuous multi-stage HEPA filtration keeps consultation air free of ambient smog particulate.
                  </p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-[#3C4A3B]/5 space-y-1">
                  <span className="font-bold text-[#3C4A3B] block">Demineralized Deionized Hydro-Lines</span>
                  <p className="text-[#3C4A3B]/70">
                    Medical demineralized water prevents the calcium deposits common in municipal water from clogging pores.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* ========================================================
              6. TRUST / REVIEWS (#reviews)
             ======================================================== */}
          <section id="reviews" className="scroll-mt-24 space-y-12">
            <div className="space-y-4 max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8FA88A]">
                <HeartHandshake className="w-4 h-4 text-[#8FA88A]" />
                <span>Documented Clinical Outcomes</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3C4A3B] leading-tight text-balance">
                Real patient journeys. Restored confidence. Unmatched results.
              </h2>
              <p className="text-base sm:text-lg text-[#3C4A3B]/80 leading-relaxed">
                Behind our 4.9-star rating are 57 real individuals who walked in with burning, breakout-prone, or sensitized skin—and found an attentive physician who listened and turned their skin around.
              </p>
            </div>

            {/* Rating Board */}
            <div className="p-8 sm:p-10 bg-white rounded-3xl border border-[#3C4A3B]/10 shadow-xs">
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
            </div>

            {/* Case Study Narratives: Offset-Card Cascade */}
            <div className="space-y-8">
              {PATIENT_STORIES.map((story, index) => {
                const isAlternate = index % 2 === 1;

                return (
                  <div
                    key={story.id}
                    className={`p-8 sm:p-10 bg-white rounded-3xl border border-[#3C4A3B]/10 shadow-xs transition-all hover:border-[#8FA88A] ${
                      isAlternate ? 'lg:ml-10 bg-[#FBF9F4]' : ''
                    }`}
                  >
                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#3C4A3B]/10 pb-4 mb-6">
                      <div>
                        <span className="text-xs font-semibold text-[#8FA88A] uppercase tracking-wider block">
                          Turnaround Story {index + 1}
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

                      <div className="p-6 bg-[#EEF3ED] rounded-2xl border border-[#3C4A3B]/5 space-y-4">
                        <div className="flex items-start gap-2">
                          <Quote className="w-5 h-5 text-[#C6A664] shrink-0 mt-0.5" />
                          <p className="font-serif italic text-sm text-[#3C4A3B] leading-relaxed">
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

          {/* ========================================================
              7. PROCESS / HOW IT WORKS (#process)
             ======================================================== */}
          <section id="process" className="scroll-mt-24 space-y-10">
            <div className="space-y-3 max-w-xl">
              <span className="text-xs uppercase tracking-widest text-[#8FA88A] font-semibold">
                Patient Journey
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#3C4A3B]">
                How a first visit works at Skin Care Axis.
              </h2>
              <p className="text-sm text-[#3C4A3B]/75 leading-relaxed">
                A structured, unhurried 3-step walkthrough designed to eliminate anxiety and establish clarity.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-7 bg-[#EEF3ED] rounded-2xl border border-[#3C4A3B]/10 space-y-3">
                <span className="font-serif text-3xl font-bold text-[#8FA88A] block">01</span>
                <h3 className="font-serif text-lg font-bold text-[#3C4A3B]">
                  Comprehensive Routine & Trigger Audit
                </h3>
                <p className="text-xs text-[#3C4A3B]/80 leading-relaxed">
                  You share all the cleansers, actives, sunscreen brands, and lifestyle habits you currently use. We listen without judgment and catalogue what may be sensitizing your barrier.
                </p>
              </div>

              <div className="p-7 bg-[#EEF3ED] rounded-2xl border border-[#3C4A3B]/10 space-y-3 md:translate-y-3">
                <span className="font-serif text-3xl font-bold text-[#8FA88A] block">02</span>
                <h3 className="font-serif text-lg font-bold text-[#3C4A3B]">
                  Clinical Examination & Barrier Check
                </h3>
                <p className="text-xs text-[#3C4A3B]/80 leading-relaxed">
                  Our doctor examines skin vascularity, micro-comedone depth, trans-epidermal water loss signs, and areas of erythema under dermatological magnification.
                </p>
              </div>

              <div className="p-7 bg-[#EEF3ED] rounded-2xl border border-[#3C4A3B]/10 space-y-3 md:translate-y-6">
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

          {/* ========================================================
              8. BUSINESS-SPECIFIC INFORMATION / FAQS (#faqs)
             ======================================================== */}
          <section id="faqs" className="scroll-mt-24 space-y-10">
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8FA88A]">
                <HelpCircle className="w-4 h-4 text-[#8FA88A]" />
                <span>Patient Questions & Clinical Answers</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#3C4A3B]">
                Clear, honest answers before your visit.
              </h2>
              <p className="text-sm text-[#3C4A3B]/80 leading-relaxed">
                Everything you need to know regarding our treatments, sensitivity protocols, and consultation standards.
              </p>
            </div>

            {/* Search & Filter Tabs */}
            <div className="space-y-4">
              <div className="relative max-w-md">
                <Search className="w-4 h-4 text-[#3C4A3B]/50 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={faqSearch}
                  onChange={(e) => setFaqSearch(e.target.value)}
                  placeholder="Search questions (e.g. sensitive skin, downtime, acne)..."
                  className="w-full pl-10 pr-4 py-2.5 bg-white border border-[#3C4A3B]/15 rounded-xl text-xs sm:text-sm text-[#3C4A3B] placeholder-[#3C4A3B]/40 focus:outline-none focus:ring-1 focus:ring-[#8FA88A] focus:border-[#8FA88A] transition-all"
                />
              </div>

              <div className="flex flex-wrap gap-2">
                {[
                  { id: 'all', label: 'All Questions' },
                  { id: 'treatments', label: 'Hydrafacial & Procedures' },
                  { id: 'sensitivity', label: 'Sensitive & Allergic Skin' },
                  { id: 'philosophy', label: 'Clinic Standards' },
                  { id: 'appointments', label: 'Appointments & Hours' },
                ].map((cat) => {
                  const isActive = faqCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setFaqCategory(cat.id)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                        isActive
                          ? 'bg-[#3C4A3B] text-white'
                          : 'bg-[#EEF3ED] text-[#3C4A3B]/80 hover:bg-[#8FA88A]/20'
                      }`}
                    >
                      {cat.label}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Accordion */}
            <div className="space-y-3">
              {filteredFaqs.map((faq) => {
                const isOpen = openFaqIds.includes(faq.id);
                return (
                  <div
                    key={faq.id}
                    className="bg-white rounded-2xl border border-[#3C4A3B]/10 overflow-hidden transition-all shadow-xs"
                  >
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 hover:bg-[#FBF9F4] transition-colors"
                    >
                      <span className="font-serif text-base sm:text-lg font-bold text-[#3C4A3B]">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#8FA88A] shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#3C4A3B]/80 leading-relaxed border-t border-[#3C4A3B]/5 bg-[#FBF9F4]/40">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* ========================================================
              9. LOCATION & CONTACT (#location)
             ======================================================== */}
          <section id="location" className="scroll-mt-24 space-y-10">
            <div className="space-y-3 max-w-xl">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8FA88A]">
                <MapPin className="w-4 h-4 text-[#8FA88A]" />
                <span>Location & Visit Information</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#3C4A3B]">
                Visit us in Nasheman-e-Iqbal Phase 1, Lahore.
              </h2>
              <p className="text-sm text-[#3C4A3B]/80 leading-relaxed">
                Quiet, accessible, and equipped with dedicated parking for our patients.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Column: Address, Hours & Google Maps Action */}
              <div className="lg:col-span-6 bg-white p-8 sm:p-10 rounded-3xl border border-[#3C4A3B]/10 shadow-xs space-y-6">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#8FA88A] font-semibold block mb-1">
                    Physical Address
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-[#3C4A3B]">
                    Plot 40, Nasheman Iqbal Phase 1, Lahore
                  </h3>
                  <p className="text-xs text-[#3C4A3B]/70 mt-1">
                    Centrally located in Nasheman-e-Iqbal, convenient to Pine Avenue, Khayaban-e-Jinnah, and Model Town.
                  </p>
                </div>

                <div className="space-y-3 border-t border-[#3C4A3B]/10 pt-4 text-xs text-[#3C4A3B]/85">
                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-[#C6A664] mt-0.5 shrink-0" />
                    <div>
                      <span className="font-bold text-[#3C4A3B]">Currently Closed · Opens 2:00 PM Monday</span>
                      <p className="text-[#3C4A3B]/65 mt-0.5">
                        Consultations run on a reserved schedule to prevent crowded lounges. Additional weekday clinic slots to be announced.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Phone className="w-4 h-4 text-[#8FA88A] shrink-0" />
                    <span>
                      Direct Call: <a href={`tel:${CLINIC_INFO.phone}`} className="font-mono font-bold text-[#3C4A3B] hover:text-[#263125] underline decoration-[#8FA88A] underline-offset-4">{CLINIC_INFO.phoneFormatted}</a>
                    </span>
                  </div>
                </div>

                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href={CLINIC_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-[#3C4A3B] hover:bg-[#263125] text-white rounded-lg text-xs font-semibold transition-colors shadow-xs"
                  >
                    <span>Open Exact Google Business Profile</span>
                    <ExternalLink className="w-3.5 h-3.5 text-[#8FA88A]" />
                  </a>

                  <a
                    href={CLINIC_INFO.googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-[#EEF3ED] hover:bg-[#8FA88A]/20 text-[#3C4A3B] rounded-lg text-xs font-semibold transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5 text-[#8FA88A]" />
                    <span>Get Directions</span>
                  </a>

                  <a
                    href={CLINIC_INFO.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-[#EEF3ED] hover:bg-[#8FA88A]/20 text-[#3C4A3B] rounded-lg text-xs font-semibold transition-colors"
                  >
                    <MessageCircle className="w-4 h-4 text-[#8FA88A]" />
                    <span>Ask for Pin on WhatsApp</span>
                  </a>
                </div>
              </div>

              {/* Right Column: Interactive Embedded Google Map & Direct Business Profile Card */}
              <div className="lg:col-span-6 space-y-6">
                <div className="relative rounded-3xl overflow-hidden border border-[#3C4A3B]/10 aspect-[16/11] bg-[#EEF3ED] shadow-xs">
                  {/* Real Interactive Google Map Embed centered on Skin Care Axis Lahore */}
                  <iframe
                    title="Skin Care Axis Lahore Google Maps Business Location"
                    src={CLINIC_INFO.googleMapsEmbedUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  />

                  {/* Overlay badge with direct link to Google Business listing */}
                  <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-xs p-3 rounded-xl border border-[#3C4A3B]/10 flex items-center justify-between gap-3 shadow-md">
                    <div className="truncate">
                      <span className="font-serif text-xs font-bold text-[#3C4A3B] block truncate">
                        Skin Care Axis · Nasheman-e-Iqbal
                      </span>
                      <span className="text-[11px] text-[#8FA88A] block">
                        4.9 ★ · 57 Google Reviews
                      </span>
                    </div>
                    <a
                      href={CLINIC_INFO.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shrink-0 inline-flex items-center gap-1 px-3 py-1.5 bg-[#3C4A3B] hover:bg-[#263125] text-white rounded-lg text-[11px] font-semibold transition-colors"
                    >
                      <span>View Profile</span>
                      <ExternalLink className="w-3 h-3 text-[#C6A664]" />
                    </a>
                  </div>
                </div>

                <div className="p-6 bg-[#EEF3ED] rounded-2xl border border-[#3C4A3B]/5 space-y-2 text-xs text-[#3C4A3B]/80">
                  <span className="font-semibold text-[#3C4A3B] block">Arrival & Parking Notes:</span>
                  <p>Dedicated parking bays are situated directly in front of the clinic entrance in Phase 1 for easy patient drop-off.</p>
                </div>
              </div>
            </div>
          </section>

          {/* ========================================================
              10. FINAL CTA / CONSULTATION BOOKING (#booking)
             ======================================================== */}
          <section id="booking" className="scroll-mt-24 space-y-10">
            <div className="space-y-4 max-w-3xl">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8FA88A]">
                <CalendarCheck className="w-4 h-4 text-[#8FA88A]" />
                <span>Appointment Confirmation</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#3C4A3B] leading-tight text-balance">
                Reserve your consultation slot.
              </h2>
              <p className="text-base sm:text-lg text-[#3C4A3B]/80 leading-relaxed">
                In Pakistan, WhatsApp is our quickest and most responsive booking channel. You can message us directly, or complete our confidential intake form below to receive a reference ID.
              </p>
            </div>

            {/* Operational Banner */}
            <div className="p-6 sm:p-8 bg-[#EEF3ED] rounded-2xl border border-[#3C4A3B]/10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-8 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-semibold text-[#3C4A3B]">
                  <Clock className="w-4 h-4 text-[#C6A664]" />
                  <span className="text-sm font-bold text-[#3C4A3B]">
                    Currently closed · Opens 2:00 PM Monday
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-[#3C4A3B]/80 leading-relaxed">
                  {CLINIC_INFO.openingHoursNote}
                </p>
              </div>

              <div className="md:col-span-4 flex flex-col gap-2">
                <a
                  href={CLINIC_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#3C4A3B] hover:bg-[#263125] text-white rounded-lg text-xs font-semibold transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4 text-[#C6A664]" />
                  <span>Instant WhatsApp Booking</span>
                </a>
              </div>
            </div>

            {/* Booking Form Card / Reference ID Confirmation State */}
            <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#3C4A3B]/10 shadow-xs max-w-3xl">
              {!submittedRefId ? (
                <form onSubmit={handleBookingSubmit} className="space-y-6">
                  <div className="space-y-1">
                    <h3 className="font-serif text-2xl font-bold text-[#3C4A3B]">
                      Confidential Consultation Request
                    </h3>
                    <p className="text-xs text-[#3C4A3B]/70">
                      Prefer not to message on WhatsApp first? Submit your details here and our clinic coordinator will confirm your slot.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#3C4A3B] block">
                        Full Name <span className="text-[#C6A664]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Ayesha Khan"
                        className="w-full px-4 py-2.5 bg-[#FBF9F4] border border-[#3C4A3B]/15 rounded-xl text-xs sm:text-sm text-[#3C4A3B] focus:outline-none focus:ring-1 focus:ring-[#8FA88A] focus:border-[#8FA88A] transition-all"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#3C4A3B] block">
                        WhatsApp Number <span className="text-[#C6A664]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. 0303 9571111"
                        className="w-full px-4 py-2.5 bg-[#FBF9F4] border border-[#3C4A3B]/15 rounded-xl text-xs sm:text-sm text-[#3C4A3B] focus:outline-none focus:ring-1 focus:ring-[#8FA88A] focus:border-[#8FA88A] transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#3C4A3B] block">
                      Primary Skin Concern / Treatment
                    </label>
                    <select
                      value={formData.concern}
                      onChange={(e) => setFormData({ ...formData, concern: e.target.value })}
                      className="w-full px-4 py-2.5 bg-[#FBF9F4] border border-[#3C4A3B]/15 rounded-xl text-xs sm:text-sm text-[#3C4A3B] focus:outline-none focus:ring-1 focus:ring-[#8FA88A] focus:border-[#8FA88A] transition-all"
                    >
                      <option value="Clinical Hydrafacial Elite">Clinical Hydrafacial Elite (Flagship)</option>
                      <option value="Sensitized Barrier Restoration Therapy">Sensitized Barrier Restoration Therapy (Extreme Sensitivity)</option>
                      <option value="Targeted Inflammatory Acne Clearance">Targeted Inflammatory Acne Clearance</option>
                      <option value="Melasma & Post-Acne Mark Regulation">Melasma & Post-Acne Mark Regulation</option>
                      <option value="Micro-Infusion Collagen Preservation">Micro-Infusion Collagen Preservation</option>
                      <option value="General Physician Consultation">General Physician Consultation (Diagnostic Examination)</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#3C4A3B] block">
                        Preferred Day
                      </label>
                      <select
                        value={formData.preferredDay}
                        onChange={(e) => setFormData({ ...formData, preferredDay: e.target.value })}
                        className="w-full px-4 py-2.5 bg-[#FBF9F4] border border-[#3C4A3B]/15 rounded-xl text-xs sm:text-sm text-[#3C4A3B] focus:outline-none focus:ring-1 focus:ring-[#8FA88A] focus:border-[#8FA88A] transition-all"
                      >
                        <option value="Monday (from 2:00 PM)">Monday (Opens 2:00 PM)</option>
                        <option value="Next Upcoming Available Slot">Next Upcoming Available Slot</option>
                        <option value="Inquire for Weekday Evening">Inquire for Weekday Evening</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-[#3C4A3B] block">
                        Preferred Time Window
                      </label>
                      <select
                        value={formData.preferredTime}
                        onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                        className="w-full px-4 py-2.5 bg-[#FBF9F4] border border-[#3C4A3B]/15 rounded-xl text-xs sm:text-sm text-[#3C4A3B] focus:outline-none focus:ring-1 focus:ring-[#8FA88A] focus:border-[#8FA88A] transition-all"
                      >
                        <option value="Afternoon (2:00 PM – 4:00 PM)">Afternoon (2:00 PM – 4:00 PM)</option>
                        <option value="Late Afternoon (4:00 PM – 6:00 PM)">Late Afternoon (4:00 PM – 6:00 PM)</option>
                        <option value="Evening (6:00 PM – 8:00 PM)">Evening (6:00 PM – 8:00 PM)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="flex items-start gap-3 text-xs text-[#3C4A3B]/85 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.hasSensitiveSkin}
                        onChange={(e) => setFormData({ ...formData, hasSensitiveSkin: e.target.checked })}
                        className="mt-0.5 rounded text-[#8FA88A] focus:ring-[#8FA88A]"
                      />
                      <span>
                        My skin is highly reactive, easily sensitized, or burns with standard skincare products.
                      </span>
                    </label>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-[#3C4A3B] block">
                      Prior Treatments or Product Reactions (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      placeholder="Share past retinoids, chemical peels, salon bleaching, or allergies..."
                      className="w-full px-4 py-2.5 bg-[#FBF9F4] border border-[#3C4A3B]/15 rounded-xl text-xs sm:text-sm text-[#3C4A3B] focus:outline-none focus:ring-1 focus:ring-[#8FA88A] focus:border-[#8FA88A] transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-3.5 px-6 bg-[#3C4A3B] hover:bg-[#263125] text-white rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-xs"
                  >
                    {submitting ? 'Registering consultation...' : 'Submit Consultation Request'}
                  </button>
                </form>
              ) : (
                /* Thank You / Reference ID State */
                <div className="space-y-6 animate-in fade-in duration-300">
                  <div className="w-12 h-12 rounded-full bg-[#8FA88A]/20 flex items-center justify-center text-[#8FA88A]">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-widest text-[#8FA88A] font-semibold">
                      Consultation Request Logged
                    </span>
                    <h3 className="font-serif text-3xl font-bold text-[#3C4A3B]">
                      Your request has been received.
                    </h3>
                    <p className="text-sm text-[#3C4A3B]/80 leading-relaxed">
                      Thank you, <span className="font-semibold text-[#3C4A3B]">{formData.fullName}</span>. Our clinical coordinator will review your request and confirm your appointment slot on WhatsApp shortly.
                    </p>
                  </div>

                  <div className="p-6 bg-[#EEF3ED] rounded-2xl border border-[#3C4A3B]/10 space-y-3">
                    <span className="text-xs font-semibold text-[#3C4A3B]/60 uppercase tracking-wider block">
                      Your Clinic Booking Reference
                    </span>
                    <div className="flex items-center justify-between gap-4">
                      <span className="font-mono text-2xl sm:text-3xl font-bold text-[#3C4A3B] tracking-wider">
                        {submittedRefId}
                      </span>
                      <button
                        onClick={handleCopyRef}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-[#3C4A3B]/10 rounded-lg text-xs font-medium text-[#3C4A3B] hover:bg-[#FBF9F4] transition-colors"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-[#8FA88A]" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-[#8FA88A]" />
                            <span>Copy Ref ID</span>
                          </>
                        )}
                      </button>
                    </div>
                    <p className="text-xs text-[#3C4A3B]/70">
                      Please quote this reference ID if messaging our clinic directly.
                    </p>
                  </div>

                  <div className="pt-2">
                    <a
                      href={`https://wa.me/923039571111?text=${encodeURIComponent(
                        `Hi, I submitted a consultation request for ${formData.fullName} (Ref ID: ${submittedRefId}) regarding ${formData.concern}. Please confirm my appointment slot.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#3C4A3B] hover:bg-[#263125] text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors"
                    >
                      <MessageCircle className="w-4 h-4 text-[#C6A664]" />
                      <span>Speed Up Confirmation on WhatsApp</span>
                    </a>
                  </div>

                  <div className="pt-2 text-center">
                    <button
                      onClick={() => setSubmittedRefId(null)}
                      className="text-xs text-[#3C4A3B]/60 hover:text-[#3C4A3B] underline underline-offset-2"
                    >
                      Submit another consultation inquiry
                    </button>
                  </div>
                </div>
              )}
            </div>
          </section>

        </main>

        {/* Global Footer (Section 11) */}
        <Footer onNavigate={scrollToSection} />
      </div>

      {/* Floating Quick WhatsApp Affordance for Mobile */}
      <aside aria-label="Quick Actions" className="lg:hidden fixed bottom-5 right-5 z-30">
        <a
          href={CLINIC_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-3 bg-[#3C4A3B] text-white rounded-full shadow-lg border border-[#C6A664]/30 hover:bg-[#263125] transition-all text-xs font-semibold"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-4 h-4 text-[#C6A664]" />
          <span>WhatsApp</span>
        </a>
      </aside>
    </div>
  );
}
