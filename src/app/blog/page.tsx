"use client";

import React from "react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { blogItems } from "@/lib/data";
import Link from "next/link";

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <TopBar />
      <Header />

      {/* Blog Header */}
      <section
        className="relative py-20 md:py-28"
        style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%)" }}
      >
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] mb-5"
            style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.1)" }}>
            ARTÍCULOS E INFORMACIÓN
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Nuestro <span className="text-[#d32f2f]">Blog</span>
          </h1>
          <div className="w-16 h-1 bg-[#d32f2f] mx-auto rounded mb-5" />
          <p className="text-sm md:text-base max-w-2xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Información técnica, consejos y novedades sobre montacargas, repuestos industriales y mantenimiento de equipos de carga.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="flex-1 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogItems.map((item) => (
              <article
                key={item.id}
                className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                <div className="relative h-48 bg-gray-100 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={300}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
                <div className="p-6 space-y-4 flex-1 flex flex-col">
                  <span className="text-gray-400 text-[10px] font-bold uppercase">{item.date}</span>
                  <h2 className="text-gray-900 font-extrabold text-sm md:text-base tracking-tight leading-snug hover:text-[#d32f2f] transition-colors">
                    {item.title}
                  </h2>
                  <p className="leading-relaxed flex-1" style={{ fontSize: "0.8rem", color: "#4b5563" }}>
                    {item.excerpt}
                  </p>
                  <div className="pt-4 border-t border-gray-50">
                    <Link
                      href="/blog"
                      className="text-xs font-black text-[#d32f2f] hover:underline"
                    >
                      LEER MÁS
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
