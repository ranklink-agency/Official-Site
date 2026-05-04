import Link from 'next/link';
import { TEAM_MEMBERS } from '@/lib/constants';
import PageHeader from '@/components/ui/PageHeader';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Team | Rank Link Agency',
  description: 'Meet the dedicated team behind Rank Link Agency.',
};

/* ── Unique inline SVG illustrations per role ─────────────────────────── */
function FounderIllustration() {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Background circle */}
      <circle cx="100" cy="100" r="100" fill="#E0F7FA" />
      {/* Glow accent */}
      <circle cx="100" cy="100" r="80" fill="#B2EBF2" opacity="0.5" />
      {/* Body */}
      <ellipse cx="100" cy="155" rx="42" ry="28" fill="#00BCD4" opacity="0.15" />
      <rect x="72" y="115" width="56" height="50" rx="16" fill="#00BCD4" />
      {/* Head */}
      <circle cx="100" cy="90" r="28" fill="#FFC107" />
      {/* Face */}
      <circle cx="92" cy="87" r="4" fill="#2D2B4A" />
      <circle cx="108" cy="87" r="4" fill="#2D2B4A" />
      <path d="M93 99 Q100 105 107 99" stroke="#2D2B4A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Chart bars — SEO / strategist element */}
      <rect x="28" y="130" width="14" height="30" rx="4" fill="#FFC107" opacity="0.85" />
      <rect x="46" y="112" width="14" height="48" rx="4" fill="#00BCD4" opacity="0.85" />
      <rect x="140" y="118" width="14" height="42" rx="4" fill="#FFC107" opacity="0.85" />
      <rect x="158" y="100" width="14" height="60" rx="4" fill="#00BCD4" opacity="0.85" />
      {/* Upward arrow */}
      <polyline points="28,125 55,95 80,108 125,70 162,85" stroke="#2D2B4A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <polygon points="162,80 175,88 158,92" fill="#2D2B4A" />
    </svg>
  );
}

function WriterIllustration() {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="100" cy="100" r="100" fill="#FFF8E1" />
      <circle cx="100" cy="100" r="80" fill="#FFF3CD" opacity="0.5" />
      {/* Body */}
      <rect x="72" y="115" width="56" height="50" rx="16" fill="#FFC107" />
      <ellipse cx="100" cy="160" rx="42" ry="24" fill="#FFC107" opacity="0.15" />
      {/* Head */}
      <circle cx="100" cy="90" r="28" fill="#00BCD4" />
      {/* Face */}
      <circle cx="92" cy="87" r="4" fill="#fff" />
      <circle cx="108" cy="87" r="4" fill="#fff" />
      <path d="M93 99 Q100 105 107 99" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Document */}
      <rect x="120" y="95" width="52" height="64" rx="6" fill="white" stroke="#e2e8f0" strokeWidth="1.5" />
      <line x1="130" y1="113" x2="162" y2="113" stroke="#00BCD4" strokeWidth="2" strokeLinecap="round" />
      <line x1="130" y1="123" x2="162" y2="123" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
      <line x1="130" y1="133" x2="155" y2="133" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
      <line x1="130" y1="143" x2="160" y2="143" stroke="#cbd5e1" strokeWidth="2" strokeLinecap="round" />
      {/* Pen */}
      <rect x="28" y="118" width="10" height="48" rx="5" fill="#FFC107" transform="rotate(-30 28 118)" />
      <polygon points="20,158 14,172 28,165" fill="#2D2B4A" transform="rotate(-30 20 158)" />
      {/* Graphic design star */}
      <polygon points="158,45 162,55 172,55 164,62 167,73 158,66 149,73 152,62 144,55 154,55" fill="#FFC107" opacity="0.85" />
    </svg>
  );
}

function MarketingIllustration() {
  return (
    <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="100" cy="100" r="100" fill="#EDE7F6" />
      <circle cx="100" cy="100" r="80" fill="#D1C4E9" opacity="0.4" />
      {/* Body */}
      <rect x="72" y="115" width="56" height="50" rx="16" fill="#7C3AED" opacity="0.75" />
      <ellipse cx="100" cy="160" rx="42" ry="24" fill="#7C3AED" opacity="0.1" />
      {/* Head */}
      <circle cx="100" cy="90" r="28" fill="#00BCD4" />
      {/* Face */}
      <circle cx="92" cy="87" r="4" fill="#2D2B4A" />
      <circle cx="108" cy="87" r="4" fill="#2D2B4A" />
      <path d="M93 99 Q100 105 107 99" stroke="#2D2B4A" strokeWidth="2.5" strokeLinecap="round" fill="none" />
      {/* Network nodes */}
      <circle cx="38" cy="80" r="10" fill="#FFC107" />
      <circle cx="38" cy="130" r="10" fill="#FFC107" />
      <circle cx="162" cy="80" r="10" fill="#00BCD4" />
      <circle cx="162" cy="130" r="10" fill="#00BCD4" />
      <line x1="48" y1="80" x2="72" y2="90" stroke="#FFC107" strokeWidth="2" strokeLinecap="round" />
      <line x1="48" y1="130" x2="72" y2="120" stroke="#FFC107" strokeWidth="2" strokeLinecap="round" />
      <line x1="128" y1="90" x2="152" y2="80" stroke="#00BCD4" strokeWidth="2" strokeLinecap="round" />
      <line x1="128" y1="120" x2="152" y2="130" stroke="#00BCD4" strokeWidth="2" strokeLinecap="round" />
      {/* Megaphone */}
      <polygon points="145,50 175,38 175,65 145,60" fill="#FFC107" />
      <rect x="132" y="52" width="14" height="18" rx="3" fill="#2D2B4A" />
      <path d="M176,45 Q185,51 176,58" stroke="#FFC107" strokeWidth="3" strokeLinecap="round" fill="none" />
    </svg>
  );
}

