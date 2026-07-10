import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Productos",
  description:
    "Explora nuestro portafolio completo de productos para montacargas: equipos, repuestos, accesorios, llantas industriales, aditamentos, baterías y mangueras hidráulicas. Calidad certificada en Colombia.",
  openGraph: {
    title: "Productos | FaciRepuestos S.A.S.",
    description:
      "Equipos, repuestos, accesorios, llantas industriales, aditamentos, baterías y mangueras hidráulicas para montacargas de todas las marcas.",
    url: "https://facirepuestos.com.co/productos",
    siteName: "FaciRepuestos S.A.S.",
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Productos | FaciRepuestos S.A.S.",
    description:
      "Portafolio completo de productos para montacargas en Colombia. Calidad certificada y disponibilidad inmediata.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ProductosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
