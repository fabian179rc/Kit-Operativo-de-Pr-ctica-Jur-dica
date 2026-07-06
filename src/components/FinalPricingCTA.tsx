import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { getCheckoutUrl } from "../utils/checkoutUrl";
export function FinalPricingCTA() {
  return (
    <section className="py-16 md:py-24 bg-[#dcefe7] text-center relative overflow-hidden pt-[30px] pb-[30px]">
      <div className="container mx-auto px-4 max-w-[1100px] relative z-10">
        <span className="inline-block px-6 py-2.5 mb-8 rounded-full bg-[#24504a] text-white font-bold tracking-[0.1em] uppercase text-xs md:text-sm">
          ⚡ Última Oportunidad
        </span>
        <h2 className="text-3xl md:text-5xl font-semibold font-heading text-[#1c3733] mb-6 leading-tight max-w-3xl mx-auto">
          Tus inspecciones merecen un sistema profesional.
        </h2>
        <p className="text-lg md:text-xl text-[#4f6b66] mb-10 max-w-2xl mx-auto">
          Un método claro, repetible y documentado — listo para usar desde hoy.
        </p>

        <motion.a
          href={getCheckoutUrl()}
          whileHover={{
            scale: 1.02,
          }}
          whileTap={{
            scale: 0.98,
          }}
          className="inline-flex items-center justify-center gap-2 md:gap-3 bg-[#c06b52] hover:bg-[#a85944] text-white font-extrabold text-[12px] md:text-xl px-5 md:px-8 py-6 rounded-full shadow-lg shadow-[#c06b52]/30 transition-colors mb-8"
        >
          <span className="text-center whitespace-nowrap">
            🚀 SÍ, QUIERO MI SISTEMA DE INSPECCION
          </span>
          <ArrowRight className="w-5 h-5 md:w-6 md:h-6 flex-shrink-0" />
        </motion.a>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 text-sm md:text-base text-[#4f6b66] font-semibold">
          <span>
            <span aria-hidden="true">⭐⭐⭐⭐⭐</span> 4.9/5 — Reseñas
            verificadas
          </span>
          <span aria-hidden="true" className="hidden sm:inline text-[#a9c9c0]">
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
