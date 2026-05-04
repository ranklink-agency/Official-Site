import { createClient } from '@/lib/supabase/server';
import { createAdminClient } from '@/lib/supabase/admin';
import { redirect } from 'next/navigation';
import Sidebar from '@/components/dashboard/Sidebar';
import { Users } from 'lucide-react';

const BASE = '/ranklink-admin-9x7k2p';

export default async function UsersPage() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect(`${BASE}/login`);

  const admin = createAdminClient();
  const { data: usersData } = await admin.auth.admin.listUsers();
  const users = usersData?.users ?? [];

  return (
    <div className="flex min-h-screen bg-[#F0F4F8]">
      <Sidebar email={user.email!} />
      <main className="flex-1 p-8">
        <div className="flex items-center gap-3 mb-8">
          <Users className="w-6 h-6 text-purple-500" />
          <div>
            <h1 className="text-2xl font-extrabold text-slate-800">Admin Users</h1>
            <p className="text-gray-500 text-sm mt-0.5">Manage via your Supabase Auth dashboard</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          {users.length === 0 ? (
            <div className="py-16 text-center text-gray-400">No users found</div>
          ) : (
            <div className="divide-y divide-gray-50">
              {users.map(u => (
                <div key={u.id} className="flex items-center gap-4 px-6 py-4">
                  <div className="w-10 h-10 rounded-full bg-[#00BCD4] flex items-center justify-center text-white text-sm font-extrabold flex-shrink-0">
                    {u.email?.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-800 text-sm">{u.email}</p>
                    <p className="text-xs text-gray-400">
                      Joined {new Date(u.created_at).toLocaleDateString()}
                      {u.id === user.id && <span className="ml-2 text-[#00BCD4] font-bold">(you)</span>}
                    </p>
                  </div>
                  <div className="ml-auto">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${u.email_confirmed_at ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'}`}>
                      {u.email_confirmed_at ? 'Confirmed' : 'Pending'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl px-5 py-4 text-sm text-amber-700">
          <strong>To add a new admin user:</strong> Go to your Supabase project → Authentication → Users → Invite user or Add user manually.
        </div>
      </main>
    </div>
  );
}
