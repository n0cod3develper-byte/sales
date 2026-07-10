"use client";

import React from "react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";
import { companyInfo } from "@/lib/data";
import { Shield, CheckCircle, FileText } from "lucide-react";

export default function TerminosPage() {
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
            DOCUMENTO LEGAL
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Términos y Condiciones de <span className="text-[#d32f2f]">Uso del Sitio Web</span>
          </h1>
          <div className="w-16 h-1 bg-[#d32f2f] mx-auto rounded mb-5" />
          <p className="text-sm md:text-base max-w-2xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            Al acceder y utilizar este sitio web, usted acepta los siguientes términos y condiciones.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="flex-1 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          {/* Last updated badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full text-xs text-gray-500 mb-10">
            <FileText size={14} />
            <span>Última actualización: Julio 2026</span>
          </div>

          <div className="space-y-8">
            {/* Section 1 */}
            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight mb-4">
                1. <span className="text-[#d32f2f]">Aceptación</span> de los Términos
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Al acceder y utilizar el sitio web <strong>facirepuestos.com.co</strong> (en adelante, &laquo;el Sitio Web&raquo;), usted acepta cumplir y quedar vinculado por los presentes Términos y Condiciones de Uso. Si no está de acuerdo con alguno de estos términos, le solicitamos que no utilice el Sitio Web. El uso continuado del Sitio Web constituye la aceptación plena de estos términos.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight mb-4">
                2. <span className="text-[#d32f2f]">Información</span> del Titular del Sitio Web
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 space-y-2 text-sm leading-relaxed text-gray-700">
                <p><strong>Razón Social:</strong> FaciRepuestos S.A.S.</p>
                <p><strong>NIT:</strong> 901.XXX.XXX-X</p>
                <p><strong>Domicilio:</strong> Medellín, Colombia</p>
                <p><strong>Correo electrónico:</strong> <a href={`mailto:${companyInfo.email}`} className="text-[#d32f2f] hover:underline">{companyInfo.email}</a></p>
                <p><strong>Teléfono:</strong> {companyInfo.phone}</p>
                <p><strong>Sitio Web:</strong> facirepuestos.com.co</p>
              </div>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight mb-4">
                3. <span className="text-[#d32f2f]">Objeto</span>
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                El presente documento establece los términos y condiciones bajo los cuales FaciRepuestos S.A.S. pone a disposición de los usuarios el Sitio Web y la información, productos y servicios en él contenidos. El Sitio Web tiene como finalidad principal la presentación corporativa de la empresa, la exhibición de productos (equipos, repuestos, accesorios, llantas industriales, aditamentos, baterías y mangueras hidráulicas para montacargas) y la recepción de solicitudes de cotización y consultas comerciales a través de los formularios de contacto habilitados.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight mb-4">
                4. <span className="text-[#d32f2f]">Uso</span> del Sitio Web
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
                El usuario se obliga a hacer un uso adecuado y lícito del Sitio Web y de los contenidos y servicios ofrecidos, de conformidad con la ley, la moral, las buenas costumbres y el orden público. Queda expresamente prohibido:
              </p>
              <ul className="space-y-3">
                {[
                  "Utilizar el Sitio Web con fines ilícitos, contrarios a lo establecido en estos términos o que puedan causar daño a terceros.",
                  "Realizar actividades que interfieran o interrumpan el funcionamiento del Sitio Web, los servidores o las redes conectadas al mismo.",
                  "Introducir o difundir virus informáticos, malware, spyware o cualquier otro código malicioso que pueda dañar o alterar el funcionamiento del Sitio Web.",
                  "Intentar acceder, modificar o manipular sin autorización los sistemas, datos o información de FaciRepuestos S.A.S. o de terceros.",
                  "Reproducir, copiar, distribuir, transformar o modificar los contenidos del Sitio Web sin la autorización expresa de FaciRepuestos S.A.S.",
                  "Utilizar los datos personales de otros usuarios sin su consentimiento expreso.",
                  "Remitir comunicaciones no solicitadas (spam) a través de los formularios del Sitio Web.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-gray-600">
                    <CheckCircle size={18} className="text-[#d32f2f] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight mb-4">
                5. <span className="text-[#d32f2f]">Propiedad</span> Intelectual e Industrial
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Todos los contenidos del Sitio Web, incluyendo de manera enunciativa pero no limitativa, textos, imágenes, logotipos, marcas, nombres comerciales, gráficos, iconos, diseño, estructura de navegación y código fuente, son propiedad intelectual e industrial de FaciRepuestos S.A.S. o de terceros titulares de los derechos que han autorizado su uso. Queda prohibida su reproducción total o parcial, distribución, comunicación pública, transformación o cualquier otra forma de explotación sin la autorización previa y por escrito de FaciRepuestos S.A.S.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight mb-4">
                6. <span className="text-[#d32f2f]">Enlaces</span> a Terceros
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                El Sitio Web puede contener enlaces a sitios web de terceros, como redes sociales (Facebook, Instagram, WhatsApp). FaciRepuestos S.A.S. no se hace responsable del contenido, políticas de privacidad o prácticas de dichos sitios externos. La inclusión de estos enlaces no implica respaldo, asociación o relación alguna con los titulares de dichos sitios. El acceso a estos sitios se realiza bajo la exclusiva responsabilidad del usuario.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight mb-4">
                7. <span className="text-[#d32f2f]">Limitación</span> de Responsabilidad
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                FaciRepuestos S.A.S. no garantiza la disponibilidad continua e ininterrumpida del Sitio Web, ni que este se encuentre libre de errores, virus o cualquier otro elemento dañino. En la medida máxima permitida por la ley colombiana, FaciRepuestos S.A.S. no será responsable por daños directos, indirectos, incidentales, consecuenciales o punitivos derivados del uso o la imposibilidad de uso del Sitio Web. La información proporcionada en el Sitio Web tiene carácter meramente informativo y no constituye asesoría profesional ni vinculante para la celebración de transacciones comerciales. Los precios, especificaciones y disponibilidad de productos pueden variar sin previo aviso.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight mb-4">
                8. <span className="text-[#d32f2f]">Protección</span> de Datos Personales
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                El tratamiento de los datos personales proporcionados por los usuarios a través del Sitio Web se rige por lo dispuesto en nuestra{' '}
                <Link href="/politica" className="text-[#d32f2f] hover:underline font-bold">
                  Política de Tratamiento de Datos Personales
                </Link>
                , la cual forma parte integral de estos términos y condiciones. Al proporcionar sus datos personales, el usuario autoriza expresamente su tratamiento de acuerdo con dicha política.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight mb-4">
                9. <span className="text-[#d32f2f]">Comunicaciones</span> Comerciales
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Al proporcionar sus datos de contacto a través de los formularios del Sitio Web, el usuario autoriza a FaciRepuestos S.A.S. a enviar comunicaciones comerciales, promociones, ofertas y boletines informativos relacionados con sus productos y servicios. El usuario podrá cancelar en cualquier momento la recepción de estas comunicaciones mediante el enlace de desuscripción incluido en cada correo electrónico o contactando directamente a{' '}
                <a href={`mailto:${companyInfo.email}`} className="text-[#d32f2f] hover:underline">{companyInfo.email}</a>.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight mb-4">
                10. <span className="text-[#d32f2f]">Ley</span> Aplicable y Jurisdicción
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Estos términos y condiciones se rigen por las leyes de la República de Colombia. Cualquier controversia derivada del uso del Sitio Web o de la interpretación o aplicación de estos términos se someterá a la jurisdicción de los jueces y tribunales de la ciudad de Medellín, Colombia, renunciando las partes a cualquier otro fuero que pudiera corresponderles.
              </p>
            </div>

            {/* Section 11 */}
            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight mb-4">
                11. <span className="text-[#d32f2f]">Modificaciones</span>
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                FaciRepuestos S.A.S. se reserva el derecho de modificar los presentes términos y condiciones en cualquier momento. Las modificaciones entrarán en vigor desde su publicación en el Sitio Web. Se recomienda al usuario revisar periódicamente esta página para estar informado de posibles cambios. El uso continuado del Sitio Web después de cualquier modificación constituye la aceptación de los nuevos términos.
              </p>
            </div>

            {/* Section 12 */}
            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight mb-4">
                12. <span className="text-[#d32f2f]">Contacto</span>
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
                Para cualquier consulta, aclaración o solicitud relacionada con estos términos y condiciones, puede contactarnos a través de los siguientes canales:
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
