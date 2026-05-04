import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { PRICING_PLANS } from '@/lib/constants';
import SectionHeading from '@/components/ui/SectionHeading';

const NICHE_TAGS = [
  'Technology', 'Fashion', 'Business', 'Health', 'Travel',
  'Home Improvement', 'Lifestyle', 'Education', 'Finance', 'General Blogs',
];

const TIER_STYLES: Record<string, { accent: string; badge: string; badgeText: string }> = {
  Basic:      { accent: 'border-gray-200',   badge: 'bg-slate-100 text-slate-500',      badgeText: 'Starter' },
  Standard:   { accent: 'border-gray-200',   badge: 'bg-cyan-50 text-[#00BCD4]',        badgeText: 'Popular' },
  Premium:    { accent: 'border-[#FFC107]',  badge: 'bg-yellow-50 text-[#FFC107]',      badgeText: 'Best Value' },
  'Ultra Gold': { accent: 'border-[#FF8C00]', badge: 'bg-orange-50 text-orange-500',   badgeText: 'Top Tier' },
};

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Niches */}
        <SectionHeading
          tagline="Available Niches"
          title="High-quality guest posting across the niches clients need most."
          description="We provide permanent backlinks on trusted websites for long-term SEO results."
          className="mb-10"
        />
        <div className="flex flex-wrap justify-center gap-3 mb-20">
          {NICHE_TAGS.map((niche) => (
            <span
              key={niche}
              className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm border border-slate-200 hover:border-[#00BCD4] hover:text-[#00BCD4] transition-colors cursor-default"
            >
              {niche}
            </span>
          ))}
        </div>

        {/* Pricing header */}
        <SectionHeading
          tagline="Choose Plan"
          title="Guest Post Packages"
          description="Affordable packages for every stage — from startups to premium brands."
          className="mb-16"
        />

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRICING_PLANS.map((plan, index) => {
            const tier = TIER_STYLES[plan.subtitle] ?? TIER_STYLES['Basic'];
            const isGold = plan.subtitle === 'Ultra Gold';
            return (
              <div
                key={index}
                className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border-2 flex flex-col transform hover:-translate-y-2 ${tier.accent}`}
              >
                {/* Top accent strip for gold */}
                {isGold && (
                  <div className="h-1.5 w-full bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500" />
                )}

                {/* Header — fully centred */}
                <div className="pt-8 pb-6 px-6 flex flex-col items-center text-center border-b border-gray-100 bg-gray-50/40">
                  {/* Tier label */}
                  <span className={`text-[10px] font-extrabold uppercase tracking-[0.25em] px-3 py-1 rounded-full mb-3 ${tier.badge}`}>
                    {tier.badgeText}
                  </span>

                  {/* Tier name */}
                  <h3 className={`text-2xl font-extrabold mb-1 ${isGold ? 'text-orange-500' : 'text-slate-800'}`}>
                    {plan.subtitle}
                  </h3>

                  {/* DR spec */}
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-1">
                    {plan.title}
                  </p>

                  {/* Guest Post badge */}
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#00BCD4] bg-cyan-50 border border-cyan-100 px-3 py-0.5 rounded-full mb-5">
                    Guest Post
                  </span>

                  {/* Price */}
                  <div className="flex flex-col items-center">
                    <span className={`text-6xl font-extrabold leading-none ${isGold ? 'text-orange-500' : 'text-[#00BCD4]'}`}>
                      ${plan.price.toFixed(0)}
                    </span>
                    <span className="text-[10px] text-gray-400 mt-2 uppercase tracking-wide font-bold">
                      Per Placement
                    </span>
                  </div>
                </div>

                {/* Features */}
                <div className="p-6 flex-grow text-left">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-600 font-medium">
                        <CheckCircle className={`w-4 h-4 mr-3 mt-0.5 flex-shrink-0 ${isGold ? 'text-orange-400' : 'text-[#FFC107]'}`} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="px-6 pb-6">
                  <Link
                    href="/contact-us"
                    className={`block w-full font-bold py-4 rounded-xl uppercase tracking-wider text-center text-white transition-all duration-200 shadow-md active:scale-95 ${
                      isGold
                        ? 'bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-400 hover:to-orange-400'
                        : 'bg-[#FFC107] hover:bg-yellow-500'
                    }`}
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
