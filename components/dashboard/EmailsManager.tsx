'use client';

import { useState } from 'react';
import { Trash2, Plus, Mail } from 'lucide-react';

interface EmailsManagerProps {
  initial: string[];
}

export default function EmailsManager({ initial }: EmailsManagerProps) {
  const [emails, setEmails] = useState<string[]>(initial);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  async function addEmail(e: React.FormEvent) {
    e.preventDefault();
    setError('');
    setSuccess('');
    const val = input.trim().toLowerCase();
    if (!val) return;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) { setError('Please enter a valid email address.'); return; }
    if (emails.includes(val)) { setError('This email is already added.'); return; }
    if (emails.length >= 3) { setError('Maximum 3 recipient emails allowed.'); return; }
    setLoading(true);
    const res = await fetch('/api/admin/emails', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: val }) });
    setLoading(false);
    if (res.ok) { setEmails(prev => [...prev, val]); setInput(''); setSuccess('Email added successfully.'); }
    else { const d = await res.json(); setError(d.error || 'Failed to add email.'); }
  }

  async function removeEmail(email: string) {
    setError('');
    setSuccess('');
    setLoading(true);
    const res = await fetch('/api/admin/emails', { method: 'DELETE', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email }) });
    setLoading(false);
    if (res.ok) { setEmails(prev => prev.filter(e => e !== email)); setSuccess('Email removed.'); }
    else { setError('Failed to remove email.'); }
  }

  return (
    <div className="max-w-xl">
      {error && <div className="mb-4 bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg">{error}</div>}
      {success && <div className="mb-4 bg-green-50 border border-green-200 text-green-700 text-sm px-4 py-3 rounded-lg">{success}</div>}

      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden mb-6">
        {emails.length === 0 ? (
          <div className="py-12 text-center text-gray-400 text-sm">
            <Mail className="w-8 h-8 mx-auto mb-3 opacity-30" />
            No recipient emails configured yet.
          </div>
        ) : (
          <div className="divide-y divide-gray-50">
            {emails.map((email, i) => (
              <div key={email} className="flex items-center justify-between px-6 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-cyan-50 flex items-center justify-center text-[#00BCD4] font-extrabold text-xs flex-shrink-0">
                    {i + 1}
                  </div>
                  <span className="text-slate-800 text-sm font-medium">{email}</span>
                </div>
                <button
                  onClick={() => removeEmail(email)}
                  disabled={loading}
                  className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all disabled:opacity-40"
                  title="Remove email"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {emails.length < 3 && (
        <form onSubmit={addEmail} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-sm font-bold text-slate-700 mb-4">Add Recipient Email ({emails.length}/3 used)</h3>
          <div className="flex gap-3">
            <input
              type="email"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="recipient@example.com"
              className="flex-1 border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#00BCD4] focus:border-transparent"
              disabled={loading}
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="flex items-center gap-2 bg-[#00BCD4] hover:bg-[#0097A7] text-white font-bold px-5 py-2.5 rounded-lg text-sm transition-colors disabled:opacity-60 flex-shrink-0"
            >
              <Plus className="w-4 h-4" />
              Add
            </button>
          </div>
        </form>
      )}

      {emails.length >= 3 && (
        <p className="text-xs text-amber-600 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3">
          Maximum of 3 recipient emails reached. Remove one to add another.
        </p>
      )}
    </div>
  );
}
