"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Login failed");
      // Store JWT token
      if (typeof window !== "undefined") {
        localStorage.setItem("token", data.token);
      }
      // Redirect to admin dashboard
      router.push("/admin");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100/60 backdrop-blur-sm">
      <form
        onSubmit={handleSubmit}
        className="w-96 rounded-xl bg-white/70 p-8 shadow-lg backdrop-blur-lg"
      >
        <h1 className="mb-6 text-center text-2xl font-bold text-gray-800">Iniciar Sesión</h1>
        {error && (
          <p className="mb-4 rounded bg-red-100 p-2 text-sm text-red-700">{error}</p>
        )}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Correo</label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700">Contraseña</label>
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 w-full rounded border border-gray-300 px-3 py-2 focus:border-indigo-500 focus:outline-none"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded bg-gradient-to-r from-indigo-500 to-purple-600 py-2 font-semibold text-white hover:from-indigo-600 hover:to-purple-700"
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
