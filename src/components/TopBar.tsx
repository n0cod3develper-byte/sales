"use client";

import React from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { companyInfo } from "@/lib/data";

export default function TopBar() {
  return (
    <div className="w-full bg-[#1e2229] text-gray-300 text-xs py-2.5 px-4 md:px-8 border-b border-gray-800 hidden sm:block">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        {/* Info Items */}
        <div className="flex flex-wrap items-center gap-6">
          <a
            href={`mailto:${companyInfo.email}`}
            className="flex items-center gap-2 hover:text-[#d32f2f] transition-colors duration-200"
          >
            <Mail size={14} className="text-[#d32f2f]" />
            <span>{companyInfo.email}</span>
          </a>
          <div className="flex items-center gap-2">
            <MapPin size={14} className="text-[#d32f2f]" />
            <span>{companyInfo.address}</span>
          </div>
          <a
            href={`tel:${companyInfo.phone}`}
            className="flex items-center gap-2 hover:text-[#d32f2f] transition-colors duration-200"
          >
            <Phone size={14} className="text-[#d32f2f]" />
            <span>{companyInfo.phone}</span>
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href={companyInfo.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Síguenos en Facebook"
            className="hover:text-[#d32f2f] transition-colors duration-200"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" role="img" aria-hidden="true">
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
            </svg>
          </a>
          <a
            href={companyInfo.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Síguenos en Instagram"
            className="hover:text-[#d32f2f] transition-colors duration-200"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" role="img" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

