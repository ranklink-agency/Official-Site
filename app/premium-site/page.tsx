'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { PREMIUM_SITES, PREMIUM_FAQS } from '@/lib/constants';
import { ChevronRight, ShieldCheck, TrendingUp, DollarSign, Globe } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

export default function PremiumSitesPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="bg-[#FAFEFA] min-h-screen pb-44">
      <div className="relative bg-[#4FC3F7] min-h-[500px] flex flex-col items-center justify-center overflow-hidden text-center px-4 pt-20 pb-32">
        <div className="relative z-10 max-w-4xl mx-auto space-y-6">
          <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold uppercase backdrop-blur-sm shadow-sm tracking-wider">
            Premium Services
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white drop-shadow-md leading-tight">
            Boost Rankings with <br />
            <span className="text-[#FFC107] drop-shadow-md">High-Authority Backlinks</span>
          </h1>
          <p className="text-white text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed opacity-95">
            Access our curated marketplace of premium publishers. Secure do-follow links from sites
            with real traffic and high domain authority.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            {[
              { icon: ShieldCheck, text: 'Verified Publishers' },
              { icon: TrendingUp, text: 'High Traffic' },
              { icon: DollarSign, text: 'Best Price Guarantee' },
            ].map((badge, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-lg border border-white/30 shadow-sm hover:bg-white/30 transition-colors"
              >
                <badge.icon className="w-5 h-5 text-white" />
                <span className="text-white font-semibold text-sm">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none transform rotate-180 z-20">
          <svg className="relative block w-full h-16 md:h-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#FAFEFA]"></path>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-30">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 mb-24">
          <div className="p-8 bg-gray-50 border-b border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-3">
                <Globe className="w-7 h-7 text-[#00BCD4]" />
                Available Publishers
              </h2>
              <p className="text-gray-500 text-sm mt-1">Showing top premium sites for guest posting</p>
            </div>
          </div>

          <div className="divide-y divide-gray-100">
            {PREMIUM_SITES.map((site, index) => {
              const da = 40 + (index * 3) % 50;
              const traffic = 5 + (index * 7) % 90;
              return (
                <div
                  key={site.id}
                  className="p-6 md:p-8 hover:bg-blue-50/30 transition-all duration-300 group"
                >
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                    <div className="w-24 h-16 flex-shrink-0 bg-white rounded-xl border border-gray-200 p-2 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow group-hover:border-[#00BCD4]">
                      <Image
                        src={site.image}
                        alt={site.domain}
                        width={96}
                        height={64}
                        className="max-w-full max-h-full object-contain"
                        unoptimized
                      />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-lg font-bold text-slate-800 group-hover:text-[#00BCD4] transition-colors">
                        {site.domain}
                      </h3>
                      <div className="flex flex-wrap gap-4 mt-2">
                        <span className="text-xs font-bold text-gray-500">DA {da}+</span>
                        <span className="text-xs font-bold text-gray-500">Traffic: {traffic}K+/mo</span>
                        <span className="text-xs font-bold text-green-500">Do-Follow</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 flex-shrink-0">
                      {site.isSale && site.originalPrice && (
                        <span className="text-gray-400 line-through text-sm">
                          ${site.originalPrice.toFixed(0)}
                        </span>
                      )}
                      <div className="text-right">
                        {site.isSale && (
                          <span className="text-xs font-bold text-red-500 block">SALE</span>
                        )}
                        <span className="text-2xl font-extrabold text-[#00BCD4]">
                          ${site.price.toFixed(0)}
                        </span>
                      </div>
                      <Link href="/contact-us" className="inline-block bg-[#FFC107] hover:bg-yellow-500 text-white font-bold py-2.5 px-6 rounded-lg transition-all uppercase text-sm tracking-wider shadow-md hover:shadow-lg transform active:scale-95">
                        Buy Now
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Guarantee Section */}
        <div className="bg-white rounded-3xl shadow-xl p-12 border border-gray-100 mb-24 text-center">
          <ShieldCheck className="w-16 h-16 text-[#00BCD4] mx-auto mb-6" />
          <h2 className="text-3xl font-extrabold text-slate-900 mb-4">Our Guarantee</h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
            If we fail to secure a placement on your chosen site, we will issue a full refund or
            offer an alternative of equal value. Your satisfaction is our top priority.
          </p>
        </div>

        {/* FAQ Section */}
        <SectionHeading tagline="FAQ" title="Premium Sites FAQ" className="mb-12" />
        <div className="max-w-4xl mx-auto space-y-4 mb-16">
          {PREMIUM_FAQS.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100"
            >
              <button
                className={`w-full px-6 py-5 text-left flex justify-between items-center transition-colors ${
                  openFaqIndex === index ? 'bg-[#FFC107]' : 'bg-white hover:bg-gray-50'
                }`}
                onClick={() => toggleFaq(index)}
              >
                <span
                  className={`font-bold text-lg ${
                    openFaqIndex === index ? 'text-white' : 'text-slate-800'
                  }`}
                >
                  {faq.question}
                </span>
                <ChevronRight
                  className={`w-5 h-5 transform transition-transform flex-shrink-0 ${
                    openFaqIndex === index ? 'rotate-90 text-white' : 'text-gray-400'
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-300 overflow-hidden ${
                  openFaqIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 py-5 text-gray-600 leading-relaxed border-t border-gray-100">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
