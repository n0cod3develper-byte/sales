import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Artículos e información técnica sobre montacargas, repuestos industriales, mantenimiento de equipos de carga y consejos para optimizar su operación logística en Colombia.",
  openGraph: {
    title: "Blog | FaciRepuestos S.A.S.",
    description:
      "Información técnica y consejos sobre montacargas, repuestos industriales y mantenimiento de equipos de carga en Colombia.",
    url: "https://facirepuestos.com.co/blog",
    siteName: "FaciRepuestos S.A.S.",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | FaciRepuestos S.A.S.",
    description:
      "Consejos y artículos técnicos sobre montacargas y repuestos industriales.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
