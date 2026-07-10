import { companyInfo } from '@/lib/data';
import type { Product } from '@/lib/data';

const socialUrls = [companyInfo.socials.facebook, companyInfo.socials.instagram].filter(
  (url) => url && url !== '#'
);

export function JsonLdOrganization() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'FaciRepuestos S.A.S.',
    url: 'https://facirepuestos.com.co',
    logo: 'https://facirepuestos.com.co/logo.png',
    description:
      'Distribución y comercialización de repuestos para montacargas, equipos, accesorios, llantas industriales, baterías y aditamentos en Colombia.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Medellín',
      addressCountry: 'CO',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: companyInfo.phone,
        contactType: 'sales',
        email: companyInfo.email,
        availableLanguage: ['Spanish'],
      },
    ],
    areaServed: [
      {
        '@type': 'Country',
        name: 'Colombia',
      },
    ],
    sameAs: socialUrls,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function JsonLdProduct({ product }: { product: Product }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.title,
    description: product.description,
    image: `https://facirepuestos.com.co${product.image}`,
    url: `https://facirepuestos.com.co/#productos-${product.slug}`,
    brand: {
      '@type': 'Brand',
      name: 'FaciRepuestos S.A.S.',
    },
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'PriceSpecification',
        priceCurrency: 'COP',
      },
      seller: {
        '@type': 'Organization',
        name: 'FaciRepuestos S.A.S.',
      },
    },
  };

  return (
    <script
      type="application/ld+json"
      key={`product-${product.slug}`}
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function JsonLdBreadcrumbList() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Inicio',
        item: 'https://facirepuestos.com.co/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Productos',
        item: 'https://facirepuestos.com.co/#productos',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Contacto',
        item: 'https://facirepuestos.com.co/#contacto',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
