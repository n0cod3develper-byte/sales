"use client";

import React, { useState } from "react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { services, products, blogItems, brands, companyInfo } from "@/lib/data";
import { JsonLdProduct } from "@/components/JsonLd";
import { Phone, MessageSquare, Send, CheckCircle } from "lucide-react";

export default function Home() {
  // Contact Form State
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Error al enviar el mensaje");
      setIsSuccess(true);
      setFormData({ name: "", email: "", phone: "", message: "" });
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (err) {
      console.error("Error submitting form:", err);
      setError("Ocurrió un error al enviar el mensaje. Intente nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800 scroll-smooth">
      {/* JSON-LD Structured Data for Products */}
      {products.map((prod) => (
        <JsonLdProduct key={prod.slug} product={prod} />
      ))}

      <TopBar />
      <Header />
      <HeroBanner />

      {/* Premium Industrial CTA Section */}
      <section className="relative py-16 md:py-20 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
          <div className="group relative bg-gradient-to-br from-[#1a1a2e] to-[#0f3460] rounded-[2rem] p-8 md:p-12 lg:p-16 shadow-2xl shadow-blue-900/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-900/30 overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-[0.03] rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#e2b93b] opacity-[0.05] rounded-full blur-2xl translate-y-1/3 -translate-x-1/4"></div>
            
            <div className="relative z-10 flex-1 text-center lg:text-left">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
                ¿Necesita <span className="text-[#e2b93b]">repuestos o equipos</span> para su montacargas?
              </h2>
              <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Nuestro equipo de especialistas está listo para asesorarlo y ofrecerle una cotización rápida, personalizada y sin compromiso. Contamos con un amplio portafolio de equipos, repuestos, accesorios y soluciones para mantener su operación en movimiento.
              </p>
            </div>
            
            <div className="relative z-10 shrink-0">
              <a
                href={`https://api.whatsapp.com/send?phone=${companyInfo.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-[#25d366] hover:bg-[#20ba5a] text-white font-bold text-sm md:text-base rounded-xl shadow-lg shadow-green-500/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-green-500/40"
              >
                <MessageSquare className="w-5 h-5 transition-transform duration-300 group-hover/btn:-rotate-12" />
                <span className="tracking-wide">Solicitar Cotización</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mantenimiento Parallax CTA Section */}
      <section
        className="relative py-28 md:py-36 bg-cover bg-center bg-fixed text-white overflow-hidden"
        style={{
          backgroundImage: `url("https://forkliftec.com/public/img/imagenes/1.jpg?1932206885")`,
        }}
      >
        {/* Dark Reddish Overlay */}
        <div className="absolute inset-0 bg-[#12161a]/85 backdrop-blur-[2px]" />

        <div className="relative max-w-4xl mx-auto px-4 text-center space-y-6">
          <span className="text-[#d32f2f] text-xs font-black tracking-widest uppercase border border-[#d32f2f] px-3 py-1 rounded-full">
            SUMINISTRO DE REPUESTOS
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight">
            ¿Un equipo detenido está retrasando su cadena logística?
          </h2>
          <p className="text-sm md:text-base text-gray-300 max-w-xl mx-auto leading-relaxed">
            Un montacargas fuera de servicio representa costosas pérdidas de tiempo y dinero. Confíe en nuestro amplio inventario de repuestos y accesorios multimarca para restablecer su operación de inmediato.
          </p>
          <div className="pt-4">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-xs md:text-sm font-bold text-white bg-[#d32f2f] hover:bg-red-700 rounded-lg shadow-lg hover:shadow-red-500/20 hover:-translate-y-0.5 transition-all duration-300"
            >
              <span>COTIZAR REPUESTOS</span>
            </a>
          </div>
        </div>
      </section>

      {/* Products Section — Premium Industrial Redesign */}
      <section className="relative overflow-hidden" id="productos" style={{ background: "linear-gradient(180deg, #f8f9fb 0%, #ffffff 100%)" }}>
        {/* Section Header */}
        <div className="relative py-16 md:py-20" style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%)" }}>
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 40V0h40' stroke='%23fff' stroke-width='0.5' fill='none'/%3E%3C/svg%3E\")" }} />
          <div className="relative max-w-7xl mx-auto px-4 md:px-8 text-center">
            <span
              className="inline-block px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] mb-5"
              style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.1)" }}
            >
              Portafolio Completo
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
              Nuestros <span style={{ color: "#e2b93b" }}>Productos</span>
            </h2>
            <div className="w-16 h-1 mx-auto rounded-full mb-5" style={{ background: "linear-gradient(90deg, #e2b93b, #f0c75e)" }} />
            <p className="text-sm md:text-base max-w-2xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              Soluciones integrales en equipos, repuestos y accesorios para montacargas. Calidad certificada, disponibilidad inmediata y asesoría técnica especializada.
            </p>
          </div>
        </div>

        {/* Product Cards Grid */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-7">
            {products.map((prod) => (
              <ProductCard key={prod.id} product={prod} />
            ))}
          </div>
        </div>

        {/* Bottom CTA Strip */}
        <div className="border-t" style={{ borderColor: "rgba(0,0,0,0.05)" }}>
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-12 flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="text-center md:text-left">
              <h4 className="font-extrabold text-base md:text-lg tracking-tight" style={{ color: "#1a1a2e" }}>
                ¿Necesita un producto específico?
              </h4>
              <p className="text-xs md:text-sm mt-1" style={{ color: "#4b5563" }}>
                Contamos con un amplio inventario y asesoría técnica para ayudarle a encontrar exactamente lo que necesita.
              </p>
            </div>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              style={{ background: "linear-gradient(135deg, #e2b93b 0%, #d4a82e 100%)", color: "#1a1a2e" }}
            >
              <span>Solicitar Cotización</span>
            </a>
          </div>
        </div>
      </section>

      {/* Who We Are / Nosotros Section */}
      <section className="py-20 md:py-28" id="nosotros">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Visual element */}
            <div className="bg-[#12161a] p-8 md:p-12 rounded-2xl text-white space-y-6 relative overflow-hidden shadow-2xl">
              <span className="text-[#d32f2f] text-xs font-black tracking-widest uppercase">
                SOLUCIONES INTEGRALES
              </span>
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Respaldo 100% Colombiano
              </h2>
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                Nacimos con la visión de ofrecer un suministro ágil y confiable de repuestos para montacargas en toda Colombia. Atendemos de forma integral a las empresas que confían su operación y logística diaria a equipos de manejo de materiales, garantizando continuidad y rendimiento en cada jornada.
              </p>
              
              <div className="space-y-4 pt-4 border-t border-gray-800">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-white font-bold text-sm shrink-0">01</div>
                  <div>
                    <h5 className="font-bold text-white text-xs md:text-sm">Sector Logístico</h5>
                    <p className="text-xs text-gray-500">Centros de distribución, bodegas, puertos y zonas francas.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-white font-bold text-sm shrink-0">02</div>
                  <div>
                    <h5 className="font-bold text-white text-xs md:text-sm">Suministro Multimarca</h5>
                    <p className="text-xs text-gray-500">Venta especializada de repuestos, partes y accesorios para montacargas de todas las marcas del sector industrial.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-6">
              <span className="text-[#d32f2f] text-xs font-black tracking-widest uppercase">
                SOBRE NOSOTROS
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                Quiénes <span className="text-[#d32f2f]">Somos</span>
              </h2>
              <div className="w-16 h-1 bg-[#d32f2f] rounded"></div>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                Facirepuestos S.A.S. es una empresa colombiana legalmente constituida, nacida con el firme propósito de consolidarse como el aliado estratégico número uno en el suministro de partes, piezas e insumos automotrices para maquinaria de carga y elevación. Con sede operativa en la ciudad de Medellín, atendemos de manera integral las necesidades de empresas del sector logístico, centros de distribución, bodegas industriales y talleres de mantenimiento técnico. Nuestra filosofía de negocio se fundamenta en la comprensión absoluta de la cadena de suministro: entendemos que un montacargas o un elevador detenido no representa únicamente una falla mecánica, sino un cuello de botella logístico que genera altos costos de inactividad (downtime). Por ello, respondemos con agilidad, precisión y un catálogo de calidad garantizada.
              </p>
              <div className="pt-2">
                <a
                  href="#contacto"
                  className="px-6 py-3 text-xs md:text-sm font-bold text-white bg-gray-900 hover:bg-[#d32f2f] rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  CONTACTAR AHORA
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Elegante Divisor */}
      <div className="w-full flex items-center justify-center opacity-60">
        <div className="h-[1px] w-full max-w-sm bg-gradient-to-r from-transparent to-gray-300"></div>
        <div className="mx-5 flex gap-2">
          <div className="w-2 h-2 rotate-45 bg-[#d32f2f]"></div>
          <div className="w-2 h-2 rotate-45 bg-gray-300"></div>
          <div className="w-2 h-2 rotate-45 bg-[#1a1a2e]"></div>
        </div>
        <div className="h-[1px] w-full max-w-sm bg-gradient-to-l from-transparent to-gray-300"></div>
      </div>

      {/* Premium Brands Carousel Section */}
      <section className="py-16 md:py-24 bg-[#f8f9fb] border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12 text-center space-y-4">
          <span className="text-[#d32f2f] text-xs font-black tracking-widest uppercase">
            CALIDAD GARANTIZADA
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1a2e] tracking-tight">
            Trabajamos con las <span className="text-[#d32f2f]">mejores marcas</span> del mercado
          </h2>
          <div className="w-16 h-1 bg-[#d32f2f] mx-auto rounded"></div>
          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Ofrecemos repuestos, accesorios y soluciones para montacargas compatibles con los principales fabricantes del sector, garantizando calidad, disponibilidad y respaldo para mantener su operación en movimiento.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative max-w-[1400px] mx-auto flex overflow-hidden group [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <div className="flex gap-6 md:gap-8 items-center brand-carousel-track w-max pr-6 md:pr-8">
            {/* Duplicamos el arreglo para crear la ilusión de scroll infinito */}
            {[...brands, ...brands, ...brands].map((brand, idx) => (
              <div 
                key={idx} 
                className="w-[150px] md:w-[220px] h-[90px] md:h-[130px] shrink-0 bg-white border border-gray-100 rounded-2xl shadow-sm flex items-center justify-center p-5 md:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-gray-200"
              >
                <img 
                  src={brand.logo} 
                  alt={`Logotipo oficial de ${brand.name}`} 
                  width={200}
                  height={100}
                  loading="lazy"
                  className="max-w-full max-h-full object-contain filter grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Elegante Divisor */}
      <div className="w-full flex items-center justify-center opacity-60">
        <div className="h-[1px] w-full max-w-sm bg-gradient-to-r from-transparent to-gray-300"></div>
        <div className="mx-5 flex gap-2">
          <div className="w-2 h-2 rotate-45 bg-[#d32f2f]"></div>
          <div className="w-2 h-2 rotate-45 bg-gray-300"></div>
          <div className="w-2 h-2 rotate-45 bg-[#1a1a2e]"></div>
        </div>
        <div className="h-[1px] w-full max-w-sm bg-gradient-to-l from-transparent to-gray-300"></div>
      </div>

      {/* Blog Section */}
      <section className="py-20 md:py-28" id="blog">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-[#d32f2f] text-xs font-black tracking-widest uppercase">
              ARTÍCULOS E INFORMACIÓN
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Nuestro <span className="text-[#d32f2f]">Blog</span>
            </h2>
            <div className="w-16 h-1 bg-[#d32f2f] mx-auto rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {blogItems.map((item) => (
              <article key={item.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
                <div className="p-6 space-y-4">
                  <span className="text-gray-400 text-[10px] font-bold uppercase">{item.date}</span>
                  <h4 className="text-gray-900 font-extrabold text-sm md:text-base tracking-tight leading-snug hover:text-[#d32f2f] transition-colors">
                    <a href="#blog">{item.title}</a>
                  </h4>
                  <p className="leading-relaxed" style={{ fontSize: "0.8rem", color: "#4b5563" }}>{item.excerpt}</p>
                </div>
                <div className="p-6 pt-0 border-t border-gray-50 flex items-center justify-between">
                  <a href="#blog" className="text-xs font-black text-[#d32f2f] hover:underline">
                    LEER MÁS
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section & Form */}
      <section className="py-20 md:py-28 bg-[#12161a] text-white" id="contacto">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="space-y-6">
              <span className="text-[#d32f2f] text-xs font-black tracking-widest uppercase">
                ¿TIENE DUDAS?
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                Contáctenos <span className="text-[#d32f2f]">Ahora</span>
              </h2>
              <div className="w-16 h-1 bg-[#d32f2f] rounded"></div>
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-md">
                Deje sus datos de contacto y detalles del requerimiento para que uno de nuestros asesores especializados le brinde una cotización formal.
              </p>
              
              <div className="space-y-4 pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-[#d32f2f] shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h5 className="text-[10px] text-gray-500 font-bold uppercase">LLÁMENOS</h5>
                    <p className="text-xs font-bold text-white">{companyInfo.phone}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-[#d32f2f] shrink-0">
                    <Send size={18} />
                  </div>
                  <div>
                    <h5 className="text-[10px] text-gray-500 font-bold uppercase">CORREO</h5>
                    <p className="text-xs font-bold text-white">{companyInfo.email}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Simulated Interactive Form Container */}
            <div className="bg-[#1e2229] border border-gray-800 p-8 rounded-2xl shadow-xl">
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-12 text-center space-y-4 animate-fade-in">
                  <CheckCircle size={56} className="text-[#25d366]" />
                  <h4 className="text-white font-extrabold text-lg">¡Mensaje Enviado!</h4>
                  <p className="text-xs text-gray-400 max-w-xs">
                    Su consulta ha sido procesada con éxito. Un especialista se comunicará con usted a la brevedad.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-[10px] text-gray-400 font-black uppercase mb-2">Nombre Completo</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Ej. Juan Pérez"
                      className="w-full px-4 py-3 bg-[#12161a] border border-gray-800 focus:border-[#d32f2f] rounded-lg text-xs text-white placeholder-gray-600 focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] text-gray-400 font-black uppercase mb-2">Correo Electrónico</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="nombre@empresa.com"
                        className="w-full px-4 py-3 bg-[#12161a] border border-gray-800 focus:border-[#d32f2f] rounded-lg text-xs text-white placeholder-gray-600 focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] text-gray-400 font-black uppercase mb-2">Teléfono</label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Ej. +57 6000-0000"
                        className="w-full px-4 py-3 bg-[#12161a] border border-gray-800 focus:border-[#d32f2f] rounded-lg text-xs text-white placeholder-gray-600 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[10px] text-gray-400 font-black uppercase mb-2">Mensaje o Requerimiento</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describa el montacargas, repuestos o servicio que requiere..."
                      className="w-full px-4 py-3 bg-[#12161a] border border-gray-800 focus:border-[#d32f2f] rounded-lg text-xs text-white placeholder-gray-600 focus:outline-none transition-colors resize-none"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 text-xs font-bold text-white bg-[#d32f2f] hover:bg-red-700 disabled:bg-gray-700 rounded-lg shadow-md hover:shadow-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{isSubmitting ? "ENVIANDO..." : "ENVIAR SOLICITUD"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
