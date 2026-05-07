import Image from 'next/image';
import { BarChart3, Rocket } from 'lucide-react';
import PageHeader from '@/components/ui/PageHeader';
import SectionHeading from '@/components/ui/SectionHeading';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us | Rank Link Agency',
  description: 'Learn about Rank Link Agency – your trusted partner in guest post and backlink services since 2021.',
};

export default function AboutPage() {
  return (
    <div className="bg-[#FAFEFA] min-h-screen pb-44">
      <PageHeader
        title="About Us"
        subtitle="Rank Link Agency – Your Partner in Guest Post Services"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute -left-10 top-10 hidden xl:block opacity-60">
              <svg width="60" height="120" viewBox="0 0 60 120" fill="none">
                <path d="M50 10 C 10 20, 10 100, 50 110" stroke="#56507A" strokeWidth="2" strokeDasharray="5 5" fill="none"/>
                <path d="M50 110 L 40 105 M 50 110 L 40 115" stroke="#56507A" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="pl-0 lg:pl-8">
              <SectionHeading
                tagline="Who We Are"
                title="About Rank Link Agency"
                description="Rank Link Agency Ltd found in 2021 intending to help online businesses with marketing services. Building a brand presence, increasing organic traffic and sales, and boosting your keywords ranking in search engines with our guest post services."
                alignment="left"
                className="mb-8"
              />
              <div className="space-y-8 mt-8">
                {[
                  {
                    icon: BarChart3,
                    title: 'Guest Post Services',
                    desc: 'Our team will help you to post your article on any blog website. The quality of Links is assured.',
                  },
                  {
                    icon: Rocket,
                    title: 'Backlinks Services',
                    desc: 'We will help you build/create premium quality contextual backlinks for your business website.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-5 group">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 border-2 border-cyan-100 bg-white rounded-xl flex items-center justify-center transition-colors group-hover:border-[#00BCD4]">
                        <item.icon className="w-7 h-7 text-[#00BCD4]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-10 bg-yellow-100 rounded-full blur-3xl opacity-50 -z-10"></div>
              <div className="w-[350px] h-[350px] md:w-[450px] md:h-[450px] rounded-full overflow-hidden border-[12px] border-white shadow-2xl relative z-10">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Team Meeting"
                  width={450}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-0 right-0 lg:-right-4 bg-white rounded-full p-6 shadow-xl z-20 w-32 h-32 flex flex-col items-center justify-center text-center border-4 border-gray-50">
                <span className="text-3xl font-extrabold text-[#00BCD4]">05+</span>
                <span className="text-xs font-bold text-slate-700 leading-tight">Years of<br/>Experience</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#565585] py-24 mt-12 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Portfolio Overview</h2>
          <p className="text-gray-200 max-w-3xl mx-auto mb-16 text-lg leading-relaxed">
            Our projects, clients, and customer review about our guest posting company.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { number: '1,500+', label: 'Project Done' },
              { number: '578+', label: 'Happy Customer' },
              { number: '4.7', label: 'Customer Rating' },
            ].map((stat, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-10 shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                <p className="text-5xl font-extrabold text-[#00BCD4] mb-3">{stat.number}</p>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
