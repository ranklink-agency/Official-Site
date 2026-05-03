import Image from 'next/image';

const logos = [
  { name: 'Google News', src: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Google_News_icon.svg' },
  { name: 'Associated Press', src: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Associated_Press_logo_2012.svg' },
  { name: 'Business Insider', src: 'https://upload.wikimedia.org/wikipedia/commons/1/11/Business_Insider_Logo.svg' },
  { name: 'Benzinga', src: 'https://upload.wikimedia.org/wikipedia/commons/e/e6/Benzinga_logo.svg' },
  { name: 'MarketWatch', src: 'https://upload.wikimedia.org/wikipedia/commons/4/47/MarketWatch_logo.svg' },
];

export default function LogoStrip() {
  return (
    <div className="bg-white py-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-10 animate-fade-in-up">
          Publish Your Story on:
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 hover:opacity-100 transition-all duration-500 grayscale hover:grayscale-0">
          {logos.map((logo, index) => (
            <div key={logo.name} className="h-8 md:h-12 w-auto flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.name}
                width={150}
                height={48}
                className="object-contain animate-fade-in-up"
                style={{ width: 'auto', height: '100%', maxHeight: '48px' }}
                unoptimized
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
