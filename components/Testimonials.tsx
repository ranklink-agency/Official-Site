import Image from 'next/image';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIAL } from '@/lib/constants';

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 mb-10 md:mb-0 pr-0 md:pr-10">
            <span className="text-cyan-500 font-bold uppercase tracking-wider text-sm mb-4 block">
              Testimonial
            </span>
            <p className="text-gray-600 mb-8">
              We&apos;ve helped hundreds of brands grow their online presence through powerful guest
              posts and press releases. Here&apos;s what our happy clients have to say:
            </p>
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-200 rounded-full p-3">
                <Quote className="w-6 h-6 text-gray-400 fill-current" />
              </div>
              <p className="text-gray-700 italic text-center mb-6 pt-4">{TESTIMONIAL.text}</p>
              <div className="flex justify-center gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-center">
                <h4 className="font-bold text-slate-900">{TESTIMONIAL.name}</h4>
                <p className="text-xs text-gray-500">{TESTIMONIAL.role}</p>
                <div className="flex justify-center mt-3 gap-1">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className={`h-2 w-2 rounded-full ${i === 2 ? 'bg-slate-800' : 'bg-gray-300'}`}
                    ></div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/2 relative flex justify-center overflow-hidden">
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute w-full h-full text-brand-yellow fill-current opacity-90 z-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <path
                d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-46.9C87.4,-34.7,90.1,-20.4,87.9,-6.6C85.7,7.2,78.6,20.5,70,32.3C61.4,44.1,51.3,54.4,39.6,62.8C27.9,71.2,14.6,77.7,0.5,76.8C-13.6,75.9,-27.2,67.6,-39.9,59.3C-52.6,51,-64.4,42.7,-73.1,31.7C-81.8,20.7,-87.4,7,-85.4,-5.8C-83.4,-18.6,-73.8,-30.5,-63.4,-40.4C-53,-50.3,-41.8,-58.2,-29.9,-66.9C-18,-75.6,-5.4,-85.1,6,-95.5L17.4,-105.9"
                transform="translate(100 100)"
              />
            </svg>
            <Image
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Happy client"
              width={400}
              height={480}
              className="relative z-10 w-full max-w-sm rounded-b-full object-cover"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 85%, 50% 100%, 0 85%)' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
