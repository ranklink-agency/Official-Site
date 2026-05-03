'use client';

import { useState } from 'react';
import { FAQS } from '@/lib/constants';
import { Plus, Minus } from 'lucide-react';
import PageHeader from '@/components/ui/PageHeader';
import SectionHeading from '@/components/ui/SectionHeading';

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#FAFEFA] min-h-screen pb-44">
      <PageHeader title="FAQ" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <SectionHeading tagline="FAQ's" title="Most Popular Questions" className="mb-12" />

        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`border rounded-lg transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-white border-[#FFC107] shadow-lg scale-[1.01]'
                    : 'bg-white border-gray-100 shadow-sm hover:border-gray-200'
                }`}
              >
                <button
                  className="w-full px-6 py-5 text-left flex items-start gap-4 focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="flex-shrink-0 mt-1">
                    {isOpen ? (
                      <div className="w-6 h-6 bg-[#FFC107] rounded-full flex items-center justify-center text-white">
                        <Minus className="w-4 h-4" strokeWidth={3} />
                      </div>
                    ) : (
                      <div className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-slate-500">
                        <Plus className="w-4 h-4" strokeWidth={3} />
                      </div>
                    )}
                  </div>
                  <span
                    className={`font-bold text-lg leading-snug ${
                      isOpen ? 'text-[#FF9800]' : 'text-slate-800'
                    }`}
                  >
                    {faq.question}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pl-16 text-gray-600 leading-relaxed text-base border-t border-dashed border-gray-100 pt-4 mt-2">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
