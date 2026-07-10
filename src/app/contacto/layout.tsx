import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Contáctenos para solicitar una cotización de repuestos, accesorios o equipos para montacargas. Estamos ubicados en Medellín, Colombia. Atención a la industria logística en todo el país.",
  openGraph: {
    title: "Contacto | FaciRepuestos S.A.S.",
    description:
      "Solicite su cotización de repuestos para montacargas. Complete nuestro formulario de contacto y un asesor especializado lo atenderá.",
    url: "https://facirepuestos.com.co/contacto",
    siteName: "FaciRepuestos S.A.S.",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto | FaciRepuestos S.A.S.",
    description:
      "Solicite su cotización de repuestos para montacargas en Colombia.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
