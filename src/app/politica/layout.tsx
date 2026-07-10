import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Tratamiento de Datos Personales",
  description:
    "Conozca la política de tratamiento de datos personales de FaciRepuestos S.A.S. en cumplimiento de la Ley 1581 de 2012 y normas complementarias en Colombia.",
  openGraph: {
    title: "Política de Tratamiento de Datos Personales | FaciRepuestos S.A.S.",
    description:
      "Política de tratamiento de datos personales en cumplimiento de la Ley 1581 de 2012 en Colombia.",
    url: "https://facirepuestos.com.co/politica",
    siteName: "FaciRepuestos S.A.S.",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Política de Datos | FaciRepuestos S.A.S.",
    description:
      "Política de tratamiento de datos personales de FaciRepuestos S.A.S.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PoliticaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
