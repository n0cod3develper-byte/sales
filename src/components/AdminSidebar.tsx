"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/admin', label: 'Dashboard' },
  { href: '/admin/users', label: 'Usuarios' },
  { href: '/admin/roles', label: 'Roles' },
  { href: '/admin/services', label: 'Servicios' },
  { href: '/admin/products', label: 'Productos' },
  { href: '/admin/blog', label: 'Blog' },
  { href: '/admin/settings', label: 'Ajustes' },
  { href: '/admin/logs', label: 'Auditoría' },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  return (
    <aside className="w-64 h-screen bg-white/30 backdrop-blur-lg shadow-lg p-6 rounded-r-2xl hidden md:block">
      <h2 className="text-2xl font-bold mb-8 text-gray-800">FaciRepuestos Admin</h2>
      <nav className="flex flex-col gap-4">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`px-4 py-2 rounded-lg transition-colors 
              ${pathname === item.href ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white' : 'text-gray-700 hover:bg-gray-200'}`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
