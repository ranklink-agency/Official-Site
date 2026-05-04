'use client';

import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface FAQItem { question: string; answer: string; }

export default function PremiumFaqClient({ faqs }: { faqs: FAQItem[] }) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  return (
    <div className="max-w-4xl mx-auto space-y-4 mb-16">
      {faqs.map((faq, index) => (
        <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
          <button
            className={`w-full px-6 py-5 text-left flex justify-between items-center transition-colors ${openFaqIndex === index ? 'bg-[#FFC107]' : 'bg-white hover:bg-gray-50'}`}
            onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
          >
            <span className={`font-bold text-lg ${openFaqIndex === index ? 'text-white' : 'text-slate-800'}`}>{faq.question}</span>
            <ChevronRight className={`w-5 h-5 transform transition-transform flex-shrink-0 ${openFaqIndex === index ? 'rotate-90 text-white' : 'text-gray-400'}`} />
          </button>
          <div className={`transition-all duration-300 overflow-hidden ${openFaqIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="px-6 py-5 text-gray-600 leading-relaxed border-t border-gray-100">{faq.answer}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
