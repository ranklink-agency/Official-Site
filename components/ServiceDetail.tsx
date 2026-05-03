import Image from 'next/image';
import { FileText, Award, PenTool } from 'lucide-react';

export default function ServiceDetail() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2">
            <span className="text-cyan-500 font-bold uppercase tracking-wider text-sm">
              About Service
            </span>
            <h2 className="text-4xl font-extrabold text-slate-900 mt-2 mb-8">Press Release</h2>
            <div className="space-y-8">
              {[
                {
                  icon: FileText,
                  title: 'Press release',
                  desc: 'Distribute your brand news across high-authority platforms and reach real audiences. Our standard press release service helps you gain exposure and credibility.',
                },
                {
                  icon: Award,
                  title: 'Premium press release',
                  desc: 'Maximize brand impact with guaranteed placements on top-tier news websites like Yahoo, AP News, and Benzinga. Ideal for serious brands seeking strong SEO signals.',
                },
                {
                  icon: PenTool,
                  title: 'Press release writing',
                  desc: 'Need help crafting your message? Our expert writers create compelling, newsworthy press releases optimized for SEO and media distribution.',
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 border border-cyan-200 rounded-lg flex items-center justify-center text-cyan-500">
                      <item.icon className="w-6 h-6" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-slate-800">{item.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative flex justify-center">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-brand-yellow rounded-full z-0"></div>
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Business discussion"
              width={400}
              height={400}
              className="relative z-10 rounded-full w-[400px] h-[400px] object-cover border-8 border-white shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
