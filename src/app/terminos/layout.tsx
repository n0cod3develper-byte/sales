import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Términos y Condiciones de Uso",
  description:
    "Términos y condiciones de uso del sitio web facirepuestos.com.co. Al acceder y utilizar este sitio, usted acepta los términos aquí establecidos.",
  openGraph: {
    title: "Términos y Condiciones | FaciRepuestos S.A.S.",
    description:
      "Términos y condiciones de uso del sitio web facirepuestos.com.co.",
    url: "https://facirepuestos.com.co/terminos",
    siteName: "FaciRepuestos S.A.S.",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Términos y Condiciones | FaciRepuestos S.A.S.",
    description:
      "Términos y condiciones de uso del sitio web facirepuestos.com.co.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TerminosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
