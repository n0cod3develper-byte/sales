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
  title: {
    default: "FaciRepuestos S.A.S. — Repuestos para Montacargas en Colombia",
    template: "%s | FaciRepuestos S.A.S.",
  },
  description: "FaciRepuestos S.A.S. es una empresa colombiana especializada en la distribución y comercialización de repuestos, accesorios, llantas industriales, baterías y aditamentos para montacargas de todas las marcas. Atención a industria, logística y minería en todo Colombia.",
  keywords: ["Repuestos para montacargas", "Montacargas Colombia", "FaciRepuestos", "Repuestos industriales", "Llantas industriales", "Baterías para montacargas", "Accesorios montacargas", "Medellín", "Colombia"],
  authors: [{ name: "FaciRepuestos S.A.S." }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "FaciRepuestos S.A.S. — Repuestos para Montacargas en Colombia",
    description: "Distribución y comercialización de repuestos, accesorios, llantas industriales y baterías para montacargas. Atención a industria, logística y minería en Colombia.",
    url: "https://facirepuestos.com.co",
    siteName: "FaciRepuestos S.A.S.",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "FaciRepuestos S.A.S. — Repuestos para Montacargas",
    description: "Distribución de repuestos, accesorios y llantas industriales para montacargas en Colombia.",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es_CO" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}

