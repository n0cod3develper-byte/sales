"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminRoles() {
  const [roles, setRoles] = useState([]);
  const router = useRouter();
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

  useEffect(() => {
    if (!token) {
      router.push('/login');
      return;
    }
    fetch('/api/admin/roles', {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((r) => r.json())
      .then((data) => setRoles(data.roles ?? []))
      .catch(console.error);
  }, [token, router]);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Roles</h1>
      <table className="min-w-full bg-white shadow rounded-lg overflow-hidden">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">Nombre</th>
            <th className="px-4 py-2 text-left">Descripción</th>
          </tr>
        </thead>
        <tbody>
          {roles.map((r: any) => (
            <tr key={r.id} className="border-t">
              <td className="px-4 py-2">{r.name}</td>
              <td className="px-4 py-2">{r.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
