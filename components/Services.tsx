import { SERVICES } from '@/lib/constants';
import SectionHeading from '@/components/ui/SectionHeading';

export default function Services() {
  return (
    <section className="py-24 bg-[#FAFEFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          tagline="Top Services"
          title="Choosing An Internet Marketing Company"
          className="mb-16"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="bg-white p-10 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group border border-gray-100 transform hover:-translate-y-2"
            >
              <div className="w-20 h-20 bg-[#00BCD4] rounded-2xl flex items-center justify-center mb-8 transform group-hover:rotate-6 transition-transform duration-300 shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-[#00BCD4] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
