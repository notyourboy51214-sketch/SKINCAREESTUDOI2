import React, { useState } from 'react';
import { FAQ_ITEMS, CLINIC_INFO } from '../data/clinicData';
import {
  HelpCircle,
  ChevronDown,
  Search,
  MessageCircle,
  Sparkles,
  ShieldCheck
} from 'lucide-react';

interface FaqPageProps {
  onNavigateToBooking: () => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onNavigateToBooking }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openIds, setOpenIds] = useState<string[]>(['faq-1', 'faq-2']);

  const toggleAccordion = (id: string) => {
    if (openIds.includes(id)) {
      setOpenIds(openIds.filter(item => item !== id));
    } else {
      setOpenIds([...openIds, id]);
    }
  };

  const filteredFaqs = FAQ_ITEMS.filter(faq => {
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-14 pt-6">
      {/* 1. HEADER */}
      <section className="space-y-4 max-w-3xl">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#8FA88A]">
          <HelpCircle className="w-4 h-4 text-[#8FA88A]" />
          <span>Patient Questions & Clinical Answers</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#3C4A3B] leading-tight text-balance">
          Clear, honest answers before your visit to Skin Care Axis.
        </h1>
        <p className="text-base sm:text-lg text-[#3C4A3B]/80 leading-relaxed">
          We believe informed patients experience the best outcomes. Here are detailed answers regarding our treatments, sensitivity protocols, and consultation standards.
        </p>
      </section>

      {/* 2. SEARCH & CATEGORY SELECTOR */}
      <div className="space-y-4">
        <div className="relative max-w-md">
          <Search className="w-4 h-4 text-[#3C4A3B]/50 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
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
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
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

      {/* 3. ACCORDION LIST */}
      <div className="space-y-3">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq) => {
            const isOpen = openIds.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="bg-white rounded-2xl border border-[#3C4A3B]/10 overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => toggleAccordion(faq.id)}
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
          })
        ) : (
          <div className="p-8 text-center bg-white rounded-2xl border border-[#3C4A3B]/10 space-y-2">
            <p className="font-serif text-lg text-[#3C4A3B]">No questions matched your query.</p>
            <p className="text-xs text-[#3C4A3B]/60">
              Please try a different term or message our clinic on WhatsApp directly.
            </p>
          </div>
        )}
      </div>

      {/* 4. DIRECT WHATSAPP QUESTION CALLOUT */}
      <section className="p-8 sm:p-10 bg-[#EEF3ED] rounded-3xl border border-[#3C4A3B]/10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-1">
          <h3 className="font-serif text-2xl font-bold text-[#3C4A3B]">
            Have a specific skin question not covered here?
          </h3>
          <p className="text-xs sm:text-sm text-[#3C4A3B]/80">
            Our clinic coordinator is available on WhatsApp to assist with consultation inquiries.
          </p>
        </div>
        <a
          href={CLINIC_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#3C4A3B] hover:bg-[#263125] text-white rounded-lg text-xs font-semibold transition-colors whitespace-nowrap"
        >
          <MessageCircle className="w-4 h-4 text-[#C6A664]" />
          <span>Message on WhatsApp (+92 303 9571111)</span>
        </a>
      </section>
    </div>
  );
};
