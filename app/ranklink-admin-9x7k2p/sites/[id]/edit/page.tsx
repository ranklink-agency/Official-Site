import { createClient } from '@/lib/supabase/server';
import { createAdminClient } from '@/lib/supabase/admin';
import { redirect, notFound } from 'next/navigation';
import Sidebar from '@/components/dashboard/Sidebar';
import SiteForm from '@/components/dashboard/SiteForm';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import type { PublisherSite } from '@/lib/supabase/types';

const BASE = '/ranklink-admin-9x7k2p';

export default async function EditSitePage({ params }: { params: { id: string } }) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect(`${BASE}/login`);

  const admin = createAdminClient();
  const { data: site, error } = await admin
    .from('publisher_sites')
    .select('*')
    .eq('id', params.id)
    .single();

  if (error || !site) notFound();

  return (
    <div className="flex h-full bg-[#F0F4F8]">
      <Sidebar email={user.email!} />
      <main className="flex-1 overflow-y-auto p-8 max-w-3xl">
        <Link href={`${BASE}/sites`} className="flex items-center gap-1 text-sm text-gray-500 hover:text-[#00BCD4] mb-6 transition-colors">
          <ChevronLeft className="w-4 h-4" /> Back to sites
        </Link>
        <h1 className="text-2xl font-extrabold text-slate-800 mb-6">Edit: {site.domain}</h1>
        <SiteForm site={site as PublisherSite} />
      </main>
    </div>
  );
}
