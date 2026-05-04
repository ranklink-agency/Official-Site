import { createClient } from '@/lib/supabase/server';
import { redirect } from 'next/navigation';
import Sidebar from '@/components/dashboard/Sidebar';
import SiteForm from '@/components/dashboard/SiteForm';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';

const BASE = '/ranklink-admin-9x7k2p';

export default async function NewSitePage() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect(`${BASE}/login`);

  return (
    <div className="flex min-h-screen bg-[#F0F4F8]">
      <Sidebar email={user.email!} />
      <main className="flex-1 p-8 max-w-3xl">
        <Link href={`${BASE}/sites`} className="flex items-center gap-1 text-sm text-gray-500 hover:text-[#00BCD4] mb-6 transition-colors">
          <ChevronLeft className="w-4 h-4" /> Back to sites
        </Link>
        <h1 className="text-2xl font-extrabold text-slate-800 mb-6">Add Publisher Site</h1>
        <SiteForm />
      </main>
    </div>
  );
}
