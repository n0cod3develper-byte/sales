"use client";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminServices() {
  const [services, setServices] = useState([]);
  const router = useRouter();
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

  useEffect(() => {
    if (!token) {
      router.push('/login');
      return;
    }
    fetch('/api/admin/services', {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => setServices(data.services ?? []))
      .catch(console.error);
  }, [token, router]);

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Servicios</h1>
        <Link href="/admin/services/create" className="px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:from-indigo-600 hover:to-purple-700 transition">Nuevo Servicio</Link>
      </div>
      <table className="min-w-full bg-white shadow rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">Título</th>
            <th className="px-4 py-2 text-left">Slug</th>
            <th className="px-4 py-2 text-left">Descripción</th>
          </tr>
        </thead>
        <tbody>
          {services.map((s: any) => (
            <tr key={s.id} className="border-t">
              <td className="px-4 py-2">{s.title}</td>
              <td className="px-4 py-2">{s.slug}</td>
              <td className="px-4 py-2">{s.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
