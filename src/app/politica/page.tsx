"use client";

import React from "react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Link from "next/link";
import { companyInfo } from "@/lib/data";
import { Shield, CheckCircle, Mail, Phone } from "lucide-react";

export default function PoliticaPage() {
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
            PROTECCIÓN DE DATOS
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Política de Tratamiento de <span className="text-[#d32f2f]">Datos Personales</span>
          </h1>
          <div className="w-16 h-1 bg-[#d32f2f] mx-auto rounded mb-5" />
          <p className="text-sm md:text-base max-w-2xl mx-auto leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
            En cumplimiento de la Ley 1581 de 2012 y sus decretos reglamentarios.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="flex-1 py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          {/* Last updated badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full text-xs text-gray-500 mb-10">
            <Shield size={14} />
            <span>Última actualización: Julio 2026</span>
          </div>

          {/* Section 1 */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight mb-4">
                1. <span className="text-[#d32f2f]">Identificación</span> del Responsable
              </h2>
              <div className="bg-gray-50 rounded-xl p-6 space-y-2 text-sm leading-relaxed text-gray-700">
                <p><strong>Razón Social:</strong> FaciRepuestos S.A.S.</p>
                <p><strong>NIT:</strong> 901.XXX.XXX-X</p>
                <p><strong>Domicilio:</strong> Medellín, Colombia</p>
                <p><strong>Correo electrónico:</strong> <a href={`mailto:${companyInfo.email}`} className="text-[#d32f2f] hover:underline">{companyInfo.email}</a></p>
                <p><strong>Teléfono:</strong> {companyInfo.phone}</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight mb-4">
                2. <span className="text-[#d32f2f]">Marco Legal</span> Aplicable
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Esta política se rige por las disposiciones de la Ley Estatutaria 1581 de 2012, el Decreto Reglamentario 1377 de 2013, y las normas que los modifiquen, adicionen o sustituyan, expedidas por la Superintendencia de Industria y Comercio (SIC) como autoridad de control en materia de protección de datos personales en Colombia.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight mb-4">
                3. <span className="text-[#d32f2f]">Definiciones</span>
              </h2>
              <div className="text-sm md:text-base text-gray-600 leading-relaxed space-y-3">
                <p><strong>Dato personal:</strong> Cualquier información vinculada o que pueda asociarse a una persona natural identificada o identificable.</p>
                <p><strong>Dato público:</strong> Dato que no sea semiprivado, privado o sensible. Son considerados datos públicos, entre otros, los datos relativos al estado civil de las personas, su profesión u oficio y su calidad de comerciante o de servidor público.</p>
                <p><strong>Dato sensible:</strong> Aquel que afecta la intimidad del Titular o cuyo uso indebido puede generar discriminación, tales como aquellos que revelen origen racial o étnico, orientación política, convicciones religiosas o filosóficas, pertenencia a sindicatos, datos relativos a la salud, a la vida sexual y los datos biométricos.</p>
                <p><strong>Titular:</strong> Persona natural cuyos datos personales sean objeto de tratamiento.</p>
                <p><strong>Tratamiento:</strong> Cualquier operación o conjunto de operaciones sobre datos personales, como la recolección, almacenamiento, uso, circulación o supresión.</p>
                <p><strong>Encargado del Tratamiento:</strong> Persona natural o jurídica que realice el tratamiento de datos personales por cuenta del Responsable.</p>
              </div>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight mb-4">
                4. <span className="text-[#d32f2f]">Finalidades</span> del Tratamiento
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
                FaciRepuestos S.A.S. recolecta y trata datos personales con las siguientes finalidades:
              </p>
              <ul className="space-y-3">
                {[
                  "Gestionar solicitudes de cotización, información comercial y servicios postventa.",
                  "Atender consultas, quejas, reclamos y solicitudes de nuestros clientes y usuarios.",
                  "Facturar y dar cumplimiento a obligaciones contractuales y legales.",
                  "Enviar comunicaciones comerciales, promociones, ofertas y boletines informativos relacionados con nuestros productos y servicios.",
                  "Realizar estudios de mercado, encuestas de satisfacción y análisis estadísticos.",
                  "Cumplir con obligaciones fiscales, contables y administrativas exigidas por la ley colombiana.",
                  "Gestionar procesos de selección de personal y hojas de vida recibidas.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-gray-600">
                    <CheckCircle size={18} className="text-[#d32f2f] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight mb-4">
                5. <span className="text-[#d32f2f]">Derechos</span> del Titular
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
                De conformidad con la Ley 1581 de 2012, el Titular de los datos personales tiene los siguientes derechos:
              </p>
              <ul className="space-y-3">
                {[
                  "Conocer, actualizar y rectificar sus datos personales frente a FaciRepuestos S.A.S.",
                  "Solicitar prueba de la autorización otorgada para el tratamiento de sus datos.",
                  "Ser informado por FaciRepuestos S.A.S., previa solicitud, respecto del uso que le ha dado a sus datos personales.",
                  "Presentar quejas ante la Superintendencia de Industria y Comercio por infracciones a la ley.",
                  "Revocar la autorización y/o solicitar la supresión de sus datos personales cuando no se vulneren derechos de terceros o exista un deber legal de conservarlos.",
                  "Acceder en forma gratuita a sus datos personales que hayan sido objeto de tratamiento.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm md:text-base text-gray-600">
                    <CheckCircle size={18} className="text-[#d32f2f] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight mb-4">
                6. <span className="text-[#d32f2f]">Autorización</span> y Consentimiento
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                La recolección de datos personales por parte de FaciRepuestos S.A.S. requiere el consentimiento previo, expreso e informado del Titular. Al diligenciar formularios de contacto, cotización o registro en nuestro sitio web, el Titular autoriza de manera voluntaria el tratamiento de sus datos personales de acuerdo con las finalidades descritas en la presente política. El Titular puede ejercer sus derechos en cualquier momento mediante los canales dispuestos para tal fin.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight mb-4">
                7. <span className="text-[#d32f2f]">Seguridad</span> de la Información
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                FaciRepuestos S.A.S. adopta las medidas técnicas, administrativas y humanas necesarias para garantizar la seguridad, confidencialidad e integridad de los datos personales, y evitar su adulteración, pérdida, consulta, uso o acceso no autorizado. Sin embargo, ninguna transmisión de datos por internet o sistema de almacenamiento electrónico puede garantizarse como 100% segura.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight mb-4">
                8. <span className="text-[#d32f2f]">Periodo</span> de Conservación
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                Los datos personales proporcionados se conservarán mientras sean necesarios para las finalidades del tratamiento o mientras el Titular no solicite su supresión. Una vez cumplidas las finalidades, los datos serán eliminados de nuestras bases de datos, salvo que exista una obligación legal de conservarlos por períodos adicionales.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight mb-4">
                9. <span className="text-[#d32f2f]">Procedimiento</span> para Ejercer los Derechos
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-4">
                El Titular puede ejercer sus derechos de conocer, actualizar, rectificar, suprimir sus datos personales, revocar la autorización o solicitar información sobre el uso de los mismos, mediante comunicación escrita dirigida a:
              </p>
              <div className="bg-gray-50 rounded-xl p-6 space-y-3 text-sm leading-relaxed">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-[#d32f2f] shrink-0" />
                  <span><strong>Correo electrónico:</strong> <a href={`mailto:${companyInfo.email}`} className="text-[#d32f2f] hover:underline">{companyInfo.email}</a></span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-[#d32f2f] shrink-0" />
                  <span><strong>Teléfono:</strong> {companyInfo.phone}</span>
                </div>
              </div>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed mt-4">
                La solicitud deberá contener: (i) nombre completo e identificación del Titular, (ii) datos de contacto, (iii) descripción clara de la solicitud, (iv) documentos que acrediten la identidad. FaciRepuestos S.A.S. dará respuesta en un plazo máximo de quince (15) días hábiles contados a partir de la recepción de la solicitud, de conformidad con la ley.
              </p>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-gray-900 tracking-tight mb-4">
                10. <span className="text-[#d32f2f]">Vigencia</span> y Modificaciones
              </h2>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                FaciRepuestos S.A.S. se reserva el derecho de modificar esta política en cualquier momento. Los cambios entrarán en vigor desde su publicación en este sitio web. Recomendamos a los Titulares revisar periódicamente esta página para estar informados sobre cómo protegemos sus datos personales.
              </p>
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
