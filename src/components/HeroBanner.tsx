"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, PhoneCall } from "lucide-react";
import { companyInfo } from "@/lib/data";

const slides = [
  {
    image: "/Banne_3.png",
    title: "REPUESTOS",
    subtitle: "Soluciones Integrales para su Operación Logística",
    desc: "Venta de Insumos y Repuesyos, Venta y alquiler de montacargas.",
  },
  {
    image: "/Montacargas_Pasillo_Angosto.png",
    title: "Montacargas Pasillo Angosto",
    subtitle: "Montacargas Pasillo Angosto",
    desc: "Si buscas optimizar al máximo el espacio de tu almacén o centro de distribución, nuestros montacargas de pasillo angosto son la solución perfecta para tus necesidades.",
  },
  {
    image: "/almacen-1.png",
    title: "LLANTAS INDUSTRIALES Y ACCESORIOS",
    subtitle: "El Repuesto Exacto que Necesita",
    desc: "Amplio inventario de llantas, motores, aditamentos y accesorios de marcas líderes a nivel mundial.",
  },
];

export default function HeroBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[500px] md:h-[650px] overflow-hidden bg-gray-900 select-none">
      {/* Slides */}
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
            idx === current ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"
          }`}
        >
          {/* Background Image with Overlay */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-transparent" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
              <div className="max-w-2xl text-left text-white space-y-4 md:space-y-6">
                <span className="inline-block text-[#d32f2f] text-xs md:text-sm font-black tracking-widest uppercase border-l-4 border-[#d32f2f] pl-3">
                  {slide.title}
                </span>
                {idx === 0 ? (
                  <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                    {slide.subtitle}
                  </h1>
                ) : (
                  <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
                    {slide.subtitle}
                  </h2>
                )}
                <p className="text-sm md:text-base text-gray-300 font-medium leading-relaxed max-w-lg">
                  {slide.desc}
                </p>
                <div className="flex flex-wrap gap-4 pt-2">
                  <a
                    href="#contacto"
                    className="px-6 py-3 text-xs md:text-sm font-bold text-white bg-[#d32f2f] hover:bg-red-700 rounded-lg shadow-lg hover:shadow-red-500/20 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    COTIZAR EQUIPO
                  </a>
                  <a
                    href={`https://api.whatsapp.com/send?phone=${companyInfo.whatsapp.replace(/\D/g, "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 text-xs md:text-sm font-bold text-white bg-transparent hover:bg-white/10 border border-white/30 rounded-lg hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <PhoneCall size={16} />
                    <span>ASESOR ONLINE</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full backdrop-blur-sm transition-all duration-200"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 text-white/70 hover:text-white bg-black/20 hover:bg-black/40 rounded-full backdrop-blur-sm transition-all duration-200"
        aria-label="Next Slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              idx === current ? "bg-[#d32f2f] w-8" : "bg-white/40 hover:bg-white/70"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
