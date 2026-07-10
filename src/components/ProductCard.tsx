"use client";

import React from "react";
import { ArrowRight } from "lucide-react";
import { Product } from "@/lib/data";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article
      id={`productos-${product.slug}`}
      className="product-card group relative bg-white rounded-2xl overflow-hidden flex flex-col"
      style={{
        border: "1px solid rgba(0,0,0,0.06)",
        boxShadow: "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)",
        transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      {/* Image Container */}
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: "4/3" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={product.image}
          alt={product.title}
          width={400}
          height={300}
          className="w-full h-full object-cover"
          style={{
            transition: "transform 300ms cubic-bezier(0.4, 0, 0.2, 1)",
          }}
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(0deg, rgba(0,0,0,0.12) 0%, transparent 40%)",
            transition: "opacity 300ms ease",
          }}
        />
        {/* Category badge */}
        <div
          className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
          style={{
            background: "rgba(255,255,255,0.92)",
            backdropFilter: "blur(8px)",
            color: "#1a1a2e",
            letterSpacing: "0.08em",
          }}
        >
          Catálogo
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 md:p-6">
        {/* Title */}
        <h3
          className="font-extrabold tracking-tight leading-snug mb-2"
          style={{
            fontSize: "clamp(0.95rem, 1.5vw, 1.15rem)",
            color: "#1a1a2e",
            transition: "color 300ms ease",
          }}
        >
          {product.title}
        </h3>

        {/* Description */}
        <p
          className="leading-relaxed mb-5 flex-1"
          style={{
            fontSize: "0.8rem",
            color: "#4b5563",
            lineHeight: "1.65",
          }}
        >
          {product.description}
        </p>

        {/* CTA Button */}
        <a
          href="#contacto"
          className="product-cta-btn inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider"
          style={{
            background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)",
            color: "#ffffff",
            transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1)",
            letterSpacing: "0.1em",
          }}
          aria-label={`Cotizar ${product.title}`}
        >
          <span>Cotizar Ahora</span>
          <ArrowRight
            size={14}
            style={{
              transition: "transform 300ms ease",
            }}
          />
        </a>
      </div>
    </article>
  );
}
