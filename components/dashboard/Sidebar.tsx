'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { Globe, Users, LogOut, LayoutDashboard } from 'lucide-react';

const BASE = '/ranklink-admin-9x7k2p';

const NAV = [
  { href: BASE, label: 'Overview', icon: LayoutDashboard },
  { href: `${BASE}/sites`, label: 'Publisher Sites', icon: Globe },
  { href: `${BASE}/users`, label: 'Users', icon: Users },
];

interface SidebarProps {
  email: string;
}

export default function Sidebar({ email }: SidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const initials = email?.split('@')[0]?.slice(0, 2).toUpperCase() ?? 'AD';

  async function handleLogout() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push(`${BASE}/login`);
    router.refresh();
  }

  return (
    <aside className="w-64 bg-[#2D2B4A] min-h-screen flex flex-col flex-shrink-0">
      {/* Logo */}
      <div className="px-6 py-6 border-b border-white/10">
        <span className="text-white font-extrabold text-lg tracking-tight">
          Rank<span className="text-[#00BCD4]">Link</span>
        </span>
        <p className="text-gray-400 text-xs mt-0.5">Admin Panel</p>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-4 py-6 space-y-1">
        {NAV.map(({ href, label, icon: Icon }) => {
          const active = pathname === href || (href !== BASE && pathname.startsWith(href));
          return (
            <Link
              key={href}
              href={href}
              className={`flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                active
                  ? 'bg-[#00BCD4] text-white shadow-md'
                  : 'text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              <Icon className="w-4 h-4 flex-shrink-0" />
              {label}
            </Link>
          );
        })}
      </nav>

      {/* User + Logout */}
      <div className="px-4 py-5 border-t border-white/10">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-9 h-9 rounded-full bg-[#00BCD4] flex items-center justify-center text-white text-sm font-extrabold flex-shrink-0">
            {initials}
          </div>
          <div className="overflow-hidden">
            <p className="text-white text-xs font-semibold truncate">{email}</p>
            <p className="text-gray-400 text-[11px]">Administrator</p>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-gray-400 hover:text-red-400 text-sm transition-colors w-full px-2"
        >
          <LogOut className="w-4 h-4" />
          Sign out
        </button>
      </div>
    </aside>
  );
}
