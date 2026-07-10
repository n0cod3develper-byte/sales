"use client";

import React, { useState } from "react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { companyInfo } from "@/lib/data";
import { Phone, Send, MapPin, CheckCircle, MessageSquare } from "lucide-react";

export default function ContactoPage() {
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
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <TopBar />
      <Header />

      {/* Page Header */}
      <section
        className="relative py-20 md:py-28"
        style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%)" }}
      >
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] mb-5"
            style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.1)" }}>
            ESTAMOS PARA AYUDARLE
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Contáctenos <span className="text-[#d32f2f]">Ahora</span>
          </h1>
          <div className="w-16 h-1 bg-[#d32f2f] mx-auto rounded mb-5" />
          <p className="text-sm md:text-base max-w-2xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Déjenos sus datos y uno de nuestros asesores especializados le brindará una cotización formal y personalizada.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="flex-1 py-16 md:py-24 bg-[#12161a] text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Info Column */}
            <div className="space-y-6">
              <span className="text-[#d32f2f] text-xs font-black tracking-widest uppercase">
                INFORMACIÓN DE CONTACTO
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                ¿TIENE DUDAS O REQUERIMIENTOS?
              </h2>
              <div className="w-16 h-1 bg-[#d32f2f] rounded" />
              <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-md">
                Estamos listos para atenderle. Complete el formulario o contáctenos directamente a través de nuestros canales oficiales.
              </p>

              <div className="space-y-4 pt-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-[#d32f2f] shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h3 className="text-[10px] text-gray-500 font-bold uppercase">LLÁMENOS</h3>
                    <a href={`tel:${companyInfo.phone}`} className="text-xs font-bold text-white hover:text-[#d32f2f] transition-colors">
                      {companyInfo.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-[#d32f2f] shrink-0">
                    <Send size={18} />
                  </div>
                  <div>
                    <h3 className="text-[10px] text-gray-500 font-bold uppercase">CORREO ELECTRÓNICO</h3>
                    <a href={`mailto:${companyInfo.email}`} className="text-xs font-bold text-white hover:text-[#d32f2f] transition-colors break-all">
                      {companyInfo.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center text-[#d32f2f] shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h3 className="text-[10px] text-gray-500 font-bold uppercase">UBICACIÓN</h3>
                    <p className="text-xs font-bold text-white">{companyInfo.address}</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <div className="pt-6">
                <a
                  href={`https://api.whatsapp.com/send?phone=${companyInfo.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-6 py-3.5 bg-[#25d366] hover:bg-[#20ba5a] text-white font-bold text-xs md:text-sm rounded-xl shadow-lg shadow-green-500/25 transition-all duration-300 hover:scale-[1.02]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Escríbanos por WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Form Column */}
            <div className="bg-[#1e2229] border border-gray-800 p-8 rounded-2xl shadow-xl">
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-12 text-center space-y-4 animate-fade-in">
                  <CheckCircle size={56} className="text-[#25d366]" />
                  <h2 className="text-white font-extrabold text-lg">¡Mensaje Enviado!</h2>
                  <p className="text-xs text-gray-400 max-w-xs">
                    Su consulta ha sido procesada con éxito. Un especialista se comunicará con usted a la brevedad.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {error && (
                    <div className="bg-red-900/30 border border-red-800 text-red-400 text-xs px-4 py-3 rounded-lg">
                      {error}
                    </div>
                  )}
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
