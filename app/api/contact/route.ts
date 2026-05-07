import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';
import { Resend } from 'resend';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message, source } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    if (process.env.RESEND_API_KEY) {
      try {
        const admin = createAdminClient();
        const { data: emailRows } = await admin
          .from('contact_emails')
          .select('email')
          .order('created_at', { ascending: true });

        const recipients: string[] = emailRows?.map((r: { email: string }) => r.email) ?? [];

        if (recipients.length > 0) {
          const resend = new Resend(process.env.RESEND_API_KEY);

          const subjectLine = subject
            ? `New Enquiry: ${subject}`
            : 'New Contact Form Submission';

          const html = `
            <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;">
              <h2 style="color:#2D2B4A;border-bottom:2px solid #00BCD4;padding-bottom:8px;margin-bottom:20px;">
                New Message — Rank Link Agency
              </h2>
              <table style="width:100%;border-collapse:collapse;">
                <tr>
                  <td style="padding:8px 0;color:#888;font-weight:bold;width:110px;vertical-align:top;">Source</td>
                  <td style="padding:8px 0;color:#333;">${source || 'Contact Us'}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;color:#888;font-weight:bold;vertical-align:top;">Name</td>
                  <td style="padding:8px 0;color:#333;">${name}</td>
                </tr>
                <tr>
                  <td style="padding:8px 0;color:#888;font-weight:bold;vertical-align:top;">Email</td>
                  <td style="padding:8px 0;color:#333;"><a href="mailto:${email}" style="color:#00BCD4;">${email}</a></td>
                </tr>
                ${subject ? `
                <tr>
                  <td style="padding:8px 0;color:#888;font-weight:bold;vertical-align:top;">Subject</td>
                  <td style="padding:8px 0;color:#333;">${subject}</td>
                </tr>` : ''}
                <tr>
                  <td style="padding:8px 0;color:#888;font-weight:bold;vertical-align:top;">Message</td>
                  <td style="padding:8px 0;color:#333;white-space:pre-line;">${message}</td>
                </tr>
              </table>
              <p style="margin-top:24px;color:#aaa;font-size:11px;">
                Submitted via Rank Link Agency website &middot; ${new Date().toUTCString()}
              </p>
            </div>
          `;

          await resend.emails.send({
            from: 'Rank Link Agency <onboarding@resend.dev>',
            to: recipients,
            reply_to: email,
            subject: subjectLine,
            html,
          });
        }
      } catch {
        // Silent failure — never surfaced to the UI
      }
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
