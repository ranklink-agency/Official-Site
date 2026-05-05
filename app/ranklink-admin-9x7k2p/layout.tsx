import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard | Rank Link Agency',
  robots: { index: false, follow: false },
};

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="isolate" style={{ position: 'fixed', inset: 0, zIndex: 9999, display: 'flex', overflow: 'hidden', background: '#F0F4F8' }}>
      {children}
    </div>
  );
}
