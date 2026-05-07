'use client';

import { useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function SeoContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  function validate() {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = 'Required';
    if (!email.trim()) e.email = 'Required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Invalid email';
    if (!message.trim()) e.message = 'Required';
    return e;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setErrors({});
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone, message, source: 'SEO Services' }),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  }

  const base = 'w-full px-4 py-3 bg-gray-50 border rounded-lg focus:outline-none focus:border-[#4FC3F7] focus:ring-2 focus:ring-cyan-100 text-gray-700 transition-all';
  const ok = `${base} border-gray-200`;
  const err = `${base} border-red-400 bg-red-50`;

  if (status === 'success') {
    return (
      <div className="text-center py-10">
        <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-white font-bold text-lg mb-1">Message Sent!</p>
        <p className="text-gray-300 text-sm">We&apos;ll get back to you within 24 hours.</p>
        <button onClick={() => setStatus('idle')} className="mt-4 text-[#FFC107] text-sm hover:underline">Send another</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div>
        <input type="text" value={name} onChange={e => setName(e.target.value)}
          placeholder={errors.name ? `Name — ${errors.name}` : 'Name'}
          className={errors.name ? err : ok} />
      </div>
      <div>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)}
          placeholder={errors.email ? `Email — ${errors.email}` : 'Email'}
          className={errors.email ? err : ok} />
      </div>
      <div>
        <input type="tel" value={phone} onChange={e => setPhone(e.target.value)}
          placeholder="Phone Number (optional)"
          className={ok} />
      </div>
      <div>
        <textarea value={message} onChange={e => setMessage(e.target.value)} rows={4}
          placeholder={errors.message ? `Message — ${errors.message}` : 'Message'}
          className={`${errors.message ? err : ok} resize-none`} />
      </div>
      {status === 'error' && (
        <p className="text-red-300 text-xs text-center">Something went wrong. Please try again.</p>
      )}
      <button type="submit" disabled={status === 'loading'}
        className="w-full bg-[#00BCD4] hover:bg-cyan-600 text-white font-bold py-4 rounded-lg uppercase tracking-wider transition-colors shadow-md hover:shadow-lg disabled:opacity-60 disabled:cursor-not-allowed">
        {status === 'loading' ? 'SENDING…' : 'SEND MESSAGE'}
      </button>
    </form>
  );
}
