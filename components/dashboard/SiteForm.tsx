'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import type { PublisherSite, TrafficUnit } from '@/lib/supabase/types';

const BASE = '/ranklink-admin-9x7k2p';

const TRAFFIC_UNITS: { value: TrafficUnit; label: string }[] = [
  { value: 'per_day', label: 'Per Day' },
  { value: 'per_month', label: 'Per Month' },
  { value: 'per_year', label: 'Per Year' },
];

interface SiteFormProps {
  site?: PublisherSite;
}

export default function SiteForm({ site }: SiteFormProps) {
  const router = useRouter();
  const isEdit = !!site;

  const [domain, setDomain] = useState(site?.domain ?? '');
  const [siteUrl, setSiteUrl] = useState(site?.site_url ?? '');
  const [logoUrl, setLogoUrl] = useState(site?.logo_url ?? '');
  const [da, setDa] = useState(site?.da?.toString() ?? '');
  const [trafficValue, setTrafficValue] = useState(site?.traffic_value?.toString() ?? '');
  const [trafficUnit, setTrafficUnit] = useState<TrafficUnit>(site?.traffic_unit ?? 'per_month');
  const [isSale, setIsSale] = useState(site?.is_sale ?? false);
  const [price, setPrice] = useState(site?.price?.toString() ?? '');
  const [originalPrice, setOriginalPrice] = useState(site?.original_price?.toString() ?? '');
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  async function handleLogoUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError('');
    try {
      const formData = new FormData();
      formData.append('file', file);
      const res = await fetch('/api/admin/upload-logo', { method: 'POST', body: formData });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? 'Upload failed');
      setLogoUrl(data.url);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setUploading(false);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError('');
    try {
      const payload = {
        domain: domain.trim(),
        site_url: siteUrl.trim(),
        logo_url: logoUrl.trim(),
        da: parseInt(da),
        traffic_value: parseInt(trafficValue),
        traffic_unit: trafficUnit,
        is_sale: isSale,
        price: parseFloat(price),
        original_price: isSale && originalPrice ? parseFloat(originalPrice) : null,
      };
      const url = isEdit ? `/api/admin/sites/${site.id}` : '/api/admin/sites';
      const method = isEdit ? 'PATCH' : 'POST';
      const res = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? 'Save failed');
      router.push(`${BASE}/sites`);
      router.refresh();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 text-sm px-4 py-3 rounded-lg">
          {error}
        </div>
      )}

      {/* Logo */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
        <h2 className="font-bold text-slate-700 mb-4">Site Logo</h2>
        <div className="flex items-start gap-6">
          <div className="w-20 h-20 rounded-xl border-2 border-dashed border-gray-200 bg-gray-50 flex items-center justify-center overflow-hidden flex-shrink-0">
            {logoUrl ? (
              <Image src={logoUrl} alt="logo preview" width={80} height={80} className="object-contain w-full h-full" unoptimized />
            ) : (
              <span className="text-gray-300 text-xs text-center px-2">No logo</span>
            )}
          </div>
          <div className="flex-1 space-y-3">
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1">Upload image file</label>
              <input
                type="file"
                accept="image/*"
                onChange={handleLogoUpload}
                disabled={uploading}
                className="block w-full text-sm text-gray-500 file:mr-3 file:py-1.5 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-cyan-50 file:text-[#0097A7] hover:file:bg-cyan-100 disabled:opacity-50"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1">Or paste image URL</label>
              <input
                type="url"
                value={logoUrl}
                onChange={e => setLogoUrl(e.target.value)}
                placeholder="https://example.com/logo.png"
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00BCD4]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Site details */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 grid grid-cols-1 md:grid-cols-2 gap-5">
        <h2 className="font-bold text-slate-700 col-span-full">Site Details</h2>
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1">Domain name <span className="text-red-400">*</span></label>
          <input required value={domain} onChange={e => setDomain(e.target.value)} placeholder="example.com" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00BCD4]" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1">Site URL <span className="text-red-400">*</span></label>
          <input required type="url" value={siteUrl} onChange={e => setSiteUrl(e.target.value)} placeholder="https://example.com" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00BCD4]" />
        </div>
        <div>
          <label className="block text-xs font-semibold text-gray-500 mb-1">Domain Authority (DA) <span className="text-red-400">*</span></label>
          <input required type="number" min={0} max={100} value={da} onChange={e => setDa(e.target.value)} placeholder="e.g. 45" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00BCD4]" />
        </div>
        <div className="flex gap-3">
          <div className="flex-1">
            <label className="block text-xs font-semibold text-gray-500 mb-1">Traffic <span className="text-red-400">*</span></label>
            <input required type="number" min={0} value={trafficValue} onChange={e => setTrafficValue(e.target.value)} placeholder="e.g. 50000" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00BCD4]" />
          </div>
          <div className="w-36">
            <label className="block text-xs font-semibold text-gray-500 mb-1">Unit</label>
            <select value={trafficUnit} onChange={e => setTrafficUnit(e.target.value as TrafficUnit)} className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00BCD4] bg-white">
              {TRAFFIC_UNITS.map(u => <option key={u.value} value={u.value}>{u.label}</option>)}
            </select>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 space-y-5">
        <h2 className="font-bold text-slate-700">Pricing</h2>
        <label className="flex items-center gap-3 cursor-pointer">
          <input type="checkbox" checked={isSale} onChange={e => setIsSale(e.target.checked)} className="w-4 h-4 accent-[#00BCD4]" />
          <span className="text-sm font-semibold text-slate-700">This site is on sale</span>
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-xs font-semibold text-gray-500 mb-1">
              {isSale ? 'Sale Price ($)' : 'Price ($)'} <span className="text-red-400">*</span>
            </label>
            <input required type="number" min={0} step="0.01" value={price} onChange={e => setPrice(e.target.value)} placeholder="e.g. 99" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00BCD4]" />
          </div>
          {isSale && (
            <div>
              <label className="block text-xs font-semibold text-gray-500 mb-1">Original Price ($) <span className="text-red-400">*</span></label>
              <input required={isSale} type="number" min={0} step="0.01" value={originalPrice} onChange={e => setOriginalPrice(e.target.value)} placeholder="e.g. 150" className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00BCD4]" />
            </div>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={saving || uploading}
          className="bg-[#00BCD4] hover:bg-[#0097A7] text-white font-bold px-8 py-3 rounded-xl transition-colors disabled:opacity-60 disabled:cursor-not-allowed shadow-md"
        >
          {saving ? 'Saving…' : isEdit ? 'Update Site' : 'Add Site'}
        </button>
        <button
          type="button"
          onClick={() => router.back()}
          className="bg-white border border-gray-200 text-slate-600 font-semibold px-8 py-3 rounded-xl hover:bg-gray-50 transition-colors"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
