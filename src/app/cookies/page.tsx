"use client";

import React from "react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";
import { companyInfo } from "@/lib/data";
import { Shield, CheckCircle, Cookie } from "lucide-react";

export default function CookiesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <TopBar />
      <Header />

      {/* Page Header */}
      <section
        className="relative py-20 md:py-24"
        style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 60%, #0f3460 100%)" }}
      >
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 text-center">
          <span className="inline-block px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.15em] mb-5"
            style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.7)", border: "1px solid rgba(255,255,255,0.1)" }}>
            PRIVACIDAD EN LÍNEA
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Política de <span className="text-[#d32f2f]">Cookies</span>
          </h1>
          <div className="w-16 h-1 bg-[#d32f2f] mx-auto rounded mb-5" />
          <p className="text-sm md:text-base max-w-2xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Información sobre el uso de cookies y tecnologías similares en nuestro sitio web.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="flex-1 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full text-xs text-gray-500 mb-10">
            <Cookie size={14} />
            <span>Última actualización: Julio 2026</span>
          </div>

          <div className="space-y-8">
            {/* Section 1 */}
            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight mb-4">
                1. <span className="text-[#d32f2f]">¿Qué</span> son las Cookies?
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Las cookies son pequeños archivos de texto que se almacenan en su navegador o dispositivo cuando visita un sitio web. Estos archivos permiten que el sitio web recuerde sus preferencias, acciones y navegación durante un período de tiempo, con el fin de mejorar su experiencia de navegación y ofrecer servicios personalizados.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight mb-4">
                2. <span className="text-[#d32f2f]">Tipos</span> de Cookies que Utilizamos
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
                En facirepuestos.com.co utilizamos las siguientes categorías de cookies:
              </p>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-extrabold text-sm md:text-base text-gray-900 mb-2">Cookies Técnicas o Esenciales</h3>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                    Son necesarias para el funcionamiento básico del sitio web. Permiten la navegación y el acceso a áreas seguras. Sin estas cookies, el sitio no puede funcionar correctamente. No requieren consentimiento previo del usuario.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-extrabold text-sm md:text-base text-gray-900 mb-2">Cookies de Preferencias o Personalización</h3>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                    Permiten recordar información para que el usuario acceda al servicio con características personalizadas, como el idioma o la región. Si el usuario no acepta estas cookies, la experiencia de navegación puede ser menos personalizada.
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-5">
                  <h3 className="font-extrabold text-sm md:text-base text-gray-900 mb-2">Cookies de Análisis o Estadísticas</h3>
                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed">
                    Permiten cuantificar el número de usuarios y realizar mediciones y análisis estadísticos de la actividad de los usuarios en el sitio web. La información recopilada es agregada y anónima. En nuestro sitio utilizamos cookies propias para entender cómo los usuarios interactúan con nuestras páginas.
                  </p>
                </div>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight mb-4">
                3. <span className="text-[#d32f2f]">Cookies</span> de Terceros
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Actualmente, nuestro sitio web no utiliza cookies de terceros para publicidad o seguimiento externo. Solo empleamos cookies propias con fines técnicos y analíticos básicos. En caso de que en el futuro llegáramos a integrar servicios de terceros que utilicen cookies (como Google Analytics u otras plataformas de análisis), lo notificaremos oportunamente y solicitaremos el consentimiento correspondiente de conformidad con la ley aplicable.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight mb-4">
                4. <span className="text-[#d32f2f]">Base</span> Legal del Tratamiento
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                De conformidad con la legislación colombiana (Ley 1581 de 2012 y normas concordantes) y la normativa internacional aplicable, el tratamiento de datos derivado del uso de cookies se fundamenta en el consentimiento informado del usuario para las cookies no esenciales, y en la necesidad técnica para las cookies esenciales. Al continuar navegando en nuestro sitio web sin modificar la configuración de cookies de su navegador, usted acepta el uso de las cookies descritas en esta política.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight mb-4">
                5. <span className="text-[#d32f2f]">Cómo</span> Controlar y Eliminar Cookies
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
                Usted puede configurar su navegador para aceptar, rechazar o eliminar cookies en cualquier momento. Los pasos para gestionar las cookies varían según el navegador. A continuación, proporcionamos enlaces a las instrucciones de los navegadores más utilizados:
              </p>
              <ul className="space-y-3">
                {[
                  { browser: "Google Chrome", url: "https://support.google.com/chrome/answer/95647" },
                  { browser: "Mozilla Firefox", url: "https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" },
                  { browser: "Microsoft Edge", url: "https://support.microsoft.com/es-es/microsoft-edge/eliminar-cookies-en-microsoft-edge" },
                  { browser: "Safari (macOS)", url: "https://support.apple.com/es-es/guide/safari/sfri11471/mac" },
                  { browser: "Safari (iOS)", url: "https://support.apple.com/es-es/HT201265" },
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-gray-600">
                    <CheckCircle size={18} className="text-[#d32f2f] shrink-0 mt-0.5" />
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#d32f2f] hover:underline font-medium"
                    >
                      {item.browser}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mt-4">
                Tenga en cuenta que al deshabilitar las cookies técnicas o esenciales, algunas funcionalidades del sitio web podrían verse afectadas, como la visualización correcta de las páginas.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight mb-4">
                6. <span className="text-[#d32f2f]">Consentimiento</span>
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Al acceder y navegar por nuestro sitio web, usted otorga su consentimiento informado para el uso de cookies de acuerdo con los términos descritos en esta política. En caso de que no desee aceptar el uso de cookies, le recomendamos configurar su navegador para rechazarlas o abandonar el sitio web. El uso continuado del sitio web implica la aceptación de esta política de cookies.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight mb-4">
                7. <span className="text-[#d32f2f]">Actualizaciones</span> de la Política de Cookies
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                FaciRepuestos S.A.S. se reserva el derecho de modificar la presente Política de Cookies en cualquier momento. Las modificaciones entrarán en vigor desde su publicación en esta página. Recomendamos a los usuarios revisar periódicamente esta política para mantenerse informados sobre cómo utilizamos las cookies.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight mb-4">
                8. <span className="text-[#d32f2f]">Contacto</span>
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
                Si tiene alguna pregunta, inquietud o solicitud relacionada con nuestra Política de Cookies, puede contactarnos a través de los siguientes canales:
              </p>
              <div className="bg-gray-50 rounded-xl p-6 space-y-3 text-sm leading-relaxed">
                <p><strong>Correo electrónico:</strong> <a href={`mailto:${companyInfo.email}`} className="text-[#d32f2f] hover:underline">{companyInfo.email}</a></p>
                <p><strong>Teléfono:</strong> {companyInfo.phone}</p>
                <p><strong>Dirección:</strong> {companyInfo.address}</p>
              </div>
            </div>
          </div>

          {/* Back to home link */}
          <div className="mt-16 pt-8 border-t border-gray-100 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#d32f2f] hover:underline"
            >
              ← Volver al inicio
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
