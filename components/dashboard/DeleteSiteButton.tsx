'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Trash2 } from 'lucide-react';

export default function DeleteSiteButton({ id, domain }: { id: string; domain: string }) {
  const router = useRouter();
  const [confirming, setConfirming] = useState(false);
  const [deleting, setDeleting] = useState(false);

  async function handleDelete() {
    setDeleting(true);
    await fetch(`/api/admin/sites/${id}`, { method: 'DELETE' });
    router.refresh();
  }

  if (confirming) {
    return (
      <div className="flex items-center gap-1">
        <span className="text-xs text-red-500 font-semibold mr-1">Delete?</span>
        <button onClick={handleDelete} disabled={deleting} className="text-xs bg-red-500 text-white px-2 py-1 rounded-md font-bold disabled:opacity-60">
          {deleting ? '…' : 'Yes'}
        </button>
        <button onClick={() => setConfirming(false)} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-md font-bold">
          No
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={() => setConfirming(true)}
      className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
    >
      <Trash2 className="w-4 h-4" />
    </button>
  );
}
