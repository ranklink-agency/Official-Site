import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get('authorization');
  if (process.env.CRON_SECRET && authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  let status = 'ok';
  let message = 'Health check passed';

  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || `https://${req.headers.get('host')}`;
    const res = await fetch(`${baseUrl}/api/health`, { method: 'GET' });
    if (!res.ok) {
      status = 'error';
      message = `Health endpoint returned ${res.status}`;
    } else {
      const data = await res.json();
      message = `OK — ${data.timestamp}`;
    }
  } catch (err) {
    status = 'error';
    message = err instanceof Error ? err.message : 'Unknown error';
  }

  try {
    const admin = createAdminClient();
    await admin.from('health').insert({ status, message, checked_at: new Date().toISOString() });
  } catch {
    // If DB write fails, still return response
  }

  return NextResponse.json({ status, message, checked_at: new Date().toISOString() });
}