const ILLUSTRATIONS = [FounderIllustration, WriterIllustration, MarketingIllustration];

const ROLE_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  'Founder & SEO Strategist':              { bg: 'bg-cyan-50',   text: 'text-[#00BCD4]', border: 'border-cyan-100' },
  'Content Writer & SEO Analyst':           { bg: 'bg-yellow-50', text: 'text-[#FFC107]', border: 'border-yellow-100' },
  'Marketing & Vendor Relations Executive': { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-100' },
};

export default function OurTeamPage() {
  const [founder, ...rest] = TEAM_MEMBERS;
  const FounderSVG = ILLUSTRATIONS[0];

  return (
    <div className="bg-[#FAFEFA] min-h-screen pb-44">
      <PageHeader title="Our Team" subtitle="The people who make Rank Link Agency work" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* ── Founder featured card ─────────────────────────────────── */}
        {founder && (() => {
          const colors = ROLE_COLORS[founder.role] ?? { bg: 'bg-cyan-50', text: 'text-[#00BCD4]', border: 'border-cyan-100' };
          return (
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-16 relative">
              {/* top accent */}
              <div className="h-1.5 w-full bg-gradient-to-r from-[#00BCD4] via-[#4FC3F7] to-[#FFC107]" />
              <div className="p-8 md:p-14 flex flex-col lg:flex-row items-center gap-12">
                {/* Illustration */}
                <div className="w-48 h-48 lg:w-64 lg:h-64 flex-shrink-0">
                  <FounderSVG />
                </div>
                {/* Content */}
                <div className="text-center lg:text-left">
                  <span className={`inline-block text-xs font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full border mb-5 ${colors.bg} ${colors.text} ${colors.border}`}>
                    Leadership
                  </span>
                  <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-2">
                    {founder.name}
                  </h2>
                  <p className={`font-bold text-base uppercase tracking-widest mb-8 ${colors.text}`}>
                    {founder.role}
                  </p>
                  <p className="text-gray-600 leading-relaxed text-lg max-w-2xl">
                    {founder.message}
                  </p>
                </div>
              </div>
            </div>
          );
        })()}

        {/* ── Rest of team grid ─────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {rest.map((member, i) => {
            const SVGComp = ILLUSTRATIONS[i + 1];
            const colors = ROLE_COLORS[member.role] ?? { bg: 'bg-slate-50', text: 'text-slate-500', border: 'border-slate-100' };
            return (
              <div
                key={member.name}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                {/* Coloured top strip */}
                <div className={`h-1 w-full ${i === 0 ? 'bg-[#FFC107]' : 'bg-purple-400'}`} />
                <div className="p-8 flex flex-col sm:flex-row items-center sm:items-start gap-8 flex-grow">
                  {/* Illustration */}
                  <div className="w-28 h-28 flex-shrink-0">
                    {SVGComp && <SVGComp />}
                  </div>
                  {/* Content */}
                  <div className="text-center sm:text-left">
                    <span className={`inline-block text-[10px] font-extrabold uppercase tracking-[0.2em] px-3 py-1 rounded-full border mb-3 ${colors.bg} ${colors.text} ${colors.border}`}>
                      Team Member
                    </span>
                    <h3 className="text-2xl font-extrabold text-slate-900 mb-1">{member.name}</h3>
                    <p className={`text-sm font-bold uppercase tracking-wider mb-4 ${colors.text}`}>
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">{member.message}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Join CTA ──────────────────────────────────────────────── */}
        <div className="bg-[#2D2B4A] rounded-3xl p-12 md:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#00BCD4] rounded-full mix-blend-overlay filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FFC107] rounded-full mix-blend-overlay filter blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Want to join our dynamic team?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
              We are always looking for talented individuals who are passionate about SEO and digital
              marketing. Reach out and let&apos;s talk.
            </p>
            <Link
              href="/contact-us"
              className="inline-block bg-[#FFC107] hover:bg-yellow-500 text-white font-bold py-4 px-12 rounded-full shadow-lg uppercase transition-transform transform hover:scale-105 tracking-wider"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
