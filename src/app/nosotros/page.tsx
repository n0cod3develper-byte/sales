"use client";

import React from "react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Phone, Send } from "lucide-react";
import { companyInfo } from "@/lib/data";

export default function NosotrosPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <TopBar />
      <Header />

      {/* Who We Are Section */}
      <section className="py-20 md:py-28 flex-1">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="bg-[#12161a] p-8 md:p-12 rounded-2xl text-white space-y-6 relative overflow-hidden shadow-2xl">
              <span className="text-[#d32f2f] text-xs font-black tracking-widest uppercase">
                SOLUCIONES INTEGRALES
              </span>
              <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
                Respaldo 100% Colombiano
              </h1>
              <p className="text-xs md:text-sm text-gray-400 leading-relaxed">
                Nacimos con la visión de ofrecer un suministro ágil y confiable de repuestos para montacargas en toda Colombia. Atendemos de forma integral a las empresas que confían su operación y logística diaria a equipos de manejo de materiales, garantizando continuidad y rendimiento en cada jornada.
              </p>
              <div className="space-y-4 pt-4 border-t border-gray-800">
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-white font-bold text-sm shrink-0">01</div>
                  <div>
                    <h2 className="font-bold text-white text-xs md:text-sm">Sector Logístico</h2>
                    <p className="text-xs text-gray-500">Centros de distribución, bodegas, puertos y zonas francas.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-white font-bold text-sm shrink-0">02</div>
                  <div>
                    <h2 className="font-bold text-white text-xs md:text-sm">Suministro Multimarca</h2>
                    <p className="text-xs text-gray-500">Venta especializada de repuestos, partes y accesorios para montacargas de todas las marcas del sector industrial.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <span className="text-[#d32f2f] text-xs font-black tracking-widest uppercase">
                SOBRE NOSOTROS
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
                Quiénes <span className="text-[#d32f2f]">Somos</span>
              </h2>
              <div className="w-16 h-1 bg-[#d32f2f] rounded"></div>
              <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                Facirepuestos S.A.S. es una empresa colombiana legalmente constituida, nacida con el firme propósito de consolidarse como el aliado estratégico número uno en el suministro de partes, piezas e insumos automotrices para maquinaria de carga y elevación. Con sede operativa en la ciudad de Medellín, atendemos de manera integral las necesidades de empresas del sector logístico, centros de distribución, bodegas industriales y talleres de mantenimiento técnico.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="/contacto"
                  className="px-6 py-3 text-xs md:text-sm font-bold text-white bg-gray-900 hover:bg-[#d32f2f] rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  CONTACTAR AHORA
                </a>
                <a
                  href="/productos"
                  className="px-6 py-3 text-xs md:text-sm font-bold text-white bg-[#d32f2f] hover:bg-red-700 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  VER PRODUCTOS
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 tracking-tight mb-8">
            Información de <span className="text-[#d32f2f]">Contacto</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#d32f2f] flex items-center justify-center text-white shrink-0">
                <Phone size={20} />
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-500 font-bold uppercase">Teléfono</p>
                <a href={`tel:${companyInfo.phone}`} className="text-sm font-bold text-gray-900 hover:text-[#d32f2f]">
                  {companyInfo.phone}
                </a>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-[#d32f2f] flex items-center justify-center text-white shrink-0">
                <Send size={20} />
              </div>
              <div className="text-left">
                <p className="text-xs text-gray-500 font-bold uppercase">Correo</p>
                <a href={`mailto:${companyInfo.email}`} className="text-sm font-bold text-gray-900 hover:text-[#d32f2f]">
                  {companyInfo.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
