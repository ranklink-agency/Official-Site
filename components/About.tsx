import Image from 'next/image';
import { BarChart, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative">
            <div className="absolute inset-0 bg-orange-100 rounded-full blur-3xl opacity-40 transform -translate-x-10 translate-y-10"></div>
            <div className="relative z-10 overflow-hidden rounded-[50px] border-8 border-white shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Team working"
                width={800}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute top-10 -left-6 bg-white p-4 rounded-full shadow-xl z-20 flex flex-col items-center justify-center w-32 h-32 border-4 border-cyan-50">
              <span className="text-3xl font-extrabold text-cyan-500">05+</span>
              <span className="text-xs text-gray-500 text-center font-semibold leading-tight">
                Years of
                <br />
                Experience
              </span>
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-6">
            <span className="text-cyan-500 font-bold uppercase tracking-wider text-sm">Who We Are</span>
            <h2 className="text-4xl font-extrabold text-slate-900">About Rank Link Agency</h2>
            <p className="text-gray-600 leading-relaxed">
              We are a trustworthy backlink-building and content-driven marketing company. Buy
              scalable link-building services at competitive prices. Avail of the Rank Link Agency
              guarantee and plan your business growth with zero worries. We are capable of handling
              your entire link building and content development work.
            </p>

            <div className="space-y-6 mt-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-cyan-100 flex items-center justify-center">
                    <BarChart className="w-6 h-6 text-cyan-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-800">Guest Post Backlinks</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Boost your site&apos;s authority and organic rankings with high-quality guest posts
                    on real, niche-relevant websites.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-cyan-100 flex items-center justify-center">
                    <ShieldCheck className="w-6 h-6 text-cyan-600" />
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-lg text-slate-800">Authority Backlinks</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Secure premium backlinks from authoritative websites that search engines trust.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
