import { CheckSquare, Users, Globe } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-[#F0F8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <div className="w-full lg:w-1/3">
            <SectionHeading
              tagline="Why Choose Us"
              title="Why Rank Link Agency Guest-posts Backlinks?"
              description="We ensure you get to build quality backlinks from high-authority authentic blogs (No PBNs or Link-Farms) with REAL traffic."
              alignment="left"
              className="mb-8"
            />
            <a
              href="/why-choose-us"
              className="inline-block bg-[#FFC107] hover:bg-yellow-500 text-white font-bold py-3 px-8 rounded-md shadow-md uppercase transition-colors"
            >
              Learn More
            </a>
          </div>

          <div className="w-full lg:w-2/3 space-y-6">
            {[
              {
                icon: CheckSquare,
                title: 'Check & Approve Domains',
                desc: 'Our outreach team starts searching for the most suitable guest-post backlinks as soon as you place an order with us. You get the option to choose from the presented domains and select the one that you like.',
              },
              {
                icon: Users,
                title: "5000+ Publishers' Traffic",
                desc: "We offer you the guest-post plans that guarantee 5000+ organic publisher's traffic relevant to your website except for DA20 and DA30. No PBNs or Link-Farms.",
              },
              {
                icon: Globe,
                title: 'Relevant Sites & Content',
                desc: 'Our SEO experts make sure to put the best Google-friendly SEO practices in the entire process from prospecting to guest-post publishing. We offer you only the domains and content relevant and useful for your niche.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-xl shadow-sm flex flex-col sm:flex-row gap-6 items-start border border-gray-100"
              >
                <div className="w-16 h-16 bg-[#00BCD4] rounded-lg flex items-center justify-center flex-shrink-0 text-white shadow-md">
                  <item.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-800 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
