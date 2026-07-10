import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description:
    "Conozca cómo utilizamos las cookies en facirepuestos.com.co. Información sobre tipos de cookies, finalidades y cómo controlar su uso en nuestro sitio web.",
  openGraph: {
    title: "Política de Cookies | FaciRepuestos S.A.S.",
    description:
      "Política de cookies del sitio web facirepuestos.com.co. Información sobre el uso de cookies y tecnologías similares.",
    url: "https://facirepuestos.com.co/cookies",
    siteName: "FaciRepuestos S.A.S.",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Política de Cookies | FaciRepuestos S.A.S.",
    description:
      "Información sobre el uso de cookies en facirepuestos.com.co.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CookiesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
