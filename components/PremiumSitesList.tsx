'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Globe, ChevronLeft, ChevronRight } from 'lucide-react';
import SiteLogo from '@/components/SiteLogo';
import type { PublisherSite } from '@/lib/supabase/types';

const ITEMS_PER_PAGE = 10;

const UNIT_LABEL: Record<string, string> = {
  per_day: '/day',
  per_month: '/mo',
  per_year: '/yr',
};

const LINK_STYLE: Record<string, { label: string; cls: string }> = {
  dofollow:  { label: 'Do-Follow',  cls: 'bg-green-100 text-green-700' },
  nofollow:  { label: 'No-Follow',  cls: 'bg-red-100 text-red-600' },
  sponsored: { label: 'Sponsored',  cls: 'bg-amber-100 text-amber-700' },
  ugc:       { label: 'UGC',        cls: 'bg-purple-100 text-purple-700' },
};

export default function PremiumSitesList({ sites }: { sites: PublisherSite[] }) {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(sites.length / ITEMS_PER_PAGE);
  const start = (page - 1) * ITEMS_PER_PAGE;
  const paginated = sites.slice(start, start + ITEMS_PER_PAGE);

  function getPageNumbers() {
    if (totalPages <= 7) return Array.from({ length: totalPages }, (_, i) => i + 1);
    const pages: (number | '...')[] = [1];
    if (page > 3) pages.push('...');
    for (let i = Math.max(2, page - 1); i <= Math.min(totalPages - 1, page + 1); i++) {
      pages.push(i);
    }
    if (page < totalPages - 2) pages.push('...');
    pages.push(totalPages);
    return pages;
  }

  if (sites.length === 0) {
    return (
      <div className="py-20 text-center text-gray-400">
        <Globe className="w-12 h-12 mx-auto mb-3 opacity-30" />
        <p className="font-semibold text-lg">No sites listed yet</p>
        <p className="text-sm mt-1">Check back soon — we&apos;re adding premium publishers.</p>
      </div>
    );
  }

  return (
    <>
      <div className="divide-y divide-gray-100">
        {paginated.map((site) => {
          const linkStyle = LINK_STYLE[site.link_type] ?? { label: site.link_type, cls: 'bg-gray-100 text-gray-600' };
          return (
            <div key={site.id} className="p-6 md:p-8 hover:bg-blue-50/30 transition-all duration-300 group">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="w-24 h-16 flex-shrink-0 bg-white rounded-xl border border-gray-200 p-2 flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow group-hover:border-[#00BCD4] overflow-hidden">
                  <SiteLogo src={site.logo_url} domain={site.domain} />
                </div>
                <div className="flex-grow min-w-0">
                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-[#00BCD4] transition-colors truncate">
                    {site.domain}
                  </h3>
                  <div className="flex flex-wrap gap-3 mt-2">
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                      DA {site.da}+
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-bold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                      {site.traffic}{UNIT_LABEL[site.traffic_unit] ?? ''}
                    </span>
                    <span className={`inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full ${linkStyle.cls}`}>
                      {linkStyle.label}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-4 flex-shrink-0">
                  <div className="text-right">
                    {site.is_sale && site.original_price && (
                      <span className="text-gray-400 line-through text-sm block">${site.original_price}</span>
                    )}
                    {site.is_sale && (
                      <span className="text-xs font-bold text-red-500 block leading-none mb-0.5">SALE</span>
                    )}
                    <span className="text-2xl font-extrabold text-[#00BCD4]">${site.price}</span>
                  </div>
                  <Link
                    href="/contact-us"
                    className="inline-block bg-[#FFC107] hover:bg-yellow-500 text-white font-bold py-2.5 px-6 rounded-lg transition-all uppercase text-sm tracking-wider shadow-md hover:shadow-lg transform active:scale-95 whitespace-nowrap"
                  >
                    Buy Now
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {totalPages > 1 && (
        <div className="px-6 py-5 border-t border-gray-100 flex items-center justify-between gap-4 flex-wrap">
          <p className="text-sm text-gray-500">
            Showing <span className="font-semibold text-slate-700">{start + 1}–{Math.min(start + ITEMS_PER_PAGE, sites.length)}</span> of{' '}
            <span className="font-semibold text-slate-700">{sites.length}</span> publishers
          </p>
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-semibold border border-gray-200 text-slate-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              <ChevronLeft className="w-4 h-4" /> Prev
            </button>

            {getPageNumbers().map((p, idx) =>
              p === '...' ? (
                <span key={`ellipsis-${idx}`} className="px-2 text-gray-400 select-none">…</span>
              ) : (
                <button
                  key={p}
                  onClick={() => setPage(p as number)}
                  className={`w-9 h-9 rounded-lg text-sm font-bold transition-colors ${
                    page === p
                      ? 'bg-[#00BCD4] text-white shadow-sm'
                      : 'border border-gray-200 text-slate-600 hover:bg-gray-50'
                  }`}
                >
                  {p}
                </button>
              )
            )}

            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-semibold border border-gray-200 text-slate-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              Next <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
