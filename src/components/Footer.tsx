import React from 'react';
import { SectionId } from '../types';
import { CLINIC_INFO } from '../data/clinicData';
import { MapPin, Phone, MessageCircle, Clock, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: SectionId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (id: SectionId, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(id);
  };

  return (
    <footer className="mt-28 border-t border-[#3C4A3B]/10 bg-[#F5F2EA] text-[#3C4A3B] transition-colors">
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand & Ethos */}
          <div className="md:col-span-4 space-y-4">
            <h2 className="font-serif text-2xl font-bold tracking-tight text-[#3C4A3B]">
              Skin Care Axis
            </h2>
            <p className="text-sm text-[#3C4A3B]/80 leading-relaxed">
              A patient-centered dermatology clinic in Lahore dedicated to thoughtful listening, meticulous clinical hygiene, and gentle restoration for complex, reactive, and acne-prone skin.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#3C4A3B]/70 pt-2">
              <ShieldCheck className="w-4 h-4 text-[#8FA88A]" />
              <span>4.9★ Rated · 57 Verified Patient Outcomes</span>
            </div>
          </div>

          {/* Quick Navigation to Continuous Sections */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#3C4A3B]/60">
              Page Journey
            </h3>
            <ul className="space-y-2 text-sm text-[#3C4A3B]/85">
              <li>
                <a href="#home" onClick={(e) => handleNav('home', e)} className="hover:text-[#263125] hover:underline underline-offset-4 transition-all">
                  Back to Top
                </a>
              </li>
              <li>
                <a href="#story" onClick={(e) => handleNav('story', e)} className="hover:text-[#263125] hover:underline underline-offset-4 transition-all">
                  The Clinic & Space
                </a>
              </li>
              <li>
                <a href="#services" onClick={(e) => handleNav('services', e)} className="hover:text-[#263125] hover:underline underline-offset-4 transition-all">
                  Treatment Menu & Hydrafacial
                </a>
              </li>
              <li>
                <a href="#approach" onClick={(e) => handleNav('approach', e)} className="hover:text-[#263125] hover:underline underline-offset-4 transition-all">
                  Physician Approach & Values
                </a>
              </li>
              <li>
                <a href="#science" onClick={(e) => handleNav('science', e)} className="hover:text-[#263125] hover:underline underline-offset-4 transition-all">
                  The Science Behind Care
                </a>
              </li>
              <li>
                <a href="#reviews" onClick={(e) => handleNav('reviews', e)} className="hover:text-[#263125] hover:underline underline-offset-4 transition-all">
                  Patient Stories & Turnarounds
                </a>
              </li>
              <li>
                <a href="#process" onClick={(e) => handleNav('process', e)} className="hover:text-[#263125] hover:underline underline-offset-4 transition-all">
                  How a First Visit Works
                </a>
              </li>
              <li>
                <a href="#faqs" onClick={(e) => handleNav('faqs', e)} className="hover:text-[#263125] hover:underline underline-offset-4 transition-all">
                  Frequently Asked Questions
                </a>
              </li>
              <li>
                <a href="#location" onClick={(e) => handleNav('location', e)} className="hover:text-[#263125] hover:underline underline-offset-4 transition-all">
                  Location & Map
                </a>
              </li>
              <li>
                <a href="#booking" onClick={(e) => handleNav('booking', e)} className="hover:text-[#263125] hover:underline underline-offset-4 transition-all">
                  Book Consultation Slot
                </a>
              </li>
            </ul>
          </div>

          {/* Location & Consultation Hours */}
          <div className="md:col-span-5 space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#3C4A3B]/60">
              Visit & Contact
            </h3>
            <div className="space-y-2.5 text-sm text-[#3C4A3B]/85">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#8FA88A] mt-1 shrink-0" />
                <span>{CLINIC_INFO.address}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#C6A664] mt-1 shrink-0" />
                <div>
                  <span className="font-medium text-[#3C4A3B]">Currently Closed · Opens 2:00 PM Monday</span>
                  <p className="text-xs text-[#3C4A3B]/60 mt-0.5">
                    Pre-booked appointments prioritize unhurried consultations. Additional weekday hours to be announced.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2.5 pt-1">
                <Phone className="w-4 h-4 text-[#8FA88A] shrink-0" />
                <a
                  href={`tel:${CLINIC_INFO.phone}`}
                  className="font-mono text-xs hover:text-[#263125] hover:underline decoration-[#8FA88A] underline-offset-4 font-semibold"
                  title="Direct phone call to Skin Care Axis"
                >
                  {CLINIC_INFO.phoneFormatted}
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={CLINIC_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 py-2.5 px-4 bg-[#3C4A3B] hover:bg-[#263125] text-white rounded-lg text-xs font-semibold transition-all group"
              >
                <MessageCircle className="w-4 h-4 text-[#C6A664] group-hover:scale-110 transition-transform" />
                <span>Book Slot via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Hairline & Legal / Privacy */}
        <div className="mt-12 pt-6 border-t border-[#3C4A3B]/10 flex flex-col sm:flex-row items-center justify-between text-xs text-[#3C4A3B]/60 gap-4">
          <p>© {new Date().getFullYear()} Skin Care Axis · Nasheman-e-Iqbal Phase 1, Lahore. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <span>Dermatological Care & Barrier Health</span>
            <span aria-hidden="true" className="text-[#3C4A3B]/20">·</span>
            <span className="flex items-center gap-1">
              Practicing with attentive empathy <Heart className="w-3 h-3 text-[#8FA88A] inline fill-[#8FA88A]" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
