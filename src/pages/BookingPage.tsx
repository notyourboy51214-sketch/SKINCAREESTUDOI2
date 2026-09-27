import React, { useState } from 'react';
import { CLINIC_INFO, TREATMENTS } from '../data/clinicData';
import { BookingFormData } from '../types';
import {
  CalendarCheck,
  Clock,
  MapPin,
  MessageCircle,
  ShieldCheck,
  CheckCircle2,
  Copy,
  Check,
  Phone,
  AlertCircle,
  ExternalLink
} from 'lucide-react';

export const BookingPage: React.FC = () => {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) return;

    setSubmitting(true);
    // Generate clean reference ID e.g. SCA-4821
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const newRefId = `SCA-${randomSuffix}`;

    setTimeout(() => {
      setSubmittedRefId(newRefId);
      setSubmitting(false);
      window.scrollTo({ top: 100, behavior: 'smooth' });
    }, 400);
  };

  const handleCopyRef = () => {
    if (!submittedRefId) return;
    navigator.clipboard.writeText(submittedRefId);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const whatsappWithRefUrl = submittedRefId
    ? `https://wa.me/923039571111?text=${encodeURIComponent(
        `Hi, I submitted a consultation request for ${formData.fullName} (Ref ID: ${submittedRefId}) regarding ${formData.concern}. Please confirm my appointment slot.`
      )}`
    : CLINIC_INFO.whatsappUrl;

  return (
    <div className="space-y-16 pt-6">
      {/* 1. HEADER */}
      <section className="space-y-4 max-w-3xl">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8FA88A]">
          <CalendarCheck className="w-4 h-4 text-[#8FA88A]" />
          <span>Patient Appointment Coordination</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#3C4A3B] leading-tight text-balance">
          Book your private consultation at Skin Care Axis.
        </h1>
        <p className="text-base sm:text-lg text-[#3C4A3B]/80 leading-relaxed">
          In Pakistan, WhatsApp is our quickest and most responsive booking channel. You can message us directly, or complete our confidential intake form below to receive a reference ID.
        </p>
      </section>

      {/* 2. OPERATIONAL STATUS CALLOUT */}
      <section className="p-6 sm:p-8 bg-[#EEF3ED] rounded-2xl border border-[#3C4A3B]/10 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
        <div className="md:col-span-8 space-y-2">
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
            className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#3C4A3B] hover:bg-[#263125] text-white rounded-lg text-xs font-semibold transition-colors shadow-sm"
          >
            <MessageCircle className="w-4 h-4 text-[#C6A664]" />
            <span>Instant WhatsApp Booking</span>
          </a>
        </div>
      </section>

      {/* 3. BOOKING SECTION: FORM & CONFIRMATION / LOCATION PIN */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Form or Thank You State */}
        <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#3C4A3B]/10 shadow-sm">
          {!submittedRefId ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <h2 className="font-serif text-2xl font-bold text-[#3C4A3B]">
                  Consultation Request Form
                </h2>
                <p className="text-xs text-[#3C4A3B]/70">
                  Prefer not to message on WhatsApp first? Submit this form and our clinic team will contact you.
                </p>
              </div>

              {/* Full Name */}
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

              {/* Phone / WhatsApp */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#3C4A3B] block">
                  WhatsApp Phone Number <span className="text-[#C6A664]">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. +92 300 1234567 or 0300 1234567"
                  className="w-full px-4 py-2.5 bg-[#FBF9F4] border border-[#3C4A3B]/15 rounded-xl text-xs sm:text-sm text-[#3C4A3B] focus:outline-none focus:ring-1 focus:ring-[#8FA88A] focus:border-[#8FA88A] transition-all"
                />
              </div>

              {/* Concern or Desired Treatment */}
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
                  <option value="General Physician Consultation">General Physician Consultation (To be diagnosed)</option>
                </select>
              </div>

              {/* Preferred Slot */}
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

              {/* Sensitivity Checkbox */}
              <div className="pt-2">
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

              {/* Notes */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-[#3C4A3B] block">
                  Prior Treatments or Product Reactions (Optional)
                </label>
                <textarea
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Share any past medications, retinoids, or salon treatments that reacted poorly..."
                  className="w-full px-4 py-2.5 bg-[#FBF9F4] border border-[#3C4A3B]/15 rounded-xl text-xs sm:text-sm text-[#3C4A3B] focus:outline-none focus:ring-1 focus:ring-[#8FA88A] focus:border-[#8FA88A] transition-all"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3.5 px-6 bg-[#3C4A3B] hover:bg-[#263125] text-white rounded-xl text-xs sm:text-sm font-semibold tracking-wide transition-all shadow-sm"
              >
                {submitting ? 'Registering consultation...' : 'Submit Consultation Request'}
              </button>
            </form>
          ) : (
            /* THANK-YOU / CONFIRMATION STATE WITH AUTO-GENERATED REFERENCE ID */
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="w-12 h-12 rounded-full bg-[#8FA88A]/20 flex items-center justify-center text-[#8FA88A]">
                <CheckCircle2 className="w-7 h-7" />
              </div>

              <div className="space-y-2">
                <span className="text-xs uppercase tracking-widest text-[#8FA88A] font-semibold">
                  Consultation Request Logged
                </span>
                <h2 className="font-serif text-3xl font-bold text-[#3C4A3B]">
                  Your request has been received.
                </h2>
                <p className="text-sm text-[#3C4A3B]/80 leading-relaxed">
                  Thank you, <span className="font-semibold text-[#3C4A3B]">{formData.fullName}</span>. Our clinical coordinator will review your request and confirm your appointment slot on WhatsApp shortly.
                </p>
              </div>

              {/* REFERENCE ID CARD */}
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

              {/* FAST-TRACK WHATSAPP SYNC BUTTON */}
              <div className="pt-2">
                <a
                  href={whatsappWithRefUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#3C4A3B] hover:bg-[#263125] text-white rounded-xl text-xs sm:text-sm font-semibold transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-[#C6A664]" />
                  <span>Speed Up Confirmation on WhatsApp Now</span>
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

        {/* Right Column: Location, Embedded Map Pin & Guidelines */}
        <div className="lg:col-span-5 space-y-6">
          {/* Clinic Address & Coordinates */}
          <div className="p-6 bg-white rounded-3xl border border-[#3C4A3B]/10 shadow-sm space-y-4">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8FA88A]">
              <MapPin className="w-4 h-4 text-[#8FA88A]" />
              <span>Clinic Location</span>
            </div>

            <h3 className="font-serif text-xl font-bold text-[#3C4A3B]">
              Plot 40, Nasheman Iqbal Phase 1, Lahore
            </h3>

            <p className="text-xs text-[#3C4A3B]/80 leading-relaxed">
              Centrally situated in Nasheman-e-Iqbal Phase 1 with dedicated patient parking in front of the clinic. Close to major Lahore arterial connections.
            </p>

            {/* Interactive Embedded Google Map for Skin Care Axis */}
            <div className="relative rounded-2xl overflow-hidden border border-[#3C4A3B]/10 aspect-[16/10] bg-[#EEF3ED] shadow-sm">
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

              <div className="absolute bottom-2 left-2 right-2 bg-white/95 backdrop-blur-xs p-2.5 rounded-lg border border-[#3C4A3B]/10 flex items-center justify-between gap-2 shadow-xs">
                <span className="font-serif text-xs font-bold text-[#3C4A3B] truncate">
                  Skin Care Axis · Lahore
                </span>
                <a
                  href={CLINIC_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 inline-flex items-center gap-1 px-2.5 py-1 bg-[#3C4A3B] text-white rounded text-[11px] font-semibold"
                >
                  <span>Google Profile</span>
                  <ExternalLink className="w-3 h-3 text-[#C6A664]" />
                </a>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs text-[#3C4A3B]/70 border-t border-[#3C4A3B]/10">
              <span>Direct Phone:</span>
              <span className="font-mono font-medium text-[#3C4A3B]">{CLINIC_INFO.phoneFormatted}</span>
            </div>
          </div>

          {/* Pre-Visit Guidance */}
          <div className="p-6 bg-[#EEF3ED] rounded-3xl border border-[#3C4A3B]/5 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#3C4A3B]/70 block">
              Pre-Visit Etiquette:
            </span>
            <ul className="space-y-2 text-xs text-[#3C4A3B]/80 leading-relaxed">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8FA88A] mt-1.5 shrink-0" />
                <span>Please avoid chemical peels or salon waxing for 4 days prior.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8FA88A] mt-1.5 shrink-0" />
                <span>Bring photographs or empty packages of cleansers and creams you currently apply.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#8FA88A] mt-1.5 shrink-0" />
                <span>Arrive 5 minutes before your reserved time slot to ensure an unhurried consultation.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
