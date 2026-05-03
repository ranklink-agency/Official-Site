'use client';

import { useState } from 'react';
import { ChevronRight, MessageCircleQuestion } from 'lucide-react';
import { FAQS } from '@/lib/constants';
import SectionHeading from '@/components/ui/SectionHeading';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="pt-24 pb-56 bg-[#FAFEFA]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading tagline="FAQ'S" title="Most Popular Questions" className="mb-12" />

        <div className="space-y-4 mb-16">
          {FAQS.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all border border-gray-100"
            >
              <button
                className={`w-full px-6 py-5 text-left flex justify-between items-center transition-colors ${
                  openIndex === index ? 'bg-[#FFC107] text-white' : 'bg-white hover:bg-gray-50'
                }`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span
                  className={`font-bold text-lg ${
                    openIndex === index ? 'text-white' : 'text-slate-800'
                  }`}
                >
                  {faq.question}
                </span>
                <ChevronRight
                  className={`w-5 h-5 transform transition-transform flex-shrink-0 ${
                    openIndex === index ? 'rotate-90 text-white' : 'text-gray-400'
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-300 ease-in-out overflow-hidden ${
                  openIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 py-5 text-gray-600 bg-white leading-relaxed text-base border-t border-gray-100">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-white p-10 rounded-3xl border border-gray-100 shadow-xl max-w-2xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-cyan-50 rounded-full flex items-center justify-center text-[#00BCD4]">
              <MessageCircleQuestion className="w-8 h-8" />
            </div>
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-3">Still have questions?</h3>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">
            Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly team.
          </p>
          <a
            href="/contact-us"
            className="inline-block bg-[#00BCD4] hover:bg-cyan-600 text-white font-bold py-3 px-8 rounded-full transition-colors shadow-md text-sm uppercase tracking-wide"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}
