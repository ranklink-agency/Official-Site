import Link from 'next/link';
import Image from 'next/image';
import { TEAM_MEMBERS } from '@/lib/constants';
import PageHeader from '@/components/ui/PageHeader';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Team | Rank Link Agency',
  description: 'Meet the dedicated team behind Rank Link Agency.',
};

const MEMBER_CONFIG: Record<string, {
  avatarUrl: string;
  ringColor: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  roleColor: string;
  stripColor: string;
}> = {
  'Hafiz Mueen': {
    avatarUrl: '/ceo-hafiz-mueen.jpeg',
    ringColor: 'ring-[#00BCD4]',
    badgeBg: 'bg-cyan-50',
    badgeText: 'text-[#0097A7]',
    badgeBorder: 'border-cyan-200',
    roleColor: 'text-[#0097A7]',
    stripColor: 'from-[#00BCD4] via-[#4FC3F7] to-[#FFC107]',
  },
  'Haroon Ismail': {
    avatarUrl: 'https://api.dicebear.com/9.x/notionists/svg?seed=HaroonIsmail&backgroundColor=fef3c7&scale=90',
    ringColor: 'ring-amber-400',
    badgeBg: 'bg-amber-50',
    badgeText: 'text-amber-700',
    badgeBorder: 'border-amber-200',
    roleColor: 'text-amber-600',
    stripColor: 'bg-amber-400',
  },
  'Muhammad Ahmed': {
    avatarUrl: 'https://api.dicebear.com/9.x/notionists/svg?seed=MuhammadAhmed&backgroundColor=ede9fe&scale=90',
    ringColor: 'ring-violet-400',
    badgeBg: 'bg-violet-50',
    badgeText: 'text-violet-700',
    badgeBorder: 'border-violet-200',
    roleColor: 'text-violet-600',
    stripColor: 'bg-violet-400',
  },
};

function Avatar({ url, ring, size = 'md' }: { url: string; ring: string; size?: 'lg' | 'md' }) {
  const dim = size === 'lg' ? 'w-52 h-52 lg:w-64 lg:h-64' : 'w-32 h-32';
  return (
    <div className={`${dim} rounded-full ring-4 ${ring} flex-shrink-0 overflow-hidden shadow-md`}>
      <Image
        src={url}
        alt=""
        width={256}
        height={256}
        className="w-full h-full object-cover"
        unoptimized
      />
    </div>
  );
}

export default function OurTeamPage() {
  const [founder, ...rest] = TEAM_MEMBERS;

  return (
    <div className="bg-[#F8FAFC] min-h-screen pb-44">
      <PageHeader title="Our Team" subtitle="The people who make Rank Link Agency work" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        {/* ── Founder featured card ─────────────────────────────────── */}
        {founder && (() => {
          const cfg = MEMBER_CONFIG[founder.name];
          return (
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-14">
              <div className={`h-1.5 w-full bg-gradient-to-r ${cfg.stripColor}`} />
              <div className="p-10 md:p-16 flex flex-col lg:flex-row items-center gap-12">
                <Avatar url={cfg.avatarUrl} ring={cfg.ringColor} size="lg" />
                <div className="text-center lg:text-left">
                  <span className={`inline-block text-[11px] font-extrabold uppercase tracking-[0.18em] px-4 py-1.5 rounded-full border mb-5 ${cfg.badgeBg} ${cfg.badgeText} ${cfg.badgeBorder}`}>
                    Leadership
                  </span>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-2 leading-tight">
                    {founder.name}
                  </h2>
                  <p className={`text-sm font-bold uppercase tracking-[0.15em] mb-7 ${cfg.roleColor}`}>
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

        {/* ── Team members grid ─────────────────────────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {rest.map((member) => {
            const cfg = MEMBER_CONFIG[member.name];
            return (
              <div
                key={member.name}
                className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`h-1 w-full ${cfg.stripColor}`} />
                <div className="p-8 flex flex-col sm:flex-row items-center sm:items-start gap-7">
                  <Avatar url={cfg.avatarUrl} ring={cfg.ringColor} size="md" />
                  <div className="text-center sm:text-left">
                    <span className={`inline-block text-[10px] font-extrabold uppercase tracking-[0.2em] px-3 py-1 rounded-full border mb-3 ${cfg.badgeBg} ${cfg.badgeText} ${cfg.badgeBorder}`}>
                      Team Member
                    </span>
                    <h3 className="text-2xl font-extrabold text-slate-900 mb-1">{member.name}</h3>
                    <p className={`text-xs font-bold uppercase tracking-wider mb-4 ${cfg.roleColor}`}>
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
