"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const [stats, setStats] = useState({ users: 0, services: 0, products: 0, posts: 0 });
  const router = useRouter();
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

  useEffect(() => {
    if (!token) {
      router.push('/login');
      return;
    }
    // Simple parallel fetches for counts
    const fetchCounts = async () => {
      const [uRes, sRes, pRes, bRes] = await Promise.all([
        fetch('/api/admin/users', { headers: { Authorization: `Bearer ${token}` } }),
        fetch('/api/admin/services', { headers: { Authorization: `Bearer ${token}` } }),
        fetch('/api/admin/products', { headers: { Authorization: `Bearer ${token}` } }),
        fetch('/api/admin/blog', { headers: { Authorization: `Bearer ${token}` } }),
      ]);
      const [uData, sData, pData, bData] = await Promise.all([
        uRes.json(),
        sRes.json(),
        pRes.json(),
        bRes.json(),
      ]);
      setStats({
        users: uData.users?.length || 0,
        services: sData.services?.length || 0,
        products: pData.products?.length || 0,
        posts: bData.posts?.length || 0,
      });
    };
    fetchCounts();
  }, [token, router]);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Panel de Administración</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {Object.entries(stats).map(([key, value]) => (
          <div key={key} className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <p className="text-lg font-medium text-gray-600 capitalize">{key}</p>
            <p className="text-4xl font-bold text-indigo-600">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
