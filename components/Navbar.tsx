'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  const pathname = usePathname();

  const toggleSubMenu = (name: string) => {
    setOpenSubMenu(openSubMenu === name ? null : name);
  };

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm font-medium">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex-shrink-0 flex items-center gap-2 cursor-pointer group">
            <Image
              src="/rank_link_logo_nobg.png"
              alt="Rank Link Agency Logo"
              width={44}
              height={44}
              className="transition-transform duration-300 group-hover:scale-110 object-contain"
              priority
            />
            <span className="font-bold text-2xl text-slate-800 transition-colors">
              Rank Link Agency
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {NAV_LINKS.map((link) => {
              const hasChildren = link.children && link.children.length > 0;
              const isActive =
                pathname === link.href ||
                (hasChildren && link.children?.some((child) => pathname === child.href));

              return (
                <div key={link.name} className="relative group">
                  {hasChildren ? (
                    <div className="flex items-center gap-1 cursor-pointer text-gray-600 hover:text-brand-cyan font-semibold text-sm h-20 relative">
                      <span className="relative">
                        {link.name}
                        <span className="absolute left-0 bottom-[-2px] w-0 h-0.5 bg-brand-cyan transition-all duration-300 group-hover:w-full"></span>
                      </span>
                      <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                      <div className="absolute top-16 left-0 w-48 bg-white shadow-lg rounded-md border border-gray-100 hidden group-hover:block pt-2">
                        {link.children?.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-cyan hover:pl-6 transition-all duration-300"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`hover:text-brand-cyan transition-colors flex items-center gap-1 text-sm font-semibold relative group/link ${
                        isActive ? 'text-brand-cyan' : 'text-gray-600'
                      }`}
                    >
                      {link.name}
                      <span
                        className={`absolute left-0 bottom-[-2px] h-0.5 bg-brand-cyan transition-all duration-300 ${
                          isActive ? 'w-full' : 'w-0 group-hover/link:w-full'
                        }`}
                      ></span>
                    </Link>
                  )}
                </div>
              );
            })}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none transform active:scale-90 transition-transform"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t overflow-y-auto max-h-[80vh] animate-fade-in-up">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_LINKS.map((link) => {
              const hasChildren = link.children && link.children.length > 0;
              if (hasChildren) {
                return (
                  <div key={link.name}>
                    <button
                      onClick={() => toggleSubMenu(link.name)}
                      className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-cyan hover:bg-gray-50 transition-colors"
                    >
                      {link.name}
                      <ChevronDown
                        className={`w-4 h-4 transform transition-transform duration-300 ${
                          openSubMenu === link.name ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openSubMenu === link.name && (
                      <div className="pl-6 space-y-1 bg-gray-50/50">
                        {link.children?.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            onClick={() => setIsOpen(false)}
                            className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-brand-cyan hover:pl-5 transition-all"
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-brand-cyan hover:bg-gray-50 hover:pl-5 transition-all"
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
