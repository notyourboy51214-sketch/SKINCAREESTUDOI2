import React, { useState, useEffect } from 'react';
import { SectionId } from '../types';
import { CLINIC_INFO } from '../data/clinicData';
import {
  Home,
  Building2,
  Sparkles,
  UserCheck,
  Microscope,
  HeartHandshake,
  Workflow,
  HelpCircle,
  MapPin,
  CalendarCheck,
  MessageCircle,
  Menu,
  X,
  Star,
  Clock
} from 'lucide-react';

interface NavigationRailProps {
  activeSection: SectionId;
  onNavigate: (sectionId: SectionId) => void;
}

export const NavigationRail: React.FC<NavigationRailProps> = ({
  activeSection,
  onNavigate
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems: { id: SectionId; label: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'story', label: 'Story & Clinic', icon: Building2 },
    { id: 'services', label: 'Treatment Menu', icon: Sparkles },
    { id: 'approach', label: 'Physician Approach', icon: UserCheck },
    { id: 'science', label: 'The Science of Care', icon: Microscope },
    { id: 'reviews', label: 'Patient Stories', icon: HeartHandshake },
    { id: 'process', label: 'How It Works', icon: Workflow },
    { id: 'faqs', label: 'Clinic FAQs', icon: HelpCircle },
    { id: 'location', label: 'Location & Map', icon: MapPin },
    { id: 'booking', label: 'Book Consultation', icon: CalendarCheck },
  ];

  const handleNavClick = (id: SectionId, e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    onNavigate(id);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Mobile Top Header (Sticky Bar) */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-[#FBF9F4]/95 backdrop-blur-md border-b border-[#3C4A3B]/10 px-4 py-3 flex items-center justify-between">
        <button
          onClick={(e) => handleNavClick('home', e)}
          className="text-left group"
        >
          <span className="font-serif text-lg font-bold tracking-tight text-[#3C4A3B] block leading-none">
            Skin Care Axis
          </span>
          <span className="text-[11px] text-[#8FA88A] tracking-wider uppercase font-medium">
            Dermatology · Lahore
          </span>
        </button>

        <div className="flex items-center gap-2">
          <a
            href={CLINIC_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-[#8FA88A]/15 text-[#3C4A3B] hover:bg-[#8FA88A]/25 transition-colors"
            title="Chat on WhatsApp"
            aria-label="WhatsApp Contact"
          >
            <MessageCircle className="w-5 h-5 text-[#3C4A3B]" />
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg text-[#3C4A3B] hover:bg-[#3C4A3B]/5 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Slide-in Drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-[#FBF9F4] flex flex-col justify-between p-6 overflow-y-auto animate-in fade-in slide-in-from-left duration-200">
          <div>
            <div className="flex items-center justify-between pb-6 border-b border-[#3C4A3B]/10 mb-6">
              <div>
                <span className="font-serif text-xl font-bold text-[#3C4A3B] block">Skin Care Axis</span>
                <span className="text-xs text-[#8FA88A] tracking-wider uppercase">Dermatology Clinic · Lahore</span>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-[#3C4A3B] hover:bg-[#3C4A3B]/5 rounded-lg"
                aria-label="Close Navigation Menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Nav Links: Smooth scroll on click */}
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={(e) => handleNavClick(item.id, e)}
                    className={`flex items-center gap-3 px-3 py-3 rounded-lg text-left transition-colors text-sm font-medium ${
                      isActive
                        ? 'bg-[#8FA88A]/15 text-[#263125] font-semibold border-l-2 border-[#C6A664]'
                        : 'text-[#3C4A3B]/80 hover:bg-[#3C4A3B]/5 hover:text-[#3C4A3B]'
                    }`}
                  >
                    <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-[#8FA88A]' : 'text-[#3C4A3B]/50'}`} />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </nav>
          </div>

          {/* Mobile Bottom Trust Info */}
          <div className="pt-6 border-t border-[#3C4A3B]/10 space-y-4">
            <div className="flex items-center gap-2 text-xs text-[#3C4A3B]/70">
              <Clock className="w-4 h-4 text-[#C6A664] shrink-0" />
              <span>Closed now · Opens 2:00 PM Monday</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#3C4A3B]/70">
              <MapPin className="w-4 h-4 text-[#8FA88A] shrink-0" />
              <span>Plot 40, Nasheman Iqbal Phase 1, Lahore</span>
            </div>
            <a
              href={CLINIC_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#3C4A3B] hover:bg-[#263125] text-white rounded-lg text-xs font-semibold tracking-wide transition-colors"
            >
              <MessageCircle className="w-4 h-4 text-[#C6A664]" />
              <span>WhatsApp Consultation (+92 303 9571111)</span>
            </a>
          </div>
        </div>
      )}

      {/* Desktop Left-Hand Vertical Rail */}
      <aside className="hidden lg:flex fixed top-0 left-0 bottom-0 w-64 xl:w-72 bg-[#FBF9F4] border-r border-[#3C4A3B]/10 z-30 flex-col justify-between p-6 overflow-y-auto">
        <div>
          {/* Brand Wordmark (Single text element in Fraunces serif) */}
          <div className="pb-5 mb-3 border-b border-[#3C4A3B]/10">
            <a
              href="#home"
              onClick={(e) => handleNavClick('home', e)}
              className="text-left w-full group block"
            >
              <h1 className="font-serif text-2xl font-bold tracking-tight text-[#3C4A3B] group-hover:text-[#263125] transition-colors">
                Skin Care Axis
              </h1>
              <div className="flex items-center gap-2 text-xs text-[#3C4A3B]/70 mt-1">
                <span>Dermatology Clinic</span>
                <span aria-hidden="true" className="text-[#C6A664]">·</span>
                <span>Lahore</span>
              </div>
            </a>

            {/* Quiet verified trust marker */}
            <div className="mt-3 flex items-center gap-1.5 text-xs text-[#3C4A3B]/80 font-medium">
              <div className="flex items-center text-[#C6A664]">
                <Star className="w-3.5 h-3.5 fill-[#C6A664]" />
                <span className="ml-1 font-semibold text-[#3C4A3B] tabular-nums">4.9</span>
              </div>
              <span aria-hidden="true" className="text-[#3C4A3B]/40">·</span>
              <span className="text-[#3C4A3B]/70">57 Verified Patients</span>
            </div>
          </div>

          {/* Continuous Anchor Navigation Links */}
          <nav className="flex flex-col gap-0.5" aria-label="Main Navigation">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(item.id, e)}
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-all text-xs font-medium ${
                    isActive
                      ? 'bg-[#EEF3ED] text-[#263125] font-semibold border-l-2 border-[#C6A664] shadow-xs'
                      : 'text-[#3C4A3B]/75 hover:bg-[#3C4A3B]/5 hover:text-[#3C4A3B]'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 shrink-0 transition-colors ${
                    isActive ? 'text-[#8FA88A]' : 'text-[#3C4A3B]/50'
                  }`} />
                  <span className="truncate">{item.label}</span>
                </a>
              );
            })}
          </nav>
        </div>

        {/* Desktop Rail Footer & Clinic Meta */}
        <div className="pt-4 border-t border-[#3C4A3B]/10 space-y-3">
          {/* Operating Status */}
          <div className="p-2.5 bg-[#EEF3ED] rounded-lg border border-[#3C4A3B]/5 text-xs text-[#3C4A3B]">
            <div className="flex items-center gap-1.5 text-[#3C4A3B] font-medium mb-1">
              <span className="w-2 h-2 rounded-full bg-[#C6A664] animate-pulse" />
              <span>Closed Now</span>
            </div>
            <p className="text-[11px] text-[#3C4A3B]/70 leading-relaxed">
              Opens 2:00 PM Monday · Plot 40, Nasheman Iqbal Phase 1
            </p>
          </div>

          {/* Primary WhatsApp CTA */}
          <a
            href={CLINIC_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-2.5 px-3 bg-[#3C4A3B] hover:bg-[#263125] text-white rounded-lg text-xs font-semibold transition-all group shadow-sm hover:shadow"
          >
            <MessageCircle className="w-4 h-4 text-[#C6A664] group-hover:scale-110 transition-transform" />
            <span className="truncate">WhatsApp Consultation</span>
          </a>

          <div className="text-center">
            <a
              href={`tel:${CLINIC_INFO.phone}`}
              className="text-[11px] text-[#3C4A3B]/80 hover:text-[#3C4A3B] font-mono tracking-tight tabular-nums hover:underline decoration-[#8FA88A] underline-offset-2 transition-colors"
              title="Call Skin Care Axis"
            >
              📞 {CLINIC_INFO.phoneFormatted}
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};
