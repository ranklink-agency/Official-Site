import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingChat from '@/components/FloatingChat';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Rank Link Agency - Buy High-Quality Guest Posting SEO Backlinks',
  description:
    'Rank Link Agency offers fast, affordable High-Quality Contextual Guest Posts with dofollow backlinks from High Authority niche websites. Boost your rankings today.',
  keywords: 'guest posting, seo backlinks, link building, domain authority, blogger outreach',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="bg-[#FAFEFA] text-slate-800 antialiased font-sans">
        <Navbar />
        <main className="min-h-screen flex flex-col">
          {children}
        </main>
        <Footer />
        <FloatingChat />
      </body>
    </html>
  );
}
