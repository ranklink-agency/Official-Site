import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative bg-[#E0F7FA] overflow-hidden pt-12 pb-32 md:pt-24 md:pb-48">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#B2EBF2] rounded-bl-[200px] -z-10 opacity-50" />
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-yellow-400 rounded-full blur-3xl opacity-30 animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          <div className="w-full md:w-1/2 space-y-6 z-10">
            <span className="inline-block bg-brand-yellow text-xs font-bold px-3 py-1 rounded-full text-white uppercase tracking-wider mb-2 animate-fade-in-up">
              #Premium Services
            </span>

            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-800 leading-tight animate-fade-in-up"
              style={{ animationDelay: '0.1s' }}
            >
              Buy High-Quality
              <br />
              <span className="text-cyan-600">Guest Posting SEO</span>
              <br />
              Backlinks
            </h1>

            <div
              className="border-l-4 border-[#FFC107] pl-4 animate-fade-in-up"
              style={{ animationDelay: '0.15s' }}
            >
              <p className="text-[#00BCD4] font-extrabold text-lg md:text-xl uppercase tracking-wide">
                Pure SaaS Niche Guest Posting
              </p>
            </div>

            <p
              className="text-base md:text-lg text-slate-600 leading-relaxed animate-fade-in-up"
              style={{ animationDelay: '0.2s' }}
            >
              We provide pure SaaS niche guest posts on{' '}
              <span className="font-bold text-slate-800">DA/DR 75+ to 80+</span> authority websites
              with{' '}
              <span className="font-bold text-slate-800">permanent do-follow backlinks</span>, SEO
              content, and image inclusion. With strong backlink building, your website or brand can{' '}
              <span className="font-bold text-cyan-600">rank higher on Google</span>, increase
              authority, and reach the top in your niche.
            </p>

            <div
              className="flex flex-wrap gap-2 animate-fade-in-up"
              style={{ animationDelay: '0.25s' }}
            >
              {[
                'DA/DR 75–80+',
                'Do-Follow Links',
                'SEO Content',
                'Image Inclusion',
                'Permanent Backlinks',
              ].map((tag) => (
                <span
                  key={tag}
                  className="bg-white border border-cyan-200 text-cyan-700 text-xs font-bold px-3 py-1.5 rounded-full shadow-sm"
                >
                  ✓ {tag}
                </span>
              ))}
            </div>

            <Link
              href="/contact-us"
              className="bg-brand-yellow hover:bg-yellow-500 text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:-translate-y-1 active:scale-95 active:shadow-sm inline-flex items-center gap-2 animate-fade-in-up"
              style={{ animationDelay: '0.3s' }}
            >
              GET STARTED TODAY
            </Link>
          </div>

          <div
            className="w-full md:w-1/2 relative flex justify-center py-12 animate-fade-in-up"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-brand-yellow rounded-full z-0 opacity-90 transition-transform duration-700 hover:scale-105"></div>

            <Image
              src="https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Happy customer with laptop"
              width={500}
              height={500}
              className="relative z-10 w-[320px] md:w-full md:max-w-md object-contain transition-transform duration-500 hover:scale-[1.02]"
              style={{ maskImage: 'linear-gradient(black 85%, transparent 100%)' }}
              priority
            />

            <div
              className="absolute top-0 left-4 md:-left-4 bg-white p-3 rounded-xl shadow-lg flex items-center gap-3 z-20 animate-bounce cursor-default transition-transform hover:scale-110"
              style={{ animationDuration: '3s' }}
            >
              <div className="bg-orange-100 p-2 rounded-lg">
                <span className="text-orange-500 font-bold text-xl">$</span>
              </div>
              <div>
                <p className="text-xs text-gray-500">New Orders</p>
                <p className="font-bold text-gray-800">4,310</p>
              </div>
            </div>

            <div
              className="absolute bottom-10 right-0 bg-white p-3 rounded-xl shadow-lg flex items-center gap-3 z-20 animate-bounce cursor-default transition-transform hover:scale-110"
              style={{ animationDuration: '4s' }}
            >
              <div className="bg-cyan-100 p-2 rounded-lg">
                <span className="text-cyan-500 font-bold text-xl">✓</span>
              </div>
              <div>
                <p className="text-xs text-gray-500">Total Orders</p>
                <p className="font-bold text-gray-800">9,702</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none transform rotate-180">
        <svg
          className="relative block w-full h-16 md:h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </div>
  );
}
