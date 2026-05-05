'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type LogoEntry =
  | { type: 'image'; name: string; src: string; width: number; height: number; href: string }
  | { type: 'text'; name: string; line1?: string; line2?: string; href: string };

const logos: LogoEntry[] = [
  {
    type: 'text',
    name: 'Re-Thinking The Future',
    line1: 'Re-Thinking',
    line2: 'The Future',
    href: 'https://re-thinkingthefuture.com',
  },
  {
    type: 'image',
    name: 'Retail Insider',
    src: '/logos/retail-insider.png',
    width: 556,
    height: 556,
    href: 'https://retail-insider.com',
  },
  {
    type: 'text',
    name: 'Fashion Week Online',
    line1: 'FASHION WEEK',
    line2: 'ONLINE',
    href: 'https://fashionweekonline.com',
  },
  {
    type: 'image',
    name: 'Gigwise',
    src: '/logos/gigwise.png',
    width: 491,
    height: 163,
    href: 'https://gigwise.com',
  },
  {
    type: 'text',
    name: 'The Good Men Project',
    line1: 'The Good',
    line2: 'Men Project',
    href: 'https://goodmenproject.com',
  },
  {
    type: 'image',
    name: 'AZ Big Media',
    src: '/logos/azbigmedia.png',
    width: 1600,
    height: 306,
    href: 'https://azbigmedia.com',
  },
  {
    type: 'image',
    name: 'Radar Online',
    src: '/logos/radaronline.svg',
    width: 293,
    height: 165,
    href: 'https://radaronline.com',
  },
];

export default function LogoStrip() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: direction === 'left' ? -260 : 260, behavior: 'smooth' });
  };

  return (
    <div className="bg-white py-10 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-8 text-center">
          Trusted SaaS, Tech & Premium Brands We&apos;ve Collaborated With
        </p>

        <div className="relative flex items-center gap-2">
          <button
            onClick={() => scroll('left')}
            aria-label="Scroll left"
            className="flex-shrink-0 w-9 h-9 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-500 hover:text-gray-800 hover:border-gray-400 hover:shadow-md transition-all duration-200 z-10"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div
            ref={scrollRef}
            className="flex items-center gap-12 overflow-x-auto scroll-smooth"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            <style>{`div::-webkit-scrollbar { display: none; }`}</style>
            {logos.map((logo) => (
              <a
                key={logo.name}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                title={`Visit ${logo.name}`}
                className="flex-shrink-0 flex items-center justify-center opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-pointer"
                style={{ minWidth: 100, height: 48 }}
              >
                {logo.type === 'image' ? (
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={logo.width}
                    height={logo.height}
                    className="object-contain"
                    style={{ width: 'auto', height: '100%', maxHeight: 48, maxWidth: 160 }}
                    unoptimized
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center leading-tight">
                    <span className="text-[11px] font-black uppercase tracking-tight text-gray-700 whitespace-nowrap block">
                      {logo.line1}
                    </span>
                    {logo.line2 && (
                      <span className="text-[11px] font-black uppercase tracking-tight text-gray-700 whitespace-nowrap block">
                        {logo.line2}
                      </span>
                    )}
                  </div>
                )}
              </a>
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            aria-label="Scroll right"
            className="flex-shrink-0 w-9 h-9 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-gray-500 hover:text-gray-800 hover:border-gray-400 hover:shadow-md transition-all duration-200 z-10"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
