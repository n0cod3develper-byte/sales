import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "FaciRepuestos S.A.S. — Empresa colombiana especializada en repuestos para montacargas. Conozca nuestra historia, valores y compromiso con la industria logística en Colombia.",
  openGraph: {
    title: "Nosotros | FaciRepuestos S.A.S.",
    description:
      "Empresa colombiana especializada en la distribución de repuestos para montacargas. Respaldo 100% colombiano, sede en Medellín.",
    url: "https://facirepuestos.com.co/nosotros",
    siteName: "FaciRepuestos S.A.S.",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nosotros | FaciRepuestos S.A.S.",
    description:
      "Conozca FaciRepuestos S.A.S., su aliado estratégico en repuestos para montacargas en Colombia.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function NosotrosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
