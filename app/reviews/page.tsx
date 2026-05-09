'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Star, CheckCircle } from 'lucide-react';
import { REVIEWS } from '@/lib/constants';
import PageHeader from '@/components/ui/PageHeader';

const WHATSAPP_NUMBER = '923157588685';

function StarRow({ rating, size = 'sm' }: { rating: number; size?: 'sm' | 'md' }) {
  const cls = size === 'md' ? 'w-5 h-5' : 'w-4 h-4';
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={`${cls} ${i <= rating ? 'text-brand-yellow fill-current' : 'text-gray-200 fill-current'}`}
        />
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  const [name, setName] = useState('');
  const [rating, setRating] = useState('5');
  const [message, setMessage] = useState('');

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = `New Review Received\nName: ${name}\nRating: ${rating} Star\nReview: ${message}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank');
  }

  const avgRating = (REVIEWS.reduce((s, r) => s + r.rating, 0) / REVIEWS.length).toFixed(1);

  return (
    <>
      <PageHeader
        title="Client Reviews"
        subtitle="Real feedback from real clients — see what businesses around the world say about our guest posting and SEO services."
      />

      <section className="py-16 bg-[#FAFEFA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">

          {/* Overall Rating */}
          <div className="flex justify-center">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-10 py-6 flex flex-col items-center gap-2 w-full max-w-sm">
              <StarRow rating={5} size="md" />
              <p className="text-slate-700 font-bold text-sm mt-1">
                {avgRating}/5 based on client satisfaction
              </p>
            </div>
          </div>

          {/* Submit Review Form */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 max-w-2xl mx-auto">
            <h2 className="text-xl font-extrabold text-slate-800 mb-6 text-center">Add Your Review</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent"
                />
              </div>
              <div>
                <select
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent"
                >
                  <option value="5">5 Star</option>
                  <option value="4">4 Star</option>
                  <option value="3">3 Star</option>
                  <option value="2">2 Star</option>
                  <option value="1">1 Star</option>
                </select>
              </div>
              <div>
                <textarea
                  placeholder="Write your review here..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-brand-cyan focus:border-transparent resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-bold py-4 rounded-xl transition-colors shadow-md text-sm uppercase tracking-wider"
              >
                Submit Review via WhatsApp
              </button>
              <p className="text-center text-xs text-gray-400">
                Clicking submit will open WhatsApp with your review pre-filled. We will add it to this page manually.
              </p>
            </form>
          </div>

          {/* All Reviews Grid */}
          <div>
            <h2 className="text-xl font-extrabold text-slate-800 mb-6 text-center">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {REVIEWS.map((review) => (
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
                      <p className="font-bold text-slate-800 text-sm">{review.name}</p>
                      <div className="flex items-center gap-2 mt-0.5 flex-wrap">
                        {review.verified && (
                          <span className="flex items-center gap-1 text-xs text-brand-cyan font-semibold">
                            <CheckCircle className="w-3 h-3" /> Verified Client
                          </span>
                        )}
                        <StarRow rating={review.rating} />
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{review.text}</p>
                  <p className="text-xs text-gray-400">{review.role}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
