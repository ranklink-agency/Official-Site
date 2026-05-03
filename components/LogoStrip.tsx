import Image from 'next/image';

type LogoEntry =
  | { type: 'image'; name: string; src: string; width: number; height: number }
  | { type: 'text'; name: string; line1?: string; line2?: string };

const logos: LogoEntry[] = [
  {
    type: 'text',
    name: 'Re-Thinking The Future',
    line1: 'Re-Thinking',
    line2: 'The Future',
  },
  {
    type: 'image',
    name: 'Retail Insider',
    src: '/logos/retail-insider.png',
    width: 556,
    height: 556,
  },
  {
    type: 'text',
    name: 'Fashion Week Online',
    line1: 'FASHION WEEK',
    line2: 'ONLINE',
  },
  {
    type: 'image',
    name: 'Gigwise',
    src: '/logos/gigwise.png',
    width: 491,
    height: 163,
  },
  {
    type: 'text',
    name: 'The Good Men Project',
    line1: 'The Good',
    line2: 'Men Project',
  },
  {
    type: 'image',
    name: 'AZ Big Media',
    src: '/logos/azbigmedia.png',
    width: 1600,
    height: 306,
  },
  {
    type: 'image',
    name: 'Radar Online',
    src: '/logos/radaronline.svg',
    width: 293,
    height: 165,
  },
];

export default function LogoStrip() {
  return (
    <div className="bg-white py-12 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-10">
          As Featured On:
        </p>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-60 hover:opacity-100 transition-all duration-500 grayscale hover:grayscale-0">
          {logos.map((logo) =>
            logo.type === 'image' ? (
              <div
                key={logo.name}
                className="h-10 md:h-12 flex items-center justify-center"
                style={{ minWidth: 80, maxWidth: 160 }}
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain"
                  style={{ width: 'auto', height: '100%', maxHeight: '48px', maxWidth: '160px' }}
                  unoptimized
                />
              </div>
            ) : (
              <div
                key={logo.name}
                className="flex flex-col items-center justify-center leading-tight"
                style={{ minWidth: 80 }}
              >
                <span className="text-[11px] font-black uppercase tracking-tight text-gray-700 block">
                  {logo.line1}
                </span>
                {logo.line2 && (
                  <span className="text-[11px] font-black uppercase tracking-tight text-gray-700 block">
                    {logo.line2}
                  </span>
                )}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
