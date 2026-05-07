import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { SEO_SERVICES_FEATURES, SEO_PRICING_PLANS } from '@/lib/constants';
import SectionHeading from '@/components/ui/SectionHeading';
import SeoContactForm from '@/components/SeoContactForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SEO Services | Rank Link Agency',
  description: 'Full-service SEO management including audit, keyword research, link building, and analytics tracking.',
};

const NICHE_TAGS = ['Technology', 'Fashion', 'Business', 'Health', 'Travel', 'Home Improvement', 'Lifestyle', 'Education', 'Finance', 'General Blogs'];

export default function SeoServicesPage() {
  return (
    <div className="bg-[#FAFEFA] min-h-screen pb-44">
      <div className="relative bg-[#2D2B4A] min-h-[500px] flex flex-col items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 pt-20 pb-32">
        <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 text-white space-y-6">
            <span className="text-[#FFC107] font-bold uppercase tracking-widest text-sm">
              Fully Managed SEO
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Rank Your Website on Top of Search Engines
            </h1>
            <p className="text-gray-300 text-lg leading-relaxed">
              Looking forward to improving the ranking of your site? Our fully-managed SEO service
              encompasses everything you need to improve the SEO rankings of the websites.
            </p>
            <Link
              href="#pricing"
              className="inline-block bg-[#FFC107] hover:bg-yellow-500 text-white font-bold py-4 px-10 rounded-sm shadow-lg uppercase transition-colors tracking-wide"
            >
              Pricing Plans
            </Link>
          </div>

          <div className="w-full lg:w-1/2 relative z-10 flex justify-center lg:justify-end">
            <div className="bg-white rounded-xl shadow-2xl p-8 w-full max-w-md border border-gray-100">
              <div className="text-center mb-6">
                <h3 className="text-[#FFC107] font-extrabold text-xl uppercase tracking-widest">
                  RANK YOUR SITE ON TOP!
                </h3>
              </div>
              <SeoContactForm />
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none transform rotate-180 z-0">
          <svg className="relative block w-full h-16 md:h-24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#FAFEFA]"></path>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <SectionHeading
          tagline="Our Process"
          title="What is Included in our Fully Managed SEO Service?"
          description="At Rank Link Agency, we provide fully managed SEO campaigns designed to deliver real, measurable results."
          className="mb-16"
        />

        <div className="max-w-4xl mx-auto text-gray-600 space-y-8 text-base md:text-lg leading-relaxed mb-20 bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-50">
          <p>
            Before launching any campaign, our team conducts a thorough review of your company,
            including your <span className="font-bold text-slate-800">business objectives, niche, target audience, and market environment</span>.
            This in-depth analysis allows us to craft a customized SEO roadmap.
          </p>
          <div className="bg-cyan-50/50 p-8 rounded-xl border border-cyan-100">
            <h4 className="font-bold text-slate-900 mb-6 text-xl">
              Our fully managed SEO campaigns typically include:
            </h4>
            <ul className="space-y-4">
              {[
                'Competitor Analysis – to identify strengths, weaknesses, and opportunities in your market.',
                'Audience Research – to understand your ideal customers and target them effectively.',
                'Customized SEO Strategy – tailored specifically for your website and industry.',
                'High-Authority Link Building – to strengthen your domain authority and improve rankings.',
                'Ongoing Monitoring & Optimization – ensuring sustainable growth and long-term results.',
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#00BCD4] flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-20">
          <SectionHeading
            tagline="Available Niches"
            title="Choose the niche that matches your brand and audience."
            description="High-quality guest posting with permanent backlinks and trusted websites for long-term SEO results."
            className="mb-8"
          />

          <div className="flex flex-wrap justify-center gap-3">
            {NICHE_TAGS.map((niche) => (
              <button
                key={niche}
                type="button"
                className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm border border-slate-200 hover:border-[#00BCD4] hover:text-[#00BCD4] hover:shadow-md transition-all"
              >
                {niche}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {SEO_SERVICES_FEATURES.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-start h-full group"
            >
              <div className="w-16 h-16 bg-[#00BCD4] rounded-2xl flex items-center justify-center mb-6 flex-shrink-0 shadow-lg shadow-cyan-500/20 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#00BCD4] transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed flex-grow">{feature.description}</p>
            </div>
          ))}
        </div>

        <div id="pricing" className="scroll-mt-24">
          <SectionHeading
            tagline="Pricing"
            title="Guest Post Packages (Tech & Fashion)"
            description="Perfect packages for startups, growing businesses, and premium brands targeting stronger authority and rankings."
            className="mb-16"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SEO_PRICING_PLANS.map((plan, index) => {
              const isPremium = index === 1;
              return (
                <div
                  key={index}
                  className={`relative w-full rounded-2xl overflow-hidden transition-all duration-300 flex flex-col ${
                    isPremium
                      ? 'bg-white shadow-2xl border-2 border-[#FFC107] transform lg:-translate-y-4 z-10'
                      : 'bg-white shadow-lg border border-gray-100'
                  }`}
                >
                  {isPremium && (
                    <div className="bg-[#FFC107] text-white text-center py-2 text-xs font-bold uppercase tracking-widest shadow-sm">
                      Most Popular
                    </div>
                  )}
                  <div className="p-10 text-center border-b border-gray-50 flex-grow">
                    <h3 className="text-2xl font-bold text-slate-800 mb-2">{plan.title}</h3>
                    <p className="text-gray-500 text-xs mb-8 px-4 leading-relaxed">{plan.subtitle}</p>
                    <div className="flex justify-center items-start">
                      <span className="text-2xl font-bold text-[#00BCD4] mt-2">$</span>
                      <span className="text-6xl font-extrabold text-[#00BCD4]">{plan.price}</span>
                    </div>
                    <p className="text-gray-400 text-xs font-bold uppercase mt-2">Per Placement</p>
                  </div>
                  <div className="p-8 bg-gray-50/50">
                    <ul className="space-y-4 mb-8 text-left">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
                          <CheckCircle className="w-5 h-5 text-[#FFC107] flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href="/contact-us" className="block w-full py-4 rounded-xl font-bold uppercase tracking-wider transition-all bg-[#FFC107] text-white hover:bg-yellow-500 shadow-md hover:shadow-lg text-center">
                      Get Started
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
