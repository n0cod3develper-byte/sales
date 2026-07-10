"use client";

import React from "react";
import { companyInfo } from "@/lib/data";

export default function WhatsAppButton() {
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${companyInfo.whatsapp.replace(/\D/g, "")}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-green-300"
    >
      {/* Ripple/Pulse Effect */}
      <span className="absolute w-full h-full bg-[#25D366] rounded-full -z-10 animate-ping opacity-25 group-hover:animate-none"></span>

      {/* WhatsApp SVG Icon */}
      <svg
        className="w-8 h-8 fill-current"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.59 2.002 14.153.971 11.517.97 6.13.97 1.743 5.34 1.739 10.771c-.001 1.679.452 3.3 1.309 4.757l-.989 3.613 3.708-.973zm11.332-6.86c-.314-.157-1.858-.916-2.147-1.022-.29-.105-.5-.157-.712.157-.21.314-.817 1.022-1.001 1.23-.184.21-.368.236-.682.079-.313-.157-1.325-.488-2.522-1.558-.931-.83-1.559-1.856-1.741-2.17-.184-.315-.02-.485.137-.641.141-.14.314-.367.47-.55.158-.184.21-.315.315-.525.105-.21.053-.393-.026-.55-.079-.157-.712-1.716-.975-2.348-.256-.615-.517-.532-.712-.542-.184-.01-.395-.01-.605-.01-.21 0-.552.079-.841.393-.29.314-1.104 1.077-1.104 2.628 0 1.551 1.13 3.048 1.288 3.258.157.21 2.222 3.393 5.385 4.757.753.324 1.34.518 1.8.662.756.24 1.443.207 1.987.126.607-.09 1.858-.76 2.12-1.457.264-.697.264-1.293.184-1.42-.079-.126-.29-.21-.604-.367z" />
      </svg>
    </a>
  );
}
