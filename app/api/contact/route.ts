import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const TO_EMAIL = 'ranklink7@gmail.com';

export async function POST(req: NextRequest) {
  console.log('[contact] POST received');

  try {
    const body = await req.json();
    const { name, email, subject, message, source } = body;
    console.log('[contact] fields:', { name, email, subject, source });

    if (!name || !email || !message) {
      console.log('[contact] missing required fields');
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('[contact] RESEND_API_KEY is not set');
      return NextResponse.json({ success: true });
    }

    const resend = new Resend(apiKey);

    const subjectLine = subject
      ? `New Enquiry: ${subject}`
      : 'New Contact Form Submission';

    const html = `
      <div style="font-family:sans-serif;max-width:600px;margin:0 auto;padding:24px;">
        <h2 style="color:#2D2B4A;border-bottom:2px solid #00BCD4;padding-bottom:8px;">
          New Message — Rank Link Agency
        </h2>
        <table style="width:100%;border-collapse:collapse;margin-top:16px;">
          <tr>
            <td style="padding:8px 0;color:#888;font-weight:bold;width:110px;">Source</td>
            <td style="padding:8px 0;color:#333;">${source || 'Website'}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#888;font-weight:bold;">Name</td>
            <td style="padding:8px 0;color:#333;">${name}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;color:#888;font-weight:bold;">Email</td>
            <td style="padding:8px 0;color:#333;">${email}</td>
          </tr>
          ${subject ? `<tr><td style="padding:8px 0;color:#888;font-weight:bold;">Subject</td><td style="padding:8px 0;color:#333;">${subject}</td></tr>` : ''}
          <tr>
            <td style="padding:8px 0;color:#888;font-weight:bold;vertical-align:top;">Message</td>
            <td style="padding:8px 0;color:#333;white-space:pre-line;">${message}</td>
          </tr>
        </table>
        <p style="margin-top:24px;color:#aaa;font-size:11px;">
          ${new Date().toUTCString()} · Rank Link Agency website
        </p>
      </div>
    `;

    console.log('[contact] sending email to', TO_EMAIL);

    const { data, error } = await resend.emails.send({
      from: 'Rank Link Agency <onboarding@resend.dev>',
      to: [TO_EMAIL],
      reply_to: email,
      subject: subjectLine,
      html,
    });

    if (error) {
      console.error('[contact] Resend error:', JSON.stringify(error));
    } else {
      console.log('[contact] email sent successfully, id:', data?.id);
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('[contact] unexpected error:', err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
