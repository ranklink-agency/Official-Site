import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { PRICING_PLANS, BULK_PLANS } from '@/lib/constants';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tagline="Choose Plan"
          title="Providing brilliant ideas for your business."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {PRICING_PLANS.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col transform hover:-translate-y-2"
            >
              <div className="p-8 border-b border-gray-50 bg-gray-50/50">
                <h3 className="text-2xl font-bold text-slate-800">{plan.title}</h3>
                <p className="text-sm text-gray-500 uppercase tracking-widest mt-1 font-bold">
                  {plan.subtitle}
                </p>
                <div className="mt-6 flex flex-col items-center">
                  <span className="text-gray-300 line-through text-lg font-medium">
                    ${plan.originalPrice.toFixed(2)}
                  </span>
                  <span className="text-5xl font-extrabold text-[#00BCD4]">
                    ${plan.price.toFixed(0)}
                  </span>
                  <span className="text-[10px] text-gray-400 mt-2 uppercase tracking-wide font-bold">
                    Per Placement
                  </span>
                </div>
              </div>
              <div className="p-8 flex-grow text-left">
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-600 font-medium">
                      <CheckCircle className="w-4 h-4 text-[#FFC107] mr-3 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-8 pt-0">
                <Link href="/contact-us" className="block w-full bg-[#FFC107] hover:bg-yellow-500 text-white font-bold py-4 px-4 rounded-lg uppercase transition-all duration-200 shadow-md tracking-wider transform active:scale-95 text-center">
                  Buy Now
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BULK_PLANS.map((plan, index) => (
            <div
              key={index}
              className="bg-[#00BCD4] rounded-xl shadow-lg overflow-hidden text-white flex flex-col relative group transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12">
                <CheckCircle className="w-24 h-24" />
              </div>
              <div className="p-8 flex flex-col items-center flex-grow justify-center space-y-6 relative z-10">
                <h3 className="text-xl font-bold uppercase tracking-widest">{plan.title}</h3>
                <div className="bg-white/20 rounded-lg p-4 w-full backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
                  <p className="text-lg font-bold opacity-90">{plan.placements} PLACEMENTS</p>
                  <p className="text-3xl font-extrabold mt-1">${plan.pricePerPlacement} EACH</p>
                </div>
                <div className="bg-white/20 rounded-lg p-4 w-full backdrop-blur-sm transition-transform duration-300 group-hover:scale-105">
                  <p className="text-lg font-bold opacity-90">25 PLACEMENTS</p>
                  <p className="text-3xl font-extrabold mt-1">${plan.pricePerPlacement} EACH</p>
                </div>
              </div>
              <div className="p-8 pt-0 relative z-10">
                <Link href="/contact-us" className="block w-full bg-[#FFC107] hover:bg-yellow-500 text-white font-bold py-4 px-4 rounded-lg uppercase transition-all duration-200 shadow-lg tracking-wider transform active:scale-95 text-center">
                  Buy Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
