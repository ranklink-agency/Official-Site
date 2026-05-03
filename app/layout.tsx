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
  title: {
    default: 'Rank Link Agency — Buy High-Quality Guest Posting & SEO Backlinks',
    template: '%s | Rank Link Agency',
  },
  description:
    'Rank Link Agency offers fast, affordable High-Quality Contextual Guest Posts with dofollow backlinks from High Authority niche websites. Boost your Google rankings today.',
  keywords: [
    'guest posting', 'seo backlinks', 'link building', 'domain authority',
    'blogger outreach', 'dofollow links', 'niche edits', 'premium backlinks',
  ],
  authors: [{ name: 'Rank Link Agency' }],
  creator: 'Rank Link Agency',
  publisher: 'Rank Link Agency',
  metadataBase: new URL('https://ranklinkagency.com'),
  alternates: { canonical: '/' },
  icons: {
    icon: [
      { url: '/rank_link_logo_nobg.png', type: 'image/png' },
    ],
    shortcut: '/rank_link_logo_nobg.png',
    apple: '/rank_link_logo_nobg.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://ranklinkagency.com',
    siteName: 'Rank Link Agency',
    title: 'Rank Link Agency — Buy High-Quality Guest Posting & SEO Backlinks',
    description:
      'Boost your Google rankings with premium contextual guest posts and dofollow backlinks from high-authority niche websites.',
    images: [
      {
        url: '/rank_link_logo_nobg.png',
        width: 1200,
        height: 630,
        alt: 'Rank Link Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rank Link Agency — Buy High-Quality Guest Posting & SEO Backlinks',
    description:
      'Boost your Google rankings with premium contextual guest posts and dofollow backlinks from high-authority niche websites.',
    images: ['/rank_link_logo_nobg.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
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
