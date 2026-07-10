"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function CreateService() {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [description, setDescription] = useState('');
  const router = useRouter();
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) return router.push('/login');
    const res = await fetch('/api/admin/services', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title, slug, description }),
    });
    if (res.ok) router.push('/admin/services');
    else alert('Error creating service');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100/60 backdrop-blur-sm">
      <form onSubmit={handleSubmit} className="w-96 rounded-xl bg-white/70 p-8 shadow-lg backdrop-blur-lg">
        <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">Nuevo Servicio</h1>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Título</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 w-full rounded border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Slug</label>
          <input
            type="text"
            required
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            className="mt-1 w-full rounded border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Descripción</label>
          <textarea
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-1 w-full rounded border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none"
          />
        </div>
        <button type="submit" className="w-full rounded bg-gradient-to-r from-indigo-500 to-purple-600 py-2 font-semibold text-white hover:from-indigo-600 hover:to-purple-700">
          Guardar
        </button>
      </form>
    </div>
  );
}
