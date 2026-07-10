export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
}

export interface Product {
  id: string;
  title: string;
  slug: string;
  description: string;
  image: string;
}

export interface BlogItem {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  date: string;
  image: string;
}

export interface Brand {
  name: string;
  logo: string;
}

export const services: Service[] = [
  {
    id: "alquiler",
    title: "ALQUILER MONTACARGAS",
    slug: "alquiler-montacargas",
    description: "Desde 1 tonelada hasta 10 toneladas para todo tipo de proyectos industriales y logísticos.",
    image: "/images/services/alquiler.svg"
  },
  {
    id: "prev",
    title: "MANTENIMIENTOS PREVENTIVOS",
    slug: "mantenimientos-preventivos",
    description: "Planes programados para evitar fallos costosos y maximizar el tiempo de actividad de sus equipos.",
    image: "/images/services/preventivo.svg"
  },
  {
    id: "corr",
    title: "MANTENIMIENTO CORRECTIVO",
    slug: "mantenimiento-correctivo",
    description: "Diagnóstico preciso y reparación rápida por parte de ingenieros técnicos especializados.",
    image: "/images/services/correctivo.svg"
  },
  {
    id: "trans",
    title: "TRANSPORTE DE EQUIPOS",
    slug: "transporte-de-equipos",
    description: "Traslado seguro de montacargas y maquinaria pesada a nivel nacional con camiones adecuados.",
    image: "/images/services/transporte.svg"
  },
  {
    id: "reconst",
    title: "RECONSTRUCCIÓN DE EQUIPOS",
    slug: "reconstruccion-de-equipos",
    description: "Restauración completa de montacargas usados para devolverlos a condiciones óptimas de operación.",
    image: "/images/services/reconstruccion.svg"
  }
];

export const products: Product[] = [
  {
    id: "equipos",
    title: "Equipos",
    slug: "equipos",
    description: "Montacargas eléctricos y de combustión de las mejores marcas. Soluciones de manejo de materiales para cada necesidad operativa.",
    image: "/images/products/equipos.png"
  },
  {
    id: "repuestos",
    title: "Repuestos",
    slug: "repuestos",
    description: "Componentes mecánicos, hidráulicos y eléctricos originales y compatibles. Filtros, bombas, rodamientos y más con disponibilidad inmediata.",
    image: "/images/products/repuestos.png"
  },
  {
    id: "accesorios",
    title: "Accesorios",
    slug: "accesorios",
    description: "Luces de seguridad, espejos, alarmas, asientos, cinturones, cámaras y más para optimizar la seguridad y productividad de sus equipos.",
    image: "/images/products/accesorios.png"
  },
  {
    id: "llantas",
    title: "Llantas Industriales",
    slug: "llantas-industriales",
    description: "Llantas sólidas, neumáticas y rines industriales de alto rendimiento. Máxima tracción y durabilidad para toda superficie de trabajo.",
    image: "/images/products/llantas.png"
  },
  {
    id: "aditamentos",
    title: "Aditamentos",
    slug: "aditamentos",
    description: "Posicionadores de horquillas, rotadores, clamps, extensiones y horquillas especiales para ampliar la versatilidad de sus montacargas.",
    image: "/images/products/aditamentos.png"
  },
  {
    id: "baterias",
    title: "Baterías y Cargadores",
    slug: "baterias-y-cargadores",
    description: "Baterías industriales de larga duración y cargadores inteligentes. Estaciones de carga diseñadas para máxima eficiencia energética.",
    image: "/images/products/baterias.png"
  },
  {
    id: "mangueras",
    title: "Mangueras Hidráulicas",
    slug: "mangueras-hidraulicas",
    description: "Mangueras de alta presión, conectores, acoples y racores. Fabricación y reparación con especificaciones técnicas precisas.",
    image: "/images/products/mangueras.svg"
  }
];

export const blogItems: BlogItem[] = [
  {
    id: "1",
    title: "CÓMO ESCOGER EL MONTACARGAS ADECUADO",
    slug: "como-escoger-el-montacargas-adecuado",
    excerpt: "Elegir el tipo de montacargas adecuado para tu empresa es importante para obtener el mayor beneficio de tu inversión...",
    content: "Elegir el tipo de montacargas adecuado para tu empresa es importante para obtener el mayor beneficio y optimizar el rendimiento. Factores como la capacidad de carga, la altura de elevación, el entorno (interior o exterior) y la fuente de energía (eléctrico, GLP, diésel) desempeñan un papel crucial en la toma de decisión final.",
    date: "15 May 2026",
    image: "/images/blog/blog1.jpg"
  },
  {
    id: "2",
    title: "LLANTAS PARA MONTACARGAS",
    slug: "llantas-para-montacargas",
    excerpt: "Cada tipo de operación requiere la herramienta correcta para realizar el trabajo de la mejor manera y con seguridad...",
    content: "Las llantas son fundamentales para la estabilidad y seguridad del montacargas. Existen llantas neumáticas, sólidas de alta tracción y poliuretano. Conocer las necesidades del suelo y el peso de operación ayuda a prolongar la vida útil de los neumáticos y del propio montacargas.",
    date: "10 Abr 2026",
    image: "/images/blog/blog2.jpg"
  },
  {
    id: "3",
    title: "TIPOS DE MONTACARGAS INDUSTRIALES",
    slug: "tipos-de-montacargas-industriales",
    excerpt: "Los vehículos industriales motorizados se dividen en 7 clases. A continuación te detallamos cada una...",
    content: "La clasificación de montacargas abarca desde la Clase 1 (pasajero con motor eléctrico) hasta la Clase 7 (montacargas para terrenos difíciles). Cada una de estas clases está diseñada para aplicaciones específicas, desde almacenes estrechos hasta patios de construcción al aire libre.",
    date: "05 Mar 2026",
    image: "/images/blog/blog3.jpg"
  }
];

export const brands: Brand[] = [
  { name: "KOMATSU", logo: "/images/brands/komatsu.svg" },
  { name: "YALE", logo: "/images/brands/yale.svg" },
  { name: "STILL", logo: "/images/brands/still.svg" },
  { name: "NISSAN", logo: "/images/brands/nissan.svg" },
  { name: "CATERPILLAR", logo: "/images/brands/caterpillar.svg" },
  { name: "TOYOTA", logo: "/images/brands/toyota.svg" }
];

export const companyInfo = {
  phone: "+57 3052535915",
  whatsapp: "+57 3052535915",
  email: "ventas@facirepuestos.com.co",
  address: "Medellín - Colombia",
  socials: {
    facebook: "#",
    instagram: "#"
  }
};
