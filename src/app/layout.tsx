import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import type { Viewport } from "next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "FaciRepuestos: Montacargas Repuestos Accesorios",
  description: "Montacargas, Repuestos y Accesorios en Galera Forkliftec, Panamá. Ofrecemos el mejor servicio técnico, alquiler de montacargas y mantenimientos preventivos/correctivos.",
  keywords: ["Montacargas", "Repuestos", "Accesorios", "Galera Forkliftec", "Panamá", "Alquiler de Montacargas"],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}

