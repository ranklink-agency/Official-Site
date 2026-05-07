import { createClient } from '@/lib/supabase/server';
import { createAdminClient } from '@/lib/supabase/admin';
import { redirect } from 'next/navigation';
import Sidebar from '@/components/dashboard/Sidebar';
import EmailsManager from '@/components/dashboard/EmailsManager';
import { Mail } from 'lucide-react';

const BASE = '/ranklink-admin-9x7k2p';

export default async function EmailsPage() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect(`${BASE}/login`);

  const admin = createAdminClient();
  const { data: rows } = await admin.from('contact_emails').select('email').order('created_at', { ascending: true });
  const emails = rows?.map((r: { email: string }) => r.email) ?? [];

  return (
    <div className="flex flex-1 overflow-hidden">
      <Sidebar email={user.email!} />
      <main className="flex-1 overflow-y-auto p-8 bg-[#F0F4F8]">
        <div className="flex items-center gap-3 mb-2">
          <Mail className="w-6 h-6 text-[#00BCD4]" />
          <h1 className="text-2xl font-extrabold text-slate-800">Receive Emails</h1>
        </div>
        <p className="text-gray-500 text-sm mb-8">
          Add up to 3 email addresses that will receive all contact form submissions from the website.
        </p>
        <EmailsManager initial={emails} />

        <div className="mt-10 bg-white rounded-2xl shadow-sm border border-gray-100 p-6 max-w-xl">
          <h2 className="text-sm font-bold text-slate-700 mb-3">Supabase Setup Required</h2>
          <p className="text-xs text-gray-500 mb-3">
            Run the following SQL in your Supabase SQL Editor if you haven&apos;t already:
          </p>
          <pre className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-xs text-gray-700 overflow-x-auto whitespace-pre-wrap">
{`CREATE TABLE IF NOT EXISTS contact_emails (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL UNIQUE,
  created_at timestamptz DEFAULT now()
);
ALTER TABLE contact_emails ENABLE ROW LEVEL SECURITY;
CREATE POLICY "service_role_all" ON contact_emails
  FOR ALL USING (true);`}
          </pre>
        </div>
      </main>
    </div>
  );
}
