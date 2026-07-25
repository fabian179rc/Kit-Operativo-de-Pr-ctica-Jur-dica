import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { getCheckoutUrl } from "../utils/checkoutUrl";
export function FinalPricingCTA() {
  return (
    <section className="py-10 md:py-14 bg-transparent text-[#F3EFE3] text-center relative overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-full bg-[#D4A017]/10 blur-[100px]" />
      </div>
      <div className="container mx-auto px-4 max-w-3xl relative z-10">
        <div className="mb-5">
          <span className="inline-block px-6 py-2.5 rounded-full border border-white/15 bg-[#24352A] text-[#F3EFE3] font-semibold tracking-[0.18em] uppercase text-xs">
            ⚡ Última Oportunidad
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold font-heading text-[#F3EFE3] mb-5 leading-tight">
          Tu consultora merece ser un negocio rentable, no un autoempleo
          agotador.
        </h2>
        <p className="text-lg text-[#A9B39E] mb-8 max-w-2xl mx-auto">
          Un sistema claro, ordenado y probado para crecer con más
          clientes, mejores honorarios y menos caos — listo para usar
          desde hoy.
        </p>

        <div className="bg-[#1E2E22] border border-[#D4A017]/20 rounded-3xl p-6 md:p-7 shadow-lg shadow-black/20 max-w-xl mx-auto mb-6">
          <h3 className="font-bold text-[#A8BB98] mb-2 text-sm md:text-base max-w-xs sm:max-w-none mx-auto">
            Kit Completo: Sistema Maestro para Consultores HyS + 5 Bonos
            GRATIS
          </h3>
          <div className="text-[#A9B39E] line-through mb-2">$74.940 ARS</div>
          <div className="text-4xl font-bold text-[#C97A4A] mb-6">
            $19.990 ARS
          </div>
          <motion.a
            href={getCheckoutUrl()}
            whileHover={{
              scale: 1.02,
            }}
            whileTap={{
              scale: 0.98,
            }}
            className="flex items-center justify-center gap-2 sm:gap-3 w-full bg-[#C97A4A] hover:bg-[#B8683A] text-[#16211A] font-bold text-[11.5px] sm:text-base md:text-lg px-5 py-4 sm:px-6 md:py-5 rounded-full shadow-lg shadow-[#C97A4A]/30 transition-colors mb-4 whitespace-nowrap md:whitespace-normal"
          >
            <span className="text-center">
              🚀 SÍ, QUIERO MI SISTEMA DE CONSULTORA
            </span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0" />
          </motion.a>
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-4 text-sm text-[#A9B39E] font-medium">
          <span>
            <span aria-hidden="true">⭐⭐⭐⭐⭐</span> 4.9/5 — Reseñas
            verificadas
          </span>
          <span aria-hidden="true" className="hidden sm:inline text-white/15">
            |
          </span>
          <span>
            <span aria-hidden="true">🛡️</span> Garantía de 7 Días — Riesgo Cero
          </span>
        </div>
      </div>
    </section>
  );
}
