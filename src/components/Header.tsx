"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { products } from "@/lib/data";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDropdown = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-2"
          : "bg-white/95 backdrop-blur-md py-4 border-b border-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="Logo Faci Repuestos"
            width={120}
            height={48}
            className="h-10 md:h-12 w-auto object-contain transition-transform duration-300 hover:scale-102"
            onError={(e) => {
              // Fallback SVG in case image fails to load
              e.currentTarget.style.display = "none";
              const parent = e.currentTarget.parentElement;
              if (parent) {
                const textLogo = document.createElement("div");
                textLogo.className = "font-black text-2xl tracking-tighter flex items-center";
                textLogo.innerHTML = `<span class="text-gray-900">FACI</span><span class="text-[#d32f2f] bg-black text-white px-2 py-0.5 ml-1 rounded">REPUESTOS</span>`;
                parent.appendChild(textLogo);
              }
            }}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          <Link
            href="/"
            className="px-4 py-2 text-sm font-semibold text-gray-800 hover:text-[#d32f2f] hover:bg-gray-50 rounded-lg transition-all duration-200"
          >
            Inicio
          </Link>
          <Link
            href="#nosotros"
            className="px-4 py-2 text-sm font-semibold text-gray-800 hover:text-[#d32f2f] hover:bg-gray-50 rounded-lg transition-all duration-200"
          >
            Nosotros
          </Link>

          {/* Products Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 px-4 py-2 text-sm font-semibold text-gray-800 hover:text-[#d32f2f] hover:bg-gray-50 rounded-lg transition-all duration-200">
              <span>Productos</span>
              <ChevronDown size={15} />
            </button>
            <div className="absolute left-0 top-full mt-1 w-64 bg-white border border-gray-100 rounded-xl shadow-xl py-2 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 z-50">
              {products.map((prod) => (
                <Link
                  key={prod.id}
                  href={`#productos-${prod.slug}`}
                  className="block px-5 py-2.5 text-xs font-medium text-gray-700 hover:text-[#d32f2f] hover:bg-gray-50 transition-colors duration-200"
                >
                  {prod.title}
                </Link>
              ))}
            </div>
          </div>

         <Link
            href="#blog"
            className="px-4 py-2 text-sm font-semibold text-gray-800 hover:text-[#d32f2f] hover:bg-gray-50 rounded-lg transition-all duration-200"
          >
            Blog
          </Link>
          <Link
            href="#contacto"
            className="ml-2 px-5 py-2 text-sm font-semibold text-white bg-[#d32f2f] hover:bg-red-700 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Contacto
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-gray-700 hover:text-[#d32f2f] transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`lg:hidden fixed inset-0 top-[60px] md:top-[65px] bg-white z-40 flex flex-col border-t border-gray-100 shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-semibold text-gray-800 hover:text-[#d32f2f]"
          >
            Inicio
          </Link>
          <Link
            href="#nosotros"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-semibold text-gray-800 hover:text-[#d32f2f]"
          >
            Nosotros
          </Link>

          {/* Products Dropdown Mobile */}
          <div>
            <button
              onClick={() => toggleDropdown("productos")}
              className="flex justify-between items-center w-full py-2 text-base font-semibold text-gray-800 hover:text-[#d32f2f]"
            >
              <span>Productos</span>
              <ChevronDown
                size={18}
                className={`transition-transform duration-200 ${
                  activeDropdown === "productos" ? "rotate-180" : ""
                }`}
              />
            </button>
            <div
              className={`pl-4 border-l-2 border-gray-100 overflow-hidden transition-all duration-300 ${
                activeDropdown === "productos" ? "max-h-[300px] mt-2 space-y-2 py-1" : "max-h-0"
              }`}
            >
              {products.map((prod) => (
                <Link
                  key={prod.id}
                  href={`#productos-${prod.slug}`}
                  onClick={() => setIsOpen(false)}
                  className="block py-1 text-sm font-medium text-gray-600 hover:text-[#d32f2f]"
                >
                  {prod.title}
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="#blog"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-semibold text-gray-800 hover:text-[#d32f2f]"
          >
            Blog
          </Link>
          <Link
            href="#contacto"
            onClick={() => setIsOpen(false)}
            className="block text-center py-3 text-base font-bold text-white bg-[#d32f2f] hover:bg-red-700 rounded-lg shadow-md transition-colors"
          >
            Contacto
          </Link>
        </div>
      </div>
    </header>
  );
}
