import Link from 'next/link';
import { Star, CheckCircle } from 'lucide-react';
import { REVIEWS } from '@/lib/constants';
import Image from 'next/image';

function StarRow({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${i <= rating ? 'text-brand-yellow fill-current' : 'text-gray-200 fill-current'}`}
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  const featured = REVIEWS.slice(0, 3);

  return (
    <section className="py-24 bg-[#FAFEFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-brand-cyan font-bold uppercase tracking-wider text-sm mb-3 block">
            Client Reviews
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            We&apos;ve helped hundreds of brands grow their online presence through powerful guest
            posts and premium backlinks. Here&apos;s what they have to say.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex gap-0.5">
              {[1,2,3,4,5].map(i => (
                <Star key={i} className={`w-5 h-5 ${i <= 5 ? 'text-brand-yellow fill-current' : 'text-gray-200 fill-current'}`} />
              ))}
            </div>
            <span className="text-slate-700 font-bold text-sm">4.9/5</span>
            <span className="text-gray-400 text-sm">based on client satisfaction</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-4 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-cyan/20 flex-shrink-0">
                  <Image
                    src={review.avatar}
                    alt={review.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                    unoptimized
                  />
                </div>
                <div>
                  <p className="font-bold text-slate-800 text-sm leading-tight">{review.name}</p>
                  <div className="flex items-center gap-1 mt-0.5">
                    {review.verified && (
                      <span className="flex items-center gap-1 text-xs text-brand-cyan font-semibold">
                        <CheckCircle className="w-3 h-3" /> Verified Client
                      </span>
                    )}
                    <div className="flex gap-0.5 ml-1">
                      <StarRow rating={review.rating} />
                    </div>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed flex-1">{review.text}</p>
              <p className="text-xs text-gray-400">{review.role}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 bg-[#2D2B4A] hover:bg-[#1e1c35] text-white font-bold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 text-sm uppercase tracking-wider"
          >
            See All Reviews
            <Star className="w-4 h-4 text-brand-yellow fill-current" />
          </Link>
        </div>
      </div>
    </section>
  );
}
