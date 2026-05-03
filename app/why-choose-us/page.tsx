import { FileText, Link as LinkIcon, PhoneCall } from 'lucide-react';
import PageHeader from '@/components/ui/PageHeader';
import SectionHeading from '@/components/ui/SectionHeading';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Why Choose Us | Rank Link Agency',
  description: 'Discover why Rank Link Agency is your best choice for guest post and backlink services.',
};

export default function WhyChooseUsPage() {
  return (
    <div className="bg-[#FAFEFA] min-h-screen pb-44">
      <PageHeader
        title="Why Choose Us"
        subtitle="Choose Us Because of our Values and Proven Track Record"
      />

      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            <div className="w-full lg:w-1/2">
              <SectionHeading
                tagline="Why Choose Us"
                title="Why Guest Post from Rank Link Agency!"
                description="Why you should choose Rank Link Agency? The way we provide guest post services – there is no other agency that can provide such services."
                alignment="left"
                className="mb-8"
              />
              <ul className="space-y-4 list-disc pl-5 text-gray-600 mb-10 leading-relaxed">
                <li>Rank Link Agency not only publishes your article but optimizes it to perform in SERPs.</li>
                <li>We offer permanent do-follow backlinks at the best price, we accept changes and support.</li>
                <li>We encourage free articles posted on our blog website if they attain our terms and conditions.</li>
              </ul>
              <a
                href="/contact-us"
                className="inline-block bg-[#FFC107] hover:bg-yellow-500 text-white font-bold py-3 px-8 rounded-md shadow-md uppercase transition-colors"
              >
                Learn More
              </a>
            </div>
            <div className="w-full lg:w-1/2 space-y-6">
              {[
                {
                  icon: FileText,
                  title: 'Best Price',
                  desc: "The one who do outreach to the bloggers. They know how much it cost. While getting backlinks from authority blog websites. But what we do? We offer you premium guest post links at low prices from the market prices.",
                },
                {
                  icon: LinkIcon,
                  title: 'Permanent Backlinks',
                  desc: "At the start when I was running my blog. I have created paid backlinks. Later I find out that all those links which paid for are deleted. But with Rank Link Agency you will get permanent guest post backlinks for your website.",
                },
                {
                  icon: PhoneCall,
                  title: 'Support Services',
                  desc: "The reason, you choose our guest post services. As we provide support for our guest post services. if find out that anything happened with a link broken / 404 – send us your query our team will deal with 100% Satisfaction.",
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex gap-6 items-start hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-16 h-16 bg-[#00BCD4] rounded-xl flex items-center justify-center text-white shadow-lg shadow-cyan-900/10">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-white to-[#F0F8F0] py-24 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
            <div className="bg-white p-12 rounded-2xl shadow-xl flex flex-col justify-center h-full border border-gray-50">
              <span className="text-[#00BCD4] font-bold uppercase tracking-wider text-sm mb-4 block">OUR AIM</span>
              <h2 className="text-4xl font-extrabold text-slate-900 mb-8 leading-tight">
                We Give Value to your Business in Market Place
              </h2>
              <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                It is not important what our value is. For us what matters the most is to give value to your business in the marketplace. With our marketing services, we help you to reach the right audience and increase your sales.
              </p>
              <div>
                <a
                  href="/contact-us"
                  className="inline-block bg-[#00BCD4] hover:bg-cyan-600 text-white font-bold py-4 px-10 rounded-md shadow-md uppercase transition-colors"
                >
                  Discover More
                </a>
              </div>
            </div>
            <div className="space-y-8 flex flex-col h-full">
              <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex-1">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  Rank Link Agency vision is to provide the best marketing services – build long-term relationships with clients and give value to their business.
                </p>
              </div>
              <div className="bg-white p-10 rounded-2xl shadow-sm border border-gray-100 flex-1">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  We start Rank Link Agency with a mission to centralize the guest post services and provide a platform for vendors to choose a blog.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
