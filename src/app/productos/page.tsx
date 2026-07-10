"use client";

import React from "react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { products, brands, companyInfo } from "@/lib/data";
import { MessageSquare } from "lucide-react";

export default function ProductosPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <TopBar />
      <Header />

      {/* Products Section */}
      <section className="relative overflow-hidden flex-1" style={{ background: "linear-gradient(180deg, #f8f9fb 0%, #ffffff 100%)" }}>
        <div className="relative py-16 md:py-20" style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%)" }}>
          <div className="relative max-w-7xl mx-auto px-4 md:px-8 text-center">
            <span className="inline-block px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] mb-5" style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.1)" }}>
              Portafolio Completo
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
              Nuestros <span style={{ color: "#e2b93b" }}>Productos</span>
            </h1>
            <div className="w-16 h-1 mx-auto rounded-full mb-5" style={{ background: "linear-gradient(90deg, #e2b93b, #f0c75e)" }} />
            <p className="text-sm md:text-base max-w-2xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
              Soluciones integrales en equipos, repuestos y accesorios para montacargas.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-7">
            {products.map((prod) => (
              <div key={prod.id} id={prod.slug}>
                <ProductCard product={prod} />
              </div>
            ))}
          </div>
        </div>

        <div className="border-t" style={{ borderColor: "rgba(0,0,0,0.05)" }}>
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 md:py-12 flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="text-center md:text-left">
              <h2 className="font-extrabold text-base md:text-lg tracking-tight" style={{ color: "#1a1a2e" }}>
                ¿Necesita un producto específico?
              </h2>
              <p className="text-xs md:text-sm mt-1" style={{ color: "#4b5563" }}>
                Contamos con un amplio inventario y asesoría técnica para ayudarle.
              </p>
            </div>
            <a
              href="/contacto"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
              style={{ background: "linear-gradient(135deg, #e2b93b 0%, #d4a82e 100%)", color: "#1a1a2e" }}
            >
              <span>Solicitar Cotización</span>
            </a>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-16 md:py-24 bg-[#f8f9fb] border-y border-gray-100 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 md:px-8 mb-12 text-center space-y-4">
          <span className="text-[#d32f2f] text-xs font-black tracking-widest uppercase">
            CALIDAD GARANTIZADA
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#1a1a2e] tracking-tight">
            Trabajamos con las <span className="text-[#d32f2f]">mejores marcas</span>
          </h2>
          <p className="text-sm md:text-base text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Repuestos compatibles con los principales fabricantes del sector.
          </p>
        </div>
        <div className="relative max-w-[1400px] mx-auto flex overflow-hidden group [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
          <div className="flex gap-6 md:gap-8 items-center brand-carousel-track w-max pr-6 md:pr-8">
            {[...brands, ...brands, ...brands].map((brand, idx) => (
              <div key={idx} className="w-[150px] md:w-[220px] h-[90px] md:h-[130px] shrink-0 bg-white border border-gray-100 rounded-2xl shadow-sm flex items-center justify-center p-5 md:p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:border-gray-200">
                <img src={brand.logo} alt={`Logotipo oficial de ${brand.name}`} width={200} height={100} loading="lazy" className="max-w-full max-h-full object-contain filter grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100 hover:scale-105" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight mb-4">
            ¿Necesita asesoría especializada?
          </h2>
          <p className="text-sm text-gray-500 max-w-xl mx-auto mb-8">
            Nuestro equipo está listo para ayudarle a encontrar el repuesto o equipo que necesita.
          </p>
          <a
            href={`https://api.whatsapp.com/send?phone=${companyInfo.whatsapp.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#25d366] hover:bg-[#20ba5a] text-white font-bold text-sm rounded-xl shadow-lg transition-all duration-300 hover:scale-[1.02]"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Solicitar Cotización por WhatsApp</span>
          </a>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
