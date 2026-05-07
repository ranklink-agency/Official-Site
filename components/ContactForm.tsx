'use client';

import { useState } from 'react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  function validate() {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = 'Name is required.';
    if (!email.trim()) e.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) e.email = 'Enter a valid email address.';
    if (!subject.trim()) e.subject = 'Subject is required.';
    if (!message.trim()) e.message = 'Message is required.';
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
        body: JSON.stringify({ name, company, phone, email, subject, message, source: 'Contact Us' }),
      });
      if (res.ok) {
        setStatus('success');
        setName(''); setCompany(''); setPhone(''); setEmail(''); setSubject(''); setMessage('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  const field = 'w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-[#00BCD4] focus:ring-4 focus:ring-cyan-100/50 outline-none transition-all text-sm';
  const errField = 'w-full px-4 py-3 rounded-lg bg-red-50 border border-red-300 focus:border-red-400 focus:ring-4 focus:ring-red-100/50 outline-none transition-all text-sm';

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-slate-800 mb-2">Message Sent!</h3>
        <p className="text-gray-500 text-sm max-w-sm">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
        <button onClick={() => setStatus('idle')} className="mt-6 text-sm text-[#00BCD4] hover:underline font-medium">Send another message</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
            Name <span className="text-red-500">*</span>
          </label>
          <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Your Name"
            className={errors.name ? errField : field} />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Company</label>
          <input type="text" value={company} onChange={e => setCompany(e.target.value)} placeholder="Company Name" className={field} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">Phone</label>
          <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Phone Number" className={field} />
        </div>
        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
            Email <span className="text-red-500">*</span>
          </label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email Address"
            className={errors.email ? errField : field} />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
      </div>
      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
          Subject <span className="text-red-500">*</span>
        </label>
        <input type="text" value={subject} onChange={e => setSubject(e.target.value)} placeholder="How can we help?"
          className={errors.subject ? errField : field} />
        {errors.subject && <p className="text-red-500 text-xs mt-1">{errors.subject}</p>}
      </div>
      <div>
        <label className="block text-xs font-bold text-slate-700 mb-1.5 uppercase tracking-wide">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea rows={4} value={message} onChange={e => setMessage(e.target.value)} placeholder="Write your message here..."
          className={`${errors.message ? errField : field} resize-none`} />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>
      {status === 'error' && (
        <p className="text-red-500 text-sm bg-red-50 border border-red-200 rounded-lg px-4 py-3">
          Something went wrong. Please try again or contact us directly.
        </p>
      )}
      <button type="submit" disabled={status === 'loading'}
        className="w-full bg-[#FFC107] hover:bg-yellow-500 text-white font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:scale-95 uppercase tracking-wider text-sm disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none">
        {status === 'loading' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  );
}
