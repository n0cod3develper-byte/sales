"use client";

import React from "react";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { companyInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-[#12161a] text-gray-400 text-sm">
      {/* Top Footer Widget Area */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Col 1: Logo & Brief */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/logo_faci_ne.png"
              alt="Logo FaciRepuestos Colombia"
              width={120}
              height={48}
              className="h-12 w-auto object-contain"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                const parent = e.currentTarget.parentElement;
                if (parent) {
                  const textLogo = document.createElement("div");
                  textLogo.className = "font-black text-2xl tracking-tighter flex items-center";
                  textLogo.innerHTML = `<span class="text-white">FORKLIFT</span><span class="text-[#d32f2f] bg-white text-black px-2 py-0.5 ml-1 rounded">TEC</span>`;
                  parent.appendChild(textLogo);
                }
              }}
            />
          </div>
          <p className="text-xs text-gray-500 leading-relaxed">
            Especialistas en venta de repuestos multimarca para montacargas en Colombia.
          </p>
        </div>

        {/* Col 2: Navigation Links */}
        <div>
          <h4 className="text-white font-bold text-base mb-6 relative after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:h-0.5 after:w-10 after:bg-[#d32f2f]">
            Navegación
          </h4>
          <ul className="space-y-3 text-xs">
            <li>
              <Link href="/" className="hover:text-[#d32f2f] transition-colors">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/nosotros" className="hover:text-[#d32f2f] transition-colors">
                Quiénes Somos
              </Link>
            </li>
         
            <li>
              <Link href="/blog" className="hover:text-[#d32f2f] transition-colors">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="hover:text-[#d32f2f] transition-colors">
                Contáctenos
              </Link>
            </li>
            <li>
              <Link href="/politica" className="hover:text-[#d32f2f] transition-colors text-gray-500">
                Política de Datos
              </Link>
            </li>
            <li>
              <Link href="/terminos" className="hover:text-[#d32f2f] transition-colors text-gray-500">
                Términos y Condiciones
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="hover:text-[#d32f2f] transition-colors text-gray-500">
                Política de Cookies
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Information & Contact */}
        <div>
          <h4 className="text-white font-bold text-base mb-6 relative after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:h-0.5 after:w-10 after:bg-[#d32f2f]">
            Información
          </h4>
          <ul className="space-y-4 text-xs">
            <li className="flex items-start gap-3">
              <Phone size={16} className="text-[#d32f2f] shrink-0 mt-0.5" />
              <a href={`tel:${companyInfo.whatsapp}`} className="hover:text-[#d32f2f] transition-colors">
                {companyInfo.whatsapp}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={16} className="text-[#d32f2f] shrink-0 mt-0.5" />
              <a href={`mailto:${companyInfo.email}`} className="hover:text-[#d32f2f] transition-colors break-all">
                {companyInfo.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-[#d32f2f] shrink-0 mt-0.5" />
              <span>{companyInfo.address}</span>
            </li>
          </ul>
        </div>

        {/* Col 4: Follow Us */}
        <div>
          <h4 className="text-white font-bold text-base mb-6 relative after:content-[''] after:absolute after:left-0 after:bottom-[-8px] after:h-0.5 after:w-10 after:bg-[#d32f2f]">
            Síguenos
          </h4>
          <div className="flex gap-4">
            <a
              href={companyInfo.socials.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-gray-800 hover:bg-[#d32f2f] text-white rounded-lg transition-all duration-300 flex items-center justify-center"
              aria-label="Síguenos en Facebook"
            >
              <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24" role="img" aria-hidden="true">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
              </svg>
            </a>
            <a
              href={companyInfo.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-gray-800 hover:bg-[#d32f2f] text-white rounded-lg transition-all duration-300 flex items-center justify-center"
              aria-label="Síguenos en Instagram"
            >
              <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24" role="img" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>
      </div>


      {/* Bottom Copyright Bar */}
      <div className="border-t border-gray-800 bg-[#0c0f12] py-6 px-4 md:px-8 text-center text-xs text-gray-500">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} - FaciRepuestos S.A.S. Todos los derechos reservados.</p>
          
        </div>
      </div>
    </footer>
  );
}
