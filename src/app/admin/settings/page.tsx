"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminSettings() {
  const [json, setJson] = useState('{}');
  const [saving, setSaving] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
      return;
    }
    fetch('/api/admin/settings', {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((r) => r.json())
      .then((d) => setJson(JSON.stringify(d.settings?.data ?? {}, null, 2)))
      .catch(console.error);
  }, [router]);

  const handleSave = async () => {
    const token = localStorage.getItem('token');
    if (!token) return router.push('/login');
    try {
      const parsed = JSON.parse(json);
      setSaving(true);
      const res = await fetch('/api/admin/settings', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ data: parsed }),
      });
      if (!res.ok) throw new Error('Save failed');
      alert('Ajustes guardados correctamente');
    } catch {
      alert('JSON inválido o error al guardar');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Ajustes del Sitio</h1>
      <div className="bg-white/70 rounded-xl shadow-lg backdrop-blur-lg p-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Configuración (JSON)
        </label>
        <textarea
          value={json}
          onChange={(e) => setJson(e.target.value)}
          className="w-full h-80 p-4 rounded border border-gray-300 focus:border-indigo-500 focus:outline-none font-mono text-sm"
          spellCheck={false}
        />
        <button
          onClick={handleSave}
          disabled={saving}
          className="mt-4 w-full rounded bg-gradient-to-r from-indigo-500 to-purple-600 py-2 font-semibold text-white hover:from-indigo-600 hover:to-purple-700 disabled:opacity-50 transition"
        >
          {saving ? 'Guardando...' : 'Guardar Ajustes'}
        </button>
      </div>
    </div>
  );
}
