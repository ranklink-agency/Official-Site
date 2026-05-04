import { createClient } from '@/lib/supabase/server';
import { createAdminClient } from '@/lib/supabase/admin';
import { redirect } from 'next/navigation';
import Sidebar from '@/components/dashboard/Sidebar';
import Link from 'next/link';
import Image from 'next/image';
import { Pencil, Plus } from 'lucide-react';
import type { PublisherSite } from '@/lib/supabase/types';
import DeleteSiteButton from '@/components/dashboard/DeleteSiteButton';

const BASE = '/ranklink-admin-9x7k2p';

const UNIT_LABEL: Record<string, string> = {
  per_day: '/day',
  per_month: '/mo',
  per_year: '/yr',
};

const LINK_COLOR: Record<string, string> = {
  dofollow:  'bg-green-100 text-green-700',
  nofollow:  'bg-red-100 text-red-600',
  sponsored: 'bg-amber-100 text-amber-700',
  ugc:       'bg-purple-100 text-purple-700',
};

const LINK_LABEL: Record<string, string> = {
  dofollow: 'Do-Follow',
  nofollow: 'No-Follow',
  sponsored: 'Sponsored',
  ugc: 'UGC',
};

export default async function SitesPage() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect(`${BASE}/login`);

  const admin = createAdminClient();
  const { data: sites, error } = await admin
    .from('publisher_sites')
    .select('*')
    .order('created_at', { ascending: false });

  return (
    <div className="flex min-h-screen bg-[#F0F4F8]">
      <Sidebar email={user.email!} />
      <main className="flex-1 p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-extrabold text-slate-800">Publisher Sites</h1>
            <p className="text-gray-500 text-sm mt-0.5">{sites?.length ?? 0} sites total</p>
          </div>
          <Link
            href={`${BASE}/sites/new`}
            className="flex items-center gap-2 bg-[#00BCD4] hover:bg-[#0097A7] text-white font-bold px-5 py-2.5 rounded-xl text-sm transition-colors shadow-md"
          >
            <Plus className="w-4 h-4" />
            Add Site
          </Link>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg mb-6">
            Error loading sites: {error.message}
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {!sites || sites.length === 0 ? (
            <div className="py-20 text-center text-gray-400">
              <p className="font-semibold text-lg">No sites yet</p>
              <p className="text-sm mt-1">Click "Add Site" to get started</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left px-6 py-4 font-semibold text-gray-500 uppercase text-xs tracking-wider">Site</th>
                    <th className="text-left px-6 py-4 font-semibold text-gray-500 uppercase text-xs tracking-wider">DA</th>
                    <th className="text-left px-6 py-4 font-semibold text-gray-500 uppercase text-xs tracking-wider">Traffic</th>
                    <th className="text-left px-6 py-4 font-semibold text-gray-500 uppercase text-xs tracking-wider">Link Type</th>
                    <th className="text-left px-6 py-4 font-semibold text-gray-500 uppercase text-xs tracking-wider">Price</th>
                    <th className="text-left px-6 py-4 font-semibold text-gray-500 uppercase text-xs tracking-wider">Sale</th>
                    <th className="px-6 py-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-50">
                  {(sites as PublisherSite[]).map((site) => (
                    <tr key={site.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg border border-gray-100 bg-gray-50 flex items-center justify-center overflow-hidden flex-shrink-0 shadow-sm">
                            {site.logo_url ? (
                              <Image src={site.logo_url} alt={site.domain} width={40} height={40} className="object-contain w-full h-full p-0.5" unoptimized />
                            ) : (
                              <span className="text-gray-400 text-xs font-bold">{site.domain?.slice(0,2).toUpperCase()}</span>
                            )}
                          </div>
                          <div>
                            <p className="font-semibold text-slate-800">{site.domain}</p>
                            <a href={site.site_url} target="_blank" rel="noopener noreferrer" className="text-xs text-[#00BCD4] hover:underline truncate max-w-[180px] block">{site.site_url}</a>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 font-bold text-slate-700">DA {site.da}+</td>
                      <td className="px-6 py-4 text-gray-600 whitespace-nowrap">
                        {site.traffic}{UNIT_LABEL[site.traffic_unit] ?? ''}
                      </td>
                      <td className="px-6 py-4">
                        <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${LINK_COLOR[site.link_type] ?? 'bg-gray-100 text-gray-500'}`}>
                          {LINK_LABEL[site.link_type] ?? site.link_type}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {site.is_sale && site.original_price && (
                          <span className="text-gray-400 line-through text-xs mr-1">${site.original_price}</span>
                        )}
                        <span className="font-extrabold text-[#00BCD4]">${site.price}</span>
                      </td>
                      <td className="px-6 py-4">
                        {site.is_sale ? (
                          <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-0.5 rounded-full">SALE</span>
                        ) : (
                          <span className="bg-gray-100 text-gray-400 text-xs font-bold px-2 py-0.5 rounded-full">—</span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 justify-end">
                          <Link
                            href={`${BASE}/sites/${site.id}/edit`}
                            className="p-2 text-gray-400 hover:text-[#00BCD4] hover:bg-cyan-50 rounded-lg transition-colors"
                          >
                            <Pencil className="w-4 h-4" />
                          </Link>
                          <DeleteSiteButton id={site.id} domain={site.domain} />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
