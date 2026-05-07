import { NextRequest, NextResponse } from 'next/server';
import { createAdminClient } from '@/lib/supabase/admin';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, subject, message, source } = body;

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const admin = createAdminClient();
    const { data: emailRows } = await admin.from('contact_emails').select('email');
    const recipients: string[] = emailRows?.map((r: { email: string }) => r.email) ?? [];

    if (recipients.length > 0 && process.env.RESEND_API_KEY) {
      try {
        const { Resend } = await import('resend');
        const resend = new Resend(process.env.RESEND_API_KEY);

        const subjectLine = subject ? `New Enquiry: ${subject}` : 'New Contact Form Submission';
        const html = `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2D2B4A; border-bottom: 2px solid #00BCD4; padding-bottom: 8px;">
              New Message — Rank Link Agency
            </h2>
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <tr><td style="padding: 8px 0; color: #666; width: 120px; font-weight: bold;">Source</td><td style="padding: 8px 0; color: #333;">${source || 'Contact Us'}</td></tr>
              <tr><td style="padding: 8px 0; color: #666; font-weight: bold;">Name</td><td style="padding: 8px 0; color: #333;">${name}</td></tr>
              <tr><td style="padding: 8px 0; color: #666; font-weight: bold;">Email</td><td style="padding: 8px 0; color: #333;"><a href="mailto:${email}">${email}</a></td></tr>
              ${subject ? `<tr><td style="padding: 8px 0; color: #666; font-weight: bold;">Subject</td><td style="padding: 8px 0; color: #333;">${subject}</td></tr>` : ''}
              <tr>
                <td style="padding: 8px 0; color: #666; font-weight: bold; vertical-align: top;">Message</td>
                <td style="padding: 8px 0; color: #333; white-space: pre-line;">${message}</td>
              </tr>
            </table>
            <p style="margin-top: 24px; color: #999; font-size: 12px;">
              Sent via Rank Link Agency website · ${new Date().toUTCString()}
            </p>
          </div>
        `;

        await resend.emails.send({
          from: 'Rank Link Agency <no-reply@ranklinkagency.com>',
          to: recipients,
          replyTo: email,
          subject: subjectLine,
          html,
        });
      } catch {
        // Silent failure — email errors are never surfaced to the UI
      }
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
