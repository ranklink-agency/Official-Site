import { createClient } from '@/lib/supabase/server';
import { createAdminClient } from '@/lib/supabase/admin';
import { redirect } from 'next/navigation';
import Sidebar from '@/components/dashboard/Sidebar';
import { Globe, Users } from 'lucide-react';
import Link from 'next/link';

const BASE = '/ranklink-admin-9x7k2p';

export default async function DashboardPage() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect(`${BASE}/login`);

  const admin = createAdminClient();
  const { count: sitesCount } = await admin
    .from('publisher_sites')
    .select('*', { count: 'exact', head: true });

  const { data: usersData } = await admin.auth.admin.listUsers();
  const usersCount = usersData?.users?.length ?? 0;

  return (
    <div className="flex min-h-screen bg-[#F0F4F8]">
      <Sidebar email={user.email!} />
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-extrabold text-slate-800 mb-1">Overview</h1>
        <p className="text-gray-500 text-sm mb-8">Welcome back, {user.email}</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex items-center gap-5">
            <div className="w-12 h-12 bg-cyan-50 rounded-xl flex items-center justify-center">
              <Globe className="w-6 h-6 text-[#00BCD4]" />
            </div>
            <div>
              <p className="text-3xl font-extrabold text-slate-800">{sitesCount ?? 0}</p>
              <p className="text-sm text-gray-500">Publisher Sites</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex items-center gap-5">
            <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-purple-500" />
            </div>
            <div>
              <p className="text-3xl font-extrabold text-slate-800">{usersCount}</p>
              <p className="text-sm text-gray-500">Admin Users</p>
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          <Link
            href={`${BASE}/sites/new`}
            className="bg-[#00BCD4] hover:bg-[#0097A7] text-white font-bold px-6 py-3 rounded-xl text-sm transition-colors shadow-md"
          >
            + Add Publisher Site
          </Link>
          <Link
            href={`${BASE}/sites`}
            className="bg-white hover:bg-gray-50 text-slate-700 font-bold px-6 py-3 rounded-xl text-sm transition-colors border border-gray-200 shadow-sm"
          >
            View All Sites
          </Link>
        </div>
      </main>
    </div>
  );
}
