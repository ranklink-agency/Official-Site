import Image from 'next/image';
import Link from 'next/link';
import { Quote } from 'lucide-react';
import { TEAM_MEMBERS } from '@/lib/constants';
import PageHeader from '@/components/ui/PageHeader';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Team | Rank Link Agency',
  description: 'Meet the dedicated team behind Rank Link Agency.',
};

export default function OurTeamPage() {
  const ceo = TEAM_MEMBERS.find((m) => m.isCeo);

  return (
    <div className="bg-[#FAFEFA] min-h-screen pb-44">
      <PageHeader title="Our Team" subtitle="Meet the minds behind Rank Link Agency" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {ceo && (
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-16 mb-24 border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#00BCD4] opacity-5 rounded-bl-[100px]"></div>
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="w-full lg:w-1/3 flex justify-center lg:justify-start">
                <div className="relative group">
                  <div className="absolute inset-0 bg-[#FFC107] rounded-full blur-2xl opacity-20 transform translate-x-4 translate-y-4 group-hover:opacity-30 transition-opacity"></div>
                  <Image
                    src={ceo.image}
                    alt={ceo.name}
                    width={320}
                    height={320}
                    className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-full border-[10px] border-white shadow-xl relative z-10"
                  />
                  <div className="absolute bottom-6 right-6 bg-white p-4 rounded-full shadow-lg z-20 border border-gray-100 text-[#00BCD4]">
                    <Quote className="w-6 h-6 fill-current" />
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-2/3 text-center lg:text-left">
                <span className="inline-block py-1.5 px-4 rounded-full bg-cyan-50 text-[#00BCD4] text-xs font-bold uppercase tracking-wider mb-6">
                  Leadership
                </span>
                <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-2">{ceo.name}</h2>
                <p className="text-gray-400 font-bold text-lg mb-8 uppercase tracking-widest">{ceo.role}</p>
                <p className="text-gray-600 leading-relaxed text-xl italic font-serif">
                  &ldquo;{ceo.message}&rdquo;
                </p>
                <div className="mt-10 pt-8 border-t border-gray-100">
                  <p className="text-2xl text-slate-800 opacity-70 italic">{ceo.name}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="mt-24 bg-[#2D2B4A] rounded-3xl p-12 md:p-16 text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#00BCD4] rounded-full mix-blend-overlay filter blur-3xl opacity-20 transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FFC107] rounded-full mix-blend-overlay filter blur-3xl opacity-20 transform -translate-x-1/2 translate-y-1/2"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Want to join our dynamic team?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
              We are always looking for talented individuals who are passionate about SEO and digital
              marketing. Check out our open positions.
            </p>
            <Link
              href="/contact-us"
              className="inline-block bg-[#FFC107] hover:bg-yellow-500 text-white font-bold py-4 px-12 rounded-full shadow-lg uppercase transition-transform transform hover:scale-105 tracking-wider"
            >
              View Careers
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
